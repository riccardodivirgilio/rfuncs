
import sort    from '../functions/sort'
import compare from './utils/compare'

it("sort", () => {

  const arr = [3, 1, 2]
  const obj = {'a':3, 'b':1, 'c':2}

  compare.as_json(sort(arr), [1, 2, 3])
  compare.as_json(sort(arr, (a, b) => a > b), [1, 2, 3])
  compare.as_json(sort(arr, (a, b) => a < b), [3, 2, 1])

  compare.as_json(sort(obj), [1, 2, 3])
  compare.as_json(sort(obj, (a, b) => a > b), [1, 2, 3])
  compare.as_json(sort(obj, (a, b) => a < b), [3, 2, 1])

  // checking that we didn't modify original data

  compare.as_json(arr, [3, 1, 2])
  compare.as_json(obj, {'a':3, 'b':1, 'c':2})

})