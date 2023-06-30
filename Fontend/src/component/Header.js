import { NavLink, Link, useNavigate } from "react-router-dom";
import { Row, NavDropdown } from 'react-bootstrap';
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";


function Navbar() {
    const token = sessionStorage.getItem('token')
    const navigate = useNavigate();
    const handleLogout = () => {
        if (window.confirm("Are you sure you want to Logout")){
            sessionStorage.removeItem('token')

            navigate('/')
            toast.success("Logout success")
        }
       
    }
    const [users, setUsers] = useState([]);
    const [stname, setToken] = useState(sessionStorage.getItem('token'));

    useEffect(() => {
        if (stname) {
            console.log('Token is stored in localStorage:', stname);
        } else {
            console.log('Token is not stored in localStorage');
        }
    }, [stname]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/user/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(response.data)
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (token) {
            setToken(token);
            fetchUsers();
        } else {
            setUsers([]);
        }

    }, [token]);



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

                            <div claaName="col-md-12" style={{ fontSize: "20px",marginRight:"100px", color: "#FF33FF" }}>
                                {users.fullname ? (
                                    <p>Xin chào, {users.fullname}!</p>
                                ) : (
                                    <p></p>
                                )}
                            </div>


                            <div />
                            <div styles={{ textAlign: "right" }}>
                                <Row>
                                    <li className="lnv nav-item font ">
                                        <NavLink to="/" className={({ isActive }) => (isActive ? 'link-acvtive' : 'link')} style={{ textDecoration: "none", fontSize: "20px" }}>Home</NavLink>
                                    </li>
                                    <li className="lnv nav-item font">
                                        <Link to="/about" style={{ textDecoration: "none", fontSize: "20px" }}>About</Link>
                                    </li>
                                </Row>
                            </div>
                            <li className="lnv nav-item font">
                                <NavDropdown title="Setting" style={{ textDecoration: "none", fontSize: "20px" }}>
                                    {token ? (
                                        <>
                                            <NavDropdown.Item><Link to="/11" style={{ textDecoration: "none", fontSize: "20px" }}>Profile</Link></NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => handleLogout()} style={{ textDecoration: "none", fontSize: "20px" }}>Logout</NavDropdown.Item>
                                        </>
                                    ) : (
                                        <NavDropdown.Item><Link to="/login" style={{ textDecoration: "none", fontSize: "20px" }}>Login</Link></NavDropdown.Item>
                                    )}
                                </NavDropdown>

                            </li>




                        </Row>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
