export function solution() { return getSumOfPrimesBelowTwoMillion() }

function getSumOfPrimesBelowTwoMillion() {
  let sumOfPrimes = 0;
  for (let i = 2; i < 2000000; i++) {
    if (isPrime(i)) {
      sumOfPrimes += i;
    }
  }
  return sumOfPrimes;
}

// Function to check if a number is prime
function isPrime(num: number): boolean {
  for(let i = 2; i * i <= num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num > 1;
}