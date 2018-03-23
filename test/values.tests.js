
import values  from '../functions/values'
import compare from './utils/compare'

it("values", () => {

  const data = {'a':'b', 'c':'d', 'e':'f'};

  compare.as_json(
    values(data),
    ['b', 'd', 'f']
  )
})