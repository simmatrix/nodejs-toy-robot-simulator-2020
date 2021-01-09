import IState from '../../types/state';
import IRobot, { IRobotMover, IRobotPlacer, RobotCoordinate, RobotDirection, RobotRotation, RobotInput } from '../../types/robot';
import RobotState from '../RobotState';

class Robot implements IRobot {
  protected mover: IRobotMover;
  protected placer: IRobotPlacer;

  private isSafeMode: boolean = true;
  private positions: RobotCoordinate = { x: 0, y: 0 };
  private direction: RobotDirection = RobotDirection.NORTH;
  private dimensions: RobotCoordinate = { x: 5, y: 5 };

  constructor(mover: IRobotMover, placer: IRobotPlacer) {
    this.mover = mover;
    this.placer = placer;
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

  report(): string {
    return `${Object.values(this.getPosition()).join(',')},${this.getDirection()}`;
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
      this.positions = this.mover.move(this.direction, this.positions, this.dimensions, step);
    } catch (error) {
      throw error;
    }
  }

  rotate(rotation: string): void {
    const directions = [RobotDirection.NORTH, RobotDirection.EAST, RobotDirection.SOUTH, RobotDirection.WEST];
    let currentDirectionIndex = directions.indexOf(this.direction);

    switch (rotation) {
      case RobotRotation.LEFT:
        currentDirectionIndex--;
        break;
      case RobotRotation.RIGHT:
        currentDirectionIndex++;
        break;
    }

    if (currentDirectionIndex < 0) {
      this.direction = RobotDirection.WEST;
    } else if (currentDirectionIndex > 3) {
      this.direction = RobotDirection.NORTH;
    } else {
      this.direction = directions[currentDirectionIndex];
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
