import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
    const toggleRef = useRef(null);

    const toggleSidebar = (e) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    const handleClickInside = () => {
        setIsOpen(false)
    }

    const handleClickOutside = (e) => {
        if (isOpen && sidebarRef.current && !sidebarRef.current.contains(e.target) && !toggleRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    return (
        <>
            <div
                className={`sidebar-content ${isOpen ? '' : 'hidden'}`}
                ref={sidebarRef}
                onClick={handleClickInside}
            >
                <h1>Ryan Does It</h1>
                <hr />
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
                    <div className='sidebar-item'>Voiceover</div>
                    <div className='sidebar-item'>Contact</div>
                </div>
            </div>
            <div
                className="sidebar-toggle"
                ref={toggleRef}
                onClick={toggleSidebar}
            >
                <i className='fas fa-bars' />
            </div>
        </>
    );
}

export default Sidebar;
