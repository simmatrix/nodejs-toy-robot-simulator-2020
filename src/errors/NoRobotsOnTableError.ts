import BaseError from './BaseError';

class NoRobotsOnTableError extends BaseError {
  constructor() {
    super('There is no robots on the table', 'NoRobotsOnTableError', 500);
  }
}

export default NoRobotsOnTableError;
