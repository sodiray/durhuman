import { describe, expect, test } from '@jest/globals'
import dur, { Duration } from '../index'

describe('dur', () => {
  describe('parse function (without conversion)', () => {
    // millisecond(s)
    test('returns correct value for "10 millisecond" input', () => {
      const input: Duration = '10 millisecond'
      const result = dur(input)
      expect(result).toBe(10 / 1000)
    })
    test('returns correct value for "3 milliseconds" input', () => {
      const input: Duration = '3 milliseconds'
      const result = dur(input)
      expect(result).toBe(3 / 1000)
    })
    test('returns correct value for "3 ms" input', () => {
      const input: Duration = '3 ms'
      const result = dur(input)
      expect(result).toBe(3 / 1000)
    })

    // second(s)
    test('returns correct value for "10 seconds" input', () => {
      const input: Duration = '10 seconds'
      const result = dur(input)
      expect(result).toBe(10)
    })
    test('returns correct value for "1 second" input', () => {
      const input: Duration = '1 second'
      const result = dur(input)
      expect(result).toBe(1)
    })
    test('returns correct value for "1 s" input', () => {
      const input: Duration = '1 s'
      const result = dur(input)
      expect(result).toBe(1)
    })

    // minute(s)
    test('returns correct value for "1 minute" input', () => {
      const input: Duration = '1 minute'
      const result = dur(input)
      expect(result).toBe(60)
    })
    test('returns correct value for "12 minutes" input', () => {
      const input: Duration = '12 minutes'
      const result = dur(input)
      expect(result).toBe(60 * 12)
    })
    test('returns correct value for "12 m" input', () => {
      const input: Duration = '12 m'
      const result = dur(input)
      expect(result).toBe(60 * 12)
    })

    // hour(s)
    test('returns correct value for "3 hour" input', () => {
      const input: Duration = '3 hour'
      const result = dur(input)
      expect(result).toBe(60 * 60 * 3)
    })
    test('returns correct value for "34 hours" input', () => {
      const input: Duration = '34 hours'
      const result = dur(input)
      expect(result).toBe(60 * 60 * 34)
    })
    test('returns correct value for "34 hr" input', () => {
      const input: Duration = '34 hr'
      const result = dur(input)
      expect(result).toBe(60 * 60 * 34)
    })

    // days(s)
    test('returns correct value for "2 day" input', () => {
      const input: Duration = '2 day'
      const result = dur(input)
      expect(result).toBe(60 * 60 * 24 * 2)
    })
    test('returns correct value for "2 days" input', () => {
      const input: Duration = '2 days'
      const result = dur(input)
      expect(result).toBe(60 * 60 * 24 * 2)
    })
    test('returns correct value for "2 d" input', () => {
      const input: Duration = '2 d'
      const result = dur(input)
      expect(result).toBe(60 * 60 * 24 * 2)
    })
  })

  describe('parse function (with conversion)', () => {
    // millisecond(s)
    test('returns correct value for "10 millisecond" input', () => {
      const input: Duration = '10 millisecond'
      const result = dur(input, 'millisecond')
      expect(result).toBe(10)
    })
    test('returns correct value for "3 milliseconds" input', () => {
      const input: Duration = '3 milliseconds'
      const result = dur(input, 'milliseconds')
      expect(result).toBe(3)
    })
    test('returns correct value for "3 ms" input', () => {
      const input: Duration = '3 ms'
      const result = dur(input, 'ms')
      expect(result).toBe(3)
    })

    // second(s)
    test('returns correct value for "10 seconds" as seconds input', () => {
      const input: Duration = '10 seconds'
      const result = dur(input, 'seconds')
      expect(result).toBe(10)
    })
    test('returns correct value for "1 second" as second input', () => {
      const input: Duration = '1 second'
      const result = dur(input, 'second')
      expect(result).toBe(1)
    })
    test('returns correct value for "1 s" as second input', () => {
      const input: Duration = '1 s'
      const result = dur(input, 's')
      expect(result).toBe(1)
    })

    // minute(s)
    test('returns correct value for "1 minute" as minute input', () => {
      const input: Duration = '1 minute'
      const result = dur(input, 'minute')
      expect(result).toBe(1)
    })
    test('returns correct value for "12 minutes" as minutes input', () => {
      const input: Duration = '12 minutes'
      const result = dur(input, 'minutes')
      expect(result).toBe(12)
    })
    test('returns correct value for "1 m" as minute input', () => {
      const input: Duration = '1 m'
      const result = dur(input, 'm')
      expect(result).toBe(1)
    })

    // hour(s)
    test('returns correct value for "3 hour" as hour input', () => {
      const input: Duration = '3 hour'
      const result = dur(input, 'hour')
      expect(result).toBe(3)
    })
    test('returns correct value for "34 hours" as hours input', () => {
      const input: Duration = '34 hours'
      const result = dur(input, 'hours')
      expect(result).toBe(34)
    })
    test('returns correct value for "34 hr" as hour input', () => {
      const input: Duration = '34 hr'
      const result = dur(input, 'hr')
      expect(result).toBe(34)
    })

    // days(s)
    test('returns correct value for "2 day" as day input', () => {
      const input: Duration = '2 day'
      const result = dur(input, 'day')
      expect(result).toBe(2)
    })
    test('returns correct value for "2 days" as days input', () => {
      const input: Duration = '2 days'
      const result = dur(input, 'days')
      expect(result).toBe(2)
    })
    test('returns correct value for "2 d" as days input', () => {
      const input: Duration = '2 d'
      const result = dur(input, 'd')
      expect(result).toBe(2)
    })

    // week(s)
    test('returns correct value for "2 week" as week input', () => {
      const input: Duration = '2 week'
      const result = dur(input, 'week')
      expect(result).toBe(2)
    })
    test('returns correct value for "2 weeks" as weeks input', () => {
      const input: Duration = '2 weeks'
      const result = dur(input, 'weeks')
      expect(result).toBe(2)
    })

    // month(s)
    test('returns correct value for "2 month" as month input', () => {
      const input: Duration = '2 month'
      const result = dur(input, 'month')
      expect(result).toBe(2)
    })
    test('returns correct value for "2 months" as months input', () => {
      const input: Duration = '2 months'
      const result = dur(input, 'months')
      expect(result).toBe(2)
    })
  })
})
