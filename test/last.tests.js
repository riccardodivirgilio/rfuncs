
import last    from '../functions/last'
import compare from './utils/compare'

it("last", () => {
  compare.equal(last(1), 1)
  compare.equal(last([1, 2, 3]), 3)
  compare.equal(last({'a':1, 'b':2}), 2)
})
