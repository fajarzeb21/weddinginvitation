import { useEffect, useState } from "react";

function getTimeLeft() {
const weddingDate = new Date("2027-02-14T16:00:00");
const difference = weddingDate.getTime() - Date.now();

if (difference <= 0) {
return null;
}

return {
Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
Minutes: Math.floor((difference / (1000 * 60)) % 60),
Seconds: Math.floor((difference / 1000) % 60),
};
}

function Countdown() {
const [timeLeft, setTimeLeft] = useState(getTimeLeft);

useEffect(() => {
const timer = setInterval(() => {
setTimeLeft(getTimeLeft());
}, 1000);

return () => clearInterval(timer);


}, []);

return ( <section className="countdown-section"> <p className="countdown-label">COUNTING DOWN TO FOREVER</p>


  <h2>Our Big Day</h2>

  {timeLeft ? (
    <div className="countdown-grid">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div className="countdown-item" key={label}>
          <span>{String(value).padStart(2, "0")}</span>
          <p>{label}</p>
        </div>
      ))}
    </div>
  ) : (
    <p className="countdown-finished">
      Today is the day! Let the celebration begin.
    </p>
  )}
</section>

);
}

export default Countdown;
