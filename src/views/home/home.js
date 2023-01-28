import './home.css';
import Header from "../../public/components/header.js";
import MissionStatement from "./components/missionStatement.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MissionStatement></MissionStatement>
    </div>
  );
}

export default App;