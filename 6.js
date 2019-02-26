/**
 * @author Luis Gerardo Leon Ortega
 * Check if a string is palindrome
 */
var str = "12311"
console.log(isPalindrome(str))
console.log(nonRecursiveIsPalindrome(str))

/** 
 * Recursive solution 
*/
function isPalindrome(cadena){
  if(cadena.length == 1 || cadena.length == 0){
    return true
  }
  if(cadena.charAt(0) == cadena.charAt(cadena.length-1)){
    return isPalindrome(cadena.slice(1, cadena.length-1))
  }
  return false
}

/**
 * nonRecursiveSolution
 */
function nonRecursiveIsPalindrome(cadena){
  let tamano = cadena.length, contador=0
  for (let i = 0; i < tamano; i++) {
    if(cadena.charAt(0) == cadena.charAt(cadena.length-1)){
      cadena = cadena.slice(1, cadena.length-1)
      contador++
    }
  }
  return (tamano == contador)?true:false
}
