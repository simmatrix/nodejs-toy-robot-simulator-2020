import IState from '../../types/state';
import IRobot, { IRobotMover, IRobotPlacer, RobotCoordinate, RobotDirection, RobotInput, IRobotRotater, RobotRotation, IRobotReporter } from '../../types/robot';
import RobotState from '../RobotState';

class Robot implements IRobot {
  private mover: IRobotMover;
  private placer: IRobotPlacer;
  private rotater: IRobotRotater;
  private reporter: IRobotReporter;

  private isSafeMode: boolean = true;
  private positions: RobotCoordinate = { x: 0, y: 0 };
  private direction: RobotDirection = RobotDirection.NORTH;
  private dimensions: RobotCoordinate = { x: 5, y: 5 };

  constructor(mover: IRobotMover, placer: IRobotPlacer, rotater: IRobotRotater, reporter: IRobotReporter) {
    this.mover = mover;
    this.placer = placer;
    this.rotater = rotater;
    this.reporter = reporter;
  }

  setSafeMode(isSafeMode: boolean): IRobot {
    this.isSafeMode = isSafeMode;
    return this;
  }

  setDimensions(dimensions: RobotCoordinate = { x: 5, y: 5 }): IRobot {
    this.dimensions = dimensions;
    return this;
  }

  getSafeMode(): boolean {
    return this.isSafeMode;
  }

  getPosition(): RobotCoordinate {
    return this.positions;
  }

  getDirection(): RobotDirection {
    return this.direction;
  }

  report(): string | Error {
    try {
      return this.reporter.report(this.positions, this.direction);
    } catch (error) {
      throw error;
    }
  }

  place(placement: string): void | Error {
    try {
      const parsedInput = this.placer.parseInput(placement) as RobotInput;
      this.positions = parsedInput.positions;
      this.direction = parsedInput.direction;
    } catch (error) {
      throw error;
    }
  }

  move(step?: number): void | Error {
    try {
      this.positions = this.mover.move(this.direction, this.positions, this.dimensions, step) as RobotCoordinate;
    } catch (error) {
      throw error;
    }
  }

  rotate(rotation: RobotRotation): void | Error {
    try {
      this.direction = this.rotater.rotate(this.direction, rotation) as RobotDirection;
    } catch (error) {
      throw error;
    }
  }

  backup(): IState {
    return new RobotState(this);
  }

  restore(state: IState): void {
    const _state = state.getState();
    this.positions = _state.positions;
    this.direction = _state.direction;
  }
}

export default Robot;
