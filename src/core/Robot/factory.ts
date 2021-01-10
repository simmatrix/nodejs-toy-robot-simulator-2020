import Robot from '.';
import IRobot, { IRobotMover, IRobotPlacer, IRobotReporter, IRobotRotater } from '../../types/robot';
import RobotMover from '../RobotMover';
import RobotPlacer from '../RobotPlacer';
import RobotReporter from '../RobotReporter';
import RobotRotater from '../RobotRotater';

const robotFactory = (options ?: {
  mover: IRobotMover;
  placer: IRobotPlacer;
  rotater: IRobotRotater;
  reporter: IRobotReporter;
}): IRobot => {
  const mover = options?.mover || RobotMover.getInstance();
  const placer = options?.placer || RobotPlacer.getInstance();
  const rotater = options?.rotater || RobotRotater.getInstance();
  const reporter = options?.reporter || RobotReporter.getInstance();
  const robot: IRobot = new Robot(mover, placer, rotater, reporter);
  return robot;
};

export default robotFactory;
