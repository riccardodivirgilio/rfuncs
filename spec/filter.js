export default {
  sections: [{
    name: 'filter',
    usage: [
      {line: 'filter(data, crit)', description: 'picks out all elements xₑ of data for which crit(data[e], e) is True'},
    ],
    tests: (filter, compare) => {

      compare(filter((v) => v < 3, [1, 2, 3]), [1, 2])
      compare(filter((v) => v < 3, 1), [1])
      compare(filter((v) => v < 3, 5), [])
      compare(filter((v) => v < 3, {'a': 2, 'b':5}), {'a': 2})

    }
  }, {
    name: 'filter indexed',
    tests: (filter, compare) => {

      compare(filter((v, index) => v == index, [0, 1, 2, 4]), [0, 1, 2])
      compare(filter((v, index) => v == index, 0), [0])
      compare(filter((v, index) => v == index, 1), [])
      compare(filter((v, index) => v == index, {'a': 'a', 'b': 'c'}), {'a': 'a'})

    }    
  }]
}