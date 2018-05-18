
import repeat      from './repeat'
import composition from './composition'
import apply       from './apply'

export default function nest(f, expr, step = 1) {
    return apply(composition, repeat(f, step))(expr)
}