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

  undo() {
    if (!this.states.length) return;
    const lastState = this.states.pop();    
    if (lastState) this.robot.restore(lastState);
  }

  getAll() {
    return this.states;
  }

  isEmpty() {
    return this.states.length === 0
  }
}

export default RobotHistory;
