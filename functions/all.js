import getter from "./getter"
import to_array from "./to_array"

export default function all(iterable, f) {
    const g = getter(f)

    for (let t of to_array(iterable)) {
        if (!g(t)) {
            return false
        }
    }
    return true
}
