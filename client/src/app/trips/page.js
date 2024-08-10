import Footer from "../footer";
export default function Trips() {
    const trips = [
      {
        name: "Gale Reef 2",
        image: "/images/reef1.jpg",
        location: "Emerald Bay, 3 stars",
        price: "4 nights / 5 days only $799.00 per person",
        description: "Gale Reef. Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis. Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales. Etiam nunc lorem ullamcorper vitae laoreet."
      },
      {
        name: "Dawson's Reef",
        image: "/images/reef2.jpg",
        location: "Blue Lagoon, 4 stars",
        price: "4 nights / 5 days only $1,199.00 per person",
        description: "Dawson's Reef. Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis. Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales. Etiam nunc lorem ullamcorper vitae laoreet."
      },
      {
        name: "Claire's Reef",
        image: "/images/reef3.jpg",
        location: "Coral Sands, 5 stars",
        price: "4 nights / 5 days only $1,999.00 per person",
        description: "Claire's reef. Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis. Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales. Etiam nunc lorem ullamcorper vitae laoreet."
      },
      {
        name: "Gale Reef 2",
        image: "/images/reef1.jpg",
        location: "Emerald Bay, 3 stars",
        price: "4 nights / 5 days only $799.00 per person",
        description: "Gale Reef. Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis. Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales. Etiam nunc lorem ullamcorper vitae laoreet."
      },
      {
        name: "Dawson's Reef",
        image: "/images/reef2.jpg",
        location: "Blue Lagoon, 4 stars",
        price: "4 nights / 5 days only $1,199.00 per person",
        description: "Dawson's Reef. Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis. Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales. Etiam nunc lorem ullamcorper vitae laoreet."
      },
      {
        name: "Claire's Reef",
        image: "/images/reef3.jpg",
        location: "Coral Sands, 5 stars",
        price: "4 nights / 5 days only $1,999.00 per person",
        description: "Claire's reef. Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio. Nulla facilisi. Fusce at pretium felis. Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales. Etiam nunc lorem ullamcorper vitae laoreet."
      }
    ];
  
    return (
      <div className="travel-container">
        <h1 className="main-title">TRAVEL</h1>
        <div className="trips-grid">
          {trips.map((trip, index) => (
            <div key={index} className="trip-card">
              <h2>{trip.name}</h2>
              <img src={trip.image} alt={trip.name} className="trip-image" />
              <p className="trip-location">{trip.location}</p>
              <p className="trip-price">{trip.price}</p>
              <p className="trip-description">{trip.description}</p>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    );
  }