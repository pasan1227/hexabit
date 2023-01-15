import "./App.css";
import Navbar from "./components/Navbar";
import Earn from "./pages/Earn";
import Newsletter from "./pages/Newsletter"
import Footer from "./pages/Footer";
import Grow from "./pages/Grow";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Chain from './pages/Chain';
import Xplor from './pages/Xplor';
import Podcast from './pages/Podcast';

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <Grow />
        <Media />
        <Chain />
        <Xplor />
        <Earn />
        {/* <Newsletter /> */}
        <Podcast />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;