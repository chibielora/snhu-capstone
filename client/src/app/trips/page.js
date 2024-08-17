import Footer from "../footer";

export default async function Trips() {
  const trips = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trips`).then(res => res.json());

  return (
    <div className="travel-container">
      <h1 className="main-title">TRAVEL</h1>
      <div className="trips-grid">
        {trips.map((trip, index) => (
          <div key={index} className="trip-card">
            <h2>{trip.name}</h2>
            <img src={trip.image} alt={trip.name} className="trip-image" />
            <p className="trip-location">{trip.location}</p>
            <p className="trip-price">Price $ {trip.perPerson}</p>
            <p className="trip-description">{trip.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}