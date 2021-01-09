import { IRobotMoverComponent, RobotCoordinate, RobotDirection } from "../../types/robot";

abstract class RobotMoverAbstract implements IRobotMoverComponent {
  protected direction: RobotDirection;
  protected positions: RobotCoordinate;
  protected dimensions: RobotCoordinate;
  protected step: number;

  constructor(direction: RobotDirection, positions: RobotCoordinate, dimensions: RobotCoordinate, step?: number) {
    this.direction = direction;
    this.positions = positions;
    this.dimensions = dimensions;
    this.step = step || 1;
  }

  public abstract move(): RobotCoordinate;

  public getNewPosition(): RobotCoordinate {
    return this.move();
  }
}

export default RobotMoverAbstract;