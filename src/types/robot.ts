import IState from './state';

export default interface IRobot {
  setSafeMode(isSafeMode: boolean): IRobot;
  setDimensions(dimensions: RobotCoordinate): IRobot;
  getSafeMode(): boolean;
  getPosition(): RobotCoordinate;
  getDirection(): RobotDirection;
  getDimensions(): RobotCoordinate;
  report(): string | Error;
  place(placement: string): void | Error;
  move(step?: number): void | Error;
  rotate(rotation: RobotRotation): void | Error;
  backup(): IState;
  restore(state: IState): void;
}

export interface IRobotMoverComponent {
  move(): RobotCoordinate;
  getNewPosition(): RobotCoordinate;
}

export interface IRobotMover {
  move(direction: RobotDirection, positions: RobotCoordinate, dimensions: RobotCoordinate, step?: number): RobotCoordinate | Error;
}

export interface IRobotPlacer {
  parseInput(placement: string): RobotInput | Error;
}

export interface IRobotRotater {
  rotate(currentDirection: RobotDirection, rotation: RobotRotation): RobotDirection | Error;
}

export interface IRobotReporter {
  report(positions: RobotCoordinate, direction: RobotDirection): string | Error;
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
