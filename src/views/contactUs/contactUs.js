import './contactUs.css';
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import ContactUs from './components/contactUs.js';

function App() {
  return (
    <><div className="App">
        <Header></Header>
          <ContactUs></ContactUs>
      </div><Footer></Footer></>
  );
}

export default App;