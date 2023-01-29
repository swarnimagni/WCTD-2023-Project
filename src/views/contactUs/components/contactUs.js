export default function ContactUs() {
    return (
        <><script src="https://kit.fontawesome.com/659d4ff4fb.js" crossOrigin="anonymous"></script><div className="contact-container">
            <h1>Contact Us</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Submit</button>
            </form>
            <div className="social-container">
                <h3>Follow us on:</h3>
                <a href="https://www.youtube.com/channel/UCtkS3dHNbFxk1QD5F3yWnhg">
                    <i className="fa fa-youtube-square fa-2x"></i>
                </a>
                <a href="https://twitter.com/tech_interrogat">
                    <i className="fa fa-twitter-square fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/tech_interrogation">
                    <i className="fa fa-instagram fa-2x"></i>
                </a>
            </div>
        </div></>
    );
  }