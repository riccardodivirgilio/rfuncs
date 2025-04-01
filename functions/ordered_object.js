import partial from "./partial";
import scan from "./scan";
import is_string from "./is_string";

const tostr = prop => is_string(prop) ? prop : prop + ""

export default function ordered_object(iterable = []) {
    const map = new Map()

    scan(([prop, value]) => map.set(tostr(prop), value), iterable);

    const handler = {
        set: (_, prop, value) => map.set(tostr(prop), value),
        deleteProperty: (_, prop) => map.delete(tostr(prop)),
        ownKeys: () => Array.from(map.keys()),
        get: (_, prop) => {
            if (prop === "clone") return () => ordered_object(Array.from(map.entries()));
            if (prop === Symbol.iterator) return function* () { yield* map.entries(); };
            return map.get(tostr(prop));
        },
        has: (_, prop) => map.has(tostr(prop)),
        getOwnPropertyDescriptor: (_, prop) =>
            map.has(tostr(prop)) ? { enumerable: true, configurable: true } : undefined,
    };

    return new Proxy({}, handler);
}
