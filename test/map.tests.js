
import map     from '../functions/map'
import compare from './utils/compare'

it("map", () => {
  compare.as_json(map((v) => v+2, [1, 2, 3]), [3, 4, 5])
  compare.as_json(map((v) => v+2, 1), [3])
  compare.as_json(map((v) => v+2, {'a': 3, 'b':5}), {'a': 5, 'b': 7})
})

it("map indexed", () => {
  compare.as_json(map((v, index) => v+index, [1, 2, 3]), [1, 3, 5])
  compare.as_json(map((v, index) => v+index, 1), [1])
  compare.as_json(map((v, index) => v+index, {'a': 3}), {'a': '3a'})
})