function ContactUs() {
    return (
        <><script src="https://kit.fontawesome.com/659d4ff4fb.js" crossorigin="anonymous"></script><div className="contact-container">
            <h1>Contact Us</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Submit</button>
            </form>
            <div className="social-container">
                <h3>Follow us on:</h3>
                <a href="#">
                    <i className="fa fa-facebook-square fa-2x"></i>
                </a>
                <a href="#">
                    <i className="fa fa-twitter-square fa-2x"></i>
                </a>
                <a href="#">
                    <i className="fa fa-instagram fa-2x"></i>
                </a>
            </div>
        </div></>
    );
  }
  
  export default ContactUs;