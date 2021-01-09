import Robot from ".";
import IRobot, { IRobotMover, IRobotPlacer, IRobotReporter, IRobotRotater } from "../../types/robot";
import RobotMover from "../RobotMover";
import RobotPlacer from "../RobotPlacer";
import RobotReporter from "../RobotReporter";
import RobotRotater from "../RobotRotater";

const robotFactory: () => IRobot = () => {
  const mover: IRobotMover = RobotMover.getInstance();
  const placer: IRobotPlacer = RobotPlacer.getInstance();
  const rotater: IRobotRotater = RobotRotater.getInstance();
  const reporter: IRobotReporter = RobotReporter.getInstance();
  const robot: IRobot = new Robot(mover, placer, rotater, reporter);
  return robot;
};

export default robotFactory;