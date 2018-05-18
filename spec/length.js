
export default {
  sections: [{
    tests: (length, compare) => {

      compare(length(), 0)
      compare(length(1), 1)
      compare(length('foo'), 1)
      compare(length([1]), 1)
      compare(length([1,2,3]), 3)
      compare(length({'a':2}), 1)
      compare(length({'a':2, 'b':3}), 2)

    }
  }]
}