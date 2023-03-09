import partial from "./partial"
import scan from "./scan"

const set = (keys, obj, prop, value) => {
    prop = prop + ""
    if (keys.indexOf(prop) < 0) {
        keys.push(prop)
    }
    obj[prop] = value
    return true
}

const deleteProperty = (keys, obj, prop) => {
    prop = prop + ""
    const i = keys.indexOf(prop)
    if (i >= 0) {
        keys.splice(i, 1)
    }
    delete obj[prop]
    return true
}

export default function ordered_object(iterable = []) {
    let obj = {}
    let keys = []
    scan(i => {
        const k = i[0] + ""

        obj[k] = i[1]

        if (keys.indexOf(k) < 0) {
            keys.push(k)
        }
    }, iterable)
    return new Proxy(obj, {
        set: partial(set, keys),
        deleteProperty: partial(deleteProperty, keys),
        ownKeys: () => keys,
    })
}
