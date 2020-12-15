import BaseError from './BaseError';

class ForbiddenMoveError extends BaseError {
  constructor() {
    super('You cannot place at this coordinate as it will make your robot to fall off from the table!', 'ForbiddenMoveError', 400);
  }
}

export default ForbiddenMoveError;
  ;
