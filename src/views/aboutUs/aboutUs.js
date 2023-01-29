import './aboutUs.css';
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import AboutUs from "./components/aboutUs";

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header></Header>
        <AboutUs></AboutUs>
        <AboutUs></AboutUs>
        <AboutUs></AboutUs>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;