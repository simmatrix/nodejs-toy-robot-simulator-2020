import Robot from ".";
import IRobot, { IRobotMover, IRobotPlacer, IRobotRotater } from "../../types/robot";
import RobotMover from "../RobotMover";
import RobotPlacer from "../RobotPlacer";
import RobotRotater from "../RobotRotater";

const robotFactory: () => IRobot = () => {
  const mover: IRobotMover = RobotMover.getInstance();
  const placer: IRobotPlacer = RobotPlacer.getInstance();
  const rotater: IRobotRotater = RobotRotater.getInstance();
  const robot: IRobot = new Robot(mover, placer, rotater);
  return robot;
};

export default robotFactory;