import BaseError from './BaseError';

class NoHistoryError extends BaseError {
  constructor() {
    super('Unable to under as there is no histories available', 'NoHistoryError', 400);
  }
}

export default NoHistoryError;
  ;
