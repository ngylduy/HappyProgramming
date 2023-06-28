import React, { useState } from 'react';
import '../styles/dashboard.css';
import { FaThLarge, FaAlignJustify, FaCog } from "react-icons/fa";
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function SideBar() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
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
                                {/* <FaGrin/> */}
                            </div>
                            <div className="sidebar-brand-text mx-3">HP Programming</div>
                            <div className="text-center d-none d-md-inline">

                                <button className="rounded-circle " style={{ color: "blue" }} onClick={changeStyle}><FaThLarge /></button>
                            </div>
                        </a>

                        {/*   <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/*  <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">
                                <FaAlignJustify />
                                <span>   &ensp;    Dashboard</span></a>
                        </li>

                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/*   <!-- Heading --> */}
                        <div className="sidebar-heading">
                            Manager
                        </div>

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" >
                                <FaCog />
                                <span> &ensp; Components</span>
                            </a>

                        </li>

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        
                        <NavDropdown className="nav-item" title="Setting" >
                            <Link to="/mentee" className='dropdown-item'>Manager Skill</Link>
                            <NavDropdown.Item  className='dropdown-item'>Logout</NavDropdown.Item>
                        </NavDropdown>

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
                                    <h6 className="collapse-header">Login Screens:</h6>
                                    <a className="collapse-item" href="login.html">Login</a>
                                    <a className="collapse-item" href="register.html">Register</a>
                                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                    <div className="collapse-divider"></div>
                                    <h6 className="collapse-header">Other Pages:</h6>
                                    <a className="collapse-item" href="404.html">404 Page</a>
                                    <a className="collapse-item" href="blank.html">Blank Page</a>
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
                            <a className="nav-link" href="/11">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Profile</span></a>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider d-none d-md-block" />

                        {/*   <!-- Sidebar Toggler (Sidebar) --> */}
                        <div className="text-center ">
                            <button className="rounded-circle border" onClick={changeStyle} style={{ color: "blue" }}><FaThLarge /></button>
                        </div>



                    </ul>
                    {/*  <!-- End of Sidebar --> */}
                    <div id="content">

                        {/*  <!-- Topbar --> */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/*  <!-- Sidebar Toggle (Topbar) --> */}
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                                <i className="fa fa-bars"></i>
                            </button>

                            {/*  <!-- Topbar Search --> */}
                            <form
                                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav ml-auto">

                                {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw"></i>
                                    </a>
                                    {/*   <!-- Dropdown - Messages --> */}
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-bell fa-fw"></i>
                                        {/*  <!-- Counter - Alerts --> */}
                                        <span className="badge badge-danger badge-counter">3+</span>
                                    </a>
                                    {/*   <!-- Dropdown - Alerts --> */}
                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="alertsDropdown">
                                        <h6 className="dropdown-header">
                                            Alerts Center
                                        </h6>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-primary">
                                                    <i className="fas fa-file-alt text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 12, 2019</div>
                                                <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-success">
                                                    <i className="fas fa-donate text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 7, 2019</div>
                                                $290.29 has been deposited into your account!
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-warning">
                                                    <i className="fas fa-exclamation-triangle text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 2, 2019</div>
                                                Spending Alert: We've noticed unusually high spending for your account.
                                            </div>
                                        </a>
                                        <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                    </div>
                                </li>

                            </ul>
                        </nav>
                    </div>



                </div>



            </body>
        </div>
    )
}

export default SideBar;
