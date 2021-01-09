import chai from 'chai';

const expect = chai.expect;
chai.should();

import { RobotDirection, RobotRotation } from '../src/types/robot';
import RobotRotater from '../src/core/RobotRotater';

describe('RobotRotaterClass Test', function () {
  const rotater = RobotRotater.getInstance();
  const currentDirection = RobotDirection.NORTH;

  it('should be able to rotate to the right', function () {
    const newDirection = rotater.rotate(currentDirection, RobotRotation.RIGHT);
    expect(newDirection).to.equal(RobotDirection.EAST);
  });

  it('should be able to rotate to the left', function () {
    const newDirection = rotater.rotate(currentDirection, RobotRotation.LEFT);
    expect(newDirection).to.equal(RobotDirection.WEST);
  });
});
