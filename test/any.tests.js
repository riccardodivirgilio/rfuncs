
import any      from '../functions/any'
import compare  from './utils/compare'

it("any", () => {

  compare.equal(any(),      false)
  
  compare.equal(any(true),  true)
  compare.equal(any(false), false)

  compare.equal(any([false, false]),  false)
  compare.equal(any([true, false]),   true)


  compare.equal(any(4, i => i <= 4),  true)
  compare.equal(any(4, i => i >  4),  false)

  compare.equal(any([2, 4], i => i <= 2),   true)
  compare.equal(any([2, 4], i => i <= 4),   true)
  compare.equal(any([2, 4], i => i <= 1),   false)

})