import React, { useState } from 'react';
import '../styles/dashboard.css';
import { Link } from 'react-router-dom';

function SideBar() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };

    return (
        <div>
            <body id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/*  <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar">

                        {/*  <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                            <div className="text-center d-none d-md-inline">
                                <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                            </div>
                        </a>

                        {/*   <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/*  <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span></a>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/'} >
                            
                                <span>Home</span>
                                </Link>
                        </li>

                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/*   <!-- Heading --> */}
                        <div className="sidebar-heading">
                            Interface
                        </div>

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-fw fa-cog"></i>
                                <span>Manager</span>
                            </a>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Manager Components:</h6>
                                    <Link className="collapse-item" to={'/managerskill'}>ManagerSkill</Link>
                                    <Link className="collapse-item" to={'/manageruser'}>ManagerUser</Link>
                                    <Link className="collapse-item" to={'/managerrequest'}>ManagerRequest</Link>
                                    
                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>View</span>
                            </a>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom View:</h6>
                                    <Link className="collapse-item" to={'/managerskill'}>List Mentor</Link>
                                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                                    <a className="collapse-item" href="utilities-other.html">Other</a>
                                </div>
                            </div>
                        </li>

                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/* <!-- Heading --> */}
                        <div className="sidebar-heading">
                            Addons
                        </div>

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Pages</span>
                            </a>
                            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Page Screens:</h6>
                                    <Link className="collapse-item" to={'/profile'}>Profile</Link>
                                    <Link className="collapse-item" to={'/changepass'}>Change Password</Link>
                                    {/* <div className="collapse-divider"></div>
                                    <h6 className="collapse-header">Other Pages:</h6>
                                    <a className="collapse-item" href="404.html">404 Page</a>
                                    <a className="collapse-item" href="blank.html">Blank Page</a> */}
                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Charts --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="charts.html">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>Charts</span></a>
                        </li>

                        {/*  <!-- Nav Item - Tables --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="tables.html">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Tables</span></a>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider d-none d-md-block" />
                    </ul>
                    
                    
                </div>
            </body>
        </div>
    )
}

export default SideBar;