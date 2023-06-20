import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import '../styles/sidebar.css'
import { Link } from 'react-router-dom';


const MySidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  return (
    <Sidebar
      sidebar={
        <div className='sidebar-menu'>
          <div>
          <img
            src="https://happycoding.io/tutorials/html/images/rainbow-logo-2.png"
            width="90vh"
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              marginLeft: "60px"
              
            }}
          />
          </div>
          <div className='side-menu'>
          <ul>
            <div className='bar-menu'>
            <Link to="/login" style={{ textDecoration: "none", fontSize: "20px" }}>Login</Link>
            </div>
            <div className='bar-menu'>
            <Link to="/login" style={{ textDecoration: "none", fontSize: "20px" }}>Home</Link>
            </div>
            <div className='bar-menu'>
            <Link to="/login" style={{ textDecoration: "none", fontSize: "20px" }}>Mentee</Link>
            </div>

          </ul>
          </div>
        </div>
      }
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{
        sidebar: {
          width: '250px',
          background: '#f0f0f0'
        },
        content: {
          padding: '16px'
        }
      }}
    >
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>Mở menu</button>

    </Sidebar>
  );
};

export default MySidebar;
