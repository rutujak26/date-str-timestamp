const {timestampToDate} = require('date-str-timestamp')

describe("Timestamp to DD/MM/YYYY", () => {
     describe("timestampToDate", () => {
          test("convert DD/MM/YYYY to timestamp", () => {
               expect(timestampToDate(946684800)).toBe('01/01/2000')
               expect(timestampToDate(949449600)).toBe('02/02/2000')
               expect(timestampToDate(971395200)).toBe('13/10/2000')
          })
     })
})