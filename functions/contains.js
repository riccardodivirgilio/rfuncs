
import is_array from './is_array'

export default function contains(iterable, element) {
    if (is_array(iterable)) {
        return iterable.indexOf(element) > -1
    }
    return element in iterable
}