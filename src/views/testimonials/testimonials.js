import './testimonials.css';
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import Testimonial from "./components/testimonial.js";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <Testimonial name="Emily" testimonial="I have been thoroughly impressed with the results of using the AI-powered criminal interrogation system provided by Tech Interrogation. The technology accurately and efficiently detects deception, leading to valuable insights and information for our investigations. The system also significantly reduces the time and resources needed for interrogations, allowing our team to focus on other important tasks. I highly recommend Tech Interrogation and their cutting-edge AI technology to any law enforcement agency looking to enhance their investigations."></Testimonial>
        <Testimonial name="Joshua" testimonial="We have been using Tech Interrogation's AI-powered criminal interrogation system for several months now and have been extremely impressed with the results. The technology accurately detects deception and has led to valuable insights and information for our investigations. The system is also user-friendly and easy to integrate with our existing processes. I highly recommend Tech Interrogation and their cutting-edge AI technology to any law enforcement agency looking to enhance their investigations."></Testimonial>
        <Testimonial name="Sandra" testimonial="As a detective, I have been using Tech Interrogation's AI system for criminal interrogations and I can confidently say that it has been a game-changer for our department. The technology accurately detects deception and has led to many successful cases. The system is also efficient, reducing the time and resources needed for interrogations. I highly recommend Tech Interrogation and their innovative AI technology to any law enforcement agency looking to improve their investigations."></Testimonial>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;