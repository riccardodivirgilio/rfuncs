
import to_array from './to_array'
import is_array from './is_array'

export default function sort(iterable, f) {

    // javascript sort wants you to return 1 or -1.
    // we really want a boolean check, which is why we first cast the test to bool and then we cast to an integer such us 1 / -1
    
    if (is_array(iterable)) {
        return [].concat(iterable).sort(f)
    }
    return to_array(iterable).sort(f)
}