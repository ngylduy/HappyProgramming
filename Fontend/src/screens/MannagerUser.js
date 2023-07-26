import React, { useEffect, useState } from "react";
import TemplateAdmin from "../template/TemplateAdmin";
import { Row, Col, Table,  } from "react-bootstrap";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { useNavigate } from "react-router-dom";
import {Pagination} from "antd"


const ManagerUser = () => {
    const [token] = useState(sessionStorage.getItem("token"));
    const [role] = useState(sessionStorage.getItem("role"));
    const navigate = useNavigate()
    useEffect(() => {
        if (role === "USER_MENTEE" || role === "USER_MENTOR") {
            navigate("/error")
        }
    }, [])

    
    const role1 = {
        method:"GET",
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
     }

    const [user, setUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    

    useEffect(() => {
        fetch("http://localhost:8080/api/user",role1)
            .then((resp) => resp.json())
            .then((data) => {
                setUser(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    // Tính toán số trang
    const totalPages = Math.ceil(user.length / usersPerPage);

    // Lấy index bắt đầu và kết thúc của list user hiện tại
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = user.slice(indexOfFirstUser, indexOfLastUser);

    // Chuyển đổi trang
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <TemplateAdmin>
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col style={{ textAlign: "left", color: "blue" }}>
                            <h2>List User</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table className="table border shadow">
                                <thead>
                                    <tr>
                                        <th >ID</th>
                                        <th>Username</th>
                                        <th>Fullname</th>
                                        <th>Gender</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {currentUsers.map((u) => (
                                        <tr key={u.id}>
                                            <td style={{ padding: "20px" }}>{u.id}</td>
                                            <td>{u.username}</td>
                                            <td>{u.fullname}</td>
                                            <td>
                                                {u.gender ? (
                                                    <span style={{ color: "blue" }}>
                                                       <MaleIcon style={{width:"2em", height:"40px"}}/>
                                                    </span>
                                                ) : (
                                                    <span style={{ color: "red" }}>
                                                         <FemaleIcon style={{width:"2em", height:"40px"}}/>
                                                    </span>
                                                )}
                                            </td>
                                            <td>{u.phone}</td>
                                            <td>{u.email}</td>
                                            <td>{
                                            u.status?
                                                <span style={{color:'green'}}>Active</span>:<span style={{color:'red'}}>Inactive</span>
                                            
                                            }</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Pagination
                                current={currentPage}
                                total={user.length}
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
};

export default ManagerUser;
