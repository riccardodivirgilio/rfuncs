export default {
  sections: [
    {
      tests: (last, compare) => {
        compare(last(1), 1)
        compare(last([1, 2, 3]), 3)
        compare(last({ a: 1, b: 2 }), 2)
      },
    },
  ],
}
