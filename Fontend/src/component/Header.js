import { NavLink, Link, useNavigate } from "react-router-dom";
import { Row, NavDropdown} from 'react-bootstrap';
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';



function Navbar() {
    const { confirm } = Modal;
    const showPromiseConfirm = () => {
       
        confirm({
            title: 'Do you want to Logout ',
            icon: <ExclamationCircleFilled />,
            content: 'When clicked the OK button, this dialog will be closed after 1 second',
            onOk() {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                    sessionStorage.removeItem('token');
                    navigate('/');
                    toast.success("Logout success");
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() { },
        });
    };
    const token = sessionStorage.getItem('token')
    
    const navigate = useNavigate();
    
   
    const [users, setUsers] = useState([]);
    const [token1, setToken] = useState(sessionStorage.getItem('token'));
    const [skill,setSkill] =useState([]);
    const [role, setRole] = useState('');
    const [mentor,setMentor] = useState('')
    useEffect(() => {
        if (token1) {
            console.log('Token is stored in localStorage:', token1);
        } else {
            console.log('Token is not stored in localStorage');
        }
    }, [token1]);
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
                sessionStorage.setItem('idne',response.data.id)
                sessionStorage.setItem('user',response.data.username)
                
                
                setRole(response.data.roles[0].name);
                const userID = response.data.id;
                sessionStorage.setItem('role',response.data.roles[0].name)
                
                if (response.data.roles[0].name === "USER_MENTOR") {
                    fetch(`http://localhost:8080/api/mentor/${userID}`)
                      .then((res) => res.json())
                      .then((data) => {
                        setMentor(data);
                        sessionStorage.setItem('mentorne',data.mentorID)
                        
                        
                      });
                  } else {
                    // Xử lý khi userID không phải là mentor
                    console.log("userID không phải là mentor");}
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

    
    const history = useNavigate()

    // Hàm để hiển thị/ẩn modal
    
    const handleSkillClick = (skillID) => {
        history(`/listmentor/skill/${skillID}`);
        window.location.reload();
     };

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top nsvj nav-header" style={{zIndex:'200'}}>
                <div className="container-fluid">
                    <img
                        src="https://happycode.com.es/wp-content/uploads/2022/01/HAPPY_CODE_LOGO-DUDA-gde_rgb-e1642522206836.png"
                        width="80"
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
                        <Row className="align-items-center">
                            <div  style={{ fontSize: "18px", marginRight: "100px"}}>
                                {users.fullname ? (
                                    <span>Hello, {users.fullname} !</span>
                                ) : (
                                    <span></span>
                                )}
                            </div>
                            <div className="navbar-links" styles={{ textAlign: "right" }}>
                                <Row>
                                    <li className="lnv nav-item font">
                                        <NavLink to="/" className={({ isActive }) => (isActive ? 'link-acvtive' : 'link')} style={{ textDecoration: "none", fontSize: "18px" }}>Home</NavLink>
                                    </li>
                                    <li className="lnv nav-item font">
                                        <Link to="/listmentor" style={{ textDecoration: "none", fontSize: "18px" }}>Find Mentor</Link>
                                    </li>
                                </Row>
                                <NavDropdown title="Skill" style={{ textDecoration: "none", fontSize: "18px" }}>
                                    {skill.map((s)=>(
                                            <Link
                                            key={s.skillID}
                                            className="dropdown-item"
                                            onClick={() => handleSkillClick(s.skillID)}
                                        >
                                            {s.skillName}
                                        </Link>
                                    ))}
                                    
                                   
                                </NavDropdown>
                            </div>
                            <li className="lnv nav-item font">
                                <NavDropdown title="Setting" style={{ textDecoration: "none", fontSize: "18px" }}>
                                    {token ? (
                                        <>
                                            <Link className="dropdown-item" to="/profile" style={{ textDecoration: "none", fontSize: "18px" }}><PersonIcon/>Profile</Link>
                                            
                                            { role === "USER_ADMIN" ?(
                                                <Link className="dropdown-item" to="/managerskill" style={{ textDecoration: "none", fontSize: "18px" }}><DashboardIcon/>Manager</Link>
                                            ):(
                                               <span></span>
                                            )

                                            }
                                            { role === "USER_MENTEE" ?(
                                                <Link className="dropdown-item" to={`/requestuser/`+users.id} style={{ textDecoration: "none", fontSize: "18px" }}><DashboardIcon/>My Request</Link>
                                            ):(
                                               <span></span>
                                            )

                                            }
                                            { role === "USER_MENTOR" ?(
                                                <Link className="dropdown-item" to={`/requestmentor/`+mentor.mentorID} style={{ textDecoration: "none", fontSize: "18px" }}><DashboardIcon/>Mentor's Manager</Link>
                                            ):(
                                               <span></span>
                                            )

                                            }
                                            <NavDropdown.Item onClick={showPromiseConfirm} style={{ textDecoration: "none", fontSize: "18px" }}><LogoutIcon/>&nbsp;Logout</NavDropdown.Item>
                                            
                                        </>
                                    ) : (
                                        <>
                                        <Link to="/login" className="dropdown-item" style={{ textDecoration: "none", fontSize: "18px" }}><LoginIcon/>&nbsp;Login</Link>
                                        <Link to="/register" className="dropdown-item" style={{ textDecoration: "none", fontSize: "18px" }}><VpnKeyIcon/>&nbsp;Register</Link></>

                                    )}
                                </NavDropdown>
                            </li>
                        </Row>
                    </div>
                </div>
            </nav>

            {/* Modal Logout */}
            
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
