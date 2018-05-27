
export default {
  sections: [{
    tests: (sort_by, compare) => {

      compare(
        sort_by(
            [4, 3, 10, 2], 
        ), 
        [2, 3, 4, 10]
      )    
    

      compare(
        sort_by(
            [[2, "b"], [1, "a"]], 
            arr => arr[0]
        ), 
        [[1, "a"], [2, "b"]]
      )    

      compare(
        sort_by(
            [[2, 3], [2, 1], [1, 1]], 
            [arr => arr[0], arr => arr[1]]
        ), 
        [[1, 1], [2, 1], [2, 3]]
      )    

      compare(
        sort_by(
            [[2, 3], [2, 1], [1, 1]], 
            [0, 1]
        ), 
        [[1, 1], [2, 1], [2, 3]]
      )
     
      compare(
        sort_by(
            [{a: 2}, {a: 3}, {a:1}], 
            'a'
        ), 
        [{a:1}, {a:2}, {a:3}]
      )    

      compare(
        sort_by(
            [{a: 2, b: 3}, {a: 2, b:1}, {a:1, b:1}], 
            ['a', 'b']
        ), 
        [{a:1, b:1}, {a: 2, b:1}, {a: 2, b: 3}]
      )

    }
  }]
}