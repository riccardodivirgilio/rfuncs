
import all      from '../functions/all'
import compare  from './utils/compare'

it("all", () => {

  compare.equal(all(),      true)
  
  compare.equal(all(true),  true)
  compare.equal(all(false), false)

  compare.equal(all([true, true]),    true)
  compare.equal(all([true, false]),   false)


  compare.equal(all(4, i => i <= 4),  true)
  compare.equal(all(4, i => i >  4),  false)

  compare.equal(all([2, 4], i => i <= 2),   false)
  compare.equal(all([2, 4], i => i <= 4),   true)

})