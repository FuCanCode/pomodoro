const btnStart = document.querySelector(".btn__start") as HTMLDivElement;
const timerEl = document.querySelector(".timer") as HTMLParagraphElement;

const finishSound = new Audio("paiste-gong-75913.mp3");
finishSound.volume = 0.4;
console.log(finishSound);

let timerId: number;

const timer = function (min: number = 25) {
  const endTime = Date.now() + min * 60 * 1000;

  const countdown = () => {
    const timeLeft = endTime - Date.now();

    if (timeLeft <= 0) {
      finishSound.play();
      setTimeout(function () {
        timerEl.textContent = `${min}:00 min`;
      }, 100);

      clearInterval(timerId);
    }

    const timeLeftStr = new Intl.DateTimeFormat(navigator.language, { minute: "2-digit", second: "2-digit" }).format(new Date(timeLeft)) + " min";
    timerEl.textContent = timeLeftStr;
    document.title = timeLeftStr;
  };
  countdown();
  timerId = setInterval(countdown, 1000, min);
};

btnStart.addEventListener("click", (ev) => {
  clearInterval(timerId);
  timer();
});
