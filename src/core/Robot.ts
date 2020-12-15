import IncorrectInfoError from '../errors/IncorrectInfoError';
import InsufficientInfoError from '../errors/InsufficientInfoError';

export enum RobotDirection {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
}

export enum RobotRotation {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

type Coordinate = {
  x: number;
  y: number;
};

class Robot {
  private isSafeMode: boolean = true;
  private positions: Coordinate = { x: 0, y: 0 };
  private direction: RobotDirection = RobotDirection.NORTH;
  private dimensions: Coordinate = { x: 5, y: 5 };

  setSafeMode(isSafeMode: boolean) {
    this.isSafeMode = isSafeMode;
  }

  setDimensions(dimensions: Coordinate = { x: 5, y: 5 }) {
    this.dimensions = dimensions;
  }

  getSafeMode() {
    return this.isSafeMode;
  }

  getPosition() {
    return this.positions;
  }

  getDirection() {
    return this.direction;
  }

  report() {
    return `${Object.values(this.getPosition()).join(',')},${this.getDirection()}`;
  }

  parseInput(placement: string): { positions: Coordinate; direction: RobotDirection } | Error {
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
        positions: { x: parseInt(_placement[0]), y: parseInt(_placement[1]) } as Coordinate,
        direction: _placement[2] as RobotDirection,
      };
    } catch (error) {
      throw error;
    }
  }

  place(placement: string) {
    try {
      const parsedInput = this.parseInput(placement) as { positions: Coordinate; direction: RobotDirection };
      this.positions = parsedInput.positions;
      this.direction = parsedInput.direction;
    } catch (error) {
      throw error;
    }
  }

  move(step: number) {
    let newPositionY = 0;
    let newPositionX = 0;

    switch (this.direction) {
      case RobotDirection.NORTH:
        newPositionY = this.positions.y + step;
        if (newPositionY > this.dimensions.y) newPositionY = this.dimensions.y;
        this.positions = { ...this.positions, y: newPositionY };
        break;
      case RobotDirection.SOUTH:
        newPositionY = this.positions.y - step;
        if (newPositionY < 0) newPositionY = 0;
        this.positions = { ...this.positions, y: newPositionY };
        break;
      case RobotDirection.EAST:
        newPositionX = this.positions.x + step;
        if (newPositionX > this.dimensions.x) newPositionX = this.dimensions.x;
        this.positions = { ...this.positions, x: newPositionX };
        break;
      case RobotDirection.WEST:
        newPositionX = this.positions.x - step;
        if (newPositionX < 0) newPositionX = 0;
        this.positions = { ...this.positions, x: newPositionX };
        break;
      default:
        throw new IncorrectInfoError();
    }
  }

  rotate(rotation: string) {
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
}

export default Robot;
