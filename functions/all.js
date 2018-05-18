

import to_array from './to_array'

export default function all(iterable, f = a => a) {
    for (let t of to_array(iterable)) {
        if (! f(t)) {
            return false
        }
    }
    return true
}