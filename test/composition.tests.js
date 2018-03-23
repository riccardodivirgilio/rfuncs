
import composition  from '../functions/composition'
import compare      from './utils/compare'

it("composition", () => {
  compare.equal(composition()(4), 4)
  compare.equal(composition(a => a + 2)(4), 6)
  compare.equal(composition(a => a + 2, a => a * 3)(4), 18)
  compare.equal(composition(a => a + 2, a => a * 3, a => a / 2)(4), 9)
})