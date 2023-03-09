import items from "./items"
import ordered_object from "./ordered_object"

export default function merge(...args) {
    return ordered_object(args.reduce((a, b) => a.concat(items(b)), []))
}
