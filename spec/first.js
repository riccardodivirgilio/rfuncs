
export default {
  sections: [{
    tests: (first, compare) => {

      compare(first(1), 1)
      compare(first([1, 2, 3]), 1)
      compare(first({'a':1, 'b':2}), 1)

    }
  }]
}