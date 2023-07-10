import '../styles/login.css'
import React, { useState } from 'react'
import TemplateLogin from '../template/TemplateLogin';
import { Link, useNavigate, } from "react-router-dom";
import { toast } from 'react-toastify';
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>

function Register() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("female");
    const [fullname, setFullname] = useState("")
    const [dob, setDob] = useState("")

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (username === null || username === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (fullname === null || fullname === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { username, password, email, phone, address, gender, fullname, dob };
        if (IsValidate()) {

            fetch("http://localhost:8080/api/auth/registration", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/login');
                console.log(regobj);
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }

    return (
        <TemplateLogin>
            <div className="container1">
                <div className="row px-3">
                    <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                        <div className="img-left d-none d-md-flex" />
                        <div className="card-body">
                            <h4 className="title text-center mt-4">Register account</h4>
                            <form className="form-box px-3" onSubmit={handlesubmit}>
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
                                        value={email} onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input type="Number" name="" placeholder="Phone" required="" value={phone} onChange={e => setPhone(e.target.value)} />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input type="text" name="" placeholder="Fullname" required="" value={fullname} onChange={e => setFullname(e.target.value)} />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input type="text" name="" placeholder="Address" required="" value={address} onChange={e => setAddress(e.target.value)} />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input type="date" name="" placeholder="Date of bird" required="" value={dob} onChange={e => setDob(e.target.value)} />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <input type="Username" name="" placeholder="Username" required="" value={username} onChange={e => setUserName(e.target.value)} />
                                </div>
                                <div className="form-input">
                                    <span>
                                        <i className="fa fa-key" />
                                    </span>
                                    <input type="password" name="" placeholder="Password" required="" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <br></br>
                                    <input type="radio" checked={gender === 0} onChange={e => setGender(0)} name="gender" value={0} />
                                    <label>Male</label>&emsp;
                                    <input type="radio" checked={gender === 1} onChange={e => setGender(1)} name="gender" value={1} />
                                    <label>Female</label>

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
