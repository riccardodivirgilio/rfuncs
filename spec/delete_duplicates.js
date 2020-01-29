export default {
  sections: [{
    name: 'delete_duplicates',
    usage: [
      {line: 'delete_duplicates(iterable)', description: 'deletes all duplicates from list.'},
    ],
    tests: (delete_duplicates, compare) => {

      compare(delete_duplicates([1, 1, 3]), [1, 3])
      compare(delete_duplicates([1, 7, 8, 4, 3, 4, 1, 9, 9, 2]), [1, 2, 3, 4, 7, 8, 9])
      compare(delete_duplicates([]), [])

    }
  }
  ]
}