"use client";
import React, { useState } from 'react'

function Instructor() {
    const [activeTab, setactiveTab] = useState('courses');
    const [viewMoreActive, setviewMoreActive] = useState(false)
    return (
        <div className='instructor'>
            <div className="page-container p-0">
                <div className="main-content">
                    <div className="content-main">
                        <div className="profile-header">
                            <img src="https://i.ibb.co/YP71Tb6/profile9.jpg" alt="Instructor" className="profile-avatar" />
                            <div className="profile-info">
                                <h1 className="profile-name">James Ritchie</h1>
                                <div className="profile-achievements">
                                    <span>Inorganic Chemistry Expert</span>
                                    <span className="achievement-divider">◇</span>
                                    <span>Mentor of 100 percentilers</span>
                                    <span className="achievement-divider">◇</span>
                                    <span>15+ years teaching experience</span>
                                </div>
                                <div className="profile-stats">
                                    <div className="stat-group">
                                        <span className="stat-label">Watch mins</span>
                                        <span className="stat-value watch-mins">196M</span>
                                    </div>
                                    <div className="stat-group">
                                        <span className="stat-label">Rating</span>
                                        <span className="stat-value rating">4.9</span>
                                    </div>
                                    <div className="stat-group">
                                        <span className="stat-label">Followers</span>
                                        <span className="stat-value followers">90K</span>
                                    </div>
                                    <button className="follow-button">Follow</button>
                                </div>
                            </div>
                        </div>

                        <nav className="nav-tabs">
                            <div className={`nav-tab ${activeTab === 'courses' ? 'active' : ''}`} onClick={() => setactiveTab('courses')}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" />
                                </svg>
                                Courses
                            </div>
                            <div className={`nav-tab ${activeTab === 'Sessions' ? 'active' : ''}`} onClick={() => setactiveTab('Sessions')}>
                                <svg fill="none" viewBox="0 0 24 24">
                                    <path fill="#4F4F4F" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                                Sessions
                            </div>
                            <div className={`nav-tab ${activeTab === 'Communities' ? 'active' : ''}`} onClick={() => setactiveTab('Communities')}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path fill="#4F4F4F" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    <path fill="#4F4F4F" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                                Communities
                            </div>
                            <div className={`nav-tab ${activeTab === 'Bundles' ? 'active' : ''}`} onClick={() => setactiveTab('Bundles')}>
                                <svg fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3 1h18a3 3 0 0 1 3 3v8H2v5a1 1 0 0 0 1 1h7v2H3a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3ZM2 4v2h20V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm11.8 10.81a2.7 2.7 0 0 1 4.2.43 2.7 2.7 0 0 1 4.2-.43 2.8 2.8 0 0 1 0 3.92L18 23l-4.2-4.27a2.8 2.8 0 0 1 0-3.92Z" />
                                </svg>
                                Bundles
                            </div>
                        </nav>
                        {activeTab === 'courses' &&
                            <>
                                <div className="course-grid">
                                    <div className="course-card">
                                        <div className="course-image-container">
                                            <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="Course" className="course-image" />
                                            <button className="bookmark-button">
                                                <svg color="#13C4CC" viewBox="0 0 18 18">
                                                    <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="course-content">
                                            <h3 className="course-title">Advanced Inorganic Chemistry: Coordination Compounds</h3>
                                            <div className="course-stats">
                                                <div className="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    <span className="stat-text">42.5K</span>
                                                    <div className="stat-tooltip">42.5K students</div>
                                                </div>
                                                <div className="stat">
                                                    <svg viewBox="0 0 16 15">
                                                        <path fill="#19CBCF" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                    </svg>
                                                    <span className="stat-text">4.9 (1.2K)</span>
                                                    <div className="stat-tooltip">4.9 rating, 1.2K reviews</div>
                                                </div>
                                            </div>
                                            <div className="course-meta">
                                                <span>27.5 hr</span>
                                                <span className="meta-dot"></span>
                                                <span>399 lectures</span>
                                                <span className="meta-dot"></span>
                                                <span>All Levels</span>
                                            </div>
                                            <div className="price-container">
                                                <span className="current-price">$79.99</span>
                                                <span className="original-price">$199.99</span>
                                            </div>
                                            <button className="view-course-button">View Course</button>
                                        </div>
                                    </div>

                                    <div className="course-card">
                                        <div className="course-image-container">
                                            <img src="https://i.ibb.co/ss92kB8/c5.jpg" alt="Course" className="course-image" />
                                            <button className="bookmark-button">
                                                <svg color="#13C4CC" viewBox="0 0 18 18">
                                                    <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="course-content">
                                            <h3 className="course-title">Chemical Bonding & Molecular Structure</h3>
                                            <div className="course-stats">
                                                <div className="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033Z" />
                                                    </svg>
                                                    <span className="stat-text">35.8K</span>
                                                    <div className="stat-tooltip">35.8K students</div>
                                                </div>
                                                <div className="stat">
                                                    <svg viewBox="0 0 16 15">
                                                        <path fill="currentColor" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                    </svg>
                                                    <span className="stat-text">4.8 (985)</span>
                                                    <div className="stat-tooltip">4.8 rating, 985 reviews</div>
                                                </div>
                                            </div>
                                            <div className="course-meta">
                                                <span>32.5 hr</span>
                                                <span className="meta-dot"></span>
                                                <span>425 lectures</span>
                                                <span className="meta-dot"></span>
                                                <span>All Levels</span>
                                            </div>
                                            <div className="price-container">
                                                <span className="current-price">$69.99</span>
                                                <span className="original-price">$169.99</span>
                                            </div>
                                            <button className="view-course-button">View Course</button>
                                        </div>
                                    </div>

                                    <div className="course-card">
                                        <div className="course-image-container">
                                            <img src="https://i.ibb.co/NKffPZQ/c4.jpg" alt="Course" className="course-image" />
                                            <button className="bookmark-button">
                                                <svg color="#13C4CC" viewBox="0 0 18 18">
                                                    <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="course-content">
                                            <h3 className="course-title">Periodic Table & Chemical Properties</h3>
                                            <div className="course-stats">
                                                <div className="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033Z" />
                                                    </svg>
                                                    <span className="stat-text">28.3K</span>
                                                    <div className="stat-tooltip">28.3K students</div>
                                                </div>
                                                <div className="stat">
                                                    <svg viewBox="0 0 16 15">
                                                        <path fill="currentColor" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                    </svg>
                                                    <span className="stat-text">4.9 (1.5K)</span>
                                                    <div className="stat-tooltip">4.9 rating, 1.5K reviews</div>
                                                </div>
                                            </div>
                                            <div className="course-meta">
                                                <span>29.5 hr</span>
                                                <span className="meta-dot"></span>
                                                <span>380 lectures</span>
                                                <span className="meta-dot"></span>
                                                <span>All Levels</span>
                                            </div>
                                            <div className="price-container">
                                                <span className="current-price">$89.99</span>
                                                <span className="original-price">$189.99</span>
                                            </div>
                                            <button className="view-course-button">View Course</button>
                                        </div>
                                    </div>
                                    <div className="course-card">
                                        <div className="course-image-container">
                                            <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="Course" className="course-image" />
                                            <button className="bookmark-button">
                                                <svg color="#13C4CC" viewBox="0 0 18 18">
                                                    <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="course-content">
                                            <h3 className="course-title">Advanced Inorganic Chemistry: Coordination Compounds</h3>
                                            <div className="course-stats">
                                                <div className="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    <span className="stat-text">42.5K</span>
                                                    <div className="stat-tooltip">42.5K students</div>
                                                </div>
                                                <div className="stat">
                                                    <svg viewBox="0 0 16 15">
                                                        <path fill="#19CBCF" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                    </svg>
                                                    <span className="stat-text">4.9 (1.2K)</span>
                                                    <div className="stat-tooltip">4.9 rating, 1.2K reviews</div>
                                                </div>
                                            </div>
                                            <div className="course-meta">
                                                <span>27.5 hr</span>
                                                <span className="meta-dot"></span>
                                                <span>399 lectures</span>
                                                <span className="meta-dot"></span>
                                                <span>All Levels</span>
                                            </div>
                                            <div className="price-container">
                                                <span className="current-price">$79.99</span>
                                                <span className="original-price">$199.99</span>
                                            </div>
                                            <button className="view-course-button">View Course</button>
                                        </div>
                                    </div>

                                    <div className="course-card">
                                        <div className="course-image-container">
                                            <img src="https://i.ibb.co/ss92kB8/c5.jpg" alt="Course" className="course-image" />
                                            <button className="bookmark-button">
                                                <svg color="#13C4CC" viewBox="0 0 18 18">
                                                    <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="course-content">
                                            <h3 className="course-title">Chemical Bonding & Molecular Structure</h3>
                                            <div className="course-stats">
                                                <div className="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033Z" />
                                                    </svg>
                                                    <span className="stat-text">35.8K</span>
                                                    <div className="stat-tooltip">35.8K students</div>
                                                </div>
                                                <div className="stat">
                                                    <svg viewBox="0 0 16 15">
                                                        <path fill="currentColor" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                    </svg>
                                                    <span className="stat-text">4.8 (985)</span>
                                                    <div className="stat-tooltip">4.8 rating, 985 reviews</div>
                                                </div>
                                            </div>
                                            <div className="course-meta">
                                                <span>32.5 hr</span>
                                                <span className="meta-dot"></span>
                                                <span>425 lectures</span>
                                                <span className="meta-dot"></span>
                                                <span>All Levels</span>
                                            </div>
                                            <div className="price-container">
                                                <span className="current-price">$69.99</span>
                                                <span className="original-price">$169.99</span>
                                            </div>
                                            <button className="view-course-button">View Course</button>
                                        </div>
                                    </div>

                                    <div className="course-card">
                                        <div className="course-image-container">
                                            <img src="https://i.ibb.co/NKffPZQ/c4.jpg" alt="Course" className="course-image" />
                                            <button className="bookmark-button">
                                                <svg color="#13C4CC" viewBox="0 0 18 18">
                                                    <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="course-content">
                                            <h3 className="course-title">Periodic Table & Chemical Properties</h3>
                                            <div className="course-stats">
                                                <div className="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033Z" />
                                                    </svg>
                                                    <span className="stat-text">28.3K</span>
                                                    <div className="stat-tooltip">28.3K students</div>
                                                </div>
                                                <div className="stat">
                                                    <svg viewBox="0 0 16 15">
                                                        <path fill="currentColor" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                    </svg>
                                                    <span className="stat-text">4.9 (1.5K)</span>
                                                    <div className="stat-tooltip">4.9 rating, 1.5K reviews</div>
                                                </div>
                                            </div>
                                            <div className="course-meta">
                                                <span>29.5 hr</span>
                                                <span className="meta-dot"></span>
                                                <span>380 lectures</span>
                                                <span className="meta-dot"></span>
                                                <span>All Levels</span>
                                            </div>
                                            <div className="price-container">
                                                <span className="current-price">$89.99</span>
                                                <span className="original-price">$189.99</span>
                                            </div>
                                            <button className="view-course-button">View Course</button>
                                        </div>
                                    </div>
                                    {viewMoreActive &&
                                        <>
                                            <div className="course-card">
                                                <div className="course-image-container">
                                                    <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="Course" className="course-image" />
                                                    <button className="bookmark-button">
                                                        <svg color="#13C4CC" viewBox="0 0 18 18">
                                                            <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="course-content">
                                                    <h3 className="course-title">Advanced Inorganic Chemistry: Coordination Compounds</h3>
                                                    <div className="course-stats">
                                                        <div className="stat">
                                                            <svg fill="none" viewBox="0 0 20 20">
                                                                <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                            </svg>
                                                            <span className="stat-text">42.5K</span>
                                                            <div className="stat-tooltip">42.5K students</div>
                                                        </div>
                                                        <div className="stat">
                                                            <svg viewBox="0 0 16 15">
                                                                <path fill="#19CBCF" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                            </svg>
                                                            <span className="stat-text">4.9 (1.2K)</span>
                                                            <div className="stat-tooltip">4.9 rating, 1.2K reviews</div>
                                                        </div>
                                                    </div>
                                                    <div className="course-meta">
                                                        <span>27.5 hr</span>
                                                        <span className="meta-dot"></span>
                                                        <span>399 lectures</span>
                                                        <span className="meta-dot"></span>
                                                        <span>All Levels</span>
                                                    </div>
                                                    <div className="price-container">
                                                        <span className="current-price">$79.99</span>
                                                        <span className="original-price">$199.99</span>
                                                    </div>
                                                    <button className="view-course-button">View Course</button>
                                                </div>
                                            </div>

                                            <div className="course-card">
                                                <div className="course-image-container">
                                                    <img src="https://i.ibb.co/ss92kB8/c5.jpg" alt="Course" className="course-image" />
                                                    <button className="bookmark-button">
                                                        <svg color="#13C4CC" viewBox="0 0 18 18">
                                                            <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="course-content">
                                                    <h3 className="course-title">Chemical Bonding & Molecular Structure</h3>
                                                    <div className="course-stats">
                                                        <div className="stat">
                                                            <svg fill="none" viewBox="0 0 20 20">
                                                                <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033Z" />
                                                            </svg>
                                                            <span className="stat-text">35.8K</span>
                                                            <div className="stat-tooltip">35.8K students</div>
                                                        </div>
                                                        <div className="stat">
                                                            <svg viewBox="0 0 16 15">
                                                                <path fill="currentColor" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                            </svg>
                                                            <span className="stat-text">4.8 (985)</span>
                                                            <div className="stat-tooltip">4.8 rating, 985 reviews</div>
                                                        </div>
                                                    </div>
                                                    <div className="course-meta">
                                                        <span>32.5 hr</span>
                                                        <span className="meta-dot"></span>
                                                        <span>425 lectures</span>
                                                        <span className="meta-dot"></span>
                                                        <span>All Levels</span>
                                                    </div>
                                                    <div className="price-container">
                                                        <span className="current-price">$69.99</span>
                                                        <span className="original-price">$169.99</span>
                                                    </div>
                                                    <button className="view-course-button">View Course</button>
                                                </div>
                                            </div>

                                            <div className="course-card">
                                                <div className="course-image-container">
                                                    <img src="https://i.ibb.co/NKffPZQ/c4.jpg" alt="Course" className="course-image" />
                                                    <button className="bookmark-button">
                                                        <svg color="#13C4CC" viewBox="0 0 18 18">
                                                            <path d="M4 0h10a2 2 0 0 1 2 2v14.828a1 1 0 0 1-1.65.76L8.988 13l-5.337 4.582A1 1 0 0 1 2 16.823V2a2 2 0 0 1 2-2Zm10 2H4v12.647l4.986-4.281L14 14.656V2Z" fill="currentColor" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="course-content">
                                                    <h3 className="course-title">Periodic Table & Chemical Properties</h3>
                                                    <div className="course-stats">
                                                        <div className="stat">
                                                            <svg fill="none" viewBox="0 0 20 20">
                                                                <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033Z" />
                                                            </svg>
                                                            <span className="stat-text">28.3K</span>
                                                            <div className="stat-tooltip">28.3K students</div>
                                                        </div>
                                                        <div className="stat">
                                                            <svg viewBox="0 0 16 15">
                                                                <path fill="currentColor" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                                            </svg>
                                                            <span className="stat-text">4.9 (1.5K)</span>
                                                            <div className="stat-tooltip">4.9 rating, 1.5K reviews</div>
                                                        </div>
                                                    </div>
                                                    <div className="course-meta">
                                                        <span>29.5 hr</span>
                                                        <span className="meta-dot"></span>
                                                        <span>380 lectures</span>
                                                        <span className="meta-dot"></span>
                                                        <span>All Levels</span>
                                                    </div>
                                                    <div className="price-container">
                                                        <span className="current-price">$89.99</span>
                                                        <span className="original-price">$189.99</span>
                                                    </div>
                                                    <button className="view-course-button">View Course</button>
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
                                <div className="follow-count">111</div>
                            </h2>
                            <div className="avatars-grid">
                                <img src="https://i.ibb.co/87nXCrv/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Follower" className="avatar" />
                                <img src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Follower" className="avatar" />
                                <img src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Follower" className="avatar" />
                                <img src="https://i.ibb.co/87nXCrv/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Follower" className="avatar" />
                                <img src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Follower" className="avatar" />
                                <img src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Follower" className="avatar" />
                                <img src="https://i.ibb.co/87nXCrv/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Follower" className="avatar" />
                            </div>
                            <a href="#" className="more-followers">+97 followers</a>
                        </div>
                        <div className="sidebar-section">

                            <h2 className="section-title">
                                Following
                                <div className="follow-count">98</div>
                            </h2>
                            <div className="avatars-grid">
                                <img src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Following" className="avatar" />
                                <img src="https://i.ibb.co/87nXCrv/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Following" className="avatar" />
                                <img src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Following" className="avatar" />
                                <img src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Following" className="avatar" />
                                <img src="https://i.ibb.co/87nXCrv/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Following" className="avatar" />
                                <img src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Following" className="avatar" />
                                <img src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Following" className="avatar" />
                            </div>
                            <a href="#" className="more-followers">+93 following</a>
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
                </div>
            </div>
        </div>
    )
}

export default Instructor