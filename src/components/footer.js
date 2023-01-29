import instagram from "../instagram.png";

export default function Footer() {
    return <div className="footer">
        <div className="socials">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tech_interrogation"><img className="footer-item" src={instagram} alt="Instagram"></img></a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/tech_interrogat"><img className="footer-item" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="Twitter"></img></a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCtkS3dHNbFxk1QD5F3yWnhg"><img className="footer-item" src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="YouTube"></img></a>
        </div>
    </div>;
}