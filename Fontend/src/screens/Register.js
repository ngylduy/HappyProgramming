import '../styles/login.css'
import React, { useState } from 'react'
import TemplateLogin from '../template/TemplateLogin';
import { Link, useNavigate, } from "react-router-dom";
import { toast } from 'react-toastify';
import { FaLongArrowAltLeft } from "react-icons/fa";
import moment from 'moment';
import validator from 'validator'
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>

function Register() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState(0);
    const [fullname, setFullname] = useState("")
    const [dob, setDob] = useState("")
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;

        if (!username || !username.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in username');
        }
        if (!fullname || !fullname.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in fullname');
        }
        if (!password || !password.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in password');
        }
        if (!email || !email.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in email');
        }
        if (!address || !address.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in address');
        }
        if (password !== confirmPassword) {
            isproceed = false;
            toast.warning('Passwords do not match');

        }
        if (/^0\d{9}$/.test(phone)) {
        } else {
          isproceed = false;
          toast.warning("Phone numbers need 10 digits and start with the digit 0");
        }
        const currentDate = moment();
        const dobDate = moment(dob);
        const age = currentDate.diff(dobDate, 'years');

        if (age < 6) {
            isproceed = false;
            toast.warning('You must be at least 15 years old');
        }
        if (!validator.isEmail(email)) {
            isproceed = false;
            toast.warning('Please enter a valid email');
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
    const homePage = () => {
        navigate('/')
    }

    return (
        <TemplateLogin>
            <h3 type="button" onClick={homePage} style={{ marginTop: '20px' }} ><FaLongArrowAltLeft />HomePage</h3>

            <div className="container">
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

                                    <input type="Password" name="" placeholder="Password" required="" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="form-input">
                                    <input type="Password" name="" placeholder="Confirm Password" required="" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                                </div>
                                <div className="form-group" >
                                    <label>Gender</label>
                                    <br></br>
                                    <input style={{ appearance: 'auto' }} type="radio" checked={gender === 0} onChange={e => setGender(0)} name="gender" value={0} />
                                    <label>Male</label>&emsp;
                                    <input style={{ appearance: 'auto' }} type="radio" checked={gender === 1} onChange={e => setGender(1)} name="gender" value={1} />
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
