
import to_array    from './to_array'
import keys        from './keys'
import is_object   from './is_object'
import is_iterator from './is_iterator'

export default function scan(f, iterable) {
    if (is_iterator(iterable)) {
        let index = 0
        for (let value of iterable) { 
            f(value, index)
            index ++
        }
    } else if (is_object(iterable)) {
        keys(iterable).forEach(
            key => f(iterable[key], key)
        )
    } else {
        to_array(iterable).forEach(f)
    }
}