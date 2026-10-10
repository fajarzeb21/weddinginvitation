import "./Invitation.css";
import WeddingDetails from "./WeddingDetails";
import Countdown from "./CountDown";
import Footer from "./Footer";

function Invitation() {
return ( <div className="wedding-page"> <section className="wedding-hero"> <p className="wedding-eyebrow">TOGETHER WITH THEIR FAMILIES</p>


    <div className="floral-decoration">❧ ❦ ❧</div>

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

    <p className="hero-date">SUNDAY · FEBRUARY 14 · 2027</p>

    <p className="hero-time">AT FOUR O'CLOCK IN THE AFTERNOON</p>

    <div className="floral-decoration bottom-floral">
      ❧ ❦ ❧
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
