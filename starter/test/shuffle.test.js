import { expect } from 'chai';
import { shuffle } from '../src/shuffle.js';

describe('shuffle function', function() {
  it('should shuffle the indexes of an array', function() {
    const result = shuffle([1, 2, 3, 4]);
    expect(result).to.not.deep.equal([1, 2, 3, 4]);
  });
});
