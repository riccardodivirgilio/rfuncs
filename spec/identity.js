export default {
  sections: [
    {
      usage: [
        {
          line: "identity(val)",
          description: "gives val (the identity operation)",
        },
      ],
      tests: (identity, compare) => {
        compare(identity(), null)
        compare(identity(2), 2)
        compare(
          identity(
            [1, 2, 3]
          ),
          [1, 2, 3]
        )
      },
    },
  ],
}
