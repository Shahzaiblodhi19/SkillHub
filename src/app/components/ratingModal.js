"use client";
import React, { useContext, useState } from "react";
import Logo from '../assets/logo.svg';
import Image from "next/image";
import { MyContext } from "../layout";


export default function RatingModal() {
    const context = useContext(MyContext);

    const toggleModal2 = () => context.setIsRatingModal(!context.IsRatingModal);
    const [activeStars, setActiveStars] = useState(0);
    const [comment, setComment] = useState('');
    const maxChars = 2000;

    const handleStarClick = (index) => {
        setActiveStars(index + 1);
    };

    const handleCommentChange = (e) => {
        const value = e.target.value;
        if (value.length <= maxChars) {
            setComment(value);
        }
    };

    return (
        <>
            {/* Modal */}
            {context.IsRatingModal && (
                <div className="modal-overlay">
                    <div className="modal-container ratingmodal text-start p-2" style={{ height: 'calc(100vh - 80px)', width: '500px' }}>
                        <div className="d-flex align-items-center justify-content-between px-3 pt-2">
                            <h2 className="modal-title">Review this Item</h2>
                            <button className="close-btn" onClick={toggleModal2}>
                                ✖
                            </button>
                        </div>
                        <div className="modal-content">
                            <div className="book-info">
                                <img src="https://i.ibb.co/jJ4GHXP/img1.jpg" alt="Book Cover" className="book-image" />
                                <div className="book-details">
                                    <div className="book-title">The Art of Reading Minds</div>
                                    <div className="book-author"><span className="author-prefix">By </span><span className="author-name">Ray Dalio</span></div>
                                </div>
                            </div>

                            <div className="info-box">
                                To help us improve this item, please leave a reason and a comment for your rating
                            </div>

                            <div className="rating-section">
                                <label className="rating-label">
                                    Your rating<span className="required">*</span>
                                </label>
                                <div className="stars">
                                    {[...Array(5)].map((_, index) => (
                                        <span
                                            key={index}
                                            className={`star ${index < activeStars ? 'active' : ''}`}
                                            onClick={() => handleStarClick(index)}
                                            style={{
                                                cursor: 'pointer',
                                                color: index < activeStars ? '#FFD700' : '#CCCCCC',
                                                fontSize: '24px',
                                            }}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="dropdown-section">
                                <label className="dropdown-label">Main reason for your rating<span className="required">*</span></label>
                                <select className="dropdown school-inputs">
                                    <option value="">-- Select --</option>
                                    <option value="1">Valuable Information</option>
                                    <option value="2">Concept Clarity</option>
                                    <option value="3">Engaging Delivery</option>
                                    <option value="3">Applied Learning</option>
                                    <option value="3">Meets Expectations</option>
                                    <option value="3">Instructor Knowledge</option>
                                </select>
                            </div>

                            <div className="comments-section">
                                <div className="comments-header">
                                    <label className="comments-label">
                                        <span className="comments-text">Comments</span>
                                        <span className="optional-text"> (optional)</span>
                                    </label>
                                    <span className="char-counter">{maxChars - comment.length}</span>
                                </div>
                                <textarea
                                    className="comments-input school-inputs"
                                    placeholder="Please describe the reason for your rating.."
                                    value={comment}
                                    onChange={handleCommentChange}
                                    maxLength={maxChars}
                                    style={{
                                        width: '100%',
                                        height: '100px',
                                        marginTop: '10px',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        padding: '10px',
                                        fontSize: '16px',
                                    }}
                                ></textarea>
                            </div>

                            <div className="visibility-note">
                                Your rating and comments will be <strong>publicly visible</strong>.
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-cancel">Cancel</button>
                            <button className="btn btn-submit">Submit Review</button>
                        </div>
                    </div>
                </div >
            )
            }
        </>
    );
}
