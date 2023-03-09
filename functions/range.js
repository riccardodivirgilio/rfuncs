import is_null from "./is_null"

export default function range(n1, n2, step = 1) {
    if (is_null(n2)) {
        return range(0, n1 - 1, step)
    }
    const arr = []
    for (let i = n1; i <= n2; i += step) {
        arr.push(i)
    }
    return arr
}
