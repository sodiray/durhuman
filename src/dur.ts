import type { Duration, UnitOfTime } from './types'

/**
 * Given a string describing an amount of time
 * returns that amount of time as a number
 */
export const parse = (
  duration: Duration,
  unit: UnitOfTime = 'seconds'
): number => {
  const seconds = toSeconds(duration)
  return unit === 'seconds' ? seconds : toUnit(seconds, unit)
}

const toUnit = (seconds: number, unitOfTime: UnitOfTime) => {
  switch (unitOfTime) {
    case 'millisecond':
    case 'milliseconds':
    case 'ms':
      return seconds * 1000
    case 'second':
    case 'seconds':
    case 's':
      return seconds
    case 'minute':
    case 'minutes':
    case 'm':
      return seconds / 60
    case 'hour':
    case 'hours':
    case 'hr':
      return seconds / 60 / 60
    case 'day':
    case 'days':
    case 'd':
      return seconds / 60 / 60 / 24
    case 'week':
    case 'weeks':
      return seconds / 60 / 60 / 24 / 7
    case 'month':
    case 'months':
      return seconds / 60 / 60 / 24 / 30
  }
}

const toSeconds = (duration: Duration) => {
  const [numStr, unit] = duration.split(' ') as [string, UnitOfTime]
  const num = parseInt(numStr)
  switch (unit) {
    case 'millisecond':
    case 'milliseconds':
    case 'ms':
      return num / 1000
    case 'second':
    case 'seconds':
    case 's':
      return num
    case 'minute':
    case 'minutes':
    case 'm':
      return num * 60
    case 'hour':
    case 'hours':
    case 'hr':
      return num * 60 * 60
    case 'day':
    case 'days':
    case 'd':
      return num * 60 * 60 * 24
    case 'week':
    case 'weeks':
      return num * 60 * 60 * 24 * 7
    case 'month':
    case 'months':
      return num * 60 * 60 * 24 * 30
  }
}
