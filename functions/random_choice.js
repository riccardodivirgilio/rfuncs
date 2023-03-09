import first from "./first"
import length from "./length"
import map from "./map"
import random_integer from "./random_integer"
import scan from "./scan"

export default function choice(array, choices) {
    if (!choices) {
        return first(choice(array, 1))
    }

    const copy = map(a => a, array)
    const results = []
    const max = Math.min(length(copy), choices)

    for (let i = 1; i <= max; i += 1) {
        scan(
            e => results.push(e),
            copy.splice(random_integer(0, length(copy) - 1), 1)
        )
    }
    return results
}
