export default {
    sections: [
        {
            tests: (repeat, compare) => {
                compare(repeat(1), [1])

                compare(repeat(1, 3), [1, 1, 1])

                compare(repeat(1, 0), [])
            },
        },
    ],
}
