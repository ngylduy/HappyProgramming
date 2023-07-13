import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const AddRequest = () => {
    const { id, mentorID } = useParams();
    const token = sessionStorage.getItem('token')
   

    const [skill, setSkill] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [link, setLink] = useState('');
    const [skillId, setSkillId] = useState([]);

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

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.length === 0) {
            toast.warning('Please enter content');
        } else {
            const request = { title, link, content, skillId };
            console.log(request);
            fetch(`http://localhost:8080/api/request/add/${mentorID}/${id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json",
                
                Authorization: `Bearer ${token}`, },
                body: JSON.stringify(request)
            })
                .then(() => {
                    alert("Add success.");
                    navigate("/requestuser/"+id);
                });
        }
    }

    const handleSkillChange = (e) => {
        const selectedSkillId = parseInt(e.target.value);
        if (e.target.checked) {
            setSkillId((prevSkillId) => [...prevSkillId, selectedSkillId]);
        } else {
            setSkillId((prevSkillId) =>
                prevSkillId.filter((id) => id !== selectedSkillId)
            );
        }
    };

    return (
        <Row>
            <Col className="offset-md-2 col-md-8" style={{ border: '1px solid back', boxShadow: " 0 0 20px rgba(0, 0, 0, 0.3)", marginTop: "100px" }}>
                <Row>
                    <Col style={{ textAlign: 'center', padding: "30px" }}>
                        <h3>Add Request</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>title <span style={{ color: 'red' }}>*</span></Form.Text>
                                    <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} as="textarea" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>content <span style={{ color: 'red' }}>*</span></Form.Text>
                                    <Form.Control value={content} onChange={(e) => setContent(e.target.value)} as="textarea" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>Link<span style={{ color: 'red' }}>*</span></Form.Text>
                                    <Form.Control value={link} onChange={(e) => setLink(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Form.Text style={{ marginTop: '20px' }}><h6>Skill</h6></Form.Text>
                            <Row>
                                <Form.Group className="col-md-6">
                                    {/* First column */}
                                    {skill.slice(0, Math.ceil(skill.length / 2)).map((s) => (
                                        <div key={s.skillID}>
                                            <input
                                                type="checkbox"
                                                id={s.skillID}
                                                name="skill"
                                                value={s.skillID}
                                                onChange={handleSkillChange}
                                                checked={skillId.includes(s.skillID)}
                                            />
                                            <label htmlFor={s.skillID}>
                                                &emsp;{s.skillName}
                                            </label>
                                            <br />
                                        </div>
                                    ))}
                                </Form.Group>
                                <Form.Group className="col-md-6">
                                    {/* Second column */}
                                    {skill.slice(Math.ceil(skill.length / 2)).map((s) => (
                                        <div key={s.skillID}>
                                            <input
                                                type="checkbox"
                                                id={s.skillID}
                                                name="skill"
                                                value={s.skillID}
                                                onChange={handleSkillChange}
                                                checked={skillId.includes(s.skillID)}
                                            />
                                            <label htmlFor={s.skillID}>
                                            &emsp; {s.skillName}
                                            </label>
                                            <br />
                                        </div>
                                    ))}
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

