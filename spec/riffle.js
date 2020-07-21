export default {
  sections: [
    {
      name: "riffle",
      usage: [
        {
          line: "riffle(iterable, separator)",
          description: "riffle separator between successive elements in a list",
        },
      ],
      tests: (riffle, compare) => {
        compare(riffle([1, 2, 3], "s"), [1, "s", 2, "s", 3])
        compare(riffle([1], "s"), [1])
        compare(riffle([], "s"), [])
      },
    },
  ],
}
