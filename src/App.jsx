import "./index.css";
import Guests from "./Guests";
import { useState } from "react";

import GuestDetails from "./GuestDetails";

export default function App() {
  const guestList = [
    {
      id: 1,
      name: "John roberts",
      email: "j.roberts@gmail.com",
    },
    {
      id: 2,
      name: "Steve wells",
      email: "s.wells@gmail.com",
    },
  ];
  const [selectedGuest, setSelectedGuest] = useState(null);

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
