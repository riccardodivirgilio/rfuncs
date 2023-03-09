export default {
    sections: [
        {
            name: "getter",
            tests: (getter, compare) => {
                compare(getter()({ a: 2 }), { a: 2 })

                compare(getter("a")({ a: 2 }), 2)

                compare(getter(["a", "b"])({ a: 2, b: 3 }), [2, 3])

                compare(getter({ x: "a", z: "b" })({ a: 2, b: 3 }), {
                    x: 2,
                    z: 3,
                })

                compare(getter(a => a + 2)(0), 2)

                compare(getter([a => a + 2, a => a + 4])(0), [2, 4])

                compare(getter({ a: a => a + 2, b: a => a + 4 })(0), {
                    a: 2,
                    b: 4,
                })
            },
        },
    ],
}
