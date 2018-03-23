
import is_object from '../functions/is_object'
import compare   from './utils/compare'

it("is_object", () => {
  compare.equal(is_object('a'),       false)
  compare.equal(is_object(0),         false)
  compare.equal(is_object([]),        false)
  compare.equal(is_object({}),        true)
  compare.equal(is_object(null),      false)
  compare.equal(is_object(undefined), false)
})