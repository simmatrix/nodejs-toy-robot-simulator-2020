class Robot {
  private isSafeMode: boolean = true;

  setSafeMode(isSafeMode: boolean) {
    this.isSafeMode = isSafeMode;
  }

  getSafeMode() {
    return this.isSafeMode;
  }
}

export default Robot;
