import { useState } from "react";

function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="envelope-section">
      <p className="envelope-label">A SPECIAL INVITATION</p>

      <div className={`envelope ${isOpen ? "opened" : ""}`}>
        <div className="envelope-back"></div>

        <div className="envelope-card">
          <p className="card-small">TOGETHER WITH THEIR FAMILIES</p>

          <h1>
            Olivia <span>&</span> James
          </h1>

          <div className="card-line"></div>

          <p className="card-message">
            REQUEST THE PLEASURE OF YOUR COMPANY
          </p>

          <p className="card-date">24 · OCTOBER · 2027</p>
        </div>

        <div className="envelope-front"></div>
        <div className="envelope-flap"></div>

        <button
          className="wax-seal"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close invitation" : "Open invitation"}
        >
          O <span>&</span> J
        </button>
      </div>

      <p className="envelope-hint">
        {isOpen ? "A little moment of love ♡" : "Click the seal to open"}
      </p>

      <button
        className="open-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Invitation" : "Open Invitation"}
      </button>
    </section>
  );
}

export default Envelope;