# RFUNCS

A collection of amazing functions:

## all

_all(array)_

- Returns `true` if all values in the array are true

```javascript
all()
// => true
```

```javascript
all(true)
// => true
```

```javascript
all(false)
// => false
```

```javascript
all([true, true])
// => true
```

```javascript
all([true, false])
// => false
```

_all(array, func)_

- Returns `true` if all values in the array are true when applied to func

```javascript
all(4, i => i <= 4)
// => true
```

```javascript
all(4, i => i > 4)
// => false
```

```javascript
all([2, 4], i => i <= 2)
// => false
```

```javascript
all([2, 4], i => i <= 4)
// => true
```

## any

_any(array)_

- Returns `true` if at least one in the values in the array is true

```javascript
any()
// => false
```

```javascript
any(true)
// => true
```

```javascript
any(false)
// => false
```

```javascript
any([false, false])
// => false
```

```javascript
any([true, false])
// => true
```

_any(array, func)_

- Returns `true` if at least one in the values in the array is true when applied to func

```javascript
any(4, i => i <= 4)
// => true
```

```javascript
any(4, i => i > 4)
// => false
```

```javascript
any([2, 4], i => i <= 2)
// => true
```

```javascript
any([2, 4], i => i <= 4)
// => true
```

```javascript
any([2, 4], i => i <= 1)
// => false
```

## apply

_apply(f, [val₁, val₂, val₃, …])_

- returns f(val₁, val₂, val₃, …)

```javascript
apply(a => a + 2, 1)
// => 3
```

```javascript
apply(a => a + 2, [1])
// => 3
```

```javascript
apply((a, b) => a + b, [1, 2])
// => 3
```

```javascript
apply((a, b, c) => a + b + c, [1, 2, 3])
// => 6
```

## composition

_composition(f₁, f₂, f₃, …)_

- returns a composition of the functions f₁, f₂, f₃, …

```javascript
composition()(4)
// => 4
```

```javascript
composition(a => a + 2)(4)
// => 6
```

```javascript
composition(
  a => a + 2,
  a => a * 3
)(4)
// => 18
```

```javascript
composition(
  a => a + 2,
  a => a * 3,
  a => a / 2
)(4)
// => 9
```

## contains

_contains(data, value)_

- returns `true` if value is contained in data

```javascript
contains([1, 2, 3], 2)
// => true
```

```javascript
contains([1, 2, 3], 8)
// => false
```

```javascript
contains({ a: 1, b: 2 }, "a")
// => true
```

```javascript
contains({ a: 1, b: 2 }, "c")
// => false
```

```javascript
contains(1, 1)
// => true
```

## delete_duplicates

_delete_duplicates(iterable)_

- deletes all duplicates from list.

```javascript
delete_duplicates([1, 1, 3])
// => [1,3]
```

```javascript
delete_duplicates([1, 7, 8, 4, 3, 4, 1, 9, 9, 2])
// => [1,7,8,4,3,9,2]
```

```javascript
delete_duplicates([])
// => []
```

## filter

_filter(data, crit)_

- picks out all elements xₑ of data for which crit(data[e], e) is True

```javascript
filter(v => v < 3, [1, 2, 3])
// => [1,2]
```

```javascript
filter(v => v < 3, 1)
// => [1]
```

```javascript
filter(v => v < 3, 5)
// => []
```

```javascript
filter(v => v < 3, { a: 2, b: 5 })
// => {"a":2}
```

```javascript
filter((v, index) => v == index, [0, 1, 2, 4])
// => [0,1,2]
```

```javascript
filter((v, index) => v == index, 0)
// => [0]
```

```javascript
filter((v, index) => v == index, 1)
// => []
```

```javascript
filter((v, index) => v == index, { a: "a", b: "c" })
// => {"a":"a"}
```

## first

```javascript
first(1)
// => 1
```

```javascript
first([1, 2, 3])
// => 1
```

```javascript
first({ a: 1, b: 2 })
// => 1
```

## group_by

```javascript
group_by([1, 1, 2, 3])
// => {"1":[1,1],"2":[2],"3":[3]}
```

```javascript
group_by([{ a: 2 }, { a: 3 }, { a: 2, b: 4 }], "a")
// => {"2":[{"a":2},{"a":2,"b":4}],"3":[{"a":3}]}
```

```javascript
group_by([{ a: 2 }, { a: 3 }, { a: 2, b: 4 }], v => v.a)
// => {"2":[{"a":2},{"a":2,"b":4}],"3":[{"a":3}]}
```

```javascript
group_by(
  [1, 1, 2, 2, 3],
  v => v,
  array => array.reduce((a, b) => a + b, 0)
)
// => {"1":2,"2":4,"3":3}
```

## is_array

```javascript
is_array("a")
// => false
```

```javascript
is_array(0)
// => false
```

```javascript
is_array([])
// => true
```

```javascript
is_array({})
// => false
```

```javascript
is_array(null)
// => false
```

```javascript
is_array()
// => false
```

## is_function

```javascript
is_function("a")
// => false
```

```javascript
is_function(0)
// => false
```

```javascript
is_function([])
// => false
```

```javascript
is_function({})
// => false
```

```javascript
is_function(null)
// => false
```

```javascript
is_function()
// => false
```

```javascript
is_function()
// => false
```

```javascript
is_function(() => 1)
// => true
```

```javascript
is_function(function () {})
// => true
```

## is_iterator

```javascript
is_iterator([1, 2, 3])
// => false
```

```javascript
function* iter() {
  yield 1
}
is_iterator(iter())
// => true
```

## is_null

```javascript
is_null("a")
// => false
```

```javascript
is_null(0)
// => false
```

```javascript
is_null([])
// => false
```

```javascript
is_null({})
// => false
```

```javascript
is_null(null)
// => true
```

```javascript
is_null()
// => true
```

## is_object

```javascript
is_object("a")
// => false
```

```javascript
is_object(0)
// => false
```

```javascript
is_object([])
// => false
```

```javascript
is_object({})
// => true
```

```javascript
is_object(null)
// => false
```

```javascript
is_object()
// => false
```

## key_drop

```javascript
key_drop({ a: "b", c: "d", e: "f", k: "p" }, "a")
// => {"c":"d","e":"f","k":"p"}
```

```javascript
key_drop({ a: "b", c: "d", e: "f", k: "p" }, ["c", "k"])
// => {"a":"b","e":"f"}
```

```javascript
key_drop({ a: "b", c: "d", e: "f", k: "p" }, ["a", "c", "z"])
// => {"e":"f","k":"p"}
```

```javascript
key_drop({ a: "b", c: "d", e: "f", k: "p" })
// => {"a":"b","c":"d","e":"f","k":"p"}
```

## key_take

```javascript
key_take({ a: "b", c: "d", e: "f" }, "a")
// => {"a":"b"}
```

```javascript
key_take({ a: "b", c: "d", e: "f" }, ["a", "c"])
// => {"a":"b","c":"d"}
```

```javascript
key_take({ a: "b", c: "d", e: "f" }, ["a", "c", "z"])
// => {"a":"b","c":"d"}
```

```javascript
key_take({ a: "b", c: "d", e: "f" })
// => {"a":"b","c":"d","e":"f"}
```

```javascript
key_take({ a: "b", c: "d", e: "f" }, ["a", "c", "z", "j"], 3)
// => {"a":"b","c":"d","z":3,"j":3}
```

```javascript
key_take({ a: "b", c: "d", e: "f" }, ["a", "c", "z", "j"], null)
// => {"a":"b","c":"d","z":null,"j":null}
```

## keys

```javascript
keys({ a: "b", c: "d", e: "f" })
// => ["a","c","e"]
```

## last

```javascript
last(1)
// => 1
```

```javascript
last([1, 2, 3])
// => 3
```

```javascript
last({ a: 1, b: 2 })
// => 2
```

## length

```javascript
length()
// => 0
```

```javascript
length(1)
// => 1
```

```javascript
length("foo")
// => 1
```

```javascript
length([1])
// => 1
```

```javascript
length([1, 2, 3])
// => 3
```

```javascript
length({ a: 2 })
// => 1
```

```javascript
length({ a: 2, b: 3 })
// => 2
```

## map

```javascript
map(v => v + 2, [1, 2, 3])
// => [3,4,5]
```

```javascript
map(v => v + 2, 1)
// => [3]
```

```javascript
map(v => v + 2, { a: 3, b: 5 })
// => {"a":5,"b":7}
```

```javascript
map((v, index) => v + index, [1, 2, 3])
// => [1,3,5]
```

```javascript
map((v, index) => v + index, 1)
// => [1]
```

```javascript
map((v, index) => v + index, { a: 3 })
// => {"a":"3a"}
```

## merge

```javascript
merge()
// => {}
```

```javascript
merge({ a: 1 })
// => {"a":1}
```

```javascript
merge({ a: 1 }, { b: 2 })
// => {"a":1,"b":2}
```

```javascript
merge({ a: 1 }, { b: 2 }, { c: 3 })
// => {"a":1,"b":2,"c":3}
```

```javascript
merge({ a: 1, b: 2 }, { b: 3 })
// => {"a":1,"b":3}
```

## nest

```javascript
nest(s => s + "b", "a", 0)
// => "a"
```

```javascript
nest(s => s + "b", "a", 1)
// => "ab"
```

```javascript
nest(s => s + "b", "a", 5)
// => "abbbbb"
```

## object_map

```javascript
object_map(
  v => v,
  v => v + 2,
  [1, 2, 3]
)
// => {"1":3,"2":4,"3":5}
```

```javascript
object_map(
  v => v,
  v => v + 2,
  1
)
// => {"1":3}
```

```javascript
object_map(
  (v, i) => i + 1,
  (v, i) => v + 2,
  [4, 5, 6]
)
// => {"1":6,"2":7,"3":8}
```

```javascript
object_map(
  (v, i) => i + 1,
  (v, i) => v + 2,
  3
)
// => {"1":5}
```

```javascript
object_map(
  (v, i) => i + 1,
  (v, i) => v + 2,
  {}
)
// => {"1":3,"2":4}
```

## ordered_object

```javascript
ordered_object([["a", 2]])
// => {"a":2}
```

```javascript
ordered_object([
  ["z", 2],
  ["b", 3],
])
// => {"z":2,"b":3}
```

```javascript
ordered_object([
  ["z", 2],
  ["b", 3],
  ["b", 4],
])
// => {"z":2,"b":4}
```

## part

```javascript
part(
  {
    person: {
      "pk.0": { pk: "pk.0", full_name: "Deanna Gardner" },
      "pk.1": { pk: "pk.1", full_name: "Brian Rodriguez" },
      "pk.2": { pk: "pk.2", full_name: "Rebecca Burke" },
      "pk.3": { pk: "pk.3", full_name: "Brian Taylor" },
      "pk.4": { pk: "pk.4", full_name: "Heather Watkins" },
      "pk.5": { pk: "pk.5", full_name: "Chris Villegas" },
      "pk.6": { pk: "pk.6", full_name: "Danielle Henderson" },
      "pk.7": { pk: "pk.7", full_name: "Matthew Ramirez" },
    },
    transaction: {
      "pk.0": { pk: "pk.0", amount: 370 },
      "pk.1": { pk: "pk.1", amount: 930 },
      "pk.2": { pk: "pk.2", amount: 740 },
      "pk.3": { pk: "pk.3", amount: 560 },
    },
  },
  "person",
  "pk.0",
  "full_name"
)
// => ["Deanna Gardner"]
```

```javascript
part(
  {
    person: {
      "pk.0": { pk: "pk.0", full_name: "Deanna Gardner" },
      "pk.1": { pk: "pk.1", full_name: "Brian Rodriguez" },
      "pk.2": { pk: "pk.2", full_name: "Rebecca Burke" },
      "pk.3": { pk: "pk.3", full_name: "Brian Taylor" },
      "pk.4": { pk: "pk.4", full_name: "Heather Watkins" },
      "pk.5": { pk: "pk.5", full_name: "Chris Villegas" },
      "pk.6": { pk: "pk.6", full_name: "Danielle Henderson" },
      "pk.7": { pk: "pk.7", full_name: "Matthew Ramirez" },
    },
    transaction: {
      "pk.0": { pk: "pk.0", amount: 370 },
      "pk.1": { pk: "pk.1", amount: 930 },
      "pk.2": { pk: "pk.2", amount: 740 },
      "pk.3": { pk: "pk.3", amount: 560 },
    },
  },
  "person",
  ["pk.0", "pk.1"],
  "full_name"
)
// => ["Deanna Gardner","Brian Rodriguez"]
```

```javascript
part(
  {
    person: {
      "pk.0": { pk: "pk.0", full_name: "Deanna Gardner" },
      "pk.1": { pk: "pk.1", full_name: "Brian Rodriguez" },
      "pk.2": { pk: "pk.2", full_name: "Rebecca Burke" },
      "pk.3": { pk: "pk.3", full_name: "Brian Taylor" },
      "pk.4": { pk: "pk.4", full_name: "Heather Watkins" },
      "pk.5": { pk: "pk.5", full_name: "Chris Villegas" },
      "pk.6": { pk: "pk.6", full_name: "Danielle Henderson" },
      "pk.7": { pk: "pk.7", full_name: "Matthew Ramirez" },
    },
    transaction: {
      "pk.0": { pk: "pk.0", amount: 370 },
      "pk.1": { pk: "pk.1", amount: 930 },
      "pk.2": { pk: "pk.2", amount: 740 },
      "pk.3": { pk: "pk.3", amount: 560 },
    },
  },
  null,
  "pk.0",
  "pk"
)
// => ["pk.0","pk.0"]
```

```javascript
part(
  {
    person: {
      "pk.0": { pk: "pk.0", full_name: "Deanna Gardner" },
      "pk.1": { pk: "pk.1", full_name: "Brian Rodriguez" },
      "pk.2": { pk: "pk.2", full_name: "Rebecca Burke" },
      "pk.3": { pk: "pk.3", full_name: "Brian Taylor" },
      "pk.4": { pk: "pk.4", full_name: "Heather Watkins" },
      "pk.5": { pk: "pk.5", full_name: "Chris Villegas" },
      "pk.6": { pk: "pk.6", full_name: "Danielle Henderson" },
      "pk.7": { pk: "pk.7", full_name: "Matthew Ramirez" },
    },
    transaction: {
      "pk.0": { pk: "pk.0", amount: 370 },
      "pk.1": { pk: "pk.1", amount: 930 },
      "pk.2": { pk: "pk.2", amount: 740 },
      "pk.3": { pk: "pk.3", amount: 560 },
    },
  },
  "person",
  ["pk.1", "pk.7"]
)
// => [{"pk":"pk.1","full_name":"Brian Rodriguez"},{"pk":"pk.7","full_name":"Matthew Ramirez"}]
```

## random_choice

## random_integer

## random_real

## range

```javascript
range(0)
// => []
```

```javascript
range(5)
// => [0,1,2,3,4]
```

```javascript
range(0, 0)
// => [0]
```

```javascript
range(1, 5)
// => [1,2,3,4,5]
```

```javascript
range(0, 4)
// => [0,1,2,3,4]
```

```javascript
range(0, 4, 2)
// => [0,2,4]
```

## repeat

```javascript
repeat(1)
// => [1]
```

```javascript
repeat(1, 3)
// => [1,1,1]
```

```javascript
repeat(1, 0)
// => []
```

## riffle

_riffle(iterable, separator)_

- riffle separator between successive elements in a list

```javascript
riffle([1, 2, 3], "s")
// => [1,"s",2,"s",3]
```

```javascript
riffle([1], "s")
// => [1]
```

```javascript
riffle([], "s")
// => []
```

## scan

```javascript
scan(v => console.log(a), [1, 2, 3])
1
2
3
// =>
```

```javascript
scan(v => console.log(a), { a: 2, b: 3, c: 4 })
2
3
4
// =>
```

```javascript
scan((v, i) => console.log(i), [1, 2, 3])
0
1
2
// =>
```

```javascript
scan((v, i) => console.log(i), { a: 2, b: 3, c: 4 })
a
b
c
// =>
```

## sort

```javascript
sort([3, 1, 2])
// => [1,2,3]
```

```javascript
sort([3, 1, 2], (a, b) => a > b)
// => [1,2,3]
```

```javascript
sort([3, 1, 2], (a, b) => a < b)
// => [3,2,1]
```

```javascript
sort({ a: 3, b: 1, c: 2 })
// => [1,2,3]
```

```javascript
sort({ a: 3, b: 1, c: 2 }, (a, b) => a > b)
// => [1,2,3]
```

```javascript
sort({ a: 3, b: 1, c: 2 }, (a, b) => a < b)
// => [3,2,1]
```

```javascript
// => [3,1,2]
```

```javascript
// => {"a":3,"b":1,"c":2}
```

## sort_by

```javascript
sort_by([4, 3, 10, 2])
// => [2,3,4,10]
```

```javascript
sort_by(
  [
    [2, "b"],
    [1, "a"],
  ],
  arr => arr[0]
)
// => [[1,"a"],[2,"b"]]
```

```javascript
sort_by(
  [
    [2, 3],
    [2, 1],
    [1, 1],
  ],
  [null, null]
)
// => [[1,1],[2,1],[2,3]]
```

```javascript
sort_by(
  [
    [2, 3],
    [2, 1],
    [1, 1],
  ],
  [0, 1]
)
// => [[1,1],[2,1],[2,3]]
```

```javascript
sort_by([{ a: 2 }, { a: 3 }, { a: 1 }], "a")
// => [{"a":1},{"a":2},{"a":3}]
```

```javascript
sort_by(
  [
    { a: 2, b: 3 },
    { a: 2, b: 1 },
    { a: 1, b: 1 },
  ],
  ["a", "b"]
)
// => [{"a":1,"b":1},{"a":2,"b":1},{"a":2,"b":3}]
```

## to_array

```javascript
to_array(0)
// => [0]
```

```javascript
to_array("a")
// => ["a"]
```

```javascript
to_array([0, 1, 2, [3, 4], { a: 5 }])
// => [0,1,2,[3,4],{"a":5}]
```

```javascript
to_array({ a: 1, b: 2, c: [3, 4], d: { a: 5 } })
// => [1,2,[3,4],{"a":5}]
```

```javascript
to_array()
// => []
```

```javascript
to_array("", 0, 1, 2, 3)
// => ["",0,1,2,3]
```

```javascript
to_array("", 0, 1, [2, 3], 4)
// => ["",0,1,2,3,4]
```

```javascript
to_array("", 0, 1, [2, 3], { a: 4, b: 5 })
// => ["",0,1,2,3,4,5]
```

## values

```javascript
values({ a: "b", c: "d", e: "f" })
// => ["b","d","f"]
```

## zip

_zip(array1, array2, ...)_

- returns [[array1[0], array2[0], ...], [array1[1], array2[1], ...], ...]

```javascript
zip([1, 2, 3], [4, 5, 6])
// => [[1,4],[2,5],[3,6]]
```
