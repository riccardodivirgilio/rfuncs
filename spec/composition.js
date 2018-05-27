export default {
  usage: [
      {line: 'composition(f, g, h)(1)', description: 'returns f(g(h(1)))'},
  ],
  sections: [{
    tests: (composition, compare) => {

      compare(composition()(4), 4)
      compare(composition(a => a + 2)(4), 6)
      compare(composition(a => a + 2, a => a * 3)(4), 18)
      compare(composition(a => a + 2, a => a * 3, a => a / 2)(4), 9)

    }
  }]
}