/**
 * @author Luis Gerardo Leon Ortega
 * Algorithm of fibonacci recursive solution and Non recursive solution
 */

let x = 6
console.log(fib(x))
console.log(nonRecursiveFib(x))

/**
 * Recursive solution for fibonacci
 */
function fib(n){
  if(n < 2){ //Caso base
    return n;
  }
  return fib(n-1)+fib(n-2); //Caso recursivo
}

/**
 * Non recursive solution 
 */
function nonRecursiveFib(n){
  if(n < 3){
    return n;
  }else{
    let x = 0, y = 1, solucion
    for (let i = 1; i < n; i++) {
      solucion =  x + y
      /* intercambio los valores */
      x = y
      y = solucion      
    }
    return solucion;
  }
}
