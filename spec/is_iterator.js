import test_iterator from "../test/utils/test_iterator"

export default {
    sections: [
        {
            docs_skip: true,
            tests: (is_iterator, compare) => {
                compare(is_iterator("a"), false)
                compare(is_iterator(0), false)
                compare(is_iterator(test_iterator()), true)
            },
            examples: [
                { test: "is_iterator([1, 2, 3])", result: false },
                {
                    test: "function* iter() {yield 1}\nis_iterator(iter())",
                    result: true,
                },
            ],
        },
    ],
}
