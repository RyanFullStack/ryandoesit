import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home'
import Sidebar from './components/sidebar'
import Games from "./components/games";
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
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
