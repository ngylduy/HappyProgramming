import React, { useEffect, useState } from "react";
import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { Col, Table, Row, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import TemplateUser from "../template/TemplateUser";
import RateReviewIcon from '@mui/icons-material/RateReview';
import { Pagination, Tag,Modal } from 'antd'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function ManagerRequestUser() {
    const { id } = useParams();
    console.log(id)

    const [token] = useState(sessionStorage.getItem('token'));
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const [currentUserID] = useState(sessionStorage.getItem('idne'))
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewRequest, setViewRequest] = useState([]);
    const [allMentor,setAllMentor] = useState([])

    const showModal = (requestID) => {
        setIsModalOpen(true);
        fetch(`http://localhost:8080/api/request/${requestID}`, role1)
            .then((resp) => resp.json())
            .then((data) => {
                setViewRequest(data);               
            })
            .catch((err) => {
                console.log(err.message);
                console.log(err);
            });
    }
    

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (token) {
            console.log('Token is stored in localStorage:', token);
        } else {
            console.log('Token is not stored in localStorage');
        }
    }, [token]);
    const navigate = useNavigate();
    useEffect(() => {
        // ID của người dùng hiện tại (thay đổi giá trị này cho phù hợp)
        if (id !== String(currentUserID)) {
            navigate("/error"); // Chuyển hướng đến trang lỗi nếu ID không hợp lệ
        }
    }, [id]);


    const [request, setRequest] = useState([]);
    const handleDelete = (requestID) => {

        if (window.confirm("Are you sure you want to delete this request?")) {
            fetch(`http://localhost:8080/api/request/delete/${requestID}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }

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
    // Lấy index bắt đầu và kết thúc của list user hiện tại
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentRequest = request.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const handleUpdateStatus = async (requestID, newStatus) => {
        const updatedRequestList = request.map((req) => {
            if (req.requestID === requestID) {
                return { ...req, status: newStatus };
            }
            return req;
        });

        setRequest(updatedRequestList);

        try {
            const response = await fetch(
                `http://localhost:8080/api/request/${requestID}/${newStatus}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({ status: newStatus }),
                }
            );
            window.location.reload();

            if (!response.ok) {
                throw new Error("Failed to update request status");
            }
        } catch (error) {
            console.log(error.message);
            // Khôi phục trạng thái ban đầu nếu xảy ra lỗi
            setRequest(request);
        }
    };


    useEffect(() => {
        fetch(`http://localhost:8080/api/request/getbyuser/${id}`, role1)
            .then((resp) => resp.json())
            .then((data) => {
                const sortRequest = data.sort((a, b) => b.requestId - a.requestId);
                console.log(sortRequest)
                setRequest(sortRequest);
                
            })
            .catch((err) => {
                console.log(err.message);
                console.log(err);
            });
    }, [])

    const role1 = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    useEffect(() => {
        fetch(`http://localhost:8080/api/mentor/all`, role1)
            .then((resp) => resp.json())
            .then((data) => {
                setAllMentor(data);
                
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
                                        
                                        <th >Mentor Name</th>
                                        <th>Title</th>


                                        <th >Link</th>

                                        <th>Status</th>
                                        <th>Change</th>
                                        <th scope={2} >Action</th>
                                        <th>View</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRequest.map((r) => (
                                        <tr key={r.requestId}>
                                            
                                            <td >
                                            {allMentor.map((m) =>
                                                m.mentorID === r.mentorId ? m.mentorProfile.fullname : " "
                                              )}
                                            </td>
                                            <td>{r.title}</td>
                                            <td><a target="_blank" href={r.link}>{r.link}</a></td>
                                            <td>{r.status === 1 ?
                                                (<Tag color="orange">Pending</Tag>) :
                                                r.status === 2 ? (
                                                    <Tag color="red">Reject</Tag>
                                                ) : r.status === 0 ? (
                                                    <Tag color="green">Accept</Tag>

                                                ) : r.status === 3 ? (
                                                    <Tag color="success">Finish</Tag>
                                                ) : (
                                                    <span></span>
                                                )
                                            }</td>
                                            <td>
                                                {r.status === 3 ? (
                                                    <Link style={{ color: 'green' }} to={`/rating/${id}/${r.mentorId}`}><RateReviewIcon /></Link>
                                                ) : r.status === 0 ? (
                                                    <Button className="btn btn-danger"
                                                        onClick={() => handleUpdateStatus(r.requestId, 3)}
                                                    >Close</Button>
                                                ) : (
                                                    <span></span>
                                                )}
                                            </td>
                                            <td >
                                                {r.status === 3 ?
                                                    <span></span>
                                                    : <Link styles={{ color: "blue" }} to={'/requestuser/edit/' + id + '/' + r.requestId + '/' + r.mentorId}><PencilSquare /></Link>
                                                }
                                                &emsp;
                                                {
                                                    <Link style={{ marginRight: "30px" }} onClick={() => handleDelete(r.requestId)} ><Trash3Fill />
                                                    </Link>
                                                }
                                            </td>
                                            <td >
                                                {
                                                    <Link style={{ marginRight: "30px" }} onClick={() => showModal(r.requestId)} ><RemoveRedEyeIcon /></Link>
                                                }

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Modal  style={{textAlign:'center'}} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <h5 style={{marginBottom:"30px"}}>View Request</h5>
                                <p>Title: {viewRequest.title}</p>
                                <p>Link: <a target="_blank" href={viewRequest.link}>{viewRequest.link}</a> </p>
                                 Content:<p dangerouslySetInnerHTML={{ __html: viewRequest.content }}></p>
                                <p>Date : {viewRequest.date}</p>
                                <p>Status : {viewRequest.status === 1 ?
                                                (<Tag color="orange">Pending</Tag>) :
                                                viewRequest.status === 2 ? (
                                                    <Tag color="red">Reject</Tag>
                                                ) : viewRequest.status === 0 ? (
                                                    <Tag color="green">Accept</Tag>

                                                ) : viewRequest.status === 3 ? (
                                                    <Tag color="success">Finish</Tag>
                                                ) : (
                                                    <span></span>
                                                )
                                            }</p>
                                
                            </Modal>
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


        </TemplateUser>
    );
}

export default ManagerRequestUser;