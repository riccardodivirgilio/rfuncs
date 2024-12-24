export default {
    sections: [
        {
            usage: [
                {
                    line: "any(array)",
                    description:
                        "Returns `true` if at least one in the values in the array is true",
                },
            ],
            tests: (any, compare) => {
                compare(any(), false)

                compare(any(true), true)
                compare(any(false), false)

                compare(any([false, false]), false)
                compare(any([true, false]), true)
            },
        },
        {
            name: "any func",
            usage: [
                {
                    line: "any(array, func)",
                    description:
                        "Returns `true` if at least one in the values in the array is true when applied to func",
                },
            ],
            tests: (any, compare) => {
                compare(
                    any(4, i => i <= 4),
                    true,
                )
                compare(
                    any(4, i => i > 4),
                    false,
                )

                compare(
                    any([2, 4], i => i <= 2),
                    true,
                )
                compare(
                    any([2, 4], i => i <= 4),
                    true,
                )
                compare(
                    any([2, 4], i => i <= 1),
                    false,
                )
            },
        },
    ],
}
