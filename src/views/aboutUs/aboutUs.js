import './aboutUs.css';
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import AboutUs from "./components/aboutUs";

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header></Header>
        <AboutUs name="Alexandria" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></AboutUs>
        <AboutUs name="Evan" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></AboutUs>
        <AboutUs name="Swarnim" desc="I am a person located in Michigan. I am interested in Artificial Intelligence and the impacts that it can bring to society. I am all right at coding but want to broaden my current skillset and add additional languages to my repertoire. I currently have an adequate understanding of frontend development, but a limited understanding of backend languages. "></AboutUs>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;