
import to_array  from './to_array'
import is_null   from './is_null'
import contains  from './contains'
import scan      from './scan'

export default function key_drop(data, to_drop) {

    if (is_null(to_drop)) {
        return data
    }

    const keys   = to_array(to_drop)
    const result = {}
    scan(
        (value, key) => {
            if (! contains(keys, key)) {
                result[key] = value
            }
        },
        data
    )
    return result

}