import to_array from "./to_array"
import is_object from "./is_object"
import scan from "./scan"
import ordered_object from "../functions/ordered_object"

export default function filter(f, iterable) {
  // we want to return a new object if iterable is an object

  if (is_object(iterable)) {
    let newobj = []
    scan((value, key) => {
      if (f(value, key)) {
        newobj.push([key, value])
      }
    }, iterable)
    return ordered_object(newobj)
  }
  return to_array(iterable).filter(f)
}
