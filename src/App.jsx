import { useState } from "react";
import Envelope from "./components/Envelope";
import Invitation from "./components/Invitation";
import WeddingDetails from "./components/WeddingDetails";
import Countdown from "./components/CountDown";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Envelope isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && (
        <main className="wedding-content">
          <Invitation />
          <WeddingDetails />
          <Countdown />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;