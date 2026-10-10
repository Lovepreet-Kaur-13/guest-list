import "./index.css";

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

  function GuestList() {
    return (
      <>
        <h1>Guest List</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {guestList.map((guest) => (
              <tr key={guest.id}>
                <td>{guest.name}</td>
                <td>{guest.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  return (
    <>
      <main>
        <GuestList />
      </main>
    </>
  );
}
