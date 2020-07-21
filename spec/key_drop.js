export default {
  sections: [
    {
      tests: (key_drop, compare) => {
        const data = { a: "b", c: "d", e: "f", k: "p" }

        compare(key_drop(data, "a"), { c: "d", e: "f", k: "p" })
        compare(key_drop(data, ["c", "k"]), { a: "b", e: "f" })
        compare(key_drop(data, ["a", "c", "z"]), { e: "f", k: "p" })
        compare(key_drop(data), data)
      },
    },
  ],
}
