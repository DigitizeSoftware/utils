export function oneOf(value: string, arrayStr: string, delimiter: string = ",") {
    return value != null && arrayStr
        .split(delimiter)
        .map(s => s.trim())
        .indexOf(value) > -1;
}
