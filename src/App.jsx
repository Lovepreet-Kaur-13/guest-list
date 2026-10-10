import "./index.css";
import Guests from "./Guests";
import { useEffect, useState } from "react";

import GuestDetails from "./GuestDetails";
import getGuests from "./api";

export default function App() {
  const [guestList, setGuestList] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);

  const syncGuests = async () => {
    const data = await getGuests();
    setGuestList(data);
  };

  useEffect(() => {
    syncGuests();
  }, []);

  return (
    <>
      <main>
        <Guests guests={guestList} setSelectedGuest={setSelectedGuest} />
        <GuestDetails
          guest={selectedGuest}
          setSelectedGuest={setSelectedGuest}
        />
      </main>
    </>
  );
}
