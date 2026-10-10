import "./Invitation.css";
import WeddingDetails from "./WeddingDetails";
import Countdown from "./CountDown";
import Footer from "./Footer";
import floralCorner from "../assets/floral-corner.png";

function Invitation() {
return ( <div className="wedding-page"> <section className="wedding-hero">
{/* Top-left floral image */} <img
       src={floralCorner}
       className="invitation-floral invitation-floral-left"
       alt=""
       aria-hidden="true"
     />


    {/* Bottom-right floral image */}
    <img
      src={floralCorner}
      className="invitation-floral invitation-floral-right"
      alt=""
      aria-hidden="true"
    />

    <p className="wedding-eyebrow">
      TOGETHER WITH THEIR FAMILIES
    </p>

    <div className="floral-decoration" aria-hidden="true">
      <span>✦</span>
      <span className="divider-line"></span>
      <span className="divider-flower">❦</span>
      <span className="divider-line"></span>
      <span>✦</span>
    </div>

    <h1>
      Olivia
      <span className="ampersand">&</span>
      James
    </h1>

    <p className="wedding-description">
      Joyfully invite you to celebrate the beginning
      <br />
      of their beautiful forever.
    </p>

    <div className="hero-divider">
      <span>✦</span>
    </div>

    <p className="hero-date">
      SUNDAY · FEBRUARY 14 · 2027
    </p>

    <p className="hero-time">
      AT FOUR O'CLOCK IN THE AFTERNOON
    </p>

    <div
      className="floral-decoration bottom-floral"
      aria-hidden="true"
    >
      <span>✦</span>
      <span className="divider-line"></span>
      <span className="divider-flower">❦</span>
      <span className="divider-line"></span>
      <span>✦</span>
    </div>

    <a href="#wedding-details" className="details-button">
      EXPLORE THE DETAILS ↓
    </a>
  </section>

  <WeddingDetails />
  <Countdown />
  <Footer />
</div>


);
}

export default Invitation;
