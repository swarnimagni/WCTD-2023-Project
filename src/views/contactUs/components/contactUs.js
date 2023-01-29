import instagram from "./instagram.png"

export default function ContactUs() {
    return (
            <><h1>Contact Us</h1><form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
        </form><div className="social-container">
                <h3>Follow us on:</h3>
                <a href="https://www.youtube.com/channel/UCtkS3dHNbFxk1QD5F3yWnhg">
                    <img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" class='small' alt="YouTube"></img>
                </a>
                <a href="https://twitter.com/tech_interrogat">
                    <img class="small" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="Twitter"></img>
                </a>
                <a href="https://www.instagram.com/tech_interrogation">
                    <img class="small" src={instagram} alt="Instagram"></img>
                </a>
            </div></>
    );
  }