import logo from "../logo.png";

export default function Header() {
return <div className="Header"> <ul>
    <li>
    <a href="/">
                    <img src={logo} alt="Logo" className="header-item header-logo"></img>
                </a>
    </li>
  <li>
    <a href="/">
        <div className="header-item nav-button">Home</div>
    </a>
  </li>
  <li>
    <a href="/demonstration">
        <div className="header-item nav-button">Demonstration</div>
    </a>
  </li>
  <li>
    <a href="/aboutUs">
       <div className="header-item nav-button">About Us</div>
    </a>
  </li>
</ul>
</div>
}