export function solution() {
    const input = new Array(1000).fill(null).map((_, index) => index);
    return logic(input);
}

// Logic
function logic(input: number[], total: number = 0, index: number = 0) {
    if (index >= input.length) {
        return total;
    }
    const addition = isMultipleOf(input[index], 3) || isMultipleOf(input[index], 5) ? input[index] : 0;
    return logic(input, total + addition, index + 1)
}

// Helpers
function isMultipleOf(input: number, multi: number): boolean {
    return input % multi === 0;
}

