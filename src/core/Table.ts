import NoRobotsOnTableError from '../errors/NoRobotsOnTableError';
import RobotNotFoundError from '../errors/RobotNotFoundError';
import { Coordinate } from '../types/coordinate.d';
import Robot from './Robot';

class Table {
  private dimensions: Coordinate = { x: 5, y: 5 };
  private isSafeMode: boolean = true;

  private robots: Robot[] = [];
  private currentRobot: Robot;

  constructor({ dimensions, isSafeMode }: { dimensions: Coordinate; isSafeMode: boolean }) {
    this.dimensions = dimensions;
    this.isSafeMode = isSafeMode;
    this.currentRobot = this.robots[this.robots.length - 1];
  }

  place(robot?: Robot) {
    if (robot) this.currentRobot = robot;
    return this;
  }

  at(comamnd: string) {
    this.currentRobot.setDimensions(this.dimensions).setSafeMode(this.isSafeMode).place(comamnd);
  }

  addRobot(robot: Robot) {
    this.robots.push(robot);
    this.currentRobot = robot;
    return this;
  }

  getRobot(number: number): Robot {
    if (!this.robots || !this.robots.length) throw new NoRobotsOnTableError();
    if (number && (number < 0 || number > this.robots.length)) throw new RobotNotFoundError();
    if (number) return this.robots[number - 1];
    return this.currentRobot;
  }
}

export default Table;
