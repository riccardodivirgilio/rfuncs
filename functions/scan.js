import is_element from "./is_element"
import is_iterator from "./is_iterator"
import is_object from "./is_object"
import keys from "./keys"
import to_array from "./to_array"

export default function scan(f, iterable) {
    if (is_iterator(iterable)) {
        let index = 0
        for (let value of iterable) {
            f(value, index)
            index++
        }
    } else if (is_object(iterable) && !is_element(iterable)) {
        keys(iterable).forEach(key => f(iterable[key], key))
    } else {
        to_array(iterable).forEach(f)
    }
}
