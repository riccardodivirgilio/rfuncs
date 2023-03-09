import is_object from "./is_object"
import to_array from "./to_array"

export default function contains(iterable, element) {
    if (is_object(iterable)) {
        return element in iterable
    }
    return to_array(iterable).indexOf(element) > -1
}
