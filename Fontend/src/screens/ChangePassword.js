import '../styles/login.css'
import React from 'react'
import TemplateLogin from '../template/TemplateLogin';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>

function ChangePass() {

    return (
        <TemplateLogin>
            <div className="container1">
                <div className="row px-3">
                    <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                        <div className="img-left d-none d-md-flex" />
                        <div className="card-body">
                            <h4 className="title text-center mt-4">Change Pass</h4>
                            <form className="form-box px-3">

                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input type="pass" name="" placeholder="Password" required="" />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input type="pass" name="" placeholder="New Password" required="" />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input type="pass" name="" placeholder="New Password" required="" />
                                </div>
                                <Row>
                                    <div className="col-md-6">
                                    &emsp;&emsp;
                                        <Link to={"/"} className="btn btn-danger">
                                            Home
                                        </Link>

                                    </div>

                                    <div className="col-md-6">

                                        <Link  className="btn btn-success">
                                            Change Password
                                        </Link>
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
export default ChangePass
