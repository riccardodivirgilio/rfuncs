
import to_array  from './to_array'
import scan      from './scan'
import is_object from './is_object'

export default function map(f, iterable) {

    // we want to return a new object if iterable is an object

    if (is_object(iterable)) {
        let newobj = {}
        scan((value, key) => {newobj[key] = f(value, key)}, iterable)
        return newobj
    }
    return to_array(iterable).map(f)
}