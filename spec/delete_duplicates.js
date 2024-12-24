export default {
    sections: [
        {
            name: "delete_duplicates",
            usage: [
                {
                    line: "delete_duplicates(iterable)",
                    description: "deletes all duplicates from list.",
                },
            ],
            tests: (delete_duplicates, compare) => {
                compare(delete_duplicates([1, 1, 3]), [1, 3])
                compare(
                    delete_duplicates([1, 7, 8, 4, 3, 4, 1, 9, 9, 2]),
                    [1, 7, 8, 4, 3, 9, 2],
                )
                compare(delete_duplicates([]), [])

                compare(delete_duplicates([{ a: 2, b: 3 }, { a: 2 }], "a"), [
                    { a: 2 },
                ])

                compare(
                    delete_duplicates([{ a: 2, b: 3 }, { a: 2 }], o => o.a),
                    [{ a: 2 }],
                )
            },
        },
    ],
}
