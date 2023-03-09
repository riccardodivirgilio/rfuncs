import test_iterator from "../test/utils/test_iterator"

export default {
    sections: [
        {
            name: "map",
            tests: (map, compare) => {
                compare(
                    map(v => v + 2, [1, 2, 3]),
                    [3, 4, 5]
                )
                compare(
                    map(v => v + 2, 1),
                    [3]
                )
                compare(
                    map(v => v + 2, { a: 3, b: 5 }),
                    { a: 5, b: 7 }
                )
            },
        },
        {
            name: "map indexed",
            tests: (map, compare) => {
                compare(
                    map((v, index) => v + index, [1, 2, 3]),
                    [1, 3, 5]
                )
                compare(
                    map((v, index) => v + index, 1),
                    [1]
                )
                compare(
                    map((v, index) => v + index, { a: 3 }),
                    { a: "3a" }
                )
            },
        },
        {
            name: "map iterator",
            docs_skip: true,
            tests: (map, compare) => {
                compare(
                    map(v => v + 2, test_iterator()),
                    [3, 4]
                )
                compare(
                    map((v, index) => v + index, test_iterator()),
                    [1, 3]
                )
            },
        },
    ],
}
