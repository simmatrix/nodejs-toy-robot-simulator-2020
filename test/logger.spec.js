import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

const expect = chai.expect;
chai.should();
chai.use(sinonChai);

import chalk from 'chalk';
import figlet from 'figlet';
import Logger from '../src/utils/logger';

describe('LoggerClass Test', function () {
  const message = 'Lorem Ipsum';

  beforeEach(function () {
    sinon.stub(console);
  });

  afterEach(function () {
    sinon.verifyAndRestore();
  });

  it('should be able to call Logger.log() without any color formatter', function () {
    Logger.log(message);
    expect(console.log).to.be.calledWith(message);
  });

  it('should be able to call Logger.color().log() with a color formatter', function () {
    Logger.color(chalk.yellow).log(message);
    expect(console.log).to.be.calledWith(`\n\n${chalk.yellow(message)}\n`);
  });

  it('should be able to call Logger.info()', function () {
    Logger.info(message);
    expect(console.log).to.be.calledWith(`\n\n${chalk.green(message)}\n`);
  });

  it('should be able to call Logger.success()', function () {
    Logger.success(message);
    expect(console.log).to.be.calledWith(`\n\n${chalk.black.bgGreen(message)}\n`);
  });

  it('should be able to call Logger.error()', function () {
    Logger.error(message);
    expect(console.log).to.be.calledWith(`\n\n${chalk.white.bgRed(message)}\n`);
  });

  it('should be able to call Logger.printTitle()', function () {
    Logger.printTitle(message);
    const expectedOutput = `\n\n${chalk.cyan(
      figlet.textSync(message, {
        font: 'Big',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      })
    )}\n`;
    expect(console.log).to.be.calledWith(expectedOutput);
  });

  it('should be able to call Logger.printTable()', function () {
    const message = { columnA1: 'columnB1', columnA2: 'columnB2' };
    Logger.printTable(message);
    expect(console.table).to.be.calledWith(message);
  });
});
