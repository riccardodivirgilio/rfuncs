
import repeat   from '../functions/repeat'
import compare  from './utils/compare'

it("repeat", () => {

  compare.as_json(
    repeat(1),
    [1]
  )
  
  compare.as_json(
    repeat(1, 3),
    [1, 1, 1]
  )

  compare.as_json(
    repeat(1, 0),
    []
  )

})