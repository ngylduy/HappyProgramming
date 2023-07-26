import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import moment from 'moment';


const UpdateUserProfile = () => {
    const [users, setUsers] = useState([]);
    const [token] = useState(sessionStorage.getItem("token"));
    const navigator = useNavigate()


    const [fullname, setFullname] = useState("");
    const [email] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [dob, setDOB] = useState("")
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/user/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUsers(response.data);

                const userID = response.data.id;
                console.log(userID);

                setFullname(response.data.fullname);

                setPhone(response.data.phone);
                setGender(response.data.gender);
                setAddress(response.data.address);
                setDOB(response.data.dob);


            } catch (error) {
                console.error(error);
            }
        };

        if (token) {
            fetchUsers();
        } else {
            setUsers([]);
        }
    }, [token]);
    const IsValidate = () => {
        let isproceed = true;

       
        if (!fullname || !fullname.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in fullname');
        }
        
       
        if (!address || !address.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in address');
        }
        
        if (!phone || !phone.trim()) {
            isproceed = false;
            toast.warning('Please enter the value in phone');
          } else if (/^0\d{9}$/.test(phone)) {
            // Kiểm tra số điện thoại hợp lệ
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
       




        return isproceed;
    }
    
   

    const handleSave = () => {
        if (!IsValidate()) {
            
        } else {
        // Gửi dữ liệu chỉnh sửa lên server, sử dụng axios hoặc phương thức HTTP tương ứng
        // Ví dụ:
        const UpdateProfile = {
            fullname: fullname,
                    email: email,
                    phone: phone,
                    gender: gender,
                    address: address,
                    dob: dob,
        };
    
        
    
        fetch(`http://localhost:8080/api/user/save/${users.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json",
            Authorization: `Bearer ${token}` },
            body: JSON.stringify(UpdateProfile),
        })
            
            .then((response) => {
                // Xử lý sau khi lưu thành công
                toast.success('Update successful')
                navigator('/profile')
                console.log(response.data)

            })
            .catch((error) => {
                // Xử lý khi có lỗi xảy ra
                console.error(error);
            });
    };
}

    return (
        <div className="container">
            <div className="main-body">
                {/* Breadcrumb */}
                {/* /Breadcrumb */}
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    {/* <img
                                        src={mentor.avatar}
                                        alt="Admin"
                                        className="rounded-circle"
                                        width={150}
                                    /> */}
                                    <div className="mt-3">
                                        <h4>{users.username}</h4>
                                        
                                        <p className="text-muted font-size-sm">{users.address}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-github mr-2 icon-inline"
                                        >
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                        </svg>
                                        <span className="text-secondary">@bootdey</span>
                                    </h6>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-twitter mr-2 icon-inline text-info"
                                        >
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                        </svg>
                                        Twitter
                                    </h6>
                                    <span className="text-secondary">@bootdey</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-instagram mr-2 icon-inline text-danger"
                                        >
                                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                        </svg>
                                        Instagram
                                    </h6>
                                    <span className="text-secondary">bootdey</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-facebook mr-2 icon-inline text-primary"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                        Facebook
                                    </h6>
                                    <span className="text-secondary">bootdey</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <Input
                                            type="text"
                                            value={fullname}
                                            onChange={(event) => setFullname(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>

                                    <div className="col-sm-9 text-secondary">{users.email}</div>

                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <Input
                                            type="tel"
                                            value={phone}
                                            onChange={(event) => setPhone(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Gender</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <select value={gender} onChange={handleGenderChange}>
                                            <option value="true">Male</option>
                                            <option value="false">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <Input
                                            type="text"
                                            value={address}
                                            onChange={(event) => setAddress(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">DOB</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <Input
                                            type="date"
                                            value={dob}
                                            onChange={(event) => setDOB(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <hr />
                                <div className="row">
                                    <div className="col-sm-12">
                                        <button className="btn btn-info" onClick={handleSave}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateUserProfile;

