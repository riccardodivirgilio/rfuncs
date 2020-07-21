import test_iterator from "../test/utils/test_iterator"

export default {
  sections: [
    {
      name: "object_map",
      tests: (object_map, compare) => {
        compare(
          object_map(
            v => v,
            v => v + 2,
            [1, 2, 3]
          ),
          { 1: 3, 2: 4, 3: 5 }
        )
        compare(
          object_map(
            v => v,
            v => v + 2,
            1
          ),
          { 1: 3 }
        )
      },
    },
    {
      name: "object_map indexed",
      tests: (object_map, compare) => {
        compare(
          object_map(
            (v, i) => i + 1,
            (v, i) => v + 2,
            [4, 5, 6]
          ),
          { 1: 6, 2: 7, 3: 8 }
        )
        compare(
          object_map(
            (v, i) => i + 1,
            (v, i) => v + 2,
            3
          ),
          { 1: 5 }
        )
        compare(
          object_map(
            (v, i) => i + 1,
            (v, i) => v + 2,
            test_iterator()
          ),
          { 1: 3, 2: 4 }
        )
      },
    },
    {
      name: "object_map iterator",
      docs_skip: true,
      tests: (object_map, compare) => {
        compare(
          object_map(
            v => v,
            v => v + 2,
            test_iterator()
          ),
          { 1: 3, 2: 4 }
        )
        compare(
          object_map(
            (v, i) => i + 1,
            (v, i) => v + 2,
            test_iterator()
          ),
          { 1: 3, 2: 4 }
        )
      },
    },
  ],
}
