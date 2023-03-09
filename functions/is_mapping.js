import is_element from "./is_element"
import is_function from "./is_function"
import is_iterator from "./is_iterator"
import is_object from "./is_object"
import items from "./items"
import ordered_object from "./ordered_object"
import to_array from "./to_array"

export default function is_mapping(iterable) {
    return (
        is_object(iterable) &&
        !is_iterator(iterable) &&
        !is_function(iterable) &&
        !is_element(iterable)
    )
}
