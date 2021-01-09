import IState from './state';

export default interface IRobot {
  setSafeMode(isSafeMode: boolean): IRobot;
  setDimensions(dimensions: RobotCoordinate): IRobot;
  getSafeMode(): boolean;
  getPosition(): RobotCoordinate;
  getDirection(): RobotDirection;
  report(): string;
  parseInput(placement: string): { positions: RobotCoordinate; direction: RobotDirection } | Error;
  place(placement: string): void | Error;
  move(step?: number): void | Error;
  rotate(rotation: string): void;
  backup(): IState;
  restore(state: IState): void
}

export enum RobotDirection {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
}

export type RobotCoordinate = {
  x: number;
  y: number;
};

export enum RobotRotation {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum RobotCommand {
  PLACE = 'PLACE',
  MOVE = 'MOVE',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  REPORT = 'REPORT',
}