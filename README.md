# Human Duration
I am tired of seeing `exp: 22220201838`. What the f*** does that mean to a human? This
little package let's you write `exp: '23 days'` and parse the string `'23 days'` into
a number.

## Install
```
yarn add durhuman
```
or
```
npm install durhuman
```
Types are included, if your into that.

## Usage
By default parse will parse as seconds. Pass a seconds `asUnit` argument
to have it converted to the unit you want.
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