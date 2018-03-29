
import to_array from '../functions/to_array'
import compare  from './utils/compare'

it("to_array", () => {
  compare.as_json(to_array(0), [0])
  compare.as_json(to_array('a'), ['a'])
  compare.as_json(to_array([0, 1, 2, [3, 4], {'a': 5}]), [0, 1, 2, [3, 4], {'a': 5}])
  compare.as_json(to_array({'a': 1, 'b': 2, 'c': [3, 4], 'd': {'a': 5}}), [1, 2, [3, 4], {'a': 5}])
})

it("to_array vargs", () => {
  compare.as_json(to_array(), [])
  compare.as_json(to_array('', 0, 1, 2, 3), ['', 0, 1, 2, 3])
  compare.as_json(to_array('', 0, 1, [2, 3], 4), ['', 0, 1, 2, 3, 4])
  compare.as_json(to_array('', 0, 1, [2, 3], {'a': 4, 'b': 5}), ['', 0, 1, 2, 3, 4, 5])
})