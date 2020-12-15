import IState from '../types/state';
import Robot from './Robot';

class RobotHistory {
  protected states: IState[] = [];
  protected robot: Robot;

  constructor(robot: Robot) {
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
