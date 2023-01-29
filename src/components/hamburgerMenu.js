import $ from "jquery";

export default function hamburgerMenu() {
    return <div className="hamburger-menu">
        <button className="hamburger-button" onClick={function(){
            console.log(parseFloat($(".hamburger-menu").css("right")));
        if (parseFloat($(".hamburger-menu").css("right")) < 0) {
          $(".hamburger-menu").animate({right: "0"});
        }
        else {
          $(".hamburger-menu").animate({right: "-20%"});
        }
    }}></button>
    <div className="hamburger-menu-contents">
        <a className="hamburger-menu-link" href="/">
            <div className="hamburger-menu-item">Home</div>
        </a>
        <a className="hamburger-menu-link" href="/demonstration">
            <div className="hamburger-menu-item">Demonstration</div>
        </a>
        <a className="hamburger-menu-link" href="/aboutUs">
          <div className="hamburger-menu-item">About The Creators</div>
        </a>
        <a className="hamburger-menu-link" href="/testimonials">
          <div className="hamburger-menu-item">Testimonials</div>
        </a>
        <a className="hamburger-menu-link" href="/contactUs">
          <div className="hamburger-menu-item">Contact Us</div>
        </a>
    </div>
    </div>;
}