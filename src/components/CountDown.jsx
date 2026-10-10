import { useEffect, useState } from "react";

function Countdown() {
  const weddingDate = new Date("October 24, 2027 16:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference <= 0) {
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        Minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        Seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="countdown-section">
      <p className="countdown-label">COUNTING DOWN TO OUR BIG DAY</p>

      <h2 className="countdown-heading">Until We Say “I Do”</h2>

      {timeLeft ? (
        <div className="countdown-container">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div className="countdown-item" key={label}>
              <span>{String(value).padStart(2, "0")}</span>
              <p>{label}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="countdown-finished">
          Today is the special day! ♡
        </p>
      )}

      <p className="countdown-note">Every second brings us closer.</p>
    </section>
  );
}

export default Countdown;