import NoRobotsOnTableError from '../errors/NoRobotsOnTableError';
import RobotNotFoundError from '../errors/RobotNotFoundError';
import IRobot, { RobotCoordinate } from '../types/robot';

class Table {
  private dimensions: RobotCoordinate = { x: 5, y: 5 };
  private isSafeMode: boolean = true;

  private robots: IRobot[] = [];
  private currentRobot: IRobot;

  constructor({ dimensions, isSafeMode }: { dimensions: RobotCoordinate; isSafeMode: boolean }) {
    this.dimensions = dimensions;
    this.isSafeMode = isSafeMode;
    this.currentRobot = this.robots[this.robots.length - 1];
  }

  place(robot?: IRobot) {
    if (robot) this.currentRobot = robot;
    return this;
  }

  at(comamnd: string) {
    this.currentRobot.setDimensions(this.dimensions).setSafeMode(this.isSafeMode).place(comamnd);
  }

  addRobot(robot: IRobot) {
    this.robots.push(robot);
    this.currentRobot = robot;
    return this;
  }

  getRobot(number?: number): IRobot {
    if (!this.robots || !this.robots.length) throw new NoRobotsOnTableError();
    if (number && (number < 0 || number > this.robots.length)) throw new RobotNotFoundError();
    if (number) return this.robots[number - 1];
    return this.currentRobot;
  }
}

export default Table;
