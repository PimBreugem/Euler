export function solution() {
    const numberList = new Array(100).fill(null).map((_, index) => index + 1);
    console.log(numberList)
    console.log(3 ** 2)
    return totalSquareOfSum(numberList) - totalSumOfSquares(numberList)
}


function totalSquareOfSum(input: number[]) {
    return input.reduce((acc, curr) => acc + curr) ** 2
}
function totalSumOfSquares(input: number[]) {
    return input.reduce((acc, curr) => {
        return acc + ( curr ** 2 )
    }, 0)
}