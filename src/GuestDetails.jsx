export default function GuestDetails({ guest, setSelectedGuest }) {
  if (!guest) {
    return <p>Select a guest to know more about the guest</p>;
  }
  return (
    <article>
      <h2>{guest.name}</h2>
      <p>{guest.email}</p>
      <p>{guest.phone}</p>
      <p>{guest.bio}</p>
      <p>{guest.job}</p>
      <button onClick={() => setSelectedGuest(guest.id === null)}>Back</button>
    </article>
  );
}
