import identity from "./identity"
import is_function from "./is_function"
import is_mapping from "./is_mapping"
import map from "./map"
import ordered_object from "./ordered_object"
import scan from "./scan"

const array_assigner = (result, grouper, k, v) => {
    if (!result[grouper]) {
        result[grouper] = []
    }
    result[grouper].push(v)
}

const mapping_assigner = (result, grouper, k, v) => {
    if (!result[grouper]) {
        result[grouper] = ordered_object()
    }
    result[grouper][k] = v
}

export default function group_by(iterable, f = identity, merger = null) {
    const assigner = is_mapping(iterable) ? mapping_assigner : array_assigner
    const getter = is_function(f) ? f : v => v[f]
    const result = ordered_object()

    scan((v, k) => assigner(result, getter(v, k), k, v), iterable)

    if (merger) {
        return map(merger, result)
    }

    return result
}
