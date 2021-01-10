import chai from 'chai';

const expect = chai.expect;
chai.should();

import Table from '../src/core/Table';
import robotFactory from '../src/core/Robot/factory';

describe('TableClass Test', function () {
  it('should be able to place 1 robot at a specific location', function () {
    const table = new Table({
      dimensions: { x: 5, y: 5 },
      isSafeMode: true
    });
    const robot = robotFactory();
    const placement = '1,2,NORTH';
    table.addRobot(robot).at(placement);
    expect(table.getRobot().report()).to.be.equal(placement);
  });

  it('should be able to place 2 robots at 2 specific locations', function () {
    const table = new Table({
      dimensions: { x: 5, y: 5 },
      isSafeMode: true
    });
    const robot1 = robotFactory();
    const robot2 = robotFactory();
    const placement1 = '1,2,NORTH';
    const placement2 = '3,4,SOUTH';
    table.addRobot(robot1).at(placement1);
    table.addRobot(robot2).at(placement2);
    expect(table.getRobot(1).report()).to.be.equal(placement1);
    expect(table.getRobot(2).report()).to.be.equal(placement2);
  });

  it('should be able to place an existing robot at a new location', function () {
    const table = new Table({
      dimensions: { x: 5, y: 5 },
      isSafeMode: true
    });
    const robot = robotFactory();
    const initialPlacement = '1,2,NORTH';
    const newPlacement1 = '3,4,NORTH';
    const newPlacement2 = '2,4,NORTH';
    table.addRobot(robot).at(initialPlacement);

    table.place(table.getRobot()).at(newPlacement1);
    expect(table.getRobot().report()).to.be.equal(newPlacement1);

    table.place().at(newPlacement2);
    expect(table.getRobot().report()).to.be.equal(newPlacement2);
  });
});
