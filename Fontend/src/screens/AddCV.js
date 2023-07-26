import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AddCv = () => {
    const id = sessionStorage.getItem('idne')
    const token = sessionStorage.getItem('token')

    const [skill, setSkill] = useState([]);
    const [skillId, setSkillId] = useState([]);
    const [github, setGithub] = useState("")
    const [linkedln, setLinkedln] = useState("")
    const [profession, setProfession] = useState("")
    const [introduction, setIntroduction] = useState("")
    const [avatar, setAvatar] = useState("")
    const [description, setDecription] = useState("")
    const [yearOfExp, setYearOfExp] = useState("")



    const navigate = useNavigate();
    const IsValidate = () => {
        let isproceed = true;

        if (!github.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in github');
        }
        if (!linkedln.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in linkedln');
        }
        if (!profession.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in profession');
        }
        if (!introduction.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in introduction');

        }
        if (!description.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in description');
        }
        if (!yearOfExp.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in yearofExp');
        }
        if (skillId.length === 0) {
            isproceed = false;
            toast.warning('Please select at least one skill');
        }
        return isproceed;
    }
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (IsValidate()) {
            const addcv = {
                avatar,
                github,
                linkedln,
                introduction,
                profession,
                description,
                yearOfExp,
                skillId
            }
            console.log(addcv);
            fetch(`http://localhost:8080/api/mentor/add/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(addcv)
            })
                .then(() => {
                    toast.success('Add  Success ')
                    navigate("/");
                });

        }

    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        setAvatar(file);

        fetch('http://localhost:8080/api/image/uploadFile', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setAvatar(data.fileUri);
                console.log(data.fileUri);

            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }







    return (
        <Row>
            <Col className="offset-md-2 col-md-8" style={{ border: '1px solid back', boxShadow: " 0 0 20px rgba(0, 0, 0, 0.3)", marginTop: "100px" }}>
                <Row>
                    <Col style={{ textAlign: 'center', padding: "30px" }}>
                        <h3>Add CV</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>Avatar <span style={{ color: 'red' }}>*</span></Form.Text>
                                    <input
                                        type="file"
                                        style={{ marginLeft: '100px', color: 'green' }}

                                        onChange={handleFileChange} // Sử dụng hàm xử lí hình ảnh ở đây
                                    />

                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>Github <span style={{ color: 'red' }}>*</span></Form.Text>
                                    <Form.Control value={github} onChange={e => setGithub(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>linkedln <span style={{ color: 'red' }}>*</span></Form.Text>
                                    <Form.Control value={linkedln} onChange={e => setLinkedln(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>Profession<span style={{ color: 'red' }}>*</span></Form.Text>
                                    <Form.Control value={profession} onChange={e => setProfession(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>Introduction<span style={{ color: 'red' }}>*</span></Form.Text>
                                    <Form.Control value={introduction} onChange={e => setIntroduction(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>Decription<span style={{ color: 'red' }}>*</span></Form.Text>
                                    <Form.Control value={description} onChange={e => setDecription(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>yearOfExp<span style={{ color: 'red' }}>*</span></Form.Text>
                                    <Form.Control value={yearOfExp} onChange={e => setYearOfExp(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Form.Text style={{ marginTop: '20px' }}><h6>Skill</h6></Form.Text>
                            <Row>
                                <Form.Group className="col-md-6">
                                    {/* First column */}
                                    {skill.slice(0, Math.ceil(skill.length / 2)).map((s) => (
                                        <div key={s.skillID}>

                                            <input
                                                style={{ appearance: 'auto' }}
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
                                                style={{ appearance: 'auto' }}
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

export default AddCv;