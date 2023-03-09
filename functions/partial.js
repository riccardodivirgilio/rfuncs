export default function partial(func, ...pre) {
    return (...post) => func(...pre, ...post)
}
