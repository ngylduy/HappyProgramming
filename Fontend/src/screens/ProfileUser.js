
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/profileuser.css'
import { useState, useEffect } from "react";
import axios from "axios";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { FaAngleLeft } from "react-icons/fa";
export default function ProfileUser() {
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState(sessionStorage.getItem('token'));
    const [role, setRole] = useState('');
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/user/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUsers(response.data);
                setRole(response.data.roles[0].name);
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

            <Row className="profile-user">
                <Col className="offset-md-2 col-md-8" style={{ border: "1px solid #B0C4DE", boxShadow: " 0 0 20px rgba(0, 0, 0, 1)", textAlign: 'center' }}>
                    <Row >

                        <Col className="col-md-12" style={{ textAlign: "left" }}>
                            <Link to={"/"} className="btn btn-primary">
                            <FaAngleLeft/> Home
                            </Link>
                        </Col>

                    </Row>
                    <Row className="profile-title">
                        <Col style={{ textAlign: "center" }}>
                            <h3>Profile

                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} >
                            <Form>
                                <Row className="element-id-name" >
                                    <Form.Group className="col-md-12" >
                                        <Form.Text>Id</Form.Text>
                                        <Form.Control style={{ width: '50vh', textAlign: 'center', margin: '0 auto' }} defaultValue={users.id || ""} disabled />
                                    </Form.Group>

                                </Row>
                                <Row>
                                    <Form.Group className="col-md-12">
                                        <Form.Text>
                                            username <span style={{ color: "red" }}>*</span>
                                        </Form.Text>
                                        <Form.Control style={{ width: '50vh', textAlign: 'center', margin: '0 auto' }} defaultValue={users.username || ""} disabled />
                                        <Form.Text>

                                        </Form.Text>
                                    </Form.Group>
                                </Row>

                                <Row style={{ marginTop: '20px' }}>
                                    <Form.Group className="col-md-12">
                                        <Form.Text>FullName</Form.Text>
                                        <Form.Control style={{ width: '50vh', textAlign: 'center', margin: '0 auto' }} defaultValue={users.fullname || ""} disabled />
                                    </Form.Group>



                                </Row>
                                <Row style={{ marginTop: '20px' }}>
                                    <Form.Group className="col-md-12" >
                                        <Form.Text>
                                            gender
                                        </Form.Text>
                                        <Form.Control
                                            disabled
                                            as={() => (
                                                <div style={{ width: '50vh', textAlign: 'center', margin: '0 auto' }}>
                                                    {users.gender ? (
                                                        <span style={{ color: "blue" }}>
                                                            <MaleIcon style={{ width: "2em", height: "40px" }} />
                                                        </span>
                                                    ) : (
                                                        <span style={{ color: "red" }}>
                                                            <FemaleIcon />
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row style={{ marginTop: '20px' }}>
                                    <Form.Group className="col-md-12">
                                        <Form.Text>Phone</Form.Text>
                                        <Form.Control style={{ width: '50vh', textAlign: 'center', margin: '0 auto' }} type="number" defaultValue={users.phone || ""} disabled />
                                        {/*mac dinh la text*/}
                                    </Form.Group>

                                </Row>
                                <Row style={{ marginTop: '20px' }}>
                                    <Form.Group className="col-md-12">
                                        <Form.Text>City</Form.Text>
                                        <Form.Control style={{ width: '50vh', textAlign: 'center', margin: '0 auto' }} defaultValue={users.address || ""} disabled />
                                    </Form.Group>
                                </Row>
                                <Row style={{ marginTop: '20px' }}>
                                    <Form.Group className="col-md-12">
                                        <Form.Text>Role</Form.Text>
                                        <Form.Control style={{ width: '50vh', textAlign: 'center', margin: '0 auto' }} defaultValue={role || ""} disabled />
                                    </Form.Group>
                                </Row>

                                <Row className="profile-button">

                                    <Col className="col-md-12" style={{ textAlign: "center" }}>
                                        <Link to={"/"} className="btn btn-danger">
                                            Edit
                                        </Link>
                                        &emsp;
                                        <Link to={"/changepass"} className="btn btn-warning">
                                            Change Password
                                        </Link>
                                    </Col>

                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}