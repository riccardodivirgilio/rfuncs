import to_array from "./to_array"
import scan from "./scan"
import is_object from "./is_object"
import is_iterator from "./is_iterator"
import is_function from "./is_function"
import is_element from "./is_element"

export default function map(f, iterable) {
  // we want to return a new object if iterable is an object

  if (
    is_object(iterable) &&
    !is_iterator(iterable) &&
    !is_function(iterable) &&
    !is_element(iterable)
  ) {
    let newobj = {}
    scan((value, key) => {
      newobj[key] = f(value, key)
    }, iterable)
    return newobj
  }
  return to_array(iterable).map(f)
}
