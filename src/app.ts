const btnStart = document.querySelector(".btn__start") as HTMLDivElement;
const timerEl = document.querySelector(".timer") as HTMLParagraphElement;

const timer = function (min: number = 25) {
  setInterval(() => {}, 1000, min);
};
