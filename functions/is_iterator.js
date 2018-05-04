
export default function is_iterator(obj) {
    if (obj) {
        return obj.next ? true : false
    }
    return false
}