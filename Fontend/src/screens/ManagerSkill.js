import React, { useEffect, useState } from "react";
import TemplateAdmin from "../template/TemplateAdmin";
import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { Col, Table, Row, Modal, Button , Pagination} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast ,ToastContainer } from "react-toastify";

function ManagerSkill() {
    const [token] = useState(sessionStorage.getItem("token"));
    const [skill, setSkill] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deletingSkillId, setDeletingSkillId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);


    useEffect(() => {
        if (token) {
            console.log("Token is stored in localStorage:", token);
        } else {
            console.log("Token is not stored in localStorage");
        }
    }, [token]);
     // Tính toán số trang
     const totalPages = Math.ceil(skill.length / usersPerPage);

     // Lấy index bắt đầu và kết thúc của list user hiện tại
     const indexOfLastUser = currentPage * usersPerPage;
     const indexOfFirstUser = indexOfLastUser - usersPerPage;
     const currentSkill = skill.slice(indexOfFirstUser, indexOfLastUser);
 
     // Chuyển đổi trang
     // const paginate = (pageNumber) => setCurrentPage(pageNumber);
     const role1 = {
        method:"GET",
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
     }

    useEffect(() => {
        fetch(`http://localhost:8080/api/skill`,role1)
            .then((resp) => resp.json())
            .then((data) => {
                setSkill(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleDelete = (id) => {
        setShowDeleteModal(true);
        setDeletingSkillId(id);
    };

    const confirmDelete = () => {
        if (deletingSkillId) {
            fetch(`http://localhost:8080/api/${deletingSkillId}`, {
                method: "DELETE",
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            })
                .then(() => {
                    toast.success("Delete success");
                    window.location.reload();
                    
                    
                })
                .catch((err) => {
                    console.log(err.message);
                    alert("Có lỗi xảy ra khi xoá kỹ năng");
                });
        }
    };

    const cancelDelete = () => {
        setShowDeleteModal(false);
        setDeletingSkillId(null);
    };

    return (
        <TemplateAdmin>
            <ToastContainer/>
            <Row>
                <Col xs={12}>
                    <Row>
                        <Col style={{ textAlign: "left", color: "blue" }}>
                            <h2>List Skill</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: "right" }}>
                            <h5>
                                <Link to={"/skill/add"}>Create new Skill</Link>
                            </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table className="table border shadow">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th scope={2}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentSkill.map((s) => (
                                        <tr key={s.skillID}>
                                            <td>{s.skillID}</td>
                                            <td>{s.skillName}</td>
                                            <td>
                                                <Link
                                                    styles={{ color: "blue" }}
                                                    to={"/skill/edit/" + s.skillID}
                                                >
                                                    <PencilSquare />
                                                </Link>
                                                &emsp;
                                                &emsp;
                                                <Link
                                                 onClick={() => handleDelete(s.skillID)}>
                                                        <Trash3Fill styles={{ color: "red" }}/>
                                                    </Link>
                                            </td>
                                           
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

            {/* Delete Modal */}
            <Modal show={showDeleteModal} onHide={cancelDelete} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm skill deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this skill?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelDelete}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </TemplateAdmin>
    );
}

export default ManagerSkill;
