

export default {
  sections: [{
    tests: (any, compare) => {

      compare(any(),      false)
      
      compare(any(true),  true)
      compare(any(false), false)

      compare(any([false, false]),  false)
      compare(any([true, false]),   true)


      compare(any(4, i => i <= 4),  true)
      compare(any(4, i => i >  4),  false)

      compare(any([2, 4], i => i <= 2),   true)
      compare(any([2, 4], i => i <= 4),   true)
      compare(any([2, 4], i => i <= 1),   false)

    }
  }]
}
