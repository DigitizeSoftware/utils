export function request<P, T extends (...params: any[]) => Promise<P>>(fn: T): T {
    let resolve: (result?: P | PromiseLike<P>) => void;
    let reject: (reason?: any) => void;
    let state = 0;

    return (async (...args: any[]) => {
        state++;
        return new Promise<P>((res, rej) => {
            resolve = res;
            reject = rej;

            fn(...args).then(createResolved(state), createRejected(state));
        });
    }) as T;

    function createResolved(runState: number) {
        return (result?: P) => {
            if (runState === state) {
                resolve(result);
            }
            else {
                // Simply ignore, as this instance of Promise is irrelevant anymore
            }
        }
    }

    function createRejected(runState: number) {
        return (reason?: any) => {
            if (runState === state) {
                reject(reason);
            }
            else {
                // Simply ignore, as this instance of Promise is irrelevant anymore
            }
        }
    }
}
