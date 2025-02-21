# Incorrect Zero Handling in Addition Function

This repository demonstrates a common error in JavaScript: incorrect handling of zero values as parameters in a function.

The `foo` function is designed to add two numbers. However, its handling of zero parameters is flawed. The function incorrectly returns 0 when both parameters are 0.  A more robust solution would either explicitly throw an error or provide a more meaningful result in this edge case.

The `bug.js` file contains the code with the bug. The `bugSolution.js` file offers a corrected version.

## How to run

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run the code to observe the outputs.

## Bug vs Solution

The difference is in how the function handles the edge case where both parameters are 0. The solution provides a more robust and meaningful response to this unexpected input.