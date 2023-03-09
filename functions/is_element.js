export default function is_element(element) {
    try {
        //Using W3 DOM2 (works for FF, Opera and Chrome)
        return element instanceof Element || element instanceof HTMLDocument
    } catch (e) {
        // nodejs can't do that
        return false
    }
}
