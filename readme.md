# RFUNCS

A collection of amazing functions:

## all
Returns True if all values in the array are true.
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
all([true,true])
// => true
```

```javascript
all([true,false])
// => false
```

```javascript
all(4, i => i <= 4)
// => true
```

```javascript
all(4, i => i > 4)
// => false
```

```javascript
all([2,4], i => i <= 2)
// => false
```

```javascript
all([2,4], i => i <= 4)
// => true
```

## any

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
any([false,false])
// => false
```

```javascript
any([true,false])
// => true
```

```javascript
any(4, i => i <= 4)
// => true
```

```javascript
any(4, i => i > 4)
// => false
```

```javascript
any([2,4], i => i <= 2)
// => true
```

```javascript
any([2,4], i => i <= 4)
// => true
```

```javascript
any([2,4], i => i <= 1)
// => false
```

## apply

```javascript
apply(a => a + 2, 1)
// => 3
```

```javascript
apply(a => a + 2, [1])
// => 3
```

```javascript
apply((a, b) => a + b, [1,2])
// => 3
```

```javascript
apply((a, b, c) => a + b + c, [1,2,3])
// => 6
```

## composition

```javascript
composition()(4)
// => 4
```

```javascript
composition(a => a + 2)(4)
// => 6
```

```javascript
composition(a => a + 2, a => a * 3)(4)
// => 18
```

```javascript
composition(a => a + 2, a => a * 3, a => a / 2)(4)
// => 9
```

## contains

```javascript
contains([1,2,3], 2)
// => true
```

```javascript
contains([1,2,3], 8)
// => false
```

```javascript
contains({"a":1,"b":2}, "a")
// => true
```

```javascript
contains({"a":1,"b":2}, "c")
// => false
```

```javascript
contains(1, 1)
// => true
```

## filter

```javascript
filter(v => v < 3, [1,2,3])
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
filter(v => v < 3, {"a":2,"b":5})
// => {"a":2}
```

```javascript
filter((v, index) => v == index, [0,1,2,4])
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
filter((v, index) => v == index, {"a":"a","b":"c"})
// => {"a":"a"}
```

## first

```javascript
first(1)
// => 1
```

```javascript
first([1,2,3])
// => 1
```

```javascript
first({"a":1,"b":2})
// => 1
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
is_iterator("a")
// => false
```

```javascript
is_iterator(0)
// => false
```

```javascript
is_iterator({})
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
key_drop({"a":"b","c":"d","e":"f","k":"p"}, "a")
// => {"c":"d","e":"f","k":"p"}
```

```javascript
key_drop({"a":"b","c":"d","e":"f","k":"p"}, ["c","k"])
// => {"a":"b","e":"f"}
```

```javascript
key_drop({"a":"b","c":"d","e":"f","k":"p"}, ["a","c","z"])
// => {"e":"f","k":"p"}
```

```javascript
key_drop({"a":"b","c":"d","e":"f","k":"p"})
// => {"a":"b","c":"d","e":"f","k":"p"}
```

## keys

```javascript
keys({"a":"b","c":"d","e":"f"})
// => ["a","c","e"]
```

## key_take

```javascript
key_take({"a":"b","c":"d","e":"f"}, "a")
// => {"a":"b"}
```

```javascript
key_take({"a":"b","c":"d","e":"f"}, ["a","c"])
// => {"a":"b","c":"d"}
```

```javascript
key_take({"a":"b","c":"d","e":"f"}, ["a","c","z"])
// => {"a":"b","c":"d"}
```

```javascript
key_take({"a":"b","c":"d","e":"f"})
// => {"a":"b","c":"d","e":"f"}
```

```javascript
key_take({"a":"b","c":"d","e":"f"}, ["a","c","z","j"], 3)
// => {"a":"b","c":"d","z":3,"j":3}
```

```javascript
key_take({"a":"b","c":"d","e":"f"}, ["a","c","z","j"], null)
// => {"a":"b","c":"d","z":null,"j":null}
```

## last

```javascript
last(1)
// => 1
```

```javascript
last([1,2,3])
// => 3
```

```javascript
last({"a":1,"b":2})
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
length([1,2,3])
// => 3
```

```javascript
length({"a":2})
// => 1
```

```javascript
length({"a":2,"b":3})
// => 2
```

## map

```javascript
map(v => v + 2, [1,2,3])
// => [3,4,5]
```

```javascript
map(v => v + 2, 1)
// => [3]
```

```javascript
map(v => v + 2, {"a":3,"b":5})
// => {"a":5,"b":7}
```

```javascript
map(v => v + 2, {})
// => [3,4]
```

```javascript
map((v, index) => v + index, [1,2,3])
// => [1,3,5]
```

```javascript
map((v, index) => v + index, 1)
// => [1]
```

```javascript
map((v, index) => v + index, {"a":3})
// => {"a":"3a"}
```

```javascript
map((v, index) => v + index, {})
// => [1,3]
```

## merge

```javascript
merge()
// => {}
```

```javascript
merge({"a":1})
// => {"a":1}
```

```javascript
merge({"a":1}, {"b":2})
// => {"a":1,"b":2}
```

```javascript
merge({"a":1}, {"b":2}, {"c":3})
// => {"a":1,"b":2,"c":3}
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
object_map(v => v, v => v + 2, [1,2,3])
// => {"1":3,"2":4,"3":5}
```

```javascript
object_map(v => v, v => v + 2, 1)
// => {"1":3}
```

```javascript
object_map(v => v, v => v + 2, {})
// => {"1":3,"2":4}
```

```javascript
object_map((v, i) => i + 1, (v, i) => v + 2, [4,5,6])
// => {"1":6,"2":7,"3":8}
```

```javascript
object_map((v, i) => i + 1, (v, i) => v + 2, 3)
// => {"1":5}
```

```javascript
object_map((v, i) => i + 1, (v, i) => v + 2, {})
// => {"1":3,"2":4}
```

## part

```javascript
part({"person":{"pk.0":{"pk":"pk.0","full_name":"Deanna Gardner"},"pk.1":{"pk":"pk.1","full_name":"Brian Rodriguez"},"pk.2":{"pk":"pk.2","full_name":"Rebecca Burke"},"pk.3":{"pk":"pk.3","full_name":"Brian Taylor"},"pk.4":{"pk":"pk.4","full_name":"Heather Watkins"},"pk.5":{"pk":"pk.5","full_name":"Chris Villegas"},"pk.6":{"pk":"pk.6","full_name":"Danielle Henderson"},"pk.7":{"pk":"pk.7","full_name":"Matthew Ramirez"}},"transaction":{"pk.0":{"pk":"pk.0","amount":370},"pk.1":{"pk":"pk.1","amount":930},"pk.2":{"pk":"pk.2","amount":740},"pk.3":{"pk":"pk.3","amount":560}}}, "person", "pk.0", "full_name")
// => ["Deanna Gardner"]
```

```javascript
part({"person":{"pk.0":{"pk":"pk.0","full_name":"Deanna Gardner"},"pk.1":{"pk":"pk.1","full_name":"Brian Rodriguez"},"pk.2":{"pk":"pk.2","full_name":"Rebecca Burke"},"pk.3":{"pk":"pk.3","full_name":"Brian Taylor"},"pk.4":{"pk":"pk.4","full_name":"Heather Watkins"},"pk.5":{"pk":"pk.5","full_name":"Chris Villegas"},"pk.6":{"pk":"pk.6","full_name":"Danielle Henderson"},"pk.7":{"pk":"pk.7","full_name":"Matthew Ramirez"}},"transaction":{"pk.0":{"pk":"pk.0","amount":370},"pk.1":{"pk":"pk.1","amount":930},"pk.2":{"pk":"pk.2","amount":740},"pk.3":{"pk":"pk.3","amount":560}}}, "person", ["pk.0","pk.1"], "full_name")
// => ["Deanna Gardner","Brian Rodriguez"]
```

```javascript
part({"person":{"pk.0":{"pk":"pk.0","full_name":"Deanna Gardner"},"pk.1":{"pk":"pk.1","full_name":"Brian Rodriguez"},"pk.2":{"pk":"pk.2","full_name":"Rebecca Burke"},"pk.3":{"pk":"pk.3","full_name":"Brian Taylor"},"pk.4":{"pk":"pk.4","full_name":"Heather Watkins"},"pk.5":{"pk":"pk.5","full_name":"Chris Villegas"},"pk.6":{"pk":"pk.6","full_name":"Danielle Henderson"},"pk.7":{"pk":"pk.7","full_name":"Matthew Ramirez"}},"transaction":{"pk.0":{"pk":"pk.0","amount":370},"pk.1":{"pk":"pk.1","amount":930},"pk.2":{"pk":"pk.2","amount":740},"pk.3":{"pk":"pk.3","amount":560}}}, null, "pk.0", "pk")
// => ["pk.0","pk.0"]
```

```javascript
part({"person":{"pk.0":{"pk":"pk.0","full_name":"Deanna Gardner"},"pk.1":{"pk":"pk.1","full_name":"Brian Rodriguez"},"pk.2":{"pk":"pk.2","full_name":"Rebecca Burke"},"pk.3":{"pk":"pk.3","full_name":"Brian Taylor"},"pk.4":{"pk":"pk.4","full_name":"Heather Watkins"},"pk.5":{"pk":"pk.5","full_name":"Chris Villegas"},"pk.6":{"pk":"pk.6","full_name":"Danielle Henderson"},"pk.7":{"pk":"pk.7","full_name":"Matthew Ramirez"}},"transaction":{"pk.0":{"pk":"pk.0","amount":370},"pk.1":{"pk":"pk.1","amount":930},"pk.2":{"pk":"pk.2","amount":740},"pk.3":{"pk":"pk.3","amount":560}}}, "person", ["pk.1","pk.7"])
// => [{"pk":"pk.1","full_name":"Brian Rodriguez"},{"pk":"pk.7","full_name":"Matthew Ramirez"}]
```

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

## scan

```javascript

// => [3,4,5]
```

```javascript

// => [3]
```

```javascript

// => [5,7]
```

```javascript

// => [3,4]
```

```javascript

// => [1,3,5]
```

```javascript

// => [1]
```

```javascript

// => ["3a","2b"]
```

```javascript

// => [1,3]
```

## sort_by

```javascript
sort_by([4,3,10,2])
// => [2,3,4,10]
```

```javascript
sort_by([[2,"b"],[1,"a"]], arr => arr[0])
// => [[1,"a"],[2,"b"]]
```

```javascript
sort_by([[2,3],[2,1],[1,1]], [null,null])
// => [[1,1],[2,1],[2,3]]
```

```javascript
sort_by([[2,3],[2,1],[1,1]], [0,1])
// => [[1,1],[2,1],[2,3]]
```

```javascript
sort_by([{"a":2},{"a":3},{"a":1}], "a")
// => [{"a":1},{"a":2},{"a":3}]
```

```javascript
sort_by([{"a":2,"b":3},{"a":2,"b":1},{"a":1,"b":1}], ["a","b"])
// => [{"a":1,"b":1},{"a":2,"b":1},{"a":2,"b":3}]
```

## sort

```javascript
sort([3,1,2])
// => [1,2,3]
```

```javascript
sort([3,1,2], (a, b) => a > b)
// => [1,2,3]
```

```javascript
sort([3,1,2], (a, b) => a < b)
// => [3,2,1]
```

```javascript
sort({"a":3,"b":1,"c":2})
// => [1,2,3]
```

```javascript
sort({"a":3,"b":1,"c":2}, (a, b) => a > b)
// => [1,2,3]
```

```javascript
sort({"a":3,"b":1,"c":2}, (a, b) => a < b)
// => [3,2,1]
```

```javascript

// => [3,1,2]
```

```javascript

// => {"a":3,"b":1,"c":2}
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
to_array([0,1,2,[3,4],{"a":5}])
// => [0,1,2,[3,4],{"a":5}]
```

```javascript
to_array({"a":1,"b":2,"c":[3,4],"d":{"a":5}})
// => [1,2,[3,4],{"a":5}]
```

```javascript
to_array({})
// => [1,2]
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
to_array("", 0, 1, [2,3], 4)
// => ["",0,1,2,3,4]
```

```javascript
to_array("", 0, 1, [2,3], {"a":4,"b":5})
// => ["",0,1,2,3,4,5]
```

## values

```javascript
values({"a":"b","c":"d","e":"f"})
// => ["b","d","f"]
```

