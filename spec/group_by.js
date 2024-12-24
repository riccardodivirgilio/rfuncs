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
                    { 2: [{ a: 2 }, { a: 2, b: 4 }], 3: [{ a: 3 }] },
                )
            },
        },
        {
            name: "group_by of object",
            tests: (group_by, compare) => {
                compare(group_by({ a: 1, b: 1, c: 2, d: 3 }), {
                    1: { a: 1, b: 1 },
                    2: { c: 2 },
                    3: { d: 3 },
                })

                compare(
                    group_by(
                        { x: { a: 2 }, y: { a: 3 }, z: { a: 2, b: 4 } },
                        "a",
                    ),
                    {
                        2: { x: { a: 2 }, z: { a: 2, b: 4 } },
                        3: { y: { a: 3 } },
                    },
                )

                compare(
                    group_by(
                        { x: { a: 2 }, y: { a: 3 }, z: { a: 2, b: 4 } },
                        v => v.a,
                    ),
                    {
                        2: { x: { a: 2 }, z: { a: 2, b: 4 } },
                        3: { y: { a: 3 } },
                    },
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
                        array => array.reduce((a, b) => a + b, 0),
                    ),
                    { 1: 2, 2: 4, 3: 3 },
                )
            },
        },
    ],
}
