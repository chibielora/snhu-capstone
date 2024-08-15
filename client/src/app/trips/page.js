"use client";

import { useState, useEffect } from 'react';
import Footer from "../footer";
export default function Trips() {
 const [trips, setTrips] = useState([]);

  // Fetch the trips data from the server
  useEffect(() => {
    async function fetchTrips() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getTrips`); // Ensure this URL matches your server setup
        const data = await response.json();
        setTrips(data); // Set the fetched trips data to state
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    }

    fetchTrips();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  
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
        <Footer/>
      </div>
    );
  }