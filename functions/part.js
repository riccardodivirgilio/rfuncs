import to_array from "./to_array"
import map from "./map"

const select = (data, keys) => {
  if (keys || keys == 0) {
    return map(k => data[k], keys)
  }
  return to_array(data)
}

export default function part(data) {
  const values = to_array(arguments).slice(1)

  return values.reduce(
    (data_list, keys) =>
      data_list.map(d => select(d, keys)).reduce((a, b) => to_array(a, b)),
    [data]
  )
}
