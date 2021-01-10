import NoHistoryError from '../errors/NoHistoryError';
import IRobot from '../types/robot';
import IState from '../types/state';

class RobotHistory {
  protected states: IState[] = [];
  protected robot: IRobot;

  constructor(robot: IRobot) {
    this.robot = robot;
  }

  backup() {
    this.states.push(this.robot.backup());
  }

  undo(): void | Error {
    if (!this.states.length) throw new NoHistoryError();;
    const lastState = this.states.pop() as IState;
    this.robot.restore(lastState);
  }

  getAll() {
    return this.states;
  }

  isEmpty() {
    return this.states.length === 0
  }
}

export default RobotHistory;
