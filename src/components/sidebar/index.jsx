import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './sidebar.css'

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }


    return <><div className={`sidebar-content ${isOpen ? '' : 'hidden'}`}>
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
    <div className="sidebar-toggle" onClick={toggleSidebar}>
    <i className='fas fa-bars' />
</div>
</>
}

export default Sidebar;
