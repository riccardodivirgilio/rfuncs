export default {
  sections: [
    {
      tests: (items, compare) => {
        compare(items({}), [])
        compare(items({ a: 1 }), [["a", 1]])
        compare(items({ a: 1 }, { b: 2 }), [["a", 1], ["b", 2]])
        compare(items({ a: 1 }, { b: 2 }, { c: 3 }), [["a", 1], ["b", 2], ["c", 3]]),
        compare(items({ a: 1, b: 2 }, { b: 3 }), [["a", 1], ["b", 2], ["b", 3]])
      },
    },
  ],
}
