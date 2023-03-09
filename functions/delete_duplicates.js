import object_map from "./object_map"
import to_array from "./to_array"
import values from "./values"

export default function delete_duplicates(iterable, f = a => a) {
    return values(
        object_map(
            e => e,
            e => f(e),
            to_array(iterable)
        )
    )
}
