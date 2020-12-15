import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const expect = chai.expect;
chai.should();
chai.use(sinonChai);

import Robot, { RobotDirection, RobotRotation } from '../src/core/Robot';

describe('RobotClass Test', function () {
  beforeEach(function () {
    // sinon.stub(console);
  });

  afterEach(function () {
    // sinon.verifyAndRestore();
  });

  describe('General', function () {
    it('should be able to see default safe mode as on', function () {
      const robot = new Robot();
      expect(robot.getSafeMode()).to.be.true;
    });

    it('should be able to turn off the safe mode', function () {
      const robot = new Robot();
      robot.setSafeMode(false);
      expect(robot.getSafeMode()).to.be.false;
    });
  });

  describe('Main', function () {
    const robot = new Robot();

    it('should be able to get the default position', function () {
      expect(robot.getPosition()).to.deep.equal({ x: 0, y: 0 });
    });

    it('should be able to get the default direction', function () {
      expect(robot.getDirection()).to.equal(RobotDirection.NORTH);
    });

    it('should be able to parse user input', function () {
      const placement = '2,3,SOUTH';
      const parsedInput = robot.parseInput(placement);
      expect(parsedInput.positions).to.deep.equal({ x: 2, y: 3 });
      expect(parsedInput.direction).to.equal(RobotDirection.SOUTH);
    });

    it('should be throwing an error when giving insufficient placement info', function () {
      const placement = '2,3';
      expect(() => robot.parseInput(placement)).to.throw('Please specify both of the positions and direction');
    });

    it('should be throwing an error when giving incorrect placement info', function () {
      const placement = '2,3,WEEEEEEEST';
      expect(() => robot.parseInput(placement)).to.throw('Please specify a valid positions and direction');
    });

    it('report() - should be able to report the default position and direction in the required output format', function () {
      expect(robot.report()).to.equal('0,0,NORTH');
    });

    it('place() - should be able to place at a specific coordinate', function () {
      const placement = '1,2,EAST';
      robot.place(placement);
      expect(robot.report()).to.equal(placement);
    });

    it('move() - given it is now at the position of 0,0 and facing NORTH, should be able to move 2 steps up', function () {
      const initialPlacement = '0,0,NORTH';
      const newPlacement = '0,2,NORTH';
      robot.place(initialPlacement);
      robot.move(2);
      expect(robot.report()).to.equal(newPlacement);
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
  });

  describe('History', function () {
    it('should be able to backup the current state', function () {});

    it('should be able to restore to the previous state', function () {});
  });
});
