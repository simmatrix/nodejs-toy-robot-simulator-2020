import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const expect = chai.expect;
chai.should();
chai.use(sinonChai);

import Robot from '../src/core/Robot';

describe('RobotClass Test', function () {
  beforeEach(function () {
    // sinon.stub(console);
  });

  afterEach(function () {
    // sinon.verifyAndRestore();
  });

  it('should be able to see default safe mode as on', function () {
    const robot = new Robot();
    expect(robot.getSafeMode()).to.be.true;
  });

  it('should be able to turn off the safe mode', function () {
    const robot = new Robot();
    robot.setSafeMode(false);
    expect(robot.getSafeMode()).to.be.false;
  })
});
