import './home.css';
import Header from "../../components/header.js";
import MissionStatement from "./components/missionStatement.js";
import Footer from "../../components/footer.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MissionStatement></MissionStatement>
      <Footer></Footer>
    </div>
  );
}

export default App;