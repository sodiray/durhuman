import { assert } from 'chai'
import dur, { Duration } from '../index'

describe('duration-fns', () => {

  describe('parse function (without conversion)', () => {

    // millisecond(s)
    test('returns correct value for "10 millisecond" input', () => {
      const input: Duration = '10 millisecond'
      const result = dur(input)
      assert.equal(result, 10 / 1000)
    })
    test('returns correct value for "3 milliseconds" input', () => {
      const input: Duration = '3 milliseconds'
      const result = dur(input)
      assert.equal(result, 3 / 1000)
    })

    // second(s)
    test('returns correct value for "10 seconds" input', () => {
      const input: Duration = '10 seconds'
      const result = dur(input)
      assert.equal(result, 10)
    })
    test('returns correct value for "1 second" input', () => {
      const input: Duration = '1 second'
      const result = dur(input)
      assert.equal(result, 1)
    })
    
    // minute(s)
    test('returns correct value for "1 minute" input', () => {
      const input: Duration = '1 minute'
      const result = dur(input)
      assert.equal(result, 60)
    })
    test('returns correct value for "12 minutes" input', () => {
      const input: Duration = '12 minutes'
      const result = dur(input)
      assert.equal(result, 60 * 12)
    })
    
    // hour(s)
    test('returns correct value for "3 hour" input', () => {
      const input: Duration = '3 hour'
      const result = dur(input)
      assert.equal(result, 60 * 60 * 3)
    })
    test('returns correct value for "34 hours" input', () => {
      const input: Duration = '34 hours'
      const result = dur(input)
      assert.equal(result, 60 * 60 * 34)
    })

    // days(s)
    test('returns correct value for "2 day" input', () => {
      const input: Duration = '2 day'
      const result = dur(input)
      assert.equal(result, 60 * 60 * 24 * 2)
    })
    test('returns correct value for "2 days" input', () => {
      const input: Duration = '2 days'
      const result = dur(input)
      assert.equal(result, 60 * 60 * 24 * 2)
    })
  })
  
  describe('parse function (with conversion)', () => {

    // millisecond(s)
    test('returns correct value for "10 millisecond" input', () => {
      const input: Duration = '10 millisecond'
      const result = dur(input, 'millisecond')
      assert.equal(result, 10)
    })
    test('returns correct value for "3 milliseconds" input', () => {
      const input: Duration = '3 milliseconds'
      const result = dur(input, 'milliseconds')
      assert.equal(result, 3)
    })

    // second(s)
    test('returns correct value for "10 seconds" as seconds input', () => {
      const input: Duration = '10 seconds'
      const result = dur(input, 'seconds')
      assert.equal(result, 10)
    })
    test('returns correct value for "1 second" as second input', () => {
      const input: Duration = '1 second'
      const result = dur(input, 'second')
      assert.equal(result, 1)
    })
    
    // minute(s)
    test('returns correct value for "1 minute" as minute input', () => {
      const input: Duration = '1 minute'
      const result = dur(input, 'minute')
      assert.equal(result, 1)
    })
    test('returns correct value for "12 minutes" as minutes input', () => {
      const input: Duration = '12 minutes'
      const result = dur(input, 'minutes')
      assert.equal(result, 12)
    })
    
    // hour(s)
    test('returns correct value for "3 hour" as hour input', () => {
      const input: Duration = '3 hour'
      const result = dur(input, 'hour')
      assert.equal(result, 3)
    })
    test('returns correct value for "34 hours" as hours input', () => {
      const input: Duration = '34 hours'
      const result = dur(input, 'hours')
      assert.equal(result, 34)
    })

    // days(s)
    test('returns correct value for "2 day" as day input', () => {
      const input: Duration = '2 day'
      const result = dur(input, 'day')
      assert.equal(result, 2)
    })
    test('returns correct value for "2 days" as days input', () => {
      const input: Duration = '2 days'
      const result = dur(input, 'days')
      assert.equal(result, 2)
    })
  })

})