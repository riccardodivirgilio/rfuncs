import is_element from "./is_element"
import is_function from "./is_function"
import is_iterator from "./is_iterator"
import is_object from "./is_object"
import items from "./items"
import ordered_object from "./ordered_object"
import to_array from "./to_array"
import is_mapping from "./is_mapping"

export default function map(f, iterable) {
    // we want to return a new object if iterable is an object

    if (is_mapping(iterable)) {
        return ordered_object(items(iterable).map(a => [a[0], f(a[1], a[0])]))
    }
    return to_array(iterable).map(f)
}
