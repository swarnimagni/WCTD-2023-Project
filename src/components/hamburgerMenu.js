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
        
    </div>
    </div>;
}