//1,1,2,3,5,8
//first fib = 1 ,. second fib =1
//print fib until n starting from 1

function fibonacci(n) {
  if (n == 1 || n == 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));
