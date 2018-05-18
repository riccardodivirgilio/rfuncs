
import to_array from './to_array'
import is_array from './is_array'

export default function sorted(iterable, f) {

    // we want to return a new object if iterable is an object

    if (is_array(iterable)) {
        return [].concat(iterable).sort(f)
    }
    return to_array(iterable).sort(f)
}