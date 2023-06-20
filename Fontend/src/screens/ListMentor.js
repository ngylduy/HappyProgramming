import { Container, Row, Col } from "react-bootstrap";
import ProfileTemplate from "../template/ProfileTemplate";

const ListMentee = () => {
    return (
        <ProfileTemplate>
            <div className="breadcrumb-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-8 col-12">
                            <h2 className="breadcrumb-title">Mentee List</h2>
                        </div>
                        <div className="col-md-4 col-12">
                            <form className="search-form custom-search-form">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        placeholder="Search Mentees..."
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
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        <div className="card-body">
                            <div className="pro-widget-content">
                                <div className="profile-info-widget">
                                    <a
                                        className="booking-user-img"
                                        href="/reactjs/template/app/Mentor/profile-mentee"
                                    >
                                        <img
                                            src="https://easydrawingguides.com/wp-content/uploads/2022/11/Low-Res-Kamado-Tanjiro-from-Demon-Slayer.png"
                                            alt="User Image"
                                        />
                                    </a>
                                    <div className="profile-det-info">
                                        <h3>
                                            <a href="/reactjs/template/app/Mentor/profile-mentee">
                                                Charlene Reed
                                            </a>
                                        </h3>
                                        <div className="mentee-details">
                                            <h6>
                                                <b>Mentee ID :</b> 01
                                            </h6>
                                            <h5>
                                                <i className="fas fa-map-marker-alt" /> North Carolina, USA
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mentee-info">
                                <ul>
                                    <li>
                                        Phone <span>+1 828 632 9170</span>
                                    </li>
                                    <li>
                                        Age <span>29 Years, Female</span>
                                    </li>
                                    <li>
                                        Blood Group <span>O+</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        <div className="card-body">
                            <div className="pro-widget-content">
                                <div className="profile-info-widget">
                                    <a
                                        className="booking-user-img"
                                        href="/reactjs/template/app/Mentor/profile-mentee"
                                    >
                                        <img
                                            src="https://fictionhorizon.com/wp-content/uploads/2022/03/Kyojuro_declares_that_he_will_kill_a_demon-1.png"
                                            alt="User Image"
                                        />
                                    </a>
                                    <div className="profile-det-info">
                                        <h3>
                                            <a href="/reactjs/template/app/Mentor/profile-mentee">
                                                Richard Wilson
                                            </a>
                                        </h3>
                                        <div className="mentee-details">
                                            <h5>
                                                <b>Mentee ID :</b> 16
                                            </h5>
                                            <h5 className="mb-0">
                                                <i className="fas fa-map-marker-alt" /> Alabama, USA
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mentee-info">
                                <ul>
                                    <li>
                                        Phone <span>+1 952 001 8563</span>
                                    </li>
                                    <li>
                                        Age <span>38 Years, Male</span>
                                    </li>
                                    <li>
                                        Blood Group <span>AB+</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4">
                    
                        <div className="card-body">
                            <div className="pro-widget-content">
                                <div className="profile-info-widget">
                                    <a
                                        className="booking-user-img"
                                        href="/reactjs/template/app/Mentor/profile-mentee"
                                    >
                                        <img
                                            src="https://fictionhorizon.com/wp-content/uploads/2022/03/Kyojuro_declares_that_he_will_kill_a_demon-1.png"
                                            alt="User Image"
                                        />
                                    </a>
                                    <div className="profile-det-info">
                                        <h3>
                                            <a href="/reactjs/template/app/Mentor/profile-mentee">
                                                Richard Wilson
                                            </a>
                                        </h3>
                                        <div className="mentee-details">
                                            <h5>
                                                <b>Mentee ID :</b> 16
                                            </h5>
                                            <h5 className="mb-0">
                                                <i className="fas fa-map-marker-alt" /> Alabama, USA
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mentee-info">
                                <ul>
                                    <li>
                                        Phone <span>+1 952 001 8563</span>
                                    </li>
                                    <li>
                                        Age <span>38 Years, Male</span>
                                    </li>
                                    <li>
                                        Blood Group <span>AB+</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    
                    </div>
                </Row>

            </Container>
            </div>

        </ProfileTemplate>
    );
}

export default ListMentee;