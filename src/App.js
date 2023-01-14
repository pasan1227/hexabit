import "./App.css";
import Navbar from "./components/Navbar";
import Earn from "./pages/Earn";
import Footer from "./pages/Footer";
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
        <Home />
        <Grow />
        <Grow />
        <Earn />
        <Newsletter />
        <Podcast />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;