export default function GuestList({ guests }) {
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
          {guests.map((guest) => (
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
