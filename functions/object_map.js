import scan from "./scan"

export default function object_map(keyf, valuef, iterable) {
  let newobj = {}
  scan(
    (value, key) => (newobj[keyf(value, key)] = valuef(value, key)),
    iterable
  )
  return newobj
}
