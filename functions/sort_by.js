
import any         from './any'
import is_function from './is_function'
import map         from './map'
import sort        from './sort'
import to_array    from './to_array'

export default function sort_by(iterable, functions) {

    const compare = map(
        f => {
            if (is_function(f)) {
                return (a, b) => f(a) > f(b)
            } else {
                return (a, b) => a[f] > b[f]
            }
        },
        functions
    )

    return sort(iterable, (a, b) => any(compare, t => t(a, b)))
}