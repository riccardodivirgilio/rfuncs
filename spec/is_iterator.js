
import test_iterator from '../test/utils/test_iterator'

export default {
  sections: [{
    tests: (is_iterator, compare) => {

      compare(is_iterator('a'), false)
      compare(is_iterator(0),   false)
      compare(is_iterator(test_iterator()),  true)

    }
  }]
}