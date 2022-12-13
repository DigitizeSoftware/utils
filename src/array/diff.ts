/**
 * Returns array containing items from array1 that do not exist in array2
 * @param array1
 * @param array2
 * @param comparator
 */
export function diff<T1, T2>(array1: Array<T1>, array2: Array<T2>, comparator: (a: T1, b: T2) => boolean): Array<T1> {
    const result: Array<T1> = [];
    array1.forEach(item => {
        if (!array2.some(item2 => comparator(item, item2))) {
            result.push(item);
        }
    });

    return result;
}
