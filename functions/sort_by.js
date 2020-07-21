import is_function from "./is_function"
import map from "./map"
import sort from "./sort"

export default function sort_by(iterable, functions = a => a) {
  const getters = map(f => (is_function(f) ? f : v => v[f]), functions)

  function compare(a, b) {
    for (let getter of getters) {
      const v1 = getter(a)
      const v2 = getter(b)

      if (v1 !== v2) {
        return v1 > v2
      }
    }
    return false
  }

  return sort(iterable, compare)
}
