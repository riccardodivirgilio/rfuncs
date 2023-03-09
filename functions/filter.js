import getter from "./getter"
import is_object from "./is_object"
import items from "./items"
import ordered_object from "./ordered_object"
import to_array from "./to_array"

export default function filter(f, iterable) {
    // we want to return a new object if iterable is an object

    const g = getter(f)

    if (is_object(iterable)) {
        return ordered_object(items(iterable).filter(a => g(a[1], a[0])))
    }
    return to_array(iterable).filter(g)
}
