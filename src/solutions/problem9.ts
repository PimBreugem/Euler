export function solution() {
    // A Pythagorean triplet is a set of three natural numbers, a < 6 < c, for which,
    // а? +62=22
    // For example, 32 + 42 = 9 + 16 = 25 = 52
    // There exists exactly one Pythagorean triplet for which a + 6 + c = 1000.
    // Find the product abc.
    for (let a = 1; a < 1000; a++) {
        for (let b = a + 1; b < 1000; b++) {
            const c = 1000 - a - b;
            if (a * a + b * b === c * c) {
                return a * b * c;
            }
        }
    }
}