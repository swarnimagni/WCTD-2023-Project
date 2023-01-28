import './demonstration.css';
import Header from "../../components/header.js";
import Video from "./components/video.js";
import Footer from "../../components/footer.js";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <Video></Video>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;