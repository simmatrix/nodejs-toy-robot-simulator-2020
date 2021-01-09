import chai from 'chai';
import RobotMover from '../src/core/RobotMover';
import { RobotDirection } from '../src/types/robot';

const expect = chai.expect;
chai.should();

describe('RobotMover Test', function () {
  const mover = RobotMover.getInstance();
  const tableDimension = { x: 5, y: 5 };
  const startingPosition = { x: 2, y: 2 };
  const step = 1;

  it('should be able to move 1 step to the north direction', function () {
    const position = mover.move(RobotDirection.NORTH, startingPosition, tableDimension, step);
    expect(position).to.deep.equal({
      x: 2,
      y: 3,
    });
  });

  it('should be able to move 1 step to the south direction', function () {
    const position = mover.move(RobotDirection.SOUTH, startingPosition, tableDimension, step);
    expect(position).to.deep.equal({
      x: 2,
      y: 1,
    });
  });

  it('should be able to move 1 step to the east direction', function () {
    const position = mover.move(RobotDirection.EAST, startingPosition, tableDimension, step);
    expect(position).to.deep.equal({
      x: 3,
      y: 2,
    });
  });

  it('should be able to move 1 step to the west direction', function () {
    const position = mover.move(RobotDirection.WEST, startingPosition, tableDimension, step);
    expect(position).to.deep.equal({
      x: 1,
      y: 2,
    });
  });
});
