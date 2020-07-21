export default {
  sections: [
    {
      tests: (range, compare) => {
        compare(range(0), [])

        compare(range(5), [0, 1, 2, 3, 4])

        compare(range(0, 0), [0])

        compare(range(1, 5), [1, 2, 3, 4, 5])

        compare(range(0, 4), [0, 1, 2, 3, 4])

        compare(range(0, 4, 2), [0, 2, 4])
      },
    },
  ],
}
