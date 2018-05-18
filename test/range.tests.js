
import range    from '../functions/range'
import compare  from './utils/compare'

it("range", () => {

  compare.as_json(
    range(0),
    []
  )

  compare.as_json(
    range(5),
    [0, 1, 2, 3, 4]
  )
  
  compare.as_json(
    range(0, 0),
    [0]
  )

  compare.as_json(
    range(1, 5),
    [1, 2, 3, 4, 5]
  )

  compare.as_json(
    range(0, 4),
    [0, 1, 2, 3, 4]
  )

  compare.as_json(
    range(0, 4, 2),
    [0, 2, 4]
  )

})