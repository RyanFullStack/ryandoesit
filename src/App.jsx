import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home'
import Sidebar from './components/sidebar'
import Games from "./components/games";
import './App.css'

function App() {

  return (
    <Router>
      <div className='page'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <Routes>
          <Route path="/" element={<div className='main'>
            <Home />
          </div>} />
          <Route path="games" element={<div className='main'>
            <Games />
          </div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
