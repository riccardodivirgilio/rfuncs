import map from "./map"
import ordered_object from "./ordered_object"

export default function object_map(keyf, valuef, iterable) {
    return ordered_object(
        map((value, key) => [keyf(value, key), valuef(value, key)], iterable),
    )
}
