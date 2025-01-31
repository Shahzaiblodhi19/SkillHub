import Image from 'next/image';
import { useState, useEffect } from 'react';

const NotificationsPanel = ({ setIsPanelActive, isPanelActive }) => {
    const [activeTab, setActiveTab] = useState('student');
    const [searchTerm, setSearchTerm] = useState('');
    const [hideRead, setHideRead] = useState(false);
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            avatar: "https://i.ibb.co/dJh6T3K/AVATAR-midtone-ux-instrgram.jpg",
            name: "You",
            text: "earned a new badge",
            time: { date: "Friday, Dec 23, 2024", timeAgo: "1 hour" },
            isRead: false,
            isVisible: true,
            link: "Active Member",
            course: "", // No course mentioned for this notification
        },
        {
            id: 2,
            avatar: "https://i.ibb.co/WsLk5GY/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg",
            name: "Fleur",
            text: "commented in Dashboard 2.0",
            comment: '"Dashboard 2.0 looks great!"', // Added a comment
            time: { date: "Friday, Dec 23, 2024", timeAgo: "2 hours" },
            isRead: false,
            isVisible: true,
            link: "",
            course: "Dashboard 2.0", // Associated course
        },
        {
            id: 3,
            avatar: "https://i.ibb.co/NKp6WsG/AVATAR-Kostis-Kapelonis.png",
            name: "Lily-Rose",
            text: "followed you",
            time: { date: "Friday, Dec 23, 2024", timeAgo: "3 hours" },
            isRead: false,
            isVisible: true,
            link: "",
            course: "",
        },
        {
            id: 4,
            avatar: "https://i.ibb.co/QjGXmRr/AVATAR-laurentfa.png",
            name: "You",
            text: "were enrolled into Intro to UX Design",
            time: { date: "Friday, Dec 23, 2024", timeAgo: "4 hours" },
            isRead: false,
            isVisible: true,
            link: "Intro to UX Design",
            courseImage: "https://i.ibb.co/GFhHTqZ/c2.jpg",
            para: "by Sarah Johnson",
            course: "Intro to UX Design",
        },
        {
            id: 5,
            avatar: "https://i.ibb.co/cF4gPr5/AVATAR-github-com-biowaffeln.png",
            name: "Your",
            text: "certificate is available",
            time: { date: "Friday, Dec 23, 2024", timeAgo: "5 hours" },
            isRead: false,
            isVisible: true,
            link: "Certificate XYZ",
            course: "Certificate XYZ",
        },
        {
            id: 6,
            avatar: "https://i.ibb.co/Y24j8fH/AVATAR-Hannah-Seligson.png",
            name: "You",
            text: "logged in from Brooklyn, NY",
            time: { date: "Friday, Dec 23, 2024", timeAgo: "6 hours" },
            isRead: false,
            isVisible: true,
            link: "",
            course: "",
        },
    ]);

    // useEffect to update notification counts
    useEffect(() => {
        updateNotificationCounts();
    }, [notifications, activeTab]);

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    // Clear search input
    const handleClearSearch = () => {
        setSearchTerm('');
    };

    // Handle filter to hide read notifications
    const handleHideReadChange = (e) => {
        setHideRead(e.target.checked);
    };

    // Handle tab click
    const handleTabClick = (category) => {
        setActiveTab(category);
    };

    // Mark all notifications as read
    const handleMarkAllRead = () => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notif) => ({ ...notif, isRead: true }))
        );
    };

    // Filter notifications by category
    const filterNotificationsByTab = (category) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notif) =>
                notif.category === category ? { ...notif, isVisible: true } : { ...notif, isVisible: false }
            )
        );
    };

    // Mark a single notification as read
    const handleMarkAsRead = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notif) =>
                notif.id === id ? { ...notif, isRead: true } : notif
            )
        );
    };

    // Dismiss a notification
    const handleDismissNotification = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notif) => notif.id !== id)
        );
    };

    // Update notification counts (for tabs or other purposes)
    const updateNotificationCounts = () => {
        // Logic to update counts per tab, you can modify this depending on the category and unread count logic
    };
    return (
        <div className={`notifications-panel ${isPanelActive ? 'active' : ''}`} style={{ zIndex: '1000' }}>
            {/* Panel Header */}
            <div className="panel-header">
                <div className="header-top">
                        <h1 className="panel-title">Notifications</h1>
                    <div className="header-controls">
                        <label className="hide-read">
                            Hide Read
                            <label className="toggle-switch">
                                <input type="checkbox" checked={hideRead} onChange={handleHideReadChange} />
                                <span className="toggle-slider"></span>
                            </label>
                        </label>
                        <div onClick={handleMarkAllRead} className="header-icon">
                            <svg className="tabler-icon tabler-icon-list-check" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
                                <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
                                <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
                                <path d="M11 6l9 0"></path>
                                <path d="M11 12l9 0"></path>
                                <path d="M11 18l9 0"></path>
                            </svg>
                        </div>
                        <div className="header-icon header-icons">
                            <svg className="tabler-icon tabler-icon-settings" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path></svg>
                        </div>
                        <div onClick={() => setIsPanelActive(false)} className="header-icon close-icon header-icons">
                            <svg fill="none" viewBox="0 0 15 15">
                                <path clipRule="evenodd" fillRule="evenodd" fill="currentColor" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="tabs">
                    {['student', 'instructor', 'comments', 'system'].map((category) => {
                        // Calculate the unread count for each category
                        const unreadCount = notifications.filter(
                            (notif) => notif.category === category && !notif.isRead
                        ).length;

                        // Calculate total unread notifications across all categories
                        const totalUnreadCount = notifications.filter((notif) => !notif.isRead).length;

                        console.log(`Category: ${category}, Unread Count: ${unreadCount}`);
                        console.log(`Total Unread Notifications: ${totalUnreadCount}`);

                        return (
                            <div
                                key={category}
                                className={`tab ${activeTab === category ? 'active' : ''}`}
                                onClick={() => handleTabClick(category)} // Mark notifications as read when tab is clicked
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                                <span className="tab-count">
                                    {totalUnreadCount > 0 ? totalUnreadCount : '0'}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            {activeTab === 'student' &&
                <div className='tab-content'>
                    {/* Search Box */}
                    <div className="search-container">
                        <svg className="search-icon" viewBox="1 1 60 60">
                            <path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"></path>
                            <path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"></path>
                        </svg>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Filter messages"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <div
                            className="clear-search"
                            style={{ display: searchTerm ? 'flex' : 'none' }}
                            onClick={handleClearSearch}
                        >
                            <svg fill="none" viewBox="0 0 12 12" width="12" height="12">
                                <path fill="currentColor" d="M7.46875 6L10.8438 2.65625C11.0312 2.46875 11.0312 2.125 10.8438 1.9375L10.0625 1.15625C9.875 0.96875 9.53125 0.96875 9.34375 1.15625L6 4.53125L2.625 1.15625C2.4375 0.96875 2.09375 0.96875 1.90625 1.15625L1.125 1.9375C0.9375 2.125 0.9375 2.46875 1.125 2.65625L4.5 6L1.125 9.375C0.9375 9.5625 0.9375 9.90625 1.125 10.0938L1.90625 10.875C2.09375 11.0625 2.4375 11.0625 2.625 10.875L6 7.5L9.34375 10.875C9.53125 11.0625 9.875 11.0625 10.0625 10.875L10.8438 10.0938C11.0312 9.90625 11.0312 9.5625 10.8438 9.375L7.46875 6Z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* Notifications List */}
                    <div className="notifications-list">
                        {notifications
                            .filter((notif) => notif.isVisible !== false)
                            .filter((notif) => notif.text.toLowerCase().includes(searchTerm))
                            .filter((notif) => (hideRead ? !notif.isRead : true))
                            .map((notification) => (
                                <div key={notification.id} className={`notification ${notification.isRead === true ? 'read' : ''}`}>
                                    <div className="avatar">
                                        <Image
                                            src={notification.avatar}
                                            alt={notification.name}
                                            width={40} // specify width and height for next/image
                                            height={40}
                                        />
                                    </div>
                                    <div className="notification-content relative">
                                        <div className="notification-text" style={{ fontSize: '12.4px' }}>
                                            <strong>{notification.name}</strong> {notification.text}
                                            <a href={notification.link} className="notification-link ml-2">
                                                {notification.course}
                                            </a>
                                        </div>
                                        {notification.comment && (
                                            <div className="comment-box" style={{ fontSize: '12.5px' }}>{notification.comment}</div>
                                        )}
                                        {notification.courseImage && notification.course && notification.para && (
                                            <div className="course-preview">
                                                <img src={notification.courseImage} alt="Course" />
                                                <div className="course-info">
                                                    <div className="course-title" style={{ fontSize: '13.5px' }}>{notification.course}</div>
                                                    <div className="course-instructor" style={{ fontSize: '12px' }}>{notification.para}</div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="notification-meta">
                                            <span>{notification.time.date}</span>
                                            <span>{notification.time.timeAgo}</span>
                                        </div>
                                        <div className="notification-indicators">

                                            <div onClick={() => handleMarkAsRead(notification.id)} className="mark-read">
                                                <svg viewBox="0 0 256 256" fill="currentColor" height="100%" width="100%">
                                                    <path fill={notification.isRead === true ? '#009ECB' : 'currentColor'} d="M149.61,85.71l-89.6,88a8,8,0,0,1-11.22,0L10.39,136a8,8,0,1,1,11.22-11.41L54.4,156.79l84-82.5a8,8,0,1,1,11.22,11.42Zm96.1-11.32a8,8,0,0,0-11.32-.1l-84,82.5-18.83-18.5a8,8,0,0,0-11.21,11.42l24.43,24a8,8,0,0,0,11.22,0l89.6-88A8,8,0,0,0,245.71,74.39Z"></path>
                                                </svg>
                                            </div>
                                            <div onClick={() => handleDismissNotification(notification.id)} className="dismiss-notification">
                                                <svg fill="none" viewBox="0 0 12 12" width="12" height="12">
                                                    <path
                                                        fill="currentColor"
                                                        d="M7.46875 6L10.8438 2.65625C11.0312 2.46875 11.0312 2.125 10.8438 1.9375L10.0625 1.15625C9.875 0.96875 9.53125 0.96875 9.34375 1.15625L6 4.53125L2.625 1.15625C2.4375 0.96875 2.09375 0.96875 1.90625 1.15625L1.125 1.9375C0.9375 2.125 0.9375 2.46875 1.125 2.65625L4.5 6L1.125 9.375C0.9375 9.5625 0.9375 9.90625 1.125 10.0938L1.90625 10.875C2.09375 11.0625 2.4375 11.0625 2.625 10.875L6 7.5L9.34375 10.875C9.53125 11.0625 9.875 11.0625 10.0625 10.875L10.8438 10.0938C11.0312 9.90625 11.0312 9.5625 10.8438 9.375L7.46875 6Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            {notification.isRead === false ?
                                                <div className="unread-indicator"></div> : ''}
                                        </div>
                                    </div>

                                </div>
                            ))}
                    </div>
                </div>
            }
            {activeTab === 'instructor' &&
                <div className='tab-content'>
                    {/* Search Box */}
                    <div className="search-container">
                        <svg className="search-icon" viewBox="1 1 60 60">
                            <path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"></path>
                            <path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"></path>
                        </svg>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Filter messages"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <div
                            className="clear-search"
                            style={{ display: searchTerm ? 'flex' : 'none' }}
                            onClick={handleClearSearch}
                        >
                            <svg fill="none" viewBox="0 0 12 12" width="12" height="12">
                                <path fill="currentColor" d="M7.46875 6L10.8438 2.65625C11.0312 2.46875 11.0312 2.125 10.8438 1.9375L10.0625 1.15625C9.875 0.96875 9.53125 0.96875 9.34375 1.15625L6 4.53125L2.625 1.15625C2.4375 0.96875 2.09375 0.96875 1.90625 1.15625L1.125 1.9375C0.9375 2.125 0.9375 2.46875 1.125 2.65625L4.5 6L1.125 9.375C0.9375 9.5625 0.9375 9.90625 1.125 10.0938L1.90625 10.875C2.09375 11.0625 2.4375 11.0625 2.625 10.875L6 7.5L9.34375 10.875C9.53125 11.0625 9.875 11.0625 10.0625 10.875L10.8438 10.0938C11.0312 9.90625 11.0312 9.5625 10.8438 9.375L7.46875 6Z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* Notifications List */}
                    <div className="notifications-list">
                        {notifications
                            .filter((notif) => notif.isVisible !== false)
                            .filter((notif) => notif.text.toLowerCase().includes(searchTerm))
                            .filter((notif) => (hideRead ? !notif.isRead : true))
                            .map((notification) => (
                                <div key={notification.id} className={`notification ${notification.isRead === true ? 'read' : ''}`}>
                                    <div className="avatar">
                                        <Image
                                            src={notification.avatar}
                                            alt={notification.name}
                                            width={40} // specify width and height for next/image
                                            height={40}
                                        />
                                    </div>
                                    <div className="notification-content relative">
                                        <div className="notification-text" style={{ fontSize: '12.4px' }}>
                                            <strong>{notification.name}</strong> {notification.text}
                                            <a href={notification.link} className="notification-link ml-2">
                                                {notification.course}
                                            </a>
                                        </div>
                                        {notification.comment && (
                                            <div className="comment-box" style={{ fontSize: '12.5px' }}>{notification.comment}</div>
                                        )}
                                        {notification.courseImage && notification.course && notification.para && (
                                            <div className="course-preview">
                                                <img src={notification.courseImage} alt="Course" />
                                                <div className="course-info">
                                                    <div className="course-title" style={{ fontSize: '13.5px' }}>{notification.course}</div>
                                                    <div className="course-instructor" style={{ fontSize: '12px' }}>{notification.para}</div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="notification-meta">
                                            <span>{notification.time.date}</span>
                                            <span>{notification.time.timeAgo}</span>
                                        </div>

                                        <div className="notification-indicators">
                                            <div onClick={() => handleMarkAsRead(notification.id)} className="mark-read">
                                                <svg viewBox="0 0 256 256" fill="currentColor" height="100%" width="100%">
                                                    <path fill={notification.isRead === true ? '#009ECB' : 'currentColor'} d="M149.61,85.71l-89.6,88a8,8,0,0,1-11.22,0L10.39,136a8,8,0,1,1,11.22-11.41L54.4,156.79l84-82.5a8,8,0,1,1,11.22,11.42Zm96.1-11.32a8,8,0,0,0-11.32-.1l-84,82.5-18.83-18.5a8,8,0,0,0-11.21,11.42l24.43,24a8,8,0,0,0,11.22,0l89.6-88A8,8,0,0,0,245.71,74.39Z"></path>
                                                </svg>
                                            </div>
                                            <div onClick={() => handleDismissNotification(notification.id)} className="dismiss-notification">
                                                <svg fill="none" viewBox="0 0 12 12" width="12" height="12">
                                                    <path
                                                        fill="currentColor"
                                                        d="M7.46875 6L10.8438 2.65625C11.0312 2.46875 11.0312 2.125 10.8438 1.9375L10.0625 1.15625C9.875 0.96875 9.53125 0.96875 9.34375 1.15625L6 4.53125L2.625 1.15625C2.4375 0.96875 2.09375 0.96875 1.90625 1.15625L1.125 1.9375C0.9375 2.125 0.9375 2.46875 1.125 2.65625L4.5 6L1.125 9.375C0.9375 9.5625 0.9375 9.90625 1.125 10.0938L1.90625 10.875C2.09375 11.0625 2.4375 11.0625 2.625 10.875L6 7.5L9.34375 10.875C9.53125 11.0625 9.875 11.0625 10.0625 10.875L10.8438 10.0938C11.0312 9.90625 11.0312 9.5625 10.8438 9.375L7.46875 6Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            {notification.isRead === false ?
                                                <div className="unread-indicator"></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            }
            {activeTab === 'comments' &&
                <div className='tab-content'>
                    {/* Search Box */}
                    <div className="search-container">
                        <svg className="search-icon" viewBox="1 1 60 60">
                            <path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"></path>
                            <path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"></path>
                        </svg>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Filter messages"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <div
                            className="clear-search"
                            style={{ display: searchTerm ? 'flex' : 'none' }}
                            onClick={handleClearSearch}
                        >
                            <svg fill="none" viewBox="0 0 12 12" width="12" height="12">
                                <path fill="currentColor" d="M7.46875 6L10.8438 2.65625C11.0312 2.46875 11.0312 2.125 10.8438 1.9375L10.0625 1.15625C9.875 0.96875 9.53125 0.96875 9.34375 1.15625L6 4.53125L2.625 1.15625C2.4375 0.96875 2.09375 0.96875 1.90625 1.15625L1.125 1.9375C0.9375 2.125 0.9375 2.46875 1.125 2.65625L4.5 6L1.125 9.375C0.9375 9.5625 0.9375 9.90625 1.125 10.0938L1.90625 10.875C2.09375 11.0625 2.4375 11.0625 2.625 10.875L6 7.5L9.34375 10.875C9.53125 11.0625 9.875 11.0625 10.0625 10.875L10.8438 10.0938C11.0312 9.90625 11.0312 9.5625 10.8438 9.375L7.46875 6Z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* Notifications List */}
                    <div className="notifications-list">
                        {notifications
                            .filter((notif) => notif.isVisible !== false)
                            .filter((notif) => notif.text.toLowerCase().includes(searchTerm))
                            .filter((notif) => (hideRead ? !notif.isRead : true))
                            .map((notification) => (
                                <div key={notification.id} className={`notification ${notification.isRead === true ? 'read' : ''}`}>
                                    <div className="avatar">
                                        <Image
                                            src={notification.avatar}
                                            alt={notification.name}
                                            width={40} // specify width and height for next/image
                                            height={40}
                                        />
                                    </div>
                                    <div className="notification-content relative">
                                        <div className="notification-text" style={{ fontSize: '12.4px' }}>
                                            <strong>{notification.name}</strong> {notification.text}
                                            <a href={notification.link} className="notification-link ml-2">
                                                {notification.course}
                                            </a>
                                        </div>
                                        {notification.comment && (
                                            <div className="comment-box" style={{ fontSize: '12.5px' }}>{notification.comment}</div>
                                        )}
                                        {notification.courseImage && notification.course && notification.para && (
                                            <div className="course-preview">
                                                <img src={notification.courseImage} alt="Course" />
                                                <div className="course-info">
                                                    <div className="course-title" style={{ fontSize: '13.5px' }}>{notification.course}</div>
                                                    <div className="course-instructor" style={{ fontSize: '12px' }}>{notification.para}</div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="notification-meta">
                                            <span>{notification.time.date}</span>
                                            <span>{notification.time.timeAgo}</span>
                                        </div>

                                        <div className="notification-indicators">
                                            <div onClick={() => handleMarkAsRead(notification.id)} className="mark-read">
                                                <svg viewBox="0 0 256 256" fill="currentColor" height="100%" width="100%">
                                                    <path fill={notification.isRead === true ? '#009ECB' : 'currentColor'} d="M149.61,85.71l-89.6,88a8,8,0,0,1-11.22,0L10.39,136a8,8,0,1,1,11.22-11.41L54.4,156.79l84-82.5a8,8,0,1,1,11.22,11.42Zm96.1-11.32a8,8,0,0,0-11.32-.1l-84,82.5-18.83-18.5a8,8,0,0,0-11.21,11.42l24.43,24a8,8,0,0,0,11.22,0l89.6-88A8,8,0,0,0,245.71,74.39Z"></path>
                                                </svg>
                                            </div>
                                            <div onClick={() => handleDismissNotification(notification.id)} className="dismiss-notification">
                                                <svg fill="none" viewBox="0 0 12 12" width="12" height="12">
                                                    <path
                                                        fill="currentColor"
                                                        d="M7.46875 6L10.8438 2.65625C11.0312 2.46875 11.0312 2.125 10.8438 1.9375L10.0625 1.15625C9.875 0.96875 9.53125 0.96875 9.34375 1.15625L6 4.53125L2.625 1.15625C2.4375 0.96875 2.09375 0.96875 1.90625 1.15625L1.125 1.9375C0.9375 2.125 0.9375 2.46875 1.125 2.65625L4.5 6L1.125 9.375C0.9375 9.5625 0.9375 9.90625 1.125 10.0938L1.90625 10.875C2.09375 11.0625 2.4375 11.0625 2.625 10.875L6 7.5L9.34375 10.875C9.53125 11.0625 9.875 11.0625 10.0625 10.875L10.8438 10.0938C11.0312 9.90625 11.0312 9.5625 10.8438 9.375L7.46875 6Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            {notification.isRead === false ?
                                                <div className="unread-indicator"></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            }
            {activeTab === 'system' &&
                <div className='tab-content'>
                    {/* Search Box */}
                    <div className="search-container">
                        <svg className="search-icon" viewBox="1 1 60 60">
                            <path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"></path>
                            <path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"></path>
                        </svg>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Filter messages"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <div
                            className="clear-search"
                            style={{ display: searchTerm ? 'flex' : 'none' }}
                            onClick={handleClearSearch}
                        >
                            <svg fill="none" viewBox="0 0 12 12" width="12" height="12">
                                <path fill="currentColor" d="M7.46875 6L10.8438 2.65625C11.0312 2.46875 11.0312 2.125 10.8438 1.9375L10.0625 1.15625C9.875 0.96875 9.53125 0.96875 9.34375 1.15625L6 4.53125L2.625 1.15625C2.4375 0.96875 2.09375 0.96875 1.90625 1.15625L1.125 1.9375C0.9375 2.125 0.9375 2.46875 1.125 2.65625L4.5 6L1.125 9.375C0.9375 9.5625 0.9375 9.90625 1.125 10.0938L1.90625 10.875C2.09375 11.0625 2.4375 11.0625 2.625 10.875L6 7.5L9.34375 10.875C9.53125 11.0625 9.875 11.0625 10.0625 10.875L10.8438 10.0938C11.0312 9.90625 11.0312 9.5625 10.8438 9.375L7.46875 6Z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* Notifications List */}
                    <div className="notifications-list">
                        {notifications
                            .filter((notif) => notif.isVisible !== false)
                            .filter((notif) => notif.text.toLowerCase().includes(searchTerm))
                            .filter((notif) => (hideRead ? !notif.isRead : true))
                            .map((notification) => (
                                <div key={notification.id} className={`notification ${notification.isRead === true ? 'read' : ''}`}>
                                    <div className="avatar">
                                        <Image
                                            src={notification.avatar}
                                            alt={notification.name}
                                            width={40} // specify width and height for next/image
                                            height={40}
                                        />
                                    </div>
                                    <div className="notification-content relative">
                                        <div className="notification-text" style={{ fontSize: '12.4px' }}>
                                            <strong>{notification.name}</strong> {notification.text}
                                            <a href={notification.link} className="notification-link ml-2">
                                                {notification.course}
                                            </a>
                                        </div>
                                        {notification.comment && (
                                            <div className="comment-box" style={{ fontSize: '12.5px' }}>{notification.comment}</div>
                                        )}
                                        {notification.courseImage && notification.course && notification.para && (
                                            <div className="course-preview">
                                                <img src={notification.courseImage} alt="Course" />
                                                <div className="course-info">
                                                    <div className="course-title" style={{ fontSize: '13.5px' }}>{notification.course}</div>
                                                    <div className="course-instructor" style={{ fontSize: '12px' }}>{notification.para}</div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="notification-meta">
                                            <span>{notification.time.date}</span>
                                            <span>{notification.time.timeAgo}</span>
                                        </div>

                                        <div className="notification-indicators">
                                            <div onClick={() => handleMarkAsRead(notification.id)} className="mark-read">
                                                <svg viewBox="0 0 256 256" fill="currentColor" height="100%" width="100%">
                                                    <path fill={notification.isRead === true ? '#009ECB' : 'currentColor'} d="M149.61,85.71l-89.6,88a8,8,0,0,1-11.22,0L10.39,136a8,8,0,1,1,11.22-11.41L54.4,156.79l84-82.5a8,8,0,1,1,11.22,11.42Zm96.1-11.32a8,8,0,0,0-11.32-.1l-84,82.5-18.83-18.5a8,8,0,0,0-11.21,11.42l24.43,24a8,8,0,0,0,11.22,0l89.6-88A8,8,0,0,0,245.71,74.39Z"></path>
                                                </svg>
                                            </div>
                                            <div onClick={() => handleDismissNotification(notification.id)} className="dismiss-notification">
                                                <svg fill="none" viewBox="0 0 12 12" width="12" height="12">
                                                    <path
                                                        fill="currentColor"
                                                        d="M7.46875 6L10.8438 2.65625C11.0312 2.46875 11.0312 2.125 10.8438 1.9375L10.0625 1.15625C9.875 0.96875 9.53125 0.96875 9.34375 1.15625L6 4.53125L2.625 1.15625C2.4375 0.96875 2.09375 0.96875 1.90625 1.15625L1.125 1.9375C0.9375 2.125 0.9375 2.46875 1.125 2.65625L4.5 6L1.125 9.375C0.9375 9.5625 0.9375 9.90625 1.125 10.0938L1.90625 10.875C2.09375 11.0625 2.4375 11.0625 2.625 10.875L6 7.5L9.34375 10.875C9.53125 11.0625 9.875 11.0625 10.0625 10.875L10.8438 10.0938C11.0312 9.90625 11.0312 9.5625 10.8438 9.375L7.46875 6Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            {notification.isRead === false ?
                                                <div className="unread-indicator"></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            }
        </div>
    );
};

export default NotificationsPanel;
