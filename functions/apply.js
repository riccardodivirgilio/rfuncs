import to_array from "./to_array"

export default function apply(f, args) {
    return f.apply(null, to_array(args))
}
