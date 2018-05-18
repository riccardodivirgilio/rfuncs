
import any         from './any'
import is_function from './is_function'
import map         from './map'
import sort        from './sort'
import to_array    from './to_array'

export default function sort_by(iterable, functions) {

    const compare = map(
        f => {
            if (is_function(f)) {
                return (a, b) => f(a) > f(b) * 2 - 1
            } else {
                return (a, b) => a[f] > b[f] * 2 - 1
            }
        },
        functions
    )

    return sort(iterable, (a, b) => any(compare, t => t(a, b)))
}