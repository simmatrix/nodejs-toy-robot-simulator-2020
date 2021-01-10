import chai from 'chai';

const expect = chai.expect;
chai.should();

import RobotState from '../src/core/RobotState';
import robotFactory from '../src/core/Robot/factory';
import { isValidTimestamp } from '../src/utils/regex';

describe('RobotStateClass Test', function () {
  const robot = robotFactory();
  const state = new RobotState(robot);

  it('should be able to get the current state', function () {
    expect(state.getState()).to.deep.equal({
      positions: robot.getPosition(),
      direction: robot.getDirection(),
    });
  });
  
  it('should return a valid timestamp for the creation timestamp of the state', function () {    
    expect(isValidTimestamp(state.getDate())).to.be.true;
  })

  it('should be able to throw an error if no robots is being provided', function () {
    expect(() => new RobotState()).to.throw('Please provide a robot');
  });
});
