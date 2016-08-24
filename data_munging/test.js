const expect = require('chai').expect
const {getHeadings, splitRows, getColumn, convertIfNumber,
       getColumns, parseText, removeHyphens} = require('./weather')

describe('#getHeadings()', () => {
  it('returns the correct number of headings', () => {
    const row1 = "  head1 head2 h3  head4 "
    expect(getHeadings(row1)).to.eql(["head1", "head2", "h3", "head4"])
  })

  it('returns an empty array when passed an empty string', () => {
    expect(getHeadings('')).to.eql([])
  })
})

describe('#splitRows()', () => {
  it('splits a given text on newlines', () => {
    const text = 
    `Hello
     World`
    
    expect(splitRows(text)).to.eql(["Hello", "     World"])
  })

  it('filters out empty rows and hyphens', () => {
    const text =
`
Dogs and

Cats
--------------
`

    expect(splitRows(text)).to.eql(["Dogs and", "Cats"])
  })
})


describe('#getColumn()', () => {

  it('returns the heading\'s column as an array', () => {
    const rows = [
      "cats dogs",
      "1    2",
      "3     4",
      "  4    3",
      "world lie"
    ]

    expect(getColumn("cats", "dogs", rows)).to.eql([1, 3, 4, "world"])
  })
})

describe('#convertIfNumber()', () => {
  it('converts a value to a number when this will produce a valid number', () => {
    const column   = ["1", "a", "b", "2", "HelloWorld"]
    const expected = [1, "a", "b", 2, "HelloWorld"]

    column.forEach((n, i) => {
      expect(convertIfNumber(n)).to.equal(expected[i])
    })
    
  })
})

describe('#removeHyphens()', () => {
  it('replaces hyphens with whitespace', () => {
    const testData = ['-- --', '-----']
    const expected = ["", ""]

    testData.forEach((n, i) => {
      expect(removeHyphens(n)).to.equal(expected[i])
    })
  })
})

describe('#getColumns()', () => {
  it('calls getColumn() for every heading, and returns an object', () => {
    const headings = ["cats", "dogs"]
    const rows =
    ['cats dogs',
     'hello   5',
     'liewe   8',
     '0       -'
    ]
    expect(getColumns(headings, rows)).to.eql({
      cats: ["hello", "liewe", 0],
      dogs: [5, 8, ""]
    })
  })
})

describe('#parseText()', () => {
  it('returns an object where each key is a heading and the value it\'s body', () => {
    const text =
    `
    cats dogs
    hello wor
    0    1
    nee   ja
    `
    expect(parseText(text)).to.eql({
      cats: ["hello", 0, "nee"],
      dogs: ["wor", 1, "ja"]
    })
  })
})
