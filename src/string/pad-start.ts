export function padStart(s: string, length: number, delimiter: string = " ") {
    if (delimiter === "") {
        // Avoid eternal cycle
        delimiter = " ";
    }

    while (s.length < length) {
        s = delimiter + s;
    }

    return s;
}
