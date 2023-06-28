import React, { useEffect, useState } from "react";
import TemplateAdmin from "../template/TemplateAdmin"
import "../styles/mentee.css"
import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { Col, Table, Row } from "react-bootstrap";
import { Link } from "react-router-dom";












function Mentee() {
    
    const [token, setToken] = useState(sessionStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            console.log('Token is stored in localStorage:', token);
        } else {
            console.log('Token is not stored in localStorage');
        }
    }, [token]);
   

    const [skill, setSkill] = useState([]);
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this skill?")) {
            fetch(`http://localhost:8080/api/${id}`, {
                method: "DELETE"
            }).then(() => {
                alert("delete successfully");
                window.location.reload();
            })
                .catch(err => {
                    console.log(err.message);
                })


        }
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
        }, [])
        return (
            <TemplateAdmin>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col style={{ textAlign: "left", color: "blue" }}>
                                <h2>List Skill</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: "right" }}>
                                <h5><Link to={"/skill/add"}>Create new Skill</Link></h5>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Table className="table border shadow" >
                                    <thead>
                                        <tr>
                                            <th >Id</th>
                                            <th >Name</th>
                                            <th >Action</th>
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
                                                            <Link to={'/managerskill'} onClick={() => handleDelete(s.skillID)}><Trash3Fill /></Link>
                                                           
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

    export default Mentee;