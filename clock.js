const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1"),
  dateTitle = clockContainer.querySelector("h3"),
  amPmTitle = clockContainer.querySelector(".amPm"),
  secondTitle = clockContainer.querySelector(".seconds");

function getTime() {
  const today = new Date();
  const seconds = today.getSeconds(),
    minutes = today.getMinutes(),
    getHours = today.getHours(),
    year = today.getFullYear(),
    month = today.getMonth() + 1,
    date = today.getDate(),
    week = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"),
    day = week[today.getDay()],
    hours = getHours > 12 ? getHours - 12 : getHours;
  if (getHours < 12) {
    amPmTitle.innerText = "AM";
  } else {
    amPmTitle.innerText = "PM";
  }

  dateTitle.innerText = `${year}. ${month < 10 ? `0${month}` : month}. ${
    date < 10 ? `0${date}` : date
  } ${day}`;
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  secondTitle.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
