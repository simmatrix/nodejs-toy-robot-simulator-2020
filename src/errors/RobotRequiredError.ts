import BaseError from './BaseError';

class RobotRequiredError extends BaseError {
  constructor() {
    super('Please provide a robot', 'RobotRequiredError', 404);
  }
}

export default RobotRequiredError;
