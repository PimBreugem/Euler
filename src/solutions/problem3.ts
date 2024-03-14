export function solution(): number {
    return largestPrimeFactor(600851475143)
}

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
function largestPrimeFactor(input: number): number {
    let maxPrime = -1

    while (input % 2 === 0) {
        maxPrime = 2
        input = input / 2
    }

    let sqrt = Math.sqrt(input)
    for (let i = 3; i <= sqrt; i += 2) {
        while (Number.isInteger(input / i)) {
            maxPrime = i
            input = input / i
        }
    }

    if (input > 2){
        maxPrime = input
    }

    return maxPrime
}