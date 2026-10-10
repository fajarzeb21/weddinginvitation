import Envelope from "./components/Envelope";
import Invitation from "./components/Invitation";
import WeddingDetails from "./components/WeddingDetails";
import Countdown from "./components/CountDown";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Envelope />
      <Invitation />
      <WeddingDetails />
      <Countdown />
      <Footer />
    </>
  );
}

export default App;