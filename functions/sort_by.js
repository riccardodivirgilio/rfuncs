import identity from "./identity"
import is_function from "./is_function"
import map from "./map"
import sort from "./sort"
import getter from "./getter"
import zip from "./zip"
import to_array from "./to_array"

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
