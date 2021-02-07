const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const toTwoDigit = (number) => {
    return (number <= 9 ? '0' + number: number); 
  }
  clockTitle.innerText = `${toTwoDigit(hour)}:${toTwoDigit(minute)}:${toTwoDigit(second)}`;
}


setInterval(getTime, 1000);
