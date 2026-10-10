import { useState } from "react";
import "./Envelope.css";
import floralCorner from "../assets/floral-corner.png";

function Envelope({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      onOpen();
    }, 1600);
  };

  return (
    <section className="envelope-section">
      {/* Floral decorations */}
      <img
        src={floralCorner}
        className="envelope-floral envelope-floral-left"
        alt=""
        aria-hidden="true"
      />

      <img
        src={floralCorner}
        className="envelope-floral envelope-floral-right"
        alt=""
        aria-hidden="true"
      />

      {/* Introduction */}
      <p className="envelope-subtitle">
        YOU ARE CORDIALLY INVITED
      </p>

      <h1 className="envelope-heading">
        A Special Invitation
        <br />
        Awaits You
      </h1>

      <p className="envelope-instruction">
        A little love, a beautiful beginning
      </p>

      {/* Envelope */}
      <div className={`envelope ${opened ? "opened" : ""}`}>
        <div className="envelope-back"></div>

        {/* Invitation card */}
        <div className="invitation-paper">
          <p className="paper-small">
            TOGETHER WITH THEIR FAMILIES
          </p>

          <h2>
            Olivia <span>&</span> James
          </h2>

          <div className="paper-line"></div>

          <p>INVITE YOU TO CELEBRATE</p>

          <h3>THEIR WEDDING</h3>

          <p className="paper-date">
            14 · 02 · 2027
          </p>
        </div>

        {/* Envelope front */}
        <div className="envelope-front"></div>

        {/* Envelope flap */}
        <div className="envelope-flap"></div>

        {/* Burgundy wax seal */}
        <button
          className="wax-seal"
          onClick={handleOpen}
          disabled={opened}
          aria-label="Open wedding invitation"
        >
          O <span>&</span> J
        </button>
      </div>

      {/* Bottom instruction */}
      <p className="envelope-bottom">
        {opened
          ? "With love, always..."
          : "CLICK THE SEAL TO OPEN"}
      </p>
    </section>
  );
}

export default Envelope;