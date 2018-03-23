
import is_array from './is_array'

export default function is_object(obj) {
    return obj instanceof Object && ! is_array(obj)
}