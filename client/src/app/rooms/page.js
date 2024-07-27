export default function Rooms() {
    const rooms = [
      {
        name: "FIRST CLASS ROOM",
        image: "/images/first-class.jpg",
        description: "First Class Room. Cras dui sapien, feugiat vitae tristique ut, lobortis tempor orci. Donec pulvinar sagittis metus ut tristique. Pellentes que habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas idios.",
        rate: "220 / Day"
      },
      {
        name: "DELUXE ROOM",
        image: "/images/deluxe.jpg",
        description: "Deluxe Room. Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida. Vestibulum sit amet porttitor odio.",
        rate: "180 / Day"
      }
    ];
  
    return (
      <div className="rooms-container">
        <h1 className="main-title">ROOMS</h1>
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            <img src={room.image} alt={room.name} className="room-image" />
            <div className="room-info">
              <h2 className="room-title">{room.name}</h2>
              <p className="room-description">{room.description}</p>
              <div className="room-rate">Rate: {room.rate}</div>
            </div>
          </div>
        ))}
        <div className="footer flex justify-between">
          <div className="foots">
          <a href="#" className="lin">HOME</a>
          <a href="#" className="lin">TRAVEL</a>
          <a href="#" className="lin">ROOMS</a>
          <a href="#" className="lin">MEALS</a>
          <a href="#" className="lin">NEWS</a>
          <a href="#" className="lin">ABOUT</a>
          <a href="#" className="lin">CONTACT</a>
          </div>
          <img src="/images/icons.png" alt="Icons" className="horizontal-image"/>
        </div>
      </div>
    );
  }