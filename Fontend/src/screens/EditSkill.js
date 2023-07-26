import { Button, Col, Form, Row } from "react-bootstrap";
import { useEffect,  useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditSkill = () => {
    const { id } = useParams();
    const [token, setToken] = useState(sessionStorage.getItem('token'));
    
    const [skillName, setSkillName] = useState('');
    const [status, setStatus] = useState('1');

    useEffect(() => {
        fetch(`http://localhost:8080/api/skill/${id}`,role1)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data.skillName)
                setSkillName(data.skillName || '');
                setStatus(data.status || '');
               
            });
    }, [id]);
    const role1 = {
        method:"GET",
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
     }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (skillName.trim() === '') {
            toast.warning("Please enter a valid name");
            return;
        } else {
            const updatedSkill = {
                id,
                skillName,
                status
            };

            console.log(updatedSkill);

            fetch(`http://localhost:8080/api/skill/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json",
                Authorization: `Bearer ${token}` },
                body: JSON.stringify(updatedSkill),
            })
            .then(() => {
                toast.success("Update successful");
                navigate("/managerskill");
            })
            .catch((error) => {
                console.error("Error updating skill:", error);
            });
        }
    };

    return (
        <Col className="offset-md-2 col-md-8" style={{ border: "1px solid red",marginTop:"100px", padding:'30px' }}>
            <Row>
                <Col style={{ textAlign: "center" }}>
                    <h3>Edit Skill</h3>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group className="col-md-6">
                                <Form.Text>Id</Form.Text>
                                <Form.Control value={id} disabled />
                            </Form.Group>
                            <Form.Group className="col-md-6">
                                <Form.Text>
                                    Name <span style={{ color: "red" }}>*</span>
                                </Form.Text>
                                <Form.Control
                                    value={skillName}
                                    onChange={(e) => setSkillName(e.target.value)}
                                />
                                {skillName.trim() === '' && (
                                    <Form.Text>
                                        <span style={{ color: "red" }}>
                                            Please enter a valid name
                                        </span>
                                    </Form.Text>
                                )}
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="col-md-6">
                                <Form.Text>Status</Form.Text>
                                <Form.Control value={1} disabled />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col className="col-md-12" style={{ textAlign: "center", padding:'25px'}}>
                             &nbsp;&nbsp;&nbsp;&nbsp;
                                <Button className="btn btn-success" type="submit">
                                    Save
                                </Button>
                                &nbsp;&nbsp;&nbsp;
                                <Link to={"/managerskill"} className="btn btn-danger">
                                    Back Home
                                </Link>
                            </Col>
                            <Col className="col-md-6"></Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Col>
    );
};

export default EditSkill;
