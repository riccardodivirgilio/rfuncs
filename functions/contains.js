
import to_array  from './to_array'
import is_object from './is_object'

export default function contains(iterable, element) {
    if (is_object(iterable)) {
        return element in iterable
    }
    return to_array(iterable).indexOf(element) > -1
}