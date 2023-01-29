import logo from "../logo.png";

export default function Header() {
return <div className="header">
      <a href="/">
          <img src={logo} alt="Logo" className="header-item"></img>
      </a>
      <a href="/">
          <div className="header-item nav-button">Home</div>
      </a>
      <a href="/demonstration">
          <div className="header-item nav-button">Demonstration</div>
      </a>
      <a href="/aboutUs">
        <div className="header-item nav-button">About The Creators</div>
      </a>
</div>
}