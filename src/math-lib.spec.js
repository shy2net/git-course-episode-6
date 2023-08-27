import { expect } from 'chai';
import * as lib from './math-lib.js';

describe('MathLib', () => {
  // TODO: Write your own test cases for sum and subtract
  it('should return correct sum 11, of 1 + 10', () => {
    expect(lib.sum(10, 1)).to.eq(11)
  });

  it('should return correct subtraction 5, of 7 -2', () => {
    expect(lib.subtract(7, 2)).to.eq(5)
  });

});
