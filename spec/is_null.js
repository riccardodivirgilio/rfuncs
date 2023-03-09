export default {
    sections: [
        {
            tests: (is_null, compare) => {
                compare(is_null("a"), false)
                compare(is_null(0), false)
                compare(is_null([]), false)
                compare(is_null({}), false)
                compare(is_null(null), true)
                compare(is_null(undefined), true)
            },
        },
    ],
}
