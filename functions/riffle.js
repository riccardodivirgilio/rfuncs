
import scan from './scan'
import length from './length'

export default function riffle(iterable, separator) {

    let result = []
    let l = length(iterable) - 1

    scan(
        (v, i) => {
            result.push(v)
            if (i !== l) {
                result.push(separator)
            }
        }, 
        iterable
    )

    return result
}