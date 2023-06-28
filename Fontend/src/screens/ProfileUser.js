
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/profileuser.css'
import { useState,useEffect } from "react";
import axios from "axios";

export default function ProfileUser() {
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState(sessionStorage.getItem('token'));
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/user/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };
    
        if (token) {
            setToken(token);
            fetchUsers();
        }else {
            setUsers([]);
        }
    
    }, [token]);
    return (
        <>
        <div class="pyro"><div class="before"></div><div class="after"></div></div>
        <Row className="profile-user">
            <Col className="offset-md-2 col-md-8" style={{ border: "1px solid red" }}>
                <Row className="profile-title">
                    <Col style={{ textAlign: "center" }}>
                        <h3>Profile 

                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form>
                            <Row className="element-id-name">
                                <Form.Group className="col-md-6">
                                    <Form.Text>Id</Form.Text>
                                    <Form.Control defaultValue={users.id || ""} disabled />
                                </Form.Group>
                                <Form.Group className="col-md-6">
                                    <Form.Text>
                                        username <span style={{ color: "red" }}>*</span>
                                    </Form.Text>
                                    <Form.Control defaultValue={users.username || ""} disabled />
                                    <Form.Text>
                               
                                    </Form.Text>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="col-md-6">
                                    <Form.Text>Phone</Form.Text>
                                    <Form.Control type="number" defaultValue={users.phone || ""} />
                                    {/*mac dinh la text*/}
                                </Form.Group>
                                <Form.Group className="col-md-6">
                                    <Form.Text>City</Form.Text>
                                    <Form.Control defaultValue={users.address || ""}/>
                                </Form.Group>
                            </Row>
                            <Row className="skill-element">
                                <Form.Group className="col-md-6 ">
                                    <Form.Text>Skill</Form.Text>
                                    <Form.Select>
                                        <option className="form-control">None</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="col-md-6">
                                    <Form.Text>Role</Form.Text>
                                    <Form.Select>
                                        <option className="form-control" disabled></option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Row className="profile-button">
                                <Col className="col-md-6" style={{ textAlign: "right" }}>
                                    <Button className="btn btn-primary">Add</Button>
                                </Col>
                                <Col className="col-md-6" style={{ textAlign: "left" }}>
                                    <Link to={"/"} className="btn btn-danger">
                                        Back Home
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