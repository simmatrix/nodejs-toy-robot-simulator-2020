import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const expect = chai.expect;
chai.should();
chai.use(sinonChai);

import RobotState from '../src/core/RobotState';
import Robot from '../src/core/Robot';

describe('RobotStateClass Test', function () {
  it('should be able to get the current state', function () {
    const robot = new Robot();
    const state = new RobotState(robot);
    expect(state.getState()).to.deep.equal({
      positions: robot.getPosition(),
      direction: robot.getDirection(),
    });
  });

  it('should be able to throw an error if no robots is being provided', function () {
    expect(() => new RobotState()).to.throw('Please provide a robot');
  });
});
