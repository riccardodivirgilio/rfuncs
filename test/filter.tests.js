
import filter  from '../functions/filter'
import compare from './utils/compare'

it("filter", () => {
  compare.as_json(filter((v) => v < 3, [1, 2, 3]), [1, 2])
  compare.as_json(filter((v) => v < 3, 1), [1])
  compare.as_json(filter((v) => v < 3, 5), [])
  compare.as_json(filter((v) => v < 3, {'a': 2, 'b':5}), {'a': 2})
})

it("filter indexed", () => {
  compare.as_json(filter((v, index) => v == index, [0, 1, 2, 4]), [0, 1, 2])
  compare.as_json(filter((v, index) => v == index, 0), [0])
  compare.as_json(filter((v, index) => v == index, 1), [])
  compare.as_json(filter((v, index) => v == index, {'a': 'a', 'b': 'c'}), {'a': 'a'})
})