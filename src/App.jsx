import Home from './components/home'
import Sidebar from './components/sidebar'
import './App.css'

function App() {

  return (
    <div className='page'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main'>
        <Home/>
      </div>
    </div>
  )
}

export default App
