import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const expect = chai.expect;
chai.should();
chai.use(sinonChai);

import { RobotDirection, RobotRotation } from '../src/types/robot';
import robotFactory from '../src/core/Robot/factory';
import RobotHistory from '../src/core/RobotHistory';
import RobotReporter from '../src/core/RobotReporter';
import RobotPlacer from '../src/core/RobotPlacer';
import RobotRotater from '../src/core/RobotRotater';

describe('RobotClass Test', function () {
  describe('General', function () {
    const robot = robotFactory();

    it('should be able to see default safe mode as on', function () {
      expect(robot.getSafeMode()).to.be.true;
    });

    it('should be able to turn off the safe mode', function () {
      robot.setSafeMode(false);
      expect(robot.getSafeMode()).to.be.false;
    });

    it('should be able to set dimensions', function () {
      robot.setDimensions();
      expect(robot.getDimensions()).to.deep.equal({ x: 5, y: 5 });
    });
  });

  describe('Main', function () {
    const robot = robotFactory();

    it('should be able to get the default position', function () {
      expect(robot.getPosition()).to.deep.equal({ x: 0, y: 0 });
    });

    it('should be able to get the default direction', function () {
      expect(robot.getDirection()).to.equal(RobotDirection.NORTH);
    });

    it('report() - should be able to report the default position and direction in the required output format', function () {
      expect(robot.report()).to.equal('0,0,NORTH');
    });

    it('report() - should catch a thrown error', function () {
      const clonedReporter = new RobotReporter();
      sinon.stub(clonedReporter, 'report').throws();
      const robot2 = robotFactory({
        reporter: clonedReporter,
      });
      expect(() => robot2.report()).to.throw();
    });

    it('place() - should be able to place at a specific coordinate', function () {
      const placement = '1,2,EAST';
      robot.place(placement);
      expect(robot.report()).to.equal(placement);
    });

    it('place() - should catch a thrown error', function () {
      const clonedPlacer = new RobotPlacer();
      sinon.stub(clonedPlacer, 'parseInput').throws();
      const robot3 = robotFactory({
        placer: clonedPlacer,
      });
      expect(() => robot3.place('0,0,NORTH')).to.throw();
    });

    it('move() - given it is now at the position of 0,0 and facing NORTH, should be able to move 1 step up', function () {
      const initialPlacement = '0,0,NORTH';
      const newPlacement = '0,1,NORTH';
      robot.place(initialPlacement);
      robot.move();
      expect(robot.report()).to.equal(newPlacement);
    });

    it('move() - should throw an error if moving towards the place that will result in falling off from the table', function () {
      const placment = '0,4,NORTH'; // moving on step up will cause it to fell off from table!
      robot.place(placment);
      expect(() => robot.move()).to.throw(
        'You cannot place at this coordinate as it will make your robot to fall off from the table!'
      );
    });

    it('rotate() - given it is now facing NORTH, should be able to rotate to the right to face EAST', function () {
      const initialPlacement = '0,0,NORTH';
      const newPlacement = '0,0,EAST';
      robot.place(initialPlacement);
      robot.rotate(RobotRotation.RIGHT);
      expect(robot.report()).to.equal(newPlacement);
    });

    it('rotate() - given it is now facing NORTH, should be able to rotate twice to the right to face SOUTH', function () {
      const initialPlacement = '0,0,NORTH';
      const newPlacement = '0,0,SOUTH';
      robot.place(initialPlacement);
      robot.rotate(RobotRotation.RIGHT);
      robot.rotate(RobotRotation.RIGHT);
      expect(robot.report()).to.equal(newPlacement);
    });

    it('rotate() - should catch a thrown error', function () {
      const clonedRotater = new RobotRotater();
      sinon.stub(clonedRotater, 'rotate').throws();
      const robot4 = robotFactory({
        rotater: clonedRotater,
      });
      expect(() => robot4.rotate()).to.throw();
    });

    it('backup() - able to generate a backup copy', function () {
      const backupCopy = robot.backup();
      expect(backupCopy.state).to.deep.equal({
        positions: robot.getPosition(),
        direction: robot.getDirection(),
      });
    });

    it('restore() - able to restore the backup copy', function () {
      const initialPlacement = '2,2,NORTH';
      const newPlacement = '2,2,EAST';
      robot.place(initialPlacement);

      const history = new RobotHistory(robot);
      history.backup(); // backing up 2,2,NORTH

      robot.rotate(RobotRotation.RIGHT);
      history.backup(); // backing up 2,2,EAST

      robot.rotate(RobotRotation.RIGHT);

      history.undo();
      expect(robot.report()).to.equal(newPlacement);
    });
  });
});
