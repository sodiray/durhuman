import type { Duration, UnitOfTime } from "./types"

export const parse = (
  duration: Duration,
  toUnit: UnitOfTime = "seconds"
): number => {
  const seconds = parseToSeconds(duration)
  return toUnit === "seconds"
    ? seconds
    : convertSecondsToOtherUnit(seconds, toUnit)
}

const convertSecondsToOtherUnit = (seconds: number, unitOfTime: UnitOfTime) => {
  switch (unitOfTime) {
    case "millisecond":
    case "milliseconds":
      return seconds * 1000
    case "second":
    case "seconds":
      return seconds
    case "minute":
    case "minutes":
      return seconds / 60
    case "hour":
    case "hours":
      return seconds / 60 / 60
    case "day":
    case "days":
      return seconds / 60 / 60 / 24
  }
}

const parseToSeconds = (duration: Duration) => {
  const [numStr, unit] = duration.split(" ") as [string, UnitOfTime]
  const num = parseInt(numStr)
  switch (unit) {
    case "millisecond":
    case "milliseconds":
      return num / 1000
    case "second":
    case "seconds":
      return num
    case "minute":
    case "minutes":
      return num * 60
    case "hour":
    case "hours":
      return num * 60 * 60
    case "day":
    case "days":
      return num * 60 * 60 * 24
  }
}
