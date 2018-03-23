
import to_array   from './to_array'

export default function last(any) {
    const arr = to_array(any)
    return arr[arr.length - 1]
}