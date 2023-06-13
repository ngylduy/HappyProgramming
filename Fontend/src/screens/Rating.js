import React from 'react'
import '../styles/home.css'


const Rating = () => {
    return (
        <section>
            <div className="container my-5 py-5 text-dark">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-6">
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="d-flex flex-start w-100">
                                    <div className="w-100">
                                        <form action="rating" method="post">
                                            <h5 style={{ color: "#5fcf80" }}>
                                                Give mentor your feedback
                                            </h5>
                                            <div className="rating mb-3" id="rating">
                                                <input
                                                    type="radio"
                                                    id="star5"
                                                    name="rating"
                                                    defaultValue={5}
                                                />
                                                <label className="full" htmlFor="star5" title="Awesome" />
                                                <input
                                                    type="radio"
                                                    id="star4"
                                                    name="rating"
                                                    defaultValue={4}
                                                />
                                                <label
                                                    className="full"
                                                    htmlFor="star4"
                                                    title="Pretty good"
                                                />
                                                <input
                                                    type="radio"
                                                    id="star3"
                                                    name="rating"
                                                    defaultValue={3}
                                                />
                                                <label className="full" htmlFor="star3" title="Meh" />
                                                <input
                                                    type="radio"
                                                    id="star2"
                                                    name="rating"
                                                    defaultValue={2}
                                                />
                                                <label className="full" htmlFor="star2" title="Kinda bad" />
                                                <input
                                                    type="radio"
                                                    id="star1"
                                                    name="rating"
                                                    defaultValue={1}
                                                />
                                                <label className="full" htmlFor="star1" title="Very bad" />
                                            </div>
                                            <div className="form-outline shadow-textarea">
                                                <textarea
                                                    className="form-control"
                                                    name="feedback"
                                                    id="feedback"
                                                    placeholder="Give your feedback..."
                                                    rows={4}
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <br />
                                            <input
                                                type="hidden"
                                                defaultValue="${mentorID}"
                                                name="mentorID"
                                            />
                                            <div className="float-end mt-2 pt-1">
                                                <input
                                                    style={{ color: "white", backgroundColor: "#5fcf80" }}
                                                    type="submit"
                                                    defaultValue="Send Feedback"
                                                    className="btn btn-primary btn-block"
                                                />
                                            </div>
                                            <div style={{ color: "#5fcf80" }} className="form-input">
                                                Return to{" "}
                                                <a
                                                    href="mentee"
                                                    style={{ textDecoration: "none", color: "#5fcf80" }}
                                                >
                                                    <strong>Mentee Page</strong>
                                                </a>
                                            </div>
                                            <br />
                                            <h6 className="mb-4" style={{ color: "red" }} />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}


export default Rating;