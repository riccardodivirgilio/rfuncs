export default {
    sections: [
        {
            usage: [
                {
                    line: "contains(data, value)",
                    description: "returns `true` if value is contained in data",
                },
            ],
            tests: (contains, compare) => {
                compare(contains([1, 2, 3], 2), true)
                compare(contains([1, 2, 3], 8), false)

                compare(contains({ a: 1, b: 2 }, "a"), true)
                compare(contains({ a: 1, b: 2 }, "c"), false)

                compare(contains(1, 1), true)
            },
        },
    ],
}
