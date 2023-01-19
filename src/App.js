import "./App.css";
import Navbar from "./components/Navbar";
import FullPageScroll from './FullPageScroll';
import Chain from './pages/Chain';
import Earn from "./pages/Earn";
import Footer from "./pages/Footer";
import Grow from "./pages/Grow";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Newsletter from "./pages/Newsletter";
import Podcast from './pages/Podcast';
import Xplor from './pages/Xplor';

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <main>
        {/* <FullPageScroll /> */}
        <Home />
        <Grow />
        <Media />
        <Chain />
        <Xplor />
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
