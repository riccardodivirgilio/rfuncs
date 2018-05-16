
import object_map from '../functions/object_map'
import compare    from './utils/compare'
import test_iterator from './utils/test_iterator'

it("object_map", () => {
  compare.as_json(object_map((v) => v, (v) => v+2, [1, 2, 3]), {1:3, 2:4, 3:5})
  compare.as_json(object_map((v) => v, (v) => v+2, 1), {1:3})
  compare.as_json(object_map((v) => v, (v) => v+2, test_iterator()), {1: 3, 2: 4})
})

it("object_map indexed", () => {
  compare.as_json(object_map((v, i) => i+1, (v, i) => v+2, [4, 5, 6]), {1:6, 2:7, 3:8})
  compare.as_json(object_map((v, i) => i+1, (v, i) => v+2, 3), {1:5})
  compare.as_json(object_map((v, i) => i+1, (v, i) => v+2, test_iterator()), {1: 3, 2: 4})
})