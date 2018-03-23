
import to_array  from './to_array'
import is_object from './is_object'
import scan      from './scan'

export default function filter(f, iterable) {

    // we want to return a new object if iterable is an object

    if (is_object(iterable)) {
        let newobj = {}
        scan(
            (value, key) => {
                if (f(value, key)) {
                    newobj[key] = iterable[key]
                }
            },
            iterable,
        )
        return newobj
    }
    return to_array(iterable).filter(f)
}