
export default {
    sections: [{
        tests: (all, compare) => {

            compare(all(),      true)

            compare(all(true),  true)
            compare(all(false), false)

            compare(all([true, true]),    true)
            compare(all([true, false]),   false)

            compare(all(4, i => i <= 4),  true)
            compare(all(4, i => i >  4),  false)
            
            compare(all([2, 4], i => i <= 2),   false)
            compare(all([2, 4], i => i <= 4),   true)

        }
    }]
}
