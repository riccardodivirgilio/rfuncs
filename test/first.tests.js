
import compare from './utils/compare'
import first   from '../functions/first'

it("first", () => {
  compare.equal(first(1), 1)
  compare.equal(first([1, 2, 3]), 1)
  compare.equal(first({'a':1, 'b':2}), 1)
})