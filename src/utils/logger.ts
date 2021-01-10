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
    Logger.newLine(2);
    console.log(chalk.green(message));
    Logger.newLine();
  }

  static success(message: string) {
    Logger.newLine(2);
    console.log(chalk.black.bgGreen(message));
    Logger.newLine();
  }

  static error(message: string) {
    Logger.newLine(2);
    console.log(chalk.white.bgRed(message));
    Logger.newLine();
  }

  static newLine(count?: number) {
    count = count || 1;
    const lines = new Array(count).fill('\n');
    console.log(lines.join(''));
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
