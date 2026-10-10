export default function GuestDetails({ guest, setSelectedGuest }) {
  if (!guest) {
    return <p>Select a guest to know more about the guest</p>;
  }
  return (
    <article>
      <h2>{guest.name}</h2>
      <p>{guest.email}</p>
      <button onClick={() => setSelectedGuest(null)}>Back</button>
    </article>
  );
}
