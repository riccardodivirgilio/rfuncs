export default function merge(...args) {
  return args.reduce((a, b) => Object.assign(a, b), {})
}
