export default function Contact() {


  return (
    <div className="contact-container">
      <h1 className="main-title">CONTACT</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>TRAVLR GETAWAYS</h2>
          <p><strong>ADDRESS:</strong><br />
          123 Lorem Ipsum Cove, Sed Ut City, LI 12345</p>
          <p><strong>TELEPHONE NUMBER:</strong><br />
          1-800-999-9999</p>
          <p><strong>FAX NUMBER:</strong><br />
          1-800-111-1111</p>
        </div>
        <form className="contact-form" >
          <div className="form-group">
            <label htmlFor="name">NAME:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">SUBJECT:</label>
            <input type="text" id="subject" name="subject"  required />
          </div>
          <div className="form-group">
            <label htmlFor="message">MESSAGE:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">SEND</button>
        </form>
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
  );
}