import './home.css';
import Header from "../../components/header.js";
import MissionStatement from "./components/missionStatement.js";
import Footer from "../../components/footer.js";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <MissionStatement></MissionStatement>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;