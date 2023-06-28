import '../styles/login.css'
import React from 'react'
import TemplateLogin from '../template/TemplateLogin';

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
                                
                                
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-block text-uppercase">
                                        ChangePass 
                                    </button>
                                </div>
                                
                                
                                <hr className="my-4" />
                                {/* <div className="text-center mb-2">
                                    You already have an account!!     
                                    <Link to="/login"   >Login Here</Link>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </TemplateLogin>

    );
}
export default ChangePass
