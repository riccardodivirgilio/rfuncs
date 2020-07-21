export default {
  sections: [
    {
      tests: (sort, compare) => {
        const arr = [3, 1, 2]
        const obj = { a: 3, b: 1, c: 2 }

        compare(sort(arr), [1, 2, 3])
        compare(
          sort(arr, (a, b) => a > b),
          [1, 2, 3]
        )
        compare(
          sort(arr, (a, b) => a < b),
          [3, 2, 1]
        )

        compare(sort(obj), [1, 2, 3])
        compare(
          sort(obj, (a, b) => a > b),
          [1, 2, 3]
        )
        compare(
          sort(obj, (a, b) => a < b),
          [3, 2, 1]
        )

        // checking that we didn't modify original data

        compare(arr, [3, 1, 2])
        compare(obj, { a: 3, b: 1, c: 2 })
      },
    },
  ],
}
