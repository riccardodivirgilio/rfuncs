export default {
    sections: [
        {
            tests: (key_take, compare) => {
                const data = { a: "b", c: "d", e: "f" }

                compare(key_take(data, "a"), { a: "b" })
                compare(key_take(data, ["a", "c"]), { a: "b", c: "d" })
                compare(key_take(data, ["a", "c", "z"]), { a: "b", c: "d" })
                compare(key_take(data), data)
                compare(key_take(data, ["a", "c", "z", "j"], 3), {
                    a: "b",
                    c: "d",
                    z: 3,
                    j: 3,
                })
                compare(key_take(data, ["a", "c", "z", "j"], null), {
                    a: "b",
                    c: "d",
                    z: null,
                    j: null,
                })
            },
        },
    ],
}
