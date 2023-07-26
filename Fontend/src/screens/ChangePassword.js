import React, { useState } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import TemplateLogin from '../template/TemplateLogin';
import { toast } from 'react-toastify';

function ChangePass() {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const user =sessionStorage.getItem('user')
    const history=useNavigate();

    const handleChangePassword = () => {
        if (!password || !newPassword) {
            alert('Please enter your current password and new password.');
            return;
        }

        // Gọi API thay đổi mật khẩu
        axios
            .post(
                'http://localhost:8080/api/auth/change_password', // Địa chỉ API của server để thay đổi mật khẩu
                {    
                    user_name: user,
                    old_password: password,
                    new_password: newPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('token')}`, // Gửi token trong header nếu có
                    },
                }
            )
            .then((response) => {
                // Xử lý kết quả thành công nếu cần thiết
                console.log(response.data);
                toast.success('Password changed successfully!');
                history('/')
            })
            .catch((error) => {
                // Xử lý lỗi nếu cần thiết
                console.error(error);
                alert('Failed to change password. Please try again.');
            });
    };

    return (
        <TemplateLogin>
            <div className="container1">
                <div className="row px-3">
                    <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                        <div className="img-left d-none d-md-flex" />
                        <div className="card-body">
                            <h4 className="title text-center mt-4">Change Password</h4>
                            <form className="form-box px-3">
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        placeholder="New Password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <Row>
                                    <div className="col-md-6">&emsp;&emsp;
                                        <Link to={"/"} className="btn btn-danger">
                                            Home
                                        </Link>
                                    </div>
                                    <div className="col-md-6">
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            onClick={handleChangePassword}
                                        >
                                            Change Password
                                        </button>
                                    </div>
                                </Row>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </TemplateLogin>
    );
}

export default ChangePass;
