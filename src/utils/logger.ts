import chalk, { Chalk } from 'chalk';
import figlet from 'figlet';

class Logger {
  static _color: Chalk | null = null;

  static color(color: Chalk) {
    Logger._color = color;
    return this;
  }

  static log(message: string) {
    if (!Logger._color) {
      console.log(message);
      return;
    }
    console.log(`\n\n${Logger._color(message)}\n`);
  }

  static info(message: string) {
    console.log(`\n\n${chalk.green(message)}\n`);
  }

  static success(message: string) {
    console.log(`\n\n${chalk.black.bgGreen(message)}\n`);
  }

  static error(message: string) {
    console.log(`\n\n${chalk.white.bgRed(message)}\n`);
  }

  static printTitle(message: string) {
    Logger._color = chalk.cyan;
    Logger.log(
      figlet.textSync(message, {
        font: 'Big',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      })
    );
  }

  static printTable(columns: object) {
    console.table(columns);
  }
}

export default Logger;
