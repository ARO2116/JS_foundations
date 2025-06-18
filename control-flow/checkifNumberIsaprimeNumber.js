// write a function isprime(num) that returns true if num is a prime Number, othrwise false

function isPrime(num) {
    if (num < 2) return false;
    
    for (let i = 2; i < num/2 ; i++) {
    if (num % i === 0) return false; 
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(1)); 