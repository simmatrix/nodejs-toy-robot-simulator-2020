import BaseError from './BaseError';

class InsufficientInfoError extends BaseError {
  constructor() {
    super('Please specify both of the positions and direction', 'InsufficientInfoError', 422);
  }
}

export default InsufficientInfoError;
