import Robot from ".";
import IRobot from "../../types/robot";
import RobotMover from "../RobotMover";
import RobotPlacer from "../RobotPlacer";

const robotFactory: () => IRobot = () => {
  const mover = RobotMover.getInstance();
  const placer = RobotPlacer.getInstance();
  const robot: IRobot = new Robot(mover, placer);
  return robot;
};

export default robotFactory;