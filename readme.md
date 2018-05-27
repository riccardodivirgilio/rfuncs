Welcome to RFUNCS!

A collection of amazing functions:

# all
Returns True if all values in the array are true.
```
all()
// => true
```

```
all(true)
// => true
```

```
all(false)
// => false
```

```
all([true,true])
// => true
```

```
all([true,false])
// => false
```

```
all(4, i => i <= 4)
// => true
```

```
all(4, i => i > 4)
// => false
```

```
all([2,4], i => i <= 2)
// => false
```

```
all([2,4], i => i <= 4)
// => true
```

# any

```
any()
// => false
```

```
any(true)
// => true
```

```
any(false)
// => false
```

```
any([false,false])
// => false
```

```
any([true,false])
// => true
```

```
any(4, i => i <= 4)
// => true
```

```
any(4, i => i > 4)
// => false
```

```
any([2,4], i => i <= 2)
// => true
```

```
any([2,4], i => i <= 4)
// => true
```

```
any([2,4], i => i <= 1)
// => false
```

# apply

```
apply(a => a + 2, 1)
// => 3
```

```
apply(a => a + 2, [1])
// => 3
```

```
apply((a, b) => a + b, [1,2])
// => 3
```

```
apply((a, b, c) => a + b + c, [1,2,3])
// => 6
```

# composition

```
composition()(4)
// => 4
```

```
composition(a => a + 2)(4)
// => 6
```

```
composition(a => a + 2, a => a * 3)(4)
// => 18
```

```
composition(a => a + 2, a => a * 3, a => a / 2)(4)
// => 9
```

# contains

```
contains([1,2,3], 2)
// => true
```

```
contains([1,2,3], 8)
// => false
```

```
contains({"a":1,"b":2}, "a")
// => true
```

```
contains({"a":1,"b":2}, "c")
// => false
```

```
contains(1, 1)
// => true
```

# filter

```
filter(v => v < 3, [1,2,3])
// => [1,2]
```

```
filter(v => v < 3, 1)
// => [1]
```

```
filter(v => v < 3, 5)
// => []
```

```
filter(v => v < 3, {"a":2,"b":5})
// => {"a":2}
```

```
filter((v, index) => v == index, [0,1,2,4])
// => [0,1,2]
```

```
filter((v, index) => v == index, 0)
// => [0]
```

```
filter((v, index) => v == index, 1)
// => []
```

```
filter((v, index) => v == index, {"a":"a","b":"c"})
// => {"a":"a"}
```

# first

```
first(1)
// => 1
```

```
first([1,2,3])
// => 1
```

```
first({"a":1,"b":2})
// => 1
```

# is_array

```
is_array("a")
// => false
```

```
is_array(0)
// => false
```

```
is_array([])
// => true
```

```
is_array({})
// => false
```

```
is_array(null)
// => false
```

```
is_array()
// => false
```

# is_function

```
is_function("a")
// => false
```

```
is_function(0)
// => false
```

```
is_function([])
// => false
```

```
is_function({})
// => false
```

```
is_function(null)
// => false
```

```
is_function()
// => false
```

```
is_function()
// => false
```

```
is_function(() => 1)
// => true
```

```
is_function(function () {})
// => true
```

# is_iterator

```
is_iterator("a")
// => false
```

```
is_iterator(0)
// => false
```

```
is_iterator({})
// => true
```

# is_null

```
is_null("a")
// => false
```

```
is_null(0)
// => false
```

```
is_null([])
// => false
```

```
is_null({})
// => false
```

```
is_null(null)
// => true
```

```
is_null()
// => true
```

# is_object

```
is_object("a")
// => false
```

```
is_object(0)
// => false
```

```
is_object([])
// => false
```

```
is_object({})
// => true
```

```
is_object(null)
// => false
```

```
is_object()
// => false
```

# key_drop

```
key_drop({"a":"b","c":"d","e":"f","k":"p"}, "a")
// => {"c":"d","e":"f","k":"p"}
```

```
key_drop({"a":"b","c":"d","e":"f","k":"p"}, ["c","k"])
// => {"a":"b","e":"f"}
```

```
key_drop({"a":"b","c":"d","e":"f","k":"p"}, ["a","c","z"])
// => {"e":"f","k":"p"}
```

```
key_drop({"a":"b","c":"d","e":"f","k":"p"})
// => {"a":"b","c":"d","e":"f","k":"p"}
```

# keys

```
keys({"a":"b","c":"d","e":"f"})
// => ["a","c","e"]
```

# key_take

```
key_take({"a":"b","c":"d","e":"f"}, "a")
// => {"a":"b"}
```

```
key_take({"a":"b","c":"d","e":"f"}, ["a","c"])
// => {"a":"b","c":"d"}
```

```
key_take({"a":"b","c":"d","e":"f"}, ["a","c","z"])
// => {"a":"b","c":"d"}
```

```
key_take({"a":"b","c":"d","e":"f"})
// => {"a":"b","c":"d","e":"f"}
```

```
key_take({"a":"b","c":"d","e":"f"}, ["a","c","z","j"], 3)
// => {"a":"b","c":"d","z":3,"j":3}
```

```
key_take({"a":"b","c":"d","e":"f"}, ["a","c","z","j"], null)
// => {"a":"b","c":"d","z":null,"j":null}
```

# last

```
last(1)
// => 1
```

```
last([1,2,3])
// => 3
```

```
last({"a":1,"b":2})
// => 2
```

# length

```
length()
// => 0
```

```
length(1)
// => 1
```

```
length("foo")
// => 1
```

```
length([1])
// => 1
```

```
length([1,2,3])
// => 3
```

```
length({"a":2})
// => 1
```

```
length({"a":2,"b":3})
// => 2
```

# map

```
map(v => v + 2, [1,2,3])
// => [3,4,5]
```

```
map(v => v + 2, 1)
// => [3]
```

```
map(v => v + 2, {"a":3,"b":5})
// => {"a":5,"b":7}
```

```
map(v => v + 2, {})
// => [3,4]
```

```
map((v, index) => v + index, [1,2,3])
// => [1,3,5]
```

```
map((v, index) => v + index, 1)
// => [1]
```

```
map((v, index) => v + index, {"a":3})
// => {"a":"3a"}
```

```
map((v, index) => v + index, {})
// => [1,3]
```

# merge

```
merge()
// => {}
```

```
merge({"a":1})
// => {"a":1}
```

```
merge({"a":1}, {"b":2})
// => {"a":1,"b":2}
```

```
merge({"a":1}, {"b":2}, {"c":3})
// => {"a":1,"b":2,"c":3}
```

# nest

```
nest(s => s + "b", "a", 0)
// => "a"
```

```
nest(s => s + "b", "a", 1)
// => "ab"
```

```
nest(s => s + "b", "a", 5)
// => "abbbbb"
```

# object_map

```
object_map(v => v, v => v + 2, [1,2,3])
// => {"1":3,"2":4,"3":5}
```

```
object_map(v => v, v => v + 2, 1)
// => {"1":3}
```

```
object_map(v => v, v => v + 2, {})
// => {"1":3,"2":4}
```

```
object_map((v, i) => i + 1, (v, i) => v + 2, [4,5,6])
// => {"1":6,"2":7,"3":8}
```

```
object_map((v, i) => i + 1, (v, i) => v + 2, 3)
// => {"1":5}
```

```
object_map((v, i) => i + 1, (v, i) => v + 2, {})
// => {"1":3,"2":4}
```

# part

```
part({"person":{"pk.0":{"pk":"pk.0","full_name":"Deanna Gardner"},"pk.1":{"pk":"pk.1","full_name":"Brian Rodriguez"},"pk.2":{"pk":"pk.2","full_name":"Rebecca Burke"},"pk.3":{"pk":"pk.3","full_name":"Brian Taylor"},"pk.4":{"pk":"pk.4","full_name":"Heather Watkins"},"pk.5":{"pk":"pk.5","full_name":"Chris Villegas"},"pk.6":{"pk":"pk.6","full_name":"Danielle Henderson"},"pk.7":{"pk":"pk.7","full_name":"Matthew Ramirez"}},"transaction":{"pk.0":{"pk":"pk.0","amount":370},"pk.1":{"pk":"pk.1","amount":930},"pk.2":{"pk":"pk.2","amount":740},"pk.3":{"pk":"pk.3","amount":560}}}, "person", "pk.0", "full_name")
// => ["Deanna Gardner"]
```

```
part({"person":{"pk.0":{"pk":"pk.0","full_name":"Deanna Gardner"},"pk.1":{"pk":"pk.1","full_name":"Brian Rodriguez"},"pk.2":{"pk":"pk.2","full_name":"Rebecca Burke"},"pk.3":{"pk":"pk.3","full_name":"Brian Taylor"},"pk.4":{"pk":"pk.4","full_name":"Heather Watkins"},"pk.5":{"pk":"pk.5","full_name":"Chris Villegas"},"pk.6":{"pk":"pk.6","full_name":"Danielle Henderson"},"pk.7":{"pk":"pk.7","full_name":"Matthew Ramirez"}},"transaction":{"pk.0":{"pk":"pk.0","amount":370},"pk.1":{"pk":"pk.1","amount":930},"pk.2":{"pk":"pk.2","amount":740},"pk.3":{"pk":"pk.3","amount":560}}}, "person", ["pk.0","pk.1"], "full_name")
// => ["Deanna Gardner","Brian Rodriguez"]
```

```
part({"person":{"pk.0":{"pk":"pk.0","full_name":"Deanna Gardner"},"pk.1":{"pk":"pk.1","full_name":"Brian Rodriguez"},"pk.2":{"pk":"pk.2","full_name":"Rebecca Burke"},"pk.3":{"pk":"pk.3","full_name":"Brian Taylor"},"pk.4":{"pk":"pk.4","full_name":"Heather Watkins"},"pk.5":{"pk":"pk.5","full_name":"Chris Villegas"},"pk.6":{"pk":"pk.6","full_name":"Danielle Henderson"},"pk.7":{"pk":"pk.7","full_name":"Matthew Ramirez"}},"transaction":{"pk.0":{"pk":"pk.0","amount":370},"pk.1":{"pk":"pk.1","amount":930},"pk.2":{"pk":"pk.2","amount":740},"pk.3":{"pk":"pk.3","amount":560}}}, null, "pk.0", "pk")
// => ["pk.0","pk.0"]
```

```
part({"person":{"pk.0":{"pk":"pk.0","full_name":"Deanna Gardner"},"pk.1":{"pk":"pk.1","full_name":"Brian Rodriguez"},"pk.2":{"pk":"pk.2","full_name":"Rebecca Burke"},"pk.3":{"pk":"pk.3","full_name":"Brian Taylor"},"pk.4":{"pk":"pk.4","full_name":"Heather Watkins"},"pk.5":{"pk":"pk.5","full_name":"Chris Villegas"},"pk.6":{"pk":"pk.6","full_name":"Danielle Henderson"},"pk.7":{"pk":"pk.7","full_name":"Matthew Ramirez"}},"transaction":{"pk.0":{"pk":"pk.0","amount":370},"pk.1":{"pk":"pk.1","amount":930},"pk.2":{"pk":"pk.2","amount":740},"pk.3":{"pk":"pk.3","amount":560}}}, "person", ["pk.1","pk.7"])
// => [{"pk":"pk.1","full_name":"Brian Rodriguez"},{"pk":"pk.7","full_name":"Matthew Ramirez"}]
```

# range

```
range(0)
// => []
```

```
range(5)
// => [0,1,2,3,4]
```

```
range(0, 0)
// => [0]
```

```
range(1, 5)
// => [1,2,3,4,5]
```

```
range(0, 4)
// => [0,1,2,3,4]
```

```
range(0, 4, 2)
// => [0,2,4]
```

# repeat

```
repeat(1)
// => [1]
```

```
repeat(1, 3)
// => [1,1,1]
```

```
repeat(1, 0)
// => []
```

# scan

```

// => [3,4,5]
```

```

// => [3]
```

```

// => [5,7]
```

```

// => [3,4]
```

```

// => [1,3,5]
```

```

// => [1]
```

```

// => ["3a","2b"]
```

```

// => [1,3]
```

# sort_by

```
sort_by([4,3,10,2])
// => [2,3,4,10]
```

```
sort_by([[2,"b"],[1,"a"]], function first(any) {
    return (0, _to_array2.default)(any)[0];
})
// => [[1,"a"],[2,"b"]]
```

```
sort_by([[2,3],[2,1],[1,1]], [null,null])
// => [[1,1],[2,1],[2,3]]
```

```
sort_by([[2,3],[2,1],[1,1]], [0,1])
// => [[1,1],[2,1],[2,3]]
```

```
sort_by([{"a":2},{"a":3},{"a":1}], "a")
// => [{"a":1},{"a":2},{"a":3}]
```

```
sort_by([{"a":2,"b":3},{"a":2,"b":1},{"a":1,"b":1}], ["a","b"])
// => [{"a":1,"b":1},{"a":2,"b":1},{"a":2,"b":3}]
```

# sort

```
sort([3,1,2])
// => [1,2,3]
```

```
sort([3,1,2], (a, b) => a > b)
// => [1,2,3]
```

```
sort([3,1,2], (a, b) => a < b)
// => [3,2,1]
```

```
sort({"a":3,"b":1,"c":2})
// => [1,2,3]
```

```
sort({"a":3,"b":1,"c":2}, (a, b) => a > b)
// => [1,2,3]
```

```
sort({"a":3,"b":1,"c":2}, (a, b) => a < b)
// => [3,2,1]
```

```

// => [3,1,2]
```

```

// => {"a":3,"b":1,"c":2}
```

# to_array

```
to_array(0)
// => [0]
```

```
to_array("a")
// => ["a"]
```

```
to_array([0,1,2,[3,4],{"a":5}])
// => [0,1,2,[3,4],{"a":5}]
```

```
to_array({"a":1,"b":2,"c":[3,4],"d":{"a":5}})
// => [1,2,[3,4],{"a":5}]
```

```
to_array({})
// => [1,2]
```

```
to_array()
// => []
```

```
to_array("", 0, 1, 2, 3)
// => ["",0,1,2,3]
```

```
to_array("", 0, 1, [2,3], 4)
// => ["",0,1,2,3,4]
```

```
to_array("", 0, 1, [2,3], {"a":4,"b":5})
// => ["",0,1,2,3,4,5]
```

# values

```
values({"a":"b","c":"d","e":"f"})
// => ["b","d","f"]
```

