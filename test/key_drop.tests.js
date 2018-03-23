
import key_drop from '../functions/key_drop'
import compare  from './utils/compare'

it("key_drop", () => {

  const data = {'a':'b', 'c':'d', 'e':'f', 'k':'p'};

  compare.as_json(
    key_drop(data, 'a'),
    {'c':'d', 'e':'f', 'k':'p'}
  )
  compare.as_json(
    key_drop(data, ['c', 'k']),
    {'a':'b', 'e':'f'}
  )
  compare.as_json(
    key_drop(data, ['a', 'c', 'z']),
    {'e':'f', 'k':'p'}
  )
  compare.as_json(
    key_drop(data),
    data
  )
})