
import is_null  from './is_null'
import scan     from './scan'

export default function key_take(data, to_take, default_value = undefined) {
    if (is_null(to_take)) {
        return data
    }
    let result = {}
    scan(
        k => {
            if (data[k] !== undefined){
                result[k] = data[k]
            } else if (default_value !== undefined) {
                result[k] = default_value
            }
        },
        to_take
    )
    return result
}