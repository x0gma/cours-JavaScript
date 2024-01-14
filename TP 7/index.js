let totalSeconds;
let timeout;

const time = () => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let sec = seconds < 10 ? "0" + seconds : seconds;
  let min = minutes < 10 ? "0" + minutes : minutes;
  countdownDisplay.textContent = `${min} : ${sec}`;

  if (totalSeconds < 0) {
    countdownDisplay.textContent = "C'est terminé !";
    return;
  } else {
    totalSeconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
  }
  timeout = setTimeout(time, 1000);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  totalSeconds = choice.value * 60;
  clearTimeout(timeout);
  choice.value = "";
  time();
});
