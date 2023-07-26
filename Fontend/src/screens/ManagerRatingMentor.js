import React, { useEffect, useState } from "react";



import { Col, Table, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {Pagination} from "antd"
import TemplateMentor from "../template/TemplateMentor";
function ManagerRatingMentor() {
    const [token] = useState(sessionStorage.getItem('token'));
    const id = sessionStorage.getItem('idne')
    const mentorID = sessionStorage.getItem('mentorne')
    console.log(id)
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const [allUser, setAllUser] = useState([]);
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
        if (role === "USER_ADMIN" || role === "USER_MENTEE") {
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
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    useEffect(() => {
        fetch(`http://localhost:8080/api/rating/mentor/${mentorID}`, role1)
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
    useEffect(() => {
        fetch(`http://localhost:8080/api/user`, role1)
            .then((resp) => resp.json())
            .then((data) => {
                setAllUser(data);
            })
            .catch((err) => {
                console.log(err.message);
                console.log(err);
            });
    }, []);
    return (
        <TemplateMentor>
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
                                        <th >RateID</th>
                                        <th>MenteeName</th>
                                        <th >Comment</th>
                                        <th>Star</th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRatting.map((r) => (
                                        <tr key={r.rateID}>
                                            <td >{r.rateID}</td>
                                            <td>
                                                {allUser.map(a => a.id === r.menteeID ? a.fullname : "")}
                                            </td>
                                            <td >{r.comment}</td>
                                            <td>{r.star}&ensp;⭐️</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Pagination
                                current={currentPage}
                                total={ratting.length}
                                pageSize={usersPerPage}
                                onChange={paginate}

                                style={{ marginTop: "16px", textAlign: "center" }}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>


        </TemplateMentor>
    );
}

export default ManagerRatingMentor;