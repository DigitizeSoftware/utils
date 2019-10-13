export function equal<T extends number | string | Date>(n1: T | undefined | null, n2: T | undefined | null): boolean {
    if (n1 == null && n2 == null) {
        return true;
    }
    if (n1 == null || n2 == null) {
        return false;
    }
    else {
        if (typeof n1 === "number" || typeof n1 === "string") {
            return n1 === n2;
        }
        else {
            return (n1 as Date).getTime() === (n2 as Date).getTime();
        }
    }
}
