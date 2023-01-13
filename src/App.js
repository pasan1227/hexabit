import { Element } from "react-scroll";
import "./App.css";
import Navbar from "./components/Navbar";
import Earn from "./pages/Earn";
import Grow from "./pages/Grow";
import Home from "./pages/Home";
import Newsletter from "./pages/Newsletter";
import Podcast from "./pages/Podcast";

function App() {

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <div className="content">
          <Element name="home">
            <Home />
          </Element>
        </div>
        <div className="content">
          <Element name="grow">
            <Grow />
          </Element>
        </div>
        <div className="content">
          <Element name="earn">
            <Earn />
          </Element>
        </div>
        <div className="content">
          <Element name="newsletter">
            <Newsletter />
          </Element>
        </div>
        <div className="content">
          <Element name="podcast">
            <Podcast />
          </Element>
        </div>
      </main>
    </div>
  );
}

export default App;