import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const AddRequest = () => {



    const [token, setToken] = useState(sessionStorage.getItem('token'));


    const [skillName, setSkillName] = useState("");
    const [status, setStatus] = useState(1)

    useEffect(() => {
        if (token) {
            console.log('Token is stored in localStorage:', token);
        } else {
            console.log('Token is not stored in localStorage');
        }
    }, [token]);





    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        if (skillName.length === 0) {
            alert("loi vai o");
        } else {
            const skill = { skillName, status }
            console.log(skill);
            fetch('http://localhost:8080/api/skill', {
                method: "POST",
                headers: { "Content-Type": "Application/JSON" },
                body: JSON.stringify(skill)
            })
                .then(() => {
                    alert("add susses.")
                    navigate("/managerskill")
                })
        }
    }



    return (
        <Row>
            <Col className="offset-md-2 col-md-8" style={{ border: '1px solid back', boxShadow: " 0 0 20px rgba(0, 0, 0, 0.3)", marginTop: "100px" }}>
                <Row>
                    <Col style={{ textAlign: 'center', padding: "30px" }}>
                        <h3>Update Request</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form onSubmit={e => handelSubmit(e)}>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>ID <span style={{ color: 'red' }}>*</span></Form.Text>

                                    <Form.Control value={0} disabled />
                                </Form.Group>


                            </Row>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>title <span style={{ color: 'red' }}>*</span></Form.Text>

                                    <Form.Control value={skillName} as="textarea" />
                                </Form.Group>
                            </Row>
                            <Row>

                                <Form.Group className="col-md-12">
                                    <Form.Text>content <span style={{ color: 'red' }}>*</span></Form.Text>
                                    <Form.Control value={skillName} as="textarea" />

                                </Form.Group>

                            </Row>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>Link<span style={{ color: 'red' }}>*</span></Form.Text>
                                    <Form.Control value={skillName} />

                                </Form.Group>
                            </Row>






                            <Row>
                                <Col style={{ textAlign: 'center', padding: "30px" }}>
                                    <Button className="btn btn-primary" type="submit">Add</Button>|
                                    <Link to={'/'} className="btn btn-danger">Back to List</Link>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default AddRequest;