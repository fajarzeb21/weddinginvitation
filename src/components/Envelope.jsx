import { useState } from "react";
import "./Envelope.css";

function Envelope({ onOpen }) {
const [opened, setOpened] = useState(false);

const handleOpen = () => {
if (opened) return;


setOpened(true);

setTimeout(() => {
  onOpen();
}, 1600);


};

return ( <section className="envelope-section"> <p className="envelope-subtitle">YOU ARE CORDIALLY INVITED</p>


  <h1 className="envelope-heading">
    A Special Invitation <br /> Awaits You
  </h1>

  <p className="envelope-instruction">
    A little love, a beautiful beginning
  </p>

  <div className={`envelope ${opened ? "opened" : ""}`}>
    <div className="envelope-back"></div>

    <div className="invitation-paper">
      <p className="paper-small">TOGETHER WITH THEIR FAMILIES</p>
      <h2>Olivia <span>&</span> James</h2>
      <div className="paper-line"></div>
      <p>INVITE YOU TO CELEBRATE</p>
      <h3>THEIR WEDDING</h3>
      <p className="paper-date">14 · 02 · 2027</p>
    </div>

    <div className="envelope-front"></div>

    <div className="envelope-flap"></div>

    <button
      className="wax-seal"
      onClick={handleOpen}
      disabled={opened}
      aria-label="Open wedding invitation"
    >
      O <span>&</span> J
    </button>
  </div>

  <p className="envelope-bottom">
    {opened ? "With love, always..." : "CLICK THE SEAL TO OPEN"}
  </p>
</section>


);
}

export default Envelope;
