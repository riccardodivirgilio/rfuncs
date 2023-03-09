export default {
    sections: [
        {
            tests: (values, compare) => {
                const data = { a: "b", c: "d", e: "f" }

                compare(values(data), ["b", "d", "f"])
            },
        },
    ],
}
