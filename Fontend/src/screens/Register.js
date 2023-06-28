import '../styles/login.css'
import React from 'react'
import TemplateLogin from '../template/TemplateLogin';
import { Link, useNavigate, } from "react-router-dom";
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>

function Register() {
    
    return (
        <TemplateLogin>
            <div className="container1">
                <div className="row px-3">
                    <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                        <div className="img-left d-none d-md-flex" />
                        <div className="card-body">
                            <h4 className="title text-center mt-4">Register account</h4>
                            <form className="form-box px-3">
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input
                                        type="email"
                                        name=""
                                        placeholder="Email Address"
                                        tabIndex={10}
                                        required=""
                                    />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input type="Number" name="" placeholder="Phone" required="" />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input type="text" name="" placeholder="Fullname" required="" />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input type="text" name="" placeholder="Address" required="" />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input type="date" name="" placeholder="Date of bird" required="" />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input type="Username" name="" placeholder="Username" required="" />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-key" />
                                    </span>
                                    <input type="password" name="" placeholder="Password" required="" />
                                </div>
                                
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-block text-uppercase">
                                        Sigin
                                    </button>
                                </div>
                                
                                
                                <hr className="my-4" />
                                <div className="text-center mb-2">
                                    You already have an account!!     
                                    <Link to="/login"   >Login Here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </TemplateLogin>

    );
}
export default Register
