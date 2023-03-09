import identity from "./identity"
import is_function from "./is_function"
import is_null from "./is_null"
import is_number from "./is_number"
import is_string from "./is_string"
import map from "./map"

export default function getter(e) {
    if (is_string(e) || is_number(e)) {
        return o => o[e]
    } else if (is_null(e)) {
        return identity
    } else if (is_function(e)) {
        return e
    } else {
        return o => map(v => getter(v)(o), e)
    }
}
