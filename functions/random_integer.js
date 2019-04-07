
import random_real from './random_real'

export default function random_integer(min = 0, max = 1) {
    return Math.round(random_real(min, max))
}