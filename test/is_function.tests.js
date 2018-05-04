
import is_function from '../functions/is_function'
import compare     from './utils/compare'

it("is_function", () => {
  compare.equal(is_function('a'),           false)
  compare.equal(is_function(0),             false)
  compare.equal(is_function([]),            false)
  compare.equal(is_function({}),            false)
  compare.equal(is_function(null),          false)
  compare.equal(is_function(undefined),     false)
  compare.equal(is_function(undefined),     false)
  compare.equal(is_function(() => 1),       true)
  compare.equal(is_function(function() {}), true)
})