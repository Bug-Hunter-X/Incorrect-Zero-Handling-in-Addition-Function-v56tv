function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: Should handle only one parameter being 0
  }
  return a + b;
}

console.log(foo(0, 5)); // Outputs 0 (correct)
console.log(foo(5, 0)); // Outputs 0 (correct)
console.log(foo(0, 0)); // Outputs 0 (incorrect, should throw an error or handle this case differently)
console.log(foo(5, 5)); // Outputs 10 (correct)