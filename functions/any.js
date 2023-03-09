import to_array from "./to_array"
import getter from "./getter"


export default function any(iterable, f = a => a) {

    const g = getter(f)

    for (let t of to_array(iterable)) {
        if (g(t)) {
            return true
        }
    }
    return false
}
