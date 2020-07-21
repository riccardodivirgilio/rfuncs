export default {
  sections: [
    {
      tests: (is_object, compare) => {
        compare(is_object("a"), false)
        compare(is_object(0), false)
        compare(is_object([]), false)
        compare(is_object({}), true)
        compare(is_object(null), false)
        compare(is_object(undefined), false)
      },
    },
  ],
}
