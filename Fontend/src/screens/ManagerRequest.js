import React, { useEffect, useState } from "react";
import TemplateAdmin from "../template/TemplateAdmin"


import { Col, Table, Row,  } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {Pagination} from "antd"













function ManagerRequest() {
    const [token] = useState(sessionStorage.getItem('token'));
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const role1 = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }

    useEffect(() => {
        if (token) {
            console.log('Token is stored in localStorage:', token);
        } else {
            console.log('Token is not stored in localStorage');
        }
    }, [token]);
    const [role] = useState(sessionStorage.getItem("role"));
    const navigate = useNavigate()
    useEffect(() => {
        if (role === "USER_MENTEE" || role === "USER_MENTOR") {
            navigate("/error")
        }
    }, [])


    const [request, setRequest] = useState([]);
   
    // Tính toán số trang
    const totalPages = Math.ceil(request.length / usersPerPage);

    // Lấy index bắt đầu và kết thúc của list user hiện tại
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentRequest = request.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    useEffect(() => {
        fetch(`http://localhost:8080/api/request/getall`, role1)
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
                        <Col>
                            <Table className="table border shadow" >
                                <thead>
                                    <tr>
                                        <th >Id</th>
                                        <th >content</th>
                                        <th>date</th>
                                        <th >link</th>
                                        <th>title</th>
                                        
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
                                            



                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Pagination
                                current={currentPage}
                                total={request.length}
                                pageSize={usersPerPage}
                                onChange={paginate}

                                style={{ marginTop: "16px", textAlign: "center" }}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>


        </TemplateAdmin>
    );
}

export default ManagerRequest;