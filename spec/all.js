
export default {
    sections: [{
        usage: [
            {line: 'all(array)', description: 'Returns True if all values in the array are true'},
        ],
        tests: (all, compare) => {

            compare(all(),      true)

            compare(all(true),  true)
            compare(all(false), false)

            compare(all([true, true]),    true)
            compare(all([true, false]),   false)

        }
    }, {
        usage: [
            {line: 'all(array, func)', description: 'Returns True if all values in the array are true when applied to func'}
        ],
        tests: (all, compare) => {

            compare(all(4, i => i <= 4),  true)
            compare(all(4, i => i >  4),  false)
            
            compare(all([2, 4], i => i <= 2),   false)
            compare(all([2, 4], i => i <= 4),   true)

        }
    }]
}
