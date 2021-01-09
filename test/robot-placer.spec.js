import chai from 'chai';

const expect = chai.expect;
chai.should();

import { RobotDirection } from '../src/types/robot';
import RobotPlacer from '../src/core/RobotPlacer';

describe('RobotPlacerClass Test', function () {
  const placer = RobotPlacer.getInstance();

  it('should be able to parse user input', function () {
    const placement = '2,3,SOUTH';
    const parsedInput = placer.parseInput(placement);
    expect(parsedInput.positions).to.deep.equal({ x: 2, y: 3 });
    expect(parsedInput.direction).to.equal(RobotDirection.SOUTH);
  });

  it('should be throwing an error when giving insufficient placement info', function () {
    const placement = '2,3';
    expect(() => placer.parseInput(placement)).to.throw('Please specify both of the positions and direction');
  });

  it('should be throwing an error when giving incorrect placement info', function () {
    const placement = '2,3,WEEEEEEEST';
    expect(() => placer.parseInput(placement)).to.throw('Please specify a valid positions and direction');
  });
});
