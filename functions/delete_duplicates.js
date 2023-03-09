import getter from "./getter"
import identity from "./identity"
import object_map from "./object_map"
import to_array from "./to_array"
import values from "./values"

export default function delete_duplicates(iterable, f) {
    return values(object_map(getter(f), identity, to_array(iterable)))
}
