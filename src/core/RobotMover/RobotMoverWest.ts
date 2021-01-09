import ForbiddenMoveError from "../../errors/ForbiddenMoveError";
import { IRobotMoverComponent, RobotCoordinate } from "../../types/robot";
import RobotMoverAbstract from "./RobotMoverAbstract";

class RobotMoverWest extends RobotMoverAbstract implements IRobotMoverComponent {
  public move(): RobotCoordinate {
    const positionX = this.positions.x - this.step;
    if (positionX < 0) throw new ForbiddenMoveError();
    return { ...this.positions, x: positionX }
  }
}

export default RobotMoverWest;