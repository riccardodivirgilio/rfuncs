export default function random_real(min = 0, max = 1) {
    return Math.random() * (max - min) + min
}
