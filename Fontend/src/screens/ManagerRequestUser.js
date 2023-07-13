import React, { useEffect, useState } from "react";


import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { Col, Table, Row, Pagination, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import TemplateUser from "../template/TemplateUser";
import RateReviewIcon from '@mui/icons-material/RateReview';












function ManagerRequestUser() {
    const { id } = useParams();
    console.log(id)
    
    const [token] = useState(sessionStorage.getItem('token'));
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const [currentUserID] = useState(sessionStorage.getItem('idne'))

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
    const totalPages = Math.ceil(request.length / usersPerPage);

    // Lấy index bắt đầu và kết thúc của list user hiện tại
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentRequest = request.slice(indexOfFirstUser, indexOfLastUser);
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
                setRequest(data);
                console.log(data)
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
                                        <th >MentorID</th>
                                        <th >content</th>
                                        <th>date</th>
                                        <th >link</th>
                                        <th>title</th>
                                        <th>Status</th>
                                        <th>Change</th>
                                        <th scope={2} >Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRequest.map((r) => (
                                        <tr key={r.requestId}>
                                            <td >{r.requestId}</td>
                                            <td >{r.mentorId}</td>

                                            <td >{r.content}</td>
                                            <td>{r.date}</td>
                                            <td><a href={r.link}>{r.link}</a></td>
                                            <td>{r.title}</td>

                                            <td>{r.status === 1 ?
                                                (<span style={{ color: "#FF9900" }}>Pending</span>) :
                                                r.status === 2 ? (
                                                    <span style={{ color: "red" }}>Reject</span>
                                                ) : r.status === 0 ? (
                                                    <span style={{ color: "green" }}>Accept</span>

                                                ) : r.status === 3 ? (
                                                    <span style={{ color: "red" }}>Finish</span>
                                                ) : (
                                                    <span></span>
                                                )
                                            }</td>
                                            <td>
                                                {r.status === 3 ? (
                                                    <Link style={{color:'green'}}to={`/rating/${id}/${r.mentorId}`}><RateReviewIcon/></Link>
                                                ) :r.status===0?  (
                                                    <Button className="btn btn-danger"
                                                        onClick={() => handleUpdateStatus(r.requestId, 3)}
                                                    >Close</Button>
                                                ):(
                                                    <span></span>
                                                )}
                                            </td>
                                            <td >
                                                {
                                                    <Link styles={{ color: "blue" }} to={'/requestuser/edit/' + id + '/' + r.requestId + '/' + r.mentorId}><PencilSquare /></Link>
                                                }
                                                &emsp;
                                                {

                                                    <Link style={{ marginRight: "30px" }} onClick={() => handleDelete(r.requestId)} ><Trash3Fill /></Link>


                                                }
                                            </td>
                                            <td >

                                            </td>



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


        </TemplateUser>
    );
}

export default ManagerRequestUser;