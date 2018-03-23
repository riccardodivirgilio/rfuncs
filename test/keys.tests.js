
import compare from './utils/compare'
import keys    from '../functions/keys'

it("keys", () => {

  const data = {'a':'b', 'c':'d', 'e':'f'};

  compare.as_json(
    keys(data),
    ['a', 'c', 'e']
  )
})