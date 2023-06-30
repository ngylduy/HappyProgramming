import React, { useEffect, useState } from "react";
import TemplateAdmin from "../template/TemplateAdmin";
import { Row, Col, Table } from "react-bootstrap";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';


const ManagerUser = () => {
    const [token, setToken] = useState(sessionStorage.getItem("token"));

    useEffect(() => {
        if (token) {
            console.log("Token is stored in localStorage:", token);
        } else {
            console.log("Token is not stored in localStorage");
        }
    }, [token]);

    const [user, setUser] = useState([]);

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
                                        <th style={{ padding: "20px" }}>Id</th>
                                        <th>UserName</th>
                                        <th>FullName</th>
                                        <th>Gender</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map((u) => (
                                        <tr key={u.id}>
                                            <td style={{ padding: "20px" }}>{u.id}</td>
                                            <td>{u.username}</td>
                                            <td>{u.fullname}</td>
                                            <td>
                                                {u.gender ? (
                                                    <span style={{ color: "blue"  }}>
                                                       <MaleIcon style={{width:"2em" , height:"40px"}}/>
                                                    </span>
                                                ) : (
                                                    <span style={{ color: "red" }}>
                                                         <FemaleIcon />
                                                    </span>
                                                )}
                                            </td>
                                            <td>{u.phone}</td>
                                            <td>{u.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </TemplateAdmin>
    );
};

export default ManagerUser;
