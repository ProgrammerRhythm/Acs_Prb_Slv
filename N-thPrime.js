function findNthPrime(n) {
    const LIMIT = 7500000;
    const isPrime = new Array(LIMIT).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    const primes = [];
    
    for (let i = 2; i < LIMIT; i++) {
        if (isPrime[i]) {
            primes.push(i); 
            for (let j = i * 2; j < LIMIT; j += i) {
                isPrime[j] = false;
            }
        }
       
        if (primes.length === n) {
            break;
        }
    }
    
    console.log(primes[n - 1]); 
}

const n = 2; 
findNthPrime(n);
