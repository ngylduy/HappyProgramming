import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import TemplateLogin from "../template/TemplateLogin";
import axios from "axios";
import { toast } from "react-toastify";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  
  background-image: url('https://wallpapers.com/images/featured/goku-e2us8ym3rraxbnve.jpg');
  background-size: cover;
  background-position: center;
`;

const Card = styled.div`
  text-align: center;
  width: 400px;
  background-color: white; /* Tùy chỉnh màu nền của card login */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Thêm box-shadow để tạo hiệu ứng bóng cho card */
`;

const CardHeader = styled.div`
  font-size: 24px;
  color: white;
  background-color: blue;
  padding: 10px;
`;

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const history = useNavigate()

    const handleResetPassword = () => {
        if (!email) {
            toast.warning('Please enter email');
            return;
        }

        // Gọi API thay đổi mật khẩu
        axios
            .post(
                'http://localhost:8080/api/auth/reset_password', // Địa chỉ API của server để thay đổi mật khẩu
                {
                    email: email
                },
            )
            .then((response) => {
                toast.success('Password changed successfully!');
                history('/login')
            })
            .catch((error) => {
                // Xử lý lỗi nếu cần thiết
                console.error(error);
                toast.warning(' Please try again.');
            });
    };


    return (
        
            <Container>
                <Card>
                    <CardHeader>Password Reset</CardHeader>
                    <div className="card-body px-5">
                        <p className="card-text py-2">
                            Enter your email address and we'll send you an email with instructions to
                            reset your password.
                        </p>
                        <div className="form-outline">
                            <label className="form-label" htmlFor="typeEmail">
                                Email input
                            </label>
                            <input
                                type="email"
                                id="typeEmail"
                                className="form-control my-3"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary w-100" onClick={handleResetPassword}>
                            Reset password
                        </button>
                        <div className="d-flex justify-content-between mt-4">
                            <Link to={'/login'}>
                                Login
                            </Link>
                            <Link to={'/register'}>
                                Register
                            </Link>
                        </div>
                    </div>
                </Card>
            </Container>
        
    );
}

export default ForgotPassword;
