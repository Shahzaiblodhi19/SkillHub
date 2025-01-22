"use client";
import React, { useEffect, useState } from 'react'

export default function Search() {
    const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown
    const [selectedCounts, setSelectedCounts] = useState({}); // Track checkbox counts
    const [isOpen, setIsSidePanelOpen] = useState(false); // Track side panel state

    useEffect(() => {
        // Close dropdowns when clicking outside
        const handleOutsideClick = (e) => {
            if (
                !e.target.closest(".filter-button, .filter-dropdown, .sort-button, .sort-dropdown")
            ) {
                setActiveDropdown(null);
            }
        };

        // Handle ESC key to close the side panel
        const handleEscapeKey = (e) => {
            if (e.key === "Escape") {
                closePanel();
            }
        };

        document.addEventListener("click", handleOutsideClick);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, []);

    const toggleDropdown = (name) => {
        setActiveDropdown((prev) => (prev === name ? null : name));
    };

    const handleCheckboxChange = (filterName, isChecked) => {
        setSelectedCounts((prev) => ({
            ...prev,
            [filterName]: isChecked
                ? (prev[filterName] || 0) + 1
                : Math.max((prev[filterName] || 1) - 1, 0),
        }));
    };

    const openPanel = () => {
        setIsSidePanelOpen(true);
        document.body.style.overflow = "hidden"; // Prevent scrolling
    };

    const closePanel = () => {
        setIsSidePanelOpen(false);
        document.body.style.overflow = ""; // Restore scrolling
    };
    const [selectedSort, setSelectedSort] = useState('')
    const handleSortChange = (value) => {
        setSelectedSort(value);
        toggleDropdown(null); // Close the dropdown after selection
    };
    const courses = [
        {
            title: "The 7 Habits of Highly Effective People",
            author: "Stephen Covey",
            image: "https://i.ibb.co/640kJN2/c1.jpg",
            type: "course",
            students: "35K",
            duration: "1.5h",
            units: 16,
            level: "Beginner",
            currentPrice: "$14.99",
            originalPrice: "$89.99",
            rating: 4.8,
            reviews: 2300,
            points: [
                "Master proven strategies for personal effectiveness through hands-on exercises and practical applications in daily scenarios",
                "Develop proactive mindset and build sustainable habits with scientifically-backed techniques and structured approach",
                "Transform your approach to life and work using paradigm-shifting principles and systematic methodology"
            ]
        },
        {
            title: "How to Win Friends and Influence People",
            author: "Dale Carnegie",
            image: "https://i.ibb.co/jJ4GHXP/img1.jpg",
            type: "course",
            students: "28K",
            duration: "2.5h",
            units: 12,
            level: "Advanced",
            currentPrice: "$19.99",
            originalPrice: "$99.99",
            rating: 4.9,
            reviews: 1900,
            points: [
                "Master the art of communication through practical exercises and real-world scenarios",
                "Build lasting relationships using proven psychological principles and engagement techniques",
                "Enhance leadership capabilities with time-tested methods for influence and persuasion"
            ]
        },
        {
            title: "Think and Grow Rich",
            author: "Napoleon Hill",
            image: "https://i.ibb.co/hBpWGQ7/c3.jpg",
            type: "course",
            students: "42K",
            duration: "3.5h",
            units: 20,
            level: "Intermediate",
            currentPrice: "$24.99",
            originalPrice: "$129.99",
            rating: 4.7,
            reviews: 2800,
            points: [
                "Master the foundational principles of wealth creation and financial success",
                "Develop the mindset and habits of successful entrepreneurs and business leaders",
                "Apply proven strategies for goal achievement and personal transformation"
            ]
        },
        {
            title: "Advanced UI/UX Design Masterclass",
            author: "Sarah Johnson",
            image: "https://i.ibb.co/jJ4GHXP/img1.jpg",
            type: "course",
            students: "15K",
            duration: "4.5h",
            units: 24,
            level: "All",
            currentPrice: "$29.99",
            originalPrice: "$149.99",
            rating: 4.9,
            reviews: 1500,
            points: [
                "Master modern design principles and create stunning user interfaces",
                "Learn advanced UX research methods and user-centered design approaches",
                "Build professional design systems and scalable interface components"
            ]
        },
        {
            title: "The 7 Habits of Highly Effective People",
            author: "Stephen Covey",
            image: "https://i.ibb.co/640kJN2/c1.jpg",
            type: "course",
            students: "35K",
            duration: "1.5h",
            units: 16,
            level: "Beginner",
            currentPrice: "$14.99",
            originalPrice: "$89.99",
            rating: 4.8,
            reviews: 2300,
            points: [
                "Master proven strategies for personal effectiveness through hands-on exercises and practical applications in daily scenarios",
                "Develop proactive mindset and build sustainable habits with scientifically-backed techniques and structured approach",
                "Transform your approach to life and work using paradigm-shifting principles and systematic methodology"
            ]
        },
        {
            title: "How to Win Friends and Influence People",
            author: "Dale Carnegie",
            image: "https://i.ibb.co/jJ4GHXP/img1.jpg",
            type: "course",
            students: "28K",
            duration: "2.5h",
            units: 12,
            level: "Advanced",
            currentPrice: "$19.99",
            originalPrice: "$99.99",
            rating: 4.9,
            reviews: 1900,
            points: [
                "Master the art of communication through practical exercises and real-world scenarios",
                "Build lasting relationships using proven psychological principles and engagement techniques",
                "Enhance leadership capabilities with time-tested methods for influence and persuasion"
            ]
        },
        {
            title: "Think and Grow Rich",
            author: "Napoleon Hill",
            image: "https://i.ibb.co/hBpWGQ7/c3.jpg",
            type: "course",
            students: "42K",
            duration: "3.5h",
            units: 20,
            level: "Intermediate",
            currentPrice: "$24.99",
            originalPrice: "$129.99",
            rating: 4.7,
            reviews: 2800,
            points: [
                "Master the foundational principles of wealth creation and financial success",
                "Develop the mindset and habits of successful entrepreneurs and business leaders",
                "Apply proven strategies for goal achievement and personal transformation"
            ]
        },
        {
            title: "Advanced UI/UX Design Masterclass",
            author: "Sarah Johnson",
            image: "https://i.ibb.co/jJ4GHXP/img1.jpg",
            type: "course",
            students: "15K",
            duration: "4.5h",
            units: 24,
            level: "All",
            currentPrice: "$29.99",
            originalPrice: "$149.99",
            rating: 4.9,
            reviews: 1500,
            points: [
                "Master modern design principles and create stunning user interfaces",
                "Learn advanced UX research methods and user-centered design approaches",
                "Build professional design systems and scalable interface components"
            ]
        }
    ];
    const [query, setQuery] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setQuery(urlParams.get('query') || '');
    }, []);
    // Reusable CourseCard Component
    const CourseCard = ({ course }) => {
        return (
            <div class="course-card">
                <div class="course-header">
                    <div class={`product-label ${course.type}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                            <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                        <span>{course.type.charAt(0).toUpperCase() + course.type.slice(1)}</span>
                    </div>
                    <div class="course-options">⋯</div>
                </div>

                <div class="card-main-content">
                    <img src={`${course.image}`} alt={`${course.title}`} class="course-image" />
                    <div class="course-content">
                        <h3 class="course-title">{course.title}</h3>
                        <div class="course-author">{course.author}</div>
                        <div class="course-stats">
                            <div class="stat">
                                <svg fill="none" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                                35K
                            </div>
                            <div class="stat">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                    <path fill="currentColor" d="M11.0251 3.98957C12.6023 3.33626 14.2928 3 16 3C17.7072 3 19.3977 3.33626 20.9749 3.98957C22.5521 4.64288 23.9852 5.60045 25.1924 6.80761C26.3995 8.01477 27.3571 9.44788 28.0104 11.0251C28.6637 12.6023 29 14.2928 29 16C29 17.7072 28.6637 19.3977 28.0104 20.9749C27.3571 22.5521 26.3995 23.9852 25.1924 25.1924C23.9852 26.3995 22.5521 27.3571 20.9749 28.0104C19.3977 28.6637 17.7072 29 16 29C14.2928 29 12.6023 28.6637 11.0251 28.0104C9.44788 27.3571 8.01477 26.3995 6.80761 25.1924C5.60045 23.9852 4.64288 22.5521 3.98957 20.9749C3.33625 19.3977 3 17.7072 3 16C3 14.2928 3.33625 12.6023 3.98957 11.0251C4.64288 9.44788 5.60045 8.01477 6.80761 6.80761C8.01477 5.60045 9.44788 4.64288 11.0251 3.98957ZM16 5C14.5555 5 13.1251 5.28452 11.7905 5.83733C10.4559 6.39013 9.24327 7.20038 8.22183 8.22183C7.20038 9.24327 6.39013 10.4559 5.83733 11.7905C5.28452 13.1251 5 14.5555 5 16C5 17.4445 5.28452 18.8749 5.83733 20.2095C6.39013 21.5441 7.20038 22.7567 8.22183 23.7782C9.24327 24.7996 10.4559 25.6099 11.7905 26.1627C13.1251 26.7155 14.5555 27 16 27C17.4445 27 18.8749 26.7155 20.2095 26.1627C21.5441 25.6099 22.7567 24.7996 23.7782 23.7782C24.7996 22.7567 25.6099 21.5441 26.1627 20.2095C26.7155 18.8749 27 17.4445 27 16C27 14.5555 26.7155 13.1251 26.1627 11.7905C25.6099 10.4559 24.7996 9.24327 23.7782 8.22183C22.7567 7.20038 21.5441 6.39013 20.2095 5.83733C18.8749 5.28452 17.4445 5 16 5ZM16 8.33333C16.5523 8.33333 17 8.78105 17 9.33333V15.4648L20.5547 17.8346C21.0142 18.141 21.1384 18.7618 20.8321 19.2214C20.5257 19.6809 19.9048 19.8051 19.4453 19.4987L15.4453 16.8321C15.1671 16.6466 15 16.3344 15 16V9.33333C15 8.78105 15.4477 8.33333 16 8.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>


                                {course.duration}
                            </div>
                            <div class="stat">
                                <svg viewBox="0 0 32 32"><path fill="currentColor" d="M10.8571 26.2857C10.8571 27.2325 10.0896 28 9.14286 28H5.71429C4.76751 28 4 27.2325 4 26.2857V22C4 21.0532 4.76751 20.2857 5.71429 20.2857H9.14286C10.0896 20.2857 10.8571 21.0532 10.8571 22V26.2857ZM19.4286 26.2857V14.2857C19.4286 13.3389 18.6611 12.5714 17.7143 12.5714H14.2857C13.3389 12.5714 12.5714 13.3389 12.5714 14.2857V26.2857C12.5714 27.2325 13.3389 28 14.2857 28H17.7143C18.6611 28 19.4286 27.2325 19.4286 26.2857ZM21.1429 26.2857C21.1429 27.2325 21.9104 28 22.8571 28H26.2857C27.2325 28 28 27.2325 28 26.2857V5.71429C28 4.76751 27.2325 4 26.2857 4H22.8571C21.9104 4 21.1429 4.76751 21.1429 5.71429V26.2857ZM17.7143 14.2857H14.2857V26.2857H17.7143V14.2857ZM26.2857 5.71429H22.8571V26.2857H26.2857V5.71429Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                                {course.level}
                            </div>
                        </div>
                        <div class="pricing">
                            <span class="current-price">{course.currentPrice}</span>
                            <span class="original-price">{course.originalPrice}</span>
                        </div>
                    </div>

                    <div class="hover-overlay">
                        <h3 class="hover-title">{course.title}</h3>
                        <div class="hover-stats">
                            <div class="hover-stat">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                    <path fill="currentColor" d="M8.00008 6.33331C7.91168 6.33331 7.82689 6.36843 7.76438 6.43094C7.70187 6.49346 7.66675 6.57824 7.66675 6.66665V25.3333C7.66675 25.4217 7.70187 25.5065 7.76438 25.569C7.82689 25.6315 7.91167 25.6666 8.00008 25.6666H11.0001V6.33331H8.00008ZM8.00008 4.33331C7.38124 4.33331 6.78775 4.57915 6.35017 5.01673C5.91258 5.45432 5.66675 6.04781 5.66675 6.66665V25.3333C5.66675 25.9522 5.91258 26.5456 6.35017 26.9832C6.78775 27.4208 7.38124 27.6666 8.00008 27.6666H11.0001V29.3333C11.0001 29.8856 11.4478 30.3333 12.0001 30.3333C12.5524 30.3333 13.0001 29.8856 13.0001 29.3333V27.6666H22.6667C23.6392 27.6666 24.5718 27.2803 25.2595 26.5927C25.9471 25.9051 26.3334 24.9724 26.3334 24V7.99998C26.3334 7.02752 25.9471 6.09489 25.2595 5.40725C24.5718 4.71962 23.6392 4.33331 22.6667 4.33331H8.00008ZM13.0001 6.33331V25.6666H22.6667C23.1088 25.6666 23.5327 25.4911 23.8453 25.1785C24.1578 24.8659 24.3334 24.442 24.3334 24V7.99998C24.3334 7.55795 24.1578 7.13403 23.8453 6.82147C23.5327 6.50891 23.1088 6.33331 22.6667 6.33331H13.0001ZM16.3334 10.6666C16.3334 10.1144 16.7811 9.66665 17.3334 9.66665H20.0001C20.5524 9.66665 21.0001 10.1144 21.0001 10.6666C21.0001 11.2189 20.5524 11.6666 20.0001 11.6666H17.3334C16.7811 11.6666 16.3334 11.2189 16.3334 10.6666ZM16.3334 16C16.3334 15.4477 16.7811 15 17.3334 15H20.0001C20.5524 15 21.0001 15.4477 21.0001 16C21.0001 16.5523 20.5524 17 20.0001 17H17.3334C16.7811 17 16.3334 16.5523 16.3334 16Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                                <span>{course.units}</span>
                                <div class="hover-stat-tooltip">{course.units} Learning Units</div>
                            </div>
                            <div class="hover-stat">
                                <svg fill="none" viewBox="0 0 32 32">
                                    <path fill="currentColor" d="M6.66667 7.66406C5.75228 7.66406 5 8.41635 5 9.33073V22.6641C5 23.1061 5.17559 23.53 5.48816 23.8426C5.80072 24.1551 6.22464 24.3307 6.66667 24.3307H13.3333C13.8856 24.3307 14.3333 24.7784 14.3333 25.3307C14.3333 25.883 13.8856 26.3307 13.3333 26.3307H6.66667C5.69421 26.3307 4.76157 25.9444 4.07394 25.2568C3.38631 24.5692 3 23.6365 3 22.6641V9.33073C3 7.31178 4.64772 5.66406 6.66667 5.66406H25.3333C26.3058 5.66406 27.2384 6.05037 27.9261 6.738C28.6137 7.42564 29 8.35827 29 9.33073V22.6651C28.9993 23.3081 28.8296 23.9396 28.5078 24.4963C28.186 25.053 27.7235 25.5153 27.1667 25.8368C26.6884 26.1129 26.0768 25.949 25.8006 25.4707C25.5245 24.9924 25.6884 24.3808 26.1667 24.1047C26.4198 23.9586 26.63 23.7484 26.7763 23.4954C26.9226 23.2424 26.9997 22.9553 27 22.663V9.33073C27 8.8887 26.8244 8.46478 26.5118 8.15222C26.1993 7.83966 25.7754 7.66406 25.3333 7.66406H6.66667ZM7 11.9974C7 11.4451 7.44772 10.9974 8 10.9974H24C24.5523 10.9974 25 11.4451 25 11.9974C25 12.5497 24.5523 12.9974 24 12.9974H8C7.44772 12.9974 7 12.5497 7 11.9974ZM7 15.9974C7 15.4451 7.44772 14.9974 8 14.9974H12C12.5523 14.9974 13 15.4451 13 15.9974C13 16.5497 12.5523 16.9974 12 16.9974H8C7.44772 16.9974 7 16.5497 7 15.9974ZM20 16.9974C18.3431 16.9974 17 18.3405 17 19.9974C17 21.6543 18.3431 22.9974 20 22.9974C21.6569 22.9974 23 21.6543 23 19.9974C23 18.3405 21.6569 16.9974 20 16.9974ZM15 19.9974C15 17.236 17.2386 14.9974 20 14.9974C22.7614 14.9974 25 17.236 25 19.9974C25 21.3101 24.4941 22.5047 23.6667 23.3968V29.3307C23.6667 29.7095 23.4527 30.0558 23.1139 30.2252C22.7751 30.3946 22.3697 30.358 22.0667 30.1307L20 28.5807L17.9333 30.1307C17.6303 30.358 17.2249 30.3946 16.8861 30.2252C16.5473 30.0558 16.3333 29.7095 16.3333 29.3307V23.3968C15.5059 22.5047 15 21.3101 15 19.9974ZM18.3333 24.7129V27.3307L19.4 26.5307C19.7556 26.2641 20.2444 26.2641 20.6 26.5307L21.6667 27.3307V24.7129C21.1454 24.8971 20.5844 24.9974 20 24.9974C19.4156 24.9974 18.8546 24.8971 18.3333 24.7129ZM7 19.9974C7 19.4451 7.44772 18.9974 8 18.9974H10.6667C11.219 18.9974 11.6667 19.4451 11.6667 19.9974C11.6667 20.5497 11.219 20.9974 10.6667 20.9974H8C7.44772 20.9974 7 20.5497 7 19.9974Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                                <span>Certificate</span>
                            </div>
                        </div>
                        <div class="hover-author">by {course.author}</div>
                        <div class="hover-divider"></div>
                        <div class="hover-learning-header">What you'll learn</div>
                        <div class="hover-points">
                            {course.points.map(point =>
                                <div class="hover-point">
                                    <svg viewBox="0 0 20 20"><path fill-rule="evenodd" fill="currentColor" d="M5.9 8.1L4.5 9.5 9 14 19 4l-1.4-1.4L9 11.2 5.9 8.1zM18 10c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.8 0 1.5.1 2.2.3L13.8.7C12.6.3 11.3 0 10 0 4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10h-2z"></path></svg>
                                    <div class="hover-point-text">{point}</div> {/* or any other relevant property */}
                                    <div class="hover-point-tooltip">{point}</div> {/* or any other relevant property */}
                                </div>
                            )}
                        </div>

                        <div class="hover-buttons">
                            <div class="hover-button button-info">More Info</div>
                            <div class="hover-button button-buy">Buy Now</div>
                        </div>
                    </div>
                </div>

                <div class="course-footer">
                    <div class="footer-icons">
                        <div class="footer-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path fill="currentColor" d="M17 12.7992V13.5992C17.4418 13.5992 17.8 13.241 17.8 12.7992H17ZM17 8.39922H17.8C17.8 7.95739 17.4418 7.59922 17 7.59922V8.39922ZM4.96739 4.12628C4.59574 4.3652 4.48814 4.86017 4.72706 5.23183C4.96598 5.60348 5.46095 5.71108 5.83261 5.47216L4.96739 4.12628ZM11 1.19922L11.6315 0.708066C11.3773 0.381231 10.9157 0.302372 10.5674 0.526276L11 1.19922ZM13.1685 5.29037C13.4398 5.63913 13.9424 5.70196 14.2912 5.4307C14.6399 5.15945 14.7027 4.65682 14.4315 4.30807L13.1685 5.29037ZM17 11.9992H14.4V13.5992H17V11.9992ZM14.4 9.19922H17V7.59922H14.4V9.19922ZM16.2 8.39922V12.7992H17.8V8.39922H16.2ZM13 10.5992C13 9.82602 13.6268 9.19922 14.4 9.19922V7.59922C12.7431 7.59922 11.4 8.94237 11.4 10.5992H13ZM14.4 11.9992C13.6268 11.9992 13 11.3724 13 10.5992H11.4C11.4 12.2561 12.7431 13.5992 14.4 13.5992V11.9992ZM5.83261 5.47216L11.4326 1.87216L10.5674 0.526276L4.96739 4.12628L5.83261 5.47216ZM10.3685 1.69037L13.1685 5.29037L14.4315 4.30807L11.6315 0.708066L10.3685 1.69037ZM1.8 5.59922H15.4V3.99922H1.8V5.59922ZM15.4 15.9992H1.8V17.5992H15.4V15.9992ZM1.8 15.9992V5.59922H0.2V15.9992H1.8ZM1.8 15.9992H1.8H0.2C0.2 16.8829 0.916343 17.5992 1.8 17.5992V15.9992ZM15.4 15.9992H15.4V17.5992C16.2837 17.5992 17 16.8829 17 15.9992H15.4ZM15.4 5.59922H15.4H17C17 4.71556 16.2837 3.99922 15.4 3.99922V5.59922ZM1.8 3.99922C0.916344 3.99922 0.2 4.71556 0.2 5.59922H1.8H1.8V3.99922ZM15.4 13.3992V15.9992H17V13.3992H15.4ZM15.4 5.59922V7.69922H17V5.59922H15.4Z"></path>
                            </svg>
                        </div>
                        <div class="footer-icon">
                            <svg fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M3 1h18a3 3 0 0 1 3 3v8H2v5a1 1 0 0 0 1 1h7v2H3a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3ZM2 4v2h20V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm11.8 10.81a2.7 2.7 0 0 1 4.2.43 2.7 2.7 0 0 1 4.2-.43 2.8 2.8 0 0 1 0 3.92L18 23l-4.2-4.27a2.8 2.8 0 0 1 0-3.92Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                        </div>
                    </div>
                    <div class="certificate-info">
                        <svg fill="none" viewBox="0 0 32 32">
                            <path fill="currentColor" d="M6.66667 7.66406C5.75228 7.66406 5 8.41635 5 9.33073V22.6641C5 23.1061 5.17559 23.53 5.48816 23.8426C5.80072 24.1551 6.22464 24.3307 6.66667 24.3307H13.3333C13.8856 24.3307 14.3333 24.7784 14.3333 25.3307C14.3333 25.883 13.8856 26.3307 13.3333 26.3307H6.66667C5.69421 26.3307 4.76157 25.9444 4.07394 25.2568C3.38631 24.5692 3 23.6365 3 22.6641V9.33073C3 7.31178 4.64772 5.66406 6.66667 5.66406H25.3333C26.3058 5.66406 27.2384 6.05037 27.9261 6.738C28.6137 7.42564 29 8.35827 29 9.33073V22.6651C28.9993 23.3081 28.8296 23.9396 28.5078 24.4963C28.186 25.053 27.7235 25.5153 27.1667 25.8368C26.6884 26.1129 26.0768 25.949 25.8006 25.4707C25.5245 24.9924 25.6884 24.3808 26.1667 24.1047C26.4198 23.9586 26.63 23.7484 26.7763 23.4954C26.9226 23.2424 26.9997 22.9553 27 22.663V9.33073C27 8.8887 26.8244 8.46478 26.5118 8.15222C26.1993 7.83966 25.7754 7.66406 25.3333 7.66406H6.66667ZM7 11.9974C7 11.4451 7.44772 10.9974 8 10.9974H24C24.5523 10.9974 25 11.4451 25 11.9974C25 12.5497 24.5523 12.9974 24 12.9974H8C7.44772 12.9974 7 12.5497 7 11.9974ZM7 15.9974C7 15.4451 7.44772 14.9974 8 14.9974H12C12.5523 14.9974 13 15.4451 13 15.9974C13 16.5497 12.5523 16.9974 12 16.9974H8C7.44772 16.9974 7 16.5497 7 15.9974ZM20 16.9974C18.3431 16.9974 17 18.3405 17 19.9974C17 21.6543 18.3431 22.9974 20 22.9974C21.6569 22.9974 23 21.6543 23 19.9974C23 18.3405 21.6569 16.9974 20 16.9974ZM15 19.9974C15 17.236 17.2386 14.9974 20 14.9974C22.7614 14.9974 25 17.236 25 19.9974C25 21.3101 24.4941 22.5047 23.6667 23.3968V29.3307C23.6667 29.7095 23.4527 30.0558 23.1139 30.2252C22.7751 30.3946 22.3697 30.358 22.0667 30.1307L20 28.5807L17.9333 30.1307C17.6303 30.358 17.2249 30.3946 16.8861 30.2252C16.5473 30.0558 16.3333 29.7095 16.3333 29.3307V23.3968C15.5059 22.5047 15 21.3101 15 19.9974ZM18.3333 24.7129V27.3307L19.4 26.5307C19.7556 26.2641 20.2444 26.2641 20.6 26.5307L21.6667 27.3307V24.7129C21.1454 24.8971 20.5844 24.9974 20 24.9974C19.4156 24.9974 18.8546 24.8971 18.3333 24.7129ZM7 19.9974C7 19.4451 7.44772 18.9974 8 18.9974H10.6667C11.219 18.9974 11.6667 19.4451 11.6667 19.9974C11.6667 20.5497 11.219 20.9974 10.6667 20.9974H8C7.44772 20.9974 7 20.5497 7 19.9974Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                        <span>Certificate</span>
                    </div>
                    <div class="course-rating">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path d="M19.5009 19.5H13.5009V21H19.5009V19.5Z" fill="url(#paint0_linear_16148_34710)"></path>
                            <path d="M22.5009 16.5H13.5009V18H22.5009V16.5Z" fill="url(#paint1_linear_16148_34710)"></path>
                            <path d="M22.5009 13.5H13.5009V15H22.5009V13.5Z" fill="url(#paint2_linear_16148_34710)"></path>
                            <path d="M15.4127 8.41275L12.0009 1.5L8.58919 8.41275L0.960938 9.52125L6.48094 14.9025L5.17744 22.5L10.5009 19.7017V18.0068L7.17019 19.758L8.09269 14.3783L4.18444 10.5682L9.58519 9.78375L12.0009 4.88925L14.4167 9.78375L20.7872 10.7108L21.0009 9.225L15.4127 8.41275Z" fill="url(#paint3_linear_16148_34710)"></path>
                            <defs>
                                <linearGradient id="paint0_linear_16148_34710" x1="20.7639" y1="18.5789" x2="1.26778" y2="9.27128" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#13C4CC"></stop>
                                    <stop offset="1" stop-color="#0A6264"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_16148_34710" x1="20.7639" y1="18.5789" x2="1.26778" y2="9.27128" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#13C4CC"></stop>
                                    <stop offset="1" stop-color="#0A6264"></stop>
                                </linearGradient>
                                <linearGradient id="paint2_linear_16148_34710" x1="20.7639" y1="18.5789" x2="1.26778" y2="9.27128" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#13C4CC"></stop>
                                    <stop offset="1" stop-color="#0A6264"></stop>
                                </linearGradient>
                                <linearGradient id="paint3_linear_16148_34710" x1="20.7639" y1="18.5789" x2="1.26778" y2="9.27128" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#13C4CC"></stop>
                                    <stop offset="1" stop-color="#0A6264"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <span class="rating-value">{course.rating}</span>
                        <span class="rating-count">({course.reviews})</span>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className='search-page'>
                <div class="filters-wrapper">
                    <div className="filters-container">
                        <div className="filters-left">
                            <div style={{ position: "relative" }}>
                                <button
                                    className={`filter-button ${activeDropdown === "product" ? "active" : ""}`}
                                    onClick={() => toggleDropdown("product")}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M4 4h6v6h-6z"></path>
                                        <path d="M14 4h6v6h-6z"></path>
                                        <path d="M4 14h6v6h-6z"></path>
                                        <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                    </svg>
                                    Product {selectedCounts["product"] > 0 && <span>({selectedCounts["product"]})</span>}
                                </button>
                                {activeDropdown === "product" && (
                                    <div className="filter-dropdown">
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

                            <div style={{ position: "relative" }}>
                                <button
                                    className={`filter-button ${activeDropdown === "rating" ? "active" : ""}`}
                                    onClick={() => toggleDropdown("rating")}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M19.5009 19.5H13.5009V21H19.5009V19.5Z"
                                            fill="url(#paint0_linear_16148_34710)"
                                        ></path>
                                        <path
                                            d="M22.5009 16.5H13.5009V18H22.5009V16.5Z"
                                            fill="url(#paint1_linear_16148_34710)"
                                        ></path>
                                        <path
                                            d="M22.5009 13.5H13.5009V15H22.5009V13.5Z"
                                            fill="url(#paint2_linear_16148_34710)"
                                        ></path>
                                        <path
                                            d="M15.4127 8.41275L12.0009 1.5L8.58919 8.41275L0.960938 9.52125L6.48094 14.9025L5.17744 22.5L10.5009 19.7017V18.0068L7.17019 19.758L8.09269 14.3783L4.18444 10.5682L9.58519 9.78375L12.0009 4.88925L14.4167 9.78375L20.7872 10.7108L21.0009 9.225L15.4127 8.41275Z"
                                            fill="url(#paint3_linear_16148_34710)"
                                        ></path>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_16148_34710"
                                                x1="20.7639"
                                                y1="18.5789"
                                                x2="1.26778"
                                                y2="9.27128"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#13C4CC"></stop>
                                                <stop offset="1" stopColor="#0A6264"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="paint1_linear_16148_34710"
                                                x1="20.7639"
                                                y1="18.5789"
                                                x2="1.26778"
                                                y2="9.27128"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#13C4CC"></stop>
                                                <stop offset="1" stopColor="#0A6264"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="paint2_linear_16148_34710"
                                                x1="20.7639"
                                                y1="18.5789"
                                                x2="1.26778"
                                                y2="9.27128"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#13C4CC"></stop>
                                                <stop offset="1" stopColor="#0A6264"></stop>
                                            </linearGradient>
                                            <linearGradient
                                                id="paint3_linear_16148_34710"
                                                x1="20.7639"
                                                y1="18.5789"
                                                x2="1.26778"
                                                y2="9.27128"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#13C4CC"></stop>
                                                <stop offset="1" stopColor="#0A6264"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    Rating {selectedCounts["rating"] > 0 && <span>({selectedCounts["rating"]})</span>}
                                </button>
                                {activeDropdown === "rating" && (
                                    <div className="filter-dropdown">
                                        {[
                                            { label: "4.5 & up", count: "4,652" },
                                            { label: "4.0 & up", count: "9,206" },
                                            { label: "3.5 & up", count: "10,000" },
                                            { label: "3.0 & up", count: "10,000" },
                                        ].map((rating, index) => (
                                            <label key={index} className="filter-option">
                                                <input
                                                    type="checkbox"
                                                    onChange={(e) => handleCheckboxChange("rating", e.target.checked)}
                                                />
                                                <div className="rating">
                                                    <span>{rating.label}</span>
                                                    <svg viewBox="0 0 24 24" width="16" height="16">
                                                        <path
                                                            fill="#13C4CC"
                                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                        />
                                                    </svg>
                                                </div>
                                                <span className="count">({rating.count})</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div style={{ position: "relative" }}>
                                <button
                                    className={`filter-button ${activeDropdown === "language" ? "active" : ""}`}
                                    onClick={() => toggleDropdown("language")}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="16"
                                        height="16"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                    </svg>
                                    Language {selectedCounts["language"] > 0 && <span>({selectedCounts["language"]})</span>}
                                </button>
                                {activeDropdown === "language" && (
                                    <div className="filter-dropdown">
                                        {[
                                            { label: "English", count: "6,988" },
                                            { label: "Español", count: "1,073" },
                                            { label: "Türkçe", count: "454" },
                                            { label: "Português", count: "417" },
                                        ].map((language, index) => (
                                            <label key={index} className="filter-option">
                                                <input
                                                    type="checkbox"
                                                    onChange={(e) => handleCheckboxChange("language", e.target.checked)}
                                                />
                                                {language.label}
                                                <span className="count">({language.count})</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div style={{ position: "relative" }}>
                                <button
                                    className={`filter-button ${activeDropdown === "level" ? "active" : ""}`}
                                    onClick={() => toggleDropdown("level")}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                    >
                                        <path d="M10.8571 26.2857C10.8571 27.2325 10.0896 28 9.14286 28H5.71429C4.76751 28 4 27.2325 4 26.2857V22C4 21.0532 4.76751 20.2857 5.71429 20.2857H9.14286C10.0896 20.2857 10.8571 21.0532 10.8571 22V26.2857ZM19.4286 26.2857V14.2857C19.4286 13.3389 18.6611 12.5714 17.7143 12.5714H14.2857C13.3389 12.5714 12.5714 13.3389 12.5714 14.2857V26.2857C12.5714 27.2325 13.3389 28 14.2857 28H17.7143C18.6611 28 19.4286 27.2325 19.4286 26.2857ZM21.1429 26.2857C21.1429 27.2325 21.9104 28 22.8571 28H26.2857C27.2325 28 28 27.2325 28 26.2857V5.71429C28 4.76751 27.2325 4 26.2857 4H22.8571C21.9104 4 21.1429 4.76751 21.1429 5.71429V26.2857ZM17.7143 14.2857H14.2857V26.2857H17.7143V14.2857ZM26.2857 5.71429H22.8571V26.2857H26.2857V5.71429Z" />
                                    </svg>
                                    Level {selectedCounts["level"] > 0 && <span>({selectedCounts["level"]})</span>}
                                </button>
                                {activeDropdown === "level" && (
                                    <div className="filter-dropdown">
                                        {[
                                            { label: "All Levels", count: "5,854" },
                                            { label: "Beginner", count: "4,502" },
                                            { label: "Intermediate", count: "1,941" },
                                            { label: "Expert", count: "253" },
                                        ].map((level, index) => (
                                            <label key={index} className="filter-option">
                                                <input
                                                    type="checkbox"
                                                    onChange={(e) => handleCheckboxChange("level", e.target.checked)}
                                                />
                                                {level.label}
                                                <span className="count">({level.count})</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div style={{ position: "relative" }}>
                                <button
                                    className={`filter-button ${activeDropdown === "price" ? "active" : ""}`}
                                    onClick={() => toggleDropdown("price")}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="16"
                                        height="16"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Price {selectedCounts["price"] > 0 && <span>({selectedCounts["price"]})</span>}
                                </button>
                                {activeDropdown === "price" && (
                                    <div className="filter-dropdown">
                                        {[
                                            { label: "Paid", count: "10,000" },
                                            { label: "Free", count: "1,585" },
                                        ].map((priceOption, index) => (
                                            <label key={index} className="filter-option">
                                                <input
                                                    type="checkbox"
                                                    onChange={(e) => handleCheckboxChange("price", e.target.checked)}
                                                />
                                                {priceOption.label}
                                                <span className="count">({priceOption.count})</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>


                            {/* Additional Filters */}

                            <button className="more-filters-button active" id="moreFiltersBtn" onClick={openPanel}>
                                <svg viewBox="0 0 448 512" width="14" height="14">
                                    <path
                                        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Filters
                            </button>
                        </div>

                        <div className="filters-right">
                            <div style={{ position: "relative" }}>
                                <button
                                    className={`sort-button ${activeDropdown === "sort" ? "active" : ""}`}
                                    onClick={() => toggleDropdown("sort")}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="16"
                                        height="16"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                                    </svg>
                                    Sort by: {selectedSort || "Most Relevant"}
                                </button>
                                {activeDropdown === "sort" && (
                                    <div className="sort-dropdown">
                                        {[
                                            { label: "Most Relevant", value: "relevant" },
                                            { label: "Newest", value: "newest" },
                                            { label: "Most Reviewed", value: "reviewed" },
                                            { label: "Highest Rated", value: "rated" },
                                        ].map((option, index) => (
                                            <label key={index} className="sort-option">
                                                <input
                                                    type="radio"
                                                    name="sort"
                                                    value={option.value}
                                                    checked={selectedSort === option.value}
                                                    onChange={() => handleSortChange(option.value)}
                                                />
                                                {option.label}
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </div>
                        <div
                            className={`overlay ${isOpen ? "active" : ""}`}
                            onClick={closePanel}
                        ></div>

                        {/* Side Panel */}
                        <div className={`side-panel ${isOpen ? "active" : ""}`}>
                            <div className="side-panel-header">
                                <h2 className="side-panel-title">All Filters</h2>
                                <button className="close-panel" onClick={closePanel}>
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Filters */}
                            <div class="side-panel-content">

                                <div class="filter-sections">
                                    <div class="filter-section-header">
                                        <h3 class="filter-section-title">Category</h3>
                                        <svg class="filter-section-arrow" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div class="filter-section-content">
                                        <label class="filter-option">
                                            <input type="checkbox" checked />
                                            Technology
                                        </label>
                                        <div class="nested-options">
                                            <label class="filter-option">
                                                <input type="checkbox" checked />
                                                Programming
                                            </label>
                                            <label class="filter-option">
                                                <input type="checkbox" />
                                                AI & ML
                                            </label>
                                        </div>
                                        <label class="filter-option">
                                            <input type="checkbox" checked />
                                            Business
                                        </label>
                                        <div class="nested-options">
                                            <label class="filter-option">
                                                <input type="checkbox" />
                                                Marketing
                                            </label>
                                            <label class="filter-option">
                                                <input type="checkbox" />
                                                Finance
                                            </label>
                                        </div>
                                        <button class="show-more-btn">+ Show more</button>
                                    </div>
                                </div>

                                <div class="filter-sections">
                                    <div class="filter-section-header">
                                        <h3 class="filter-section-title">Lesson Types</h3>
                                        <svg class="filter-section-arrow" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div class="filter-section-content">
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            Video
                                        </label>
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            PDF
                                        </label>
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            Zoom
                                        </label>
                                        <button class="show-more-btn">+ Show more</button>
                                    </div>
                                </div>

                                <div class="filter-sections">
                                    <div class="filter-section-header">
                                        <h3 class="filter-section-title">Topic</h3>
                                        <svg class="filter-section-arrow" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div class="filter-section-content">
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            Java
                                            <span class="count">(1,442)</span>
                                        </label>
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            JavaScript
                                            <span class="count">(637)</span>
                                        </label>
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            Python
                                            <span class="count">(519)</span>
                                        </label>
                                        <button class="show-more-btn">+ Show more</button>
                                    </div>
                                </div>

                                <div class="filter-sections">
                                    <div class="filter-section-header">
                                        <h3 class="filter-section-title">Qualifications</h3>
                                        <svg class="filter-section-arrow" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div class="filter-section-content">
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            CPA (US)
                                        </label>
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            EA
                                        </label>
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            AFSP
                                        </label>
                                        <button class="show-more-btn">+ Show more</button>
                                    </div>
                                </div>

                                <div class="filter-sections">
                                    <div class="filter-section-header">
                                        <h3 class="filter-section-title">Subject</h3>
                                        <svg class="filter-section-arrow" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div class="filter-section-content">
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            Taxes
                                        </label>
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            Ethics
                                        </label>
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            Tax Planning
                                        </label>
                                        <button class="show-more-btn">+ Show more</button>
                                    </div>
                                </div>

                                <div class="filter-sections">
                                    <div class="filter-section-header">
                                        <h3 class="filter-section-title">Course Credits</h3>
                                        <svg class="filter-section-arrow" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div class="filter-section-content">
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            Nano Credits
                                        </label>
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            1 - 2 Credits
                                        </label>
                                        <label class="filter-option">
                                            <input type="checkbox" />
                                            3 - 4 Credits
                                        </label>
                                        <button class="show-more-btn">+ Show more</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='about-page p-4 bg-white rounded-lg mt-4'>
                    <div class="about-section2">
                        <div class="header">
                            <div class="header-icon">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h1 class="header-title">10,759 Results for '{query}'</h1>
                        </div>

                        <div class="courses-grid">
                            {courses.map((course, index) => (
                                <CourseCard key={index} course={course} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
