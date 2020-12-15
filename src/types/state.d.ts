import { RobotDirection } from "../core/Robot";
import { Coordinate } from "./coordinate";

export default interface IState {
  getState(): State;
  getDate(): string;
}

export type State = {
  positions: Coordinate,
  direction: RobotDirection
}