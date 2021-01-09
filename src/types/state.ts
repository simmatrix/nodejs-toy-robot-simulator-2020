import { RobotDirection, RobotCoordinate } from "./robot";

export default interface IState {
  getState(): State;
  getDate(): string;
}

export type State = {
  positions: RobotCoordinate,
  direction: RobotDirection
}