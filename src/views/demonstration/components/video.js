import demonstrationVideo from "../demonstration-video.mp4";

export default function Header (){
    return <div className="demonstration">
        <div className="demonstration-description">Below is a video that we created to demonstrate the capabilities of our app.</div>
        <video controls className="demonstration-video" src={demonstrationVideo}>AI_PRODUCT_NAME</video>
        <div className="demonstration-description">You can try the tool yourself: <a href="https://teachablemachine.withgoogle.com/models/iny6RXj-N/">HERE</a></div>
    </div>
}