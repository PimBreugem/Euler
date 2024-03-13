export function getIntegerList(n: number, list: number[] = []): number[] {
    if (n === 0) {
        return list.reverse();
    }
    list.push(n);
    return getIntegerList(n - 1, list);
}

