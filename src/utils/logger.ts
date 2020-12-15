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
    console.log(Logger._color(message));
  }

  static info(message: string) {
    console.log(chalk.green(message));
  }

  static success(message: string) {
    console.log(chalk.black.bgGreen(message));
  }

  static error(message: string) {
    console.log(chalk.white.bgRed(message));
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
