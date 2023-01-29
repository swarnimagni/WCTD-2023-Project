import './blog.css';
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <div className='blog-wrapper'>
          <div className='blog-entry'>
            <div className='blog-entry-title'>Entry #1</div>
            <div className='blog-entry-content'>lorem ipsum dolor sit amet</div>
            <div className='blog-entry-title'>Entry #2</div>
            <div className='blog-entry-content'>lorem ipsum dolor sit amet</div>
            <div className='blog-entry-title'>Entry #3</div>
            <div className='blog-entry-content'>lorem ipsum dolor sit amet</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;