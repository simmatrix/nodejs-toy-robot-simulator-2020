import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const expect = chai.expect;
chai.should();
chai.use(sinonChai);

import RobotHistory from '../src/core/RobotHistory';
import Robot from '../src/core/Robot';
import { RobotRotation } from '../src/types/robot';

describe('RobotHistoryClass Test', function () {
  const robot = new Robot();
  const history = new RobotHistory(robot);

  it('should be able to see isEmpty as true at the beginning', function () {
    // in the above tests, we called "history.backup()" 3 times, and we undo 1 time
    // so there should be 2 states left in the history stack
    expect(history.isEmpty()).to.be.true;
  });

  it('should be able to backup the current state', function () {
    history.backup();
    const histories = history.getAll();
    expect(histories[0].state).to.deep.equal({
      positions: robot.getPosition(),
      direction: robot.getDirection(),
    });
  });

  it('should be able to undo and restore the current state', function () {
    robot.place('1,1,NORTH');

    history.backup();
    robot.move(2); // will go to 1,3,NORTH <-- when undo, should come back to here

    history.backup();
    robot.rotate(RobotRotation.RIGHT); // will go to 1,3,EAST

    history.undo();
    expect(robot.report()).to.equal('1,3,NORTH');
  });

  it('should be able to have the correct total number of backup states', function () {
    const histories = history.getAll();
    // in the above tests, we called "history.backup()" 3 times, and we undo 1 time
    // so there should be 2 states left in the history stack
    expect(histories.length).to.deep.equal(2);
  });
});
