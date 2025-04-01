

export default function echo(v, ...args) {
    // we want to return a new object if iterable is an object
    console.log(...args, v)
    return v
}
