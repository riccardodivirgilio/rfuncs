
import key_take  from './key_take'
import to_array  from './to_array'
import keys      from './keys'
import is_null   from './is_null'
import scan      from './scan'

export default function key_drop(data, to_drop) {

    if (is_null(keys)) {
        return data
    }

    let to_take = keys(data)

    scan(
        key => {
            const index = to_take.indexOf(key)
            if (index > -1) {
                to_take.splice(index, 1)
            }
        },
        to_drop
    )
    return key_take(data, to_take)
}