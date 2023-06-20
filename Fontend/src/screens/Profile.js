import { Row } from "react-bootstrap";
import ProfileTemplate from "../template/ProfileTemplate";


const Profile = () => {

    return (
        <ProfileTemplate>

            <div className="content" style={{ minHeight: "527.672px" }}>
                <div className="profile">
                    <h3>Mentor Profile</h3>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="card">
                                <div className="card-body">
                                    <div className="mentor-widget">
                                        <div className="user-info-left align-items-center">
                                            <div className="mentor-img d-flex flex-wrap justify-content-center">
                                                <div className="pro-avatar">JD</div>
                                                <div className="rating text-center">
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star filled" />
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="mentor-details m-0">
                                                    <p className="user-location m-0">
                                                        <i className="fas fa-map-marker-alt" /> Tamil Nadu, India
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="user-info-cont">
                                                <h4 className="usr-name">Jonathan Doe</h4>
                                                <p className="mentor-type">English Literature (M.A)</p>
                                                <div className="mentor-action">
                                                    <p className="mentor-type social-title">Contact Me</p>
                                                    <a href="" className="btn-blue">
                                                        <i className="fas fa-comments" />
                                                    </a>
                                                    <a
                                                        className="btn-blue"
                                                        href="/reactjs/template/app/Mentor/chat"
                                                    >
                                                        <i className="fas fa-envelope" />
                                                    </a>
                                                    <a
                                                        href=""
                                                        className="btn-blue"
                                                        data-toggle="modal"
                                                        data-target="#voice_call"
                                                    >
                                                        <i className="fas fa-phone-alt" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="user-info-right d-flex align-items-end flex-wrap">
                                            <div className="hireme-btn text-center">
                                                <span className="hire-rate">$500 / Hour</span>
                                                <a
                                                    className="blue-btn-radius"
                                                    href="/reactjs/template/app/Mentee/booking"
                                                >
                                                    Hire Me
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body custom-border-card pb-0">
                                    <div className="widget about-widget custom-about mb-0">
                                        <h4 className="widget-title">About Me</h4>
                                        <hr />
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley
                                            of type and scrambled it to make a type specimen book. It has
                                            survived not only five centuries, but also the leap into
                                            electronic typesetting, remaining essentially unchanged.
                                        </p>
                                        <p>
                                            Contrary to popular belief, Lorem Ipsum is not simply random
                                            text. It has roots in a piece of classical Latin literature from
                                            45 BC, making it over 2000 years old.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body custom-border-card pb-0">
                                    <div className="widget education-widget mb-0">
                                        <h4 className="widget-title">Personal Details</h4>
                                        <hr />
                                        <div className="experience-box">
                                            <Row>                                                                                           
                                                   <div className="experience-content col-4">
                                                        <div className="timeline-content">
                                                            <span>Gender</span>
                                                            <div className="row-result">Male</div>
                                                        </div>
                                                    </div>                                                
                                                    <div className="experience-content col-4">
                                                        <div className="timeline-content">
                                                            <span>Date of Birth</span>
                                                            <div className="row-result">01 - 02 - 2000</div>
                                                        </div>
                                                    </div>                                               
                                                    <div className="experience-content col-4">
                                                        <div className="timeline-content">
                                                            <span>Where did you hear about us?</span>
                                                            <div className="row-result">Through web search</div>
                                                        </div>
                                                    </div>
                                            </Row>                                                                                                  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body custom-border-card pb-0">
                                    <div className="widget experience-widget mb-0">
                                        <h4 className="widget-title">Qualification</h4>
                                        <hr />
                                        <div className="experience-box">
                                            <ul className="experience-list profile-custom-list">
                                                <li>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <span>Undergraduate College</span>
                                                            <div className="row-result">Coimbatore University</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <span>Undergraduate Major</span>
                                                            <div className="row-result">Mathematics</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <span>Graduate College</span>
                                                            <div className="row-result">Coimbatore University</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <span>Type of Degree</span>
                                                            <div className="row-result">B.Sc (Maths)</div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body pb-1 custom-border-card">
                                    <div className="widget awards-widget m-0">
                                        <h4 className="widget-title">Location</h4>
                                        <hr />
                                        <div className="experience-box">
                                            <ul className="experience-list profile-custom-list">
                                                <li>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <span>Address 1</span>
                                                            <div className="row-result">No : 5 ABC Avenue</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <span>Address 2</span>
                                                            <div className="row-result">National highway road</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <span>Country</span>
                                                            <div className="row-result">India</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <span>City</span>
                                                            <div className="row-result">Coimbatore</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <span>State</span>
                                                            <div className="row-result">Tamil Nadu</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="experience-content">
                                                        <div className="timeline-content">
                                                            <span>Postal Code</span>
                                                            <div className="row-result">641001</div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileTemplate>
    );
}

export default Profile;