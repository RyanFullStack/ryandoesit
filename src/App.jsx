import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/sidebar'
import Home from './components/home'
import Games from "./components/games";
import Software from "./components/software";
import Music from "./components/music";
import Video from "./components/video";
import Voiceover from "./components/voiceover";
import Contact from "./components/contact";
import './App.css'


function App() {

  return (
    <Router>
      <div className='page'>
        <Sidebar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="games" element={<Games />} />
            <Route path="software" element={<Software />} />
            <Route path="music" element={<Music />} />
            <Route path="video" element={<Video />} />
            <Route path="voiceover" element={<Voiceover />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
