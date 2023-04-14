function dateToTimestamp(dateStr) {
  const [day, month, year] = dateStr.split("/");
  const dateObject = new Date(`${year}-${month}-${day}`);
  return Math.floor(dateObject.getTime() / 1000);
}

function timestampToDate(unixTimestamp) {
  const dateObject = new Date(unixTimestamp * 1000);
  const day = dateObject.getDate().toString().padStart(2, "0");
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObject.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

module.exports = {
  dateToTimestamp,
  timestampToDate,
};
