
import length  from '../functions/length'
import compare from './utils/compare'

it("length", () => {
  compare.equal(length(), 0)
  compare.equal(length(1), 1)
  compare.equal(length('foo'), 1)
  compare.equal(length([1]), 1)
  compare.equal(length([1,2,3]), 3)
  compare.equal(length({'a':2}), 1)
  compare.equal(length({'a':2, 'b':3}), 2)
})