export function round(n: number, digits: number = 0) {
    const multiplier = Math.pow(10, digits);
    // Fix issues with floating point operations when e.g. 2.5 could be stored as 2.4999999993
    // Which would cause it to round to 2 instead of 3
    return Math.round(Math.round(n * multiplier * 1000) / 1000) / multiplier;
}
