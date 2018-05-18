
import sort  from '../functions/sort'
import compare from './utils/compare'

it("sort", () => {
  compare.as_json(sort([3, 1, 2]), [1, 2, 3])
  compare.as_json(sort([3, 1, 2], (a, b) => a > b), [1, 2, 3])
  compare.as_json(sort([3, 1, 2], (a, b) => a < b), [3, 2, 1])

  compare.as_json(sort({'a':3, 'b':1, 'c':2}), [1, 2, 3])
  compare.as_json(sort({'a':3, 'b':1, 'c':2}, (a, b) => a > b), [1, 2, 3])
  compare.as_json(sort({'a':3, 'b':1, 'c':2}, (a, b) => a < b), [3, 2, 1])

})