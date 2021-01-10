import IncorrectInfoError from '../../errors/IncorrectInfoError';
import { IRobotMover, RobotDirection, RobotCoordinate } from '../../types/robot';
import RobotMoverEast from './RobotMoverEast';
import RobotMoverNorth from './RobotMoverNorth';
import RobotMoverSouth from './RobotMoverSouth';
import RobotMoverWest from './RobotMoverWest';

class RobotMover implements IRobotMover {
  private static instance: IRobotMover;

  private constructor () {}

  public static getInstance(): IRobotMover {
    if (!RobotMover.instance) {
      RobotMover.instance = new RobotMover();
    }
    return RobotMover.instance;
  }

  move (
    direction: RobotDirection,
    positions: RobotCoordinate,
    dimensions: RobotCoordinate,
    step?: number
  ): RobotCoordinate | Error {
    try {
      switch (direction) {
        case RobotDirection.NORTH:
          return new RobotMoverNorth(direction, positions, dimensions, step).getNewPosition();
        case RobotDirection.SOUTH:
          return new RobotMoverSouth(direction, positions, dimensions, step).getNewPosition();
        case RobotDirection.EAST:
          return new RobotMoverEast(direction, positions, dimensions, step).getNewPosition();
        case RobotDirection.WEST:
          return new RobotMoverWest(direction, positions, dimensions, step).getNewPosition();
        default:
          throw new IncorrectInfoError();
      }
    } catch (error) {
      throw error;
    }
  }
}

export default RobotMover;
