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
    week = new Array(
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일"
    ),
    day = week[today.getDay()],
    hours =
      getHours > 12 ? getHours - 12 : getHours === 0 ? getHours + 12 : getHours;
  amPmTitle.innerText = getHours < 12 ? "오\n전" : "오\n후";
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
