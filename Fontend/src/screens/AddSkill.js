import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";


const AddSkill = () => {


   
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
            const skill = {  skillName, status }
            console.log(skill);
            fetch('http://localhost:8080/api/skill', {
                method: "POST",
                headers: { "Content-Type": "Application/JSON",
                Authorization: `Bearer ${token}`
             },
                body: JSON.stringify(skill)
            })
                .then(() => {
                    toast.success("add susses.")
                    navigate("/managerskill")
                })
        }
    }



    return (
        <Row>
            <Col className="offset-md-2 col-md-8" style={{ border: '1px solid red',marginTop:"100px", padding:'30px' }} >
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <h3>Create new Skill</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form onSubmit={e => handelSubmit(e)}>
                            <Row>
                                <Form.Group className="col-md-6">
                                    <Form.Text>status <span style={{ color: 'red' }}>*</span></Form.Text>

                                    <Form.Control value={1} disabled />
                                </Form.Group>
                                <Form.Group className="col-md-6">
                                    <Form.Text>Name <span style={{ color: 'red' }}>*</span></Form.Text>
                                    <Form.Control value={skillName} onChange={e => setSkillName(e.target.value)} />
                                    {skillName.length === 0 && <Form.Text style={{ color: 'red' }}>Please enter skill name</Form.Text>}
                                </Form.Group>
                            </Row>





                            <Row>
                                <Col style={{ textAlign: 'center' ,padding:'25px'}}>
                                &emsp; 
                                    <Button className="btn btn-success" type="submit">Add</Button>
                                    &emsp; 
                                    <Link to={'/managerskill'} className="btn btn-danger">Back to List</Link>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default AddSkill;