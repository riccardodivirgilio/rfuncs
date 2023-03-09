export default {
    sections: [
        {
            tests: (is_function, compare) => {
                compare(is_function("a"), false)
                compare(is_function(0), false)
                compare(is_function([]), false)
                compare(is_function({}), false)
                compare(is_function(null), false)
                compare(is_function(undefined), false)
                compare(is_function(undefined), false)
                compare(
                    is_function(() => 1),
                    true
                )
                compare(
                    is_function(function () {}),
                    true
                )
            },
        },
    ],
}
