export default {
    sections: [
        {
            tests: (is_array, compare) => {
                compare(is_array("a"), false)
                compare(is_array(0), false)
                compare(is_array([]), true)
                compare(is_array({}), false)
                compare(is_array(null), false)
                compare(is_array(undefined), false)
            },
        },
    ],
}
