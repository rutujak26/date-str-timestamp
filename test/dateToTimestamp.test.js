const {dateToTimestamp} = require('date-str-timestamp')

describe("DD/MM/YYYY to timestamp", () => {
     describe("dateToTimestamp", () => {
          test("convert DD/MM/YYYY to timestamp", () => {
               expect(dateToTimestamp('01/01/2000')).toBe(946684800)
               expect(dateToTimestamp('02/02/2000')).toBe(949449600)
               expect(dateToTimestamp('13/10/2000')).toBe(971395200)
          })
     })
})