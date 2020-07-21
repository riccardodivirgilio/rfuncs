export default {
  sections: [
    {
      name: "group_by",
      tests: (group_by, compare) => {
        compare(group_by([1, 1, 2, 3]), { 1: [1, 1], 2: [2], 3: [3] })

        compare(group_by([{ a: 2 }, { a: 3 }, { a: 2, b: 4 }], "a"), {
          2: [{ a: 2 }, { a: 2, b: 4 }],
          3: [{ a: 3 }],
        })

        compare(
          group_by([{ a: 2 }, { a: 3 }, { a: 2, b: 4 }], v => v.a),
          { 2: [{ a: 2 }, { a: 2, b: 4 }], 3: [{ a: 3 }] }
        )
      },
    },
    {
      name: "group_by with merger",
      tests: (group_by, compare) => {
        compare(
          group_by(
            [1, 1, 2, 2, 3],
            v => v,
            array => array.reduce((a, b) => a + b, 0)
          ),
          { 1: 2, 2: 4, 3: 3 }
        )
      },
    },
  ],
}
