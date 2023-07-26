import React, { useEffect, useState } from "react";
import { Tag } from "antd";
import { Col, Table, Row, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import TemplateMentor from "../template/TemplateMentor";
import axios from "axios";
import { Pagination, Modal } from 'antd';

function ManagerRequestMentor() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedRequestId, setSelectedRequestId] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState();
    const [allUser, setAllUser] = useState([]);

    const { mentorID } = useParams();
    const [token] = useState(sessionStorage.getItem('token'));
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const [currentMentorID] = useState(sessionStorage.getItem('mentorne'));

    const [users, setUsers] = useState([]);

    const handleAccept = (requestId) => {
        setSelectedRequestId(requestId);
        setSelectedStatus(0);
        setModalVisible(true);
    };

    const handleReject = (requestId) => {
        setSelectedRequestId(requestId);
        setSelectedStatus(2);
        setModalVisible(true);
    };

    useEffect(() => {
        if (token) {
            console.log('Token is stored in sessionStorage:', token);
        } else {
            console.log('Token is not stored in sessionStorage');
        }
    }, [token]);

    const navigate = useNavigate();
    useEffect(() => {
        // ID của người dùng hiện tại (thay đổi giá trị này cho phù hợp)
        if (mentorID !== currentMentorID) {
            navigate("/error"); // Chuyển hướng đến trang lỗi nếu ID không hợp lệ
        }
    }, [mentorID, currentMentorID, navigate]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/user/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(response.data.id);
            } catch (error) {
                console.error(error);
            }
        };
        if (token) {
            fetchUsers();
        } else {
            setUsers([]);
        }
    }, [token]);

    const role1 = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    };

    const [request, setRequest] = useState([]);

    // Tính toán số trang
    const totalPages = Math.ceil(request.length / usersPerPage);

    // Lấy index bắt đầu và kết thúc của list user hiện tại
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentRequest = request.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleUpdateStatus = async () => {
        const updatedRequestList = request.map((req) => {
            if (req.requestID === selectedRequestId) {
                return { ...req, status: selectedStatus };
            }
            return req;
        });

        setRequest(updatedRequestList);

        try {
            const response = await fetch(
                `http://localhost:8080/api/request/${selectedRequestId}/${selectedStatus}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ status: selectedStatus }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update request status");
            }
            window.location.reload();
            setModalVisible(false);
        } catch (error) {
            console.log(error.message);
            // Khôi phục trạng thái ban đầu nếu xảy ra lỗi
            setRequest(request);
        }
    };

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

    useEffect(() => {
        fetch(`http://localhost:8080/api/request/getbymentor/${mentorID}`, role1)
            .then((resp) => resp.json())
            .then((data) => {
                setRequest(data);
                 console.log(data)
            })
            .catch((err) => {
                console.log(err.message);
                console.log(err);
            });
    }, [mentorID]);

    return (
        <TemplateMentor>
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
                                        <th>Mentee</th>
                                        <th>Title</th>
                                        <th>Link</th>
                                        <th>Status</th>
                                        <th scope={2}>Change Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRequest.map((r) => (
                                        <tr key={r.requestID}>
                                            <td>
                                                {allUser.map(a => a.id === r.menteeId ? a.fullname : "")}
                                            </td>
                                            <td>{r.title}</td>
                                            <td>
                                                <a target="_blank" href={r.link}>{r.link}</a>
                                            </td>
                                            <td>
                                                {r.status === 1 ? (
                                                    <Tag color="orange">Pending</Tag>
                                                ) : r.status === 2 ? (
                                                    <Tag color="red">Reject</Tag>
                                                ) : r.status === 0 ? (
                                                    <Tag color="green">Accept</Tag>
                                                ) : r.status === 3 ? (
                                                    <Tag color="success">Finish</Tag>
                                                ) : (
                                                    <span></span>
                                                )}
                                            </td>

                                            <td>
                                                {r.status === 3 || r.status === 2 || r.status === 0 ? (
                                                    <span></span>
                                                ) : (
                                                    <>
                                                        <Button className="btn btn-success"
                                                            onClick={() => handleAccept(r.requestId)}
                                                        >Accept</Button>&emsp;
                                                        <Button className="btn btn-danger"
                                                            onClick={() => handleReject(r.requestId)}
                                                        >Reject</Button>
                                                    </>
                                                )}
                                            </td>
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
                            <Modal
                                title="Confirmation"
                                visible={modalVisible}
                                onCancel={() => setModalVisible(false)}
                                onOk={handleUpdateStatus}
                            >
                                <p>Are you sure you want to change the status?</p>
                            </Modal>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </TemplateMentor>
    );
}

export default ManagerRequestMentor;
