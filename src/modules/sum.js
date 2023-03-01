export function sum (...args) {
    if (args.length === 0) {
        throw Error('что то не так')
    }

    return args.reduce((result, current) => result + current, 0)
}