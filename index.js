function dateToUNIX(dateStr){
    const [date, month, year] = dateStr.split('/')
    return Math.floor(new Date(+year, month-1, +date).getTime() / 1000)
}

module.exports = {dateToUNIX}