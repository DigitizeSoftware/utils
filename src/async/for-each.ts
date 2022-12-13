export async function forEach<T>(arr: Array<T>, callback: (item: T, index: number) => Promise<void>): Promise<void> {
    return arr.reduce((promise, item, index) => {
        return promise.then(() => callback(item, index));
    }, Promise.resolve());
}
