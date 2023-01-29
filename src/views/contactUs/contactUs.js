import './contactUs.css';
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import ContactUs from './components/contactUs.js';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header></Header>
        <ContactUs></ContactUs>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;