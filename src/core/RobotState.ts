import RobotRequiredError from '../errors/RobotRequiredError';
import IRobot from '../types/robot';
import IState, { State } from '../types/state';

class RobotState implements IState {
  protected state: State;
  protected date: string;

  constructor(robot: IRobot) {
    if (!robot) throw new RobotRequiredError();
    this.state = {
      positions: robot.getPosition(),
      direction: robot.getDirection(),
    };
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  getState(): State {
    return this.state;
  }

  getDate(): string {
    return this.date;
  }
}

export default RobotState;
