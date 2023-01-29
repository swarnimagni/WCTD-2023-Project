import logo from "../logo.png";
import HamburgerMenu from "./hamburgerMenu";

export default function Header() {
return <div className="header">
      <a href="/">
          <img src={logo} alt="Logo" className="header-item logo"></img>
      </a>
      <div class="header-text">
      Tech Interrogation
      </div>
      <HamburgerMenu/>
</div>
}