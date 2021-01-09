import IState from './state';

export default interface IRobot {
  setSafeMode(isSafeMode: boolean): IRobot;
  setDimensions(dimensions: RobotCoordinate): IRobot;
  getSafeMode(): boolean;
  getPosition(): RobotCoordinate;
  getDirection(): RobotDirection;
  report(): string;
  place(placement: string): void | Error;
  move(step?: number): void | Error;
  rotate(rotation: string): void;
  backup(): IState;
  restore(state: IState): void;
}

export interface IRobotMoverComponent {
  move(): RobotCoordinate;
}

export interface IRobotMover {
  move(direction: RobotDirection, positions: RobotCoordinate, dimensions: RobotCoordinate, step?: number): RobotCoordinate;
}

export interface IRobotPlacer {
  parseInput(placement: string): RobotInput | Error;
}

export enum RobotDirection {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
}

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

export type RobotCoordinate = {
  x: number;
  y: number;
};

export type RobotInput = {
  positions: RobotCoordinate;
  direction: RobotDirection;
};
