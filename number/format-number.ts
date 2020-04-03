import { round } from "./round";
import { padEnd } from "../string";

export function formatNumber(n: number, fractionalDigits: number = 2, format: "us" | "eu" = "us"): string {
    if (n == null || isNaN(n)) {
        return "";
    }
    if (fractionalDigits) {
        n = round(n, fractionalDigits);
    }

    //Add 1000 separator (,)  e.g. "123,456"
    const str = String(n);
    const parts = str.split('.');

    const thousands = [];
    let i = parts[0].length - 3;
    let l = 3;
    while (i >= 0 || (l + i) > 0) {
        if (i < 0) {
            l += i;
            i = 0;
        }
        thousands.unshift(parts[0].substr(i, l));
        i -= 3;
    }

    const comma = format === "us" ? "." : ",";
    const delimiter = format === "us" ? "," : " ";

    parts[0] = thousands.join(delimiter);
    if (fractionalDigits) {
        parts[1] = padEnd(parts[1] || "", fractionalDigits, '0');
    }

    return parts.join(comma);
}
