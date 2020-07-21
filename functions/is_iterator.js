import is_function from "./is_function"

export default function is_iterator(obj) {
  if (obj) {
    return is_function(obj.next)
  }
  return false
}
