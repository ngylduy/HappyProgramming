import React, { useEffect, useState } from "react";
import TemplateAdmin from "../template/TemplateAdmin"

import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { Col, Table, Row, Pagination } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";












function ViewRatting() {
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


    const [ratting, setRatting] = useState([]);
    
    // Tính toán số trang
    const totalPages = Math.ceil(ratting.length / usersPerPage);

    // Lấy index bắt đầu và kết thúc của list user hiện tại
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentRatting = ratting.slice(indexOfFirstUser, indexOfLastUser);


    useEffect(() => {
        fetch(`http://localhost:8080/api/rating`, role1)
            .then((resp) => resp.json())
            .then((data) => {
                setRatting(data);
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
                            <h2>List Ratting</h2>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <Table className="table border shadow" >
                                <thead>
                                    <tr>
                                        <th >rateID</th>
                                        <th >comment</th>
                                        <th>star</th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRatting.map((r) => (
                                        <tr key={r.rateID}>
                                            <td >{r.rateID}</td>
                                            <td >{r.comment}</td>
                                            <td>{r.star}</td>
                                            
                                           



                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Pagination style={{ justifyContent: "flex-end" }}>
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


        </TemplateAdmin>
    );
}

export default ViewRatting;