import chai from 'chai';
import RobotReporter from '../src/core/RobotReporter';
import { RobotDirection } from '../src/types/robot';

const expect = chai.expect;
chai.should();

describe('RobotReporterClass Test', function () {
  const reporter = RobotReporter.getInstance();
  const currentPositions = { x: 3, y: 4 };
  const currentDirection = RobotDirection.NORTH;

  it('should be able to give a correct report', function () {
    const report = reporter.report(currentPositions, currentDirection);
    expect(report).to.equal('3,4,NORTH');
  });
});
