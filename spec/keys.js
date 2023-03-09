export default {
    sections: [
        {
            tests: (keys, compare) => {
                const data = { a: "b", c: "d", e: "f" }

                compare(keys(data), ["a", "c", "e"])
            },
        },
    ],
}
