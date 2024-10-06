import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import NavbarBottom from "./navbar/NavbarBottom"
import NavbarTop from "./navbar/NavbarTop"
import Home from "./page/Home"; 
import Upload from "./page/Upload"; 
import HottestArtist from "./page/HottestArtist";
import Footer from "./Footer/Footer";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  
  return (
    <Router>
      <NavbarTop />
      <NavbarBottom />
      <Routes> 
        <Route path="/" element={<Home />} />  
        <Route path="/upload" element={<Upload />} />
        <Route path="/hottestartist" element={<HottestArtist />} />
      </Routes>

      <MusicPlayer />
      <Footer />
    </Router> 
  )
}

export default App
