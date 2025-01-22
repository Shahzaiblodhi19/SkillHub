'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FaStar, FaUserGraduate, FaComment, FaBook } from 'react-icons/fa';
import { FaBolt, FaExclamationCircle } from 'react-icons/fa';

const avatars = [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
    'https://i.pravatar.cc/150?img=4',
    'https://i.pravatar.cc/150?img=5',
    'https://i.pravatar.cc/150?img=6',
    'https://i.pravatar.cc/150?img=7',
];

const CourseDetails = () => {
    const [activeTab, setActiveTab] = useState('Personal');
    const [couponVisible, setCouponVisible] = useState(true);
    const [timer, setTimer] = useState({ minutes: 20, seconds: 0 });
    const [featuresExpanded, setFeaturesExpanded] = useState(false);

    const positions = [0, 16.67, 33.33, 50, 66.67, 83.33, 100];
    const teamSizes = [3, 5, 10, 25, 50, 100, 200];
    const pricesPerUser = [19, 18, 16, 14, 12, 10, 8];
    const [currentPosition, setCurrentPosition] = useState(0);
    const [teamSize, setTeamSize] = useState(teamSizes[0]);
    const [pricePerUser, setPricePerUser] = useState(pricesPerUser[0]);
    const [totalPrices, setTotalPrice] = useState(teamSizes[0] * pricesPerUser[0] * 12);

    const sliderContainerRef = useRef(null); // Reference for the slider container
    useEffect(() => {
        const handle = document.querySelector(".slider-handle");
        const container = document.querySelector(".slider-container");
        const track = document.querySelector(".slider-track");

        if (!handle || !container || !track) return;

        let isDragging = false;

        const startDrag = (e) => {
            isDragging = true;
            document.addEventListener("mousemove", onDrag);
            document.addEventListener("mouseup", stopDrag);
        };

        const onDrag = (e) => {
            if (!isDragging) return;

            const rect = container.getBoundingClientRect();
            const percent = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
            const closestPosition = positions.findIndex((pos) => percent * 100 <= pos);

            if (closestPosition !== -1) {
                setCurrentPosition(closestPosition);
                handle.style.left = `${positions[closestPosition]}%`;
                track.style.width = `${positions[closestPosition]}%`;

                setTeamSize(teamSizes[closestPosition]);
                setPricePerUser(pricesPerUser[closestPosition]);
                setTotalPrice(teamSizes[closestPosition] * pricesPerUser[closestPosition] * 12);
            }
        };

        const stopDrag = () => {
            isDragging = false;
            document.removeEventListener("mousemove", onDrag);
            document.removeEventListener("mouseup", stopDrag);
        };

        handle.addEventListener("mousedown", startDrag);

        return () => {
            handle.removeEventListener("mousedown", startDrag);
            document.removeEventListener("mousemove", onDrag);
            document.removeEventListener("mouseup", stopDrag);
        };
    }, [positions, teamSizes, pricesPerUser]);
    useEffect(() => {
        const sliderContainer = sliderContainerRef.current;
        if (!sliderContainer) return; // Exit if the container is not rendered

        const handleSliderClick = (e) => {
            const rect = sliderContainer.getBoundingClientRect();
            let percent = (e.clientX - rect.left) / rect.width * 100;
            let closestPosition = 0;
            let minDifference = 100;

            positions.forEach((pos, index) => {
                const difference = Math.abs(percent - pos);
                if (difference < minDifference) {
                    minDifference = difference;
                    closestPosition = index;
                }
            });

            setCurrentPosition(closestPosition);
            updateSlider(closestPosition);
        };

        const updateSlider = (position) => {
            const handle = sliderContainer.querySelector(".slider-handle");
            const track = sliderContainer.querySelector(".slider-track");

            if (handle && track) {
                handle.style.left = `${positions[position]}%`;
                track.style.width = `${positions[position]}%`;

                setTeamSize(teamSizes[position]);
                setPricePerUser(pricesPerUser[position]);
                setTotalPrice(teamSizes[position] * pricesPerUser[position] * 12);
            }
        };

        sliderContainer.addEventListener("click", handleSliderClick);

        return () => {
            sliderContainer.removeEventListener("click", handleSliderClick);
        };
    }, [sliderContainerRef]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev.minutes === 0 && prev.seconds === 0) {
                    clearInterval(interval);
                    return prev;
                }
                if (prev.seconds === 0) {
                    return { minutes: prev.minutes - 1, seconds: 59 };
                }
                return { ...prev, seconds: prev.seconds - 1 };
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const [faqActive, setFaqActive] = useState('instructor');
    const [expandedDescription, setExpandedDescription] = useState(false);
    const [expandedPoints, setExpandedPoints] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq((prevIndex) => (prevIndex === index ? null : index));
    };

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 5; // Number of dots/slides

    const updateDots = (index) => {
        setCurrentSlide(index);
    };

    const handlePrevClick = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleNextClick = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const [expandedSections, setExpandedSections] = useState([1]);
    const [modalActive, setModalActive] = useState(false);

    const toggleSection = (index) => {
        setExpandedSections((prev) => {
            if (prev.includes(index)) {
                return prev.filter((i) => i !== index);
            } else {
                return [...prev, index];
            }
        });
    };

    const toggleAllSections = () => {
        if (typeof window !== 'undefined') {
            const allExpanded = document.querySelectorAll('.section').length === expandedSections.length;
            if (allExpanded) {
                setExpandedSections([]);
            } else {
                setExpandedSections(Array.from(Array(document.querySelectorAll('.section').length).keys()));
            }
        }
    };


    const handleModalClose = () => {
        setModalActive(false);
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Hover Effect
            const courseCards = document.querySelectorAll('.course-card');
            courseCards.forEach((card) => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-4px)';
                    card.style.transition = 'transform 0.3s ease';
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                });
            });

            // Add ripple effect to buttons
            const buttons = document.querySelectorAll('.add-to-cart');
            buttons.forEach((button) => {
                button.addEventListener('click', (e) => {
                    const ripple = document.createElement('div');
                    ripple.classList.add('ripple');
                    const rect = button.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    ripple.style.width = `${size}px`;
                    ripple.style.height = `${size}px`;
                    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
                    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
                    button.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 600);
                });
            });
        }
    }, []);


    const courses = [
        {
            id: 1,
            image: 'https://i.ibb.co/jJ4GHXP/img1.jpg',
            title: "Complete Web Development Bootcamp 2024",
            price: 89.99,
            originalPrice: 129.99,
            reviews: 4289,
        },
        {
            id: 2,
            image: 'https://i.ibb.co/jJ4GHXP/img1.jpg',
            title: "Advanced JavaScript Masterclass",
            price: 59.99,
            originalPrice: 99.99,
            reviews: 2156,
        },
        {
            id: 3,
            image: 'https://i.ibb.co/jJ4GHXP/img1.jpg',
            title: "React and Redux Professional Course",
            price: 49.99,
            originalPrice: 79.99,
            reviews: 3742,
        },
    ];
    const totalOriginalPrice = courses.reduce((sum, course) => sum + course.originalPrice, 0);
    const totalPrice = courses.reduce((sum, course) => sum + course.price, 0);
    const [checkedState, setCheckedState] = useState(
        courses.reduce((state, course) => {
            state[course.id] = false;
            return state;
        }, {})
    );

    const handleCheckboxChange = (id) => {
        setCheckedState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    const checkAll = () => {
        setCheckedState(
            courses.reduce((state, course) => {
                state[course.id] = true;
                return state;
            }, {})
        );
    };

    const [authorTooltip, setauthorTooltip] = useState(false)
    const [includedTooltip, setincludedTooltip] = useState(false)

    const stats = [
        { id: 1, icon: <FaStar className="text-blue-500 w-5 h-5" fill='#99dceb' />, value: "4.8", label: "Instructor Rating" },
        { id: 2, icon: <FaUserGraduate className="text-blue-500 w-5 h-5" fill='#99dceb' />, value: "263,854", label: "Students" },
        { id: 3, icon: <FaComment className="text-blue-500 w-5 h-5" fill='#99dceb' />, value: "135,182", label: "Reviews" },
        { id: 4, icon: <FaBook className="text-blue-500 w-5 h-5" fill='#99dceb' />, value: "36", label: "Courses" },
    ];





    return (
        <div className='course-details'>
            <header className="header px-4">
                <div className="container">
                    <div className="header-content ">
                        <div className="course-info pr-5">
                            <div className="breadcrumb">
                                <span>Development</span>
                                <span className="breadcrumb-separator">›</span>
                                <span>Programming Language</span>
                                <span className="breadcrumb-separator">›</span>
                                <span className="breadcrumb-current">Data Analysis</span>
                            </div>

                            <h1 className="course-title">Learning Python for Data Analysis and Visualization</h1>
                            <p className="course-description">
                                Learn Python Programming and how to use Python for Data Analysis. Includes data analytics, visualization, and more.
                            </p>

                            <div className="course-meta">
                                <span className="best-seller">BEST SELLER</span>
                                <div className="ratings">
                                    <span className="rating-number">4.4</span>
                                    <span className="rating-stars">★★★★☆</span>
                                    <span className="rating-count">(17,706 ratings)</span>
                                </div>
                                <span className="students-count">189,591 students</span>
                            </div>

                            <div className="instructor-info">
                                <div className="created-by">
                                    Created by <a className='cursor-pointer hover:underline' onClick={() => setincludedTooltip(!includedTooltip)}>Jose Portilla</a>
                                </div>

                                <div className="course-details">
                                    <div className="update-info">
                                        <FaExclamationCircle />
                                        <span>Last updated: March 25, 2022</span>
                                    </div>

                                    <div className="language-info">
                                        <svg width="20" height="20" color="currentColor" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 13.5C7.5 12.2574 8.50736 11.25 9.75 11.25H20.25C21.4926 11.25 22.5 12.2574 22.5 13.5V20.25C22.5 21.4926 21.4926 22.5 20.25 22.5H9.75C8.50736 22.5 7.5 21.4926 7.5 20.25V13.5ZM9.75 12.75C9.33579 12.75 9 13.0858 9 13.5V20.25C9 20.6642 9.33579 21 9.75 21H20.25C20.6642 21 21 20.6642 21 20.25V13.5C21 13.0858 20.6642 12.75 20.25 12.75H9.75Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 3.75C1.5 2.50736 2.50736 1.5 3.75 1.5H14.25C15.4926 1.5 16.5 2.50736 16.5 3.75V8.98125C16.5 9.39546 16.1642 9.73125 15.75 9.73125C15.3358 9.73125 15 9.39546 15 8.98125V3.75C15 3.33579 14.6642 3 14.25 3H3.75C3.33579 3 3 3.33579 3 3.75V10.5C3 10.9142 3.33579 11.25 3.75 11.25H5.25C5.66421 11.25 6 11.5858 6 12C6 12.4142 5.66421 12.75 5.25 12.75H3.75C2.50736 12.75 1.5 11.7426 1.5 10.5V3.75Z" fill="currentColor"></path><path d="M11.9524 9.23985C12.0473 9.48556 11.866 9.75 11.6026 9.75H10.9772C10.8203 9.75 10.6799 9.65224 10.6255 9.505L10.2471 8.48109H7.70762L7.33713 9.50283C7.28334 9.6512 7.14241 9.75 6.98459 9.75H6.39488C6.13188 9.75 5.95058 9.48631 6.04474 9.24075L8.05773 3.99075C8.11333 3.84573 8.25257 3.75 8.40787 3.75H9.57409C9.72904 3.75 9.86804 3.84531 9.92389 3.98985L11.9524 9.23985ZM8.48627 6.31303L8.07925 7.43067H9.85776L9.44189 6.31303C9.28262 5.87605 9.12335 5.42227 8.98178 4.93487H8.94639C8.79596 5.39706 8.63669 5.87605 8.48627 6.31303Z" fill="currentColor"></path><path d="M14.25 15L12.375 15C12.1679 15 12 15.1679 12 15.375L12 16.125C12 16.3321 12.1679 16.5 12.375 16.5H14.2408C14.1972 17.196 14.0001 17.7265 13.6992 18.0848C13.4245 18.4117 13.0088 18.6607 12.3743 18.7304C12.1684 18.753 12 18.9179 12 19.125V19.875C12 20.0821 12.1683 20.2517 12.3748 20.2362C13.4141 20.1584 14.2581 19.7516 14.8477 19.0496C14.9011 18.986 14.9518 18.9207 15 18.8538C15.0482 18.9207 15.0989 18.986 15.1523 19.0496C15.7419 19.7516 16.5859 20.1584 17.6252 20.2362C17.8317 20.2517 18 20.0821 18 19.875V19.125C18 18.9179 17.8316 18.753 17.6257 18.7304C16.9912 18.6607 16.5755 18.4117 16.3008 18.0848C15.9999 17.7265 15.8028 17.196 15.7592 16.5H17.625C17.8321 16.5 18 16.3321 18 16.125L18 15.375C18 15.1679 17.8321 15 17.625 15L15.75 15V13.875C15.75 13.6679 15.5821 13.5 15.375 13.5H14.625C14.4179 13.5 14.25 13.6679 14.25 13.875V15Z" fill="currentColor"></path></svg>
                                        <span>English‏‏‎ ‎‏‏‎ ‎</span>
                                        <svg fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M23 24H2V0h21v24zM3.337 22.632h18.326V1.368H3.337v21.264z"></path><path fill="currentColor" d="M18.313 8.647h-4.105v1.14h4.105v-1.14zM18.313 13.093H6.684v1.14h11.63v-1.14zM18.313 17.537H6.684v1.14h11.63v-1.14zM11.34 9.975h1.252L9.89 4.59H9.49l-2.7 5.386h1.252l.343-.684h2.612l.343.684zM8.958 8.151l.733-1.462.733 1.462H8.958z"></path></svg>
                                        <span>English [Auto], Korean [Auto],</span>
                                        <span className="language-more">2 more</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="video-section" >
                            <div className="video-preview">
                                <img src="https://i.ibb.co/tK5s859/preview1.jpg" alt="Course Preview" />
                                <svg
                                    className="play-button"
                                    viewBox="0 0 118 118"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g transform="translate(-1260 -363)">
                                        <circle
                                            opacity="0.6"
                                            fill="#1a1e2e"
                                            transform="translate(1260 363)"
                                            r="59"
                                            cy="59"
                                            cx="59"
                                        />
                                        <path
                                            fill="#13c4cc"
                                            transform="translate(1351 394) rotate(90)"
                                            d="M23.287,9.145a6,6,0,0,1,10.425,0L51.886,41.029A6,6,0,0,1,46.674,50H10.326a6,6,0,0,1-5.213-8.971Z"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <div
                                className={`purchase-wrapper`}
                            >
                                <div className="purchase-tabs">
                                    <button
                                        className={`tab rounded-0 ${activeTab === 'Personal' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('Personal')}
                                    >
                                        Personal
                                    </button>
                                    <button
                                        className={`tab rounded-0 ${activeTab === 'Teams' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('Teams')}
                                    >
                                        Teams
                                    </button>
                                </div>

                                {activeTab === 'Personal' &&
                                    <div className="purchase-content">
                                        <div className="price-section">
                                            <span className="current-price">$14.99</span>
                                            <span className="original-price">$94.99</span>
                                            <span className="discount">85% off</span>
                                        </div>

                                        <div className="price-timer">
                                            <svg viewBox="0 0 24 24" width="16" height="16">
                                                <path fill="#b32d0f" d="M12 4c-4.878 0-9 4.122-9 9s4.122 9 9 9c4.878 0 9-4.122 9-9s-4.122-9-9-9zm0 16.2c-3.969 0-7.2-3.231-7.2-7.2s3.231-7.2 7.2-7.2 7.2 3.231 7.2 7.2-3.231 7.2-7.2 7.2z" />
                                                <path fill="#b32d0f" d="M13 7h-2v6l5.25 3.15.75-1.23-4-2.42z" />
                                            </svg>
                                            <span className="timer-text">
                                                <span className="timer-bold">
                                                    {timer.minutes}:{timer.seconds < 10 ? '0' : ''}
                                                    {timer.seconds}
                                                </span>{' '}
                                                left at this price!
                                            </span>
                                        </div>

                                        <button className="btn btn-primary">Add to cart</button>
                                        <button className="btn btn-secondary">Buy now</button>

                                        <div class="coupon-section">
                                            {couponVisible === true ? (
                                                <div class="coupon-active">
                                                    <div class="coupon-left">
                                                        <i class="fas fa-bolt coupon-icon"></i>
                                                        <FaBolt color='#13c4cc' fontSize={22} />
                                                        <div class="coupon-info">
                                                            <span class="coupon-discount">40% OFF</span>
                                                            <span class="coupon-code">BFCPSALE24</span>
                                                        </div>
                                                    </div>
                                                    <span onClick={() => setCouponVisible(false)} class="remove-coupon">×</span>
                                                </div>
                                            ) : (
                                                <div className="coupon-input active">
                                                    <input type="text" placeholder="Enter Coupon" />
                                                    <button>Apply</button>
                                                </div>
                                            )}
                                        </div>
                                        <div class="course-features">
                                            <h4 class="features-header">This Course Includes:</h4>
                                            <div class="features-list">
                                                <div class="feature-item">
                                                    <div class="feature-icon">

                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path fill="#13C4CC" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                        </svg>
                                                    </div>
                                                    <span>18 hours of on-demand video</span>
                                                </div>
                                                <div class="feature-item">
                                                    <div class="feature-icon">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <g clip-path="url(#clip0_6339_72041)">
                                                                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#13C4CC" d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"></path>
                                                                <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#13C4CC" d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"></path>
                                                                <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#13C4CC" d="M9 9H10"></path>
                                                                <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#13C4CC" d="M9 13H15"></path>
                                                                <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#13C4CC" d="M9 17H15"></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_6339_72041">
                                                                    <rect fill="white" height="24" width="24"></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </div>
                                                    <span>10 articles</span>
                                                </div>
                                                <div class="feature-item">
                                                    <div class="feature-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                                            <path fill="#13C4CC" d="M10.6667 5C10.2246 5 9.80072 5.17559 9.48816 5.48816C9.17559 5.80072 9 6.22464 9 6.66667V25.3333C9 25.7754 9.17559 26.1993 9.48816 26.5118C9.80072 26.8244 10.2246 27 10.6667 27H16.6667C17.219 27 17.6667 27.4477 17.6667 28C17.6667 28.5523 17.219 29 16.6667 29H10.6667C9.69421 29 8.76157 28.6137 8.07394 27.9261C7.38631 27.2384 7 26.3058 7 25.3333V6.66667C7 5.69421 7.38631 4.76158 8.07394 4.07394C8.76158 3.38631 9.69421 3 10.6667 3H21.3333C22.3058 3 23.2384 3.38631 23.9261 4.07394C24.6137 4.76157 25 5.69421 25 6.66667V16C25 16.5523 24.5523 17 24 17C23.4477 17 23 16.5523 23 16V6.66667C23 6.22464 22.8244 5.80072 22.5118 5.48816C22.1993 5.17559 21.7754 5 21.3333 5H18.2764C18.3133 5.10426 18.3333 5.21645 18.3333 5.33333C18.3333 5.88562 17.8856 6.33333 17.3333 6.33333H14.6667C14.1144 6.33333 13.6667 5.88562 13.6667 5.33333C13.6667 5.21645 13.6867 5.10426 13.7236 5H10.6667ZM25.3333 20.3333C25.8856 20.3333 26.3333 20.781 26.3333 21.3333V26.9191L28.6262 24.6262C29.0168 24.2357 29.6499 24.2357 30.0404 24.6262C30.431 25.0168 30.431 25.6499 30.0404 26.0404L26.0404 30.0404C25.6499 30.431 25.0168 30.431 24.6262 30.0404L20.6262 26.0404C20.2357 25.6499 20.2357 25.0168 20.6262 24.6262C21.0168 24.2357 21.6499 24.2357 22.0404 24.6262L24.3333 26.9191V21.3333C24.3333 20.781 24.781 20.3333 25.3333 20.3333ZM16 21.6667C16.5523 21.6667 17 22.1144 17 22.6667V22.68C17 23.2323 16.5523 23.68 16 23.68C15.4477 23.68 15 23.2323 15 22.68V22.6667C15 22.1144 15.4477 21.6667 16 21.6667Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                        </svg>
                                                    </div>
                                                    <span>Available on iOS and Android</span>
                                                </div>

                                                {featuresExpanded === true ?
                                                    <>
                                                        <div class="feature-item">
                                                            <div class="feature-icon">
                                                                <svg viewBox="0 0 32 32">
                                                                    <path fill="#13C4CC" d="M6.66667 7.66406C5.75228 7.66406 5 8.41635 5 9.33073V22.6641C5 23.1061 5.17559 23.53 5.48816 23.8426" />
                                                                </svg>
                                                            </div>
                                                            <span>Certificate of Completion</span>
                                                        </div>
                                                        <div class="feature-item">
                                                            <div class="feature-icon">
                                                                <svg viewBox="0 0 20 20">
                                                                    <path fill="#13C4CC" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441" />
                                                                </svg>
                                                            </div>
                                                            <span>Community Access</span>
                                                        </div>
                                                    </> : ''
                                                }
                                            </div>
                                            <div class="view-more" onClick={() => setFeaturesExpanded(!featuresExpanded)}>
                                                <span>{featuresExpanded ? 'View Less' : 'View More'}</span>
                                                <svg style={{ transform: featuresExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="divider ">
                                            <span className='m-auto text-lg'>Or</span>
                                        </div>

                                        <div class="subscription-section">
                                            <h3 class="subscription-title">Subscribe to Skill Hub's top courses</h3>
                                            <p class="subscription-description">
                                                Get this course, plus 12,000+ of our top-rated courses, with Personal Plan.
                                                <a className='ml-2' href="#" style={{ color: "#00BCD4", textDecoration: 'none' }}>Learn more</a>
                                            </p>
                                            <button class="subscription-button">Start subscription</button>
                                            <p class="subscription-info">Starting at $20.00 per month • Cancel anytime</p>
                                        </div>

                                    </div>
                                }

                                {activeTab === "Teams" && (
                                    <div className='teamstabs'>
                                        <div className="purchase-content">
                                            <div className="teams-content">
                                                <button className="try-now-btn">TRY SKILL HUB TEAMS</button>

                                                <div className="slider-section">
                                                    <div className="slider-label">
                                                        <span>Team Size</span>
                                                        <span className="team-size-value">{teamSize} members</span>
                                                    </div>
                                                    <div className="slider-container">
                                                        <div className="slider-track"></div>
                                                        <div className="slider-handle" style={{ left: `${positions[currentPosition]}%` }}></div>
                                                    </div>
                                                    <div className="slider-positions">
                                                        {teamSizes.map((size, index) => (
                                                            <span key={index}>{size}</span>
                                                        ))}
                                                    </div>

                                                    <div className="price-display">
                                                        <span className="price">${pricePerUser}</span>
                                                        <span className="price-period">/user/month</span>
                                                    </div>
                                                </div>

                                                <div className="total-price-section">
                                                    <div className="total-price-label">Total Annual Investment</div>
                                                    <div className="total-price-value">${totalPrices}/year</div>
                                                </div>

                                                <div className="features-list">
                                                    <div className="feature-item">
                                                        <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100">
                                                            <circle cx="12" cy="12" r="12" fill="#13c4cc" />
                                                            <path d="M9.5 16.5l-4-4 1.5-1.5L9.5 13.5l7-7 1.5 1.5-8.5 8.5z" fill="#fff" />
                                                        </svg>

                                                        <span className="feature-text">12,000+ professional courses</span>
                                                    </div>
                                                    <div className="feature-item">
                                                        <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100">
                                                            <circle cx="12" cy="12" r="12" fill="#13c4cc" />
                                                            <path d="M9.5 16.5l-4-4 1.5-1.5L9.5 13.5l7-7 1.5 1.5-8.5 8.5z" fill="#fff" />
                                                        </svg>
                                                        <span className="feature-text">120,000 hrs of audio per member</span>
                                                    </div>
                                                    <div className="feature-item">
                                                        <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100">
                                                            <circle cx="12" cy="12" r="12" fill="#13c4cc" />
                                                            <path d="M9.5 16.5l-4-4 1.5-1.5L9.5 13.5l7-7 1.5 1.5-8.5 8.5z" fill="#fff" />
                                                        </svg>
                                                        <span className="feature-text">Unlimited standard certificates</span>
                                                    </div>
                                                    <div className="feature-item">
                                                        <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100">
                                                            <circle cx="12" cy="12" r="12" fill="#13c4cc" />
                                                            <path d="M9.5 16.5l-4-4 1.5-1.5L9.5 13.5l7-7 1.5 1.5-8.5 8.5z" fill="#fff" />
                                                        </svg>
                                                        <span className="feature-text">5 premium certificates per user</span>
                                                    </div>
                                                </div>

                                                <button className="btn-teams">Try Skill Hub Teams</button>
                                                <p className="terms-text">No credit card required</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header >

            <div className='section2'>
                <div className="container mb-4">
                    <div className="course-details2 pb-0">
                        {/* Stats Grid */}
                        <div class="stats-grid">
                            <div class="stat-item">
                                <div class="stat-label-group">
                                    <svg class="stat-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                        <path fill="#4F4F4F" d="M8.00008 6.33331C7.91168 6.33331 7.82689 6.36843 7.76438 6.43094C7.70187 6.49346 7.66675 6.57824 7.66675 6.66665V25.3333C7.66675 25.4217 7.70187 25.5065 7.76438 25.569C7.82689 25.6315 7.91167 25.6666 8.00008 25.6666H11.0001V6.33331H8.00008ZM8.00008 4.33331C7.38124 4.33331 6.78775 4.57915 6.35017 5.01673C5.91258 5.45432 5.66675 6.04781 5.66675 6.66665V25.3333C5.66675 25.9522 5.91258 26.5456 6.35017 26.9832C6.78775 27.4208 7.38124 27.6666 8.00008 27.6666H11.0001V29.3333C11.0001 29.8856 11.4478 30.3333 12.0001 30.3333C12.5524 30.3333 13.0001 29.8856 13.0001 29.3333V27.6666H22.6667C23.6392 27.6666 24.5718 27.2803 25.2595 26.5927C25.9471 25.9051 26.3334 24.9724 26.3334 24V7.99998C26.3334 7.02752 25.9471 6.09489 25.2595 5.40725C24.5718 4.71962 23.6392 4.33331 22.6667 4.33331H8.00008ZM13.0001 6.33331V25.6666H22.6667C23.1088 25.6666 23.5327 25.4911 23.8453 25.1785C24.1578 24.8659 24.3334 24.442 24.3334 24V7.99998C24.3334 7.55795 24.1578 7.13403 23.8453 6.82147C23.5327 6.50891 23.1088 6.33331 22.6667 6.33331H13.0001Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <div class="stat-label">Lessons</div>
                                </div>
                                <div class="stat-value">17</div>
                            </div>

                            <div class="stat-item">
                                <div class="stat-label-group">
                                    <svg class="stat-icon" fill="none" viewBox="0 0 24 24">
                                        <path fill="#4F4F4F" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <div class="stat-label">Duration</div>
                                </div>
                                <div class="stat-value">18h 22m</div>
                            </div>

                            <div class="stat-item">
                                <div class="stat-label-group">
                                    <svg class="stat-icon" aria-hidden="true" viewBox="0 0 24 24">
                                        <path fill="#4F4F4F" d="M12 4.875a.75.75 0 01.648.372l1.994 3.414 3.893.85a.75.75 0 01.395 1.238l-2.646 2.905.414 3.892a.75.75 0 01-1.042.768L12 16.744l-3.656 1.57a.75.75 0 01-1.042-.768l.414-3.892L5.07 10.75a.75.75 0 01.395-1.238l3.893-.85 1.994-3.414A.75.75 0 0112 4.875z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <div class="stat-label">Rating</div>
                                </div>
                                <div class="stat-value rating">
                                    <strong>4.2</strong>
                                    <span>(133)</span>
                                </div>
                            </div>

                            <div class="stat-item">
                                <div class="stat-label-group">
                                    <svg class="stat-icon" viewBox="0 0 32 32">
                                        <path fill="#4F4F4F" d="M10.8571 26.2857C10.8571 27.2325 10.0896 28 9.14286 28H5.71429C4.76751 28 4 27.2325 4 26.2857V22C4 21.0532 4.76751 20.2857 5.71429 20.2857H9.14286C10.0896 20.2857 10.8571 21.0532 10.8571 22V26.2857Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <div class="stat-label">Skill Level</div>
                                </div>
                                <div class="stat-value">Beg. & Int.</div>
                            </div>

                            <div class="stat-item" style={{ flexDirection: 'column`' }}       >
                                <div class="stat-label-group">
                                    <svg class="stat-icon" viewBox="0 0 32 32">
                                        <path fill="#4F4F4F" d="M6.66667 7.66406C5.75228 7.66406 5 8.41635 5 9.33073V22.6641C5 23.1061 5.17559 23.53 5.48816 23.8426C5.80072 24.1551 6.22464 24.3307 6.66667 24.3307H13.3333C13.8856 24.3307 14.3333 24.7784 14.3333 25.3307C14.3333 25.883 13.8856 26.3307 13.3333 26.3307H6.66667C5.69421 26.3307 4.76157 25.9444 4.07394 25.2568C3.38631 24.5692 3 23.6365 3 22.6641V9.33073C3 7.31178 4.64772 5.66406 6.66667 5.66406H25.3333C26.3058 5.66406 27.2384 6.05037 27.9261 6.738C28.6137 7.42564 29 8.35827 29 9.33073V22.6651C28.9993 23.3081 28.8296 23.9396 28.5078 24.4963C28.186 25.053 27.7235 25.5153 27.1667 25.8368C26.6884 26.1129 26.0768 25.949 25.8006 25.4707C25.5245 24.9924 25.6884 24.3808 26.1667 24.1047C26.4198 23.9586 26.63 23.7484 26.7763 23.4954C26.9226 23.2424 26.9997 22.9553 27 22.663V9.33073C27 8.8887 26.8244 8.46478 26.5118 8.15222C26.1993 7.83966 25.7754 7.66406 25.3333 7.66406H6.66667Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <div class="stat-label">Certificate</div>
                                </div>
                                <div class="stat-value verified" >
                                    <svg fill="none" viewBox="0 0 32 32">
                                        <path stroke-width="2.13599" stroke="#13C4CC" d="M9.90625 16.5733L13.5982 20.4108L22.4576 12.1875"></path>
                                    </svg>
                                    Included
                                </div>
                            </div>

                            <div class="stat-item">
                                <div class="stat-label-group">
                                    <svg class="stat-icon" viewBox="0 0 20 20">
                                        <path fill="#4F4F4F" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <div class="stat-label">Community</div>
                                </div>
                                <div class="stat-value verified cursor-pointer" onClick={() => setauthorTooltip(!authorTooltip)}>
                                    <svg fill="none" viewBox="0 0 32 32">
                                        <path stroke-width="2.13599" stroke="#13C4CC" d="M9.90625 16.5733L13.5982 20.4108L22.4576 12.1875"></path>
                                    </svg>
                                    Included
                                </div>
                            </div>
                        </div>

                        {/* Description Box */}
                        <h1 className="section-title">OVERVIEW</h1>
                        <div className="description-box">
                            <div className="description-label">Description</div>
                            <div className="description-content">
                                Learn advanced programming concepts and practical application development with industry-standard tools and frameworks. This comprehensive course covers modern JavaScript, React, Node.js, and cloud deployment strategies.
                                <div
                                    className="show-more"
                                    onClick={() => setExpandedDescription(!expandedDescription)}
                                >
                                    {expandedDescription ? 'Show less' : 'Show more'}
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d={
                                                expandedDescription
                                                    ? 'M18 15L12 9L6 15'
                                                    : 'M6 9L12 15L18 9'
                                            }
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="divider"></div>

                        <div class="learning-points">
                            <h2 class="learning-title">What you will learn</h2>
                            <div class="point-grid">
                                <div class="point-item">
                                    <div class="point-number">
                                        <svg width="100%" viewBox="0 0 16 16" style={{ width: '24px', height: '24px', color: '#13AFF0' }} stroke-linejoin="round" height="100%">
                                            <path fill="currentColor" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="point-content">
                                        <div class="point-title">Master modern JavaScript fundamentals and ES6+ features</div>
                                    </div>
                                </div>

                                <div class="point-item">
                                    <div class="point-number">
                                        <svg width="100%" viewBox="0 0 16 16" style={{ width: '24px', height: '24px', color: '#13AFF0' }} stroke-linejoin="round" height="100%">
                                            <path fill="currentColor" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="point-content">
                                        <div class="point-title">Build real-world applications with React and TypeScript</div>
                                    </div>
                                </div>

                                <div class="point-item">
                                    <div class="point-number">
                                        <svg width="100%" viewBox="0 0 16 16" style={{ width: '24px', height: '24px', color: '#13AFF0' }} stroke-linejoin="round" height="100%">
                                            <path fill="currentColor" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="point-content">
                                        <div class="point-title">Learn advanced backend development with Node.js</div>
                                    </div>
                                </div>

                                <div class="point-item">
                                    <div class="point-number">
                                        <svg width="100%" viewBox="0 0 16 16" style={{ width: '24px', height: '24px', color: '#13AFF0' }} stroke-linejoin="round" height="100%">
                                            <path fill="currentColor" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="point-content">
                                        <div class="point-title">Deploy and scale applications using Docker and Kubernetes</div>
                                    </div>
                                </div>
                            </div>

                            <div class="show-more-points" onClick={() => setExpandedPoints(!expandedPoints)}>
                                {!expandedPoints ? 'Show more' : 'Show less'}
                                <svg style={{ transform: expandedPoints ? 'rotate(180deg)' : 'rotate(0deg)' }} width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div class="testimonial">
                            <div class="testimonial-content">
                                <img src="https://i.ibb.co/WndL8R6/AVATAR-laurentfa.png" alt="Steven O." class="testimonial-avatar" />
                                <div class="testimonial-text">
                                    <div class="testimonial-quote">It's highly addictive to get core insights on personally relevant topics without repetition or triviality. Added to that the apps ability to suggest kindred interests opens up a foundation of knowledge.</div>
                                    <div class="testimonial-author">Steven O.</div>
                                </div>
                            </div>
                        </div>
                        {/* FAQ Section */}
                        <div className="faq-divider"></div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: '24px',
                            }}
                        >
                            <h2 className="faq-header" style={{ marginBottom: 0 }}>
                                FAQ
                            </h2>
                            <div className="faq-toggle-group">
                                <button
                                    className={`faq-toggle-button ${faqActive === 'instructor' ? 'active' : ''
                                        }`}
                                    onClick={() => setFaqActive('instructor')}
                                >
                                    Instructor
                                </button>
                                <button
                                    className={`faq-toggle-button ${faqActive === 'marketplace' ? 'active' : ''
                                        }`}
                                    onClick={() => setFaqActive('marketplace')}
                                >
                                    Marketplace
                                </button>
                            </div>
                        </div>

                        <div class="faq-section" style={{ display: faqActive === 'instructor' ? 'block' : 'none' }}>
                            <div class={`faq-item ${activeFaq === 0 ? 'active' : ''}`}
                                onClick={() => toggleFaq(0)}>
                                <div class="faq-question">
                                    What programming languages are covered in this course?
                                    <svg class="faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div class="faq-answer">
                                    The course starts with Python for foundational programming concepts, moves on to JavaScript for building interactive web applications, and covers SQL for managing and querying databases.
                                </div>
                            </div>

                            <div class={`faq-item ${activeFaq === 1 ? 'active' : ''}`}
                                onClick={() => toggleFaq(1)}>
                                <div class="faq-question">
                                    Do I need prior coding experience to join?
                                    <svg class="faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div class="faq-answer">
                                    No, the course starts with the basics, making it beginner-friendly.
                                </div>
                            </div>

                            <div class={`faq-item ${activeFaq === 2 ? 'active' : ''}`}
                                onClick={() => toggleFaq(2)}>
                                <div class="faq-question">
                                    How long will it take to complete the course?
                                    <svg class="faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div class="faq-answer">
                                    The course is self-paced and typically takes 6–8 weeks.
                                </div>
                            </div>
                        </div>
                        <div
                            className="faq-section"
                            style={{ display: faqActive === 'marketplace' ? 'block' : 'none' }}
                        >
                            <div class={`faq-item ${activeFaq === 3 ? 'active' : ''}`} onClick={() => toggleFaq(3)}>
                                <div class="faq-question">
                                    What payment methods are accepted?
                                    <svg class="faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div class="faq-answer">
                                    We accept all major credit cards, PayPal, and Apple Pay.
                                </div>
                            </div>
                            <div class={`faq-item ${activeFaq === 4 ? 'active' : ''}`} onClick={() => toggleFaq(4)}>
                                <div class="faq-question">
                                    What is your refund policy?
                                    <svg class="faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div class="faq-answer">
                                    We offer a 30-day money-back guarantee on all courses.
                                </div>
                            </div>
                            <div class={`faq-item ${activeFaq === 5 ? 'active' : ''}`} onClick={() => toggleFaq(5)}>
                                <div class="faq-question">
                                    How long do I have access to the course?
                                    <svg class="faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div class="faq-answer">
                                    Once purchased, you have lifetime access to all course materials.
                                </div>
                            </div>
                        </div>
                        <div className='testimonial p-0 mt-5' style={{ background: 'transparent' }}>
                            <div className="headers">
                                <h1>Decipher Political Realities</h1>
                                <p>Don't take our word for it. See what some of our students have to say.</p>
                            </div>

                            <div className="testimonial-widget">
                                <div className="testimonial-content">
                                    <svg
                                        className="quote-icon mb-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 33 28"
                                        height="28"
                                        width="33"
                                    >
                                        <path
                                            fill="#13AFF0"
                                            d="M17.883 17.3311C17.883 11.9311 19.1453 7.79346 21.67 4.91816C24.2648 1.97272 27.7362 0.5 32.0842 0.5V5.75971C29.9803 5.75971 28.2972 6.35581 27.0349 7.54801C25.8427 8.67008 25.2466 10.1779 25.2466 12.0714V13.1233C25.2466 13.2636 25.2817 13.3688 25.3518 13.4389C25.5622 13.4389 25.7726 13.4038 25.983 13.3337C26.544 13.1934 26.9998 13.1233 27.3505 13.1233C28.7531 13.1233 29.9803 13.7545 31.0323 15.0168C32.0842 16.2791 32.6102 17.9272 32.6102 19.9609C32.6102 22.0648 31.9089 23.818 30.5063 25.2206C29.1739 26.6232 27.4908 27.3245 25.457 27.3245C23.1427 27.3245 21.2843 26.483 19.8817 24.7999C18.5492 23.1168 17.883 20.6272 17.883 17.3311ZM0 17.3311C0 11.9311 1.26233 7.79346 3.78699 4.91816C6.38178 1.97272 9.85319 0.5 14.2012 0.5V5.75971C12.0973 5.75971 10.4142 6.35581 9.1519 7.54801C7.95969 8.67008 7.36359 10.1779 7.36359 12.0714V13.1233C7.36359 13.2636 7.39866 13.3688 7.46879 13.4389C7.67918 13.4389 7.88956 13.4038 8.09995 13.3337C8.66099 13.1934 9.11683 13.1233 9.46748 13.1233C10.8701 13.1233 12.0973 13.7545 13.1493 15.0168C14.2012 16.2791 14.7272 17.9272 14.7272 19.9609C14.7272 22.0648 14.0259 23.818 12.6233 25.2206C11.2908 26.6232 9.60774 27.3245 7.57398 27.3245C5.25971 27.3245 3.40128 26.483 1.99869 24.7999C0.66623 23.1168 0 20.6272 0 17.3311Z"
                                        ></path>
                                    </svg>

                                    <div className="testimonial-text mb-0">
                                        I love the tracking part, that you can see how recipients engaged with certificates. Certifier saves me tons of work
                                    </div>

                                    <div className="author-info mb-0">
                                        <img
                                            src="https://i.ibb.co/NKp6WsG/AVATAR-Kostis-Kapelonis.png"
                                            alt="Steve Roberts"
                                            className="author-avatar"
                                        />
                                        <div className="author-details">
                                            <div className="author-name">Steve Roberts</div>
                                            <div className="author-title">Head of Impact Academy</div>
                                        </div>
                                    </div>

                                    <div className="navigation">
                                        <div className="dots">
                                            {Array.from({ length: totalSlides }).map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`dot ${currentSlide === index ? 'active' : ''}`}
                                                    onClick={() => updateDots(index)}
                                                ></div>
                                            ))}
                                        </div>

                                        <div className="nav-buttons">
                                            <div className="nav-button prev" onClick={handlePrevClick}>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M15 18L9 12L15 6"
                                                        stroke="#13AFF0"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="nav-button next" onClick={handleNextClick}>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9 18L15 12L9 6"
                                                        stroke="#13AFF0"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="video-previews">
                                    <img
                                        src="https://i.ibb.co/vcJmbRn/japan.webp"
                                        alt="Steve's Video"
                                        className="preview-image"
                                    />
                                    <div className="video-overlay">
                                        <span className="watch-text">Watch Steve's story</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 33 33"
                                            height="33"
                                            width="33"
                                        >
                                            <circle fill="#13AFF0" r="16" cy="16.499" cx="16.8027"></circle>
                                            <path
                                                fill="white"
                                                d="M23.433 15.4168L13.9332 9.93204C13.0998 9.45088 12.058 10.0523 12.058 11.0146V21.9841C12.058 22.9464 13.0998 23.5479 13.9332 23.0667L23.433 17.582C24.2664 17.1008 24.2664 15.8979 23.433 15.4168Z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='courses-content p-0'>
                    <div className="container">
                        <div className="course-content">
                            <div className="content-header">
                                <h1>Course Content</h1>
                                <div className="content-stats">
                                    <span>21 sections • 344 lectures • 29h 40m total length</span>
                                    <button
                                        className="expand-all"
                                        onClick={() => {
                                            if (typeof document !== 'undefined') {
                                                const allSections = document.querySelectorAll('.section').length;
                                                toggleAllSections(allSections);
                                            }
                                        }}
                                    >
                                        {typeof document !== 'undefined' &&
                                            expandedSections.length === document.querySelectorAll('.section').length
                                            ? 'Collapse all sections'
                                            : 'Expand all sections'}
                                    </button>

                                </div>
                            </div>

                            {[1, 2, 3].map((sectionIndex) => (
                                <div
                                    className={`section ${expandedSections.includes(sectionIndex) ? 'expanded' : ''}`}
                                    key={sectionIndex}
                                >
                                    <div
                                        className="section-header"
                                        onClick={() => toggleSection(sectionIndex)}
                                    >
                                        <span className="section-number">Section {sectionIndex}</span>
                                        <h2 className="section-title mb-0">
                                            {sectionIndex === 1
                                                ? 'Course Introduction & How to Take this Course'
                                                : sectionIndex === 2
                                                    ? 'Option and Stock Volatility, the VIX and More'
                                                    : 'The Basics of How Options Work'}
                                        </h2>
                                        <div className="section-stats">
                                            {sectionIndex === 1
                                                ? '4 lectures • 34min'
                                                : sectionIndex === 2
                                                    ? '3 lectures • 31min'
                                                    : '26 lectures • 2hr 59min'}
                                        </div>
                                        <svg
                                            className="chevron"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M5 7.5L10 12.5L15 7.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    {expandedSections.includes(sectionIndex) && (
                                        sectionIndex === 1 ?
                                            <div className="section-content">
                                                <div class="learning-unit">
                                                    <div class="unit-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 38">
                                                            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="#00BCD4" d="M17.315 16.7018V21.2982C17.3148 21.4019 17.3427 21.5037 17.3958 21.5928C17.4489 21.6818 17.5252 21.7548 17.6165 21.8039C17.7078 21.853 17.8107 21.8765 17.9143 21.8717C18.0179 21.8669 18.1182 21.8341 18.2046 21.7767L21.6553 19.4785C21.7332 19.4253 21.7969 19.3539 21.8409 19.2705C21.8849 19.1871 21.9079 19.0943 21.9079 19C21.9079 18.9057 21.8849 18.8128 21.8409 18.7294C21.7969 18.6461 21.7332 18.5747 21.6553 18.5215L18.2046 16.2232C18.1182 16.1659 18.0179 16.1331 17.9143 16.1283C17.8107 16.1235 17.7078 16.1469 17.6165 16.196C17.5252 16.2452 17.4489 16.3181 17.3958 16.4072C17.3427 16.4963 17.3148 16.5981 17.315 16.7018Z"></path>
                                                            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="#00BCD4" d="M19 27C23.4183 27 27 23.4183 27 19C27 14.5817 23.4183 11 19 11C14.5817 11 11 14.5817 11 19C11 23.4183 14.5817 27 19 27Z"></path>
                                                        </svg>
                                                    </div>
                                                    <div class="unit-content">
                                                        <h3 class="unit-title">How to Take the Course and Access the Excel Exercises (Part 1 of 2)</h3>
                                                        <p class="unit-description">Learn how to get the most out of this course and access all supplementary materials. We'll cover the course structure, downloading exercise files, and setting up your learning environment. This comprehensive guide ensures you're fully prepared to begin your learning journey effectively and efficiently.</p>
                                                        <div class="read-more">
                                                            Read More
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <button class="preview-button">Preview</button>
                                                </div>

                                                <div class="learning-unit">
                                                    <div class="unit-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 38">
                                                            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.2" stroke="#00BCD4" d="M12 28V10H23.0747L26.7662 13.6916V28H12Z"></path>
                                                            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.2" stroke="#00BCD4" d="M19.1395 12.2149C17.1091 11.735 17.6628 16.3421 19.9737 19.0886C22.8827 22.5217 25.3782 22.0935 25.3782 21.2297C25.3782 19.5537 21.5906 20.1148 18.6743 21.3995C16.6144 22.315 12.1107 24.1829 13.7276 25.5267C15.9943 27.402 20.9114 12.6358 19.1395 12.2149Z"></path>
                                                        </svg>
                                                    </div>
                                                    <div class="unit-content">
                                                        <h3 class="unit-title">Course Resources and Materials PDF</h3>
                                                        <p class="unit-description">Access the complete collection of course materials, including exercise files, reference guides, and supplementary readings.</p>
                                                    </div>
                                                </div>

                                                <div class="learning-unit">
                                                    <div class="unit-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 38">
                                                            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="#00BCD4" d="M22.2122 18.0833H25.8788M22.2122 20.8333H25.8788M22.2122 23.5833H25.8788M9.8335 13.9547H28.1668M11.0435 10.75H26.9568C27.6251 10.75 28.1668 11.2917 28.1668 11.96V26.04C28.1668 26.7083 27.6251 27.25 26.9568 27.25H11.0435C10.3752 27.25 9.8335 26.7083 9.8335 26.04V11.96C9.8335 11.2917 10.3752 10.75 11.0435 10.75Z"></path>
                                                        </svg>
                                                    </div>
                                                    <div class="unit-content">
                                                        <h3 class="unit-title">Course Overview and Navigation Guide</h3>
                                                        <p class="unit-description">Get familiar with the course platform and learn how to navigate through different sections effectively.</p>
                                                    </div>
                                                    <button class="preview-button">Preview</button>
                                                </div>
                                            </div> : ''

                                    )}
                                </div>

                            ))}

                            <div className="more-sections">
                                <button className="more-sections-button">11 more sections</button>
                            </div>
                        </div>
                        {modalActive && (
                            <div className="modal active" id="previewModal">
                                <div className="modal-close" onClick={handleModalClose}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            d="M18 6L6 18M6 6l12 12"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h2 className="modal-title">Course Preview</h2>
                                        <div className="modal-subtitle">
                                            Apache Kafka Series - Kafka Connect Hands-on Learning
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="preview-video">
                                            <Image
                                                src="https://i.ibb.co/82nmTCp/paul1.jpg"
                                                alt="Course Preview"
                                                className="preview-image"
                                                width={500}
                                                height={300}
                                            />
                                            <div className="play-button">
                                                <svg viewBox="0 0 118 118">
                                                    <g transform="translate(-1260 -363)">
                                                        <circle
                                                            opacity="0.6"
                                                            fill="#1a1e2e"
                                                            transform="translate(1260 363)"
                                                            r="59"
                                                            cy="59"
                                                            cx="59"
                                                            data-name="Ellipse 228"
                                                            id="Ellipse_228"
                                                        ></circle>
                                                        <path
                                                            fill="#13c4cc"
                                                            transform="translate(1351 394) rotate(90)"
                                                            d="M23.287,9.145a6,6,0,0,1,10.425,0L51.886,41.029A6,6,0,0,1,46.674,50H10.326a6,6,0,0,1-5.213-8.971Z"
                                                            data-name="Polygon 1"
                                                            id="Polygon_1"
                                                        ></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="preview-list">
                                            {[1, 2, 3].map((itemIndex) => (
                                                <div className="preview-item" key={itemIndex}>
                                                    <div className="preview-thumbnail">
                                                        <Image
                                                            src={`https://i.ibb.co/Zh0M06j/preview${itemIndex}.jpg`}
                                                            alt={`Preview ${itemIndex}`}
                                                            width={150}
                                                            height={100}
                                                        />
                                                    </div>
                                                    <div className="preview-info">
                                                        <div className="preview-name">
                                                            {itemIndex === 1
                                                                ? 'Course Introduction'
                                                                : itemIndex === 2
                                                                    ? 'Understanding Basic Concepts'
                                                                    : 'Advanced Topics Overview'}
                                                        </div>
                                                        <div className="preview-duration">
                                                            {itemIndex === 1
                                                                ? '01:45'
                                                                : itemIndex === 2
                                                                    ? '03:20'
                                                                    : '02:45'}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="instructor-container mt-4">
                    <div className='flex items-center justify-between mb-4 w-100'>
                        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                            <h2 className="text-lg font-bold ">Frequently Bought Together</h2>
                            <div className="flex items-center justify-between text-lg text-gray-500 gap-1">
                                <span className="text-dark fw-bold">${totalPrice.toFixed(2)}</span>
                                <span className="line-through">${totalOriginalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        <button onClick={checkAll} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                            Add All
                        </button>
                    </div>
                    <div className="space-y-4">
                        {courses.map((course) => (
                            <div key={course.id} className="flex items-start gap-2 mt-5 md:mt-0">
                                <input type='checkbox' className='w-4 h-4'
                                    checked={checkedState[course.id]}
                                    onChange={() => handleCheckboxChange(course.id)} />
                                <div className='flex items-center gap-3 md:flex-row flex-col'>
                                    <img className='rounded-md imgfreq' src={course.image} alt={course.title} style={{ width: '140px', height: '80px', objectFit: 'cover' }} />
                                    <div className='flex flex-col gap-2'>
                                        <h3 className="font-medium text-gray-800">{course.title}</h3>
                                        <p className="text-sm text-gray-500 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 280 40" fill="none">
                                            <path d="M19.2578 1.39064L14.1563 11.7344L2.74222 13.3985C0.69535 13.6953 -0.124963 16.2188 1.35941 17.6641L9.61722 25.711L7.6641 37.0781C7.31254 39.1328 9.4766 40.6719 11.2891 39.7109L21.5 34.3438L31.711 39.7109C33.5235 40.6641 35.6875 39.1328 35.336 37.0781L33.3829 25.711L41.6407 17.6641C43.125 16.2188 42.3047 13.6953 40.2578 13.3985L28.8438 11.7344L23.7422 1.39064C22.8282 -0.453111 20.1797 -0.476549 19.2578 1.39064Z" fill="#02C5AF" />
                                            <path d="M78.6563 1.39064L73.5547 11.7344L62.1407 13.3985C60.0938 13.6953 59.2735 16.2188 60.7579 17.6641L69.0157 25.711L67.0625 37.0781C66.711 39.1328 68.875 40.6719 70.6875 39.7109L80.8985 34.3438L91.1094 39.7109C92.9219 40.6641 95.086 39.1328 94.7344 37.0781L92.7813 25.711L101.039 17.6641C102.523 16.2188 101.703 13.6953 99.6563 13.3985L88.2422 11.7344L83.1407 1.39064C82.2266 -0.453111 79.5782 -0.476549 78.6563 1.39064Z" fill="#02C5AF" />
                                            <path d="M138.055 1.39064L132.953 11.7344L121.539 13.3985C119.492 13.6953 118.672 16.2188 120.156 17.6641L128.414 25.711L126.461 37.0781C126.109 39.1328 128.273 40.6719 130.086 39.7109L140.297 34.3438L150.508 39.7109C152.32 40.6641 154.484 39.1328 154.133 37.0781L152.18 25.711L160.438 17.6641C161.922 16.2188 161.102 13.6953 159.055 13.3985L147.641 11.7344L142.539 1.39064C141.625 -0.453111 138.977 -0.476549 138.055 1.39064Z" fill="#02C5AF" />
                                            <path d="M197.453 1.39064L192.352 11.7344L180.938 13.3985C178.891 13.6953 178.07 16.2188 179.555 17.6641L187.813 25.711L185.859 37.0781C185.508 39.1328 187.672 40.6719 189.484 39.7109L199.695 34.3438L209.906 39.7109C211.719 40.6641 213.883 39.1328 213.531 37.0781L211.578 25.711L219.836 17.6641C221.32 16.2188 220.5 13.6953 218.453 13.3985L207.039 11.7344L201.938 1.39064C201.023 -0.453111 198.375 -0.476549 197.453 1.39064Z" fill="#02C5AF" />
                                            <path d="M256.852 1.39064L251.75 11.7344L240.336 13.3985C238.289 13.6953 237.469 16.2188 238.953 17.6641L247.211 25.711L245.258 37.0781C244.906 39.1328 247.07 40.6719 248.883 39.7109L259.094 34.3438L269.305 39.7109C271.117 40.6641 273.281 39.1328 272.93 37.0781L270.977 25.711L279.234 17.6641C280.719 16.2188 279.898 13.6953 277.852 13.3985L266.438 11.7344L261.336 1.39064C260.422 -0.453111 257.773 -0.476549 256.852 1.39064Z" fill="#02C5AF" />
                                        </svg> {course.reviews} reviews</p>
                                        <div className="flex items-center gap-2 text-sm">
                                            <p className="text-dark-600 font-bold">${course.price.toFixed(2)}</p>
                                            <p className="text-sm text-gray-400 line-through">
                                                ${course.originalPrice.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='also-bought mt-4'>
                    <div className='container'>
                        <div className='also-bought-container px-4 pb-4'>
                            <div className="header" style={{ background: 'transparent' }}>
                                <h2 className="title">Students Also Bought</h2>
                            </div>
                            <div class="courses-grid">
                                <div class="course-card">
                                    <img src="https://i.ibb.co/jJ4GHXP/img1.jpg" alt="Course 1" class="course-image" />
                                    <div class="course-content">
                                        <h3 class="course-title">Advanced UI/UX Design Masterclass: From Concept to Implementation</h3>
                                        <p class="course-description">Master the complete UI/UX design workflow from research to final implementation with real-world projects.</p>
                                        <div class="course-stats">
                                            <div class="stat" data-tooltip='12.5K'>
                                                <svg fill="none" viewBox="0 0 20 20">
                                                    <path fill="#6F767E" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd" />
                                                </svg>
                                                12.5K
                                            </div>
                                            <div class="stat" data-tooltip='4.9'>
                                                <svg fill="none" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M12 4.875a.75.75 0 01.648.372l1.994 3.414 3.893.85a.75.75 0 01.395 1.238l-2.646 2.905.414 3.892a.75.75 0 01-1.042.768L12 16.744l-3.656 1.57a.75.75 0 01-1.042-.768l.414-3.892L5.07 10.75a.75.75 0 01.395-1.238l3.893-.85 1.994-3.414A.75.75 0 0112 4.875zm0 2.237l-1.512 2.59a.75.75 0 01-.488.354l-2.946.643 1.998 2.195a.75.75 0 01.191.584L8.93 16.43l2.775-1.192a.75.75 0 01.592 0l2.775 1.192-.314-2.952a.75.75 0 01.191-.584l1.998-2.195L14 10.056a.75.75 0 01-.488-.355L12 7.112z" clip-rule="evenodd" fill-rule="evenodd" />
                                                </svg>
                                                4.9
                                            </div>
                                            <div class="stat" data-tooltip='2.5h'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                                    <path fill="#6F767E" d="M11.0251 3.98957C12.6023 3.33626 14.2928 3 16 3C17.7072 3 19.3977 3.33626 20.9749 3.98957C22.5521 4.64288 23.9852 5.60045 25.1924 6.80761C26.3995 8.01477 27.3571 9.44788 28.0104 11.0251C28.6637 12.6023 29 14.2928 29 16C29 17.7072 28.6637 19.3977 28.0104 20.9749C27.3571 22.5521 26.3995 23.9852 25.1924 25.1924C23.9852 26.3995 22.5521 27.3571 20.9749 28.0104C19.3977 28.6637 17.7072 29 16 29C14.2928 29 12.6023 28.6637 11.0251 28.0104C9.44788 27.3571 8.01477 26.3995 6.80761 25.1924C5.60045 23.9852 4.64288 22.5521 3.98957 20.9749C3.33625 19.3977 3 17.7072 3 16C3 14.2928 3.33625 12.6023 3.98957 11.0251C4.64288 9.44788 5.60045 8.01477 6.80761 6.80761C8.01477 5.60045 9.44788 4.64288 11.0251 3.98957ZM16 5C14.5555 5 13.1251 5.28452 11.7905 5.83733C10.4559 6.39013 9.24327 7.20038 8.22183 8.22183C7.20038 9.24327 6.39013 10.4559 5.83733 11.7905C5.28452 13.1251 5 14.5555 5 16C5 17.4445 5.28452 18.8749 5.83733 20.2095C6.39013 21.5441 7.20038 22.7567 8.22183 23.7782C9.24327 24.7996 10.4559 25.6099 11.7905 26.1627C13.1251 26.7155 14.5555 27 16 27C17.4445 27 18.8749 26.7155 20.2095 26.1627C21.5441 25.6099 22.7567 24.7996 23.7782 23.7782C24.7996 22.7567 25.6099 21.5441 26.1627 20.2095C26.7155 18.8749 27 17.4445 27 16C27 14.5555 26.7155 13.1251 26.1627 11.7905C25.6099 10.4559 24.7996 9.24327 23.7782 8.22183C22.7567 7.20038 21.5441 6.39013 20.2095 5.83733C18.8749 5.28452 17.4445 5 16 5ZM16 8.33333C16.5523 8.33333 17 8.78105 17 9.33333V15.4648L20.5547 17.8346C21.0142 18.141 21.1384 18.7618 20.8321 19.2214C20.5257 19.6809 19.9048 19.8051 19.4453 19.4987L15.4453 16.8321C15.1671 16.6466 15 16.3344 15 16V9.33333C15 8.78105 15.4477 8.33333 16 8.33333Z" clip-rule="evenodd" fill-rule="evenodd" />
                                                </svg>
                                                2.5h
                                            </div>
                                        </div>
                                        <div class="price-section">
                                            <div class="pricing">
                                                <span class="current-price">$89.99</span>
                                                <span class="original-price">$129.99</span>
                                            </div>
                                            <button class="add-to-cart">
                                                <svg fill="none" viewBox="0 0 24 24">
                                                    <path fill="white" d="M22.5 16.14L23.92 6l-18.8-.81L4.92 4A4.43 4.43 0 002.51.8L.58 0 0 1.39l1.88.78a2.88 2.88 0 011.56 2.11l2.5 14.86a2.54 2.54 0 103.57 3h5.93a2.54 2.54 0 100-1.5H9.52a2.53 2.53 0 00-2.1-1.79l-.31-1.83 15.39-.88zm-4.65 4.21a1 1 0 11-.1 1.997 1 1 0 01.1-1.997zm4.36-12.92l-1 7.29-14.33.84-1.51-8.85 16.84.72zM8.14 21.4a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                                <span class="button-price">Buy $89.99</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="course-card">
                                    <img src="https://i.ibb.co/LJwrLdW/coaching-image.webp" alt="Course 2" class="course-image" />
                                    <div class="course-content">
                                        <h3 class="course-title">Frontend Development: Master React, Redux & Modern Web Development</h3>
                                        <p class="course-description">Learn modern frontend development with React, Redux and the latest web technologies through hands-on projects.</p>
                                        <div class="course-stats">
                                            <div class="stat" data-tooltip='8.2K'>
                                                <svg fill="none" viewBox="0 0 20 20">
                                                    <path fill="#6F767E" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd" />
                                                </svg>
                                                8.2K
                                            </div>
                                            <div class="stat" data-tooltip='4.9'>
                                                <svg fill="none" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M12 4.875a.75.75 0 01.648.372l1.994 3.414 3.893.85a.75.75 0 01.395 1.238l-2.646 2.905.414 3.892a.75.75 0 01-1.042.768L12 16.744l-3.656 1.57a.75.75 0 01-1.042-.768l.414-3.892L5.07 10.75a.75.75 0 01.395-1.238l3.893-.85 1.994-3.414A.75.75 0 0112 4.875zm0 2.237l-1.512 2.59a.75.75 0 01-.488.354l-2.946.643 1.998 2.195a.75.75 0 01.191.584L8.93 16.43l2.775-1.192a.75.75 0 01.592 0l2.775 1.192-.314-2.952a.75.75 0 01.191-.584l1.998-2.195L14 10.056a.75.75 0 01-.488-.355L12 7.112z" clip-rule="evenodd" fill-rule="evenodd" />
                                                </svg>
                                                4.9
                                            </div>
                                            <div class="stat" data-tooltip='3.5h'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                                    <path fill="#6F767E" d="M11.0251 3.98957C12.6023 3.33626 14.2928 3 16 3C17.7072 3 19.3977 3.33626 20.9749 3.98957C22.5521 4.64288 23.9852 5.60045 25.1924 6.80761C26.3995 8.01477 27.3571 9.44788 28.0104 11.0251C28.6637 12.6023 29 14.2928 29 16C29 17.7072 28.6637 19.3977 28.0104 20.9749C27.3571 22.5521 26.3995 23.9852 25.1924 25.1924C23.9852 26.3995 22.5521 27.3571 20.9749 28.0104C19.3977 28.6637 17.7072 29 16 29C14.2928 29 12.6023 28.6637 11.0251 28.0104C9.44788 27.3571 8.01477 26.3995 6.80761 25.1924C5.60045 23.9852 4.64288 22.5521 3.98957 20.9749C3.33625 19.3977 3 17.7072 3 16C3 14.2928 3.33625 12.6023 3.98957 11.0251C4.64288 9.44788 5.60045 8.01477 6.80761 6.80761C8.01477 5.60045 9.44788 4.64288 11.0251 3.98957ZM16 5C14.5555 5 13.1251 5.28452 11.7905 5.83733C10.4559 6.39013 9.24327 7.20038 8.22183 8.22183C7.20038 9.24327 6.39013 10.4559 5.83733 11.7905C5.28452 13.1251 5 14.5555 5 16C5 17.4445 5.28452 18.8749 5.83733 20.2095C6.39013 21.5441 7.20038 22.7567 8.22183 23.7782C9.24327 24.7996 10.4559 25.6099 11.7905 26.1627C13.1251 26.7155 14.5555 27 16 27C17.4445 27 18.8749 26.7155 20.2095 26.1627C21.5441 25.6099 22.7567 24.7996 23.7782 23.7782C24.7996 22.7567 25.6099 21.5441 26.1627 20.2095C26.7155 18.8749 27 17.4445 27 16C27 14.5555 26.7155 13.1251 26.1627 11.7905C25.6099 10.4559 24.7996 9.24327 23.7782 8.22183C22.7567 7.20038 21.5441 6.39013 20.2095 5.83733C18.8749 5.28452 17.4445 5 16 5ZM16 8.33333C16.5523 8.33333 17 8.78105 17 9.33333V15.4648L20.5547 17.8346C21.0142 18.141 21.1384 18.7618 20.8321 19.2214C20.5257 19.6809 19.9048 19.8051 19.4453 19.4987L15.4453 16.8321C15.1671 16.6466 15 16.3344 15 16V9.33333C15 8.78105 15.4477 8.33333 16 8.33333Z" clip-rule="evenodd" fill-rule="evenodd" />
                                                </svg>
                                                3.5h
                                            </div>
                                        </div>
                                        <div class="price-section">
                                            <div class="pricing">
                                                <span class="current-price">$59.99</span>
                                                <span class="original-price">$89.99</span>
                                            </div>
                                            <button class="add-to-cart">
                                                <svg fill="none" viewBox="0 0 24 24">
                                                    <path fill="white" d="M22.5 16.14L23.92 6l-18.8-.81L4.92 4A4.43 4.43 0 002.51.8L.58 0 0 1.39l1.88.78a2.88 2.88 0 011.56 2.11l2.5 14.86a2.54 2.54 0 103.57 3h5.93a2.54 2.54 0 100-1.5H9.52a2.53 2.53 0 00-2.1-1.79l-.31-1.83 15.39-.88zm-4.65 4.21a1 1 0 11-.1 1.997 1 1 0 01.1-1.997zm4.36-12.92l-1 7.29-14.33.84-1.51-8.85 16.84.72zM8.14 21.4a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                                <span class="button-price">Buy $59.99</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="course-card">
                                    <img src="https://i.ibb.co/k67BZds/community-image1.png" alt="Course 3" class="course-image" />
                                    <div class="course-content">
                                        <h3 class="course-title">Full Stack Web Development: Build Modern Web Applications</h3>
                                        <p class="course-description">Become a full-stack developer by mastering both frontend and backend technologies with practical projects.</p>
                                        <div class="course-stats">
                                            <div class="stat" data-tooltip='15.7K'>
                                                <svg fill="none" viewBox="0 0 20 20">
                                                    <path fill="#6F767E" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd" />
                                                </svg>
                                                15.7K </div>
                                            <div class="stat" data-tooltip='4.9'>
                                                <svg fill="none" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M12 4.875a.75.75 0 01.648.372l1.994 3.414 3.893.85a.75.75 0 01.395 1.238l-2.646 2.905.414 3.892a.75.75 0 01-1.042.768L12 16.744l-3.656 1.57a.75.75 0 01-1.042-.768l.414-3.892L5.07 10.75a.75.75 0 01.395-1.238l3.893-.85 1.994-3.414A.75.75 0 0112 4.875zm0 2.237l-1.512 2.59a.75.75 0 01-.488.354l-2.946.643 1.998 2.195a.75.75 0 01.191.584L8.93 16.43l2.775-1.192a.75.75 0 01.592 0l2.775 1.192-.314-2.952a.75.75 0 01.191-.584l1.998-2.195L14 10.056a.75.75 0 01-.488-.355L12 7.112z" clip-rule="evenodd" fill-rule="evenodd" />
                                                </svg>
                                                4.9
                                            </div>
                                            <div class="stat" data-tooltip='4.5h'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                                    <path fill="#6F767E" d="M11.0251 3.98957C12.6023 3.33626 14.2928 3 16 3C17.7072 3 19.3977 3.33626 20.9749 3.98957C22.5521 4.64288 23.9852 5.60045 25.1924 6.80761C26.3995 8.01477 27.3571 9.44788 28.0104 11.0251C28.6637 12.6023 29 14.2928 29 16C29 17.7072 28.6637 19.3977 28.0104 20.9749C27.3571 22.5521 26.3995 23.9852 25.1924 25.1924C23.9852 26.3995 22.5521 27.3571 20.9749 28.0104C19.3977 28.6637 17.7072 29 16 29C14.2928 29 12.6023 28.6637 11.0251 28.0104C9.44788 27.3571 8.01477 26.3995 6.80761 25.1924C5.60045 23.9852 4.64288 22.5521 3.98957 20.9749C3.33625 19.3977 3 17.7072 3 16C3 14.2928 3.33625 12.6023 3.98957 11.0251C4.64288 9.44788 5.60045 8.01477 6.80761 6.80761C8.01477 5.60045 9.44788 4.64288 11.0251 3.98957ZM16 5C14.5555 5 13.1251 5.28452 11.7905 5.83733C10.4559 6.39013 9.24327 7.20038 8.22183 8.22183C7.20038 9.24327 6.39013 10.4559 5.83733 11.7905C5.28452 13.1251 5 14.5555 5 16C5 17.4445 5.28452 18.8749 5.83733 20.2095C6.39013 21.5441 7.20038 22.7567 8.22183 23.7782C9.24327 24.7996 10.4559 25.6099 11.7905 26.1627C13.1251 26.7155 14.5555 27 16 27C17.4445 27 18.8749 26.7155 20.2095 26.1627C21.5441 25.6099 22.7567 24.7996 23.7782 23.7782C24.7996 22.7567 25.6099 21.5441 26.1627 20.2095C26.7155 18.8749 27 17.4445 27 16C27 14.5555 26.7155 13.1251 26.1627 11.7905C25.6099 10.4559 24.7996 9.24327 23.7782 8.22183C22.7567 7.20038 21.5441 6.39013 20.2095 5.83733C18.8749 5.28452 17.4445 5 16 5ZM16 8.33333C16.5523 8.33333 17 8.78105 17 9.33333V15.4648L20.5547 17.8346C21.0142 18.141 21.1384 18.7618 20.8321 19.2214C20.5257 19.6809 19.9048 19.8051 19.4453 19.4987L15.4453 16.8321C15.1671 16.6466 15 16.3344 15 16V9.33333C15 8.78105 15.4477 8.33333 16 8.33333Z" clip-rule="evenodd" fill-rule="evenodd" />
                                                </svg>
                                                4.5h
                                            </div>
                                        </div>
                                        <div class="price-section">
                                            <div class="pricing">
                                                <span class="current-price">$49.99</span>
                                                <span class="original-price">$79.99</span>
                                            </div>
                                            <button class="add-to-cart">
                                                <svg fill="none" viewBox="0 0 24 24">
                                                    <path fill="white" d="M22.5 16.14L23.92 6l-18.8-.81L4.92 4A4.43 4.43 0 002.51.8L.58 0 0 1.39l1.88.78a2.88 2.88 0 011.56 2.11l2.5 14.86a2.54 2.54 0 103.57 3h5.93a2.54 2.54 0 100-1.5H9.52a2.53 2.53 0 00-2.1-1.79l-.31-1.83 15.39-.88zm-4.65 4.21a1 1 0 11-.1 1.997 1 1 0 01.1-1.997zm4.36-12.92l-1 7.29-14.33.84-1.51-8.85 16.84.72zM8.14 21.4a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                                </svg>
                                                <span class="button-price">Buy $49.99</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="instructor-container mt-4">
                    <h2 class="section-title">Instructor</h2>

                    <div class="instructor-profile">
                        <div class="profile-image">
                            <img src="https://i.ibb.co/W5C6CXB/AVATAR-laurentfa.png" alt="Jose Portilla" />
                            <div class="online-indicator"></div>
                        </div>

                        <div class="profile-info">
                            <h3 class="instructor-name">
                                Jose Portilla
                                <svg class="verified-badge" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </h3>

                            <div class="instructor-title">Head of Data Science at Pierian Training</div>

                            <div class="meta-info">


                                <div class="meta-item">
                                    <svg viewBox="0 0 18.079 18.084"><g transform="translate(-170.87 -100.777)" data-name="Group 818" id="Group_818"><path fill="#13aff0" transform="translate(0 0)" d="M179.865,100.778a.567.567,0,0,0-.239.079L177.8,101.9l-2.128.018a.565.565,0,0,0-.486.283l-1.06,1.819-1.837,1.078a.565.565,0,0,0-.283.486L172,107.693l-1.051,1.846a.566.566,0,0,0,0,.565l1.042,1.828.018,2.128a.565.565,0,0,0,.283.486l1.819,1.06,1.078,1.837a.565.565,0,0,0,.486.283l2.111.009,1.846,1.051a.566.566,0,0,0,.565,0l1.828-1.042,2.128-.018a.565.565,0,0,0,.486-.283l1.06-1.819,1.837-1.078a.565.565,0,0,0,.283-.486l.009-2.111,1.051-1.846a.566.566,0,0,0,0-.565l-1.042-1.828-.018-2.128a.565.565,0,0,0-.283-.486l-1.819-1.06-1.078-1.837a.565.565,0,0,0-.486-.283l-2.111-.009-1.846-1.051a.566.566,0,0,0-.327-.079Zm.044,1.21,1.7.971a.563.563,0,0,0,.282.08l1.934.009.989,1.687a.565.565,0,0,0,.2.2l1.669.971.017,1.952a.564.564,0,0,0,.071.283l.971,1.678-.971,1.7a.564.564,0,0,0-.08.282l-.009,1.934-1.687.989a.565.565,0,0,0-.2.2l-.971,1.669-1.952.018a.564.564,0,0,0-.283.071l-1.678.971-1.7-.971a.564.564,0,0,0-.282-.08L176,116.6l-.989-1.687a.566.566,0,0,0-.2-.2l-1.669-.971-.018-1.952a.564.564,0,0,0-.071-.283l-.971-1.678.971-1.7a.563.563,0,0,0,.08-.283l.009-1.934,1.687-.989a.565.565,0,0,0,.2-.2l.971-1.669,1.952-.018a.564.564,0,0,0,.283-.071Zm0,1.616a6.217,6.217,0,1,0,6.217,6.217A6.226,6.226,0,0,0,179.91,103.6Zm0,1.13a5.087,5.087,0,1,1-5.087,5.087A5.078,5.078,0,0,1,179.91,104.735Z"></path></g></svg>
                                    Top Rated
                                </div>

                                <div class="location">
                                    <svg viewBox="0 0 24 24">
                                        <rect fill="none" height="24" width="24"></rect>
                                        <path d="M12,2C8.13,2,5,5.13,5,9c0,5.34,4.21,6.79,6.03,12.28C11.17,21.7,11.55,22,12,22s0.83-0.3,0.97-0.72 C14.79,15.79,19,14.34,19,9C19,5.13,15.87,2,12,2z M12,11.5c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5 C14.5,10.38,13.38,11.5,12,11.5z" />
                                    </svg>
                                    Indore, India
                                </div>
                            </div>
                        </div>

                        <div class="stats">
                            <div class="stat-item">
                                <svg class="stat-icon" viewBox="0 0 19.445 25.641"><path d="M174.989,32.883l0-.006-.923-1.679a10.8,10.8,0,0,1-.605-1.5l-.531-1.845,0-.011a2.311,2.311,0,0,0-1.394-1.394l-.011,0-1.85-.533-.024-.006a7.475,7.475,0,0,1-1.474-.6l-1.679-.923-.006,0a2.282,2.282,0,0,0-1.985,0l-.006,0-1.679.924a10.815,10.815,0,0,1-1.5.605l-1.845.531-.011,0a2.311,2.311,0,0,0-1.394,1.394l0,.011-.533,1.85-.006.024a7.475,7.475,0,0,1-.6,1.474L156,32.877l0,.006a2.289,2.289,0,0,0,0,1.985l0,.006.923,1.679a10.812,10.812,0,0,1,.606,1.5l.531,1.845,0,.011a2.311,2.311,0,0,0,1.394,1.394l.011,0,.346.1-2.356,6.02a.5.5,0,0,0,.613.661l3.319-1.021,2.03,2.537a.5.5,0,0,0,.868-.161l.977-3.07,2.05,3.189a.5.5,0,0,0,.421.23h0a.5.5,0,0,0,.421-.232l1.8-2.828,3.062.255a.5.5,0,0,0,.469-.759l-2.844-4.67.872-.251.011,0a2.311,2.311,0,0,0,1.394-1.394l0-.011.533-1.85c0-.008,0-.016.006-.024a7.483,7.483,0,0,1,.6-1.474l.924-1.679,0-.006A2.289,2.289,0,0,0,174.989,32.883ZM163.618,48.25l-1.658-2.073a.5.5,0,0,0-.538-.166l-2.653.816,2.012-5.141.537.155.024.006a7.478,7.478,0,0,1,1.474.6l1.679.923.006,0a1.959,1.959,0,0,0,.607.2Zm6.122-2.539a.5.5,0,0,0-.464.23l-1.542,2.423-2.075-3.227.522-1.64a1.773,1.773,0,0,0,.3-.125l.006,0,1.679-.924a10.793,10.793,0,0,1,1.479-.6l2.473,4.062Zm4.368-11.316-.923,1.679,0,.006a8.414,8.414,0,0,0-.687,1.706l-.528,1.832a1.325,1.325,0,0,1-.731.731l-1.844.531-.011,0a11.6,11.6,0,0,0-1.684.681l-.006,0-1.679.923a1.3,1.3,0,0,1-1.038,0l-1.679-.923-.006,0a8.414,8.414,0,0,0-1.706-.687l-1.832-.528a1.326,1.326,0,0,1-.731-.731l-.531-1.844,0-.011a11.6,11.6,0,0,0-.681-1.684l0-.006-.923-1.679a1.3,1.3,0,0,1,0-1.038l.923-1.679,0-.006a8.416,8.416,0,0,0,.687-1.706l.528-1.833a1.325,1.325,0,0,1,.731-.731l1.844-.531.011,0a11.6,11.6,0,0,0,1.684-.681l.006,0,1.679-.923a1.3,1.3,0,0,1,1.038,0l1.679.923.006,0a8.411,8.411,0,0,0,1.706.687l1.832.528a1.326,1.326,0,0,1,.731.731l.531,1.844,0,.011a11.6,11.6,0,0,0,.681,1.684l0,.006.923,1.679A1.3,1.3,0,0,1,174.107,34.394Z" transform="translate(-155.77 -24.152)" fill="#13c4cc"></path><path id="Path_3040" data-name="Path 3040" d="M281.993,147.787l-1.149-2.186-1.149,2.186-2.495.392,1.794,1.71-.392,2.439,2.243-1.121,2.243,1.121-.392-2.439,1.794-1.71Z" transform="translate(-271.121 -139.521)" fill="#13c4cc"></path><path d="M218.148,79.606a6.948,6.948,0,1,0,6.948,6.948A6.956,6.956,0,0,0,218.148,79.606Zm0,12.894a5.947,5.947,0,1,1,5.947-5.947A5.953,5.953,0,0,1,218.148,92.5Z" transform="translate(-208.425 -76.83)" fill="#13c4cc"></path></svg>
                                <div class="stat-text">4.8 Instructor Rating</div>
                            </div>

                            <div class="stat-item">
                                <svg class="stat-icon" viewBox="0 0 25.548 15.169"><path d="M-548,63.808a1.115,1.115,0,0,0,.284-1.149,1.114,1.114,0,0,0-.905-.763l-4.044-.588a.132.132,0,0,1-.1-.072l-1.809-3.664,0,0a1.114,1.114,0,0,0-1-.622,1.114,1.114,0,0,0-1.005.625l-1.808,3.664a.132.132,0,0,1-.1.072l-4.044.588a1.114,1.114,0,0,0-.905.763,1.114,1.114,0,0,0,.284,1.149l2.926,2.852a.132.132,0,0,1,.038.117l-.691,4.028a1.114,1.114,0,0,0,.446,1.1,1.112,1.112,0,0,0,.658.215,1.127,1.127,0,0,0,.523-.13l3.617-1.9a.134.134,0,0,1,.122,0l3.617,1.9a1.128,1.128,0,0,0,.523.13,1.113,1.113,0,0,0,.658-.215,1.114,1.114,0,0,0,.446-1.1l-.691-4.028a.132.132,0,0,1,.038-.116Zm-11.908,7.164.691-4.028a1.121,1.121,0,0,0-.322-.992l-2.926-2.852a.124.124,0,0,1-.033-.135.124.124,0,0,1,.106-.089l4.044-.588a1.121,1.121,0,0,0,.844-.613l1.809-3.665a.125.125,0,0,1,.118-.073.124.124,0,0,1,.117.071v0l1.809,3.664a1.121,1.121,0,0,0,.844.613l4.044.588a.124.124,0,0,1,.106.09.124.124,0,0,1-.033.134l-2.926,2.853a1.121,1.121,0,0,0-.324.986v.007l.691,4.028a.125.125,0,0,1-.052.128.137.137,0,0,1-.078.027.131.131,0,0,1-.061-.017l-3.617-1.9a1.125,1.125,0,0,0-.522-.129,1.123,1.123,0,0,0-.522.129l-3.617,1.9a.132.132,0,0,1-.062.017.135.135,0,0,1-.077-.026A.125.125,0,0,1-559.906,70.972Z" transform="translate(568.351 -56.947)" fill="#13c4cc"></path><g id="Group_820" data-name="Group 820" transform="translate(0 0.87)"><path id="Path_3043" data-name="Path 3043" d="M-696.547,85.058l1.228-2.489,1,2.049a.4.4,0,0,0,.382.226.7.7,0,0,0,
                                .2-.033.432.432,0,0,0,.3-.255.4.4,0,0,0-.03-.324l-1.05-2.142a.9.9,0,0,0-.813-.506.9.9,0,0,0-.813.505l-1.251,2.535-2.8.407a.9.9,0,0,0-.732.617.9.9,0,0,0,.229.929l2.025,1.973-.478,2.787a.9.9,0,0,0,.36.886.9.9,0,0,0,.532.174h0a.91.91,0,0,0,.423-.1l2.5-1.316,1.189.624a.215.215,0,0,0,.048.018.541.541,0,0,0,.123.013.451.451,0,0,0,.452-.337.43.43,0,0,0-.22-.546l-1.17-.614a.909.909,0,0,0-.422-.1.908.908,0,0,0-.422.1l-2.457,1.292.469-2.736a.907.907,0,0,0-.261-.8l-1.988-1.937,2.747-.4A.906.906,0,0,0-696.547,85.058Z" transform="translate(700.958 -81.585)" fill="#13c4cc"></path><path d="M-188.48,85.058l-1.228-2.489-1,2.049a.4.4,0,0,1-.382.226.7.7,0,0,1-.2-.033.431.431,0,0,1-.3-.255.4.4,0,0,1,.03-.324l1.05-2.142a.9.9,0,0,1,.813-.506.9.9,0,0,1,.813.505l1.251,2.535,2.8.407a.9.9,0,0,1,.732.617.9.9,0,0,1-.229.929l-2.025,1.973.478,2.787a.9.9,0,0,1-.36.886.9.9,0,0,1-.532.174h0a.911.911,0,0,1-.423-.1l-2.5-1.316-1.189.624a.215.215,0,0,1-.048.018.541.541,0,0,1-.123.013.451.451,0,0,1-.452-.337.43.43,0,0,1,.22-.546l1.17-.614a.91.91,0,0,1,.422-.1.908.908,0,0,1,.422.1l2.457,1.292-.469-2.736a.907.907,0,0,1,.261-.8l1.988-1.937-2.747-.4A.906.906,0,0,1-188.48,85.058Z" transform="translate(209.618 -81.585)" fill="#13c4cc"></path></g></svg>
                                <div class="stat-text">135,182 Reviews</div>
                            </div>

                            <div class="stat-item">
                                <svg class="stat-icon" viewBox="0 0 23.258 16.042" height="16.042" width="23.258"><path fill-rule="evenodd" fill="#13c4cc" transform="translate(-112.01 -115.84)" d="M123.76,115.84a3.8,3.8,0,1,0,3.786,3.8A3.807,3.807,0,0,0,123.76,115.84Zm0,1.368a2.432,2.432,0,1,1-2.42,2.434A2.417,2.417,0,0,1,123.76,117.208Zm-7.312,2.5a2.893,2.893,0,1,0,2.889,2.894A2.9,2.9,0,0,0,116.448,119.708Zm14.484.005a2.926,2.926,0,1,0,.074,0Zm-14.484,1.363a1.525,1.525,0,1,1-1.52,1.526A1.512,1.512,0,0,1,116.448,121.076Zm14.558,0a1.525,1.525,0,1,1-1.52,1.526A1.514,1.514,0,0,1,131.006,121.076Zm-7.367,2.909a5.838,5.838,0,0,0-4.871,2.62,4.348,4.348,0,0,0-2.4-.721h0a4.36,4.36,0,0,0-4.352,4.358v.959a.684.684,0,0,0,1.368,0v-.959a2.992,2.992,0,0,1,4.767-2.4,5.859,5.859,0,0,0-.354,2.011V131.2a.684.684,0,0,0,1.368,0v-1.353a4.543,4.543,0,0,1,.39-1.854l0-.005a.676.676,0,0,0,.055-.114v0a4.486,4.486,0,0,1,8.08.04q.013.031.028.06a4.54,4.54,0,0,1,.4,1.877V131.2a.684.684,0,0,0,1.368,0v-1.353a5.858,5.858,0,0,0-.351-2.008,2.991,2.991,0,0,1,4.771,2.4v.959a.681.681,0,0,0,1.363,0v-.959a4.354,4.354,0,0,0-6.757-3.635,5.838,5.838,0,0,0-4.873-2.621Z"></path></svg>
                                <div class="stat-text">263,854 Students</div>
                            </div>

                            <div class="stat-item">
                                <svg class="stat-icon" viewBox="0 0 17.231 19.025"><path d="M874.606,12.1a2.757,2.757,0,0,0-2.708,2.708v14.1a2.221,2.221,0,0,0,2.215,2.215h14.523a.512.512,0,0,0,.492-.492V17.024a.471.471,0,0,0-.492-.492,1.856,1.856,0,0,1-1.723-1.723,1.856,1.856,0,0,1,1.723-1.723.492.492,0,1,0,0-.985Zm0,.985h11.97a2.621,2.621,0,0,0,0,3.446h-11.97a1.855,1.855,0,0,1-1.723-1.723A1.855,1.855,0,0,1,874.606,13.086Zm-1.723,3.785a2.68,2.68,0,0,0,1.723.646h13.539V30.141H874.114a1.217,1.217,0,0,1-1.231-1.231Z" transform="translate(-871.898 -12.101)" fill="#13c4cc"></path><path d="M1037.028,197.833l-2.935-2.935a.541.541,0,0,0-.766,0v6.636a.541.541,0,0,0,.766,0l2.935-2.935A.541.541,0,0,0,1037.028,197.833Z" transform="translate(-1026.231 -186.71)" fill="#13c4cc"></path></svg>
                                <div class="stat-text">36 Courses</div>
                            </div>
                        </div>
                    </div>

                    <div class="instructor-bio">
                        Passages des Lorem Ipsum, aber der Hauptteil erlitt Ände rungen in irgendeiner Form, durch Humor oder zufällige Wörter wel che nicht einmal ansatzweise glaubwdurch Humor oder zufällige Wörter wel che nicht einmal ansatzweisürdig aussehen. Wenn du eine Passage des Lorem Ipsum nutzt, solltest du aufpassen dass in der Mitte des Textes keine ungewollten Wörter stehen...
                    </div>

                    <div class="show-more">
                        SHOW MORE
                        <svg viewBox="0 0 24 24" fill="none">
                            <path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div class="review-container mt-4">
                    <div class="reviews-section">
                        <h2 class="section-title">Course Reviews</h2>
                        <p class="section-subtitle">Read what other students think about <strong>The Complete Options Course</strong></p>

                        <div class="rating-summary">
                            <div class="rating-left">
                                <div class="rating-number">4.3</div>
                                <div class="rating-stars">★★★★☆</div>
                                <div class="rating-count">43 Reviews</div>
                                <div class="rating-actions">
                                    <a href="#" class="rating-action">Write a review →</a>
                                    <a href="#" class="rating-action">See all 73 reviews →</a>
                                </div>
                            </div>
                            <div class="rating-bars">
                                <div class="rating-bar">
                                    <span class="rating-bar-label">5</span>
                                    <div class="rating-bar-track">
                                        <div class="rating-bar-fill" style={{ width: "70%" }}></div>
                                    </div>
                                    <span class="rating-bar-percent">70%</span>
                                </div>
                                <div class="rating-bar">
                                    <span class="rating-bar-label">4</span>
                                    <div class="rating-bar-track">
                                        <div class="rating-bar-fill" style={{ width: "16%" }}></div>
                                    </div>
                                    <span class="rating-bar-percent">16%</span>
                                </div>
                                <div class="rating-bar">
                                    <span class="rating-bar-label">3</span>
                                    <div class="rating-bar-track">
                                        <div class="rating-bar-fill" style={{ width: "0%" }}></div>
                                    </div>
                                    <span class="rating-bar-percent">0%</span>
                                </div>
                                <div class="rating-bar">
                                    <span class="rating-bar-label">2</span>
                                    <div class="rating-bar-track">
                                        <div class="rating-bar-fill" style={{ width: "6%" }}></div>
                                    </div>
                                    <span class="rating-bar-percent">6%</span>
                                </div>
                                <div class="rating-bar">
                                    <span class="rating-bar-label">1</span>
                                    <div class="rating-bar-track">
                                        <div class="rating-bar-fill" style={{ width: "8%" }}></div>
                                    </div>
                                    <span class="rating-bar-percent">8%</span>
                                </div>
                            </div>
                        </div>

                        <div class="reviews-grid">
                            <div class="review-card">
                                <div class="review-header">
                                    <img src="https://i.ibb.co/87nXCrv/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Shuwang Y." class="review-avatar" />
                                    <div class="review-meta">
                                        <div class="review-author">Shuwang Y.</div>
                                        <div class="review-rating">
                                            <span class="star">★</span>
                                            <span>4.9</span>
                                            <span class="review-date">Jun 22, 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="review-title">Learning Python for Data Analysis and Visualization</h3>
                                <p class="review-content">Ansatzweise glaubwdurch Humor oder zufällige Wörter wel che nicht einmal ansatzweiseurdig aussehen. Wenn du eine Passage des Lorem Ipsum nutzt, solltest du aufpassen.</p>
                                <div class="review-publish-date">Published 3 weeks ago</div>
                                <div class="review-footer">
                                    <div class="review-action">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                        </svg>
                                        <span class="review-action-text">Helpful</span>
                                    </div>
                                    <div class="review-action">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path>
                                        </svg>
                                        <span class="review-action-text">Not Helpful</span>
                                    </div>
                                </div>
                            </div>

                            <div class="review-card">
                                <div class="review-header">
                                    <img src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Kiking A." class="review-avatar" />
                                    <div class="review-meta">
                                        <div class="review-author">Kiking A.</div>
                                        <div class="review-rating">
                                            <span class="star">★</span>
                                            <span>5.0</span>
                                            <span class="review-date">Jun 22, 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="review-title">Learning Python for Data Analysis and Visualization</h3>
                                <p class="review-content">Ansatzweise glaubwdurch Humor oder zufällige Wörter wel che nicht einmal ansatzweiseurdig aussehen. Wenn du eine Passage des Lorem Ipsum nutzt, solltest du aufpassen.</p>
                                <div class="review-publish-date">Published 3 weeks ago</div>
                                <div class="review-footer">
                                    <div class="review-action">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                        </svg>
                                        <span class="review-action-text">Helpful</span>
                                    </div>
                                    <div class="review-action">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path>
                                        </svg>
                                        <span class="review-action-text">Not Helpful</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="view-all">
                            <a href="#" class="view-all-button">
                                <span>VIEW ALL REVIWES</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                {authorTooltip &&
                    <div onClick={() => setauthorTooltip(false)}>
                        <div className='author-tooltip modal-overlay' >
                            <div className='author-card p-3' onClick={(e) => e.stopPropagation()} style={{ width: '360px' }}>
                                {/* Image Section */}
                                <div className="relative w-full h-48">
                                    <Image
                                        src='https://i.ibb.co/jJ4GHXP/img1.jpg'
                                        alt="Banner"
                                        style={{ borderRadius: '12px 12px 0px 0' }}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-3 border">
                                    <h2 className="text-lg font-bold text-gray-800">The 4D Copywriting Community</h2>
                                    <p className="text-gray-600 text-sm my-2">
                                        The best place to become a full-time freelance copywriter. Join our
                                        community of passionate writers and learn from experienced professionals.
                                    </p>

                                    <div className="flex flex-col gap-2 mb-4 mt-3 font-bold">
                                        <div className="flex items-center  text-gray-600" style={{ fontSize: '14.5px' }}>
                                            <span className="mr-2">💎</span> 1-on-1 Mentorship
                                        </div>
                                        <div className="flex items-center  text-gray-600" style={{ fontSize: '14.5px' }}>
                                            <span className="mr-2">✏️</span> 4D Copywriting Academy 2.0
                                        </div>
                                        <div className="flex items-center text-gray-600" style={{ fontSize: '14.5px' }}>
                                            <span className="mr-2">📍</span> 4D Copywriters Map
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex justify-between items-center flex-col gap-3 border-t pt-2">
                                        <div className='flex items-center justify-between gap-4 mb-3'>
                                            <p className="text-gray-800 flex flex-col items-center">
                                                Learners<span className="font-bold text-sm text-xl">44.8k</span>
                                            </p>
                                            |
                                            <p className="text-gray-800 flex flex-col text-sm items-center">
                                                Posts<span className="font-bold text-xl ">2.4k</span>
                                            </p>
                                            |
                                            <p className="text-gray-800 flex flex-col text-sm items-center">
                                                Mods<span className="font-bold text-xl">4</span>
                                            </p>
                                        </div>
                                        <div className="flex space-x-1">
                                            {avatars.map((avatar, index) => (
                                                <img
                                                    key={index}
                                                    src={avatar}
                                                    alt={`Avatar ${index + 1}`}
                                                    className="w-8 h-8 rounded-full border border-white"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <button className="mt-4 w-full py-2.5 px-4 bg-teal-500 text-white text-sm rounded-md shadow hover:bg-teal-600">
                                        View Discussions
                                    </button>
                                </div></div></div></div>}
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
            </div >
        </div>
    );
};

export default CourseDetails;
