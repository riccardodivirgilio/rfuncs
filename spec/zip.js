export default {
    sections: [
        {
            usage: [
                {
                    line: "zip(array1, array2, ...)",
                    description:
                        "returns [[array1[0], array2[0], ...], [array1[1], array2[1], ...], ...]",
                },
            ],
            tests: (zip, compare) => {
                compare(zip([1, 2, 3], [4, 5, 6]), [
                    [1, 4],
                    [2, 5],
                    [3, 6],
                ])
            },
        },
    ],
}
