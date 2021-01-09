import { IRobotReporter, RobotCoordinate, RobotDirection } from '../types/robot';

class RobotReporter implements IRobotReporter {
  private static instance: IRobotReporter;

  private constructor() {}

  public static getInstance(): IRobotReporter {
    if (!RobotReporter.instance) {
      RobotReporter.instance = new RobotReporter();
    }
    return RobotReporter.instance;
  }

  public report(positions: RobotCoordinate, direction: RobotDirection): string {
    // this reporter reports with a comma-separated string (format: X,Y,D)
    return `${Object.values(positions).join(',')},${direction}`;
  }
}

export default RobotReporter;
