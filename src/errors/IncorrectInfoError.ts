import BaseError from './BaseError';

class IncorrectInfoError extends BaseError {
  constructor() {
    super('Please specify a valid positions and direction', 'IncorrectInfoError', 422);
  }
}

export default IncorrectInfoError;
  ;
