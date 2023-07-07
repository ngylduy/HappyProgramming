import React, { useEffect, useState } from "react";


import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { Col, Table, Row , Pagination} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import TemplateUser from "../template/TemplateUser";












function ManagerRequestUser() {
    const {id} =useParams();
    console.log(id)
    const [token] = useState(sessionStorage.getItem('token'));
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);

    useEffect(() => {
        if (token) {
            console.log('Token is stored in localStorage:', token);
        } else {
            console.log('Token is not stored in localStorage');
        }
    }, [token]);
    

    const [request, setRequest] = useState([]);
    const handleDelete = (requestID) => {
        
        if (window.confirm("Are you sure you want to delete this request?")) {
            fetch(`http://localhost:8080/api/request/delete/${requestID}`, {
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
     // Tính toán số trang
     const totalPages = Math.ceil(request.length / usersPerPage);

     // Lấy index bắt đầu và kết thúc của list user hiện tại
     const indexOfLastUser = currentPage * usersPerPage;
     const indexOfFirstUser = indexOfLastUser - usersPerPage;
     const currentRequest = request.slice(indexOfFirstUser, indexOfLastUser);
 

        useEffect(() => {
            fetch(`http://localhost:8080/api/request/getbyuser/${id}`)
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
            <TemplateUser>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col style={{ textAlign: "left", color: "blue" }}>
                                <h2>List Request</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: "right" }}>
                                <h5><Link to={"/listmentor"}>Create Request</Link></h5>
                                
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
                                        {currentRequest.map((r) => (
                                            <tr key={r.requestID}>
                                                <td >{r.requestID}</td>
                                                <td >{r.content}</td>
                                                <td>{r.date}</td>
                                                <td><a href={r.link}>{r.link}</a></td>
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
                                <Pagination style={{justifyContent: "flex-end"}}>
                                <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
                                <Pagination.Prev
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                />
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <Pagination.Item
                                        key={index + 1}
                                        active={index + 1 === currentPage}
                                        onClick={() => setCurrentPage(index + 1)}
                                    >
                                        {index + 1}
                                    </Pagination.Item>
                                ))}
                                <Pagination.Next
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                />
                                <Pagination.Last
                                    onClick={() => setCurrentPage(totalPages)}
                                    disabled={currentPage === totalPages}
                                />
                            </Pagination>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </TemplateUser>
        );
    }

    export default ManagerRequestUser;