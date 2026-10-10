function Envelope({ isOpen, setIsOpen }) {
const handleOpen = () => {
setIsOpen(!isOpen);
};

return (
<section
className={`envelope-section ${isOpen ? "invitation-opened" : ""}`}
>
{!isOpen && (
<> <p className="envelope-label">A SPECIAL INVITATION</p>


      <div className="envelope">
        <div className="envelope-back"></div>
        <div className="envelope-front"></div>
        <div className="envelope-flap"></div>

        <button
          className="wax-seal"
          onClick={handleOpen}
          aria-label="Open wedding invitation"
        >
          O <span>&</span> J
        </button>
      </div>

      <p className="envelope-hint">A little surprise awaits ♡</p>

      <button className="open-button" onClick={handleOpen}>
        Open Invitation
      </button>
    </>
  )}

  {isOpen && (
    <div className="opened-message">
      <p className="envelope-label">YOU ARE CORDIALLY INVITED</p>

      <h1>
        Olivia <span>&</span> James
      </h1>

      <p className="opened-date">24 · OCTOBER · 2027</p>

      <div className="opened-divider">♡</div>

      <button className="open-button" onClick={handleOpen}>
        Close Invitation
      </button>
    </div>
  )}
</section>


);
}

export default Envelope;
