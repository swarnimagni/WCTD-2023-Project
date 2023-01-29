import './aboutUs.css';
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import AboutUs from "./components/aboutUs";

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header></Header>
        <AboutUs name="Alexandria" desc="My name is Alexandria Gordon and I am a 12th grader from New York. Software has become normal in our society, but its still very constrained which is why I plan to major in Software Engineering. Although I have so much to learn, I hope to one day be able to have an impact on our software technology today."></AboutUs>
        <AboutUs name="Evan" desc="Hello! My name is Evan. I am a 10th grader from Minneapolis, Minnesota. I have been coding for ~5 years but really got into it during COVID. I think Artificial Intelligence is really interesting and can help humanity in incredible ways if it is used right and doesn't get out of control."></AboutUs>
        <AboutUs name="Swarnim" desc="I am an 8th grader located in Michigan. I am interested in Artificial Intelligence and the impacts that it can bring to society. I am all right at coding but want to broaden my current skillset and add additional languages to my repertoire."></AboutUs>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;