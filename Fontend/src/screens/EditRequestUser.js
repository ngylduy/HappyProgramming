import { Button, Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditRequestUser = () => {
    const [token] = useState(sessionStorage.getItem('token'));
    const { requestID, id,mentorID } = useParams();
    console.log(mentorID)

    const [skill, setSkill] = useState([]);

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');
    const [link, setLink] = useState('');
    const [skillId, setSkillId] = useState([]);

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


    useEffect(() => {
        fetch(`http://localhost:8080/api/request/${requestID}`, role1)
            .then((resp) => resp.json())
            .then((data) => {
                setTitle(data?.title || '');
                setContent(data?.content || '');
                setLink(data?.link || '');

                console.log(data)
            }
            );
    }, [requestID]);
    useEffect(() => {
        fetch(`http://localhost:8080/api/skill`, role1)
            .then((resp) => resp.json())
            .then((data) => {
                setSkill(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    const role1 = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const IsValidate = () => {
        let isproceed = true;

        if (!title || !title.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in title');
        }
        if (!content || !content.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in content');
        }
        if (!link || !link.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in link');
        }
        if (skillId.length === 0) {
            isproceed = false;
            toast.warning('Please select at least one skill');
          }
        
        




        return isproceed;
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (IsValidate()) {
            const updatedRequest = {
                mentorId: mentorID,
                content: content,
                link: link,
                title: title,
                skillId: skillId,
            };

            fetch(`http://localhost:8080/api/request/update/${id}/${requestID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                    ,
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updatedRequest),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Error updating skill");
                    }
                })
                .then(() => {
                    toast.success("Update successful");
                    navigate(`/requestuser/${id}`);
                })
                .catch((error) => {
                    console.error("Error updating skill:", error);
                });
        }
    };


    return (
        <Row>
            <Col className="offset-md-2 col-md-8" style={{ border: '1px solid back', boxShadow: " 0 0 20px rgba(0, 0, 0, 0.3)", marginTop: "100px" }}>
                <Row>
                    <Col style={{ textAlign: 'center', padding: "30px" }}>
                        <h3>Edit Request</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>requestID <span style={{ color: 'red' }}>*</span></Form.Text>
                                    <Form.Control value={requestID} disabled />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>title <span style={{ color: 'red' }}>*</span></Form.Text>
                                    <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} as="textarea" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="col-md-12">
                                    <Form.Text>content <span style={{ color: 'red' }}>*</span></Form.Text>
                                    <CKEditor
                                    
                                    editor={ClassicEditor}
                                    data={content}
                                    onReady={(editor)=>{
                                        editor.editing.view.change((write)=>{
                                            write.setStyle(
                                                "height",
                                                "200px",
                                                editor.editing.view.document.getRoot()
                                            )
                                        })
                                    }}
                                    onChange={(e, editor) => {
                                        const data = editor.getData();
                                        setContent(data);
                                    
                                       
                                    }}
                                />
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
                                               style={{appearance:'auto'}}
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
                                                style={{appearance:'auto'}}
                                                type="checkbox"
                                                id={s.skillID}
                                                name="skill"
                                                value={s.skillID}
                                                onChange={handleSkillChange}
                                                checked={skillId.includes(s.skillID)}
                                            />
                                            <label htmlFor={s.skillID}>
                                                {s.skillName}
                                            </label>
                                            <br />
                                        </div>
                                    ))}
                                </Form.Group>
                            </Row>

                            <Row>
                                <Col style={{ textAlign: 'center', padding: "30px" }}>
                                    <Button className="btn btn-success" type="submit">Save</Button>|
                                    <Link to={`/requestuser/${id}`} className="btn btn-danger">Back to List</Link>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default EditRequestUser;
