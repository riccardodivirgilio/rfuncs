
import to_array from './to_array'
import is_array from './is_array'

export default function sort(iterable, f = (a, b) => a > b) {

    // javascript sort wants you to return 1 or -1.
    // we really want a boolean check, which is why we first cast the test to bool and then we cast to an integer such us 1 / -1

    const t = (a, b) => f(a, b) == true * 2 - 1
    
    if (is_array(iterable)) {
        //javascript sort is done in place.
        // to_array is not doing a copy if the object is already an array
        // we need to fix this case by creating a copy and sort after
        return [].concat(iterable).sort(t)
    }
    return to_array(iterable).sort(t)
}