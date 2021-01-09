import Robot from ".";
import IRobot from "../../types/robot";
import RobotMover from "../RobotMover";

const robotFactory: () => IRobot = () => {
  const mover = RobotMover.getInstance();
  const robot: IRobot = new Robot(mover);
  return robot;
};

export default robotFactory;