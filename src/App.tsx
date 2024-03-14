import { useEffect, useRef, useState } from "react";
import "./App.css";

const defaultMinutes = 0.2;
const finishSound = new Audio("paiste-gong-75913.mp3");
finishSound.volume = 0.4;

function App() {
  const [timeLeft, setTimeLeft] = useState(defaultMinutes * 60);

  const interval = useRef<null | number>(null);

  const minutes = Math.trunc(timeLeft / 60);
  const seconds = timeLeft % 60;
  const displayTime =
    timeLeft > 0
      ? `${minutes}:${seconds < 10 ? "0" + seconds : seconds} min`
      : "Take a break!";

  useEffect(() => {
    if (timeLeft <= 0 && interval.current) {
      finishSound.play();
      clearInterval(interval.current);
      interval.current = null;
      document.title = displayTime;
      return;
    }

    document.title =
      timeLeft > 0 && interval.current ? displayTime : "Pomodoro";
  }, [timeLeft, displayTime]);

  const startTimer = () => {
    if (interval.current) clearInterval(interval.current);

    setTimeLeft(defaultMinutes * 60);

    interval.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
  };

  return (
    <>
      <button onClick={startTimer} className="logo">
        Start being focused!
      </button>
      <p>{displayTime}</p>
    </>
  );
}

export default App;
