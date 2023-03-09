import getter from "./getter"
import identity from "./identity"
import sort from "./sort"
import to_array from "./to_array"
import zip from "./zip"

export default function sort_by(iterable, functions = identity) {
    const getters = getter(to_array(functions))

    function compare(a, b) {
        for (let [v1, v2] of zip(getters(a), getters(b))) {
            if (v1 !== v2) {
                return v1 > v2
            }
        }
        return false
    }

    return sort(iterable, compare)
}
