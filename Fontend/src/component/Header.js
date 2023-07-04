import { NavLink, Link, useNavigate } from "react-router-dom";
import { Row, NavDropdown, Modal, Button} from 'react-bootstrap';
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";


function Navbar() {
    const token = sessionStorage.getItem('token')
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false); // State để điều khiển hiển thị modal
    const handleLogout = () => {
        setShowModal(false); // Ẩn modal khi logout
        sessionStorage.removeItem('token');
        navigate('/');
        toast.success("Logout success");
    }
    const [users, setUsers] = useState([]);
    const [stname, setToken] = useState(sessionStorage.getItem('token'));
    const [skill,setSkill] =useState([]);

    useEffect(() => {
        if (stname) {
            console.log('Token is stored in localStorage:', stname);
        } else {
            console.log('Token is not stored in localStorage');
        }
    }, [stname]);
    useEffect(() => {
        fetch(`http://localhost:8080/api/skill`)
            .then((resp) => resp.json())
            .then((data) => {
                setSkill(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
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

    // Hàm để hiển thị/ẩn modal
    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top nsvj">
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
                            <div  style={{ fontSize: "20px", marginRight: "200px", color: "#FF33FF" }}>
                                {users.fullname ? (
                                    <p>Xin chào, {users.fullname}!</p>
                                ) : (
                                    <p></p>
                                )}
                            </div>
                            <div className="navbar-links" styles={{ textAlign: "right" }}>
                                <Row>
                                    <li className="lnv nav-item font">
                                        <NavLink to="/" className={({ isActive }) => (isActive ? 'link-acvtive' : 'link')} style={{ textDecoration: "none", fontSize: "20px" }}>Home</NavLink>
                                    </li>
                                    <li className="lnv nav-item font">
                                        <Link to="/about" style={{ textDecoration: "none", fontSize: "20px" }}>About</Link>
                                    </li>
                                </Row>
                                <NavDropdown title="Skill" style={{ textDecoration: "none", fontSize: "20px" }}>
                                    {skill.map((s)=>(
                                             <NavDropdown.Item>{s.skillName}</NavDropdown.Item>
                                    ))}
                                    
                                   
                                </NavDropdown>
                            </div>
                            <li className="lnv nav-item font">
                                <NavDropdown title="Setting" style={{ textDecoration: "none", fontSize: "20px" }}>
                                    {token ? (
                                        <>
                                            <Link className="dropdown-item" to="/11" style={{ textDecoration: "none", fontSize: "20px" }}>Profile</Link>
                                            <NavDropdown.Item onClick={toggleModal} style={{ textDecoration: "none", fontSize: "20px" }}>Logout</NavDropdown.Item>
                                        </>
                                    ) : (
                                        <>
                                        <Link to="/login" className="dropdown-item" style={{ textDecoration: "none", fontSize: "20px" }}>Login</Link>
                                        <Link to="/register" className="dropdown-item" style={{ textDecoration: "none", fontSize: "20px" }}>Register</Link></>

                                    )}
                                </NavDropdown>
                            </li>
                        </Row>
                    </div>
                </div>
            </nav>

            {/* Modal Logout */}
            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to logout?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleModal}>Cancel</Button>
                    <Button variant="primary" onClick={handleLogout}>Logout</Button>
                </Modal.Footer>
            </Modal>
            <style>{`
            .navbar-links {
              display: flex;
              align-items: center;
              margin-left: auto;
              gap: 20px;
            }
            .navbar-brand {
                margin-right: 20px;
              }
          `
          }</style>
        </>
    );

}

export default Navbar;
