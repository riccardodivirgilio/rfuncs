
import nest    from '../functions/nest'
import compare from './utils/compare'

it("nest", () => {
  compare.as_json(
    nest(s => s + "b", "a", 0),
    "a"
  )
  compare.as_json(
    nest(s => s + "b", "a", 1),
    "ab"
  )
  compare.as_json(
    nest(s => s + "b", "a", 5),
    "abbbbb"
  )
})