# date-str-timestamp

![Tests](https://github.com/rutujak26/date-str-timestamp/actions/workflows/tests.yml/badge.svg)

### Convert date in `DD/MM/YYYY` string format to UNIX timestamp
Install using `npm i date-str-timestamp`

#### Usage
##### Date to timestamp
```js
const {dateToTimestamp} = require('date-str-timestamp')
date = '20/11/2022'
timestamp = dateToTimestamp(date)
console.log(timestamp) // Output should be 1668902400
```
##### Timestamp to date
```js
const {timestampToDate} = require('date-str-timestamp')
timestamp = 1668902400
date = timestampToDate(timestamp)
console.log(date)
```