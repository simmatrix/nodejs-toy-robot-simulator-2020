import IncorrectInfoError from "../errors/IncorrectInfoError";
import InsufficientInfoError from "../errors/InsufficientInfoError";
import { IRobotPlacer, RobotCoordinate, RobotDirection, RobotInput } from "../types/robot";

class RobotPlacer implements IRobotPlacer {
  private static instance: IRobotPlacer;

  private constructor () {}

  public static getInstance(): IRobotPlacer {
    if (!RobotPlacer.instance) {
      RobotPlacer.instance = new RobotPlacer();
    }
    return RobotPlacer.instance;
  }

  public parseInput(placement: string): RobotInput | Error {
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
}

export default RobotPlacer;