export function solution() {
    const input = new Array(20).fill(null).map((_, index) => index + 1);
    return getSmallestWithoutRemainders(input)
}

function getSmallestWithoutRemainders(dividers: number[], currentNumber: number = dividers[dividers.length - 1]) {
    while (true) {
        if (dividers.every((divider) => currentNumber % divider === 0)) {
            return currentNumber
        }

        currentNumber += dividers[dividers.length - 1]
    }
}