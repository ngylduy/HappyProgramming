import React, { useEffect, useState } from "react";



import { Col, Table, Row, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Pagination, Tag } from "antd"
import TemplateMentor from "../template/TemplateMentor";
import TemplateAdmin from "../template/TemplateAdmin";
function ManagerMentorRegist() {
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
        if (role === "USER_MENTOR" || role === "USER_MENTEE") {
            navigate("/error")
        }
    }, [])
    const handleAccept = (registID,userID) => {
        const updateRegist = {
            registID: registID,
            status: 1,
            userId: userID
        }
        fetch(`http://localhost:8080/api/mentor/updateStatus`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(updateRegist), // 1 là trạng thái chấp nhận
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data); // In ra dữ liệu sau khi cập nhật
                // Tiến hành cập nhật danh sách mentor đã chấp nhận
                // setRegist(prevRegist => prevRegist.map(regist => {
                //     if (regist.registID === registID) {
                //         return { ...regist, status: 1 }; // Cập nhật trạng thái của mentor đã chấp nhận
                //     } else {
                //         return regist;
                //     }
                // }));
            })
            .catch((err) => {
                console.log(err.message);
                console.log(err);
            });
        window.location.reload();
    };
    const handleReject = (registID,userID) => {
        const updateRegistb = {
            registID: registID,
            status: 0,
            userId: userID
        }
        fetch(`http://localhost:8080/api/mentor/updateStatus`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(updateRegistb), // 1 là trạng thái chấp nhận
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data); // In ra dữ liệu sau khi cập nhật
                // Tiến hành cập nhật danh sách mentor đã chấp nhận
                // setRegist(prevRegist => prevRegist.map(regist => {
                //     if (regist.registID === registID) {
                //         return { ...regist, status: 1 }; // Cập nhật trạng thái của mentor đã chấp nhận
                //     } else {
                //         return regist;
                //     }
                // }));
            })
            .catch((err) => {
                console.log(err.message);
                console.log(err);
            });
        window.location.reload();
    };



    const [regist, setRegist] = useState([]);

    // Tính toán số trang
    const totalPages = Math.ceil(regist.length / usersPerPage);

    // Lấy index bắt đầu và kết thúc của list user hiện tại
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentRatting = regist.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    useEffect(() => {
        fetch(`http://localhost:8080/api/mentor/listMentorRegist`, role1)
            .then((resp) => resp.json())
            .then((data) => {
                setRegist(data);
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
                console.log(data)
            })
            .catch((err) => {
                console.log(err.message);
                console.log(err);
            });
    }, []);
    return (
        <TemplateAdmin>
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col style={{ textAlign: "left", color: "blue" }}>
                            <h2>List Mentor Regist</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Table className="table border shadow" >
                                <thead>
                                    <tr>
                                        <th>RegistID</th>
                                        <th>MenteeName</th>
                                        <th >Date</th>
                                        <th>Status</th>
                                        <th>Change</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRatting.map((r) => (
                                        <tr key={r.registID}>
                                            <td >{r.registID}</td>
                                            <td>
                                                {allUser.map(a => a.id === r.userId ? a.fullname : "")}
                                            </td>
                                            <td >{r.date}</td>
                                            <td>{r.status === 1 ? (
                                                <Tag color="green">Actice</Tag>
                                            ) : r.status === 0 ? (
                                                <Tag color="red">Inactive</Tag>
                                            ) : (
                                                <span></span>
                                            )}</td>
                                            <td>{r.status === 0 ?
                                                <Button className="btn btn-success"
                                                    onClick={() => handleAccept(r.registID,r.userId)}
                                                >Accept</Button> :
                                                <Button className="btn btn-danger"
                                                    onClick={() => handleReject(r.registID,r.userId)}
                                                >Ban</Button>
                                            }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Pagination
                                current={currentPage}
                                total={regist.length}
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

export default ManagerMentorRegist;