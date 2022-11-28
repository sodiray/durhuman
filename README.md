# Human Duration

I am tired of seeing `exp: 22220201838`. What does that mean to a human? This tiny package let's you write `'23 days'` and parse it to into a number.

## Install

```
yarn add durhuman
```

Includes a `Duration` type that can be really helpful if you're using Typescript.

## Usage

By default parse will parse as seconds. Pass the optional `unit` argument
to have it convert to a differnt unit of time.

```ts
import dur, { Duration } from 'durhuman'

dur('1 second')
// 1

dur('23 minutes')
// 1,380

dur('23 minutes', 'milliseconds')
// 1,380,000

dur('2 days')
// 172,800

dur('2 days', 'hours')
// 48
```
