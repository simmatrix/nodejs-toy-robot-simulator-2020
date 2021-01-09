import ForbiddenMoveError from "../../errors/ForbiddenMoveError";
import { IRobotMoverComponent, RobotCoordinate } from "../../types/robot";
import RobotMoverAbstract from "./RobotMoverAbstract";

class RobotMoverSouth extends RobotMoverAbstract implements IRobotMoverComponent {
  public move(): RobotCoordinate {
    const positionY = this.positions.y - this.step;
    if (positionY < 0) throw new ForbiddenMoveError();
    return { ...this.positions, y: positionY }
  }
}

export default RobotMoverSouth;