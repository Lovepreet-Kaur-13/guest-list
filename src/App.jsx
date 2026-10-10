import "./index.css";
import Guests from "./Guests";

export default function App() {
  const guestList = [
    {
      name: "John roberts",
      email: "j.roberts@gmail.com",
    },
    {
      name: "Steve wells",
      email: "s.wells@gmail.com",
    },
  ];

  return (
    <>
      <main>
        <Guests guests={guestList} />
      </main>
    </>
  );
}
