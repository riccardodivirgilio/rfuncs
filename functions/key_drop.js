import contains from "./contains"
import filter from "./filter"
import is_null from "./is_null"
import to_array from "./to_array"

export default function key_drop(data, to_drop) {
    if (is_null(to_drop)) {
        return data
    }

    const keys = to_array(to_drop)

    return filter((value, key) => !contains(keys, key), data)
}
