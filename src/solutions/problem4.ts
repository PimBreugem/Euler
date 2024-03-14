// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is
// 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

export function solution() {
    let largestPalindrome: number | undefined = 0;
    for (let i = 999; i >= 100; i--) { // Expensive

        for (let j = 999; j >= 100; j--) { // Expensive
            let product = i * j;
            if (isPalindrome(product) && product > largestPalindrome) {
                largestPalindrome = product;
                // The biggest second number is found, so if can skip the rest
                break
            }
        }
    }

    function isPalindrome(num: number): boolean {
        const str = num.toString();
        const len = str.length;
        for (let i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    return largestPalindrome

}