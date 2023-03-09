import identity from "./identity"
import getter from "./getter"
import object_map from "./object_map"
import to_array from "./to_array"
import values from "./values"
import ordered_object from './ordered_object'    

export default function delete_duplicates(iterable, f) {

    return values(
        object_map(
            getter(f),
            identity,
            to_array(iterable)
        )
    )
}
