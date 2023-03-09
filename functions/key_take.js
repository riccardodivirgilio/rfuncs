import is_null from "./is_null"
import scan from "./scan"
import ordered_object from "./ordered_object"

export default function key_take(data, to_take, default_value = undefined) {
  if (is_null(to_take)) {
    return data
  }
  const result = []
  scan(k => {
    if (data[k] !== undefined) {
      result.push([k, data[k]])
    } else if (default_value !== undefined) {
      result.push([k, default_value])
    }
  }, to_take)
  return ordered_object(result)
}
