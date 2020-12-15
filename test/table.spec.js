import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const expect = chai.expect;
chai.should();
chai.use(sinonChai);

import Table from '../src/core/Table';
import Robot from '../src/core/Robot';

describe('TableClass Test', function () {
  it('should be able to place 1 robot at a specific location', function () {
    const table = new Table({ x: 5, y: 5 });
    const robot = new Robot();
    const placement = '1,2,NORTH';
    table.addRobot(robot).at(placement);
    expect(table.getRobot().report()).to.be.equal(placement);
  });

  it('should be able to place 2 robots at 2 specific locations', function () {
    const table = new Table({ x: 5, y: 5 });
    const robot1 = new Robot();
    const robot2 = new Robot();
    const placement1 = '1,2,NORTH';
    const placement2 = '3,4,SOUTH';
    table.addRobot(robot1).at(placement1);
    table.addRobot(robot2).at(placement2);
    expect(table.getRobot(1).report()).to.be.equal(placement1);
    expect(table.getRobot(2).report()).to.be.equal(placement2);
  });

  it('should be able to place an existing robot at a new location', function () {
    const table = new Table({ x: 5, y: 5 });
    const robot = new Robot();
    const initialPlacement = '1,2,NORTH';
    const newPlacement = '3,4,NORTH';
    table.addRobot(robot).at(initialPlacement);
    table.place(table.getRobot()).at(newPlacement);
    expect(table.getRobot().report()).to.be.equal(newPlacement);
  });
});
