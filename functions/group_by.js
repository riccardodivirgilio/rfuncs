import is_function from "./is_function"
import scan from "./scan"
import map from "./map"
import identity from "./identity"

export default function group_by(iterable, f = identity, merger = null) {
  const getter = is_function(f) ? f : v => v[f]
  const result = {}

  scan((v, k) => {
    const key = getter(v, k)
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(v)
  }, iterable)

  if (merger) {
    return map(merger, result)
  }

  return result
}
