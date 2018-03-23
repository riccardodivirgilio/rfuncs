
import to_array from './to_array'

export default function merge() {
    return to_array(arguments).reduce((a, b) => Object.assign(a, b), {})
}