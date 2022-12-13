export function debounce<T extends (...args: any[]) => void>(fn: T, threshold: number): T {
    let savedArgs: any[];
    let timer: null | number = null;

    return ((...args: any[]) => {
        savedArgs = args;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn(...savedArgs);
        }, threshold) as any;
    }) as T;
}
