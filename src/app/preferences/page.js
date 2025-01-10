"use client";
import { useState, useEffect } from 'react';

export default function Preferences() {
    const [language, setLanguage] = useState('en');
    const [autoEnroll, setAutoEnroll] = useState(false);
    const [showLoggedIn, setShowLoggedIn] = useState(true);
    const [showGuests, setShowGuests] = useState(true);
    const [visibilityOptionsEnabled, setVisibilityOptionsEnabled] = useState(true);
    const [qualification, setQualification] = useState('');
    const [regulator, setRegulator] = useState('');

    useEffect(() => {
        if (!showLoggedIn) {
            setShowGuests(false);
            setVisibilityOptionsEnabled(false);
        } else {
            setVisibilityOptionsEnabled(showLoggedIn || showGuests);
        }
    }, [showLoggedIn, showGuests]);

    // State to manage all toggles
    const [toggles, setToggles] = useState({
        newLoginBrowser: true,
        newLoginOnSite: true,
        newCommentBrowser: true,
        newCommentOnSite: true,
        newBadgeBrowser: true,
        newBadgeOnSite: true,
        courseEnrollmentBrowser: true,
        courseEnrollmentOnSite: true,
        eventEnrollmentBrowser: true,
        eventEnrollmentOnSite: true,
        eventScheduledBrowser: true,
        eventScheduledOnSite: true,
        courseUnenrollmentBrowser: true,
        courseUnenrollmentOnSite: true,
        certificateAwardedBrowser: true,
        certificateAwardedOnSite: true,
        courseCompletedBrowser: true,
        courseCompletedOnSite: true,
        installmentPaidBrowser: true,
        installmentPaidOnSite: true,
        installmentCancelledBrowser: true,
        installmentCancelledOnSite: true,
        newCoursePublishedBrowser: true,
        newCoursePublishedOnSite: true,
        newTopicStartedBrowser: true,
        newTopicStartedOnSite: true,
        upcomingLiveSessionBrowser: true,
        upcomingLiveSessionOnSite: true,
        topicLikesBrowser: true,
        topicLikesOnSite: true,
        instructorPromotionsBrowser: true,
        instructorPromotionsOnSite: true,
        instructorAnnouncementsBrowser: true,
        instructorAnnouncementsOnSite: true,
        newEventPublishedBrowser: true,
        newEventPublishedOnSite: true,
        coursePublishedBrowser: true,
        coursePublishedOnSite: true,
        courseRejectedBrowser: true,
        courseRejectedOnSite: true,
        teamJoinedBrowser: true,
        teamJoinedOnSite: true,
        newSaleBrowser: true,
        newSaleOnSite: true,
        newEnrollmentBrowser: true,
        newEnrollmentOnSite: true,
        newFollowerBrowser: true,
        newFollowerOnSite: true,
        paymentRequestApprovedBrowser: true,
        paymentRequestApprovedOnSite: true,
        paymentRequestRejectedBrowser: true,
        paymentRequestRejectedOnSite: true,
        newSubscriptionBrowser: true,
        newSubscriptionOnSite: true,
    });

    // Function to handle toggle changes
    const handleToggle = (toggleName) => {
        setToggles((prev) => ({
            ...prev,
            [toggleName]: !prev[toggleName],
        }));
    };


    return (
        <div className="container-fluid preferences">
            <h1 className="page-title">Preferences</h1>

            {/* General Section */}
            <div className="section">
                <div className="section-left">
                    <h2 className="section-title">General</h2>
                    <p className="section-description">
                        Configure your basic platform preferences, including language settings and automatic enrollment options.
                    </p>
                </div>
                <div className="section-right">
                    <div className="notification-group">
                        <div className="notification-item">
                            <div className="notification-name">
                                Language
                                <div className="tooltip">
                                    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 16v-4m0-4h.01" />
                                    </svg>
                                    <span className="tooltip-text">Select your preferred language for the platform</span>
                                </div>
                            </div>
                            <div className="select-wrapper">
                                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                                    <option value="en">English</option>
                                    <option value="es">Español</option>
                                    <option value="fr">Français</option>
                                    <option value="de">Deutsch</option>
                                    <option value="it">Italiano</option>
                                    <option value="pt">Português</option>
                                </select>
                            </div>
                        </div>
                        <div className="notification-item">
                            <div className="notification-name">
                                Auto-enroll Free Sessions
                                <div className="tooltip">
                                    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 16v-4m0-4h.01" />
                                    </svg>
                                    <span className="tooltip-text">Automatically enroll in free sessions from linked schools</span>
                                </div>
                            </div>
                            <div className="toggle-wrapper">
                                <label className="toggle">
                                    <input
                                        type="checkbox"
                                        checked={autoEnroll}
                                        onChange={() => setAutoEnroll(!autoEnroll)}
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Privacy Section */}
            <div className="section">
                <div className="section-left">
                    <h2 className="section-title">Privacy</h2>
                    <p className="section-description">
                        Control who can view your profile and what information is visible to different types of users.
                    </p>
                </div>
                <div className="section-right">
                    <div className="notification-group">
                        <div className='notification-item' style={{ display: 'block' }}>
                            <div className="checkbox-group flex flex-col" style={{ alignItems: 'flex-start' }}>
                                <div className="checkbox-item">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={showLoggedIn}
                                            onChange={() => setShowLoggedIn(!showLoggedIn)}
                                        />
                                        Show profile to logged-in users
                                    </label>
                                </div>
                                <div className="checkbox-item">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={showGuests}
                                            disabled={!showLoggedIn}
                                            onChange={() => setShowGuests(!showGuests)}
                                        />
                                        Show profile to guests
                                    </label>
                                </div>
                                {visibilityOptionsEnabled && (
                                    <div className="nested-options">
                                        <div className="checkbox-item">
                                            <label className="checkbox-label">
                                                <input type="checkbox" defaultChecked />
                                                Show enrolled courses
                                            </label>
                                        </div>
                                        <div className="checkbox-item">
                                            <label className="checkbox-label">
                                                <input type="checkbox" defaultChecked />
                                                Show communities
                                            </label>
                                        </div>
                                        <div className="checkbox-item">
                                            <label className="checkbox-label">
                                                <input type="checkbox" defaultChecked />
                                                Show enrolled events
                                            </label>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CPE Section */}
            <div className="section">
                <div className="section-left">
                    <h2 className="section-title">CPE</h2>
                    <p className="section-description">
                        Set your professional certification details and regulatory requirements for continuing professional education.
                    </p>
                </div>
                <div className="section-right">
                    <div className="notification-group">
                        <div className="notification-item">
                            <div className="notification-name">
                                Qualification
                                <div className="tooltip">
                                    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 16v-4m0-4h.01" />
                                    </svg>
                                    <span className="tooltip-text">Select your professional qualification</span>
                                </div>
                            </div>
                            <div className="select-wrapper">
                                <select value={qualification} onChange={(e) => setQualification(e.target.value)}>
                                    <option value="">Select Qualification</option>
                                    <option value="cpa">CPA</option>
                                    <option value="cfa">CFA</option>
                                    <option value="acca">ACCA</option>
                                    <option value="cia">CIA</option>
                                    <option value="cima">CIMA</option>
                                </select>
                            </div>
                        </div>
                        <div className="notification-item">
                            <div className="notification-name">
                                Regulator
                                <div className="tooltip">
                                    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 16v-4m0-4h.01" />
                                    </svg>
                                    <span className="tooltip-text">Select your regulatory body</span>
                                </div>
                            </div>
                            <div className="select-wrapper">
                                <select value={regulator} onChange={(e) => setRegulator(e.target.value)}>
                                    <option value="">Select Regulator</option>
                                    <option value="aicpa">AICPA</option>
                                    <option value="cfai">CFAI</option>
                                    <option value="acca_global">ACCA Global</option>
                                    <option value="iia">IIA</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notification Section */}
            <div className="section mb-0">
                <div className="section-left">
                    <h2 className="section-title">Notifications</h2>
                    <p className="section-description">
                        Manage your notification preferences for different activities and events. Choose how you want to be notified for each type of activity.
                    </p>
                </div>
                <div className="section-right">
                    <div className="notification-group">
                        <h3 className="notification-group-title">Student Notifications</h3>
                        <div className="notification-header">
                            <div className="header-label">Notification Type</div>
                            <div className="header-label">Browser</div>
                            <div className="header-label">On Site</div>
                        </div>

                        {[
                            { name: 'New Login', browserKey: 'newLoginBrowser', siteKey: 'newLoginOnSite' },
                            { name: 'New Comment', browserKey: 'newCommentBrowser', siteKey: 'newCommentOnSite' },
                            { name: 'New Badge', browserKey: 'newBadgeBrowser', siteKey: 'newBadgeOnSite' },
                            { name: 'Course Enrollment', browserKey: 'courseEnrollmentBrowser', siteKey: 'courseEnrollmentOnSite' },
                            { name: 'Event Enrollment', browserKey: 'eventEnrollmentBrowser', siteKey: 'eventEnrollmentOnSite' },
                            { name: 'Event Scheduled', browserKey: 'eventScheduledBrowser', siteKey: 'eventScheduledOnSite' },
                            { name: 'Course Unenrollment', browserKey: 'courseUnenrollmentBrowser', siteKey: 'courseUnenrollmentOnSite' },
                            { name: 'Certificate Awarded', browserKey: 'certificateAwardedBrowser', siteKey: 'certificateAwardedOnSite' },
                            { name: 'Course Completed', browserKey: 'courseCompletedBrowser', siteKey: 'courseCompletedOnSite' },
                            { name: 'Installment Paid', browserKey: 'installmentPaidBrowser', siteKey: 'installmentPaidOnSite' },
                            { name: 'Installment Cancelled', browserKey: 'installmentCancelledBrowser', siteKey: 'installmentCancelledOnSite' },
                            { name: 'New Course Published', browserKey: 'newCoursePublishedBrowser', siteKey: 'newCoursePublishedOnSite' },
                            { name: 'New Topic Started', browserKey: 'newTopicStartedBrowser', siteKey: 'newTopicStartedOnSite' },
                            { name: 'Upcoming Live Session', browserKey: 'upcomingLiveSessionBrowser', siteKey: 'upcomingLiveSessionOnSite' },
                            { name: 'Topic Likes', browserKey: 'topicLikesBrowser', siteKey: 'topicLikesOnSite' },
                            { name: 'Instructor Promotions', browserKey: 'instructorPromotionsBrowser', siteKey: 'instructorPromotionsOnSite' },
                            { name: 'Instructor Announcements', browserKey: 'instructorAnnouncementsBrowser', siteKey: 'instructorAnnouncementsOnSite' },
                            { name: 'New Event Published', browserKey: 'newEventPublishedBrowser', siteKey: 'newEventPublishedOnSite' },
                        ].map((item) => (
                            <div className="notification-item" key={item.name}>
                                <div className="notification-name">{item.name}</div>
                                <div className="toggle-wrapper">
                                    <label className="toggle">
                                        <input
                                            type="checkbox"
                                            checked={toggles[item.browserKey]}
                                            onChange={() => handleToggle(item.browserKey)}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <div className="toggle-wrapper">
                                    <label className="toggle">
                                        <input
                                            type="checkbox"
                                            checked={toggles[item.siteKey]}
                                            onChange={() => handleToggle(item.siteKey)}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className='notification-group'>
                        <h3 className="notification-group-title">Instructor Notifications</h3>
                        <div className="notification-header">
                            <div className="header-label">Notification Type</div>
                            <div className="header-label">Browser</div>
                            <div className="header-label">On Site</div>
                        </div>

                        {[
                            { name: 'Course Published', browserKey: 'coursePublishedBrowser', siteKey: 'coursePublishedOnSite' },
                            { name: 'Course Rejected', browserKey: 'courseRejectedBrowser', siteKey: 'courseRejectedOnSite' },
                            { name: 'Team Joined', browserKey: 'teamJoinedBrowser', siteKey: 'teamJoinedOnSite' },
                            { name: 'New Sale', browserKey: 'newSaleBrowser', siteKey: 'newSaleOnSite' },
                            { name: 'New Enrollment', browserKey: 'newEnrollmentBrowser', siteKey: 'newEnrollmentOnSite' },
                            { name: 'New Follower', browserKey: 'newFollowerBrowser', siteKey: 'newFollowerOnSite' },
                            { name: 'Payment Request Approved', browserKey: 'paymentRequestApprovedBrowser', siteKey: 'paymentRequestApprovedOnSite' },
                            { name: 'Payment Request Rejected', browserKey: 'paymentRequestRejectedBrowser', siteKey: 'paymentRequestRejectedOnSite' },
                            { name: 'New Subscription', browserKey: 'newSubscriptionBrowser', siteKey: 'newSubscriptionOnSite' },
                        ].map((item) => (
                            <div className="notification-item" key={item.name}>
                                <div className="notification-name">{item.name}</div>
                                <div className="toggle-wrapper">
                                    <label className="toggle">
                                        <input
                                            type="checkbox"
                                            checked={toggles[item.browserKey]}
                                            onChange={() => handleToggle(item.browserKey)}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                                <div className="toggle-wrapper">
                                    <label className="toggle">
                                        <input
                                            type="checkbox"
                                            checked={toggles[item.siteKey]}
                                            onChange={() => handleToggle(item.siteKey)}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end w-100">
                <button type="submit" className="submit-btn" style={{ marginLeft: 'auto' }}>
                   Save Preferences
                </button>
            </div>
        </div >
    );
}
