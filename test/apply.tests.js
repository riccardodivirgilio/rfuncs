
import apply    from '../functions/apply'
import compare  from './utils/compare'

it("apply", () => {
  compare.equal(apply((a) => a + 2, 1), 3)
  compare.equal(apply((a) => a + 2, [1]), 3)
  compare.equal(apply((a, b) => a + b, [1, 2]), 3)
  compare.equal(apply((a, b, c) => a + b + c, [1, 2, 3]), 6)
})