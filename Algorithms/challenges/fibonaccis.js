// return the Nth fibonacci value

// O(N) time and space complexity
const fibonacci = n => {
  const fibs = new Array(n + 1);
  fibs[0] = 0;
  fibs[1] = 1;

  for (let i = 2; i <= n; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2];
  }

  return fibs[n];
};

// O(N) time and O(1) space complexity
const fibo = n => {
  const fibs = [0, 1];
  if (n < 2) return fibs[n];

  for (let i = 2; i <= n; i++) {
      const next = fibs[0] + fibs[1];
      fibs[0] = fibs[1];
      fibs[1] = next;
  }
  
  return fibs[1];
}

// recursive
const fib = n => {
  if (n < 1) return 0;
  if (n === 1) return 1;

  return fib(n-1) + fib(n-2);
};

console.log(fib(5));
console.log(fibo(8));
console.log(fibonacci(13));