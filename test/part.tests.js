
import part    from '../functions/part'
import compare from './utils/compare'
import economy from './utils/economy'

it("part", () => {

  const db = economy()

  compare.as_json(
    part(db, 'person', "pk.0", 'full_name'),
    ['Deanna Gardner']
  )
  compare.as_json(
    part(db, 'person', ["pk.0", "pk.1"], 'full_name'),
    ['Deanna Gardner', 'Brian Rodriguez']
  )
  compare.as_json(
    part(db, null, "pk.0", 'pk'),
    ["pk.0", "pk.0"]
  )
  compare.as_json(
    part(db, 'person', ["pk.1", "pk.7"]),
    [{ pk: "pk.1", full_name: 'Brian Rodriguez'},{pk: "pk.7", full_name: 'Matthew Ramirez' }]
  )
})