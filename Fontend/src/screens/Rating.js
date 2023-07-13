import React, { useState } from 'react'
import '../styles/home.css'
import '../styles/star.css'

import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';



const Rating = () => {
    const { id, mentorId } = useParams()
    console.log(mentorId)
    const navigate = useNavigate()
    const [token] = useState(sessionStorage.getItem("token"));
    const [comment, setComment] = useState("");
    const [star, setStar] = useState("");
    



    const handleSubmit = (event) => {
        event.preventDefault();

        if (comment.length === 0) {
            alert("Please enter your feedback");
        } else if (star === "") {
            alert("Please select a star rating");
        } else {
            const rating = {
                comment,
                star,
                menteeID:id,
                mentorID:mentorId,
                
            };

            console.log(rating);

            fetch('http://localhost:8080/api/rating', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(rating),
            })
                .then(() => {
                    toast.success("Add success.");
                    navigate("/requestuser/" + id);
                })
                .catch((error) => {
                    console.log(error);
                    toast.error("An error occurred. Please try again.");
                });
        }
    };
    return (
        <div className="container d-flex justify-content-center mt-5" >
            <div className="card text-center mb-5" style={{ width: "70vh" }}>
                <h6>Send Feedback</h6>
                <form onSubmit={handleSubmit}>
                    <div className="form-outline shadow-textarea">
                        <textarea
                            className="form-control"
                            name="feedback"
                            id="feedback"
                            placeholder="Give your feedback..."
                            rows={4}
                            defaultValue={""}
                            value={comment}
                            onChange={(event) => setComment(event.target.value)}
                        />
                    </div>


                    <div className="rate bg-success py-3 text-white mt-3">



                        <h6 className="mb-0">Give Star Mentor</h6>
                        <div className="rating">
                            {" "}
                            <input type="radio" name="rating"
                                value={5}
                                id={5}
                                onChange={(event) => setStar(event.target.value)} />
                            <label htmlFor={5}>☆</label>{" "}
                            <input type="radio" name="rating"
                                value={4}
                                id={4}
                                onChange={(event) => setStar(event.target.value)} />
                            <label htmlFor={4}>☆</label>{" "}
                            <input type="radio" name="rating" value={3}
                                id={3}
                                onChange={(event) => setStar(event.target.value)} />
                            <label htmlFor={3}>☆</label>{" "}
                            <input type="radio" name="rating" value={2}
                                id={2}
                                onChange={(event) => setStar(event.target.value)} />
                            <label htmlFor={2}>☆</label>{" "}
                            <input type="radio" name="rating" value={1}
                                id={1}
                                onChange={(event) => setStar(event.target.value)} />
                            <label htmlFor={1}>☆</label>
                        </div>
                        <div>
                            <button className="btn btn-warning" >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>





    );
}


export default Rating;