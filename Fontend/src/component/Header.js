import { NavLink, Link } from "react-router-dom";
import {  Row } from 'react-bootstrap';

function Navbar({ isLoggedIn, handleLogout }) {
  
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top nsvj ">
                <div className="container-fluid">
                    <img
                        src="https://i.gifer.com/RrVB.gif"
                        width="90vh="
                        style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                            marginRight: "20px"
                        }}
                    />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div >
                        <Row>
                            <li className="lnv nav-item font">
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'link-acvtive' : 'link')} style={{ textDecoration: "none", fontSize: "20px" }}>Home</NavLink>
                            </li>
                            <li className="lnv nav-item font">
                                <Link to="/about" style={{ textDecoration: "none", fontSize: "20px" }}>About</Link>
                            </li>
                            {isLoggedIn ? (
                                <li className="lnv nav-item font">
                                    <Link to="/" onClick={handleLogout} style={{ textDecoration: "none", fontSize: "20px" }}>Logout</Link>
                                </li>
                            ) : (
                                <li className="lnv nav-item font">
                                    <Link to="/login" style={{ textDecoration: "none", fontSize: "20px" }}>Login</Link>
                                </li>
                            )}
                        </Row>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
