import './home.css';
import AboutUs from "./components/aboutUs"
import Header from "../../components/header.js";
import MissionStatement from "./components/missionStatement.js";
import Footer from "../../components/footer.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MissionStatement></MissionStatement>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
}

export default App;