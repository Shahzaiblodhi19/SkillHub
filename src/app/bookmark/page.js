"use client";
import React, { useState } from 'react'

export default function Bookmark() {
    // Course data
    const courses = [
        {
            title: "Advanced UI/UX Design Masterclass: From Concept to Implementation",
            author: "Sarah Johnson",
            description: "Master the complete UI/UX design workflow from research to final implementation with real-world projects.",
            image: "https://i.ibb.co/jJ4GHXP/img1.jpg",
            type: "course",
            duration: "2.5h",
            level: "Beginner",
            students: "12.5K",
            units: 16,
            rating: 4.9,
            reviews: 454,
            currentPrice: "$89.99",
            originalPrice: "$129.99",
            progress: 65
        },
        {
            title: "Frontend Development: Master React, Redux & Modern Web Development",
            author: "David Chen",
            description: "Learn modern frontend development with React, Redux and the latest web technologies through hands-on projects.",
            image: "https://i.ibb.co/LJwrLdW/coaching-image.webp",
            type: "event",
            duration: "3.5h",
            level: "Advanced",
            students: "8.2K",
            units: 24,
            rating: 4.8,
            reviews: 389,
            currentPrice: "$59.99",
            originalPrice: "$89.99",
            progress: 45
        },
        {
            title: "Full Stack Web Development: Build Modern Web Applications",
            author: "Michael Brown",
            description: "Become a full-stack developer by mastering both frontend and backend technologies with practical projects.",
            image: "https://i.ibb.co/k67BZds/community-image1.png",
            type: "course",
            duration: "4.5h",
            level: "Beginner",
            students: "15.7K",
            units: 32,
            rating: 4.9,
            reviews: 412,
            currentPrice: "$79.99",
            originalPrice: "$129.99",
            progress: 25
        },
        {
            title: "Prompt Engineering Masterclass",
            author: "Michael Brown",
            description: "Become a full-stack developer by mastering both frontend and backend technologies with practical projects.",
            image: "https://i.ibb.co/Csdq4rd/newsletter-image.png",
            type: "event",
            duration: "4.5h",
            level: "Beginner",
            students: "15.7K",
            units: 32,
            rating: 4.9,
            reviews: 412,
            currentPrice: "$79.99",
            originalPrice: "$129.99",
            progress: 25
        }
    ];

    const createCourseCard = (course) => {
        return (
            <div class="course-card">
                <div class="course-header">
                    <div class={`product-label ${course.type}`}>
                        {course.type === 'course' ?
                            <>
                                <svg fill="none" viewBox="0 0 24 24" height="24" width="24">
                                    <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                                <span>Course</span>
                            </>
                            :
                            <>
                                <svg fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                                <span>Event</span>
                            </>
                        }
                    </div>
                    <div class="course-options">⋯</div>
                </div>
                <img src={`${course.image}`} alt={`${course.title}`} class="course-image" />
                <div class="course-content">
                    <h3 class="course-title">{course.title}</h3>
                    <div class="course-author">{course.author}</div>
                    <p class="course-description">{course.description}</p>
                    <div class="course-stats">
                        <div class="stat">
                            <svg fill="none" viewBox="0 0 20 20">
                                <path fill="#6F767E" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                            {course.students}
                            <div class="tooltip">{course.students} students enrolled</div>
                        </div>
                        <div class="stat">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                <path fill="#6F767E" d="M11.0251 3.98957C12.6023 3.33626 14.2928 3 16 3C17.7072 3 19.3977 3.33626 20.9749 3.98957C22.5521 4.64288 23.9852 5.60045 25.1924 6.80761C26.3995 8.01477 27.3571 9.44788 28.0104 11.0251C28.6637 12.6023 29 14.2928 29 16C29 17.7072 28.6637 19.3977 28.0104 20.9749C27.3571 22.5521 26.3995 23.9852 25.1924 25.1924C23.9852 26.3995 22.5521 27.3571 20.9749 28.0104C19.3977 28.6637 17.7072 29 16 29C14.2928 29 12.6023 28.6637 11.0251 28.0104C9.44788 27.3571 8.01477 26.3995 6.80761 25.1924C5.60045 23.9852 4.64288 22.5521 3.98957 20.9749C3.33625 19.3977 3 17.7072 3 16C3 14.2928 3.33625 12.6023 3.98957 11.0251C4.64288 9.44788 5.60045 8.01477 6.80761 6.80761C8.01477 5.60045 9.44788 4.64288 11.0251 3.98957ZM16 5C14.5555 5 13.1251 5.28452 11.7905 5.83733C10.4559 6.39013 9.24327 7.20038 8.22183 8.22183C7.20038 9.24327 6.39013 10.4559 5.83733 11.7905C5.28452 13.1251 5 14.5555 5 16C5 17.4445 5.28452 18.8749 5.83733 20.2095C6.39013 21.5441 7.20038 22.7567 8.22183 23.7782C9.24327 24.7996 10.4559 25.6099 11.7905 26.1627C13.1251 26.7155 14.5555 27 16 27C17.4445 27 18.8749 26.7155 20.2095 26.1627C21.5441 25.6099 22.7567 24.7996 23.7782 23.7782C24.7996 22.7567 25.6099 21.5441 26.1627 20.2095C26.7155 18.8749 27 17.4445 27 16C27 14.5555 26.7155 13.1251 26.1627 11.7905C25.6099 10.4559 24.7996 9.24327 23.7782 8.22183C22.7567 7.20038 21.5441 6.39013 20.2095 5.83733C18.8749 5.28452 17.4445 5 16 5ZM16 8.33333C16.5523 8.33333 17 8.78105 17 9.33333V15.4648L20.5547 17.8346C21.0142 18.141 21.1384 18.7618 20.8321 19.2214C20.5257 19.6809 19.9048 19.8051 19.4453 19.4987L15.4453 16.8321C15.1671 16.6466 15 16.3344 15 16V9.33333C15 8.78105 15.4477 8.33333 16 8.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                            {course.duration}
                            <div class="tooltip">{course.duration} total duration</div>
                        </div>
                        <div class="stat">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M8.00008 6.33331C7.91168 6.33331 7.82689 6.36843 7.76438 6.43094C7.70187 6.49346 7.66675 6.57824 7.66675 6.66665V25.3333C7.66675 25.4217 7.70187 25.5065 7.76438 25.569C7.82689 25.6315 7.91167 25.6666 8.00008 25.6666H11.0001V6.33331H8.00008ZM8.00008 4.33331C7.38124 4.33331 6.78775 4.57915 6.35017 5.01673C5.91258 5.45432 5.66675 6.04781 5.66675 6.66665V25.3333C5.66675 25.9522 5.91258 26.5456 6.35017 26.9832C6.78775 27.4208 7.38124 27.6666 8.00008 27.6666H11.0001V29.3333C11.0001 29.8856 11.4478 30.3333 12.0001 30.3333C12.5524 30.3333 13.0001 29.8856 13.0001 29.3333V27.6666H22.6667C23.6392 27.6666 24.5718 27.2803 25.2595 26.5927C25.9471 25.9051 26.3334 24.9724 26.3334 24V7.99998C26.3334 7.02752 25.9471 6.09489 25.2595 5.40725C24.5718 4.71962 23.6392 4.33331 22.6667 4.33331H8.00008ZM13.0001 6.33331V25.6666H22.6667C23.1088 25.6666 23.5327 25.4911 23.8453 25.1785C24.1578 24.8659 24.3334 24.442 24.3334 24V7.99998C24.3334 7.55795 24.1578 7.13403 23.8453 6.82147C23.5327 6.50891 23.1088 6.33331 22.6667 6.33331H13.0001ZM16.3334 10.6666C16.3334 10.1144 16.7811 9.66665 17.3334 9.66665H20.0001C20.5524 9.66665 21.0001 10.1144 21.0001 10.6666C21.0001 11.2189 20.5524 11.6666 20.0001 11.6666H17.3334C16.7811 11.6666 16.3334 11.2189 16.3334 10.6666ZM16.3334 16C16.3334 15.4477 16.7811 15 17.3334 15H20.0001C20.5524 15 21.0001 15.4477 21.0001 16C21.0001 16.5523 20.5524 17 20.0001 17H17.3334C16.7811 17 16.3334 16.5523 16.3334 16Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                            {course.units}
                            <div class="tooltip">{course.units} learning units</div>
                        </div>
                    </div>
                    <div class="pricing">
                        <span class="current-price">${course.currentPrice}</span>
                        <span class="original-price">${course.originalPrice}</span>
                    </div>
                </div>
                <div class="progress-wrapper">
                    <div class="progress-bar" style={{ width: `${course.progress}%` }}></div>
                    <div class="tooltip">{course.progress}% Complete</div>
                </div>
                <div class="course-footer">
                    <div class="footer-icons">
                        <div class="footer-icon subscription-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path fill="currentColor" d="M17 12.7992V13.5992C17.4418 13.5992 17.8 13.241 17.8 12.7992H17ZM17 8.39922H17.8C17.8 7.95739 17.4418 7.59922 17 7.59922V8.39922ZM4.96739 4.12628C4.59574 4.3652 4.48814 4.86017 4.72706 5.23183C4.96598 5.60348 5.46095 5.71108 5.83261 5.47216L4.96739 4.12628ZM11 1.19922L11.6315 0.708066C11.3773 0.381231 10.9157 0.302372 10.5674 0.526276L11 1.19922ZM13.1685 5.29037C13.4398 5.63913 13.9424 5.70196 14.2912 5.4307C14.6399 5.15945 14.7027 4.65682 14.4315 4.30807L13.1685 5.29037ZM17 11.9992H14.4V13.5992H17V11.9992ZM14.4 9.19922H17V7.59922H14.4V9.19922ZM16.2 8.39922V12.7992H17.8V8.39922H16.2ZM13 10.5992C13 9.82602 13.6268 9.19922 14.4 9.19922V7.59922C12.7431 7.59922 11.4 8.94237 11.4 10.5992H13ZM14.4 11.9992C13.6268 11.9992 13 11.3724 13 10.5992H11.4C11.4 12.2561 12.7431 13.5992 14.4 13.5992V11.9992ZM5.83261 5.47216L11.4326 1.87216L10.5674 0.526276L4.96739 4.12628L5.83261 5.47216ZM10.3685 1.69037L13.1685 5.29037L14.4315 4.30807L11.6315 0.708066L10.3685 1.69037ZM1.8 5.59922H15.4V3.99922H1.8V5.59922ZM15.4 15.9992H1.8V17.5992H15.4V15.9992ZM1.8 15.9992V5.59922H0.2V15.9992H1.8ZM1.8 15.9992H1.8H0.2C0.2 16.8829 0.916343 17.5992 1.8 17.5992V15.9992ZM15.4 15.9992H15.4V17.5992C16.2837 17.5992 17 16.8829 17 15.9992H15.4ZM15.4 5.59922H15.4H17C17 4.71556 16.2837 3.99922 15.4 3.99922V5.59922ZM1.8 3.99922C0.916344 3.99922 0.2 4.71556 0.2 5.59922H1.8H1.8V3.99922ZM15.4 13.3992V15.9992H17V13.3992H15.4ZM15.4 5.59922V7.69922H17V5.59922H15.4Z"></path>
                            </svg>
                        </div>
                        <div class="footer-icon bundle-icon">
                            <svg fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3 1h18a3 3 0 0 1 3 3v8H2v5a1 1 0 0 0 1 1h7v2H3a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3ZM2 4v2h20V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm11.8 10.81a2.7 2.7 0 0 1 4.2.43 2.7 2.7 0 0 1 4.2-.43 2.8 2.8 0 0 1 0 3.92L18 23l-4.2-4.27a2.8 2.8 0 0 1 0-3.92Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="course-level"><svg height="16px" width="16px" viewBox="0 0 32 32"><path fill="currentColor" d="M10.8571 26.2857C10.8571 27.2325 10.0896 28 9.14286 28H5.71429C4.76751 28 4 27.2325 4 26.2857V22C4 21.0532 4.76751 20.2857 5.71429 20.2857H9.14286C10.0896 20.2857 10.8571 21.0532 10.8571 22V26.2857ZM19.4286 26.2857V14.2857C19.4286 13.3389 18.6611 12.5714 17.7143 12.5714H14.2857C13.3389 12.5714 12.5714 13.3389 12.5714 14.2857V26.2857C12.5714 27.2325 13.3389 28 14.2857 28H17.7143C18.6611 28 19.4286 27.2325 19.4286 26.2857ZM21.1429 26.2857C21.1429 27.2325 21.9104 28 22.8571 28H26.2857C27.2325 28 28 27.2325 28 26.2857V5.71429C28 4.76751 27.2325 4 26.2857 4H22.8571C21.9104 4 21.1429 4.76751 21.1429 5.71429V26.2857ZM17.7143 14.2857H14.2857V26.2857H17.7143V14.2857ZM26.2857 5.71429H22.8571V26.2857H26.2857V5.71429Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                        <span class="level-value">{course.level}</span></div>
                    <div class="course-rating">
                        <svg viewBox="0 0 16 15" height="100%" width="100%">
                            <path d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                        <span class="rating-value">{course.rating}</span>
                        <span class="rating-count">({course.reviews})</span>
                    </div>
                </div>
            </div>
        )
    }
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [selectedCounts, setSelectedCounts] = useState({
        product: 0,
        category: 3,
        rating: 0,
        progress: 0,
        topics: 0,
        instructors: 0,
    });

    const toggleDropdown = (e, dropdownName) => {
        e.stopPropagation();
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    const handleCheckboxChange = (dropdownName, isChecked) => {
        setSelectedCounts((prevCounts) => ({
            ...prevCounts,
            [dropdownName]: isChecked ? prevCounts[dropdownName] + 1 : prevCounts[dropdownName] - 1,
        }));
    };

    const isActive = (dropdownName) => activeDropdown === dropdownName;


    return (
        <div class="bookmarks-tab2 bg-white p-4 rounded-lg collections-page" onClick={() => setActiveDropdown(false)}>
            <div className="flex items-center justify-between p-2 mb-4">
                {/* Left Section: Collection Name */}
                <div className="flex items-center space-x-2">
                    {/* Emoji Icon */}
                    <span className="text-2xl">🔖</span>
                    {/* Collection Name */}
                    <h1 className="text-xl font-semibold text-gray-800">Bookmark</h1>
                </div>

                {/* Right Section: Search Bar */}
                <div className="flex items-center bg-gray-100 rounded-lg py-2 pl-4">
                    {/* Search Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11 19a8 8 0 100-16 8 8 0 000 16zm10 10-4.35-4.35"
                        />
                    </svg>
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Search for anything.."
                        className="bg-transparent text-sm text-gray-600 focus:outline-none pr-3 pl-2 w-full"
                    />
                    {/* Submit Button */}
                    <button className="ml-2 text-white px-3 py-2 rounded-lg hover:bg-teal-600" style={{background: '#009ECC'}}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 12h16m-7-7l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="filters-container mb-4">
                <div class="filters-left">
                    <div style={{ position: "relative" }}>
                        <button
                            className={`filter-button ${isActive("product") ? "active" : ""}`}
                            onClick={(e) => toggleDropdown(e, "product")}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h6v6H4z"></path>
                                <path d="M14 4h6v6h-6z"></path>
                                <path d="M4 14h6v6H4z"></path>
                                <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            </svg>
                            Product {selectedCounts.product > 0 && <span class="selected-count">{selectedCounts.product}</span>}
                        </button>
                        {isActive("product") && (
                            <div className="filter-dropdown" onClick={(e) => e.stopPropagation()}>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("product", e.target.checked)}
                                    />
                                    Courses
                                </label>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("product", e.target.checked)}
                                    />
                                    Events
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Category Filter */}
                    <div style={{ position: "relative" }}>
                        <button
                            className={`filter-button ${isActive("category") ? "active" : ""}`}
                            onClick={(e) => toggleDropdown(e, "category")}
                        >
                            <svg className="tabler-icon tabler-icon-category" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="16" width="16">
                                <path d="M4 4h6v6H4z"></path>
                                <path d="M14 4h6v6h-6z"></path>
                                <path d="M4 14h6v6H4z"></path>
                                <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            </svg>
                            Category {selectedCounts.category > 0 && <span class="selected-count">{selectedCounts.category}</span>}
                        </button>
                        {isActive("category") && (
                            <div className="filter-dropdown" onClick={(e) => e.stopPropagation()}>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        checked
                                        onChange={(e) => handleCheckboxChange("category", e.target.checked)}
                                    />
                                    Technology
                                </label>
                                <div className="nested-options">
                                    <label className="filter-option">
                                        <input
                                            type="checkbox"
                                            checked
                                            onChange={(e) => handleCheckboxChange("category", e.target.checked)}
                                        />
                                        Programming
                                    </label>
                                    <label className="filter-option">
                                        <input
                                            type="checkbox"
                                            checked
                                            onChange={(e) => handleCheckboxChange("category", e.target.checked)}
                                        />
                                        AI & ML
                                    </label>
                                </div>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("category", e.target.checked)}
                                    />
                                    Business
                                </label>
                                <div className="nested-options">
                                    <label className="filter-option">
                                        <input
                                            type="checkbox"
                                            onChange={(e) => handleCheckboxChange("category", e.target.checked)}
                                        />
                                        Marketing
                                    </label>
                                    <label className="filter-option">
                                        <input
                                            type="checkbox"
                                            onChange={(e) => handleCheckboxChange("category", e.target.checked)}
                                        />
                                        Finance
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Rating Filter */}
                    <div style={{ position: "relative" }}>
                        <button
                            className={`filter-button ${isActive("rating") ? "active" : ""}`}
                            onClick={(e) => toggleDropdown(e, "rating")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                />
                            </svg>
                            Rating {selectedCounts.rating > 0 && <span class="selected-count">{selectedCounts.rating}</span>}
                        </button>
                        {isActive("rating") && (
                            <div className="filter-dropdown" onClick={(e) => e.stopPropagation()}>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("rating", e.target.checked)}
                                    />
                                    5+ Stars
                                </label>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("rating", e.target.checked)}
                                    />
                                    4+ Stars
                                </label>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("rating", e.target.checked)}
                                    />
                                    3+ Stars
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Progress Filter */}
                    <div style={{ position: "relative" }}>
                        <button
                            className={`filter-button ${isActive("progress") ? "active" : ""}`}
                            onClick={(e) => toggleDropdown(e, "progress")}
                        >
                            <svg fill="none" viewBox="0 0 24 24" height="16" width="16">
                                <path
                                    fill="currentColor"
                                    d="M12.287.05a12 12 0 017.463 3.46l.03-.03a12.02 12.02 0 01-17 17l1.06-1.06A10.5 10.5 0 105.42 3.28l1.14 1.15a.51.51 0 01-.32.8L4 5.75l-2.51.59A.4.4 0 011 5.85l.6-2.51.52-2.24a.51.51 0 01.81-.31l1.42 1.42A12 12 0 0112.287.05zM11.75 8v5.25H17v1.5h-6.75V8h1.5z"
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                />
                            </svg>
                            Progress {selectedCounts.progress > 0 && <span class="selected-count">{selectedCounts.progress}</span>}
                        </button>
                        {isActive("progress") && (
                            <div className="filter-dropdown" onClick={(e) => e.stopPropagation()}>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("progress", e.target.checked)}
                                    />
                                    Started
                                </label>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("progress", e.target.checked)}
                                    />
                                    Not Started
                                </label>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("progress", e.target.checked)}
                                    />
                                    Finished
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Topics Filter */}
                    <div style={{ position: "relative" }}>
                        <button
                            className={`filter-button ${isActive("topics") ? "active" : ""}`}
                            onClick={(e) => toggleDropdown(e, "topics")}
                        >
                            <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="100%" width="100%">
                                <path d="M4 4h6v6H4z"></path>
                                <path d="M14 4h6v6h-6z"></path>
                                <path d="M4 14h6v6H4z"></path>
                                <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            </svg>
                            Topics {selectedCounts.topics > 0 && <span class="selected-count">{selectedCounts.topics}</span>}
                        </button>
                        {isActive("topics") && (
                            <div className="filter-dropdown" onClick={(e) => e.stopPropagation()}>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("topics", e.target.checked)}
                                    />
                                    Learning
                                </label>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("topics", e.target.checked)}
                                    />
                                    Career
                                </label>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("topics", e.target.checked)}
                                    />
                                    Personal
                                </label>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("topics", e.target.checked)}
                                    />
                                    Research
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Instructors Filter */}
                    <div style={{ position: "relative" }}>
                        <button
                            className={`filter-button ${isActive("instructors") ? "active" : ""}`}
                            onClick={(e) => toggleDropdown(e, "instructors")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="20" width="20">
                                <path fill="currentColor" d="M9.46497 2.65469L3.88834 5.94284C3.88112 5.9471 3.87383 5.95125 3.86648 5.95529C3.53431 6.13787 3.33341 6.48044 3.33341 6.8475V12.9174C3.33391 13.1 3.38341 13.2792 3.47675 13.4362C3.57021 13.5935 3.7042 13.7227 3.86471 13.8104C3.88028 13.8189 3.89558 13.8279 3.91059 13.8374L9.51062 17.3799C9.66161 17.4588 9.82953 17.5 10.0001 17.5C10.1706 17.5 10.3385 17.4588 10.4895 17.3799L16.0065 13.89C16.0242 13.8713 16.0454 13.8485 16.0692 13.8223C16.1476 13.7361 16.2503 13.6169 16.351 13.4827C16.4536 13.3459 16.542 13.2096 16.6016 13.0884C16.6598 12.9702 16.666 12.9159 16.6667 12.916C16.6667 12.916 16.6667 12.9168 16.6667 12.9183V6.84316C16.669 6.47367 16.4717 6.13196 16.1507 5.94942L16.1378 5.94193L10.5403 2.62526C10.421 2.55461 10.2347 2.51688 9.98782 2.53681C9.77125 2.55429 9.57557 2.61124 9.46497 2.65469ZM16.5351 14.5417L17.1194 15.1358C17.0772 15.1773 17.0307 15.2142 16.9806 15.2459L11.3556 18.8042C11.341 18.8134 11.3262 18.8222 11.3111 18.8305C10.9094 19.0511 10.4584 19.1667 10.0001 19.1667C9.54173 19.1667 9.0908 19.0511 8.68902 18.8305C8.67394 18.8222 8.65912 18.8134 8.64458 18.8042L3.04 15.2588C2.62874 15.0283 2.2852 14.6935 2.0441 14.2879C1.79804 13.874 1.66772 13.4015 1.66675 12.92L1.66675 12.9183V6.8475C1.66675 5.8708 2.19919 4.97552 3.05167 4.50135L8.66682 1.19049C8.6944 1.17423 8.72289 1.15957 8.75216 1.14659C9.01002 1.03219 9.40947 0.911399 9.85374 0.875543C10.2945 0.839973 10.8669 0.881526 11.3899 1.1914L16.8757 4.44191C16.981 4.48034 17.0764 4.53941 17.157 4.61423C17.8934 5.11464 18.3381 5.95164 18.3334 6.85072V12.9183C18.3334 13.2699 18.2128 13.5891 18.097 13.8244C17.9757 14.0708 17.8228 14.2982 17.6842 14.4829C17.5436 14.6702 17.4051 14.8305 17.3025 14.9434C17.2508 15.0003 17.2071 15.0463 17.1754 15.079C17.1701 15.0846 17.1651 15.0897 17.1604 15.0945C17.1512 15.1039 17.1435 15.1118 17.1372 15.1181L17.1256 15.1297L17.1218 15.1334L17.1204 15.1348L17.1194 15.1358C17.1193 15.1359 17.1194 15.1358 16.5351 14.5417Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                <path fill="currentColor" d="M7.64306 5.97631C8.26818 5.35119 9.11603 5 10.0001 5C10.8841 5 11.732 5.35119 12.3571 5.97631C12.9822 6.60143 13.3334 7.44928 13.3334 8.33333C13.3334 9.21739 12.9822 10.0652 12.3571 10.6904C11.732 11.3155 10.8841 11.6667 10.0001 11.6667C9.11603 11.6667 8.26818 11.3155 7.64306 10.6904C7.01794 10.0652 6.66675 9.21739 6.66675 8.33333C6.66675 7.44928 7.01794 6.60143 7.64306 5.97631ZM10.0001 6.66667C9.55805 6.66667 9.13413 6.84226 8.82157 7.15482C8.50901 7.46738 8.33341 7.89131 8.33341 8.33333C8.33341 8.77536 8.50901 9.19929 8.82157 9.51185C9.13413 9.82441 9.55805 10 10.0001 10C10.4421 10 10.866 9.82441 11.1786 9.51185C11.4912 9.19929 11.6667 8.77536 11.6667 8.33333C11.6667 7.89131 11.4912 7.46738 11.1786 7.15482C10.866 6.84226 10.4421 6.66667 10.0001 6.66667Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                <path fill="currentColor" d="M6.9273 14.5988L5.60407 15.9908C5.28698 16.3244 4.75951 16.3377 4.42594 16.0207C4.09237 15.7036 4.079 15.1761 4.39609 14.8425L5.77651 13.3904C5.81197 13.353 5.85082 13.3191 5.89255 13.289C6.60295 12.7758 7.45703 12.4998 8.33335 12.5M6.9273 14.5988C7.3415 14.3174 7.83122 14.1665 8.33308 14.1667L11.6667 14.1667C12.1682 14.1665 12.6578 14.3172 13.0718 14.5982L14.3962 15.9909C14.7133 16.3244 15.2408 16.3377 15.5743 16.0206C15.9078 15.7034 15.9211 15.1759 15.604 14.8424L14.2224 13.3895C14.1868 13.3521 14.1479 13.3182 14.1061 13.288C13.396 12.7755 12.5424 12.4998 11.6667 12.5C11.6666 12.5 11.6668 12.5 11.6667 12.5H8.33335" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                            Instructors {selectedCounts.instructors > 0 && <span class="selected-count">{selectedCounts.instructors}</span>}
                        </button>
                        {isActive("instructors") && (
                            <div className="filter-dropdown" onClick={(e) => e.stopPropagation()}>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("instructors", e.target.checked)}
                                    />
                                    Bo Andersen
                                </label>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("instructors", e.target.checked)}
                                    />
                                    Catalin Baba
                                </label>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("instructors", e.target.checked)}
                                    />
                                    David Bombal
                                </label>
                                <label className="filter-option">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange("instructors", e.target.checked)}
                                    />
                                    Imran Afzal
                                </label>
                            </div>
                        )}
                    </div>

                </div>
                <div class="controls-right">
                    <div style={{ position: "relative" }}>
                        <button
                            className={`sort-button ${isActive("sort") ? "active" : ""}`}
                            onClick={(e) => toggleDropdown(e, "sort")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                                />
                            </svg>
                            Sort By
                        </button>
                        {isActive("sort") && (
                            <div className="sort-dropdown" onClick={(e) => e.stopPropagation()}>
                                <label className="sort-option">
                                    <input
                                        type="radio"
                                        name="sort"
                                    />
                                    Recently Accessed
                                </label>
                                <label className="sort-option">
                                    <input
                                        type="radio"
                                        name="sort"
                                    />
                                    Recently Enrolled
                                </label>
                                <label className="sort-option">
                                    <input
                                        type="radio"
                                        name="sort"
                                    />
                                    Title: A-Z
                                </label>
                                <label className="sort-option">
                                    <input
                                        type="radio"
                                        name="sort"
                                    />
                                    Title: Z-A
                                </label>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <div class="courses-grid">
                {courses.map((course) => createCourseCard(course))}
            </div>
        </div >
    )
}
