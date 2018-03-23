
import is_null from '../functions/is_null'
import compare from './utils/compare'

it("is_null", () => {
  compare.equal(is_null('a'),       false)
  compare.equal(is_null(0),         false)
  compare.equal(is_null([]),        false)
  compare.equal(is_null({}),        false)
  compare.equal(is_null(null),      true)
  compare.equal(is_null(undefined), true)
})