export function solution() {
    return fibonacciUntilMax(4_000_000).reduce((acc, curr) => {
        if (curr % 2 == 0) {
            return acc + curr
        }
        return acc
    }, 0)
}

// Fibonacci sequence generator until a certain maximum
function fibonacciUntilMax(max: number, result: number[] = [1, 2]): number[] {
    const nextFibonacciValue = result[result.length - 1] + result[result.length - 2];

    if (nextFibonacciValue >= max) {
        return result;
    }

    result.push(nextFibonacciValue);
    return fibonacciUntilMax(max, result);
}