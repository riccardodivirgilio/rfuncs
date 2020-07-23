export default {
  sections: [
    {
      tests: (ordered_object, compare) => {
        compare(ordered_object([["a", 2]]), { a: 2 })

        compare(
          ordered_object([
            ["z", 2],
            ["b", 3],
          ]),
          { z: 2, b: 3 }
        )

        compare(
          ordered_object([
            ["z", 2],
            ["b", 3],
            ["b", 4],
          ]),
          { z: 2, b: 4 }
        )
      },
    },
  ],
}
