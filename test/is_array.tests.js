
import is_array from '../functions/is_array'
import compare  from './utils/compare'

it("is_array", () => {
  compare.equal(is_array('a'),       false)
  compare.equal(is_array(0),         false)
  compare.equal(is_array([]),        true)
  compare.equal(is_array({}),        false)
  compare.equal(is_array(null),      false)
  compare.equal(is_array(undefined), false)
})