export function round(n: number, digits: number = 0) {
    const multiplier = Math.pow(10, digits);
    return Math.round(n * multiplier) / multiplier;
}
