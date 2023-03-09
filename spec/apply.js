export default {
    sections: [
        {
            usage: [
                {
                    line: "apply(f, [val₁, val₂, val₃, …])",
                    description: "returns f(val₁, val₂, val₃, …)",
                },
            ],
            tests: (apply, compare) => {
                compare(
                    apply(a => a + 2, 1),
                    3
                )
                compare(
                    apply(a => a + 2, [1]),
                    3
                )
                compare(
                    apply((a, b) => a + b, [1, 2]),
                    3
                )
                compare(
                    apply((a, b, c) => a + b + c, [1, 2, 3]),
                    6
                )
            },
        },
    ],
}
