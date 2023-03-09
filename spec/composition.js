export default {
    sections: [
        {
            usage: [
                {
                    line: "composition(f₁, f₂, f₃, …)",
                    description:
                        "returns a composition of the functions f₁, f₂, f₃, …",
                },
            ],
            tests: (composition, compare) => {
                compare(composition()(4), 4)
                compare(composition(a => a + 2)(4), 6)
                compare(
                    composition(
                        a => a + 2,
                        a => a * 3
                    )(4),
                    18
                )
                compare(
                    composition(
                        a => a + 2,
                        a => a * 3,
                        a => a / 2
                    )(4),
                    9
                )
            },
        },
    ],
}
