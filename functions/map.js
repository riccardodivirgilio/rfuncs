import is_mapping from "./is_mapping"
import items from "./items"
import ordered_object from "./ordered_object"
import to_array from "./to_array"

export default function map(f, iterable) {
    // we want to return a new object if iterable is an object

    if (is_mapping(iterable)) {
        return ordered_object(items(iterable).map(a => [a[0], f(a[1], a[0])]))
    }
    return to_array(iterable).map(f)
}
