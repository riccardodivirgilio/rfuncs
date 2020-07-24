import to_array from "./to_array"
import is_object from "./is_object"
import is_iterator from "./is_iterator"
import is_function from "./is_function"
import is_element from "./is_element"
import items from "./items"
import ordered_object from "../functions/ordered_object"

export default function map(f, iterable) {
  // we want to return a new object if iterable is an object

  if (
    is_object(iterable) &&
    !is_iterator(iterable) &&
    !is_function(iterable) &&
    !is_element(iterable)
  ) {
    return ordered_object(items(iterable).map(a => [a[0], f(a[1], a[0])]))
  }
  return to_array(iterable).map(f)
}
