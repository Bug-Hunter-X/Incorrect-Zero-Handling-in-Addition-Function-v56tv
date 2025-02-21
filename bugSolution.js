function foo(a, b) {
  if (a === 0 && b === 0) {
    throw new Error("Both parameters cannot be zero");
  } else if (a === 0 || b === 0) {
    return (a === 0 ? b : a); // return non-zero parameter
  }
  return a + b;
}

console.log(foo(0, 5)); // Outputs 5
console.log(foo(5, 0)); // Outputs 5
console.log(foo(0, 0)); // Throws an error
console.log(foo(5, 5)); // Outputs 10