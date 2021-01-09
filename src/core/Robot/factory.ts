import Robot from ".";
import IRobot from "../../types/robot";
import RobotMover from "../RobotMover";
import RobotPlacer from "../RobotPlacer";
import RobotRotater from "../RobotRotater";

const robotFactory: () => IRobot = () => {
  const mover = RobotMover.getInstance();
  const placer = RobotPlacer.getInstance();
  const rotater = RobotRotater.getInstance();
  const robot: IRobot = new Robot(mover, placer, rotater);
  return robot;
};

export default robotFactory;