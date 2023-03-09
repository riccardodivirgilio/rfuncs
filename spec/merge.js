export default {
    sections: [
        {
            tests: (merge, compare) => {
                compare(merge(), {})
                compare(merge({ a: 1 }), { a: 1 })
                compare(merge({ a: 1 }, { b: 2 }), { a: 1, b: 2 })
                compare(merge({ a: 1 }, { b: 2 }, { c: 3 }), {
                    a: 1,
                    b: 2,
                    c: 3,
                }),
                    compare(merge({ a: 1, b: 2 }, { b: 3 }), { a: 1, b: 3 })
            },
        },
    ],
}
