# NodeJS Toy Robot Simulator (Updated 2020)

![Toy Robot Screenshot](https://raw.githubusercontent.com/simmatrix/nodejs-toy-robot-simulator-2020/master/program.png)

This is a NodeJS command-line application. You may refer to the full problem statement over [here](https://github.com/simmatrix/nodejs-toy-robot-simulator-2020/blob/master/PROBLEM.md). Below is a GIF demonstrating the whole app. If you prefer the 1-minute video, here's the [link](https://drive.google.com/file/d/1TT7BpymY9uEHx0o9nNTxziuonNfu2q_r/view?usp=sharing).

![Toy Robot Screenshot](https://raw.githubusercontent.com/simmatrix/nodejs-toy-robot-simulator-2020/master/toy-robot-simulator.gif)

# Unit Testing

A screenshot of running `npm test`. While development with TDD, `npm run test:watch` is being run to watch for any file changes in both the core scripts and its associated unit test scripts.

![Toy Robot Screenshot](https://raw.githubusercontent.com/simmatrix/nodejs-toy-robot-simulator-2020/master/testing.png)

# Constraint

Assuming that we would only have 5x5 units of "table" for the toy robot to roam about freely, without falling off.

![Toy Robot Constraint](https://raw.githubusercontent.com/simmatrix/nodejs-toy-robot-simulator/master/toy-robot-grid.png)


# Development Setup

- This is developed with Node v15.3.0 and NPM v7.0.14
- TDD development with `npm run test:watch`
- Run the application with `npm start`
- To plainly run the test scripts `npm test`