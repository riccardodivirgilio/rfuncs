import is_array from "./is_array"
import is_element from "./is_element"
import is_function from "./is_function"
import is_iterator from "./is_iterator"
import is_null from "./is_null"
import is_object from "./is_object"
import values from "./values"

function _to_array(iterable) {
    if (is_array(iterable)) {
        return iterable
    }
    if (is_iterator(iterable)) {
        const array = []
        for (let value of iterable) {
            array.push(value)
        }
        return array
    }
    if (is_function(iterable) || is_element(iterable)) {
        return [iterable]
    }
    if (is_object(iterable)) {
        return values(iterable)
    }
    if (is_null(iterable)) {
        return []
    }
    return [iterable]
}

export default function to_array() {
    if (arguments.length == 1) {
        return _to_array(arguments[0])
    }
    return _to_array(arguments).reduce((a, b) => a.concat(_to_array(b)), [])
}
