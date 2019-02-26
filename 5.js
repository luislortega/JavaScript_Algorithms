/**
 * @author Luis Gerardo Leon Ortega
 * Algorithm to get the factorial of a n number
 * Recursive and Non recursive
 */

console.log(factorial(3))
console.log(nonRecursiveFactorial(3))
console.log(personalNonRecursiveSolution(3))

/**
 * Recursive solution for factorial number 
 */
function factorial(n){
  if (n == 0){
    return 1
  }
  return n * factorial(n-1)
}

/**
 * Non recursive solution 
 */
function nonRecursiveFactorial(n){
  if (n < 3){
    return n
  }else{
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact
  }
}

/**
 * Personal non recursive solution
 */
function personalNonRecursiveSolution(n){
  if(n < 3){
    return n
  }else{
    for (let i = n-1; i > 0; i--) {
      n *= i;
    }
    return n;
  }
}

/*
QA Returns.

f(n) = !n
f(0) = 0
f(1) = 1 
f(2) = 2 * 1
f(3) = 3 * 2 * 1
f(4) = 4 * 3 * 2 * 1 
*/