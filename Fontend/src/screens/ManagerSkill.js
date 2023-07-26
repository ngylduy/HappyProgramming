import React, { useEffect, useState } from "react";
import TemplateAdmin from "../template/TemplateAdmin";
import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { Pagination, Table, Space, Input, Modal, Form } from "antd";





function ManagerSkill() {



    const [token] = useState(sessionStorage.getItem("token"));
    const [skill, setSkill] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deletingSkillId, setDeletingSkillId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    // const [users, setUsers] = useState([]);
    const [modalAdd, setModalAdd] = useState(false);
    // const [modalEdit, setModalEdit] = useState(false);
    const [skillName, setSkillName] = useState('')
    // const [edit,setEdit] = useState([])



   


    const [role] = useState(sessionStorage.getItem("role"));
    const navigate = useNavigate()
    useEffect(() => {

        if (role === "USER_MENTEE" || role === "USER_MENTOR") {
            navigate("/error")
        }
    })








    useEffect(() => {
        if (token) {
            console.log("Token is stored in localStorage:", token);
        } else {
            console.log("Token is not stored in localStorage");
        }
    }, [token]);
    // Tính toán số trang
    // const totalPages = Math.ceil(skill.length / usersPerPage);

    // Lấy index bắt đầu và kết thúc của list user hiện tại
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentSkill = skill.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Chuyển đổi trang
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const role1 = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }

    useEffect(() => {
        fetch(`http://localhost:8080/api/skill`, role1)
            .then((resp) => resp.json())
            .then((data) => {
                setSkill(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    },);

    const handleDelete = (id) => {
        setShowDeleteModal(true);
        setDeletingSkillId(id);
    };
    const cancelDelete = () => {
        setShowDeleteModal(false);
        setDeletingSkillId(null);

    };

    const confirmDelete = () => {
        if (deletingSkillId) {
            fetch(`http://localhost:8080/api/${deletingSkillId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            })
                .then(() => {
                    window.location.reload();
                    toast.success("Delete success");
                    
                    
                    


                })
                .catch((err) => {
                    console.log(err.message);
                    alert("Có lỗi xảy ra khi xoá kỹ năng");
                });
        }
    };

    const handleAdd = () => {
        const skill = {
            skillName,
            status: 1
        }
        if(!skill.skillName || !skill.skillName.trim()){
            toast.warning('Enter Skill Name')
        }else
        {
            fetch('http://localhost:8080/api/skill', {
                method: "POST",
                headers: {
                    "Content-Type": "Application/JSON",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(skill)
            })
                .then(() => {
                    toast.success("add susses.")
                    
                        window.location.reload();
                   
                    setModalAdd(false)
                })

        }
    
       

    }
    // const handleEdithi = (id) => {
    //     setModalEdit(true);
    //     setEdit(id);
    //     fetch(`http://localhost:8080/api/skill/${edit}`, role1)
    //       .then((response) => {
    //         if (response.ok) {
    //           return response.json();
    //         } else {
    //           throw new Error('Error fetching skill data: ' + response.status);
    //         }
    //       })
    //       .then((data) => {
    //         console.log(data);
    //         setSkillName(data.skillName || '');
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         // Hiển thị thông báo lỗi cụ thể cho người dùng
    //       });
        
    // };
    // console.log(edit)
   
        
      
      
      

    // const handleEdit = (e) => {
    //     e.preventDefault();        
    //         const updatedSkill = {
    //             id:edit,
    //             skillName,
    //             status:1
    //         };

    //         console.log("hahaahaha",updatedSkill);
            

    //         fetch(`http://localhost:8080/api/skill/${edit}`, {
    //             method: "PUT",
    //             headers: { "Content-Type": "application/json",
    //             Authorization: `Bearer ${token}` },
    //             body: JSON.stringify(updatedSkill),
    //         })
    //         .then(() => {
    //             toast.success("Update successful");
    //             window.location.reload();
    //             setModalEdit(false)
    //         })
    //         .catch((error) => {
    //             console.error("Error updating skill:", error);
    //         });
    //     }
    

    const columns = [
        {
            title: 'ID',
            dataIndex: 'skillID',
            key: 'skillID',
        },
        {
            title: 'Name Skill',
            dataIndex: 'skillName',
            key: 'skillName',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (

                <Space size="middle">
                    <Link to={`/skill/edit/${record.skillID}`}><PencilSquare /></Link>
                    <Link onClick={() => handleDelete(record.skillID)}><Trash3Fill /></Link>
                </Space>

            ),
        },
    ];

    return (
        <TemplateAdmin>
            <ToastContainer />
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
                                <Link onClick={() => setModalAdd(true)}>Add Skill</Link>

                            </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table className=" table box shadow"
                                rowKey={(record) => record.skillID}
                                dataSource={currentSkill}
                                columns={columns}
                                pagination={false} // Tắt phân trang mặc định của Table
                            />
                            <Pagination
                                current={currentPage}
                                total={skill.length}
                                pageSize={usersPerPage}
                                onChange={paginate}

                                style={{ marginTop: "16px", textAlign: "center" }}
                            />

                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Delete Modal */}
            <Modal
                title="Confirm skill deletion"
                centered
                okType="danger"
                open={showDeleteModal}
                onOk={confirmDelete}
                onCancel={cancelDelete}
            >
                <p>Are you sure you want to delete this skill?</p>
            </Modal>
            {/* Modal Add Skill */}
            <Modal
                open={modalAdd}

                onCancel={() => setModalAdd(false)}
                onOk={handleAdd}
            >
                <Form >
                    <h4 style={{ textAlign: 'center' }}>Add Skill</h4>
                    <div style={{ marginTop: '50px' }}>
                        <Form.Item label="Skill Name">
                            <Input value={skillName} onChange={(e) => setSkillName(e.target.value)} />
                        </Form.Item>
                    </div>
                </Form>
            </Modal>
             {/* Modal Edit Skill */}
            {/* <Modal
                open={modalEdit}

                onCancel={() => setModalEdit(false)}
                onOk={handleEdit}
            >
                <Form >
                    <h4 style={{ textAlign: 'center' }}>Edit Skill </h4>
                    <div style={{ marginTop: '50px' }}>
                        <Form.Item label="Skill Name">
                            <Input value={skillName} onChange={(e) => setSkillName(e.target.value)} />
                        </Form.Item>
                    </div>
                </Form>
            </Modal> */}
        </TemplateAdmin>
    );
}

export default ManagerSkill;