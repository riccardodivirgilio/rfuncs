
import is_iterator   from '../functions/is_iterator'
import compare       from './utils/compare'
import test_iterator from './utils/test_iterator'

it("is_iterator", () => {
  compare.equal(is_iterator('a'), false)
  compare.equal(is_iterator(0),   false)
  compare.equal(is_iterator(test_iterator()),  true)
})