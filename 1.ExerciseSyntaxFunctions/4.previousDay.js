"use strict";

function previousDay(year, month, day) {
  let dataString = year + "-" + month + "-" + day;
  let event = new Date(dataString);
  event.setDate(day - 1);

  console.log(
    event.getFullYear() +
      `-` +
      (Number(event.getMonth()) + 1) +
      "-" +
      event.getDate()
  );
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);
