const MAX = 100001;
let factor = new Array<number>(MAX).fill(1);
// Using the sieve algorithm to pre-compute the prime factors for all numbers
for (let i = 2; i < MAX; i++) {
    for (let j = i; j < MAX; j += i) {
        factor[j]++;
    }
}

let num = 1;
while (true) {
    let divisors;

    if (num % 2 === 0) {
        divisors = factor[num / 2] * factor[num + 1];
    } else {
        divisors = factor[num] * factor[(num + 1) / 2];
    }

    if (divisors > 500) break;
    num++;
}

export function solution() {
    console.log(num * (num + 1) / 2)
}
