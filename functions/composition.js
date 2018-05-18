
export default function composition(...args) {
    return input => args.reduce((v, f) => f(v), input)
}