import { IRobotRotater, RobotDirection, RobotRotation } from '../types/robot';

class RobotRotater implements IRobotRotater {
  private static instance: IRobotRotater;

  private constructor() {}

  public static getInstance(): IRobotRotater {
    if (!RobotRotater.instance) {
      RobotRotater.instance = new RobotRotater();
    }
    return RobotRotater.instance;
  }

  public rotate(currentDirection: RobotDirection, rotation: RobotRotation): RobotDirection | Error {
    try {
      const directions = [RobotDirection.NORTH, RobotDirection.EAST, RobotDirection.SOUTH, RobotDirection.WEST];
      let currentDirectionIndex = directions.indexOf(currentDirection);

      switch (rotation) {
        case RobotRotation.LEFT:
          currentDirectionIndex--;
          break;
        case RobotRotation.RIGHT:
          currentDirectionIndex++;
          break;
      }

      if (currentDirectionIndex < 0) {
        return RobotDirection.WEST;
      } else if (currentDirectionIndex > 3) {
        return RobotDirection.NORTH;
      } else {
        return directions[currentDirectionIndex];
      }
    } catch (error) {
      throw error;
    }
  }
}

export default RobotRotater;
