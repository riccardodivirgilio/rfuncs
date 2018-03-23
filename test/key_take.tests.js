
import key_take from '../functions/key_take'
import compare  from './utils/compare'

it("key_take", () => {

  const data = {'a':'b', 'c':'d', 'e':'f'};

  compare.as_json(
    key_take(data, 'a'),
    {'a':'b'}
  )
  compare.as_json(
    key_take(data, ['a', 'c']),
    {'a':'b', 'c':'d'}
  )
  compare.as_json(
    key_take(data, ['a', 'c', 'z']),
    {'a':'b', 'c':'d'}
  )
  compare.as_json(
    key_take(data),
    data
  )
  compare.as_json(
    key_take(data, ['a', 'c', 'z', 'j'], 3),
    {'a':'b', 'c':'d', 'z': 3, 'j': 3}
  )
  compare.as_json(
    key_take(data, ['a', 'c', 'z', 'j'], null),
    {'a':'b', 'c':'d', 'z': null, 'j': null}
  )
})