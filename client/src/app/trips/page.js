export default async function Trips() {
  const trips = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trips`).then(res => res.json());

  return (
    <div className="travel-container">
      <h1 className="main-title uppercase">Trips</h1>
      <div className="trips-grid">
        {trips.map((trip) => (
          <div key={trip.code} className="bg-green-900 text-white border-gray-800 border p-4 rounded">
            <h3 className="text-xl">{trip.name}</h3>
            <img src={trip.image} alt={trip.name} className="trip-image" />
            <p className="trip-location">{trip.location}</p>
            <p>Price ${trip.perPerson} per person</p>
            <p>{trip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}