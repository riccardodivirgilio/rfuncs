
import merge   from '../functions/merge'
import compare from './utils/compare'

it("merge", () => {
  compare.as_json(merge(), {})
  compare.as_json(merge({'a': 1}), {'a': 1})
  compare.as_json(merge({'a': 1}, {'b': 2}), {'a': 1, 'b': 2})
  compare.as_json(merge({'a': 1}, {'b': 2}, {'c': 3}), {'a': 1, 'b': 2, 'c': 3})
})