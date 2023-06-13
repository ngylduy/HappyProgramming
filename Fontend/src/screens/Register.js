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
                                    <input type="Username" name="" placeholder="Username" required="" />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-key" />
                                    </span>
                                    <input type="password" name="" placeholder="Password" required="" />
                                </div>
                                <div className="mb-3">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="cb1"
                                            name=""
                                        />
                                        <label className="custom-control-label" htmlFor="cb1">
                                            Mentor
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-block text-uppercase">
                                        Sigin
                                    </button>
                                </div>
                                
                                <div className="text-center mb-3">or login with</div>
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <a href="#" className="btn btn-block btn-social btn-facebook">
                                            facebook
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="btn btn-block btn-social btn-google">
                                            google
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <Link to="/"  className="btn btn-block btn-social btn-twitter" >Home</Link>
                                    </div>
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
