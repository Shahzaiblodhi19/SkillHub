"use client";
import React, { useContext, useState } from 'react'
import profile from '../assets/profile.png';
import Image from 'next/image';
import { FaStar, FaUserGraduate, FaComment, FaBook } from 'react-icons/fa';
import { MyContext } from '../layout';

function Student() {
    const context = useContext(MyContext)
    const [activeTab, setactiveTab] = useState('courses');
    const [viewMoreActive, setviewMoreActive] = useState(false)
    const [viewMoreActive2, setviewMoreActive2] = useState(false)
    const [viewMoreActive3, setviewMoreActive3] = useState(false)

    const sessions = [
        {
            id: 1,
            title: 'Advanced Machine Learning Workshop',
            author: 'Dr. Sarah Connor',
            img: "https://i.ibb.co/640kJN2/c1.jpg",
            profileImg: profile,
            description: 'Deep dive into advanced ML algorithms, neural networks, and practical applications. Learn to solve real-world problems with hands-on experience.',
            type: '1on1',
            members: '28k',
            rating: '4.8',
            reviews: '(2.3k)',
        },
        {
            id: 2,
            title: 'Web Development Masterclass',
            author: 'David Chen',
            img: "https://i.ibb.co/NKffPZQ/c4.jpg",
            profileImg: profile,
            description: 'Master modern web development with React, Node.js, and cloud technologies. Build scalable applications and learn industry best practices.',
            type: 'Group',
            members: '35k',
            rating: '4.7',
            reviews: '(1.9k)',
        },
        {
            id: 3,
            title: 'Data Science Bootcamp',
            author: 'Jane Doe',
            img: "https://i.ibb.co/GFhHTqZ/c2.jpg",
            profileImg: profile,
            description: 'Comprehensive bootcamp covering data analysis, visualization, and machine learning techniques. Gain skills for a successful career in data science.',
            type: '1on1',
            members: '28k',
            rating: '4.9',
            reviews: '(3.1k)',
        },
        {
            id: 4,
            title: 'AI for Beginners',
            author: 'John Smith',
            img: "https://i.ibb.co/rkkdzYx/c6.jpg",
            profileImg: profile,
            description: 'An introductory course on AI concepts, tools, and applications. Designed for beginners to grasp the foundations of artificial intelligence.',
            type: 'Group',
            members: '35k',
            rating: '4.6',
            reviews: '(1.2k)',
        },
        {
            id: 5,
            title: 'Data Science Bootcamp',
            author: 'Jane Doe',
            img: "https://i.ibb.co/GFhHTqZ/c2.jpg",
            profileImg: profile,
            description: 'Comprehensive bootcamp covering data analysis, visualization, and machine learning techniques. Gain skills for a successful career in data science.',
            type: '1on1',
            members: '28k',
            rating: '4.9',
            reviews: '(3.1k)',
        },
        {
            id: 6,
            title: 'AI for Beginners',
            author: 'John Smith',
            img: "https://i.ibb.co/rkkdzYx/c6.jpg",
            profileImg: profile,
            description: 'An introductory course on AI concepts, tools, and applications. Designed for beginners to grasp the foundations of artificial intelligence.',
            type: 'Group',
            members: '35k',
            rating: '4.6',
            reviews: '(1.2k)',
        },
        {
            id: 7,
            title: 'Web Development Masterclass',
            author: 'David Chen',
            img: "https://i.ibb.co/NKffPZQ/c4.jpg",
            profileImg: profile,
            description: 'Master modern web development with React, Node.js, and cloud technologies. Build scalable applications and learn industry best practices.',
            type: 'Group',
            members: '35k',
            rating: '4.7',
            reviews: '(1.9k)',
        },
        {
            id: 8,
            title: 'Data Science Bootcamp',
            author: 'Jane Doe',
            img: "https://i.ibb.co/GFhHTqZ/c2.jpg",
            profileImg: profile,
            description: 'Comprehensive bootcamp covering data analysis, visualization, and machine learning techniques. Gain skills for a successful career in data science.',
            type: '1on1',
            members: '28k',
            rating: '4.9',
            reviews: '(3.1k)',
        },
        {
            id: 9,
            title: 'AI for Beginners',
            author: 'John Smith',
            img: "https://i.ibb.co/rkkdzYx/c6.jpg",
            profileImg: profile,
            description: 'An introductory course on AI concepts, tools, and applications. Designed for beginners to grasp the foundations of artificial intelligence.',
            type: 'Group',
            members: '35k',
            rating: '4.6',
            reviews: '(1.2k)',
        },

    ];

    const [displayedCourses, setDisplayedCourses] = useState(sessions);
    const communities = [
        {
            id: 1,
            title: 'UI/UX Design Community Hub',
            author: 'Sarah Anderson',
            role: 'Lead Designer at DesignPro',
            profileImg: profile,
            img: "https://i.ibb.co/NKffPZQ/c4.jpg",
            description: 'Join our vibrant community of UI/UX designers. Share insights, get feedback, and stay updated with the latest design trends.',
            type: 'Community',
            members: '12.5k',
            posts: '45.2k',
            price: '$24.00',
        },
        {
            id: 2,
            title: 'Frontend Development Collective',
            author: 'Michael Chen',
            role: 'Cofounder of DevStack',
            profileImg: profile,
            img: "https://i.ibb.co/640kJN2/c1.jpg",
            description: 'A collaborative space for frontend developers to share knowledge, discuss new technologies, and grow.',
            type: 'Collective',
            members: '8.2k',
            posts: '32.7k',
            price: '$18.99',
        },
        {
            id: 3,
            title: 'UI/UX Design Community Hub',
            author: 'Sarah Anderson',
            role: 'Lead Designer at DesignPro',
            profileImg: profile,
            img: "https://i.ibb.co/rkkdzYx/c6.jpg",
            description: 'Join our vibrant community of UI/UX designers. Share insights, get feedback, and stay updated with the latest design trends.',
            type: 'Community',
            members: '12.5k',
            posts: '45.2k',
            price: '$24.00',
        },
        {
            id: 4,
            title: 'Frontend Development Collective',
            author: 'Michael Chen',
            role: 'Cofounder of DevStack',
            profileImg: profile,
            img: "https://i.ibb.co/hBpWGQ7/c3.jpg",
            description: 'A collaborative space for frontend developers to share knowledge, discuss new technologies, and grow their skills.',
            type: 'Collective',
            members: '8.2k',
            posts: '32.7k',
            price: '$18.99',
        },
        {
            id: 5,
            title: 'UI/UX Design Community Hub',
            author: 'Sarah Anderson',
            role: 'Lead Designer at DesignPro',
            profileImg: profile,
            img: "https://i.ibb.co/rkkdzYx/c6.jpg",
            description: 'Join our vibrant community of UI/UX designers. Share insights, get feedback, and stay updated with the latest design trends.',
            type: 'Community',
            members: '12.5k',
            posts: '45.2k',
            price: '$24.00',
        },
        {
            id: 6,
            title: 'Frontend Development Collective',
            author: 'Michael Chen',
            role: 'Cofounder of DevStack',
            profileImg: profile,
            img: "https://i.ibb.co/hBpWGQ7/c3.jpg",
            description: 'A collaborative space for frontend developers to share knowledge, discuss new technologies, and grow their skills.',
            type: 'Collective',
            members: '8.2k',
            posts: '32.7k',
            price: '$18.99',
        },
        {
            id: 7,
            title: 'Frontend Development Collective',
            author: 'Michael Chen',
            role: 'Cofounder of DevStack',
            profileImg: profile,
            img: "https://i.ibb.co/hBpWGQ7/c3.jpg",
            description: 'A collaborative space for frontend developers to share knowledge, discuss new technologies, and grow their skills.',
            type: 'Collective',
            members: '8.2k',
            posts: '32.7k',
            price: '$18.99',
        },
        {
            id: 8,
            title: 'UI/UX Design Community Hub',
            author: 'Sarah Anderson',
            role: 'Lead Designer at DesignPro',
            profileImg: profile,
            img: "https://i.ibb.co/rkkdzYx/c6.jpg",
            description: 'Join our vibrant community of UI/UX designers. Share insights, get feedback, and stay updated with the latest design trends.',
            type: 'Community',
            members: '12.5k',
            posts: '45.2k',
            price: '$24.00',
        },
        {
            id: 9,
            title: 'Frontend Development Collective',
            author: 'Michael Chen',
            role: 'Cofounder of DevStack',
            profileImg: profile,
            img: "https://i.ibb.co/hBpWGQ7/c3.jpg",
            description: 'A collaborative space for frontend developers to share knowledge, discuss new technologies, and grow their skills.',
            type: 'Collective',
            members: '8.2k',
            posts: '32.7k',
            price: '$18.99',
        },
    ];
    const [displayedCommunities, setDisplayedCommunities] = useState(communities);

    const handleToggleViewMore = () => {
        if (viewMoreActive2) {
            setDisplayedCourses(sessions.slice(0, 6)); // Show only 4 courses
        } else {
            setDisplayedCourses(sessions.slice(0, 9)); // Show all 8 courses
        }
        setviewMoreActive2(!viewMoreActive2); // Toggle the button state
    };
    const handleToggleViewMore2 = () => {
        if (viewMoreActive3) {
            setDisplayedCommunities(communities.slice(0, 6)); // Show only 4 courses
        } else {
            setDisplayedCommunities(communities.slice(0, 9)); // Show all 8 courses
        }
        setviewMoreActive3(!viewMoreActive3); // Toggle the button state
    };


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
        },
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

    const [includedTooltip, setincludedTooltip] = useState(false)

    const stats = [
        { id: 1, icon: <FaStar className="text-blue-500 w-5 h-5" fill='#99dceb' />, value: "4.8", label: "Instructor Rating" },
        { id: 2, icon: <FaUserGraduate className="text-blue-500 w-5 h-5" fill='#99dceb' />, value: "263,854", label: "Students" },
        { id: 3, icon: <FaComment className="text-blue-500 w-5 h-5" fill='#99dceb' />, value: "135,182", label: "Reviews" },
        { id: 4, icon: <FaBook className="text-blue-500 w-5 h-5" fill='#99dceb' />, value: "36", label: "Courses" },
    ];
    return (
        <div className='instructor'>
            <div class="page-container p-0">
                <div class="main-content">
                    <div class="content-main">
                        <div class="profile-header">
                            <img src="https://i.ibb.co/YP71Tb6/profile9.jpg" alt="Instructor" class="profile-avatar" />
                            <div class="profile-info">
                                <h1 class="profile-name">James Ritchie</h1>
                                <div class="profile-achievements">
                                    <span>Inorganic Chemistry Expert</span>
                                    <span class="achievement-divider">◇</span>
                                    <span>Learner</span>
                                    <span class="achievement-divider">◇</span>
                                    <span>Always learning new things</span>
                                </div>
                                <div class="profile-stats">
                                    <div class="stat-group">
                                        <span class="stat-label">Watch mins</span>
                                        <span class="stat-value watch-mins">196M</span>
                                    </div>
                                    <div class="stat-group">
                                        <span class="stat-label">Badges</span>
                                        <span class="stat-value rating">19</span>
                                    </div>
                                    <div class="stat-group">
                                        <span class="stat-label">Certificates</span>
                                        <span class="stat-value followers">12</span>
                                    </div>


                                    <div class="stat-group">
                                        <span class="stat-label">Contributions</span>
                                        <span class="stat-value followers">322</span>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <nav class="nav-tabs">
                            <div class={`nav-tab ${activeTab === 'courses' ? 'active' : ''}`} onClick={() => setactiveTab('courses')}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" />
                                </svg>
                                Courses
                            </div>
                            <div class={`nav-tab ${activeTab === 'Sessions' ? 'active' : ''}`} onClick={() => setactiveTab('Sessions')}>
                                <svg fill="none" viewBox="0 0 24 24">
                                    <path fill="#4F4F4F" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                                Sessions
                            </div>
                            <div class={`nav-tab ${activeTab === 'Communities' ? 'active' : ''}`} onClick={() => setactiveTab('Communities')}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path fill="#4F4F4F" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    <path fill="#4F4F4F" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                                Communities
                            </div>
                            <div class={`nav-tab ${activeTab === 'Bundles' ? 'active' : ''}`} onClick={() => setactiveTab('Bundles')}>
                                <svg fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3 1h18a3 3 0 0 1 3 3v8H2v5a1 1 0 0 0 1 1h7v2H3a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3ZM2 4v2h20V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm11.8 10.81a2.7 2.7 0 0 1 4.2.43 2.7 2.7 0 0 1 4.2-.43 2.8 2.8 0 0 1 0 3.92L18 23l-4.2-4.27a2.8 2.8 0 0 1 0-3.92Z" />
                                </svg>
                                Bundles
                            </div>

                            <div class={`nav-tab ${activeTab === 'Bookmarks' ? 'active' : ''}`} onClick={() => setactiveTab('Bookmarks')}>
                                <svg viewBox="0 0 18 18"><path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor"></path></svg>
                                Bookmarks
                            </div>

                            <div class={`nav-tab ${activeTab === 'Reviews' ? 'active' : ''}`} onClick={() => setactiveTab('Reviews')}>
                                <svg fill="none" viewBox="0 0 24 24"><path fill="#4F4F4F" d="M12 4.875a.75.75 0 01.648.372l1.994 3.414 3.893.85a.75.75 0 01.395 1.238l-2.646 2.905.414 3.892a.75.75 0 01-1.042.768L12 16.744l-3.656 1.57a.75.75 0 01-1.042-.768l.414-3.892L5.07 10.75a.75.75 0 01.395-1.238l3.893-.85 1.994-3.414A.75.75 0 0112 4.875zm0 2.237l-1.512 2.59a.75.75 0 01-.488.354l-2.946.643 1.998 2.195a.75.75 0 01.191.584L8.93 16.43l2.775-1.192a.75.75 0 01.592 0l2.775 1.192-.314-2.952a.75.75 0 01.191-.584l1.998-2.195L14 10.056a.75.75 0 01-.488-.355L12 7.112z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                                Reviews
                            </div>

                        </nav>
                        {activeTab === 'courses' &&
                            <>
                                <div class="course-grid">
                                    <div class="course-card">
                                        <div class="course-image-container">
                                            <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="Course" class="course-image" />
                                            <button class="bookmark-button">
                                                <svg color="#13C4CC" viewBox="0 0 18 18">
                                                    <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="course-content">
                                            <h3 class="course-title">Advanced Inorganic Chemistry: Coordination Compounds</h3>
                                            <div class="course-stats">
                                                <div class="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    <span class="stat-text">42.5K</span>
                                                    <div class="stat-tooltip">42.5K students</div>
                                                </div>
                                                <div class="stat">
                                                    <svg viewBox="0 0 16 15">
                                                        <path fill="#19CBCF" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                    </svg>
                                                    <span class="stat-text">4.9 (1.2K)</span>
                                                    <div class="stat-tooltip">4.9 rating, 1.2K reviews</div>
                                                </div>
                                            </div>
                                            <div class="course-meta">
                                                <span>27.5 hr</span>
                                                <span class="meta-dot"></span>
                                                <span>399 lectures</span>
                                                <span class="meta-dot"></span>
                                                <span>All Levels</span>
                                            </div>
                                            <div class="price-container">
                                                <span class="current-price">$79.99</span>
                                                <span class="original-price">$199.99</span>
                                            </div>
                                            <button class="view-course-button">View Course</button>
                                        </div>
                                    </div>

                                    <div class="course-card">
                                        <div class="course-image-container">
                                            <img src="https://i.ibb.co/ss92kB8/c5.jpg" alt="Course" class="course-image" />
                                            <button class="bookmark-button">
                                                <svg color="#13C4CC" viewBox="0 0 18 18">
                                                    <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="course-content">
                                            <h3 class="course-title">Chemical Bonding & Molecular Structure</h3>
                                            <div class="course-stats">
                                                <div class="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033Z" />
                                                    </svg>
                                                    <span class="stat-text">35.8K</span>
                                                    <div class="stat-tooltip">35.8K students</div>
                                                </div>
                                                <div class="stat">
                                                    <svg viewBox="0 0 16 15">
                                                        <path fill="currentColor" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                    </svg>
                                                    <span class="stat-text">4.8 (985)</span>
                                                    <div class="stat-tooltip">4.8 rating, 985 reviews</div>
                                                </div>
                                            </div>
                                            <div class="course-meta">
                                                <span>32.5 hr</span>
                                                <span class="meta-dot"></span>
                                                <span>425 lectures</span>
                                                <span class="meta-dot"></span>
                                                <span>All Levels</span>
                                            </div>
                                            <div class="price-container">
                                                <span class="current-price">$69.99</span>
                                                <span class="original-price">$169.99</span>
                                            </div>
                                            <button class="view-course-button">View Course</button>
                                        </div>
                                    </div>

                                    <div class="course-card">
                                        <div class="course-image-container">
                                            <img src="https://i.ibb.co/NKffPZQ/c4.jpg" alt="Course" class="course-image" />
                                            <button class="bookmark-button">
                                                <svg color="#13C4CC" viewBox="0 0 18 18">
                                                    <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="course-content">
                                            <h3 class="course-title">Periodic Table & Chemical Properties</h3>
                                            <div class="course-stats">
                                                <div class="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033Z" />
                                                    </svg>
                                                    <span class="stat-text">28.3K</span>
                                                    <div class="stat-tooltip">28.3K students</div>
                                                </div>
                                                <div class="stat">
                                                    <svg viewBox="0 0 16 15">
                                                        <path fill="currentColor" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                    </svg>
                                                    <span class="stat-text">4.9 (1.5K)</span>
                                                    <div class="stat-tooltip">4.9 rating, 1.5K reviews</div>
                                                </div>
                                            </div>
                                            <div class="course-meta">
                                                <span>29.5 hr</span>
                                                <span class="meta-dot"></span>
                                                <span>380 lectures</span>
                                                <span class="meta-dot"></span>
                                                <span>All Levels</span>
                                            </div>
                                            <div class="price-container">
                                                <span class="current-price">$89.99</span>
                                                <span class="original-price">$189.99</span>
                                            </div>
                                            <button class="view-course-button">View Course</button>
                                        </div>
                                    </div>
                                    <div class="course-card">
                                        <div class="course-image-container">
                                            <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="Course" class="course-image" />
                                            <button class="bookmark-button">
                                                <svg color="#13C4CC" viewBox="0 0 18 18">
                                                    <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="course-content">
                                            <h3 class="course-title">Advanced Inorganic Chemistry: Coordination Compounds</h3>
                                            <div class="course-stats">
                                                <div class="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    <span class="stat-text">42.5K</span>
                                                    <div class="stat-tooltip">42.5K students</div>
                                                </div>
                                                <div class="stat">
                                                    <svg viewBox="0 0 16 15">
                                                        <path fill="#19CBCF" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                    </svg>
                                                    <span class="stat-text">4.9 (1.2K)</span>
                                                    <div class="stat-tooltip">4.9 rating, 1.2K reviews</div>
                                                </div>
                                            </div>
                                            <div class="course-meta">
                                                <span>27.5 hr</span>
                                                <span class="meta-dot"></span>
                                                <span>399 lectures</span>
                                                <span class="meta-dot"></span>
                                                <span>All Levels</span>
                                            </div>
                                            <div class="price-container">
                                                <span class="current-price">$79.99</span>
                                                <span class="original-price">$199.99</span>
                                            </div>
                                            <button class="view-course-button">View Course</button>
                                        </div>
                                    </div>

                                    <div class="course-card">
                                        <div class="course-image-container">
                                            <img src="https://i.ibb.co/ss92kB8/c5.jpg" alt="Course" class="course-image" />
                                            <button class="bookmark-button">
                                                <svg color="#13C4CC" viewBox="0 0 18 18">
                                                    <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="course-content">
                                            <h3 class="course-title">Chemical Bonding & Molecular Structure</h3>
                                            <div class="course-stats">
                                                <div class="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033Z" />
                                                    </svg>
                                                    <span class="stat-text">35.8K</span>
                                                    <div class="stat-tooltip">35.8K students</div>
                                                </div>
                                                <div class="stat">
                                                    <svg viewBox="0 0 16 15">
                                                        <path fill="currentColor" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                    </svg>
                                                    <span class="stat-text">4.8 (985)</span>
                                                    <div class="stat-tooltip">4.8 rating, 985 reviews</div>
                                                </div>
                                            </div>
                                            <div class="course-meta">
                                                <span>32.5 hr</span>
                                                <span class="meta-dot"></span>
                                                <span>425 lectures</span>
                                                <span class="meta-dot"></span>
                                                <span>All Levels</span>
                                            </div>
                                            <div class="price-container">
                                                <span class="current-price">$69.99</span>
                                                <span class="original-price">$169.99</span>
                                            </div>
                                            <button class="view-course-button">View Course</button>
                                        </div>
                                    </div>

                                    <div class="course-card">
                                        <div class="course-image-container">
                                            <img src="https://i.ibb.co/NKffPZQ/c4.jpg" alt="Course" class="course-image" />
                                            <button class="bookmark-button">
                                                <svg color="#13C4CC" viewBox="0 0 18 18">
                                                    <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="course-content">
                                            <h3 class="course-title">Periodic Table & Chemical Properties</h3>
                                            <div class="course-stats">
                                                <div class="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033Z" />
                                                    </svg>
                                                    <span class="stat-text">28.3K</span>
                                                    <div class="stat-tooltip">28.3K students</div>
                                                </div>
                                                <div class="stat">
                                                    <svg viewBox="0 0 16 15">
                                                        <path fill="currentColor" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                    </svg>
                                                    <span class="stat-text">4.9 (1.5K)</span>
                                                    <div class="stat-tooltip">4.9 rating, 1.5K reviews</div>
                                                </div>
                                            </div>
                                            <div class="course-meta">
                                                <span>29.5 hr</span>
                                                <span class="meta-dot"></span>
                                                <span>380 lectures</span>
                                                <span class="meta-dot"></span>
                                                <span>All Levels</span>
                                            </div>
                                            <div class="price-container">
                                                <span class="current-price">$89.99</span>
                                                <span class="original-price">$189.99</span>
                                            </div>
                                            <button class="view-course-button">View Course</button>
                                        </div>
                                    </div>
                                    {viewMoreActive &&
                                        <>
                                            <div class="course-card">
                                                <div class="course-image-container">
                                                    <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="Course" class="course-image" />
                                                    <button class="bookmark-button">
                                                        <svg color="#13C4CC" viewBox="0 0 18 18">
                                                            <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div class="course-content">
                                                    <h3 class="course-title">Advanced Inorganic Chemistry: Coordination Compounds</h3>
                                                    <div class="course-stats">
                                                        <div class="stat">
                                                            <svg fill="none" viewBox="0 0 20 20">
                                                                <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                            </svg>
                                                            <span class="stat-text">42.5K</span>
                                                            <div class="stat-tooltip">42.5K students</div>
                                                        </div>
                                                        <div class="stat">
                                                            <svg viewBox="0 0 16 15">
                                                                <path fill="#19CBCF" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                            </svg>
                                                            <span class="stat-text">4.9 (1.2K)</span>
                                                            <div class="stat-tooltip">4.9 rating, 1.2K reviews</div>
                                                        </div>
                                                    </div>
                                                    <div class="course-meta">
                                                        <span>27.5 hr</span>
                                                        <span class="meta-dot"></span>
                                                        <span>399 lectures</span>
                                                        <span class="meta-dot"></span>
                                                        <span>All Levels</span>
                                                    </div>
                                                    <div class="price-container">
                                                        <span class="current-price">$79.99</span>
                                                        <span class="original-price">$199.99</span>
                                                    </div>
                                                    <button class="view-course-button">View Course</button>
                                                </div>
                                            </div>

                                            <div class="course-card">
                                                <div class="course-image-container">
                                                    <img src="https://i.ibb.co/ss92kB8/c5.jpg" alt="Course" class="course-image" />
                                                    <button class="bookmark-button">
                                                        <svg color="#13C4CC" viewBox="0 0 18 18">
                                                            <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div class="course-content">
                                                    <h3 class="course-title">Chemical Bonding & Molecular Structure</h3>
                                                    <div class="course-stats">
                                                        <div class="stat">
                                                            <svg fill="none" viewBox="0 0 20 20">
                                                                <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033Z" />
                                                            </svg>
                                                            <span class="stat-text">35.8K</span>
                                                            <div class="stat-tooltip">35.8K students</div>
                                                        </div>
                                                        <div class="stat">
                                                            <svg viewBox="0 0 16 15">
                                                                <path fill="currentColor" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                            </svg>
                                                            <span class="stat-text">4.8 (985)</span>
                                                            <div class="stat-tooltip">4.8 rating, 985 reviews</div>
                                                        </div>
                                                    </div>
                                                    <div class="course-meta">
                                                        <span>32.5 hr</span>
                                                        <span class="meta-dot"></span>
                                                        <span>425 lectures</span>
                                                        <span class="meta-dot"></span>
                                                        <span>All Levels</span>
                                                    </div>
                                                    <div class="price-container">
                                                        <span class="current-price">$69.99</span>
                                                        <span class="original-price">$169.99</span>
                                                    </div>
                                                    <button class="view-course-button">View Course</button>
                                                </div>
                                            </div>

                                            <div class="course-card">
                                                <div class="course-image-container">
                                                    <img src="https://i.ibb.co/NKffPZQ/c4.jpg" alt="Course" class="course-image" />
                                                    <button class="bookmark-button">
                                                        <svg color="#13C4CC" viewBox="0 0 18 18">
                                                            <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div class="course-content">
                                                    <h3 class="course-title">Periodic Table & Chemical Properties</h3>
                                                    <div class="course-stats">
                                                        <div class="stat">
                                                            <svg fill="none" viewBox="0 0 20 20">
                                                                <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033Z" />
                                                            </svg>
                                                            <span class="stat-text">28.3K</span>
                                                            <div class="stat-tooltip">28.3K students</div>
                                                        </div>
                                                        <div class="stat">
                                                            <svg viewBox="0 0 16 15">
                                                                <path fill="currentColor" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                            </svg>
                                                            <span class="stat-text">4.9 (1.5K)</span>
                                                            <div class="stat-tooltip">4.9 rating, 1.5K reviews</div>
                                                        </div>
                                                    </div>
                                                    <div class="course-meta">
                                                        <span>29.5 hr</span>
                                                        <span class="meta-dot"></span>
                                                        <span>380 lectures</span>
                                                        <span class="meta-dot"></span>
                                                        <span>All Levels</span>
                                                    </div>
                                                    <div class="price-container">
                                                        <span class="current-price">$89.99</span>
                                                        <span class="original-price">$189.99</span>
                                                    </div>
                                                    <button class="view-course-button">View Course</button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                                <div className="cursor-pointer py-2 fw-bold" onClick={() => setviewMoreActive(!viewMoreActive)} style={{ textAlign: "center", marginTop: "20px", background: '#F5F5F5', zIndex: '100' }}>
                                    <button

                                    >
                                        {!viewMoreActive ? <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                stroke="2px"
                                            />
                                        </svg>
                                            : <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1.646 11.354a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708 0z"
                                                />
                                            </svg>
                                        }
                                    </button>
                                </div>
                            </>
                        }
                        {activeTab === 'Reviews' &&
                            <div className='reviews'>
                                <div class="reviews-container">
                                    <div class="course-grids">
                                        <div class="review-card">
                                            <div class="review-header">
                                                <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="Alex Thompson" class="review-avatar" />
                                                <div class="review-author-info">
                                                    <div class="review-author">Alex Thompson</div>
                                                    <div class="review-rating">
                                                        <span class="star">★</span>
                                                        <span>5.0</span>
                                                        <span class="review-date">June 22, 2023</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 class="review-title">Excellent Course Material & Delivery</h3>
                                            <p class="review-content">The course exceeded my expectations. The instructor's approach to explaining complex concepts was clear and effective. Really helped me..</p>
                                            <div class="review-product">
                                                <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="Course" class="product-image" />
                                                <div class="product-info">
                                                    <div class="product-title">Advanced Inorganic Chemistry</div>
                                                    <div class="star-rating">
                                                        ★★★★★ <span>(4.7)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="review-actions">
                                                <div class="review-action">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                                    </svg>
                                                    Helpful (24)
                                                </div>
                                                <div class="review-action">
                                                    <svg viewBox="0 0 512 512"><path d="M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16H286.5c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8H384c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H32z" fill="currentColor"></path></svg>
                                                    Report
                                                </div>
                                            </div>

                                        </div>

                                        <div class="review-card">
                                            <div class="review-header">
                                                <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="Alex Thompson" class="review-avatar" />
                                                <div class="review-author-info">
                                                    <div class="review-author">Alex Thompson</div>
                                                    <div class="review-rating">
                                                        <span class="star">★</span>
                                                        <span>4.9</span>
                                                        <span class="review-date">June 15, 2023</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 class="review-title">Comprehensive Coverage of Topics</h3>
                                            <p class="review-content">The depth of content is impressive. Every concept is explained thoroughly with practical examples. The assignments really helped reinforce the learning.</p>
                                            <div class="review-product">
                                                <img src="https://i.ibb.co/ss92kB8/c5.jpg" alt="Course" class="product-image" />
                                                <div class="product-info">
                                                    <div class="product-title">Chemical Bonding & Structure</div>
                                                    <div class="star-rating">
                                                        ★★★★☆ <span>(4.5)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="review-actions">
                                                <div class="review-action">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                                    </svg>
                                                    Helpful (18)
                                                </div>
                                                <div class="review-action">
                                                    <svg viewBox="0 0 512 512"><path d="M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16H286.5c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8H384c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H32z" fill="currentColor"></path></svg>
                                                    Report
                                                </div>
                                            </div>

                                        </div>

                                        <div class="review-card">
                                            <div class="review-header">
                                                <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="Alex Thompson" class="review-avatar" />
                                                <div class="review-author-info">
                                                    <div class="review-author">Alex Thompson</div>
                                                    <div class="review-rating">
                                                        <span class="star">★</span>
                                                        <span>5.0</span>
                                                        <span class="review-date">June 8, 2023</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 class="review-title">Perfect for Super Advanced Learning</h3>
                                            <p class="review-content">The course structure is well thought out. Progressive difficulty helps build strong foundations before moving to complex topics. Great resource for serious learners.</p>
                                            <div class="review-product">
                                                <img src="https://i.ibb.co/NKffPZQ/c4.jpg" alt="Course" class="product-image" />
                                                <div class="product-info">
                                                    <div class="product-title">Periodic Table & Properties</div>
                                                    <div class="star-rating">
                                                        ★★★★★ <span>(4.2)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="review-actions">
                                                <div class="review-action">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                                    </svg>
                                                    Helpful (31)
                                                </div>
                                                <div class="review-action">
                                                    <svg viewBox="0 0 512 512"><path d="M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16H286.5c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8H384c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H32z" fill="currentColor"></path></svg>
                                                    Report
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {activeTab === 'Bundles' &&
                            <div className='bundle'>
                                <div class="bundle-grid">
                                    <div class="bundle-card">
                                        <div class="bundle-image-container">
                                            <img src="https://i.ibb.co/sw4yS26/img1.jpg" alt="Bundle cover" class="bundle-image" loading="lazy" />
                                            <img src="https://i.ibb.co/dJh6T3K/AVATAR-midtone-ux-instrgram.jpg" alt="Instructor" class="instructor-thumbnail" loading="lazy" />
                                        </div>
                                        <div class="bundle-content">
                                            <h3 class="bundle-title">Web Development Master Bundle</h3>
                                            <p class="bundle-description">
                                                Complete web development bundle covering frontend, backend, and full-stack development.
                                            </p>

                                            <div class="courses-preview">
                                                <div class="course-thumbnails">
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/640kJN2/c1.jpg" alt="Course 1" class="course-thumbnail" />
                                                        <div class="course-tooltip">The Complete Web Development Bootcamp</div>
                                                    </div>
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/GFhHTqZ/c2.jpg" alt="Course 2" class="course-thumbnail" />
                                                        <div class="course-tooltip">Advanced JavaScript Concepts</div>
                                                    </div>
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="Course 3" class="course-thumbnail" />
                                                        <div class="course-tooltip">React Native - The Practical Guide</div>
                                                    </div>
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/NKffPZQ/c4.jpg" alt="Course 4" class="course-thumbnail" />
                                                        <div class="course-tooltip">UI/UX Design Masterclass</div>
                                                    </div>
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/ss92kB8/c5.jpg" alt="Course 5" class="course-thumbnail" />
                                                        <div class="course-tooltip">Design Systems Workshop</div>
                                                    </div>
                                                </div>
                                                <button class="view-all-button" onClick={() => context.setbundlemodal(!context.bundlemodal)}>
                                                    View All
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div class="pricing">
                                                <div class="price-wrapper">
                                                    <span class="current-price">$499.99</span>
                                                    <span class="original-price">$899.99</span>
                                                </div>
                                                <div class="buy-button-container">
                                                    <button class="add-to-cart">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path fill="white" d="M22.5 16.14L23.92 6l-18.8-.81L4.92 4A4.43 4.43 0 002.51.8L.58 0 0 1.39l1.88.78a2.88 2.88 0 011.56 2.11l2.5 14.86a2.54 2.54 0 103.57 3h5.93a2.54 2.54 0 100-1.5H9.52a2.53 2.53 0 00-2.1-1.79l-.31-1.83 15.39-.88zm-4.65 4.21a1 1 0 11-.1 1.997 1 1 0 01.1-1.997zm4.36-12.92l-1 7.29-14.33.84-1.51-8.85 16.84.72zM8.14 21.4a1 1 0 11-2 0 1 1 0 012 0z" />
                                                        </svg>
                                                        Buy Now
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                            <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </button>
                                                    <div class="payment-plans-tooltip">
                                                        <div class="payment-plan">
                                                            <div class="plan-name">PAY ONCE</div>
                                                            <div class="plan-details">One-time payment of $499.99</div>
                                                        </div>
                                                        <div class="payment-plan">
                                                            <div class="plan-name">Silver Bundle Plan</div>
                                                            <div class="plan-details">5 payments of $110/month (Total: $550)</div>
                                                        </div>
                                                        <div class="payment-plan">
                                                            <div class="plan-name">Gold Bundle Plan</div>
                                                            <div class="plan-details">10 payments of $60/month (Total: $600)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="bundle-footer">
                                            <div class="stat">
                                                <div class="tooltip">Total Courses</div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                                                    <path fill="#4F4F4F" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                </svg>
                                                <span class="stat-value">12</span>
                                            </div>
                                            <div class="stat">


                                                <div class="tooltip">Total Students</div>
                                                <svg fill="none" viewBox="0 0 20 20">
                                                    <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                </svg>
                                                <span class="stat-value">15.2K</span>
                                            </div>
                                            <div class="stat">
                                                <div class="tooltip">Rating</div>
                                                <svg viewBox="0 0 16 15" class="star-icon">
                                                    <path fill="#13C4CC" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                </svg>
                                                <span class="stat-value">4.7</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bundle-card">
                                        <div class="bundle-image-container">
                                            <img src="https://i.ibb.co/sw4yS26/img1.jpg" alt="Bundle cover" class="bundle-image" loading="lazy" />
                                            <img src="https://i.ibb.co/NKp6WsG/AVATAR-Kostis-Kapelonis.png" alt="Instructor" class="instructor-thumbnail" loading="lazy" />
                                        </div>

                                        <div class="bundle-content">
                                            <h3 class="bundle-title">Web Development Master Bundle</h3>
                                            <p class="bundle-description">
                                                Complete web development bundle covering frontend, backend, and full-stack development.
                                            </p>

                                            <div class="courses-preview">
                                                <div class="course-thumbnails">
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/640kJN2/c1.jpg" alt="Course 1" class="course-thumbnail" />
                                                        <div class="course-tooltip">The Complete Web Development Bootcamp</div>
                                                    </div>
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/GFhHTqZ/c2.jpg" alt="Course 2" class="course-thumbnail" />
                                                        <div class="course-tooltip">Advanced JavaScript Concepts</div>
                                                    </div>
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="Course 3" class="course-thumbnail" />
                                                        <div class="course-tooltip">React Native - The Practical Guide</div>
                                                    </div>
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/NKffPZQ/c4.jpg" alt="Course 4" class="course-thumbnail" />
                                                        <div class="course-tooltip">UI/UX Design Masterclass</div>
                                                    </div>
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/ss92kB8/c5.jpg" alt="Course 5" class="course-thumbnail" />
                                                        <div class="course-tooltip">Design Systems Workshop</div>
                                                    </div>
                                                </div>
                                                <button class="view-all-button" onClick={() => context.setbundlemodal(!context.bundlemodal)}>
                                                    View All
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div class="pricing">
                                                <div class="price-wrapper">
                                                    <span class="current-price">$499.99</span>
                                                    <span class="original-price">$899.99</span>
                                                </div>
                                                <div class="buy-button-container">
                                                    <button class="add-to-cart">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path fill="white" d="M22.5 16.14L23.92 6l-18.8-.81L4.92 4A4.43 4.43 0 002.51.8L.58 0 0 1.39l1.88.78a2.88 2.88 0 011.56 2.11l2.5 14.86a2.54 2.54 0 103.57 3h5.93a2.54 2.54 0 100-1.5H9.52a2.53 2.53 0 00-2.1-1.79l-.31-1.83 15.39-.88zm-4.65 4.21a1 1 0 11-.1 1.997 1 1 0 01.1-1.997zm4.36-12.92l-1 7.29-14.33.84-1.51-8.85 16.84.72zM8.14 21.4a1 1 0 11-2 0 1 1 0 012 0z" />
                                                        </svg>
                                                        Buy Now
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                            <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </button>
                                                    <div class="payment-plans-tooltip">
                                                        <div class="payment-plan">
                                                            <div class="plan-name">PAY ONCE</div>
                                                            <div class="plan-details">One-time payment of $499.99</div>
                                                        </div>
                                                        <div class="payment-plan">
                                                            <div class="plan-name">Silver Bundle Plan</div>
                                                            <div class="plan-details">5 payments of $110/month (Total: $550)</div>
                                                        </div>
                                                        <div class="payment-plan">
                                                            <div class="plan-name">Gold Bundle Plan</div>
                                                            <div class="plan-details">10 payments of $60/month (Total: $600)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="bundle-footer">
                                            <div class="stat">
                                                <div class="tooltip">Total Courses</div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                                                    <path fill="#4F4F4F" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                </svg>
                                                <span class="stat-value">12</span>
                                            </div>
                                            <div class="stat">


                                                <div class="tooltip">Total Students</div>
                                                <svg fill="none" viewBox="0 0 20 20">
                                                    <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                </svg>
                                                <span class="stat-value">15.2K</span>
                                            </div>
                                            <div class="stat">
                                                <div class="tooltip">Rating</div>
                                                <svg viewBox="0 0 16 15" class="star-icon">
                                                    <path fill="#13C4CC" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                </svg>
                                                <span class="stat-value">4.7</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bundle-card">
                                        <div class="bundle-image-container">
                                            <img src="https://i.ibb.co/sw4yS26/img1.jpg" alt="Bundle cover" class="bundle-image" loading="lazy" />
                                            <img src="https://i.ibb.co/cF4gPr5/AVATAR-github-com-biowaffeln.png" alt="Instructor" class="instructor-thumbnail" loading="lazy" />
                                        </div>

                                        <div class="bundle-content">
                                            <h3 class="bundle-title">Web Development Master Bundle</h3>
                                            <p class="bundle-description">
                                                Complete web development bundle covering frontend, backend, and full-stack development.
                                            </p>

                                            <div class="courses-preview">
                                                <div class="course-thumbnails">
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/640kJN2/c1.jpg" alt="Course 1" class="course-thumbnail" />
                                                        <div class="course-tooltip">The Complete Web Development Bootcamp</div>
                                                    </div>
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/GFhHTqZ/c2.jpg" alt="Course 2" class="course-thumbnail" />
                                                        <div class="course-tooltip">Advanced JavaScript Concepts</div>
                                                    </div>
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="Course 3" class="course-thumbnail" />
                                                        <div class="course-tooltip">React Native - The Practical Guide</div>
                                                    </div>
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/NKffPZQ/c4.jpg" alt="Course 4" class="course-thumbnail" />
                                                        <div class="course-tooltip">UI/UX Design Masterclass</div>
                                                    </div>
                                                    <div class="course-thumbnail-container">
                                                        <img src="https://i.ibb.co/ss92kB8/c5.jpg" alt="Course 5" class="course-thumbnail" />
                                                        <div class="course-tooltip">Design Systems Workshop</div>
                                                    </div>
                                                </div>
                                                <button class="view-all-button" onClick={() => context.setbundlemodal(!context.bundlemodal)}>
                                                    View All
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div class="pricing">
                                                <div class="price-wrapper">
                                                    <span class="current-price">$499.99</span>
                                                    <span class="original-price">$899.99</span>
                                                </div>
                                                <div class="buy-button-container">
                                                    <button class="add-to-cart">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path fill="white" d="M22.5 16.14L23.92 6l-18.8-.81L4.92 4A4.43 4.43 0 002.51.8L.58 0 0 1.39l1.88.78a2.88 2.88 0 011.56 2.11l2.5 14.86a2.54 2.54 0 103.57 3h5.93a2.54 2.54 0 100-1.5H9.52a2.53 2.53 0 00-2.1-1.79l-.31-1.83 15.39-.88zm-4.65 4.21a1 1 0 11-.1 1.997 1 1 0 01.1-1.997zm4.36-12.92l-1 7.29-14.33.84-1.51-8.85 16.84.72zM8.14 21.4a1 1 0 11-2 0 1 1 0 012 0z" />
                                                        </svg>
                                                        Buy Now
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                            <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </button>
                                                    <div class="payment-plans-tooltip">
                                                        <div class="payment-plan">
                                                            <div class="plan-name">PAY ONCE</div>
                                                            <div class="plan-details">One-time payment of $499.99</div>
                                                        </div>
                                                        <div class="payment-plan">
                                                            <div class="plan-name">Silver Bundle Plan</div>
                                                            <div class="plan-details">5 payments of $110/month (Total: $550)</div>
                                                        </div>
                                                        <div class="payment-plan">
                                                            <div class="plan-name">Gold Bundle Plan</div>
                                                            <div class="plan-details">10 payments of $60/month (Total: $600)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="bundle-footer">
                                            <div class="stat">
                                                <div class="tooltip">Total Courses</div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                                                    <path fill="#4F4F4F" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                </svg>
                                                <span class="stat-value">12</span>
                                            </div>
                                            <div class="stat">


                                                <div class="tooltip">Total Students</div>
                                                <svg fill="none" viewBox="0 0 20 20">
                                                    <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                </svg>
                                                <span class="stat-value">15.2K</span>
                                            </div>
                                            <div class="stat">
                                                <div class="tooltip">Rating</div>
                                                <svg viewBox="0 0 16 15" class="star-icon">
                                                    <path fill="#13C4CC" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                </svg>
                                                <span class="stat-value">4.7</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {activeTab === 'Sessions' &&
                            <>
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 3fr))',
                                        gap: '20px',
                                    }}
                                >
                                    {displayedCourses.map((course) => (
                                        <div
                                            key={course.id}
                                            className="relative group w-100"
                                            style={{
                                                background: '#fff',
                                                borderRadius: '10px',
                                                width: '100%',
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                                overflow: 'hidden',
                                            }}
                                        >

                                            {/* Image */}
                                            <img
                                                src={course.img}
                                                alt={course.title}
                                                style={{
                                                    width: '100%',
                                                    height: '150px',
                                                    objectFit: 'cover',
                                                }}
                                            />

                                            <div style={{ padding: '15px', marginTop: '-50px', zIndex: '100', position: 'relative' }}>
                                                <Image
                                                    src={course.profileImg}
                                                    alt={course.title}
                                                    style={{
                                                        width: '65px',
                                                        border: '3px solid #fff',
                                                        borderRadius: '15px',
                                                        height: '65px',
                                                        objectFit: 'cover',
                                                    }}
                                                    className="mb-2"
                                                />
                                                <h4 className="h-8" style={{ fontSize: '15px', marginBottom: '10px', fontWeight: 'bold' }}>{course.title}</h4>
                                                <p style={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }}>
                                                    {course.author}
                                                </p>
                                                <p style={{ fontSize: '15.5px', color: '#646360' }}>{course.description.slice(0, 70) + ' ...'}</p>
                                                <button className="text-white w-100 py-2.5 rounded-lg text-sm mt-3 mb-4" style={{ background: '#13C4CC' }}>Book Now</button>
                                            </div>
                                            <div
                                                style={{
                                                    background: '#F8F9FB',
                                                    padding: '10px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <div className="tooltip-item">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 32 32">
                                                        <path fill="#333333" d="M9.15646 7.75385C9.54698 8.14438 9.54696 8.77755 9.15643 9.16806C8.25874 10.0657 7.54666 11.1314 7.06083 12.3042C6.575 13.4771 6.32495 14.7341 6.32495 16.0036C6.32495 17.2731 6.575 18.5301 7.06083 19.703C7.54666 20.8758 8.25874 21.9415 9.15643 22.8391C9.54696 23.2297 9.54698 23.8628 9.15646 24.2534C8.76595 24.6439 8.13279 24.6439 7.74225 24.2534C6.65884 23.17 5.79942 21.8839 5.21308 20.4684C4.62674 19.0529 4.32495 17.5357 4.32495 16.0036C4.32495 14.4715 4.62674 12.9543 5.21308 11.5388C5.79942 10.1233 6.65884 8.83717 7.74225 7.75381C8.13279 7.3633 8.76595 7.36331 9.15646 7.75385ZM22.8355 7.75385C23.2261 7.36331 23.8592 7.3633 24.2498 7.75381C25.3332 8.83717 26.1926 10.1233 26.7789 11.5388C27.3653 12.9543 27.6671 14.4715 27.6671 16.0036C27.6671 17.5357 27.3653 19.0529 26.7789 20.4684C26.1926 21.8839 25.3332 23.17 24.2498 24.2534C23.8592 24.6439 23.2261 24.6439 22.8355 24.2534C22.445 23.8628 22.445 23.2297 22.8356 22.8391C23.7333 21.9415 24.4454 20.8758 24.9312 19.703C25.417 18.5301 25.6671 17.2731 25.6671 16.0036C25.6671 14.7341 25.417 13.4771 24.9312 12.3042C24.4454 11.1314 23.7333 10.0657 22.8356 9.16806C22.445 8.77755 22.445 8.14438 22.8355 7.75385ZM12.931 11.5257C13.3216 11.9162 13.3217 12.5493 12.9312 12.9399C12.1188 13.7525 11.6625 14.8545 11.6625 16.0036C11.6625 17.1526 12.1188 18.2546 12.9312 19.0672C13.3217 19.4578 13.3216 20.091 12.931 20.4815C12.5404 20.8719 11.9073 20.8718 11.5168 20.4812C10.3295 19.2936 9.66248 17.683 9.66248 16.0036C9.66248 14.3242 10.3295 12.7136 11.5168 11.5259C11.9073 11.1353 12.5404 11.1352 12.931 11.5257ZM19.0637 11.5257C19.4543 11.1352 20.0874 11.1353 20.4779 11.5259C21.6652 12.7136 22.3322 14.3242 22.3322 16.0036C22.3322 17.683 21.6652 19.2936 20.4779 20.4812C20.0874 20.8718 19.4543 20.8719 19.0637 20.4815C18.6731 20.091 18.673 19.4578 19.0635 19.0672C19.8758 18.2546 20.3322 17.1526 20.3322 16.0036C20.3322 14.8545 19.8758 13.7525 19.0635 12.9399C18.673 12.5493 18.6731 11.9162 19.0637 11.5257ZM16 15.0036C16.5523 15.0036 17 15.4513 17 16.0036V16.0169C17 16.5692 16.5523 17.0169 16 17.0169C15.4477 17.0169 15 16.5692 15 16.0169V16.0036C15 15.4513 15.4477 15.0036 16 15.0036Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    <span className="text-sm" style={{ fontWeight: '500' }}>{course.type}</span>
                                                    <span className="tooltip">{course.type} session</span>
                                                </div>
                                                <div className="tooltip-item">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                        <path fill="#4F4F4F" d="M5.64124 3.64124C6.53204 2.75044 7.74022 2.25 9 2.25C10.2598 2.25 11.468 2.75044 12.3588 3.64124C13.2496 4.53204 13.75 5.74022 13.75 7C13.75 8.25978 13.2496 9.46796 12.3588 10.3588C11.468 11.2496 10.2598 11.75 9 11.75C7.74022 11.75 6.53204 11.2496 5.64124 10.3588C4.75044 9.46796 4.25 8.25978 4.25 7C4.25 5.74022 4.75044 4.53204 5.64124 3.64124ZM9 3.75C8.13805 3.75 7.3114 4.09241 6.7019 4.7019C6.09241 5.3114 5.75 6.13805 5.75 7C5.75 7.86195 6.09241 8.6886 6.7019 9.2981C7.3114 9.90759 8.13805 10.25 9 10.25C9.86195 10.25 10.6886 9.90759 11.2981 9.2981C11.9076 8.6886 12.25 7.86195 12.25 7C12.25 6.13805 11.9076 5.3114 11.2981 4.7019C10.6886 4.09241 9.86195 3.75 9 3.75ZM15.2734 2.94385C15.3762 2.54258 15.7848 2.30058 16.186 2.40332C17.2078 2.66493 18.1134 3.25915 18.7601 4.09231C19.4068 4.92547 19.7578 5.95018 19.7578 7.00488C19.7578 8.05959 19.4068 9.08429 18.7601 9.91745C18.1134 10.7506 17.2078 11.3448 16.186 11.6064C15.7848 11.7092 15.3762 11.4672 15.2734 11.0659C15.1707 10.6646 15.4127 10.2561 15.814 10.1533C16.5131 9.97433 17.1327 9.56775 17.5752 8.99769C18.0177 8.42763 18.2578 7.72652 18.2578 7.00488C18.2578 6.28325 18.0177 5.58213 17.5752 5.01207C17.1327 4.44201 16.5131 4.03544 15.814 3.85645C15.4127 3.7537 15.1707 3.34512 15.2734 2.94385ZM7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H11C12.2598 14.25 13.468 14.7504 14.3588 15.6412C15.2496 16.532 15.75 17.7402 15.75 19V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V19C14.25 18.138 13.9076 17.3114 13.2981 16.7019C12.6886 16.0924 11.862 15.75 11 15.75H7ZM17.2738 14.9624C17.3774 14.5614 17.7864 14.3202 18.1875 14.4237C19.2026 14.6858 20.1025 15.2763 20.7469 16.1033C21.3913 16.9303 21.744 17.9472 21.75 18.9956L21.75 18.9999L21.75 20.9999C21.75 21.4141 21.4142 21.7499 21 21.7499C20.5858 21.7499 20.25 21.4141 20.25 20.9999V19.002C20.2454 18.2855 20.0041 17.5905 19.5637 17.0253C19.1228 16.4595 18.5071 16.0554 17.8125 15.8761C17.4115 15.7725 17.1703 15.3635 17.2738 14.9624Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    <span className="text-sm" style={{ fontWeight: '500' }}>{course.members}</span>
                                                    <span className="tooltip">Member Count</span>
                                                </div>
                                                <div className="tooltip-item">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                        style={{
                                                            marginBottom: '2px',
                                                        }}
                                                    >
                                                        <path
                                                            fill="#2FB3BF"
                                                            d="M3.612 15.443c-.396.199-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.33-.314-.158-.888.283-.95l4.898-.696 2.067-4.125c.197-.39.73-.39.927 0l2.067 4.125 4.898.696c.441.062.612.636.282.95l-3.523 3.356.83 4.73c.078.443-.35.791-.746.592L8 13.187l-4.389 2.256z"
                                                        />
                                                    </svg>
                                                    <span>
                                                        {course.rating}{' '}
                                                        <span style={{ color: 'gray' }}>{course.reviews}</span>
                                                    </span>
                                                    <span className="tooltip">{course.rating} Rating</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="cursor-pointer py-2 fw-bold" onClick={handleToggleViewMore} style={{ textAlign: "center", marginTop: "20px", background: '#F5F5F5', zIndex: '100' }}>
                                    <button
                                    >
                                        {!viewMoreActive2 ? <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                stroke="2px"
                                            />
                                        </svg>
                                            : <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1.646 11.354a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708 0z"
                                                />
                                            </svg>
                                        }
                                    </button>
                                </div>
                            </>
                        }
                        {activeTab === 'Communities' &&
                            <>
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 3fr))',
                                        gap: '20px',
                                    }}
                                >
                                    {displayedCommunities.map((course) => (
                                        <div
                                            key={course.id}
                                            className="relative group w-100"
                                            style={{
                                                background: '#fff',
                                                borderRadius: '10px',
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                                overflow: 'hidden',
                                            }}
                                        >

                                            {/* Image */}
                                            <img
                                                src={course.img}
                                                alt={course.title}
                                                style={{
                                                    width: '100%',
                                                    height: '150px',
                                                    objectFit: 'cover',
                                                }}
                                            />

                                            <div style={{ padding: '15px', zIndex: '100', position: 'relative' }}>
                                                <h4 className="h-9 mt-2 mb-3" style={{ fontSize: '16px', marginBottom: '10px', fontWeight: 'bold' }}>{course.title}</h4>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Image
                                                        src={course.profileImg}
                                                        alt={course.title}
                                                        style={{
                                                            width: '50px',
                                                            borderRadius: '10px',
                                                            height: '50px',
                                                            objectFit: 'cover',
                                                        }}
                                                    />
                                                    <div className="flex flex-col gap-1.5">
                                                        <h3 style={{ fontSize: '14.5px', fontWeight: '600' }}>
                                                            {course.author}
                                                        </h3>
                                                        <p style={{ fontSize: '12px' }}>{course.role}</p>
                                                    </div>
                                                </div>
                                                <p style={{ fontSize: '15.5px', color: '#646360' }}>{course.description.slice(0, 93) + ' ...'}</p>
                                                <button className="text-white w-100 py-2.5 rounded-lg text-sm mt-3 mb-4" style={{ background: '#13C4CC' }}>Join Now</button>
                                            </div>
                                            <div
                                                style={{
                                                    background: '#F8F9FB',
                                                    padding: '10px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <div className="tooltip-item">
                                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                        <path fill="#343332" d="M10.3031 4.71338C10.638 4.71338 10.9096 4.98493 10.9096 5.3199V5.62947C11.7726 5.74654 12.5494 6.11208 13.0363 6.67319C13.2559 6.92617 13.2288 7.30925 12.9758 7.52881C12.7229 7.74837 12.3398 7.72128 12.1202 7.4683C11.8892 7.20209 11.4627 6.96219 10.9096 6.85747V9.13097C11.5063 9.2117 12.0549 9.41056 12.4966 9.70499C13.0803 10.0941 13.5358 10.6984 13.5358 11.4478C13.5358 12.1973 13.0803 12.8015 12.4966 13.1907C12.0549 13.4851 11.5063 13.684 10.9096 13.7647V14.0741C10.9096 14.4091 10.638 14.6806 10.3031 14.6806C9.9681 14.6806 9.69656 14.4091 9.69656 14.0741V13.7645C8.83357 13.6474 8.0568 13.2819 7.5698 12.7208C7.35024 12.4678 7.37733 12.0847 7.63031 11.8652C7.88329 11.6456 8.26636 11.6727 8.48592 11.9257C8.71697 12.1919 9.14345 12.4318 9.69656 12.5365V10.263C9.09982 10.1823 8.55128 9.98342 8.10959 9.68899C7.52581 9.29985 7.07031 8.69563 7.07031 7.94614C7.07031 7.19665 7.52581 6.59244 8.10959 6.2033C8.55128 5.90886 9.09982 5.71 9.69656 5.62928V5.3199C9.69656 4.98493 9.9681 4.71338 10.3031 4.71338ZM9.69656 6.85766C9.33347 6.92644 9.02055 7.0539 8.78241 7.21264C8.4157 7.45709 8.28336 7.7283 8.28336 7.94614C8.28336 8.16399 8.4157 8.4352 8.78241 8.67964C9.02055 8.83839 9.33347 8.96585 9.69656 9.03463V6.85766ZM10.9096 10.3594V12.5363C11.2727 12.4675 11.5856 12.3401 11.8237 12.1813C12.1905 11.9369 12.3228 11.6657 12.3228 11.4478C12.3228 11.23 12.1905 10.9588 11.8237 10.7143C11.5856 10.5556 11.2727 10.4281 10.9096 10.3594Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                        <path fill="#343332" d="M10.3399 2.51392C6.38177 2.51392 3.1731 5.72259 3.1731 9.6807C3.1731 13.6388 6.38177 16.8475 10.3399 16.8475C14.298 16.8475 17.5067 13.6388 17.5067 9.6807C17.5067 5.72259 14.298 2.51392 10.3399 2.51392ZM1.9231 9.6807C1.9231 5.03224 5.69142 1.26392 10.3399 1.26392C14.9883 1.26392 18.7567 5.03224 18.7567 9.6807C18.7567 14.3292 14.9883 18.0975 10.3399 18.0975C5.69142 18.0975 1.9231 14.3292 1.9231 9.6807Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    <span className="text-sm" style={{ fontWeight: '500' }}>{course.price.slice(1)}</span>
                                                    <span className="tooltip">{course.price}</span>
                                                </div>
                                                <div className="tooltip-item">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                        <path fill="#4F4F4F" d="M5.64124 3.64124C6.53204 2.75044 7.74022 2.25 9 2.25C10.2598 2.25 11.468 2.75044 12.3588 3.64124C13.2496 4.53204 13.75 5.74022 13.75 7C13.75 8.25978 13.2496 9.46796 12.3588 10.3588C11.468 11.2496 10.2598 11.75 9 11.75C7.74022 11.75 6.53204 11.2496 5.64124 10.3588C4.75044 9.46796 4.25 8.25978 4.25 7C4.25 5.74022 4.75044 4.53204 5.64124 3.64124ZM9 3.75C8.13805 3.75 7.3114 4.09241 6.7019 4.7019C6.09241 5.3114 5.75 6.13805 5.75 7C5.75 7.86195 6.09241 8.6886 6.7019 9.2981C7.3114 9.90759 8.13805 10.25 9 10.25C9.86195 10.25 10.6886 9.90759 11.2981 9.2981C11.9076 8.6886 12.25 7.86195 12.25 7C12.25 6.13805 11.9076 5.3114 11.2981 4.7019C10.6886 4.09241 9.86195 3.75 9 3.75ZM15.2734 2.94385C15.3762 2.54258 15.7848 2.30058 16.186 2.40332C17.2078 2.66493 18.1134 3.25915 18.7601 4.09231C19.4068 4.92547 19.7578 5.95018 19.7578 7.00488C19.7578 8.05959 19.4068 9.08429 18.7601 9.91745C18.1134 10.7506 17.2078 11.3448 16.186 11.6064C15.7848 11.7092 15.3762 11.4672 15.2734 11.0659C15.1707 10.6646 15.4127 10.2561 15.814 10.1533C16.5131 9.97433 17.1327 9.56775 17.5752 8.99769C18.0177 8.42763 18.2578 7.72652 18.2578 7.00488C18.2578 6.28325 18.0177 5.58213 17.5752 5.01207C17.1327 4.44201 16.5131 4.03544 15.814 3.85645C15.4127 3.7537 15.1707 3.34512 15.2734 2.94385ZM7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H11C12.2598 14.25 13.468 14.7504 14.3588 15.6412C15.2496 16.532 15.75 17.7402 15.75 19V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V19C14.25 18.138 13.9076 17.3114 13.2981 16.7019C12.6886 16.0924 11.862 15.75 11 15.75H7ZM17.2738 14.9624C17.3774 14.5614 17.7864 14.3202 18.1875 14.4237C19.2026 14.6858 20.1025 15.2763 20.7469 16.1033C21.3913 16.9303 21.744 17.9472 21.75 18.9956L21.75 18.9999L21.75 20.9999C21.75 21.4141 21.4142 21.7499 21 21.7499C20.5858 21.7499 20.25 21.4141 20.25 20.9999V19.002C20.2454 18.2855 20.0041 17.5905 19.5637 17.0253C19.1228 16.4595 18.5071 16.0554 17.8125 15.8761C17.4115 15.7725 17.1703 15.3635 17.2738 14.9624Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    <span className="text-sm" style={{ fontWeight: '500' }}>{course.members}</span>
                                                    <span className="tooltip">Member Count</span>
                                                </div>
                                                <div className="tooltip-item">
                                                    <svg className="w-4 h-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                        <path fill="#4F4F4F" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                        <path fill="#4F4F4F" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    <span>
                                                        {course.rating}{' '}
                                                        <span className="text-sm" style={{ color: '#000', fontWeight: '500' }}>{course.posts}</span>
                                                    </span>
                                                    <span className="tooltip">Post Count</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="cursor-pointer py-2 fw-bold" onClick={handleToggleViewMore2} style={{ textAlign: "center", marginTop: "20px", background: '#F5F5F5', zIndex: '100' }}>
                                    <button
                                    >
                                        {!viewMoreActive3 ? <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                stroke="2px"
                                            />
                                        </svg>
                                            : <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1.646 11.354a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708 0z"
                                                />
                                            </svg>
                                        }
                                    </button>
                                </div>
                            </>
                        }
                        {activeTab === 'Bookmarks' &&
                            <div class="bookmarks-tab">
                                <div class="courses-grid">
                                    {courses.map((course) => createCourseCard(course))}
                                </div>
                            </div>
                        }
                    </div>

                    <aside className="profile-sidebar">
                        <div className="sidebar-section">
                            <h2 className="section-title">Published Content</h2>
                            <div className="content-list">
                                <div className="content-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                                        <path fill="#4F4F4F" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span className="content-text">25 Courses</span>
                                </div>
                                <div className="content-item">
                                    <svg fill="none" viewBox="0 0 24 24">
                                        <path fill="#4F4F4F" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span className="content-text">9 Sessions</span>
                                </div>
                                <div className="content-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path fill="#4F4F4F" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        <path fill="#4F4F4F" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span className="content-text">5 Communities</span>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-section">
                            <h2 className="section-title">Awards</h2>
                            <div className="awards-grid">
                                <div className="award-badge">
                                    <svg viewBox="0 0 33 36" fill="none" height="36" width="33" xmlns="http://www.w3.org/2000/svg"><path d="M0 12.847v10.306c0 2.772 1.464 5.318 3.878 6.734l8.662 5.05a7.91 7.91 0 0 0 7.92 0l8.662-5.05A7.81 7.81 0 0 0 33 23.153V12.847c0-2.772-1.464-5.317-3.878-6.734l-8.662-5.05a7.91 7.91 0 0 0-7.92 0l-8.662 5.05A7.81 7.81 0 0 0 0 12.847" fill="#03EF62"></path><g transform="translate(7 8)"><g clip-path="url(#TopProductSmall_svg__a)" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round" stroke="#fff"><path d="M7.125 16.625h4.75M9.5 12.294v4.33M4.75 9.5h-.754c-.64 0-1.254-.286-1.706-.795a2.9 2.9 0 0 1-.707-1.92V5.43c0-.18.064-.353.177-.48a.57.57 0 0 1 .426-.199H4.6M14.25 9.5h.754c.64 0 1.254-.286 1.706-.795.453-.509.707-1.2.707-1.92V5.43a.72.72 0 0 0-.177-.48.57.57 0 0 0-.426-.199H14.4"></path><path d="M4.75 3.167h9.5v4.408c0 2.773-2.095 5.07-4.714 5.092a4.5 4.5 0 0 1-1.829-.372 4.7 4.7 0 0 1-1.553-1.088 5.1 5.1 0 0 1-1.039-1.636 5.3 5.3 0 0 1-.365-1.933z" fill="#fff"></path></g><defs><clipPath id="TopProductSmall_svg__a"><path d="M0 0h19v19H0z" fill="#fff"></path></clipPath></defs></g></svg>
                                    <div className="award-tooltip">Top Instructor</div>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-section">
                            <h2 className="section-title">Social & Links</h2>
                            <div className="social-icons">
                                <a href="#" className="social-icon">
                                    <svg viewBox="0 0 80 80"><path fill="#4F4F4F" stroke-linejoin="miter" clip-rule="unset" fill-rule="unset" d="M40 7.5c-17.949 0-32.5 14.551-32.5 32.5s14.551 32.5 32.5 32.5c17.949 0 32.5-14.551 32.5-32.5v0c-0.019-17.942-14.558-32.481-32.498-32.5h-0.002zM66.033 48.767h-11.567c0.565-2.632 0.893-5.659 0.9-8.761v-0.005c-0.018-2.745-0.272-5.418-0.742-8.016l0.042 0.282h11.033c0.095 0.009 0.205 0.014 0.317 0.014s0.222-0.005 0.331-0.015l-0.014 0.001c0.733 2.312 1.159 4.972 1.167 7.73v0.004c-0.008 3.141-0.544 6.154-1.525 8.958l0.058-0.192zM30.567 48.767c-0.593-2.621-0.933-5.631-0.933-8.72 0-0.016 0-0.033 0-0.049v0.003c0.019-2.747 0.297-5.417 0.811-8.002l-0.045 0.269h19.2c0.47 2.316 0.748 4.986 0.767 7.718l0 0.015c-0.002 3.083-0.341 6.086-0.985 8.974l0.051-0.274zM48.033 53.767c-1.925 4.893-4.646 9.081-8.045 12.612l0.012-0.012c-3.394-3.537-6.116-7.748-7.944-12.409l-0.089-0.258zM13.967 48.767c-0.922-2.613-1.459-5.626-1.467-8.763v-0.004c-0-0.019-0-0.042-0-0.065 0-2.784 0.427-5.468 1.218-7.991l-0.051 0.189c0.095 0.009 0.205 0.014 0.317 0.014s0.222-0.005 0.331-0.015l-0.014 0.001h11.033c-0.436 2.36-0.69 5.080-0.7 7.858v0.008c0.012 3.087 0.339 6.090 0.951 8.988l-0.051-0.288h-11.233zM31.7 27.267c1.868-5.306 4.699-9.854 8.314-13.649l-0.014 0.015c3.601 3.779 6.432 8.328 8.219 13.37l0.081 0.263zM64.333 27.267h-10.833c-1.62-5.343-4.094-9.985-7.299-14.019l0.066 0.086c7.891 1.89 14.333 6.979 17.995 13.787l0.072 0.147zM33.733 13.333c-3.079 3.954-5.498 8.597-6.992 13.638l-0.075 0.295h-11c3.734-6.954 10.176-12.044 17.879-13.895l0.188-0.038zM16.167 53.7h10.5c1.699 4.974 4.111 9.279 7.162 13.045l-0.062-0.079c-7.548-1.804-13.765-6.507-17.53-12.839l-0.070-0.127zM46.167 66.767c3.010-3.719 5.444-8.055 7.076-12.767l0.090-0.3h10.6c-3.843 6.478-10.089 11.187-17.479 12.929l-0.187 0.037z"></path></svg>
                                    <div className="stat-tooltip">Website</div>
                                </a>
                                <a href="#" className="social-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path fill="currentColor" d="M14.0738 3.75H16.2461L11.5003 9.04487L17.0834 16.25H12.7119L9.28791 11.8801L5.37012 16.25H3.1965L8.27267 10.5865L2.91675 3.75H7.39928L10.4942 7.74423L14.0738 3.75Z" />
                                    </svg>
                                    <div className="stat-tooltip">Twitter (X)</div>
                                </a>
                                <a href="#" className="social-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path fill="#4F4F4F" d="M9.11194 3.27845C10.0106 2.37983 11.2293 1.875 12.5002 1.875H15.0002C15.3453 1.875 15.6252 2.15482 15.6252 2.5V5.83333C15.6252 6.17851 15.3453 6.45833 15.0002 6.45833H12.5002C12.4449 6.45833 12.3919 6.48028 12.3528 6.51935C12.3138 6.55842 12.2918 6.61141 12.2918 6.66667V7.70833H15.0002C15.1926 7.70833 15.3743 7.797 15.4928 7.9487C15.6112 8.1004 15.6532 8.2982 15.6065 8.48492L14.7732 11.8183C14.7036 12.0965 14.4536 12.2917 14.1668 12.2917H12.2918V17.5C12.2918 17.8452 12.012 18.125 11.6668 18.125H8.3335C7.98832 18.125 7.7085 17.8452 7.7085 17.5V12.2917H5.8335C5.48832 12.2917 5.2085 12.0118 5.2085 11.6667V8.33333C5.2085 7.98816 5.48832 7.70833 5.8335 7.70833H7.7085V6.66667C7.7085 5.39584 8.21333 4.17706 9.11194 3.27845ZM12.5002 3.125C11.5609 3.125 10.66 3.49814 9.99583 4.16233C9.33164 4.82652 8.9585 5.72736 8.9585 6.66667V8.33333C8.9585 8.67851 8.67867 8.95833 8.3335 8.95833H6.4585V11.0417H8.3335C8.67867 11.0417 8.9585 11.3215 8.9585 11.6667V16.875H11.0418V11.6667C11.0418 11.3215 11.3217 11.0417 11.6668 11.0417H13.6788L14.1997 8.95833H11.6668C11.3217 8.95833 11.0418 8.67851 11.0418 8.33333V6.66667C11.0418 6.27989 11.1955 5.90896 11.469 5.63547C11.7425 5.36198 12.1134 5.20833 12.5002 5.20833H14.3752V3.125H12.5002Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <div className="stat-tooltip">Facebook</div>
                                </a>
                                <a href="#" className="social-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path fill="#4F4F4F" d="M4.99992 3.95834C4.42462 3.95834 3.95825 4.42471 3.95825 5.00001V15C3.95825 15.5753 4.42462 16.0417 4.99992 16.0417H14.9999C15.5752 16.0417 16.0416 15.5753 16.0416 15V5.00001C16.0416 4.42471 15.5752 3.95834 14.9999 3.95834H4.99992ZM2.70825 5.00001C2.70825 3.73436 3.73427 2.70834 4.99992 2.70834H14.9999C16.2656 2.70834 17.2916 3.73436 17.2916 5.00001V15C17.2916 16.2657 16.2656 17.2917 14.9999 17.2917H4.99992C3.73427 17.2917 2.70825 16.2657 2.70825 15V5.00001ZM6.66659 6.04168C7.01176 6.04168 7.29158 6.3215 7.29158 6.66668V6.67501C7.29158 7.02019 7.01176 7.30001 6.66659 7.30001C6.32141 7.30001 6.04159 7.02019 6.04159 6.67501V6.66668C6.04159 6.3215 6.32141 6.04168 6.66659 6.04168ZM6.66659 8.54168C7.01176 8.54168 7.29158 8.8215 7.29158 9.16668V13.3333C7.29158 13.6785 7.01176 13.9583 6.66659 13.9583C6.32141 13.9583 6.04159 13.6785 6.04159 13.3333V9.16668C6.04159 8.8215 6.32141 8.54168 6.66659 8.54168ZM10.5337 8.8413C10.4239 8.66161 10.2259 8.54168 9.99992 8.54168C9.65474 8.54168 9.37492 8.8215 9.37492 9.16668V13.3333C9.37492 13.6785 9.65474 13.9583 9.99992 13.9583C10.3451 13.9583 10.6249 13.6785 10.6249 13.3333V10.8333C10.6249 10.5571 10.7347 10.2921 10.93 10.0968C11.1254 9.90142 11.3903 9.79168 11.6666 9.79168C11.9429 9.79168 12.2078 9.90142 12.4032 10.0968C12.5985 10.2921 12.7083 10.5571 12.7083 10.8333V13.3333C12.7083 13.6785 12.9881 13.9583 13.3333 13.9583C13.6784 13.9583 13.9583 13.6785 13.9583 13.3333V10.8333C13.9583 10.2256 13.7168 9.64266 13.287 9.21289C12.8573 8.78312 12.2744 8.54168 11.6666 8.54168C11.2659 8.54168 10.876 8.64663 10.5337 8.8413Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <div className="stat-tooltip">LinkedIn</div>
                                </a>
                            </div>
                        </div>

                        <div className="sidebar-section">

                            <h2 className="section-title">
                                Followers
                                <div className="follow-count cursor-pointer" onClick={() => context.setinstructorModal(!context.instructorModal)}>111</div>
                            </h2>
                            <div className="avatars-grid cursor-pointer">
                                <img onClick={() => setincludedTooltip(!includedTooltip)} src="https://i.ibb.co/87nXCrv/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Follower" className="avatar" />
                                <img onClick={() => setincludedTooltip(!includedTooltip)} src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Follower" className="avatar" />
                                <img onClick={() => setincludedTooltip(!includedTooltip)} src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Follower" className="avatar" />
                                <img onClick={() => setincludedTooltip(!includedTooltip)} src="https://i.ibb.co/87nXCrv/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Follower" className="avatar" />
                                <img onClick={() => setincludedTooltip(!includedTooltip)} src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Follower" className="avatar" />
                                <img onClick={() => setincludedTooltip(!includedTooltip)} src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Follower" className="avatar" />
                                <img onClick={() => setincludedTooltip(!includedTooltip)} src="https://i.ibb.co/87nXCrv/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Follower" className="avatar" />
                            </div>
                            <a onClick={() => context.setinstructorModal(!context.instructorModal)} href="#" className="more-followers">+97 followers</a>
                        </div>
                        <div className="sidebar-section">

                            <h2 className="section-title">
                                Following
                                <div className="follow-count cursor-pointer" onClick={() => context.setinstructorModal(!context.instructorModal)}>98</div>
                            </h2>
                            <div className="avatars-grid cursor-pointer">
                                <img onClick={() => setincludedTooltip(!includedTooltip)} src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Following" className="avatar" />
                                <img onClick={() => setincludedTooltip(!includedTooltip)} src="https://i.ibb.co/87nXCrv/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Following" className="avatar" />
                                <img onClick={() => setincludedTooltip(!includedTooltip)} src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Following" className="avatar" />
                                <img onClick={() => setincludedTooltip(!includedTooltip)} src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Following" className="avatar" />
                                <img onClick={() => setincludedTooltip(!includedTooltip)} src="https://i.ibb.co/87nXCrv/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Following" className="avatar" />
                                <img onClick={() => setincludedTooltip(!includedTooltip)} src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Following" className="avatar" />
                                <img onClick={() => setincludedTooltip(!includedTooltip)} src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Following" className="avatar" />
                            </div>
                            <a href="#" onClick={() => context.setinstructorModal(!context.instructorModal)} className="more-followers">+93 following</a>
                        </div>

                        <div className="sidebar-section">
                            <h2 className="section-title">About</h2>
                            <p className="about-text">
                                Experienced chemistry instructor with over 15 years of teaching experience.
                                Specializing in inorganic chemistry and molecular structures.
                                Passionate about making complex concepts accessible to students of all levels.
                                With a track record of mentoring over 100 percentile achievers and a dedicated
                                following of 90K+ students, I continue to innovate in chemistry education.
                            </p>
                            <div className="show-more">
                                SHOW MORE
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                        </div>
                    </aside>
                    {includedTooltip &&
                        <div className='author-tooltip modal-overlay' onClick={() => setincludedTooltip(false)}>
                            <div class="author-card" onClick={(e) => e.stopPropagation()}>
                                <div class="author-header">
                                    <div class="author-info">
                                        <h2 class="author-name">Jose Portilla</h2>
                                        <p class="author-description">Lead Data Science Instructor and consultant with expertise in Python, Machine Learning, and Web Development. Teaching over 1 million students worldwide.</p>
                                    </div>
                                    <img src="https://i.ibb.co/446B0ZT/AVATAR-laurentfa.png" alt="Jose Portilla" class="author-avatar" />
                                </div>

                                <div class="action-container">
                                    <button class="view-profile-btn" style={{ background: '#14aff1' }}>View Profile</button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="profile-icon">
                                        <path fill="#4F4F4F" d="M5.64124 3.64124C6.53204 2.75044 7.74022 2.25 9 2.25C10.2598 2.25 11.468 2.75044 12.3588 3.64124C13.2496 4.53204 13.75 5.74022 13.75 7C13.75 8.25978 13.2496 9.46796 12.3588 10.3588C11.468 11.2496 10.2598 11.75 9 11.75C7.74022 11.75 6.53204 11.2496 5.64124 10.3588C4.75044 9.46796 4.25 8.25978 4.25 7C4.25 5.74022 4.75044 4.53204 5.64124 3.64124ZM9 3.75C8.13805 3.75 7.3114 4.09241 6.7019 4.7019C6.09241 5.3114 5.75 6.13805 5.75 7C5.75 7.86195 6.09241 8.6886 6.7019 9.2981C7.3114 9.90759 8.13805 10.25 9 10.25C9.86195 10.25 10.6886 9.90759 11.2981 9.2981C11.9076 8.6886 12.25 7.86195 12.25 7C12.25 6.13805 11.9076 5.3114 11.2981 4.7019C10.6886 4.09241 9.86195 3.75 9 3.75ZM15.2734 2.94385C15.3762 2.54258 15.7848 2.30058 16.186 2.40332C17.2078 2.66493 18.1134 3.25915 18.7601 4.09231C19.4068 4.92547 19.7578 5.95018 19.7578 7.00488C19.7578 8.05959 19.4068 9.08429 18.7601 9.91745C18.1134 10.7506 17.2078 11.3448 16.186 11.6064C15.7848 11.7092 15.3762 11.4672 15.2734 11.0659C15.1707 10.6646 15.4127 10.2561 15.814 10.1533C16.5131 9.97433 17.1327 9.56775 17.5752 8.99769C18.0177 8.42763 18.2578 7.72652 18.2578 7.00488C18.2578 6.28324 18.0177 5.58213 17.5752 5.01207C17.1327 4.44201 16.5131 4.03544 15.814 3.85645C15.4127 3.7537 15.1707 3.34512 15.2734 2.94385ZM7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H10C10.4142 14.25 10.75 14.5858 10.75 15C10.75 15.4142 10.4142 15.75 10 15.75H7Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        <path fill="#4F4F4F" d="M16.4825 13.0684C16.7409 13.0684 16.9811 13.2014 17.1182 13.4205L18.3027 15.3131L20.4686 15.8547C20.7194 15.9174 20.9201 16.1047 21 16.3505C21.0799 16.5963 21.0276 16.8659 20.8616 17.064L19.4276 18.7753L19.5818 21.0026C19.5997 21.2604 19.4835 21.5093 19.2745 21.6612C19.0654 21.8131 18.7928 21.8466 18.5531 21.75L16.4825 20.915L14.4118 21.75C14.1721 21.8466 13.8996 21.8131 13.6905 21.6612C13.4814 21.5093 13.3653 21.2604 13.3831 21.0026L13.5374 18.7753L12.1034 17.064C11.9374 16.8659 11.8851 16.5963 11.965 16.3505C12.0448 16.1047 12.2456 15.9174 12.4963 15.8547L14.6623 15.3131L15.8467 13.4205C15.9838 13.2014 16.224 13.0684 16.4825 13.0684ZM16.4825 15.2321L15.7734 16.3652C15.6705 16.5297 15.5078 16.6479 15.3196 16.6949L14.0228 17.0192L14.8813 18.0437C15.0059 18.1924 15.0681 18.3836 15.0547 18.5772L14.9623 19.9107L16.202 19.4108C16.3819 19.3382 16.583 19.3382 16.763 19.4108L18.0026 19.9107L17.9103 18.5772C17.8969 18.3836 17.959 18.1924 18.0836 18.0437L18.9421 17.0192L17.6454 16.6949C17.4572 16.6479 17.2945 16.5297 17.1916 16.3652L16.4825 15.2321Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                </div>

                                <div class="divider"></div>
                                <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-5">
                                    {stats.map((stat) => (
                                        <div key={stat.id} className="flex items-center space-x-4 px-2 py-1" style={{ background: '#f9fafc' }}>
                                            <div >{stat.icon}</div>
                                            <div>
                                                <p className="text-md font-bold text-gray-800">{stat.value}</p>
                                                <p className="text-sm text-gray-500">{stat.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div class="courses-header">
                                    <span class="courses-title">COURSES</span>
                                    <a href="#" class="see-all" style={{ color: '#14aff1' }}>See all (42)</a>
                                </div>

                                <div class="course-list flex flex-row mt-4">
                                    <div class="course-item">
                                        <img src="https://i.ibb.co/640kJN2/c1.jpg" alt="Complete Web Development Bootcamp" class="course-thumbnail" />
                                    </div>
                                    <div class="course-item">
                                        <img src="https://i.ibb.co/GFhHTqZ/c2.jpg" alt="Advanced JavaScript Concepts" class="course-thumbnail" />
                                    </div>
                                    <div class="course-item">
                                        <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="React Native - The Practical Guide" class="course-thumbnail" />
                                    </div>
                                    <div class="course-item">
                                        <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="React Native - The Practical Guide" class="course-thumbnail" />
                                    </div>
                                    <div class="course-item">
                                        <img src="https://i.ibb.co/GFhHTqZ/c2.jpg" alt="Advanced JavaScript Concepts" class="course-thumbnail" />
                                    </div>
                                </div>
                            </div></div>}
                </div>
            </div>
        </div>
    )
}

export default Student;