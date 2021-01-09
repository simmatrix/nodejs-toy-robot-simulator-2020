import ForbiddenMoveError from '../errors/ForbiddenMoveError';
import IncorrectInfoError from '../errors/IncorrectInfoError';
import InsufficientInfoError from '../errors/InsufficientInfoError';
import IState from '../types/state';
import IRobot, { RobotCoordinate, RobotDirection, RobotRotation } from '../types/robot';
import RobotState from './RobotState';

class Robot implements IRobot {
  private isSafeMode: boolean = true;
  private positions: RobotCoordinate = { x: 0, y: 0 };
  private direction: RobotDirection = RobotDirection.NORTH;
  private dimensions: RobotCoordinate = { x: 5, y: 5 };

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

  parseInput(placement: string): { positions: RobotCoordinate; direction: RobotDirection } | Error {
    try {
      const _placement = placement.split(',').map((p) => p.trim());
      if (_placement.length < 3) throw new InsufficientInfoError();
      if (
        isNaN(parseInt(_placement[0])) ||
        isNaN(parseInt(_placement[0])) ||
        !Object.values(RobotDirection).includes(_placement[2] as RobotDirection)
      )
        throw new IncorrectInfoError();

      return {
        positions: { x: parseInt(_placement[0]), y: parseInt(_placement[1]) } as RobotCoordinate,
        direction: _placement[2] as RobotDirection,
      };
    } catch (error) {
      throw error;
    }
  }

  place(placement: string): void | Error {
    try {
      const parsedInput = this.parseInput(placement) as { positions: RobotCoordinate; direction: RobotDirection };
      this.positions = parsedInput.positions;
      this.direction = parsedInput.direction;
    } catch (error) {
      throw error;
    }
  }

  move(step?: number): void | Error {
    step = step || 1;
    let newPositionY = 0;
    let newPositionX = 0;

    switch (this.direction) {
      case RobotDirection.NORTH:
        newPositionY = this.positions.y + step;
        if (newPositionY >= this.dimensions.y) throw new ForbiddenMoveError();
        this.positions = { ...this.positions, y: newPositionY };
        break;
      case RobotDirection.SOUTH:
        newPositionY = this.positions.y - step;
        if (newPositionY < 0) throw new ForbiddenMoveError();
        this.positions = { ...this.positions, y: newPositionY };
        break;
      case RobotDirection.EAST:
        newPositionX = this.positions.x + step;
        if (newPositionX >= this.dimensions.x) throw new ForbiddenMoveError();
        this.positions = { ...this.positions, x: newPositionX };
        break;
      case RobotDirection.WEST:
        newPositionX = this.positions.x - step;
        if (newPositionX < 0) throw new ForbiddenMoveError();
        this.positions = { ...this.positions, x: newPositionX };
        break;
      default:
        throw new IncorrectInfoError();
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
