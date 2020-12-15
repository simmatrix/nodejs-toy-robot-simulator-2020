class BaseError extends Error {
  public status: number;
  public name: string;

  constructor(message: string = '', name: string = 'Error', status: number = 500) {
    super(message);
    this.status = status;
    this.name = name;
  }
}

export default BaseError;
