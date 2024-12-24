// scan can only do side effects, here a map implementation to test scan
import test_iterator from "../test/utils/test_iterator"

function create_map(scan) {
    return (f, iterable) => {
        let data = []
        scan((value, key) => data.push(f(value, key)), iterable)
        return data
    }
}

export default {
    sections: [
        {
            name: "scan",
            docs_skip: true,
            tests: (scan, compare) => {
                const map = create_map(scan)

                compare(
                    map(v => v + 2, [1, 2, 3]),
                    [3, 4, 5],
                )
                compare(
                    map(v => v + 2, 1),
                    [3],
                )
                compare(
                    map(v => v + 2, { a: 3, b: 5 }),
                    [5, 7],
                )
                compare(
                    map(v => v + 2, test_iterator()),
                    [3, 4],
                )
            },
        },
        {
            name: "scan indexed",
            docs_skip: true,
            tests: (scan, compare) => {
                const map = create_map(scan)

                compare(
                    map((v, index) => v + index, [1, 2, 3]),
                    [1, 3, 5],
                )
                compare(
                    map((v, index) => v + index, 1),
                    [1],
                )
                compare(
                    map((v, index) => v + index, { a: 3, b: 2 }),
                    ["3a", "2b"],
                )
                compare(
                    map((v, index) => v + index, test_iterator()),
                    [1, 3],
                )
            },
        },
        {
            examples: [
                {
                    test: "scan(v => console.log(a), [1, 2, 3])",
                    result: null,
                    logs: [1, 2, 3],
                },
                {
                    test: "scan(v => console.log(a), {a:2, b:3, c:4})",
                    result: null,
                    logs: [2, 3, 4],
                },
                {
                    test: "scan((v, i) => console.log(i), [1, 2, 3])",
                    result: null,
                    logs: [0, 1, 2],
                },
                {
                    test: "scan((v, i) => console.log(i), {a:2, b:3, c:4})",
                    result: null,
                    logs: ["a", "b", "c"],
                },
            ],
        },
    ],
}
