
import to_array  from './to_array'
import keys      from './keys'
import is_object from './is_object'

export default function scan(f, iterable) {
    if (is_object(iterable)) {
        keys(iterable).forEach(
            key => f(iterable[key], key)
        )
    } else {
        to_array(iterable).forEach(f)
    }
}