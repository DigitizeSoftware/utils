export function padEnd(s: string, length: number, delimiter: string = " ") {
    if (delimiter === "") {
        // Avoid eternal cycle
        delimiter = " ";
    }

    while (s.length < length) {
        s = s + delimiter;
    }

    return s;
}
