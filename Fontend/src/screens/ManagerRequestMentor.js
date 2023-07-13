import React, { useEffect, useState } from "react";


import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { Col, Table, Row, Pagination, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import TemplateMentor from "../template/TemplateMentor";
import axios from "axios";













function ManagerRequestMentor() {
    const { mentorID } = useParams();
    console.log("mentorID",mentorID)
    const [token,setToken] = useState(sessionStorage.getItem('token'));
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const [currentMentorID] = useState(sessionStorage.getItem('mentorne'))
    console.log("currentMentorID" ,currentMentorID)
    
    const[users,setUsers] =useState([])

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
    
        if (mentorID !== String(currentMentorID)) {
          navigate("/error"); // Chuyển hướng đến trang lỗi nếu ID không hợp lệ
          
        }
      }, [mentorID]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/user/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                
                setUsers(response.data.id);
                console.log(users)
                
                
                
               
            } catch (error) {
                console.error(error);
            }
        };

        if (token) {
            setToken(token);
            fetchUsers();
        } else {
            setUsers([]);
        }

    }, [token]);
    const role1 = {
        method:"GET",
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
     }


    const [request, setRequest] = useState([]);
   
    
    // Tính toán số trang
    const totalPages = Math.ceil(request.length / usersPerPage);

    // Lấy index bắt đầu và kết thúc của list user hiện tại
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentRequest = request.slice(indexOfFirstUser, indexOfLastUser);
    const handleUpdateStatus = async ( requestID, newStatus) => {
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
        fetch(`http://localhost:8080/api/request/getbymentor/${mentorID}`,role1)
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
        <TemplateMentor>
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col style={{ textAlign: "left", color: "blue" }}>
                            <h2>List Request</h2>
                        </Col>
                    </Row>
                    {/* <Row>
                            <Col style={{ textAlign: "right" }}>
                                <h5><Link to={"/listmentor"}>Create Request</Link></h5>
                                
                            </Col>
                        </Row> */}
                    <Row>
                        <Col>
                            <Table className="table border shadow" >
                                <thead>
                                    <tr>
                                        <th >Id</th>
                                        <th >Content</th>
                                        <th>Date</th>
                                        <th >Link</th>
                                        <th>Title</th>
                                        <th>Status</th>
                                        <th scope={2} >Change Status</th>
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
                                            <td>{r.status === 1 ?
                                                (<span style={{ color: "#FF9900" }}>Pending</span>) :
                                                r.status === 2 ? (
                                                    <span style={{ color: "red" }}>Reject</span>
                                                ) : r.status === 0 ? (
                                                    <span style={{ color: "green" }}>Accept</span>
                                                ) :  r.status === 3 ? (
                                                    <span style={{ color: "red" }}>Close</span>
                                                ):
                                                (
                                                    <span></span>
                                                )
                                            }</td>
                                            <td>
                                                {r.status ===3?(
                                                    <span></span>
                                                ):(<>
                                                    <Button className="btn btn-success"
                                                    onClick={() => handleUpdateStatus(r.requestID, 0)}
                                                    >Accept</Button>&emsp;
                                                    <Button className="btn btn-danger" 
                                                    onClick={() => handleUpdateStatus(r.requestID, 2)}
                                                    >Reject</Button>
                                                    </>
                                                )}
                                               


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


        </TemplateMentor>
    );
}

export default ManagerRequestMentor;