
import sorted  from '../functions/sorted'
import compare from './utils/compare'

it("sorted", () => {
  compare.as_json(sorted([3, 1, 2]), [1, 2, 3])
  compare.as_json(sorted([3, 1, 2], (a, b) => a > b), [1, 2, 3])
  compare.as_json(sorted([3, 1, 2], (a, b) => a < b), [3, 2, 1])

  compare.as_json(sorted({'a':3, 'b':1, 'c':2}), [1, 2, 3])
  compare.as_json(sorted({'a':3, 'b':1, 'c':2}, (a, b) => a > b), [1, 2, 3])
  compare.as_json(sorted({'a':3, 'b':1, 'c':2}, (a, b) => a < b), [3, 2, 1])

})