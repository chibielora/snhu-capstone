import Footer from "../footer";
export default function Meals() {
    return (
      <div className="meals-container">
        <h1 className="main-title">MEALS</h1>
        
        <section className="meal-section">
          <h2 className="section-title">SEAFOOD SPECIAL</h2>
          <div className="seafood-special">
            <img src="/images/seafoods.jpg" alt="Seafood Special" className="seafood-image" />
            <div className="seafood-description">
              <h3>Fried Salmon Special</h3>
              <p>I'm a product overview. Here you can write more information about your product. Buyers like to know ...</p>
            </div>
          </div>
        </section>
        <section className="meal-section">
          <h2 className="section-title">SEAFOOD SPECIAL</h2>
          <div className="seafood-special">
            <img src="/images/desserts.jpg" alt="Seafood Special" className="seafood-image" />
            <div className="seafood-description">
              <h3>Fried Salmon Special</h3>
              <p>I'm a product overview. Here you can write more information about your product. Buyers like to know ...</p>
            </div>
          </div>
        </section>
        <section className="meal-section">
          <h2 className="section-title">SEAFOOD SPECIAL</h2>
          <div className="seafood-special">
            <img src="/images/buffet.jpg" alt="Seafood Special" className="seafood-image" />
            <div className="seafood-description">
              <h3>Fried Salmon Special</h3>
              <p>I'm a product overview. Here you can write more information about your product. Buyers like to know ...</p>
            </div>
          </div>
        </section>
  
        <Footer/>
      </div>
    );
  }