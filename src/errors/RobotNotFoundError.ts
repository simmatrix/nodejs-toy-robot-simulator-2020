import BaseError from './BaseError';

class RobotNotFoundError extends BaseError {
  constructor() {
    super('There is no such robots on the table', 'RobotNotFoundError', 404);
  }
}

export default RobotNotFoundError;
