import "./styles.css";

// You're gonna need this
const clockTime = document.querySelector(".time");

function getTime() {
  // Don't delete this.
  const date = new Date();
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const intervelTime = xmasDay.getTime() - date.getTime();
  const intervelDays = Math.floor(
    (intervelTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
  );
  const intervelHours = Math.floor(
    (intervelTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const intervelMinutes = Math.floor(
    (intervelTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  const intervelSeconds = Math.floor((intervelTime % (1000 * 60)) / 1000);

  const toTwoDigit = (number) => {
    return number <= 9 ? "0" + number : number;
  };
  clockTime.innerText = `${intervelDays}d ${toTwoDigit(
    intervelHours
  )}H ${toTwoDigit(intervelMinutes)}m ${toTwoDigit(intervelSeconds)}s`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
