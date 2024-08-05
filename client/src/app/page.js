import Image from "next/image";

export default function Home() {
  return (
    <main className="background">
      <div className="content">
        <div className="header-image">
          <img src="/images/sea-sound.jpg" alt="Sea Sound"/>
        </div>
        <h1 className="main-title">ENJOY THE SUMMER WITH US!</h1>
        <p className="description">
          This website template has been designed by <a href="https://www.freewebsitetemplates.com">Free Website Templates</a> for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="https://www.freewebsitetemplates.com/forum">Forum</a>.
        </p>
        
        <div className="content-grid">
          <div className="left-column">
            <h2 className="section-title">LATEST BLOG</h2>
            <div className="blog-post">
              <h3>2023 Best Beaches Contest Winners</h3>
              <p className="date">April 02, 2023</p>
              <p>Integer magna leo, posuere et dignissim vitae, porttitor at odio. Pellentesque a metus nec magna placerat volutpat. Nunc nisi mi, elementum sit amet...</p>
            </div>
            <div className="blog-post">
              <h3>Top 10 Diving Spots</h3>
              <p className="date">May 29, 2023</p>
              <p>Maecenas scelerisque odio quis arcu fringilla malesuada. Nulla facilisi. In libero nulla, fermentum ut pretium ac, pharetra et eros...</p>
            </div>
            <div className="blog-post test">
          <h2 className="section-title">TESTIMONIALS</h2>
          <p className="quote">"In hac habitasse platea dictumst. Integer purus justo, egestas eu consectetur eu, cursus in tortor. Quisque nec nunc ac mi ultrices iaculis. Aenean quis elit mauris, nec vestibulum lorem."</p>
          <p className="author">- Juan De La Cruz</p>
        </div>
          </div>
          <div className="right-column">
            <div className="feature-box">
              <img src="/images/rooms.png" alt="Rooms" />
              <p>ROOMS</p>
            </div>
            <div className="feature-box">
              <img src="/images/dive-site.png" alt="Travel" />
              <p>Travel</p>
            </div>
            <div className="feature-box">
              <img src="/images/food.png" alt="Food" />
              <p>FOOD</p>
            </div>
          </div>
        </div>
        
       
        
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
    </main>
  );
}