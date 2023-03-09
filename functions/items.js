
import scan from './scan' 

export default function items(...args) {
    const res = []
    scan(
        item => scan(
            (v, k) => res.push([k, v]),
            item
        ),
        args
    )
    return res
}
