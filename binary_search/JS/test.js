const expect = require('chai').expect
const chop1   = require('./recursive_functional')
const chop2   = require('./imperative')
const chop3   = require('./recursive_inner')
const chop4   = require('./interpolation')


describe('recursive functional', () => {
  it('works as expected', () => {
    expect(chop1(3, [])).to.equal(-1)
    expect(chop1(3, [1, 2, 3, 4, 5])).to.equal(2)
    expect(chop1(5, [1, 2, 3, 4, 5])).to.equal(4)
  })
})

describe('imperative', () => {
  it('works as expected', () => {
    expect(chop2(3, [])).to.equal(-1)
    expect(chop2(3, [1, 2, 3, 4, 5])).to.equal(2)
    expect(chop2(5, [1, 2, 3, 4, 5])).to.equal(4)
  })
})

describe('recursive inner function', () => {
  it('works as expected', () => {
    expect(chop3(3, [])).to.equal(-1)
    expect(chop3(3, [1, 2, 3, 4, 5])).to.equal(2)
    expect(chop3(5, [1, 2, 3, 4, 5])).to.equal(4)
  })
})

describe('interpolation', () => {
  it('works as expected', () => {
    expect(chop4(3, [])).to.equal(-1)
    expect(chop4(3, [1, 2, 3, 4, 5])).to.equal(2)
    expect(chop4(5, [1, 2, 3, 4, 5])).to.equal(4)
  })
})