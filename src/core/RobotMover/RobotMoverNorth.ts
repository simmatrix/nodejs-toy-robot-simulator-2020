import ForbiddenMoveError from "../../errors/ForbiddenMoveError";
import { IRobotMoverComponent, RobotCoordinate } from "../../types/robot";
import RobotMoverAbstract from "./RobotMoverAbstract";

class RobotMoverNorth extends RobotMoverAbstract implements IRobotMoverComponent {
  public move(): RobotCoordinate {
    const positionY = this.positions.y + this.step;
    if (positionY >= this.dimensions.y) throw new ForbiddenMoveError();
    return { ...this.positions, y: positionY }
  }
}

export default RobotMoverNorth;