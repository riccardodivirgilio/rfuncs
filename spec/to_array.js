
import test_iterator from '../test/utils/test_iterator'

export default {
  sections: [{
    name: 'to_array',
    tests: (to_array, compare) => {

      compare(to_array(0), [0])
      compare(to_array('a'), ['a'])
      compare(to_array([0, 1, 2, [3, 4], {'a': 5}]), [0, 1, 2, [3, 4], {'a': 5}])
      compare(to_array({'a': 1, 'b': 2, 'c': [3, 4], 'd': {'a': 5}}), [1, 2, [3, 4], {'a': 5}])    

      compare(to_array(test_iterator()), [1, 2])

    }
  }, {
    name: 'to_array varargs',
    tests: (to_array, compare) => {

      compare(to_array(), [])
      compare(to_array('', 0, 1, 2, 3), ['', 0, 1, 2, 3])
      compare(to_array('', 0, 1, [2, 3], 4), ['', 0, 1, 2, 3, 4])
      compare(to_array('', 0, 1, [2, 3], {'a': 4, 'b': 5}), ['', 0, 1, 2, 3, 4, 5])

    }    
  }]
}
