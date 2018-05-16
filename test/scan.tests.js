
import scan    from '../functions/scan'
import compare from './utils/compare'
import test_iterator from './utils/test_iterator'

// scan can only do side effects, here a map implementation to test scan

let map = (f, iterable) => {
    let data = []
    scan((value, key) => data.push(f(value, key)), iterable)
    return data
}

it("scan", () => {
  compare.as_json(map((v) => v+2, [1, 2, 3]), [3, 4, 5])
  compare.as_json(map((v) => v+2, 1), [3])
  compare.as_json(map((v) => v+2, {'a': 3, 'b':5}), [5, 7])
  compare.as_json(map((v) => v+2, test_iterator()), [3, 4])
})

it("scan indexed", () => {
  compare.as_json(map((v, index) => v+index, [1, 2, 3]), [1, 3, 5])
  compare.as_json(map((v, index) => v+index, 1), [1])
  compare.as_json(map((v, index) => v+index, {'a': 3, 'b':2}), ['3a', '2b'])
  compare.as_json(map((v, index) => v+index, test_iterator()), [1, 3])
})