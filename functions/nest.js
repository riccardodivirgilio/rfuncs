
import apply       from './apply'
import composition from './composition'
import repeat      from './repeat'

export default function nest(f, expr, step = 1) {
    return apply(composition, repeat(f, step))(expr)
}