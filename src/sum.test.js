'use strict';

/* global require, describe, test, expect */

const { square } = require('./square');
const { sum } = require('./sum');
const { sumOfSquares } = require('./sumOfSquares');

describe('sum', () => {
  test('should return a sum of positive numbers', () => {
    expect(sum(1, 2))
      .toBe(3);
  });

  test('should return a sum of negative numbers', () => {
    expect(sum(-1, -2))
      .toBe(-3);
  });
});

describe('square', () => {
  test('should return a square of a positive number', () => {
    expect(square(6))
      .toBe(36);
  });

  test('should return a square of a negative number', () => {
    expect(square(-7))
      .toBe(49);
  });

  test('should return a square of 0', () => {
    expect(square(0))
      .toBe(0);
  });
});

describe('sumOfSquare', () => {
  test('should return a sum of squares for positive numbers', () => {
    expect(sumOfSquares(2, 3))
      .toBe(13);
  });

  test('should return a sum of squares for negative numbers', () => {
    expect(sumOfSquares(-7, -5))
      .toBe(74);
  });

  test('should return a sum of squares for 0 and any other number', () => {
    expect(sumOfSquares(0, -1))
      .toBe(1);
  });
});
