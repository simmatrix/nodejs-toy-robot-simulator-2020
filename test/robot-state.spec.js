import chai from 'chai';

const expect = chai.expect;
chai.should();

import RobotState from '../src/core/RobotState';
import robotFactory from '../src/core/Robot/factory';

describe('RobotStateClass Test', function () {
  it('should be able to get the current state', function () {
    const robot = robotFactory();
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
