export default function repeat(expr, n = 1) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(expr)
  }
  return arr
}
