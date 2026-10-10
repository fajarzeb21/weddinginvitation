import { useState } from "react";
import Envelope from "./components/Envelope";
import Invitation from "./components/Invitation";

function App() {
const [invitationOpened, setInvitationOpened] = useState(false);

return ( <main>
{!invitationOpened ? (
<Envelope onOpen={() => setInvitationOpened(true)} />
) : ( <Invitation />
)} </main>
);
}

export default App;
