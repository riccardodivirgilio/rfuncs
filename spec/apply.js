
export default {
  usage: [
      {line: 'apply(func, array)', description: 'returns func(*array)'},
  ],
  sections: [{
    tests: (apply, compare) => {

      compare(apply((a) => a + 2, 1), 3)
      compare(apply((a) => a + 2, [1]), 3)
      compare(apply((a, b) => a + b, [1, 2]), 3)
      compare(apply((a, b, c) => a + b + c, [1, 2, 3]), 6)

    }
  }]
}
