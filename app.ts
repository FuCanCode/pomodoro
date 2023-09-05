const btnStart = document.querySelector(".btn__start") as HTMLDivElement;
const timerEl = document.querySelector(".timer") as HTMLParagraphElement;

const finishSound = new Audio("paiste-gong-75913.mp3");

const timer = function (min: number = 25) {
  let seconds = min * 60;

  const countdown = () => {
    if (seconds === 0) {
      finishSound.play();
      clearInterval(timerId);
    }

    timerEl.textContent = new Intl.DateTimeFormat(navigator.language, { minute: "2-digit", second: "2-digit" }).format(seconds * 1000) + " min";
    seconds--;
  };
  countdown();
  const timerId = setInterval(countdown, 1000, min);
};

btnStart.addEventListener("click", (ev) => {
  console.log(ev);
  timer();
});
