import { NavLink } from 'react-router-dom'
import './sidebar.css'

function Sidebar() {


    return <div className="sidebar-content">
        <h1>Ryan Does It</h1>
        <hr></hr>
        <div className='sidebar-list'>
            <NavLink to="/">
                {({ isActive }) => (
                    <div className={`sidebar-item ${isActive ? 'active' : ''}`}>
                        Home
                    </div>
                )}
            </NavLink>
            <NavLink to="/games">
                {({ isActive }) => (
                    <div className={`sidebar-item ${isActive ? 'active' : ''}`}>
                        Games
                    </div>
                )}
            </NavLink>
            <div className='sidebar-item'>Software</div>
            <div className='sidebar-item'>Music</div>
            <div className='sidebar-item'>Video</div>
            <div className='sidebar-item'>Audio</div>
            <div className='sidebar-item'>Voiceovers</div>
            <div className='sidebar-item'>Manufacturing</div>
        </div>
    </div>
}

export default Sidebar;
