import { Container, Row, Col } from "react-bootstrap";
import ProfileTemplate from "../template/ProfileTemplate";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const ListMentorSkill = () => {
    const {userid} =useParams()
    const [listmentor, setListMentor] = useState([]);
    const [token] = useState(sessionStorage.getItem("token"));
    const role1 = {
        method:"GET",
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
     }
    // const [exp,setExp]=useState('')
    useEffect(() => {
        fetch(`http://localhost:8080/api/mentor/skill/${userid}`)
            .then((res) => res.json())
            .then((data) => {
                setListMentor(data);


                console.log(data);
            })
    }, [])
    return (
        <ProfileTemplate>
            <div className="breadcrumb-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-8 col-12">
                            <h2 className="breadcrumb-title">Mentor List</h2>
                        </div>
                        <div className="col-md-4 col-12">
                            <form className="search-form custom-search-form">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        placeholder="Search Mentor..."
                                        className="form-control"
                                    />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-primary">
                                            <i className="fa fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list">
                <Container>
                    <Row>
                        {listmentor.map((m) => {
                            const exp = m.mentorSkills[0]?.yearsOfExp || '';
                            return (
                                <div className="col-md-8 col-lg-6 col-xl-4">
                                    <div className="card-body">
                                        <div className="pro-widget-content">
                                            <div className="profile-info-widget">
                                                <a className="booking-user-img" href="/reactjs/template/app/Mentor/profile-mentee">
                                                    <img src={m.avatar} alt="User Image" />
                                                </a>
                                                <div className="profile-det-info">
                                                    <h3>
                                                        <Link to={`/mentor/cv/` + m.mentorProfile.id}>
                                                            {m.mentorProfile.fullname}</Link>


                                                    </h3>
                                                    <hr />
                                                    <div className="mentee-details">

                                                        <h5>
                                                            <i style={{ marginRight: '45px' }} className="fas fa-map-marker-alt" />  {m.mentorProfile.address}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mentee-info">
                                            <ul>
                                                <li>
                                                    Phone <span>{m.mentorProfile.phone}</span>
                                                </li>
                                                <li>
                                                    Profession <span>{m.profession}</span>
                                                </li>
                                                <li>
                                                    Year of Exp <span>{exp} year</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </ProfileTemplate>
    );
}

export default ListMentorSkill;