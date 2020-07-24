export default function zip() {
  var args = [].slice.call(arguments)
  var shortest =
    args.length == 0
      ? []
      : args.reduce(function (a, b) {
          return a.length < b.length ? a : b
        })

  return shortest.map((_, i) => args.map(array => array[i]))
}
