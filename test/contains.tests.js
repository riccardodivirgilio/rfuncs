
import contains  from '../functions/contains'
import compare   from './utils/compare'

it("contains", () => {
  compare.equal(contains([1, 2, 3], 2), true)
  compare.equal(contains([1, 2, 3], 8), false)

  compare.equal(contains({'a':1, 'b':2}, 'a'), true)
  compare.equal(contains({'a':1, 'b':2}, 'c'), false)
})