
import sort_by from '../functions/sort_by'
import first   from '../functions/first'
import last    from '../functions/last'
import compare from './utils/compare'

it("sort_by", () => {

  compare.as_json(
    sort_by(
        [4, 3, 10, 2], 
    ), 
    [2, 3, 4, 10]
  )


  compare.as_json(
    sort_by(
        [[2, "b"], [1, "a"]], 
        first
    ), 
    [[1, "a"], [2, "b"]]
  )

  compare.as_json(
    sort_by(
        [[2, 3], [2, 1], [1, 1]], 
        [first, last]
    ), 
    [[1, 1], [2, 1], [2, 3]]
  )

  compare.as_json(
    sort_by(
        [[2, 3], [2, 1], [1, 1]], 
        [0, 1]
    ), 
    [[1, 1], [2, 1], [2, 3]]
  )
 
  compare.as_json(
    sort_by(
        [{a: 2}, {a: 3}, {a:1}], 
        'a'
    ), 
    [{a:1}, {a:2}, {a:3}]
  )

  compare.as_json(
    sort_by(
        [{a: 2, b: 3}, {a: 2, b:1}, {a:1, b:1}], 
        ['a', 'b']
    ), 
    [{a:1, b:1}, {a: 2, b:1}, {a: 2, b: 3}]
  )

})