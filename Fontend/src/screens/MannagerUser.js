import React, { useEffect, useState } from "react";
import TemplateAdmin from "../template/TemplateAdmin";
import { Row, Col, Table, Pagination } from "react-bootstrap";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';


const ManagerUser = () => {
    const [token] = useState(sessionStorage.getItem("token"));

    useEffect(() => {
        if (token) {
            console.log("Token được lưu trong localStorage:", token);
        } else {
            console.log("Token không được lưu trong localStorage");
        }
    }, [token]);

    const [user, setUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);

    useEffect(() => {
        fetch("http://localhost:8080/api/user")
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
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        </TemplateAdmin>
    );
};

export default ManagerUser;
