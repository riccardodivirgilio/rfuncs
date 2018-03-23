
import to_array from './to_array'

export default function composition() {
    const funcs = to_array(arguments)
    return input => funcs.reduce((v, f) => f(v), input)
}