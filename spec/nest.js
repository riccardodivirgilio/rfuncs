
export default {
  sections: [{
    tests: (nest, compare) => {

      compare(
        nest(s => s + "b", "a", 0),
        "a"
      )
      compare(
        nest(s => s + "b", "a", 1),
        "ab"
      )
      compare(
        nest(s => s + "b", "a", 5),
        "abbbbb"
      )

    }
  }]
}
