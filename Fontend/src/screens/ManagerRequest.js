import React, { useEffect, useState } from "react";
import TemplateAdmin from "../template/TemplateAdmin"
import "../styles/mentee.css"
import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { Col, Table, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";











function ManagerRequest() {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const [request, setRequest] = useState([]);
    const handleDelete = (skillID) => {
        if (window.confirm("Are you sure you want to delete this skill?")) {
            fetch(`http://localhost:8080/api/${{ skillID }}`, {
                method: "DELETE"
            }).then(() => {
                alert("delete successfully");
                window.location.reload();
            })
                .catch(err => {
                    console.log(err.message);
                })
            setShowConfirmation(true);

        }
    }

        useEffect(() => {
            fetch(`http://localhost:8080/request/getall`)
                .then((resp) => resp.json())
                .then((data) => {
                    setRequest(data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }, [])
        return (
            <TemplateAdmin>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col style={{ textAlign: "left", color: "blue" }}>
                                <h2>List Request</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: "right" }}>
                                <h5><Link to={"/skill/add"}>Create Request</Link></h5>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Table className="table border shadow" >
                                    <thead>
                                        <tr>
                                            <th >Id</th>
                                            <th >Date</th>
                                            <th>Link</th>
                                            <th >Title</th>
                                            <th>content</th>
                                            <th>status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {skill.map((s) => (
                                            <tr key={s.skillID}>
                                                <td >{s.skillID}</td>
                                                <td >{s.skillName}</td>
                                                <td >
                                                    {
                                                        <Link styles={{color:"blue"}} to={'/product/edit/' + s.skillID}><PencilSquare /></Link>
                                                    }
                                                </td>
                                                <td >
                                                    {
                                                        <>
                                                            {/* <Link to={'/managerskill'} onClick={() => handleDelete(s.skillID)}><Trash3Fill /></Link> */}
                                                            <Button onClick={() => handleDelete(skill.id)}><Trash3Fill /></Button>

                                                            <Alert show={showConfirmation} variant="success">
                                                                <Alert.Heading>Success!</Alert.Heading>
                                                                <p>The skill was deleted successfully.</p>
                                                                <hr />
                                                                <div className="d-flex justify-content-end">
                                                                    <Button onClick={() => setShowConfirmation(false)} variant="outline-success">
                                                                        Close
                                                                    </Button>
                                                                </div>
                                                            </Alert>
                                                        </>
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </TemplateAdmin>
        );
    }

    export default ManagerRequest;