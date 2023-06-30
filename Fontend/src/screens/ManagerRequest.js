import React, { useEffect, useState } from "react";
import TemplateAdmin from "../template/TemplateAdmin"

import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { Col, Table, Row } from "react-bootstrap";
import { Link } from "react-router-dom";












function ManagerRequest() {
    const [token, setToken] = useState(sessionStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            console.log('Token is stored in localStorage:', token);
        } else {
            console.log('Token is not stored in localStorage');
        }
    }, [token]);
    

    const [request, setRequest] = useState([]);
    const handleDelete = (id) => {
        
        if (window.confirm("Are you sure you want to delete this request?")) {
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
            fetch(`http://localhost:8080/api/request/getall`)
                .then((resp) => resp.json())
                .then((data) => {
                    setRequest(data);
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err.message);
                    console.log(err);
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
                                            <th >content</th>
                                            <th>date</th>
                                            <th >link</th>
                                            <th>title</th>
                                            <th scope={2} >Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {request.map((r) => (
                                            <tr key={r.requestID}>
                                                <td >{r.requestID}</td>
                                                <td >{r.content}</td>
                                                <td>{r.date}</td>
                                                <td>{r.link}</td>
                                                <td>{r.title}</td>
                                                <td >
                                                    {
                                                        <Link styles={{color:"blue"}} to={'/skill/edit/' + r.skillID}><PencilSquare /></Link>
                                                    }
                                                </td>
                                                <td >
                                                    {
                                                        <>
                                                            <Link style={{marginRight:"30px"}} onClick={() => handleDelete(r.requestID)} ><Trash3Fill /></Link>
                                                           
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