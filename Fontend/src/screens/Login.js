import '../styles/login.css';
import React, { useState, useEffect } from 'react';
import TemplateLogin from '../template/TemplateLogin';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
   
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        const stname =sessionStorage.getItem('token')
        if(stname){
            navigate("/")
        }
    },[])
    
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        if (storedUsername && storedPassword) {
            setUserName(storedUsername);
            setPassword(storedPassword);
            setRememberMe(true);
        }
    }, []);

    async function handleLogin(event) {
        event.preventDefault();
        if (!username || !password) {
            toast.error('Vui lòng nhập tên đăng nhập và mật khẩu.');
            return;
        }

        try {
            const response = await axios.post(
              `http://localhost:8080/api/auth/login`,
              {
                username: username,
                password: password,
              }
            );
          
            if (response.status === 200) {
              if (response.data.id === 1) {
                sessionStorage.setItem('username', username);
                // setUserName(response.data.username);
                // if (rememberMe) {
                //   localStorage.setItem('username', username);
                //   localStorage.setItem('password', password);
                // } else {
                //   localStorage.removeItem('username');
                //   localStorage.removeItem('password');
                // }
                navigate('/mentee');
              } else {
                // setUserName(response.data.username);
                sessionStorage.setItem("token", response.data.token)
                // if (rememberMe) {
                //   localStorage.setItem('username', username);
                //   localStorage.setItem('password', password);
                // } else {
                //   localStorage.removeItem('username');
                //   localStorage.removeItem('password');
                // }
                navigate('/');
              }
              toast.success('Login success');
            } else {
              throw new Error(`Unexpected status code ${response.status}`);
            }
          } catch (error) {
            if (error.response && error.response.status === 403) {
              toast.error('Tên tài khoản hoặc mật khẩu không chính xác');
            } else {
              toast.error('Đã có lỗi xảy ra. Vui lòng thử lại sau');
            }
          }
          
        
   
      
    }

    return (
        <TemplateLogin>
            
            <div className="container1">
                <div className="row px-3">
                    <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                        <div className="img-left d-none d-md-flex" />
                        <div className="card-body">
                            <h4 className="title text-center mt-4">Login into account</h4>
                            <form className="form-box px-3" onSubmit={handleLogin}>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input
                                        type="text"
                                        name=""
                                        placeholder="Email Address"
                                        tabIndex={10}
                                        required=""
                                        value={username}
                                        onChange={(event) => setUserName(event.target.value)}
                                    />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-key" />
                                    </span>
                                    <input
                                        type="password"
                                        name=""
                                        placeholder="Password"
                                        required=""
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="cb1"
                                            name=""
                                            checked={rememberMe}
                                            onChange={(event) => setRememberMe(event.target.checked)}
                                        />
                                        <label className="custom-control-label" htmlFor="cb1">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                        tabIndex={9}
                                    >
                                        Sign in
                                    </button>
                                    
                                 
                                </div>
                                <div className="text-center mb-3">or login with</div>
                                <div className="row mb-3">
                                    <div className="col-6">
                                        <a href="#" className="btn btn-block btn-social btn-facebook">
                                            facebook
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <a href="#" className="btn btn-block btn-social btn-google">
                                            google
                                        </a>
                                    </div>
                                    
                                </div>
                                <hr className="my-4" />
                                <div className="text-center mb-2">
                                Don't have an account?
                                <Link to="/register" className="ml-2">
                                            Register here
                                        </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </TemplateLogin>
    );
}

export default Login;