import chai from 'chai';
import { Console } from 'console';
import RobotMover from '../src/core/RobotMover';
import { RobotDirection } from '../src/types/robot';

const expect = chai.expect;
chai.should();

describe('RobotMoverClass Test', function () {
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

  it('should be able to throw an error when moving out of table facing NORTH', function () {
    const position = { x: 2, y: 4 };
    expect(() => mover.move(RobotDirection.NORTH, position, tableDimension, step)).to.throw(
      'You cannot place at this coordinate as it will make your robot to fall off from the table!'
    );
  });

  it('should be able to throw an error when moving out of table facing EAST', function () {
    const position = { x: 4, y: 2 };
    expect(() => mover.move(RobotDirection.EAST, position, tableDimension, step)).to.throw(
      'You cannot place at this coordinate as it will make your robot to fall off from the table!'
    );
  });

  it('should be able to throw an error when moving out of table facing SOUTH', function () {
    const position = { x: 2, y: 0 };
    expect(() => mover.move(RobotDirection.SOUTH, position, tableDimension, step)).to.throw(
      'You cannot place at this coordinate as it will make your robot to fall off from the table!'
    );
  });

  it('should be able to throw an error when moving out of table facing WEST', function () {
    const position = { x: 0, y: 2 };
    expect(() => mover.move(RobotDirection.WEST, position, tableDimension, step)).to.throw(
      'You cannot place at this coordinate as it will make your robot to fall off from the table!'
    );
  });

  it('should be able to throw an error when giving an invalid direction', function () {
    const direction = 'SOUTHWEST';
    const position = { x: 0, y: 2 };
    expect(() => mover.move(direction, position, tableDimension, step)).to.throw(
      'Please specify a valid positions and direction'
    );
  });
});
