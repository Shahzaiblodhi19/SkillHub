'use client';
import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../layout';
import Image from 'next/image';
import Link from 'next/link';

export default function SchoolPage() {
    const [view, setView] = useState('calendar');
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [eventsCollapsed, seteventsCollapsed] = useState({});
    const [events, setEvents] = useState([
        {
            id: 1,
            date: '2024-12-01',
            title: 'FREE 4D Copy Call',
            time: '9:00 AM',
            attendees: 12,
            type: 'zoom-meeting',
        },
        {
            id: 2,
            date: '2024-12-07',
            title: 'Team Strategy Session',
            time: '11:00 AM',
            attendees: 8,
            type: 'teams-meeting',
        },
        {
            id: 3,
            date: '2024-12-07', // Same day
            title: 'Product Launch Discussion',
            time: '2:00 PM',
            attendees: 15,
            type: 'zoom-meeting',
        },
        {
            id: 4,
            date: '2024-12-07', // Same day
            title: 'Client Feedback Review',
            time: '5:00 PM',
            attendees: 10,
            type: 'one-on-one',
        },
        {
            id: 5,
            date: '2024-12-07', // Same day
            title: 'Launch Feedback Review',
            time: '1:00 PM',
            attendees: 18,
            type: 'zoom-meeting',
        },
        {
            id: 6,
            date: '2024-12-08',
            title: 'Career Planning Session',
            time: '10:00 AM',
            attendees: 2,
            type: 'one-on-one',
        },
        {
            id: 7,
            date: '2024-12-15',
            title: 'Marketing Masterclass',
            time: '2:00 PM',
            attendees: 25,
            type: 'zoom-webinar',
        },
        {
            id: 8,
            date: '2024-12-28',
            title: 'Sales Meeting',
            time: '9:00 AM',
            attendees: 12,
            type: 'zoom-meeting',
        },
        // Added events for January 2025
        {
            id: 9,
            date: '2025-01-05',
            title: 'Team Check-in Meeting',
            time: '10:00 AM',
            attendees: 5,
            type: 'teams-meeting',
        },
        {
            id: 10,
            date: '2025-01-05', // Same day
            title: 'Product Review Session',
            time: '1:00 PM',
            attendees: 8,
            type: 'zoom-meeting',
        },
        {
            id: 11,
            date: '2025-01-05', // Same day
            title: 'Weekly Sprint Review',
            time: '3:00 PM',
            attendees: 6,
            type: 'teams-meeting',
        },
        {
            id: 12,
            date: '2025-01-05', // Same day
            title: 'Client Follow-up Meeting',
            time: '5:00 PM',
            attendees: 12,
            type: 'zoom-meeting',
        },
        {
            id: 13,
            date: '2025-01-05', // Same day
            title: 'Leadership Strategy Call',
            time: '7:00 PM',
            attendees: 10,
            type: 'teams-meeting',
        },
        {
            id: 14,
            date: '2025-01-06',
            title: 'Morning Huddle',
            time: '8:00 AM',
            attendees: 4,
            type: 'zoom-meeting',
        },
        {
            id: 15,
            date: '2025-01-06', // Same day
            title: 'Quarterly Sales Strategy',
            time: '11:00 AM',
            attendees: 20,
            type: 'zoom-meeting',
        },
        {
            id: 16,
            date: '2025-01-06', // Same day
            title: 'Project Kick-off Meeting',
            time: '1:00 PM',
            attendees: 12,
            type: 'teams-meeting',
        },
        {
            id: 17,
            date: '2025-01-06', // Same day
            title: 'Team Collaboration Session',
            time: '3:00 PM',
            attendees: 8,
            type: 'zoom-meeting',
        },
        {
            id: 18,
            date: '2025-01-06', // Same day
            title: 'Business Planning Call',
            time: '5:00 PM',
            attendees: 10,
            type: 'zoom-meeting',
        },
        {
            id: 19,
            date: '2025-01-06', // Same day
            title: 'Executive Briefing',
            time: '7:00 PM',
            attendees: 6,
            type: 'teams-meeting',
        },
        // Additional events with mixed types and dates
        {
            id: 20,
            date: '2025-01-10',
            title: 'Design Review',
            time: '9:00 AM',
            attendees: 8,
            type: 'zoom-meeting',
        },
        {
            id: 21,
            date: '2025-01-10', // Same day
            title: 'Product Strategy Session',
            time: '1:00 PM',
            attendees: 10,
            type: 'teams-meeting',
        },
        {
            id: 22,
            date: '2025-01-10', // Same day
            title: 'Marketing Alignment Call',
            time: '4:00 PM',
            attendees: 7,
            type: 'zoom-meeting',
        },
        {
            id: 23,
            date: '2025-01-12',
            title: 'Sales Pipeline Review',
            time: '11:00 AM',
            attendees: 14,
            type: 'zoom-webinar',
        },
        {
            id: 24,
            date: '2025-01-12', // Same day
            title: 'Client Onboarding Call',
            time: '2:00 PM',
            attendees: 5,
            type: 'teams-meeting',
        },
        {
            id: 25,
            date: '2025-01-12', // Same day
            title: 'Weekly All-Hands Meeting',
            time: '4:00 PM',
            attendees: 25,
            type: 'zoom-meeting',
        },
        {
            id: 26,
            date: '2025-01-15',
            title: 'Team Stand-up',
            time: '9:00 AM',
            attendees: 6,
            type: 'teams-meeting',
        },
        {
            id: 27,
            date: '2025-01-15', // Same day
            title: 'Feature Prioritization Call',
            time: '1:00 PM',
            attendees: 10,
            type: 'zoom-meeting',
        },
        {
            id: 28,
            date: '2025-01-15', // Same day
            title: 'Retrospective Session',
            time: '3:00 PM',
            attendees: 7,
            type: 'teams-meeting',
        },
        {
            id: 29,
            date: '2025-01-18',
            title: 'Product Development Sync',
            time: '10:00 AM',
            attendees: 5,
            type: 'zoom-meeting',
        },
        {
            id: 30,
            date: '2025-01-18', // Same day
            title: 'Sales Training Session',
            time: '12:00 PM',
            attendees: 18,
            type: 'zoom-webinar',
        },
        {
            id: 31,
            date: '2025-01-18', // Same day
            title: 'Customer Success Review',
            time: '2:00 PM',
            attendees: 8,
            type: 'teams-meeting',
        },
        {
            id: 32,
            date: '2025-01-18', // Same day
            title: 'Executive Meeting',
            time: '4:00 PM',
            attendees: 10,
            type: 'zoom-meeting',
        },
        {
            id: 33,
            date: '2025-01-20',
            title: 'Innovation Lab Discussion',
            time: '10:00 AM',
            attendees: 6,
            type: 'teams-meeting',
        },
        {
            id: 34,
            date: '2025-01-20', // Same day
            title: 'Customer Support Strategy',
            time: '2:00 PM',
            attendees: 5,
            type: 'zoom-meeting',
        },
        {
            id: 35,
            date: '2025-01-20', // Same day
            title: 'Product Marketing Update',
            time: '5:00 PM',
            attendees: 7,
            type: 'zoom-webinar',
        },
        {
            id: 36,
            date: '2025-01-22',
            title: 'Team Onboarding',
            time: '11:00 AM',
            attendees: 12,
            type: 'teams-meeting',
        },
        {
            id: 37,
            date: '2025-01-22', // Same day
            title: 'Project Planning Call',
            time: '2:00 PM',
            attendees: 14,
            type: 'zoom-meeting',
        },
        {
            id: 38,
            date: '2025-01-22', // Same day
            title: 'Quarterly Business Review',
            time: '5:00 PM',
            attendees: 10,
            type: 'zoom-webinar',
        },
    ]);

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    useEffect(() => {
        const adjustRowHeights = () => {
            const calendarCells = document.querySelectorAll('.calendar-cell');
            const rows = Math.ceil(calendarCells.length / 7);

            for (let i = 0; i < rows; i++) {
                const rowCells = Array.from(calendarCells).slice(i * 7, i * 7 + 7);
                rowCells.forEach((cell) => {
                    // Remove any inline height set on the cell to allow auto sizing
                    cell.style.height = 'auto';
                });
            }
        };

        adjustRowHeights();
        window.addEventListener('resize', adjustRowHeights);

        return () => window.removeEventListener('resize', adjustRowHeights);
    }, [currentMonth, currentYear, events, eventsCollapsed]); // Now listens for event expansions


    const handleViewToggle = (selectedView) => {
        setView(selectedView);
    };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear((prevYear) => prevYear - 1);
        } else {
            setCurrentMonth((prevMonth) => prevMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear((prevYear) => prevYear + 1);
        } else {
            setCurrentMonth((prevMonth) => prevMonth + 1);
        }
    };

    const [expandedDays, setExpandedDays] = useState({});
    const [eventsShown, setEventsShown] = useState({});

    const renderCalendarCells = () => {
        const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
        const days = daysInMonth(currentMonth, currentYear);
        const prevMonthDays = daysInMonth(currentMonth - 1 < 0 ? 11 : currentMonth - 1, currentMonth - 1 < 0 ? currentYear - 1 : currentYear);
        const totalCells = Math.ceil((days + firstDayOfWeek) / 7) * 7;
        const cells = [];

        for (let i = 0; i < totalCells; i++) {
            const day = i - firstDayOfWeek + 1;
            const date = new Date(currentYear, currentMonth, day);
            const formattedDate = date.toISOString().split('T')[0];
            const dayEvents = events.filter((event) => event.date === formattedDate);

            const shownEventsCount = eventsShown[formattedDate] || 3;  // Get how many events to show (default 3)

            cells.push(
                <div className={`calendar-cell ${day <= 0 || day > days ? 'prev-next-month' : ''}`} key={i}>
                    {day > 0 && day <= days && <div className="date-number">{day}</div>}
                    {dayEvents.slice(0, shownEventsCount).map((event, index) => (
                        <div key={index} className={`event ${eventsCollapsed[event.id] ? 'expanded' : ''} ${event.type}`} onClick={() =>
                            seteventsCollapsed((prev) => ({
                                ...prev,
                                [event.id]: !prev[event.id], // Toggle collapse state for the specific event
                            }))
                        }>
                            <div className="event-header">
                                <div className="event-title">{event.title}</div>
                            </div>
                            <div className="event-time">
                                <div className="event-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 38">
                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.2" stroke="#15B7C3" d="M22.8865 17.1133L27.3332 14.42V23.5867L22.8865 20.8867M10.6665 14.42H20.8532C21.3925 14.42 21.9096 14.6342 22.291 15.0155C22.6723 15.3969 22.8865 15.9141 22.8865 16.4533V23.5867H12.6998C12.4323 23.5867 12.1673 23.5339 11.9202 23.4313C11.6731 23.3287 11.4486 23.1783 11.2597 22.9888C11.0708 22.7992 10.9212 22.5743 10.8194 22.3268C10.7176 22.0794 10.6656 21.8142 10.6665 21.5467V14.42Z"></path>
                                    </svg>
                                </div>
                                {event.time}</div>
                            <div className="event-attendees">
                                <div className="avatar-group">
                                    <img src='https://i.ibb.co/S3QRdcX/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg' className='avatar' />
                                    <img src='https://i.ibb.co/S3QRdcX/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg' className='avatar' />
                                    <span className="attendee-count">{event.attendees}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {dayEvents.length > 3 && (
                        <div className="more-events" style={{ display: dayEvents.length > 3 ? 'block' : 'none' }}>
                            {shownEventsCount < dayEvents.length ? (
                                <button onClick={() => handleShowMoreEvents(formattedDate, shownEventsCount)}>
                                    {dayEvents.length - shownEventsCount} More
                                </button>
                            ) : (
                                <button onClick={() => handleShowLessEvents(formattedDate, shownEventsCount)}>
                                    {shownEventsCount - 3} Less
                                </button>
                            )}
                        </div>
                    )}


                </div>
            );
        }

        return cells;
    };

    const handleShowMoreEvents = (date, shownEventsCount) => {
        const dayEvents = events.filter((event) => event.date === date);
        const eventsToShow = shownEventsCount + Math.min(dayEvents.length - shownEventsCount, 3);  // Show 3 more events, or the remaining ones if less than 3

        setEventsShown(prev => ({
            ...prev,
            [date]: eventsToShow,
        }));
    };

    const handleShowLessEvents = (date, shownEventsCount) => {
        const eventsToShow = Math.max(shownEventsCount - 3, 3);  // Show 3 less events, but not go below 3

        setEventsShown(prev => ({
            ...prev,
            [date]: eventsToShow,
        }));
    }



    const [events2, setEvents2] = useState([
        {
            id: '1',
            date: '2024-12-28',
            weekday: 'Wed',
            title: 'Sales Meeting',
            time: '9:00 AM',
            type: 'zoom-meeting',
            attendees: 12,
            image: 'https://i.ibb.co/jJ4GHXP/img1.jpg',
            attendeesImages: [
                'https://i.ibb.co/S3QRdcX/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg',
                'https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png',
            ],
        },
        {
            id: '2',
            date: '2024-12-29',
            weekday: 'Thu',
            title: '1:1 Coaching Session',
            time: '11:00 AM',
            type: 'one-on-one',
            attendees: 2,
            image: 'https://i.ibb.co/LJwrLdW/coaching-image.webp',
            attendeesImages: [
                'https://i.ibb.co/S3QRdcX/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg',
                'https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png',
            ],
        },
    ]);

    const renderListView = () => {
        return events2.map((event) => (
            <div className="list-item w-100" key={event.id}>
                <div className={`list-date ${event.date === '2024-12-28' ? 'current' : ''}`}>
                    <div className="list-weekday">{event.weekday}</div>
                    <div className="list-day">{new Date(event.date).getDate()}</div>
                </div>
                <div className="list-content">
                    <div className="list-item-content">
                        <div className={`event ${event.type}`}>
                            <div className="event-header">
                                <div className="event-title">{event.title}</div>
                            </div>
                            <div className="event-time">
                                <div className="event-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 38">
                                        <path
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="1.2"
                                            stroke="#15B7C3"
                                            d="M22.8865 17.1133L27.3332 14.42V23.5867L22.8865 20.8867M10.6665 14.42H20.8532C21.3925 14.42 21.9096 14.6342 22.291 15.0155C22.6723 15.3969 22.8865 15.9141 22.8865 16.4533V23.5867H12.6998C12.4323 23.5867 12.1673 23.5339 11.9202 23.4313C11.6731 23.3287 11.4486 23.1783 11.2597 22.9888C11.0708 22.7992 10.9212 22.5743 10.8194 22.3268C10.7176 22.0794 10.6656 21.8142 10.6665 21.5467V14.42Z"
                                        ></path>
                                    </svg>
                                </div>
                                {event.time}
                                <div className="avatar-group">
                                    {event.attendeesImages.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            className="avatar"
                                            alt={`Attendee ${index + 1}`}
                                        />
                                    ))}
                                </div>
                                <span className="attendee-count">{event.attendees}+</span>
                            </div>
                        </div>
                        <img src={event.image} className="event-image" alt="Event Image" />
                    </div>
                </div>
            </div>
        ));
    };
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // Dropdown options (excluding "Create School")
    const options = [
        { id: 1, name: "School of 4D Art", icon: "palette" },
        { id: 2, name: "School of Creative Writing", icon: "book" },
        { id: 3, name: "Photography Academy", icon: "camera" },
    ];

    // Filter options based on search input
    const filteredOptions = options.filter((option) =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const context = useContext(MyContext)

    const [activetab, setactivetab] = useState('Courses');


    const avatars = [
        'https://i.pravatar.cc/150?img=1',
        'https://i.pravatar.cc/150?img=2',
        'https://i.pravatar.cc/150?img=3',
        'https://i.pravatar.cc/150?img=4',
        'https://i.pravatar.cc/150?img=5',
        'https://i.pravatar.cc/150?img=6',
        'https://i.pravatar.cc/150?img=7',
        'https://i.pravatar.cc/150?img=8',
    ];

    const posts = [
        {
            id: 1,
            name: 'John Smith',
            time: '7h ago',
            category: 'News',
            content: `Most promo emails read like this: "Hi there! Do you want this thing? It's on sale. Please buy it. Thanks :)"...They make you think businesses are allergic to making...`,
            likes: 19,
            comments: 59,
            category_icon: '📰',
            image: 'https://i.ibb.co/z27wtc6/img2.jpg',
            pinned: true,
        },
        {
            id: 2,
            name: 'David Wilson',
            category_icon: '📢',
            time: '2h ago',
            category: 'Announcements',
            content: `The FREE 8-hour copywriting course just released on YouTube. Click here to see the most valuable copywriting video of all time. EIGHT full hours jam-packed with new...`,
            likes: 1400,
            comments: 245,
            image: 'https://i.ibb.co/z27wtc6/img2.jpg',
            pinned: true,
        },
        {
            id: 3,
            name: 'Emma Thompson',
            time: '4h ago',
            category_icon: '💬',
            category: 'Chat',
            content: `What's your go-to snack during those long copywriting sessions? Whether it’s a quick bite to fuel your creativity or a comforting treat to keep you going, we’d love to hear about it!`,
            poll: {
                options: [
                    { name: 'Fresh Fruit', percentage: 3 },
                    { name: 'Veggie Sticks', percentage: 16 },
                    { name: 'Avocado Toast', percentage: 84 },
                ],
            },
            likes: 39,
            comments: 82,
        },
        {
            id: 4,
            name: 'Maria Rodriguez',
            time: '5h ago',
            category: 'Weekly Review',
            category_icon: '⭐',
            content: `Every day I see hundreds (probably thousands) of you posting new copy reviews in threads, reviewing each other’s copy, and leveling up together. Just wanted to pop in and say how proud I am of this community!`,
            likes: 156,
            comments: 324,
        },
    ];
    const categories = [
        { name: 'All', icon: '', filter: 'All' },
        { name: 'Announcements', icon: '📢', filter: 'Announcements' },
        { name: 'News', icon: '📰', filter: 'News' },
        { name: 'Weekly Review', icon: '⭐', filter: 'Weekly Review' },
        { name: 'Chat', icon: '💬', filter: 'Chat' },
        { name: 'Wins', icon: '💰', filter: 'Wins' },
        { name: 'Hot Take', icon: '🔥', filter: 'Hot Take' },
        { name: 'Copywriting', icon: '📚', filter: 'Copywriting' },
    ];
    const [showMore, setShowMore] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");
    const [filter, setFilter] = useState("None");
    const [sort, setSort] = useState("Newest");

    const handleShowMoreToggle = () => setShowMore(!showMore);

    // Filter posts based on selected filter
    const filteredPosts = posts
        .filter((post) => {
            if (activeCategory === "All") return true;
            return post.category === activeCategory;
        })
        .filter((post) => {
            if (filter === "None") return true;
            if (filter === "Pinned") return post.pinned;
            return true;
        });

    // Sort posts based on selected sort criteria
    const sortedPosts = filteredPosts.sort((a, b) => {
        if (sort === "Newest") return new Date(b.time) - new Date(a.time);
        if (sort === "Oldest") return new Date(a.time) - new Date(b.time);
        if (sort === "Most Liked") return b.likes - a.likes;
        if (sort === "Most Upvoted") return b.comments - a.comments;
        return 0;
    });

    const [FilterDropdown, setFilterDropdown] = useState(false);
    const handleOutsideClick = () => {
        setIsOpen(false);
        setFilterDropdown(false);
    }

    const [expanded, setExpanded] = useState(true);

    const toggleSection = () => {
        setExpanded(!expanded);
    };
    const data = [
        {
            section: "In Progress",
            items: [
                {
                    title: "Creating Engaging Learning Journeys: UI/UX Best Practices",
                    type: "1:1 Session",
                    description:
                        "Learn how to get the most out of this course and access all supplementary materials. We'll cover the course structure, download...",
                    duration: "2m 30s",
                    lastActive: "Oct 15, 2024",
                    current: 1,
                    total: 16,
                    progress: 40,
                },
                {
                    title: "Creating Engaging Learning Journeys: UI/UX Best Practices",
                    type: "Video",
                    description:
                        "Learn how to get the most out of this course and access all supplementary materials. We'll cover the course structure, download...",
                    duration: "2m 30s",
                    lastActive: "Oct 15, 2024",
                    current: 3,
                    total: 16,
                    progress: 20,
                },
                {
                    title: "The Prompt Collective - AI Writers Community",
                    type: "Video",
                    description:
                        "Learn how to get the most out of this course and access all supplementary materials. We'll cover the course structure, download...",
                    duration: "2m 30s",
                    lastActive: "Oct 15, 2024",
                    current: 5,
                    total: 16,
                    progress: 60,
                },
            ],
        },
        {
            section: "You Completed",
            items: [
                {
                    title: "Java Programming Masterclass",
                    type: "Video",
                    description:
                        "Learn how to get the most out of this course and access all supplementary materials. We'll cover the course structure, download...",
                    duration: "2.5 hrs",
                    lastActive: "Completed Nov 5, 2023",
                    current: 2,
                    total: 16,
                    progress: 100,
                    completed: true,
                },
            ],
        },
        {
            section: "Not Yet Started",
            items: [
                {
                    title: "Java Programming Masterclass Certificate",
                    type: "Video",
                    description:
                        "Learn how to get the most out of this course and access all supplementary materials. We'll cover the course structure, download...",
                    duration: "2m 30s",
                    current: 4,
                    total: 16,
                    progress: 0,
                },
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState("All");

    const CertificateData = {
        All: [],
        Claimed: [
            {
                title: "Web Development Mastery",
                level: "Advanced Level",
                issued: "Issued Oct 15, 2024",
                progress: 100,
                status: "Claimed",
                actions: ["Share", "View Certificate"],
            },
        ],
        "In Progress": [
            {
                title: "UX Design Fundamentals",
                level: "Intermediate Level",
                issued: "Completed Oct 15, 2024",
                progress: 100,
                status: "Completed",
                actions: ["Claim Now"],
            },
            {
                title: "UX Design Fundamentals",
                level: "Intermediate Level",
                progress: 65,
                status: "In Progress",
                actions: ["Continue Learning"],
            },
        ],
        Available: [
            {
                title: "Digital Marketing Pro",
                level: "Expert Level",
                progress: 0,
                status: "Not Started",
                actions: ["Start Course"],
            },
        ],
    };
    // Populate the "All" tab with all certificates from all categories
    CertificateData.All = [
        ...CertificateData.Claimed,
        ...CertificateData["In Progress"],
        ...CertificateData.Available,
    ];

    useEffect(() => {
        // Add hover effects for cards
        const handleCardHover = (e) => {
            const card = e.currentTarget;
            card.style.transform = "translateY(-4px)";
            card.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
        };

        const handleCardLeave = (e) => {
            const card = e.currentTarget;
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        };

        const cards = document.querySelectorAll(".event-card");
        cards.forEach((card) => {
            card.addEventListener("mouseenter", handleCardHover);
            card.addEventListener("mouseleave", handleCardLeave);
        });

        return () => {
            cards.forEach((card) => {
                card.removeEventListener("mouseenter", handleCardHover);
                card.removeEventListener("mouseleave", handleCardLeave);
            });
        };
    }, []);

    // State to manage expand/collapse functionality
    const [collapsedSections, setCollapsedSections] = useState({});

    const toggleCollapse = (index) => {
        setCollapsedSections((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    useEffect(() => {
        // Social icon hover effects
        const socialIcons = document.querySelectorAll(".social-icon");

        const handleMouseEnter = (icon) => {
            const tooltip = icon.querySelector(".stat-tooltip");
            if (tooltip) {
                tooltip.style.opacity = "1";
                tooltip.style.visibility = "visible";
            }
        };

        const handleMouseLeave = (icon) => {
            const tooltip = icon.querySelector(".stat-tooltip");
            if (tooltip) {
                tooltip.style.opacity = "0";
                tooltip.style.visibility = "hidden";
            }
        };

        socialIcons.forEach((icon) => {
            icon.addEventListener("mouseenter", () => handleMouseEnter(icon));
            icon.addEventListener("mouseleave", () => handleMouseLeave(icon));
        });

        // Cleanup function to remove event listeners
        return () => {
            socialIcons.forEach((icon) => {
                icon.removeEventListener("mouseenter", () => handleMouseEnter(icon));
                icon.removeEventListener("mouseleave", () => handleMouseLeave(icon));
            });
        };
    }, []);
    const [collapsedSection2, setCollapsedSection2] = useState(true);

    const [members, setMembers] = useState([
        {
            id: 1,
            name: "Sarah Mitchell",
            achievements: [
                "◇ Advanced Chemistry Expert",
                "◇ Research Publication Lead",
                "◇ Department Head",
            ],
            bio: "Leading researcher in organic chemistry with over 15 years of experience in academic research and industry collaborations. Specialized in developing sustainable chemical processes and mentoring graduate students. Published author of multiple peer-reviewed papers.",
            joined: "Dec 15, 2024",
            location: "Boston, MA",
            social: [
                { platform: "Website", icon: <svg viewBox="0 0 80 80"><path fill="#4F4F4F" stroke-linejoin="miter" clip-rule="unset" fill-rule="unset" d="M40 7.5c-17.949 0-32.5 14.551-32.5 32.5s14.551 32.5 32.5 32.5c17.949 0 32.5-14.551 32.5-32.5v0c-0.019-17.942-14.558-32.481-32.498-32.5h-0.002zM66.033 48.767h-11.567c0.565-2.632 0.893-5.659 0.9-8.761v-0.005c-0.018-2.745-0.272-5.418-0.742-8.016l0.042 0.282h11.033c0.095 0.009 0.205 0.014 0.317 0.014s0.222-0.005 0.331-0.015l-0.014 0.001c0.733 2.312 1.159 4.972 1.167 7.73v0.004c-0.008 3.141-0.544 6.154-1.525 8.958l0.058-0.192zM30.567 48.767c-0.593-2.621-0.933-5.631-0.933-8.72 0-0.016 0-0.033 0-0.049v0.003c0.019-2.747 0.297-5.417 0.811-8.002l-0.045 0.269h19.2c0.47 2.316 0.748 4.986 0.767 7.718l0 0.015c-0.002 3.083-0.341 6.086-0.985 8.974l0.051-0.274zM48.033 53.767c-1.925 4.893-4.646 9.081-8.045 12.612l0.012-0.012c-3.394-3.537-6.116-7.748-7.944-12.409l-0.089-0.258zM13.967 48.767c-0.922-2.613-1.459-5.626-1.467-8.763v-0.004c-0-0.019-0-0.042-0-0.065 0-2.784 0.427-5.468 1.218-7.991l-0.051 0.189c0.095 0.009 0.205 0.014 0.317 0.014s0.222-0.005 0.331-0.015l-0.014 0.001h11.033c-0.436 2.36-0.69 5.080-0.7 7.858v0.008c0.012 3.087 0.339 6.090 0.951 8.988l-0.051-0.288h-11.233zM31.7 27.267c1.868-5.306 4.699-9.854 8.314-13.649l-0.014 0.015c3.601 3.779 6.432 8.328 8.219 13.37l0.081 0.263zM64.333 27.267h-10.833c-1.62-5.343-4.094-9.985-7.299-14.019l0.066 0.086c7.891 1.89 14.333 6.979 17.995 13.787l0.072 0.147zM33.733 13.333c-3.079 3.954-5.498 8.597-6.992 13.638l-0.075 0.295h-11c3.734-6.954 10.176-12.044 17.879-13.895l0.188-0.038zM16.167 53.7h10.5c1.699 4.974 4.111 9.279 7.162 13.045l-0.062-0.079c-7.548-1.804-13.765-6.507-17.53-12.839l-0.070-0.127zM46.167 66.767c3.010-3.719 5.444-8.055 7.076-12.767l0.090-0.3h10.6c-3.843 6.478-10.089 11.187-17.479 12.929l-0.187 0.037z"></path></svg>, tooltip: "Website" },
                {
                    platform: "Twitter (X)", icon: <svg viewBox="0 0 20 20">
                        <path fill="currentColor" d="M14.0738 3.75H16.2461L11.5003 9.04487L17.0834 16.25H12.7119L9.28791 11.8801L5.37012 16.25H3.1965L8.27267 10.5865L2.91675 3.75H7.39928L10.4942 7.74423L14.0738 3.75Z" />
                    </svg>, tooltip: "Twitter (X)"
                },
                {
                    platform: "Facebook", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path fill="currentColor" d="M9.11194 3.27845C10.0106 2.37983 11.2293 1.875 12.5002 1.875H15.0002C15.3453 1.875 15.6252 2.15482 15.6252 2.5V5.83333C15.6252 6.17851 15.3453 6.45833 15.0002 6.45833H12.5002C12.4449 6.45833 12.3919 6.48028 12.3528 6.51935C12.3138 6.55842 12.2918 6.61141 12.2918 6.66667V7.70833H15.0002C15.1926 7.70833 15.3743 7.797 15.4928 7.9487C15.6112 8.1004 15.6532 8.2982 15.6065 8.48492L14.7732 11.8183C14.7036 12.0965 14.4536 12.2917 14.1668 12.2917H12.2918V17.5C12.2918 17.8452 12.012 18.125 11.6668 18.125H8.3335C7.98832 18.125 7.7085 17.8452 7.7085 17.5V12.2917H5.8335C5.48832 12.2917 5.2085 12.0118 5.2085 11.6667V8.33333C5.2085 7.98816 5.48832 7.70833 5.8335 7.70833H7.7085V6.66667C7.7085 5.39584 8.21333 4.17706 9.11194 3.27845ZM12.5002 3.125C11.5609 3.125 10.66 3.49814 9.99583 4.16233C9.33164 4.82652 8.9585 5.72736 8.9585 6.66667V8.33333C8.9585 8.67851 8.67867 8.95833 8.3335 8.95833H6.4585V11.0417H8.3335C8.67867 11.0417 8.9585 11.3215 8.9585 11.6667V16.875H11.0418V11.6667C11.0418 11.3215 11.3217 11.0417 11.6668 11.0417H13.6788L14.1997 8.95833H11.6668C11.3217 8.95833 11.0418 8.67851 11.0418 8.33333V6.66667C11.0418 6.27989 11.1955 5.90896 11.469 5.63547C11.7425 5.36198 12.1134 5.20833 12.5002 5.20833H14.3752V3.125H12.5002Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>, tooltip: "Facebook"
                },
                {
                    platform: "LinkedIn", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path fill="#4F4F4F" d="M4.99992 3.95834C4.42462 3.95834 3.95825 4.42471 3.95825 5.00001V15C3.95825 15.5753 4.42462 16.0417 4.99992 16.0417H14.9999C15.5752 16.0417 16.0416 15.5753 16.0416 15V5.00001C16.0416 4.42471 15.5752 3.95834 14.9999 3.95834H4.99992ZM2.70825 5.00001C2.70825 3.73436 3.73427 2.70834 4.99992 2.70834H14.9999C16.2656 2.70834 17.2916 3.73436 17.2916 5.00001V15C17.2916 16.2657 16.2656 17.2917 14.9999 17.2917H4.99992C3.73427 17.2917 2.70825 16.2657 2.70825 15V5.00001ZM6.66659 6.04168C7.01176 6.04168 7.29158 6.3215 7.29158 6.66668V6.67501C7.29158 7.02019 7.01176 7.30001 6.66659 7.30001C6.32141 7.30001 6.04159 7.02019 6.04159 6.67501V6.66668C6.04159 6.3215 6.32141 6.04168 6.66659 6.04168ZM6.66659 8.54168C7.01176 8.54168 7.29158 8.8215 7.29158 9.16668V13.3333C7.29158 13.6785 7.01176 13.9583 6.66659 13.9583C6.32141 13.9583 6.04159 13.6785 6.04159 13.3333V9.16668C6.04159 8.8215 6.32141 8.54168 6.66659 8.54168ZM10.5337 8.8413C10.4239 8.66161 10.2259 8.54168 9.99992 8.54168C9.65474 8.54168 9.37492 8.8215 9.37492 9.16668V13.3333C9.37492 13.6785 9.65474 13.9583 9.99992 13.9583C10.3451 13.9583 10.6249 13.6785 10.6249 13.3333V10.8333C10.6249 10.5571 10.7347 10.2921 10.93 10.0968C11.1254 9.90142 11.3903 9.79168 11.6666 9.79168C11.9429 9.79168 12.2078 9.90142 12.4032 10.0968C12.5985 10.2921 12.7083 10.5571 12.7083 10.8333V13.3333C12.7083 13.6785 12.9881 13.9583 13.3333 13.9583C13.6784 13.9583 13.9583 13.6785 13.9583 13.3333V10.8333C13.9583 10.2256 13.7168 9.64266 13.287 9.21289C12.8573 8.78312 12.2744 8.54168 11.6666 8.54168C11.2659 8.54168 10.876 8.64663 10.5337 8.8413Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>, tooltip: "LinkedIn"
                },
            ],
            avatar: "https://i.ibb.co/YP71Tb6/profile9.jpg",
        },
        {
            id: 2,
            name: "Michael Chen",
            achievements: [
                "◇ Quantum Physics Specialist",
                "◇ Research Grant Lead",
                "◇ Innovation Award Winner",
            ],
            bio: "Distinguished physicist specializing in quantum mechanics and particle physics. Lead researcher on multiple groundbreaking projects at CERN and other international facilities. Passionate about making complex physics concepts accessible to students.",
            joined: "Nov 30, 2024",
            location: "Berkeley, CA",
            social: [
                { platform: "Website", icon: <svg viewBox="0 0 80 80"><path fill="#4F4F4F" stroke-linejoin="miter" clip-rule="unset" fill-rule="unset" d="M40 7.5c-17.949 0-32.5 14.551-32.5 32.5s14.551 32.5 32.5 32.5c17.949 0 32.5-14.551 32.5-32.5v0c-0.019-17.942-14.558-32.481-32.498-32.5h-0.002zM66.033 48.767h-11.567c0.565-2.632 0.893-5.659 0.9-8.761v-0.005c-0.018-2.745-0.272-5.418-0.742-8.016l0.042 0.282h11.033c0.095 0.009 0.205 0.014 0.317 0.014s0.222-0.005 0.331-0.015l-0.014 0.001c0.733 2.312 1.159 4.972 1.167 7.73v0.004c-0.008 3.141-0.544 6.154-1.525 8.958l0.058-0.192zM30.567 48.767c-0.593-2.621-0.933-5.631-0.933-8.72 0-0.016 0-0.033 0-0.049v0.003c0.019-2.747 0.297-5.417 0.811-8.002l-0.045 0.269h19.2c0.47 2.316 0.748 4.986 0.767 7.718l0 0.015c-0.002 3.083-0.341 6.086-0.985 8.974l0.051-0.274zM48.033 53.767c-1.925 4.893-4.646 9.081-8.045 12.612l0.012-0.012c-3.394-3.537-6.116-7.748-7.944-12.409l-0.089-0.258zM13.967 48.767c-0.922-2.613-1.459-5.626-1.467-8.763v-0.004c-0-0.019-0-0.042-0-0.065 0-2.784 0.427-5.468 1.218-7.991l-0.051 0.189c0.095 0.009 0.205 0.014 0.317 0.014s0.222-0.005 0.331-0.015l-0.014 0.001h11.033c-0.436 2.36-0.69 5.080-0.7 7.858v0.008c0.012 3.087 0.339 6.090 0.951 8.988l-0.051-0.288h-11.233zM31.7 27.267c1.868-5.306 4.699-9.854 8.314-13.649l-0.014 0.015c3.601 3.779 6.432 8.328 8.219 13.37l0.081 0.263zM64.333 27.267h-10.833c-1.62-5.343-4.094-9.985-7.299-14.019l0.066 0.086c7.891 1.89 14.333 6.979 17.995 13.787l0.072 0.147zM33.733 13.333c-3.079 3.954-5.498 8.597-6.992 13.638l-0.075 0.295h-11c3.734-6.954 10.176-12.044 17.879-13.895l0.188-0.038zM16.167 53.7h10.5c1.699 4.974 4.111 9.279 7.162 13.045l-0.062-0.079c-7.548-1.804-13.765-6.507-17.53-12.839l-0.070-0.127zM46.167 66.767c3.010-3.719 5.444-8.055 7.076-12.767l0.090-0.3h10.6c-3.843 6.478-10.089 11.187-17.479 12.929l-0.187 0.037z"></path></svg>, tooltip: "Website" },
                {
                    platform: "Twitter (X)", icon: <svg viewBox="0 0 20 20">
                        <path fill="currentColor" d="M14.0738 3.75H16.2461L11.5003 9.04487L17.0834 16.25H12.7119L9.28791 11.8801L5.37012 16.25H3.1965L8.27267 10.5865L2.91675 3.75H7.39928L10.4942 7.74423L14.0738 3.75Z" />
                    </svg>, tooltip: "Twitter (X)"
                },
                {
                    platform: "Facebook", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path fill="currentColor" d="M9.11194 3.27845C10.0106 2.37983 11.2293 1.875 12.5002 1.875H15.0002C15.3453 1.875 15.6252 2.15482 15.6252 2.5V5.83333C15.6252 6.17851 15.3453 6.45833 15.0002 6.45833H12.5002C12.4449 6.45833 12.3919 6.48028 12.3528 6.51935C12.3138 6.55842 12.2918 6.61141 12.2918 6.66667V7.70833H15.0002C15.1926 7.70833 15.3743 7.797 15.4928 7.9487C15.6112 8.1004 15.6532 8.2982 15.6065 8.48492L14.7732 11.8183C14.7036 12.0965 14.4536 12.2917 14.1668 12.2917H12.2918V17.5C12.2918 17.8452 12.012 18.125 11.6668 18.125H8.3335C7.98832 18.125 7.7085 17.8452 7.7085 17.5V12.2917H5.8335C5.48832 12.2917 5.2085 12.0118 5.2085 11.6667V8.33333C5.2085 7.98816 5.48832 7.70833 5.8335 7.70833H7.7085V6.66667C7.7085 5.39584 8.21333 4.17706 9.11194 3.27845ZM12.5002 3.125C11.5609 3.125 10.66 3.49814 9.99583 4.16233C9.33164 4.82652 8.9585 5.72736 8.9585 6.66667V8.33333C8.9585 8.67851 8.67867 8.95833 8.3335 8.95833H6.4585V11.0417H8.3335C8.67867 11.0417 8.9585 11.3215 8.9585 11.6667V16.875H11.0418V11.6667C11.0418 11.3215 11.3217 11.0417 11.6668 11.0417H13.6788L14.1997 8.95833H11.6668C11.3217 8.95833 11.0418 8.67851 11.0418 8.33333V6.66667C11.0418 6.27989 11.1955 5.90896 11.469 5.63547C11.7425 5.36198 12.1134 5.20833 12.5002 5.20833H14.3752V3.125H12.5002Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>, tooltip: "Facebook"
                },
                {
                    platform: "LinkedIn", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path fill="#4F4F4F" d="M4.99992 3.95834C4.42462 3.95834 3.95825 4.42471 3.95825 5.00001V15C3.95825 15.5753 4.42462 16.0417 4.99992 16.0417H14.9999C15.5752 16.0417 16.0416 15.5753 16.0416 15V5.00001C16.0416 4.42471 15.5752 3.95834 14.9999 3.95834H4.99992ZM2.70825 5.00001C2.70825 3.73436 3.73427 2.70834 4.99992 2.70834H14.9999C16.2656 2.70834 17.2916 3.73436 17.2916 5.00001V15C17.2916 16.2657 16.2656 17.2917 14.9999 17.2917H4.99992C3.73427 17.2917 2.70825 16.2657 2.70825 15V5.00001ZM6.66659 6.04168C7.01176 6.04168 7.29158 6.3215 7.29158 6.66668V6.67501C7.29158 7.02019 7.01176 7.30001 6.66659 7.30001C6.32141 7.30001 6.04159 7.02019 6.04159 6.67501V6.66668C6.04159 6.3215 6.32141 6.04168 6.66659 6.04168ZM6.66659 8.54168C7.01176 8.54168 7.29158 8.8215 7.29158 9.16668V13.3333C7.29158 13.6785 7.01176 13.9583 6.66659 13.9583C6.32141 13.9583 6.04159 13.6785 6.04159 13.3333V9.16668C6.04159 8.8215 6.32141 8.54168 6.66659 8.54168ZM10.5337 8.8413C10.4239 8.66161 10.2259 8.54168 9.99992 8.54168C9.65474 8.54168 9.37492 8.8215 9.37492 9.16668V13.3333C9.37492 13.6785 9.65474 13.9583 9.99992 13.9583C10.3451 13.9583 10.6249 13.6785 10.6249 13.3333V10.8333C10.6249 10.5571 10.7347 10.2921 10.93 10.0968C11.1254 9.90142 11.3903 9.79168 11.6666 9.79168C11.9429 9.79168 12.2078 9.90142 12.4032 10.0968C12.5985 10.2921 12.7083 10.5571 12.7083 10.8333V13.3333C12.7083 13.6785 12.9881 13.9583 13.3333 13.9583C13.6784 13.9583 13.9583 13.6785 13.9583 13.3333V10.8333C13.9583 10.2256 13.7168 9.64266 13.287 9.21289C12.8573 8.78312 12.2744 8.54168 11.6666 8.54168C11.2659 8.54168 10.876 8.64663 10.5337 8.8413Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>, tooltip: "LinkedIn"
                },
            ],
            avatar: "https://i.ibb.co/S3QRdcX/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg",
        },
        {
            id: 3,
            name: "Emma Thompson",
            achievements: [
                "◇ Molecular Biology Pioneer",
                "◇ Gene Therapy Expert",
                "◇ Teaching Excellence Award",
            ],
            bio: "Pioneering researcher in molecular biology and genetics with a focus on innovative therapeutic approaches. Leads a dynamic research team exploring breakthrough treatments for genetic disorders. Committed to mentoring the next generation of scientists.",
            joined: "Jan 5, 2025",
            location: "Cambridge, MA",
            social: [
                { platform: "Website", icon: <svg viewBox="0 0 80 80"><path fill="#4F4F4F" stroke-linejoin="miter" clip-rule="unset" fill-rule="unset" d="M40 7.5c-17.949 0-32.5 14.551-32.5 32.5s14.551 32.5 32.5 32.5c17.949 0 32.5-14.551 32.5-32.5v0c-0.019-17.942-14.558-32.481-32.498-32.5h-0.002zM66.033 48.767h-11.567c0.565-2.632 0.893-5.659 0.9-8.761v-0.005c-0.018-2.745-0.272-5.418-0.742-8.016l0.042 0.282h11.033c0.095 0.009 0.205 0.014 0.317 0.014s0.222-0.005 0.331-0.015l-0.014 0.001c0.733 2.312 1.159 4.972 1.167 7.73v0.004c-0.008 3.141-0.544 6.154-1.525 8.958l0.058-0.192zM30.567 48.767c-0.593-2.621-0.933-5.631-0.933-8.72 0-0.016 0-0.033 0-0.049v0.003c0.019-2.747 0.297-5.417 0.811-8.002l-0.045 0.269h19.2c0.47 2.316 0.748 4.986 0.767 7.718l0 0.015c-0.002 3.083-0.341 6.086-0.985 8.974l0.051-0.274zM48.033 53.767c-1.925 4.893-4.646 9.081-8.045 12.612l0.012-0.012c-3.394-3.537-6.116-7.748-7.944-12.409l-0.089-0.258zM13.967 48.767c-0.922-2.613-1.459-5.626-1.467-8.763v-0.004c-0-0.019-0-0.042-0-0.065 0-2.784 0.427-5.468 1.218-7.991l-0.051 0.189c0.095 0.009 0.205 0.014 0.317 0.014s0.222-0.005 0.331-0.015l-0.014 0.001h11.033c-0.436 2.36-0.69 5.080-0.7 7.858v0.008c0.012 3.087 0.339 6.090 0.951 8.988l-0.051-0.288h-11.233zM31.7 27.267c1.868-5.306 4.699-9.854 8.314-13.649l-0.014 0.015c3.601 3.779 6.432 8.328 8.219 13.37l0.081 0.263zM64.333 27.267h-10.833c-1.62-5.343-4.094-9.985-7.299-14.019l0.066 0.086c7.891 1.89 14.333 6.979 17.995 13.787l0.072 0.147zM33.733 13.333c-3.079 3.954-5.498 8.597-6.992 13.638l-0.075 0.295h-11c3.734-6.954 10.176-12.044 17.879-13.895l0.188-0.038zM16.167 53.7h10.5c1.699 4.974 4.111 9.279 7.162 13.045l-0.062-0.079c-7.548-1.804-13.765-6.507-17.53-12.839l-0.070-0.127zM46.167 66.767c3.010-3.719 5.444-8.055 7.076-12.767l0.090-0.3h10.6c-3.843 6.478-10.089 11.187-17.479 12.929l-0.187 0.037z"></path></svg>, tooltip: "Website" },
                {
                    platform: "Twitter (X)", icon: <svg viewBox="0 0 20 20">
                        <path fill="currentColor" d="M14.0738 3.75H16.2461L11.5003 9.04487L17.0834 16.25H12.7119L9.28791 11.8801L5.37012 16.25H3.1965L8.27267 10.5865L2.91675 3.75H7.39928L10.4942 7.74423L14.0738 3.75Z" />
                    </svg>, tooltip: "Twitter (X)"
                },
                {
                    platform: "Facebook", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path fill="currentColor" d="M9.11194 3.27845C10.0106 2.37983 11.2293 1.875 12.5002 1.875H15.0002C15.3453 1.875 15.6252 2.15482 15.6252 2.5V5.83333C15.6252 6.17851 15.3453 6.45833 15.0002 6.45833H12.5002C12.4449 6.45833 12.3919 6.48028 12.3528 6.51935C12.3138 6.55842 12.2918 6.61141 12.2918 6.66667V7.70833H15.0002C15.1926 7.70833 15.3743 7.797 15.4928 7.9487C15.6112 8.1004 15.6532 8.2982 15.6065 8.48492L14.7732 11.8183C14.7036 12.0965 14.4536 12.2917 14.1668 12.2917H12.2918V17.5C12.2918 17.8452 12.012 18.125 11.6668 18.125H8.3335C7.98832 18.125 7.7085 17.8452 7.7085 17.5V12.2917H5.8335C5.48832 12.2917 5.2085 12.0118 5.2085 11.6667V8.33333C5.2085 7.98816 5.48832 7.70833 5.8335 7.70833H7.7085V6.66667C7.7085 5.39584 8.21333 4.17706 9.11194 3.27845ZM12.5002 3.125C11.5609 3.125 10.66 3.49814 9.99583 4.16233C9.33164 4.82652 8.9585 5.72736 8.9585 6.66667V8.33333C8.9585 8.67851 8.67867 8.95833 8.3335 8.95833H6.4585V11.0417H8.3335C8.67867 11.0417 8.9585 11.3215 8.9585 11.6667V16.875H11.0418V11.6667C11.0418 11.3215 11.3217 11.0417 11.6668 11.0417H13.6788L14.1997 8.95833H11.6668C11.3217 8.95833 11.0418 8.67851 11.0418 8.33333V6.66667C11.0418 6.27989 11.1955 5.90896 11.469 5.63547C11.7425 5.36198 12.1134 5.20833 12.5002 5.20833H14.3752V3.125H12.5002Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>, tooltip: "Facebook"
                },
                {
                    platform: "LinkedIn", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path fill="#4F4F4F" d="M4.99992 3.95834C4.42462 3.95834 3.95825 4.42471 3.95825 5.00001V15C3.95825 15.5753 4.42462 16.0417 4.99992 16.0417H14.9999C15.5752 16.0417 16.0416 15.5753 16.0416 15V5.00001C16.0416 4.42471 15.5752 3.95834 14.9999 3.95834H4.99992ZM2.70825 5.00001C2.70825 3.73436 3.73427 2.70834 4.99992 2.70834H14.9999C16.2656 2.70834 17.2916 3.73436 17.2916 5.00001V15C17.2916 16.2657 16.2656 17.2917 14.9999 17.2917H4.99992C3.73427 17.2917 2.70825 16.2657 2.70825 15V5.00001ZM6.66659 6.04168C7.01176 6.04168 7.29158 6.3215 7.29158 6.66668V6.67501C7.29158 7.02019 7.01176 7.30001 6.66659 7.30001C6.32141 7.30001 6.04159 7.02019 6.04159 6.67501V6.66668C6.04159 6.3215 6.32141 6.04168 6.66659 6.04168ZM6.66659 8.54168C7.01176 8.54168 7.29158 8.8215 7.29158 9.16668V13.3333C7.29158 13.6785 7.01176 13.9583 6.66659 13.9583C6.32141 13.9583 6.04159 13.6785 6.04159 13.3333V9.16668C6.04159 8.8215 6.32141 8.54168 6.66659 8.54168ZM10.5337 8.8413C10.4239 8.66161 10.2259 8.54168 9.99992 8.54168C9.65474 8.54168 9.37492 8.8215 9.37492 9.16668V13.3333C9.37492 13.6785 9.65474 13.9583 9.99992 13.9583C10.3451 13.9583 10.6249 13.6785 10.6249 13.3333V10.8333C10.6249 10.5571 10.7347 10.2921 10.93 10.0968C11.1254 9.90142 11.3903 9.79168 11.6666 9.79168C11.9429 9.79168 12.2078 9.90142 12.4032 10.0968C12.5985 10.2921 12.7083 10.5571 12.7083 10.8333V13.3333C12.7083 13.6785 12.9881 13.9583 13.3333 13.9583C13.6784 13.9583 13.9583 13.6785 13.9583 13.3333V10.8333C13.9583 10.2256 13.7168 9.64266 13.287 9.21289C12.8573 8.78312 12.2744 8.54168 11.6666 8.54168C11.2659 8.54168 10.876 8.64663 10.5337 8.8413Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>, tooltip: "LinkedIn"
                },
            ],
            avatar: "https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png",
        },
    ]);

    const [searchTerms, setSearchTerms] = useState("");

    // Filtered members based on search term
    const filteredMembers = members.filter(
        (member) =>
            member.name.toLowerCase().includes(searchTerms.toLowerCase()) ||
            member.bio.toLowerCase().includes(searchTerms.toLowerCase()) ||
            member.location.toLowerCase().includes(searchTerms.toLowerCase())
    );

    const [leaderboards, setLeaderboards] = useState({
        course: [],
        event: [],
        community: [],
    });
    const [activeSection, setActiveSection] = useState("course");

    useEffect(() => {
        setLeaderboards({
            course: generateLeaderboardData("course"),
            event: generateLeaderboardData("event"),
            community: generateLeaderboardData("community"),
        });
    }, []);

    const toggleSection2 = (section) => {
        setActiveSection((prev) => (prev === section ? null : section));
    };
    const avatarUrls = [
        "https://i.ibb.co/cLLn8Ys/AVATAR-BHW.png",
        "https://i.ibb.co/fS9qW38/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg",
        "https://i.ibb.co/BKYjSYN/AVATAR-couponcodefinder.jpg",
        "https://i.ibb.co/2W0vcsK/AVATAR-github-com-biowaffeln.png",
        "https://i.ibb.co/pKyT26r/AVATAR-playright.png",
        "https://i.ibb.co/nkCr9Lx/AVATAR-smallbusiness-withgoogle-com-free-google-training.jpg",
        "https://i.ibb.co/qxD9YwB/AVATAR-trip-com.jpg",
        "https://i.ibb.co/ZHm2W6Q/AVATAR-Hannah-Seligson.png",
        "https://i.ibb.co/d4PBC6f/AVATAR-Kostis-Kapelonis.png",
        "https://i.ibb.co/0QbVwD3/AVATAR-laurentfa.png",
        "https://i.ibb.co/ZHhvXCJ/AVATAR-midtone-ux-instrgram.jpg",
    ];

    const firstNames = [
        "Alex",
        "Jordan",
        "Taylor",
        "Morgan",
        "Sam",
        "Casey",
        "Riley",
        "Avery",
        "Quinn",
        "Jamie",
    ];

    const lastNames = [
        "Smith",
        "Johnson",
        "Williams",
        "Brown",
        "Jones",
        "Garcia",
        "Miller",
        "Davis",
        "Rodriguez",
        "Martinez",
    ];

    const getRandomName = () => {
        const firstName =
            firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        return `${firstName} ${lastName}`;
    };

    const getRandomPoints = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    const generateLeaderboardData = (type) => {
        const data = [];
        for (let i = 0; i < 10; i++) {
            const points =
                type === "community"
                    ? getRandomPoints(500, 2000)
                    : type === "course"
                        ? getRandomPoints(30, 200)
                        : getRandomPoints(100, 800);

            data.push({
                rank: i + 1,
                avatarUrl: avatarUrls[i % avatarUrls.length],
                name: getRandomName(),
                points,
                tooltip:
                    type === "course"
                        ? `+${points} min of video watched`
                        : type === "event"
                            ? `+${points} event min attended`
                            : `+${points} posts created`,
            });
        }
        return data;
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
            image: "https://img-b.udemycdn.com/user/100x100/797726_5aff_3.jpg",
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
        <div className='calendar-page' onClick={handleOutsideClick}>
            <div className="container">
                <header className="header flex items-center gap-2">
                    <img className='w-12 h-12 rounded-lg mr-1' src='https://i.ibb.co/jJ4GHXP/img1.jpg' alt='img' />
                    <h1 className="school-name">The 4D Copywriting Community</h1>
                    <div className="relative inline-block -mb-1" onClick={(e) => e.stopPropagation()} >
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-200 p-1 rounded-full"
                        >
                            <svg viewBox="0 0 24 24" className="w-4 h-4">
                                <path d="M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15z"></path>
                            </svg>
                        </button>

                        {isOpen && (
                            <div
                                className="absolute right-0 mt-2 w-64 bg-white shadow-md rounded-lg z-50"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Search Input */}
                                <div className="flex items-center mx-3 mt-3 px-2.5 py-1.5 bg-gray-100 rounded-lg text-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-6l4 4"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="ml-2 w-full bg-transparent border-none outline-none text-gray-700"
                                    />
                                </div>

                                {/* Static "Create School" Option */}
                                <div className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer text-sm px-4 mt-2" onClick={() => context.setIsSchoolModal(!context.isSchoolModal)}>
                                    <div className="bg-gray-200 w-7 h-7 flex items-center justify-center rounded-lg mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2.5"
                                            stroke="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 4.75v14.5m7.25-7.25H4.75"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">Create School</span>
                                </div>

                                {/* Filtered Dropdown Options */}
                                <div className="mb-2 font-medium">
                                    {filteredOptions.length > 0 ? (
                                        filteredOptions.map((option) => (
                                            <div
                                                key={option.id}
                                                className="flex items-center py-2 hover:bg-gray-100 rounded cursor-pointer text-sm px-4"
                                            >
                                                <div
                                                    className={`${option.icon === "palette"
                                                        ? "bg-yellow-100"
                                                        : option.icon === "book"
                                                            ? "bg-blue-100"
                                                            : "bg-green-100"
                                                        } w-7 h-7 flex items-center justify-center rounded-lg mr-2`}
                                                >
                                                    {option.icon === "palette" && (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                            className="w-4 h-4 text-yellow-500"
                                                        >
                                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5h2v5h-2zm0-6.5h2V7h-2v3z"></path>
                                                        </svg>
                                                    )}
                                                    {option.icon === "book" && (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                            className="w-4 h-4 text-blue-500"
                                                        >
                                                            <path d="M4 3H20C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3ZM6 17H18V19H6V17ZM18 7H6V15H18V7Z" />
                                                        </svg>
                                                    )}
                                                    {option.icon === "camera" && (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                            className="w-4 h-4 text-green-500"
                                                        >
                                                            <path d="M20 5H16.83L14.41 2.59C14.21 2.39 13.92 2.29 13.63 2.29H10.37C10.08 2.29 9.79 2.39 9.59 2.59L7.17 5H4C2.9 5 2 5.9 2 7V17C2 18.1 2.9 19 4 19H20C21.1 19 22 18.1 22 17V7C22 5.9 21.1 5 20 5ZM12 16C10.34 16 9 14.66 9 13C9 11.34 10.34 10 12 10C13.66 10 15 11.34 15 13C15 14.66 13.66 16 12 16Z" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <span className="text-gray-700">{option.name}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-gray-500 text-center py-2">
                                            No results found
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </header>
                <nav className="nav-tabs z-0">
                    <a onClick={() => setactivetab('Courses')} className={`nav-tab ${activetab === 'Courses' ? 'active' : ''}`}>Courses</a>
                    <a onClick={() => setactivetab('Discussions')} className={`nav-tab ${activetab === 'Discussions' ? 'active' : ''}`}>Discussions</a>
                    <a onClick={() => setactivetab('Calendar')} className={`nav-tab ${activetab === 'Calendar' ? 'active' : ''}`}>Calendar</a>
                    <a onClick={() => setactivetab('Events')} className={`nav-tab ${activetab === 'Events' ? 'active' : ''}`}>Events</a>
                    <a onClick={() => setactivetab('Certificates')} className={`nav-tab ${activetab === 'Certificates' ? 'active' : ''}`}>Certificates</a>
                    <a onClick={() => setactivetab('Members')} className={`nav-tab ${activetab === 'Members' ? 'active' : ''}`}>Members</a>
                    <a onClick={() => setactivetab('About')} className={`nav-tab ${activetab === 'About' ? 'active' : ''}`}>About</a>
                </nav>

                {activetab === 'Calendar' &&
                    <>
                        <div className="calendar-header z-0">
                            <div className="month-nav flex items-center" style={{ alignItems: 'center' }}>
                                <button className="nav-arrow" onClick={handlePrevMonth}><svg style={{ width: '14px', height: '14px' }} viewBox="0 0 25 40">
                                    <path d="M24.2349 4.20503C24.5099 4.47811 24.5107 4.92268 24.2367 5.19673L9.92837 19.505C9.65501 19.7784 9.65501 20.2216 9.92837 20.495L24.2367 34.8033C24.5107 35.0773 24.5099 35.5219 24.2349 35.795L20.495 39.5085C20.2214 39.7802 19.7795 39.7795 19.5068 39.5068L0.495041 20.495C0.221674 20.2216 0.221673 19.7784 0.49504 19.505L19.5068 0.49323C19.7795 0.220545 20.2214 0.219764 20.495 0.491483L24.2349 4.20503Z"></path>
                                </svg></button>
                                <h2 className="current-month text-sm">{new Date(currentYear, currentMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
                                <button className="nav-arrow" onClick={handleNextMonth}><svg style={{ width: '14px', height: '14px' }} viewBox="0 0 25 40">
                                    <path d="M0.494387 4.20556C0.221231 4.478720.22099 4.92152 0.493848 5.19497L14.7733 19.5056C15.0459 19.7788 15.0459 20.2212 14.7733 20.4944L0.493849 34.805C0.220991 35.0785 0.221231 35.5213 0.494388 35.7944L4.20498 39.505C4.47834 39.7784 4.92156 39.7784 5.19493 39.505L24.205 20.495C24.4783 20.2216 24.4783 19.7784 24.205 19.505L5.19493 0.494976C4.92156 0.221609 4.47834 0.221608 4.20498 0.494975L0.494387 4.20556Z"></path>
                                </svg></button>
                            </div>

                            <div className="view-controls">
                                <button className="today-btn">Today</button>
                                <div className="view-toggle">
                                    <button
                                        className={`view-btn ${view === 'list' ? 'active' : ''}`}
                                        onClick={() => handleViewToggle('list')}
                                    >
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"></path>
                                        </svg>
                                    </button>
                                    <button
                                        className={`view-btn ${view === 'calendar' ? 'active' : ''}`}
                                        onClick={() => handleViewToggle('calendar')}
                                    >
                                        <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <rect ry="2" rx="2" height="18" width="18" y="4" x="3" stroke="currentColor"></rect>
                                            <line y2="6" x2="16" y1="2" x1="16" stroke="currentColor"></line>
                                            <line y2="6" x2="8" y1="2" x1="8" stroke="currentColor"></line>
                                            <line y2="10" x2="21" y1="10" x1="3" stroke="currentColor"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="calendar-content">
                            {view === 'calendar' && (
                                <div className="calendar-grid">
                                    <div className="weekday-header">Sun</div>
                                    <div className="weekday-header">Mon</div>
                                    <div className="weekday-header">Tue</div>
                                    <div className="weekday-header">Wed</div>
                                    <div className="weekday-header">Thu</div>
                                    <div className="weekday-header">Fri</div>
                                    <div className="weekday-header">Sat</div>
                                    {renderCalendarCells()}
                                </div>
                            )}
                            {view === 'list' && <div className="calendar-grid list-view">{renderListView()}</div>}
                        </div>
                    </>
                }
                {activetab === 'Discussions' &&
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <div className="mt-2">
                                    {/* Header with categories */}
                                    <div className="flex items-center gap-4 mb-6 flex-wrap font-medium text-sm">
                                        {categories.slice(0, showMore ? categories.length : 4).map((category) => (
                                            <button
                                                key={category.name}
                                                onClick={() => setActiveCategory(category.filter)}
                                                className={`px-4 py-2 rounded-full ${activeCategory === category.filter ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-1 border-gray-300'
                                                    }`}
                                            >
                                                {category.icon} {category.name}
                                            </button>
                                        ))}
                                        <button
                                            onClick={handleShowMoreToggle}
                                            className={`bg-white text-gray-700 border-1 border-gray-300 px-3.5 py-2 rounded-full ${!showMore ? 'ml-auto' : ''} `}
                                        >
                                            {showMore ? 'Less...' : 'More...'}
                                        </button>


                                        <div className='search-page' style={{ position: "relative" }}>
                                            <button className={`bg-white sort-buttons text-gray-700 border-1 border-gray-300 px-3.5 py-2 rounded-full ${FilterDropdown ? 'active' : ''} `} onClick={(e) => {
                                                e.stopPropagation();
                                                setFilterDropdown(!FilterDropdown);
                                            }}
                                            >
                                                <svg viewBox="0 0 24 24" width="19" height="19" className='-mb-1'>
                                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                                                </svg>
                                            </button>
                                            <div className="sort-dropdown" onClick={(e) => e.stopPropagation()} style={{ width: '380px' }}>
                                                <div className='flex items-start gap-1'>
                                                    <div style={{ width: '95%' }}>
                                                        <h4 className='ml-2 mb-1 text-gray-700'>Filter</h4>
                                                        <label className="sort-option">
                                                            <input
                                                                type="radio"
                                                                name="filter"
                                                                checked={filter === "None"}
                                                                onChange={() => setFilter("None")}
                                                            />
                                                            None
                                                        </label>
                                                        <label className="sort-option">
                                                            <input
                                                                type="radio"
                                                                name="filter"
                                                                checked={filter === "Pinned"}
                                                                onChange={() => setFilter("Pinned")}
                                                            />
                                                            Pinned
                                                        </label>
                                                    </div>
                                                    <div className='border-l pl-4' style={{ width: '100%' }}>
                                                        <h4 className='ml-2 mb-1 text-gray-700'>Sort</h4>
                                                        <label className="sort-option">
                                                            <input
                                                                type="radio"
                                                                name="sort"
                                                                checked={sort === "Newest"}
                                                                onChange={() => setSort("Newest")}
                                                            />
                                                            Newest
                                                        </label>
                                                        <label className="sort-option">
                                                            <input
                                                                type="radio"
                                                                name="sort"
                                                                checked={sort === "Oldest"}
                                                                onChange={() => setSort("Oldest")}
                                                            />
                                                            Oldest
                                                        </label>
                                                        <label className="sort-option">
                                                            <input
                                                                type="radio"
                                                                name="sort"
                                                                checked={sort === "Most Liked"}
                                                                onChange={() => setSort("Most Liked")}
                                                            />
                                                            Most Liked
                                                        </label>
                                                        <label className="sort-option">
                                                            <input
                                                                type="radio"
                                                                name="sort"
                                                                checked={sort === "Most Upvoted"}
                                                                onChange={() => setSort("Most Upvoted")}
                                                            />
                                                            Most Upvoted
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Posts feed */}
                                    {sortedPosts.map((post) => (
                                        <div
                                            key={post.id}
                                            className={`bg-white mb-4 rounded-lg border-1`}
                                        >
                                            {post.pinned && (
                                                <div className="flex items-center mb-2 text-dark-600 font-semibold px-3 text-sm py-2" style={{ background: '#f0f7ff' }}>
                                                    📌 Pinned
                                                </div>
                                            )}
                                            <div className='px-4 pb-4 pt-3'>
                                                <div className="flex items-center gap-2  mb-3">
                                                    <div className="relative group">
                                                        <img
                                                            src={avatars[Math.floor(Math.random() * avatars.length)]}
                                                            alt="avatar"
                                                            width={40}
                                                            height={40}
                                                            className="rounded-full"
                                                        />
                                                        <span className="absolute hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded -top-8 left-0">
                                                            {post.name}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">{post.name}</p>
                                                        <p className="text-sm text-gray-500 mt-1 font-medium">
                                                            {post.time} in <span>{post.category_icon} {post.category}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex items-start justify-between gap-4'>
                                                    <p className="mb-3 text-sm font-medium">{post.content}</p>
                                                    {post.image && (
                                                        <img
                                                            src={post.image}
                                                            alt="post image"
                                                            className="rounded-lg h-20"
                                                            style={{ objectFit: 'cover', width: '240px' }}
                                                        />
                                                    )}
                                                    {post.poll && (
                                                        <div className="mb-4 px-4 py-3 border-1 rounded-lg" style={{ background: '#f8f9fd' }}>
                                                            <p className='font-semibold mb-3'>Favourite Fitness Snacks?</p>
                                                            {post.poll.options.map((option, index) => (
                                                                <div key={index} className="flex items-center justify-between mb-2 font-medium" style={{ width: '300px' }}>
                                                                    <span style={{ width: '50%' }}>{option.name}</span>
                                                                    <span>{option.percentage}%</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                <hr className='my-2 mb-3 text-gray-500' />
                                                <div className="flex items-center gap-4 ">
                                                    <button className="flex items-center gap-2 text-gray-500">
                                                        👍 {post.likes}
                                                    </button>
                                                    <button className="flex items-center gap-2 text-gray-500">
                                                        💬 {post.comments}
                                                    </button>
                                                    <div className="flex -space-x-2">
                                                        {Array(3)
                                                            .fill()
                                                            .map((_, i) => (
                                                                <img
                                                                    key={i}
                                                                    src={avatars[Math.floor(Math.random() * avatars.length)]}
                                                                    alt="reaction avatar"
                                                                    width={24}
                                                                    height={24}
                                                                    className="rounded-full border-2 border-white"
                                                                />
                                                            ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='col-md-4'>
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
                                    </div></div>
                            </div>
                        </div>
                    </div>
                }
                {activetab === 'Courses' &&
                    <div className="p-4 rounded-lg shadow-md" style={{ background: '#f0f7ff' }}>
                        {/* Header Section */}
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={toggleSection}
                        >
                            <div className='flex items-center gap-3'>
                                <img className='w-14 h-14 rounded-lg' src='https://i.ibb.co/k67BZds/community-image1.png' />
                                <h2 className="text-2xl font-semibold text-gray-800">
                                    Your Progress in The 3D UX Journey
                                </h2>
                            </div>
                            <div
                                className="flex items-center justify-center w-8 h-8 bg-white rounded-md border-1 cursor-pointer hover:bg-gray-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    className={`transform transition-transform ${expanded ? "-rotate-0" : "rotate-180"
                                        }`}
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 8l6 6H6l6-6z"
                                        fill="#6B7280"
                                        stroke="#6B7280"
                                        stroke-width="1.5"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Collapsible Section */}
                        {expanded && (
                            <div className="mt-4">
                                {data.map((section, index) => (
                                    <div key={index} className="mb-6">
                                        <h3 className="font-semibold text-gray-600 mb-3">
                                            {section.section}
                                        </h3>
                                        {section.items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-white p-3 w-100 rounded-lg shadow-md mb-4 flex justify-between items-center gap-5"
                                            >
                                                <div className='flex items-center gap-4'>
                                                    <div className="w-48 h-32 bg-gray-100 rounded-lg shadow-md flex flex-col">
                                                        {/* Icon */}
                                                        <div className="flex items-center justify-center mb-4">
                                                            {item.type !== 'Video' ?
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={2}
                                                                    stroke="#02C5AF"
                                                                    className="w-10 h-10 mt-4"
                                                                >
                                                                    <rect
                                                                        x="3"
                                                                        y="7"
                                                                        width="18"
                                                                        height="14"
                                                                        rx="2"
                                                                        ry="2"
                                                                        fill="none"
                                                                        stroke="#02C5AF"
                                                                    />
                                                                    <line x1="3" y1="10" x2="21" y2="10" stroke="#02C5AF" />
                                                                    <circle cx="12" cy="16" r="2" fill="none" />
                                                                    <path d="M8 4h8M8 4v3M16 4v3" stroke="#02C5AF" />
                                                                </svg>
                                                                : <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-10 h-10 mt-4"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="#02C5AF"
                                                                    stroke-width="2"
                                                                >
                                                                    <circle cx="12" cy="12" r="10" stroke="#02C5AF" />
                                                                    <polygon points="10,8 16,12 10,16" fill="#02C5AF" />
                                                                </svg>}
                                                        </div>
                                                        {/* Title */}
                                                        <p className="text-sm font-medium text-gray-700 bg-gray-200 w-100 h-10 flex items-center justify-center rounded-bottom">{item.type}</p>
                                                    </div>
                                                    <div className='w-75'>
                                                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                                        <p className="mt-2 text-sm text-gray-600">{item.description}</p>

                                                        <div className='flex items-center gap-2 mt-3'>
                                                            <p className="text-sm text-gray-500">
                                                                {item.duration}
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                {item.completed && item.lastActive && item.completed
                                                                    ? `${item.lastActive}`
                                                                    : `Last Active: ${item.lastActive}`}
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                {`${item.current}/${item.total}`}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <div className="relative">
                                                        <div className="learner-report relative rounded">
                                                            <div className="progress-widget">
                                                                <div className="widget-header">
                                                                    <div className="progress-text">
                                                                        <span style={{ marginRight: '8px' }}>

                                                                        </span>
                                                                        CLAIMED
                                                                    </div>
                                                                    <div className="widget-arrow">
                                                                        <svg fill="none" viewBox="0 0 20 20">
                                                                            <path fill="#4F4F4F" d="M3.38189 10C5.24313 12.9154 7.45153 14.25 10 14.25C12.5485 14.25 14.7569 12.9154 16.6181 10C14.7569 7.0846 12.5485 5.75 10 5.75C7.45153 5.75 5.24313 7.0846 3.38189 10ZM1.85688 9.61413C3.94664 6.13119 6.65833 4.25 10 4.25C13.3417 4.25 16.0534 6.13119 18.1431 9.61413C18.2856 9.85164 18.2856 10.1484 18.1431 10.3859C16.0534 13.8688 13.3417 15.75 10 15.75C6.65833 15.75 3.94664 13.8688 1.85688 10.3859C1.71437 10.1484 1.71437 9.85164 1.85688 9.61413ZM8.29116 8.29116C8.74437 7.83795 9.35906 7.58333 10 7.58333C10.6409 7.58333 11.2556 7.83795 11.7088 8.29116C12.1621 8.74437 12.4167 9.35906 12.4167 10C12.4167 10.6409 12.1621 11.2556 11.7088 11.7088C11.2556 12.1621 10.6409 12.4167 10 12.4167C9.35906 12.4167 8.74437 12.1621 8.29116 11.7088C7.83795 11.2556 7.58333 10.6409 7.58333 10C7.58333 9.35906 7.83795 8.74437 8.29116 8.29116ZM10 9.08333C9.75689 9.08333 9.52373 9.17991 9.35182 9.35182C9.17991 9.52373 9.08333 9.75689 9.08333 10C9.08333 10.2431 9.17991 10.4763 9.35182 10.6482C9.52373 10.8201 9.75689 10.9167 10 10.9167C10.2431 10.9167 10.4763 10.8201 10.6482 10.6482C10.8201 10.4763 10.9167 10.2431 10.9167 10C10.9167 9.75689 10.8201 9.52373 10.6482 9.35182C10.4763 9.17991 10.2431 9.08333 10 9.08333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>

                                                                <div className="progress-bar">
                                                                    <div className="progress-fill" style={{ width: `${item.progress}%` }}></div>
                                                                </div>

                                                                <div className="avatars-row">
                                                                    <div className="avatar-wrapper" data-progress="20">
                                                                        <img src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Early claimer" />
                                                                        <div className="tooltip">Claimed Oct 15, 2023</div>
                                                                    </div>
                                                                    <div className="avatar-wrapper" data-progress="40">
                                                                        <img src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Certificate holder" />
                                                                        <div className="tooltip">Claimed Oct 20, 2023</div>
                                                                    </div>
                                                                    <div className="avatar-wrapper" data-progress="60">
                                                                        <img src="https://i.ibb.co/YP71Tb6/profile9.jpg" alt="Certificate holder" />
                                                                        <div className="tooltip">Claimed Oct 25, 2023</div>
                                                                    </div>
                                                                    <div className="avatar-wrapper" data-progress="80">
                                                                        <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="Recent claimer" />
                                                                        <div className="tooltip">Claimed Oct 30, 2023</div>
                                                                    </div>
                                                                    <div className="avatar-wrapper active" data-progress="100">
                                                                        <img src="https://i.ibb.co/S3QRdcX/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Current user" />
                                                                        <div className="tooltip">You Claimed: Nov 5, 2023</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                }
                {activetab === 'Certificates' &&
                    <div className="certificate-tab">
                        <div className="main-container">
                            {/* Header Section */}
                            <div className="certificates-section">
                                <div className="section-header">
                                    <div className="section-header-left">
                                        <div className="user-profile">
                                            <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="User Avatar" className="user-avatar" />
                                            <div className="user-info">
                                                <h2 className="user-name">Your Certificates</h2>
                                                <div className="user-stats">
                                                    <div className="stat-item">
                                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>3 Completed</span>
                                                    </div>
                                                    <div className="stat-item">
                                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span>2 In Progress</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs Section */}
                                <div className="section-tabs flex space-x-4 mb-6">
                                    {Object.keys(CertificateData).map((tab) => (
                                        <div
                                            key={tab}
                                            className={`section-tab ${activeTab === tab
                                                ? "active"
                                                : ""
                                                }`}
                                            onClick={() => setActiveTab(tab)}
                                        >
                                            {tab} ({CertificateData[tab].length})
                                        </div>
                                    ))}
                                </div>

                                {/* Certificates Grid */}
                                <div className="certificates-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                    {CertificateData[activeTab].map((certificate, index) => (
                                        <div
                                            key={index}
                                            className="certificate-card"
                                        >
                                            {/* Certificate Header */}
                                            <div className="certificate-header">
                                                <div className="certificate-icon">
                                                    {certificate.status === "Claimed" ?
                                                        <svg fill="none" viewBox="0 0 32 32">
                                                            <path fill="currentColor" d="M6.66667 7.66406C5.75228 7.66406 5 8.41635 5 9.33073V22.6641C5 23.1061 5.17559 23.53 5.48816 23.8426C5.80072 24.1551 6.22464 24.3307 6.66667 24.3307H13.3333C13.8856 24.3307 14.3333 24.7784 14.3333 25.3307C14.3333 25.883 13.8856 26.3307 13.3333 26.3307H6.66667C5.69421 26.3307 4.76157 25.9444 4.07394 25.2568C3.38631 24.5692 3 23.6365 3 22.6641V9.33073C3 7.31178 4.64772 5.66406 6.66667 5.66406H25.3333C26.3058 5.66406 27.2384 6.05037 27.9261 6.738C28.6137 7.42564 29 8.35827 29 9.33073V22.6651C28.9993 23.3081 28.8296 23.9396 28.5078 24.4963C28.186 25.053 27.7235 25.5153 27.1667 25.8368C26.6884 26.1129 26.0768 25.949 25.8006 25.4707C25.5245 24.9924 25.6884 24.3808 26.1667 24.1047C26.4198 23.9586 26.63 23.7484 26.7763 23.4954C26.9226 23.2424 26.9997 22.9553 27 22.663V9.33073C27 8.8887 26.8244 8.46478 26.5118 8.15222C26.1993 7.83966 25.7754 7.66406 25.3333 7.66406H6.66667ZM7 11.9974C7 11.4451 7.44772 10.9974 8 10.9974H24C24.5523 10.9974 25 11.4451 25 11.9974C25 12.5497 24.5523 12.9974 24 12.9974H8C7.44772 12.9974 7 12.5497 7 11.9974ZM7 15.9974C7 15.4451 7.44772 14.9974 8 14.9974H12C12.5523 14.9974 13 15.4451 13 15.9974C13 16.5497 12.5523 16.9974 12 16.9974H8C7.44772 16.9974 7 16.5497 7 15.9974ZM20 16.9974C18.3431 16.9974 17 18.3405 17 19.9974C17 21.6543 18.3431 22.9974 20 22.9974C21.6569 22.9974 23 21.6543 23 19.9974C23 18.3405 21.6569 16.9974 20 16.9974ZM15 19.9974C15 17.236 17.2386 14.9974 20 14.9974C22.7614 14.9974 25 17.236 25 19.9974C25 21.3101 24.4941 22.5047 23.6667 23.3968V29.3307C23.6667 29.7095 23.4527 30.0558 23.1139 30.2252C22.7751 30.3946 22.3697 30.358 22.0667 30.1307L20 28.5807L17.9333 30.1307C17.6303 30.358 17.2249 30.3946 16.8861 30.2252C16.5473 30.0558 16.3333 29.7095 16.3333 29.3307V23.3968C15.5059 22.5047 15 21.3101 15 19.9974ZM18.3333 24.7129V27.3307L19.4 26.5307C19.7556 26.2641 20.2444 26.2641 20.6 26.5307L21.6667 27.3307V24.7129C21.1454 24.8971 20.5844 24.9974 20 24.9974C19.4156 24.9974 18.8546 24.8971 18.3333 24.7129ZM7 19.9974C7 19.4451 7.44772 18.9974 8 18.9974H10.6667C11.219 18.9974 11.6667 19.4451 11.6667 19.9974C11.6667 20.5497 11.219 20.9974 10.6667 20.9974H8C7.44772 20.9974 7 20.5497 7 19.9974Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                        </svg>
                                                        : certificate.status === "Completed" ? <svg fill="none" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M8 3.75C7.66848 3.75 7.35054 3.8817 7.11612 4.11612C6.8817 4.35054 6.75 4.66848 6.75 5V17C6.75 17.3315 6.8817 17.6495 7.11612 17.8839C7.35054 18.1183 7.66848 18.25 8 18.25H9.25V18C9.25 17.8709 9.28262 17.7494 9.34007 17.6433C8.64199 16.9409 8.25 15.9907 8.25 15C8.25 14.0054 8.64509 13.0516 9.34835 12.3483C10.0516 11.6451 11.0054 11.25 12 11.25C12.9946 11.25 13.9484 11.6451 14.6517 12.3483C15.3549 13.0516 15.75 14.0054 15.75 15C15.75 15.9907 15.358 16.9409 14.6599 17.6433C14.7174 17.7494 14.75 17.8709 14.75 18V18.25H16C16.3315 18.25 16.6495 18.1183 16.8839 17.8839C17.1183 17.6495 17.25 17.3315 17.25 17V5C17.25 4.66848 17.1183 4.35054 16.8839 4.11612C16.6495 3.8817 16.3315 3.75 16 3.75H8ZM14.75 19.75H16C16.7293 19.75 17.4288 19.4603 17.9445 18.9445C18.4603 18.4288 18.75 17.7293 18.75 17V5C18.75 4.27065 18.4603 3.57118 17.9445 3.05546C17.4288 2.53973 16.7293 2.25 16 2.25H8C7.27065 2.25 6.57118 2.53973 6.05546 3.05546C5.53973 3.57118 5.25 4.27065 5.25 5V17C5.25 17.7293 5.53973 18.4288 6.05546 18.9445C6.57118 19.4603 7.27065 19.75 8 19.75H9.25V22C9.25 22.2599 9.38459 22.5013 9.6057 22.638C9.82681 22.7746 10.1029 22.7871 10.3354 22.6708L12 21.8385L13.6646 22.6708C13.8971 22.7871 14.1732 22.7746 14.3943 22.638C14.6154 22.5013 14.75 22.2599 14.75 22V19.75ZM13.25 18.5355V20.7865L12.3354 20.3292C12.1243 20.2236 11.8757 20.2236 11.6646 20.3292L10.75 20.7865V18.5355C11.1478 18.6762 11.5701 18.75 12 18.75C12.4299 18.75 12.8522 18.6762 13.25 18.5355ZM9.25 7C9.25 6.58579 9.58579 6.25 10 6.25H14C14.4142 6.25 14.75 6.58579 14.75 7C14.75 7.41421 14.4142 7.75 14 7.75H10C9.58579 7.75 9.25 7.41421 9.25 7ZM12 12.75C11.4033 12.75 10.831 12.9871 10.409 13.409C9.98705 13.831 9.75 14.4033 9.75 15C9.75 15.5967 9.98705 16.169 10.409 16.591C10.831 17.0129 11.4033 17.25 12 17.25C12.5967 17.25 13.169 17.0129 13.591 16.591C14.0129 16.169 14.25 15.5967 14.25 15C14.25 14.4033 14.0129 13.831 13.591 13.409C13.169 12.9871 12.5967 12.75 12 12.75Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                        </svg> : certificate.status === "In Progress" ? <svg fill="none" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M8 3.75C7.66848 3.75 7.35054 3.8817 7.11612 4.11612C6.8817 4.35054 6.75 4.66848 6.75 5V17C6.75 17.3315 6.8817 17.6495 7.11612 17.8839C7.35054 18.1183 7.66848 18.25 8 18.25H9.25V18C9.25 17.8709 9.28262 17.7494 9.34007 17.6433C8.64199 16.9409 8.25 15.9907 8.25 15C8.25 14.0054 8.64509 13.0516 9.34835 12.3483C10.0516 11.6451 11.0054 11.25 12 11.25C12.9946 11.25 13.9484 11.6451 14.6517 12.3483C15.3549 13.0516 15.75 14.0054 15.75 15C15.75 15.9907 15.358 16.9409 14.6599 17.6433C14.7174 17.7494 14.75 17.8709 14.75 18V18.25H16C16.3315 18.25 16.6495 18.1183 16.8839 17.8839C17.1183 17.6495 17.25 17.3315 17.25 17V5C17.25 4.66848 17.1183 4.35054 16.8839 4.11612C16.6495 3.8817 16.3315 3.75 16 3.75H8ZM14.75 19.75H16C16.7293 19.75 17.4288 19.4603 17.9445 18.9445C18.4603 18.4288 18.75 17.7293 18.75 17V5C18.75 4.27065 18.4603 3.57118 17.9445 3.05546C17.4288 2.53973 16.7293 2.25 16 2.25H8C7.27065 2.25 6.57118 2.53973 6.05546 3.05546C5.53973 3.57118 5.25 4.27065 5.25 5V17C5.25 17.7293 5.53973 18.4288 6.05546 18.9445C6.57118 19.4603 7.27065 19.75 8 19.75H9.25V22C9.25 22.2599 9.38459 22.5013 9.6057 22.638C9.82681 22.7746 10.1029 22.7871 10.3354 22.6708L12 21.8385L13.6646 22.6708C13.8971 22.7871 14.1732 22.7746 14.3943 22.638C14.6154 22.5013 14.75 22.2599 14.75 22V19.75ZM13.25 18.5355V20.7865L12.3354 20.3292C12.1243 20.2236 11.8757 20.2236 11.6646 20.3292L10.75 20.7865V18.5355C11.1478 18.6762 11.5701 18.75 12 18.75C12.4299 18.75 12.8522 18.6762 13.25 18.5355ZM9.25 7C9.25 6.58579 9.58579 6.25 10 6.25H14C14.4142 6.25 14.75 6.58579 14.75 7C14.75 7.41421 14.4142 7.75 14 7.75H10C9.58579 7.75 9.25 7.41421 9.25 7ZM12 12.75C11.4033 12.75 10.831 12.9871 10.409 13.409C9.98705 13.831 9.75 14.4033 9.75 15C9.75 15.5967 9.98705 16.169 10.409 16.591C10.831 17.0129 11.4033 17.25 12 17.25C12.5967 17.25 13.169 17.0129 13.591 16.591C14.0129 16.169 14.25 15.5967 14.25 15C14.25 14.4033 14.0129 13.831 13.591 13.409C13.169 12.9871 12.5967 12.75 12 12.75Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                        </svg> : certificate.status === "Not Started" ? <svg fill="none" viewBox="0 0 32 32">
                                                            <path fill="currentColor" d="M6.66667 7.66406C5.75228 7.66406 5 8.41635 5 9.33073V22.6641C5 23.1061 5.17559 23.53 5.48816 23.8426C5.80072 24.1551 6.22464 24.3307 6.66667 24.3307H13.3333C13.8856 24.3307 14.3333 24.7784 14.3333 25.3307C14.3333 25.883 13.8856 26.3307 13.3333 26.3307H6.66667C5.69421 26.3307 4.76157 25.9444 4.07394 25.2568C3.38631 24.5692 3 23.6365 3 22.6641V9.33073C3 7.31178 4.64772 5.66406 6.66667 5.66406H25.3333C26.3058 5.66406 27.2384 6.05037 27.9261 6.738C28.6137 7.42564 29 8.35827 29 9.33073V22.6651C28.9993 23.3081 28.8296 23.9396 28.5078 24.4963C28.186 25.053 27.7235 25.5153 27.1667 25.8368C26.6884 26.1129 26.0768 25.949 25.8006 25.4707C25.5245 24.9924 25.6884 24.3808 26.1667 24.1047C26.4198 23.9586 26.63 23.7484 26.7763 23.4954C26.9226 23.2424 26.9997 22.9553 27 22.663V9.33073C27 8.8887 26.8244 8.46478 26.5118 8.15222C26.1993 7.83966 25.7754 7.66406 25.3333 7.66406H6.66667ZM7 11.9974C7 11.4451 7.44772 10.9974 8 10.9974H24C24.5523 10.9974 25 11.4451 25 11.9974C25 12.5497 24.5523 12.9974 24 12.9974H8C7.44772 12.9974 7 12.5497 7 11.9974ZM7 15.9974C7 15.4451 7.44772 14.9974 8 14.9974H12C12.5523 14.9974 13 15.4451 13 15.9974C13 16.5497 12.5523 16.9974 12 16.9974H8C7.44772 16.9974 7 16.5497 7 15.9974ZM20 16.9974C18.3431 16.9974 17 18.3405 17 19.9974C17 21.6543 18.3431 22.9974 20 22.9974C21.6569 22.9974 23 21.6543 23 19.9974C23 18.3405 21.6569 16.9974 20 16.9974ZM15 19.9974C15 17.236 17.2386 14.9974 20 14.9974C22.7614 14.9974 25 17.236 25 19.9974C25 21.3101 24.4941 22.5047 23.6667 23.3968V29.3307C23.6667 29.7095 23.4527 30.0558 23.1139 30.2252C22.7751 30.3946 22.3697 30.358 22.0667 30.1307L20 28.5807L17.9333 30.1307C17.6303 30.358 17.2249 30.3946 16.8861 30.2252C16.5473 30.0558 16.3333 29.7095 16.3333 29.3307V23.3968C15.5059 22.5047 15 21.3101 15 19.9974ZM18.3333 24.7129V27.3307L19.4 26.5307C19.7556 26.2641 20.2444 26.2641 20.6 26.5307L21.6667 27.3307V24.7129C21.1454 24.8971 20.5844 24.9974 20 24.9974C19.4156 24.9974 18.8546 24.8971 18.3333 24.7129ZM7 19.9974C7 19.4451 7.44772 18.9974 8 18.9974H10.6667C11.219 18.9974 11.6667 19.4451 11.6667 19.9974C11.6667 20.5497 11.219 20.9974 10.6667 20.9974H8C7.44772 20.9974 7 20.5497 7 19.9974Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                        </svg> : ''}
                                                </div>
                                                <div className="certificate-title-section">
                                                    <h3 className="certificate-title">
                                                        {certificate.title}
                                                    </h3>
                                                    <div className="certificate-meta">
                                                        <span>{certificate.level}</span>
                                                        {certificate.issued && (
                                                            <>
                                                                <span>•</span>
                                                                <span>{certificate.issued}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Progress Section */}
                                            <div className="certificate-content">
                                                <div className="progress-section">
                                                    <div className="progress-header">
                                                        <span className="progress-label">Course Progress</span>
                                                        <span className="progress-value">
                                                            {certificate.progress}%
                                                        </span>
                                                    </div>
                                                    <div className="progress-bar">
                                                        <div
                                                            className={`progress-fill`}
                                                            style={{
                                                                width: `${certificate.progress}%`,
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Footer Section */}
                                            <div className="certificate-footer">
                                                <div className="certificate-status">
                                                    <div
                                                        className={`status-icon ${certificate.status === "Claimed"
                                                            ? "completed"
                                                            : certificate.status === "In Progress"
                                                                ? "in-progress"
                                                                : certificate.status === "Completed"
                                                                    ? "completed"
                                                                    : certificate.status === "Not Started"
                                                                        ? "not-started"
                                                                        : ""
                                                            }`}
                                                    >
                                                        {certificate.status === 'Claimed' ? <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" ><path d="M149.61,85.71l-89.6,88a8,8,0,0,1-11.22,0L10.39,136a8,8,0,1,1,11.22-11.41L54.4,156.79l84-82.5a8,8,0,1,1,11.22,11.42Zm96.1-11.32a8,8,0,0,0-11.32-.1l-84,82.5-18.83-18.5a8,8,0,0,0-11.21,11.42l24.43,24a8,8,0,0,0,11.22,0l89.6-88A8,8,0,0,0,245.71,74.39Z"></path></svg> :
                                                            certificate.status === 'Completed' ? <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                            </svg> :
                                                                certificate.status === 'In Progress' ? <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 32 32">
                                                                    <path fill="currentColor" d="M11.0251 3.98957C12.6023 3.33626 14.2928 3 16 3C17.7072 3 19.3977 3.33626 20.9749 3.98957C22.5521 4.64288 23.9852 5.60045 25.1924 6.80761C26.3995 8.01477 27.3571 9.44788 28.0104 11.0251C28.6637 12.6023 29 14.2928 29 16C29 17.7072 28.6637 19.3977 28.0104 20.9749C27.3571 22.5521 26.3995 23.9852 25.1924 25.1924C23.9852 26.3995 22.5521 27.3571 20.9749 28.0104C19.3977 28.6637 17.7072 29 16 29C14.2928 29 12.6023 28.6637 11.0251 28.0104C9.44788 27.3571 8.01477 26.3995 6.80761 25.1924C5.60045 23.9852 4.64288 22.5521 3.98957 20.9749C3.33625 19.3977 3 17.7072 3 16C3 14.2928 3.33625 12.6023 3.98957 11.0251C4.64288 9.44788 5.60045 8.01477 6.80761 6.80761C8.01477 5.60045 9.44788 4.64288 11.0251 3.98957ZM16 5C14.5555 5 13.1251 5.28452 11.7905 5.83733C10.4559 6.39013 9.24327 7.20038 8.22183 8.22183C7.20038 9.24327 6.39013 10.4559 5.83733 11.7905C5.28452 13.1251 5 14.5555 5 16C5 17.4445 5.28452 18.8749 5.83733 20.2095C6.39013 21.5441 7.20038 22.7567 8.22183 23.7782C9.24327 24.7996 10.4559 25.6099 11.7905 26.1627C13.1251 26.7155 14.5555 27 16 27C17.4445 27 18.8749 26.7155 20.2095 26.1627C21.5441 25.6099 22.7567 24.7996 23.7782 23.7782C24.7996 22.7567 25.6099 21.5441 26.1627 20.2095C26.7155 18.8749 27 17.4445 27 16C27 14.5555 26.7155 13.1251 26.1627 11.7905C25.6099 10.4559 24.7996 9.24327 23.7782 8.22183C22.7567 7.20038 21.5441 6.39013 20.2095 5.83733C18.8749 5.28452 17.4445 5 16 5ZM16 8.33333C16.5523 8.33333 17 8.78105 17 9.33333V15.4648L20.5547 17.8346C21.0142 18.141 21.1384 18.7618 20.8321 19.2214C20.5257 19.6809 19.9048 19.8051 19.4453 19.4987L15.4453 16.8321C15.1671 16.6466 15 16.3344 15 16V9.33333C15 8.78105 15.4477 8.33333 16 8.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                </svg> :
                                                                    certificate.status === 'Not Started' ? <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                                    </svg> :
                                                                        ''}</div>
                                                    <span>
                                                        {certificate.status}
                                                    </span>
                                                </div>
                                                <div className="certificate-actions">
                                                    {certificate.actions.map((action, idx) => (
                                                        <button
                                                            key={idx}
                                                            className={`action-button ${action === "Share"
                                                                ? "secondary-button"
                                                                : action === "Continue Learning"
                                                                    ? "primary-button"
                                                                    : "primary-button"
                                                                }`}
                                                        >
                                                            {action}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {activetab === 'Events' &&
                    <div className="events-tab w-100">
                        <div className="learning-section">
                            <div className="section-header">
                                <div className="section-header-left">
                                    <img
                                        src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png"
                                        alt="Course"
                                        className="section-thumbnail"
                                    />
                                    <h2 className="section-title">
                                        <span className="section-title-prefix">Enrolled Events by</span>
                                        <span className="section-title-main">Ben Smith</span>
                                    </h2>
                                </div>
                                <button
                                    className="expand-button"
                                    onClick={() => toggleCollapse("section1")}
                                >
                                    <svg
                                        style={{
                                            transform: collapsedSections["section1"] ? 'rotate(-90deg)' : 'rotate(0deg)',
                                        }}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                    </svg>

                                </button>
                            </div>

                            <div
                                className={`section-content ${collapsedSections["section1"] ? "collapsed" : ""
                                    }`}
                                style={{
                                    display: collapsedSections["section1"] ? "none" : "block",
                                }}
                            >
                                <div className="content-header-wrapper">
                                    <div className="content-header-left">
                                        <img
                                            src="https://i.ibb.co/jJ4GHXP/img1.jpg"
                                            alt="Course"
                                            className="content-header-image"
                                        />
                                        <span className="content-header-title">The 3D UX Journey</span>
                                    </div>
                                    <div className="content-header-action">
                                        View Event
                                        <svg viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M14.29 5.71c-.39.39-.39 1.02 0 1.41L18.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h15.18l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l5.59-5.59c.39-.39.39-1.02 0-1.41l-5.6-5.58c-.38-.39-1.02-.39-1.41 0"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="events-grid">
                                    <div className="event-card">
                                        <div className="unit-icon-container">
                                            <svg className="unit-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 38">
                                                <path stroke-width="0.25" stroke="currentColor" fill="currentColor" d="M12.3205 25.7152H21.1938C21.8457 26.6366 22.9139 27.2235 24.1101 27.2235C26.0733 27.2235 27.674 25.6231 27.6746 23.6601C27.693 22.4994 27.1241 21.4509 26.2582 20.8003V12.2557V12.1307H26.1332H23.5913V11.943C23.5913 11.6717 23.3698 11.4502 23.0985 11.4502C22.8271 11.4502 22.6056 11.6717 22.6056 11.943V12.1307H19.1219V11.943C19.1219 11.6717 18.9005 11.4502 18.6291 11.4502C18.3578 11.4502 18.1363 11.6717 18.1363 11.943V12.1307H14.6342V11.943C14.6342 11.6717 14.4127 11.4502 14.1414 11.4502C13.87 11.4502 13.6486 11.6717 13.6486 11.943V12.1307H11.125H11V12.2557V24.3948C11 25.1259 11.5893 25.7152 12.3205 25.7152ZM21.6855 24.9867L21.6858 24.9866L21.6815 24.9786C21.4706 24.592 21.3472 24.1343 21.3472 23.659C21.3474 22.1285 22.5967 20.8965 24.1099 20.8965C24.6199 20.8965 25.0941 21.0371 25.4979 21.2829L25.4978 21.283L25.5031 21.2858C25.6925 21.3892 25.8671 21.5283 26.0263 21.6875L26.1147 21.5991L26.0263 21.6875C26.5388 22.2 26.8725 22.9049 26.8725 23.6775C26.8725 25.2076 25.6238 26.4394 24.1112 26.4402C23.3008 26.4221 22.5615 26.0697 22.0511 25.5068C21.9058 25.3434 21.7693 25.171 21.6855 24.9867ZM11.8016 12.9324H13.6667V13.1201C13.6667 13.3915 13.8881 13.6129 14.1595 13.6129C14.4308 13.6129 14.6523 13.3915 14.6523 13.1201V12.9324H18.1544V13.1201C18.1544 13.3915 18.3759 13.6129 18.6472 13.6129C18.9186 13.6129 19.14 13.3915 19.14 13.1201V12.9324H22.6421V13.1201C22.6421 13.3915 22.8636 13.6129 23.1349 13.6129C23.4063 13.6129 23.6278 13.3915 23.6278 13.1201V12.9324H25.4928V14.0987H11.8016V12.9324ZM12.3203 24.9135C12.0398 24.9135 11.8014 24.6752 11.8014 24.3947L11.8016 14.9004H25.438V20.3609C25.0283 20.1965 24.5773 20.0946 24.11 20.0946C22.1466 20.0946 20.5456 21.6956 20.5456 23.6591C20.5456 24.1068 20.6321 24.5251 20.7792 24.9135H12.3203Z"></path>
                                                <path fill="currentColor" d="M25.3976 24.1553L25.0483 23.9346L24.3861 23.5116V21.7827C24.3861 21.6355 24.2573 21.5068 24.1103 21.5068C23.9631 21.5068 23.8345 21.6356 23.8345 21.7827V23.8059L25.1036 24.6152C25.1587 24.652 25.1956 24.652 25.2507 24.652C25.3427 24.652 25.4347 24.6152 25.4899 24.5232C25.5633 24.4128 25.5264 24.2473 25.3976 24.1553L25.3976 24.1553Z"></path>
                                                <path fill="currentColor" d="M20.2375 16.75H19.1125V17.875H20.2375V16.75ZM22.15 16.75H21.025V17.875H22.15V16.75ZM22.9375 16.75H24.0625V17.875H22.9375V16.75ZM18.325 19H17.2V20.125H18.325V19ZM19.1125 19H20.2375V20.125H19.1125V19ZM22.15 19H21.025V20.125H22.15V19ZM17.2 21.25H18.325V22.375H17.2V21.25ZM16.4125 21.25H15.2875V22.375H16.4125V21.25ZM13.375 21.25H14.5V22.375H13.375V21.25ZM16.4125 19H15.2875V20.125H16.4125V19ZM13.375 19H14.5V20.125H13.375V19ZM24.0625 19H22.9375V20.125H24.0625V19ZM17.2 16.75H18.325V17.875H17.2V16.75ZM16.4125 16.75H15.2875V17.875H16.4125V16.75Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                            </svg>
                                            <div className="icon-footer">1:1 Session</div>
                                        </div>
                                        <h3 className="event-title">Creating Engaging Learning Journeys: UI/UX Best Practices</h3>
                                        <div className="event-meta">
                                            <div className="instructor-pill">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="instructor-image" height="100%" width="100%"><path fill="currentColor" d="m15.474 11.793-5.366 5.367a1 1 0 0 1-1.414-1.414l5.366-5.367h-3.586a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-3.586Z"></path><path fill="currentColor" d="M22.938 12.914c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10s4.477-10 10-10c5.522 0 10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>

                                                <span className="instructor-name">Book Now</span>
                                            </div>


                                            <div className="event-stats">
                                                <div className="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    12.5K
                                                </div>
                                                <div className="course-level">
                                                    <svg fill="none" viewBox="0 0 61 61" xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="currentColor" d="M27 26.8555H42"></path>
                                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="currentColor" d="M27 34.3555H42"></path>
                                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="currentColor" d="M49.5 9.98047H12C10.9645 9.98047 10.125 10.8199 10.125 11.8555V49.3555C10.125 50.391 10.9645 51.2305 12 51.2305H49.5C50.5355 51.2305 51.375 50.391 51.375 49.3555V11.8555C51.375 10.8199 50.5355 9.98047 49.5 9.98047Z"></path>
                                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="currentColor" d="M19.5 9.98047V51.2305"></path>
                                                    </svg>
                                                    <span className="level-value">3 Resources</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="event-card">
                                        <div className="unit-icon-container">
                                            <svg className="unit-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 38">
                                                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.2" stroke="currentColor" d="M22.8865 17.1133L27.3332 14.42V23.5867L22.8865 20.8867M10.6665 14.42H20.8532C21.3925 14.42 21.9096 14.6342 22.291 15.0155C22.6723 15.3969 22.8865 15.9141 22.8865 16.4533V23.5867H12.6998C12.4323 23.5867 12.1673 23.5339 11.9202 23.4313C11.6731 23.3287 11.4486 23.1783 11.2597 22.9888C11.0708 22.7992 10.9212 22.5743 10.8194 22.3268C10.7176 22.0794 10.6656 21.8142 10.6665 21.5467V14.42Z"></path>
                                            </svg>
                                            <div className="icon-footer">Zoom</div>
                                        </div>
                                        <h3 className="event-title">Understanding User Research and Analysis</h3>
                                        <div className="event-meta">
                                            <div className="instructor-pill">
                                                <div className="instructor-pill">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="instructor-image" height="100%" width="100%"><path fill="currentColor" d="m15.474 11.793-5.366 5.367a1 1 0 0 1-1.414-1.414l5.366-5.367h-3.586a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-3.586Z"></path><path fill="currentColor" d="M22.938 12.914c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10s4.477-10 10-10c5.522 0 10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>

                                                    <span className="instructor-name">Book Now</span>

                                                </div>
                                            </div>
                                            <div className="event-stats">
                                                <div className="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    8.2K
                                                </div>
                                                <div className="course-level">
                                                    <svg height="16" width="16" fill="none" viewBox="0 0 61 61" xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="currentColor" d="M27 26.8555H42"></path>
                                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="currentColor" d="M27 34.3555H42"></path>
                                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="currentColor" d="M49.5 9.98047H12C10.9645 9.98047 10.125 10.8199 10.125 11.8555V49.3555C10.125 50.391 10.9645 51.2305 12 51.2305H49.5C50.5355 51.2305 51.375 50.391 51.375 49.3555V11.8555C51.375 10.8199 50.5355 9.98047 49.5 9.98047Z"></path>
                                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="currentColor" d="M19.5 9.98047V51.2305"></path>
                                                    </svg>
                                                    <span className="level-value">5 Resources</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="content-header-wrapper mt-4">
                                    <div className="content-header-left">
                                        <img src="https://i.ibb.co/jJ4GHXP/img1.jpg" alt="Course" className="content-header-image" />
                                        <span className="content-header-title">The 3D UX Journey</span>
                                    </div>
                                    <div className="content-header-action">
                                        View Event
                                        <svg viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M14.29 5.71c-.39.39-.39 1.02 0 1.41L18.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h15.18l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l5.59-5.59c.39-.39.39-1.02 0-1.41l-5.6-5.58c-.38-.39-1.02-.39-1.41 0"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="events-grid">
                                    <div className="event-card">
                                        <div className="unit-icon-container">
                                            <svg className="unit-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 38">
                                                <path stroke-width="0.25" stroke="currentColor" fill="currentColor" d="M12.6587 24.759H20.6538C20.9472 25.9325 21.4984 26.662 22.1309 27.098C22.7782 27.5443 23.4983 27.6748 24.086 27.6748C25.9909 27.6748 27.5441 26.1219 27.5447 24.2171C27.5626 23.0916 27.0112 22.0747 26.1718 21.4433V11.7094V11.5844H26.0468H23.5869V11.4063C23.5869 11.1412 23.3705 10.9248 23.1054 10.9248C22.8403 10.9248 22.6239 11.1412 22.6239 11.4063V11.5844H19.255V11.4063C19.255 11.1412 19.0386 10.9248 18.7735 10.9248C18.5083 10.9248 18.2919 11.1412 18.2919 11.4063V11.5844H14.9052V11.4063C14.9052 11.1412 14.6888 10.9248 14.4237 10.9248C14.1585 10.9248 13.9422 11.1412 13.9422 11.4063V11.5844H11.5H11.375V11.7094V23.4753C11.375 24.1861 11.9479 24.759 12.6587 24.759ZM12.1596 14.2766H25.3692V21.0137C24.9731 20.8554 24.5374 20.7574 24.0859 20.7574C22.262 20.7574 20.7604 22.1811 20.6356 23.9743H12.6585C12.3888 23.9743 12.1595 23.745 12.1595 23.4753L12.1596 14.2766ZM21.7394 25.5014L21.7397 25.5012L21.7354 25.4933C21.5313 25.1191 21.4119 24.6761 21.4119 24.2161C21.412 22.7347 22.6212 21.5423 24.0858 21.5423C24.5794 21.5423 25.0383 21.6784 25.4291 21.9163L25.429 21.9164L25.4343 21.9192C25.6175 22.0192 25.7865 22.1538 25.9406 22.3079C26.4367 22.804 26.7596 23.4863 26.7596 24.234C26.7596 25.7149 25.5511 26.9072 24.0871 26.9079C23.3027 26.8904 22.5871 26.5493 22.0931 26.0045C21.9523 25.8462 21.8204 25.6795 21.7394 25.5014ZM12.1596 12.3692H13.9597V12.5472C13.9597 12.8124 14.1761 13.0287 14.4412 13.0287C14.7063 13.0287 14.9227 12.8124 14.9227 12.5472V12.3692H18.3095V12.5472C18.3095 12.8124 18.5259 13.0287 18.791 13.0287C19.0561 13.0287 19.2725 12.8124 19.2725 12.5472V12.3692H22.6593V12.5472C22.6593 12.8124 22.8756 13.0287 23.1408 13.0287C23.4059 13.0287 23.6223 12.8124 23.6223 12.5472V12.3692H25.4224V13.4919H12.1596V12.3692Z"></path>
                                                <path fill="currentColor" d="M18.8217 16C18.1666 16 17.6336 16.5319 17.6336 17.188C17.6336 17.8401 18.1601 18.3695 18.8097 18.3759H17.8076C17.2901 18.3759 16.8696 18.7972 16.8696 19.3154V20.1559C16.8696 20.2627 16.9568 20.35 17.0634 20.35H17.0634H20.4028C20.5094 20.35 20.5966 20.2627 20.5966 20.1559V19.3154C20.5966 18.7972 20.176 18.3759 19.6585 18.3759H18.8336C19.4813 18.3695 20.0079 17.8401 20.0079 17.188C20.0079 16.5319 19.4748 16 18.8217 16ZM16.5285 20.35H14.0941L14.0942 20.35C13.9856 20.35 13.9004 20.2627 13.9004 20.1559V19.3154C13.9004 18.7971 14.319 18.3759 14.8365 18.3759H15.7509C15.1013 18.3695 14.5749 17.8401 14.5748 17.188C14.5748 16.5319 15.1078 16 15.7629 16C16.416 16 16.949 16.5319 16.949 17.188C16.949 17.8401 16.4225 18.3695 15.7748 18.3759H16.6893C16.7514 18.3759 16.8114 18.3818 16.8696 18.3934C16.637 18.6321 16.4936 18.9563 16.4936 19.3154V20.1559C16.4936 20.2238 16.5052 20.2898 16.5285 20.35ZM23.5677 19.3154C23.5677 18.7972 23.1471 18.3759 22.6297 18.3759H21.8905C22.5402 18.3695 23.0667 17.8401 23.0667 17.188C23.0667 16.5319 22.5337 16 21.8786 16C21.2254 16 20.6924 16.5319 20.6924 17.188C20.6924 17.8401 21.219 18.3695 21.8667 18.3759H20.7768C20.7149 18.3759 20.6548 18.3818 20.5966 18.3934C20.8291 18.6321 20.9726 18.9563 20.9726 19.3154V20.1559C20.9726 20.2238 20.961 20.2899 20.9377 20.35H23.3739C23.4805 20.35 23.5677 20.2627 23.5677 20.1559L23.5677 19.3154ZM25.0349 25.0337L25.3735 25.2476L25.3736 25.2476C25.4984 25.3368 25.5341 25.4972 25.463 25.6043C25.4095 25.6934 25.3203 25.7291 25.2312 25.7291C25.1777 25.7291 25.142 25.7291 25.0885 25.6934L23.8585 24.909V22.9479C23.8585 22.8054 23.9832 22.6806 24.1258 22.6806C24.2683 22.6806 24.3932 22.8053 24.3932 22.9479V24.6237L25.0349 25.0337Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                            </svg>
                                            <div className="icon-footer">Group Session</div>
                                        </div>
                                        <h3 className="event-title">Advanced UI Pattern Analysis Workshop</h3>
                                        <div className="event-meta">
                                            <div className="instructor-pill">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="instructor-image" height="100%" width="100%"><path fill="currentColor" d="m15.474 11.793-5.366 5.367a1 1 0 0 1-1.414-1.414l5.366-5.367h-3.586a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-3.586Z"></path><path fill="currentColor" d="M22.938 12.914c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10s4.477-10 10-10c5.522 0 10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>

                                                <span className="instructor-name">Book Now</span>
                                            </div>
                                            <div className="event-stats">
                                                <div className="stat">
                                                    <svg fill="none" viewBox="0 0 20 20">
                                                        <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    15.3K
                                                </div>
                                                <div className="course-level">
                                                    <svg height="16" width="16" fill="none" viewBox="0 0 61 61" xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="currentColor" d="M27 26.8555H42"></path>
                                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="currentColor" d="M27 34.3555H42"></path>
                                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="currentColor" d="M49.5 9.98047H12C10.9645 9.98047 10.125 10.8199 10.125 11.8555V49.3555C10.125 50.391 10.9645 51.2305 12 51.2305H49.5C50.5355 51.2305 51.375 50.391 51.375 49.3555V11.8555C51.375 10.8199 50.5355 9.98047 49.5 9.98047Z"></path>
                                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="currentColor" d="M19.5 9.98047V51.2305"></path>
                                                    </svg>
                                                    <span className="level-value">3 Resources</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='section2'>
                            <div class={`learning-section ${collapsedSection2 ? '' : 'collapsed'} `}>
                                <div class="section-header">
                                    <div class="section-header-left">
                                        <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="Instructor" class="section-thumbnail" />
                                        <h2 class="section-title">
                                            <span class="section-title-prefix">Available Events by</span>
                                            <span class="section-title-main">Ben Smith</span>
                                        </h2>
                                    </div>
                                    <button class="expand-button" onClick={() => setCollapsedSection2(!collapsedSection2)}>
                                        <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                </div>

                                <div class="section-content">
                                    <div class="events-grid">
                                        <div class="event-card">
                                            <img src="https://i.ibb.co/jJ4GHXP/img1.jpg" alt="Course" class="course-image" />

                                            <div class="sessions-preview mt-4">
                                                <div class="session-thumbnails">
                                                    <div class="session-thumbnail">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <div class="session-thumbnail">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <div class="session-thumbnail">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <div class="session-thumbnail">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <button class="view-all-sessions">
                                                    <svg class="arrow-left" width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ display: "none" }}>
                                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    <span class="button-text">More Sessions</span>
                                                    <svg class="arrow-right" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </button>
                                            </div>

                                            <h3 class="event-title">Design Systems Workshop</h3>
                                            <div class="event-meta">
                                                <div class="instructor-pill">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                        <path fill="currentColor" d="M10.3031 4.71338C10.638 4.71338 10.9096 4.98493 10.9096 5.3199V5.62947C11.7726 5.74654 12.5494 6.11208 13.0363 6.67319C13.2559 6.92617 13.2288 7.30925 12.9758 7.52881C12.7229 7.74837 12.3398 7.72128 12.1202 7.4683C11.8892 7.20209 11.4627 6.96219 10.9096 6.85747V9.13097C11.5063 9.2117 12.0549 9.41056 12.4966 9.70499C13.0803 10.0941 13.5358 10.6984 13.5358 11.4478C13.5358 12.1973 13.0803 12.8015 12.4966 13.1907C12.0549 13.4851 11.5063 13.684 10.9096 13.7647V14.0741C10.9096 14.4091 10.638 14.6806 10.3031 14.6806C9.9681 14.6806 9.69656 14.4091 9.69656 14.0741V13.7645C8.83357 13.6474 8.0568 13.2819 7.5698 12.7208C7.35024 12.4678 7.37733 12.0847 7.63031 11.8652C7.88329 11.6456 8.26636 11.6727 8.48592 11.9257C8.71697 12.1919 9.14345 12.4318 9.69656 12.5365V10.263C9.09982 10.1823 8.55128 9.98342 8.10959 9.68899C7.52581 9.29985 7.07031 8.69563 7.07031 7.94614C7.07031 7.19665 7.52581 6.59244 8.10959 6.2033C8.55128 5.90886 9.09982 5.71 9.69656 5.62928V5.3199C9.69656 4.98493 9.9681 4.71338 10.3031 4.71338ZM9.69656 6.85766C9.33347 6.92644 9.02055 7.0539 8.78241 7.21264C8.4157 7.45709 8.28336 7.7283 8.28336 7.94614C8.28336 8.16399 8.4157 8.4352 8.78241 8.67964C9.02055 8.83839 9.33347 8.96585 9.69656 9.03463V6.85766ZM10.9096 10.3594V12.5363C11.2727 12.4675 11.5856 12.3401 11.8237 12.1813C12.1905 11.9369 12.3228 11.6657 12.3228 11.4478C12.3228 11.23 12.1905 10.9588 11.8237 10.7143C11.5856 10.5556 11.2727 10.4281 10.9096 10.3594Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                        <path fill="currentColor" d="M10.3399 2.51392C6.38177 2.51392 3.1731 5.72259 3.1731 9.6807C3.1731 13.6388 6.38177 16.8475 10.3399 16.8475C14.298 16.8475 17.5067 13.6388 17.5067 9.6807C17.5067 5.72259 14.298 2.51392 10.3399 2.51392ZM1.9231 9.6807C1.9231 5.03224 5.69142 1.26392 10.3399 1.26392C14.9883 1.26392 18.7567 5.03224 18.7567 9.6807C18.7567 14.3292 14.9883 18.0975 10.3399 18.0975C5.69142 18.0975 1.9231 14.3292 1.9231 9.6807Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    <span class="instructor-name">$199.00</span>
                                                </div>
                                                <div class="event-stats">
                                                    <div class="stat">
                                                        <svg fill="none" viewBox="0 0 20 20">
                                                            <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                        </svg>
                                                        9.8K
                                                    </div>
                                                    <div class="course-level">
                                                        <svg height="16" width="16" viewBox="0 0 32 32"><path fill="currentColor" d="M10.8571 26.2857C10.8571 27.2325 10.0896 28 9.14286 28H5.71429C4.76751 28 4 27.2325 4 26.2857V22C4 21.0532 4.76751 20.2857 5.71429 20.2857H9.14286C10.0896 20.2857 10.8571 21.0532 10.8571 22V26.2857ZM19.4286 26.2857V14.2857C19.4286 13.3389 18.6611 12.5714 17.7143 12.5714H14.2857C13.3389 12.5714 12.5714 13.3389 12.5714 14.2857V26.2857C12.5714 27.2325 13.3389 28 14.2857 28H17.7143C18.6611 28 19.4286 27.2325 19.4286 26.2857ZM21.1429 26.2857C21.1429 27.2325 21.9104 28 22.8571 28H26.2857C27.2325 28 28 27.2325 28 26.2857V5.71429C28 4.76751 27.2325 4 26.2857 4H22.8571C21.9104 4 21.1429 4.76751 21.1429 5.71429V26.2857ZM17.7143 14.2857H14.2857V26.2857H17.7143V14.2857ZM26.2857 5.71429H22.8571V26.2857H26.2857V5.71429Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                                                        <span class="level-value">Advanced</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="event-card">
                                            <img src="https://i.ibb.co/k67BZds/community-image1.png" alt="Course" class="course-image" />

                                            <div class="sessions-preview mt-4">
                                                <div class="session-thumbnails">
                                                    <div class="session-thumbnail">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <div class="session-thumbnail">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <div class="session-thumbnail">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <button class="view-all-sessions">
                                                    <svg class="arrow-left" width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ display: "none" }}>
                                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <span class="button-text">More Sessions</span>
                                                    <svg class="arrow-right" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <h3 class="event-title">UX Research Masterclass</h3>
                                            <div class="event-meta">
                                                <div class="instructor-pill">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                        <path fill="currentColor" d="M10.3031 4.71338C10.638 4.71338 10.9096 4.98493 10.9096 5.3199V5.62947C11.7726 5.74654 12.5494 6.11208 13.0363 6.67319C13.2559 6.92617 13.2288 7.30925 12.9758 7.52881C12.7229 7.74837 12.3398 7.72128 12.1202 7.4683C11.8892 7.20209 11.4627 6.96219 10.9096 6.85747V9.13097C11.5063 9.2117 12.0549 9.41056 12.4966 9.70499C13.0803 10.0941 13.5358 10.6984 13.5358 11.4478C13.5358 12.1973 13.0803 12.8015 12.4966 13.1907C12.0549 13.4851 11.5063 13.684 10.9096 13.7647V14.0741C10.9096 14.4091 10.638 14.6806 10.3031 14.6806C9.9681 14.6806 9.69656 14.4091 9.69656 14.0741V13.7645C8.83357 13.6474 8.0568 13.2819 7.5698 12.7208C7.35024 12.4678 7.37733 12.0847 7.63031 11.8652C7.88329 11.6456 8.26636 11.6727 8.48592 11.9257C8.71697 12.1919 9.14345 12.4318 9.69656 12.5365V10.263C9.09982 10.1823 8.55128 9.98342 8.10959 9.68899C7.52581 9.29985 7.07031 8.69563 7.07031 7.94614C7.07031 7.19665 7.52581 6.59244 8.10959 6.2033C8.55128 5.90886 9.09982 5.71 9.69656 5.62928V5.3199C9.69656 4.98493 9.9681 4.71338 10.3031 4.71338ZM9.69656 6.85766C9.33347 6.92644 9.02055 7.0539 8.78241 7.21264C8.4157 7.45709 8.28336 7.7283 8.28336 7.94614C8.28336 8.16399 8.4157 8.4352 8.78241 8.67964C9.02055 8.83839 9.33347 8.96585 9.69656 9.03463V6.85766ZM10.9096 10.3594V12.5363C11.2727 12.4675 11.5856 12.3401 11.8237 12.1813C12.1905 11.9369 12.3228 11.6657 12.3228 11.4478C12.3228 11.23 12.1905 10.9588 11.8237 10.7143C11.5856 10.5556 11.2727 10.4281 10.9096 10.3594Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                        <path fill="currentColor" d="M10.3399 2.51392C6.38177 2.51392 3.1731 5.72259 3.1731 9.6807C3.1731 13.6388 6.38177 16.8475 10.3399 16.8475C14.298 16.8475 17.5067 13.6388 17.5067 9.6807C17.5067 5.72259 14.298 2.51392 10.3399 2.51392ZM1.9231 9.6807C1.9231 5.03224 5.69142 1.26392 10.3399 1.26392C14.9883 1.26392 18.7567 5.03224 18.7567 9.6807C18.7567 14.3292 14.9883 18.0975 10.3399 18.0975C5.69142 18.0975 1.9231 14.3292 1.9231 9.6807Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    <span class="instructor-name">$299.00</span>
                                                </div>
                                                <div class="event-stats">
                                                    <div class="stat">
                                                        <svg fill="none" viewBox="0 0 20 20">
                                                            <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033Z"></path>
                                                        </svg>
                                                        11.2K
                                                    </div>
                                                    <div class="course-level">
                                                        <svg height="16" width="16" viewBox="0 0 32 32"><path fill="currentColor" d="M10.8571 26.2857C10.8571 27.2325 10.0896 28 9.14286 28H5.71429C4.76751 28 4 27.2325 4 26.2857V22C4 21.0532 4.76751 20.2857 5.71429 20.2857H9.14286C10.0896 20.2857 10.8571 21.0532 10.8571 22V26.2857ZM19.4286 26.2857V14.2857C19.4286 13.3389 18.6611 12.5714 17.7143 12.5714H14.2857C13.3389 12.5714 12.5714 13.3389 12.5714 14.2857V26.2857C12.5714 27.2325 13.3389 28 14.2857 28H17.7143C18.6611 28 19.4286 27.2325 19.4286 26.2857ZM21.1429 26.2857C21.1429 27.2325 21.9104 28 22.8571 28H26.2857C27.2325 28 28 27.2325 28 26.2857V5.71429C28 4.76751 27.2325 4 26.2857 4H22.8571C21.9104 4 21.1429 4.76751 21.1429 5.71429V26.2857ZM17.7143 14.2857H14.2857V26.2857H17.7143V14.2857ZM26.2857 5.71429H22.8571V26.2857H26.2857V5.71429Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                                                        <span class="level-value">Intermediate</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="event-card">
                                            <img src="https://i.ibb.co/z27wtc6/img2.jpg" alt="Course" class="course-image" />

                                            <div class="sessions-preview mt-4">
                                                <div class="session-thumbnails">
                                                    <div class="session-thumbnail">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <div class="session-thumbnail">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <div class="session-thumbnail">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <div class="session-thumbnail">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                        </svg>
                                                    </div>
                                                    <div class="session-thumbnail">
                                                        <svg fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path stroke="currentColor" d="M16.5 19.794c0-2.761-2.239-5-5-5s-5 2.239-5 5" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <button class="view-all-sessions">
                                                    <svg class="arrow-left" width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ display: "none" }}>
                                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <span class="button-text">More Sessions</span>
                                                    <svg class="arrow-right" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <h3 class="event-title">Advanced Design Patterns</h3>
                                            <div class="event-meta">
                                                <div class="instructor-pill">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                        <path fill="currentColor" d="M10.3031 4.71338C10.638 4.71338 10.9096 4.98493 10.9096 5.3199V5.62947C11.7726 5.74654 12.5494 6.11208 13.0363 6.67319C13.2559 6.92617 13.2288 7.30925 12.9758 7.52881C12.7229 7.74837 12.3398 7.72128 12.1202 7.4683C11.8892 7.20209 11.4627 6.96219 10.9096 6.85747V9.13097C11.5063 9.2117 12.0549 9.41056 12.4966 9.70499C13.0803 10.0941 13.5358 10.6984 13.5358 11.4478C13.5358 12.1973 13.0803 12.8015 12.4966 13.1907C12.0549 13.4851 11.5063 13.684 10.9096 13.7647V14.0741C10.9096 14.4091 10.638 14.6806 10.3031 14.6806C9.9681 14.6806 9.69656 14.4091 9.69656 14.0741V13.7645C8.83357 13.6474 8.0568 13.2819 7.5698 12.7208C7.35024 12.4678 7.37733 12.0847 7.63031 11.8652C7.88329 11.6456 8.26636 11.6727 8.48592 11.9257C8.71697 12.1919 9.14345 12.4318 9.69656 12.5365V10.263C9.09982 10.1823 8.55128 9.98342 8.10959 9.68899C7.52581 9.29985 7.07031 8.69563 7.07031 7.94614C7.07031 7.19665 7.52581 6.59244 8.10959 6.2033C8.55128 5.90886 9.09982 5.71 9.69656 5.62928V5.3199C9.69656 4.98493 9.9681 4.71338 10.3031 4.71338ZM9.69656 6.85766C9.33347 6.92644 9.02055 7.0539 8.78241 7.21264C8.4157 7.45709 8.28336 7.7283 8.28336 7.94614C8.28336 8.16399 8.4157 8.4352 8.78241 8.67964C9.02055 8.83839 9.33347 8.96585 9.69656 9.03463V6.85766ZM10.9096 10.3594V12.5363C11.2727 12.4675 11.5856 12.3401 11.8237 12.1813C12.1905 11.9369 12.3228 11.6657 12.3228 11.4478C12.3228 11.23 12.1905 10.9588 11.8237 10.7143C11.5856 10.5556 11.2727 10.4281 10.9096 10.3594Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                        <path fill="currentColor" d="M10.3399 2.51392C6.38177 2.51392 3.1731 5.72259 3.1731 9.6807C3.1731 13.6388 6.38177 16.8475 10.3399 16.8475C14.298 16.8475 17.5067 13.6388 17.5067 9.6807C17.5067 5.72259 14.298 2.51392 10.3399 2.51392ZM1.9231 9.6807C1.9231 5.03224 5.69142 1.26392 10.3399 1.26392C14.9883 1.26392 18.7567 5.03224 18.7567 9.6807C18.7567 14.3292 14.9883 18.0975 10.3399 18.0975C5.69142 18.0975 1.9231 14.3292 1.9231 9.6807Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg>
                                                    <span class="instructor-name">$399.00</span>
                                                </div>
                                                <div class="event-stats">
                                                    <div class="stat">
                                                        <svg fill="none" viewBox="0 0 20 20">
                                                            <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033Z"></path>
                                                        </svg>
                                                        15.3K
                                                    </div>
                                                    <div class="course-level">
                                                        <svg height="16" width="16" viewBox="0 0 32 32"><path fill="currentColor" d="M10.8571 26.2857C10.8571 27.2325 10.0896 28 9.14286 28H5.71429C4.76751 28 4 27.2325 4 26.2857V22C4 21.0532 4.76751 20.2857 5.71429 20.2857H9.14286C10.0896 20.2857 10.8571 21.0532 10.8571 22V26.2857ZM19.4286 26.2857V14.2857C19.4286 13.3389 18.6611 12.5714 17.7143 12.5714H14.2857C13.3389 12.5714 12.5714 13.3389 12.5714 14.2857V26.2857C12.5714 27.2325 13.3389 28 14.2857 28H17.7143C18.6611 28 19.4286 27.2325 19.4286 26.2857ZM21.1429 26.2857C21.1429 27.2325 21.9104 28 22.8571 28H26.2857C27.2325 28 28 27.2325 28 26.2857V5.71429C28 4.76751 27.2325 4 26.2857 4H22.8571C21.9104 4 21.1429 4.76751 21.1429 5.71429V26.2857ZM17.7143 14.2857H14.2857V26.2857H17.7143V14.2857ZM26.2857 5.71429H22.8571V26.2857H26.2857V5.71429Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                                                        <span class="level-value">Expert</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {activetab === 'Members' &&
                    <div className='container-fluid members-tab'>
                        <div className='row'>
                            <div className="col-md-8">
                                <div className="header">
                                    <h1>Members Directory</h1>
                                    <div className="search-box relative">
                                        <svg
                                            className="search-icons w-4 h-4 absolute bottom-3.5 left-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                        <input
                                            type="text"
                                            placeholder="Search members..."
                                            className="pl-10 py-2 border rounded w-full"
                                            value={searchTerms}
                                            onChange={(e) => setSearchTerms(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="members-grid">
                                    {filteredMembers.map((member) => (
                                        <div key={member.id} className="member-card border rounded p-4 mb-4">
                                            <div className="member-header flex items-start">
                                                <img
                                                    src={member.avatar}
                                                    alt={member.name}
                                                    className="member-avatar w-16 h-16 rounded-full mr-4"
                                                />
                                                <div className="member-info">
                                                    <div className="member-name font-bold text-lg">{member.name}</div>
                                                    <div className="member-achievements text-sm text-gray-600">
                                                        {member.achievements.map((achievement, index) => (
                                                            <div key={index}>{achievement}</div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="member-field mt-4">
                                                <div className="field-label font-semibold">BIO</div>
                                                <div className="field-value text-sm text-gray-700">
                                                    {member.bio}
                                                </div>
                                            </div>
                                            <div className="member-field mt-4">
                                                <div className="field-label font-semibold">JOINED</div>
                                                <div className="field-value text-sm text-gray-700">
                                                    {member.joined}
                                                </div>
                                            </div>
                                            <div className="member-field mt-4">
                                                <div className="field-label font-semibold">LOCATION</div>
                                                <div className="field-value text-sm text-gray-700">
                                                    {member.location}
                                                </div>
                                            </div>
                                            <div className="member-field mt-4">
                                                <div className="field-label font-semibold">SOCIAL</div>
                                                <div className="social-icons flex space-x-2">
                                                    {member.social.map((icon, index) => (
                                                        <a key={index} href="#" className="social-icon">
                                                            {icon.icon}
                                                            <div className="stat-tooltip text-xs">{icon.tooltip}</div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {filteredMembers.length === 0 && (
                                        <div className="text-center text-gray-500 mt-5">No members found.</div>
                                    )}
                                </div>
                            </div>
                            <div className='col-md-4'>
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
                                    </div></div>
                            </div>
                        </div>
                    </div>
                }
                {activetab === 'About' &&
                    <div class="about-page">
                        <h1 class="school-title">The 4D Copywriting School</h1>

                        <div class="banner-container">
                            <img src="https://i.ibb.co/jJ4GHXP/img1.jpg" alt="4D Copywriting School" class="main-image" />
                            <div class="instructor-overlay">
                                <img src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Instructor" class="instructor-avatar" />
                            </div>
                        </div>

                        <div class="stats-container">

                            <div class="description-section">
                                <p>The best place to be to become a full-time freelance copywriter. Join our community of passionate writers and learn from experienced professionals.</p>
                            </div>

                        </div>

                        <div class="quicklinks">
                            <a href="#" class="quicklink">
                                <svg fill="none" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M9.73423 5.4902L10.1013 5.06529C10.7403 4.43601 11.6014 4.08294 12.499 4.08301C13.4052 4.08307 14.2743 4.44313 14.915 5.08397C15.5558 5.72481 15.9157 6.59395 15.9157 7.50017C15.9156 8.39808 15.5621 9.25952 14.9323 9.89853L14.5081 10.2671C14.1954 10.5388 14.1622 11.0125 14.4339 11.3252C14.7055 11.6379 15.1792 11.6711 15.4919 11.3994L15.9369 11.0127C15.9501 11.0013 15.9629 10.9893 15.9753 10.977C16.8975 10.0549 17.4156 8.80433 17.4157 7.50028C17.4158 6.19623 16.8978 4.94555 15.9758 4.02339C15.0537 3.10122 13.8031 2.5831 12.4991 2.58301C11.195 2.58292 9.94437 3.10086 9.0222 4.0229C9.00929 4.0358 8.99686 4.04918 8.98492 4.06299L8.59909 4.50966C8.32832 4.82312 8.36293 5.29673 8.67639 5.5675C8.98985 5.83827 9.46346 5.80366 9.73423 5.4902Z"></path>
                                    <path fill="currentColor" d="M13.0303 8.03031C13.3232 7.73742 13.3232 7.26254 13.0303 6.96965C12.7374 6.67676 12.2626 6.67676 11.9697 6.96965L6.96966 11.9697C6.67677 12.2625 6.67677 12.7374 6.96966 13.0303C7.26256 13.3232 7.73743 13.3232 8.03032 13.0303L13.0303 8.03031Z"></path>
                                    <path fill="currentColor" d="M9.68144 15.0931L9.3144 15.518C8.67538 16.1472 7.81422 16.5003 6.91668 16.5002C6.01046 16.5002 5.14137 16.1401 4.50062 15.4993C3.85987 14.8584 3.49994 13.9893 3.5 13.0831C3.50006 12.1852 3.85354 11.3237 4.48339 10.6847L4.9076 10.3161C5.22026 10.0444 5.25349 9.57073 4.98181 9.25806C4.71013 8.9454 4.23642 8.91217 3.92375 9.18385L3.47875 9.57052C3.46554 9.58199 3.45275 9.59392 3.44038 9.60629C2.51821 10.5283 2.00009 11.7789 2 13.083C1.99991 14.387 2.51785 15.6377 3.43989 16.5599C4.36192 17.482 5.61252 18.0002 6.91657 18.0002C8.22062 18.0003 9.4713 17.4824 10.3935 16.5604C10.4064 16.5474 10.4188 16.5341 10.4307 16.5203L10.8166 16.0736C11.0873 15.7601 11.0527 15.2865 10.7393 15.0158C10.4258 14.745 9.9522 14.7796 9.68144 15.0931Z"></path>
                                </svg>
                                💎 1-on-1 4DCI Mentorship
                            </a>
                            <a href="#" class="quicklink">
                                <svg fill="none" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M9.73423 5.4902L10.1013 5.06529C10.7403 4.43601 11.6014 4.08294 12.499 4.08301C13.4052 4.08307 14.2743 4.44313 14.915 5.08397C15.5558 5.72481 15.9157 6.59395 15.9157 7.50017C15.9156 8.39808 15.5621 9.25952 14.9323 9.89853L14.5081 10.2671C14.1954 10.5388 14.1622 11.0125 14.4339 11.3252C14.7055 11.6379 15.1792 11.6711 15.4919 11.3994L15.9369 11.0127C15.9501 11.0013 15.9629 10.9893 15.9753 10.977C16.8975 10.0549 17.4156 8.80433 17.4157 7.50028C17.4158 6.19623 16.8978 4.94555 15.9758 4.02339C15.0537 3.10122 13.8031 2.5831 12.4991 2.58301C11.195 2.58292 9.94437 3.10086 9.0222 4.0229C9.00929 4.0358 8.99686 4.04918 8.98492 4.06299L8.59909 4.50966C8.32832 4.82312 8.36293 5.29673 8.67639 5.5675C8.98985 5.83827 9.46346 5.80366 9.73423 5.4902Z"></path>
                                    <path fill="currentColor" d="M13.0303 8.03031C13.3232 7.73742 13.3232 7.26254 13.0303 6.96965C12.7374 6.67676 12.2626 6.67676 11.9697 6.96965L6.96966 11.9697C6.67677 12.2625 6.67677 12.7374 6.96966 13.0303C7.26256 13.3232 7.73743 13.3232 8.03032 13.0303L13.0303 8.03031Z"></path>
                                    <path fill="currentColor" d="M9.68144 15.0931L9.3144 15.518C8.67538 16.1472 7.81422 16.5003 6.91668 16.5002C6.01046 16.5002 5.14137 16.1401 4.50062 15.4993C3.85987 14.8584 3.49994 13.9893 3.5 13.0831C3.50006 12.1852 3.85354 11.3237 4.48339 10.6847L4.9076 10.3161C5.22026 10.0444 5.25349 9.57073 4.98181 9.25806C4.71013 8.9454 4.23642 8.91217 3.92375 9.18385L3.47875 9.57052C3.46554 9.58199 3.45275 9.59392 3.44038 9.60629C2.51821 10.5283 2.00009 11.7789 2 13.083C1.99991 14.387 2.51785 15.6377 3.43989 16.5599C4.36192 17.482 5.61252 18.0002 6.91657 18.0002C8.22062 18.0003 9.4713 17.4824 10.3935 16.5604C10.4064 16.5474 10.4188 16.5341 10.4307 16.5203L10.8166 16.0736C11.0873 15.7601 11.0527 15.2865 10.7393 15.0158C10.4258 14.745 9.9522 14.7796 9.68144 15.0931Z"></path>
                                </svg>
                                ✍️ 4D Copywriting Academy 2.0
                            </a>
                            <a href="#" class="quicklink">
                                <svg fill="none" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M9.73423 5.4902L10.1013 5.06529C10.7403 4.43601 11.6014 4.08294 12.499 4.08301C13.4052 4.08307 14.2743 4.44313 14.915 5.08397C15.5558 5.72481 15.9157 6.59395 15.9157 7.50017C15.9156 8.39808 15.5621 9.25952 14.9323 9.89853L14.5081 10.2671C14.1954 10.5388 14.1622 11.0125 14.4339 11.3252C14.7055 11.6379 15.1792 11.6711 15.4919 11.3994L15.9369 11.0127C15.9501 11.0013 15.9629 10.9893 15.9753 10.977C16.8975 10.0549 17.4156 8.80433 17.4157 7.50028C17.4158 6.19623 16.8978 4.94555 15.9758 4.02339C15.0537 3.10122 13.8031 2.5831 12.4991 2.58301C11.195 2.58292 9.94437 3.10086 9.0222 4.0229C9.00929 4.0358 8.99686 4.04918 8.98492 4.06299L8.59909 4.50966C8.32832 4.82312 8.36293 5.29673 8.67639 5.5675C8.98985 5.83827 9.46346 5.80366 9.73423 5.4902Z"></path>
                                    <path fill="currentColor" d="M13.0303 8.03031C13.3232 7.73742 13.3232 7.26254 13.0303 6.96965C12.7374 6.67676 12.2626 6.67676 11.9697 6.96965L6.96966 11.9697C6.67677 12.2625 6.67677 12.7374 6.96966 13.0303C7.26256 13.3232 7.73743 13.3232 8.03032 13.0303L13.0303 8.03031Z"></path>
                                    <path fill="currentColor" d="M9.68144 15.0931L9.3144 15.518C8.67538 16.1472 7.81422 16.5003 6.91668 16.5002C6.01046 16.5002 5.14137 16.1401 4.50062 15.4993C3.85987 14.8584 3.49994 13.9893 3.5 13.0831C3.50006 12.1852 3.85354 11.3237 4.48339 10.6847L4.9076 10.3161C5.22026 10.0444 5.25349 9.57073 4.98181 9.25806C4.71013 8.9454 4.23642 8.91217 3.92375 9.18385L3.47875 9.57052C3.46554 9.58199 3.45275 9.59392 3.44038 9.60629C2.51821 10.5283 2.00009 11.7789 2 13.083C1.99991 14.387 2.51785 15.6377 3.43989 16.5599C4.36192 17.482 5.61252 18.0002 6.91657 18.0002C8.22062 18.0003 9.4713 17.4824 10.3935 16.5604C10.4064 16.5474 10.4188 16.5341 10.4307 16.5203L10.8166 16.0736C11.0873 15.7601 11.0527 15.2865 10.7393 15.0158C10.4258 14.745 9.9522 14.7796 9.68144 15.0931Z"></path>
                                </svg>
                                🗺️
                                ️ 4D Copywriters Map
                            </a>
                        </div>

                        <div class="community-stats">
                            <div class="community-stat">
                                <div class="community-stat-label">Members</div>
                                <div class="community-stat-value">44.8k</div>
                            </div>
                            <div class="community-stat">
                                <div class="community-stat-label">Products</div>
                                <div class="community-stat-value">9</div>
                            </div>
                            <div class="community-stat">
                                <div class="community-stat-label">Posts</div>
                                <div class="community-stat-value">5.7k</div>
                            </div>
                        </div>

                        <div class="section">
                            <div class="section-header" data-section="leaderboard">
                                <h2 class="section-title">7 Day Leaderboard</h2>
                                <svg class="section-toggle active" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            <div className="section-content active" id="leaderboard-content">
                                <div className="leaderboards">
                                    {/* Course Leaderboard */}
                                    <div className="leaderboard">
                                        <div className="leaderboard-header">
                                            <h3 className="leaderboard-title">Course Leaderboard</h3>
                                            <div className="leaderboard-divider"></div>
                                        </div>
                                        <ul className="leaderboard-list" id="course-leaderboard">
                                            {leaderboards.course.map((item) => (
                                                <li className="leaderboard-item" key={item.rank}>
                                                    <span className={`rank ${item.rank <= 3 ? `rank-${item.rank}` : ""}`}>
                                                        {item.rank}
                                                    </span>
                                                    <div className="user-info">
                                                        <img src={item.avatarUrl} alt={item.name} className="user-avatar" />
                                                        <span className="user-name">{item.name}</span>
                                                    </div>
                                                    <span className="points" data-tooltip={item.tooltip}>
                                                        +{item.points}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Event Leaderboard */}
                                    <div className="leaderboard">
                                        <div className="leaderboard-header">
                                            <h3 className="leaderboard-title">Event Leaderboard</h3>
                                            <div className="leaderboard-divider"></div>
                                        </div>
                                        <ul className="leaderboard-list" id="event-leaderboard">
                                            {leaderboards.event.map((item) => (
                                                <li className="leaderboard-item" key={item.rank}>
                                                    <span className={`rank ${item.rank <= 3 ? `rank-${item.rank}` : ""}`}>
                                                        {item.rank}
                                                    </span>
                                                    <div className="user-info">
                                                        <img src={item.avatarUrl} alt={item.name} className="user-avatar" />
                                                        <span className="user-name">{item.name}</span>
                                                    </div>
                                                    <span className="points" data-tooltip={item.tooltip}>
                                                        +{item.points}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Community Leaderboard */}
                                    <div className="leaderboard">
                                        <div className="leaderboard-header">
                                            <h3 className="leaderboard-title">Community Leaderboard</h3>
                                            <div className="leaderboard-divider"></div>
                                        </div>
                                        <ul className="leaderboard-list" id="community-leaderboard">
                                            {leaderboards.community.map((item) => (
                                                <li className="leaderboard-item" key={item.rank}>
                                                    <span className={`rank ${item.rank <= 3 ? `rank-${item.rank}` : ""}`}>
                                                        {item.rank}
                                                    </span>
                                                    <div className="user-info">
                                                        <img src={item.avatarUrl} alt={item.name} className="user-avatar" />
                                                        <span className="user-name">{item.name}</span>
                                                    </div>
                                                    <span className="points" data-tooltip={item.tooltip}>
                                                        +{item.points}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div class="about-section2">
                            <div class="header">
                                <div class="header-icon">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <h1 class="header-title">Courses</h1>
                            </div>

                            <div class="courses-grid">
                                {courses.map((course, index) => (
                                    <CourseCard key={index} course={course} />
                                ))}
                            </div>
                        </div>

                        <div class="about-section3 mt-4">
                            <div class="section-header -ml-4">
                                <h1 class="section-title">Trending Sessions</h1>
                            </div>

                            <div className='session-grid'>
                                <div class="session-card">
                                    <div class="session-image-container">
                                        <img src="https://i.ibb.co/640kJN2/c1.jpg" alt="Session cover" class="session-image" />
                                        <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="Instructor avatar" class="session-avatar" />
                                        <div class="instructor-options">
                                            <span>⋯</span>
                                        </div>
                                    </div>
                                    <div class="session-content">
                                        <div class="session-badge">
                                            <svg fill="none" viewBox="0 0 24 24">
                                                <path fill="#991b1b" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                            </svg>
                                            <span>1:1 Session</span>
                                        </div>

                                        <h2 class="session-title">Advanced Machine Learning Workshop</h2>
                                        <p class="session-instructor">Dr. Sarah Connor</p>
                                        <p class="session-description">Deep dive into advanced ML algorithms, neural networks, and practical applications. Learn to..</p>

                                        <div class="action-buttons">
                                            <button class="book-button">Book Now</button>
                                            <button class="info-button" onclick="toggleDrawer()">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="card-footer">
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

                                        <div class="students-count">
                                            <svg fill="none" viewBox="0 0 24 24">
                                                <path fill="#4F4F4F" d="M5.64124 3.64124C6.53204 2.75044 7.74022 2.25 9 2.25C10.2598 2.25 11.468 2.75044 12.3588 3.64124C13.2496 4.53204 13.75 5.74022 13.75 7C13.75 8.25978 13.2496 9.46796 12.3588 10.3588C11.468 11.2496 10.2598 11.75 9 11.75C7.74022 11.75 6.53204 11.2496 5.64124 10.3588C4.75044 9.46796 4.25 8.25978 4.25 7C4.25 5.74022 4.75044 4.53204 5.64124 3.64124ZM9 3.75C8.13805 3.75 7.3114 4.09241 6.7019 4.7019C6.09241 5.3114 5.75 6.13805 5.75 7C5.75 7.86195 6.09241 8.6886 6.7019 9.2981C7.3114 9.90759 8.13805 10.25 9 10.25C9.86195 10.25 10.6886 9.90759 11.2981 9.2981C11.9076 8.6886 12.25 7.86195 12.25 7C12.25 6.13805 11.9076 5.3114 11.2981 4.7019C10.6886 4.09241 9.86195 3.75 9 3.75ZM15.2734 2.94385C15.3762 2.54258 15.7848 2.30058 16.186 2.40332C17.2078 2.66493 18.1134 3.25915 18.7601 4.09231C19.4068 4.92547 19.7578 5.95018 19.7578 7.00488C19.7578 8.05959 19.4068 9.08429 18.7601 9.91745C18.1134 10.7506 17.2078 11.3448 16.186 11.6064C15.7848 11.7092 15.3762 11.4672 15.2734 11.0659C15.1707 10.6646 15.4127 10.2561 15.814 10.1533C16.5131 9.97433 17.1327 9.56775 17.5752 8.99769C18.0177 8.42763 18.2578 7.72652 18.2578 7.00488C18.2578 6.28325 18.0177 5.58213 17.5752 5.01207C17.1327 4.44201 16.5131 4.03544 15.814 3.85645C15.4127 3.7537 15.1707 3.34512 15.2734 2.94385ZM7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H11C12.2598 14.25 13.468 14.7504 14.3588 15.6412C15.2496 16.532 15.75 17.7402 15.75 19V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V19C14.25 18.138 13.9076 17.3114 13.2981 16.7019C12.6886 16.0924 11.862 15.75 11 15.75H7ZM17.2738 14.9624C17.3774 14.5614 17.7864 14.3202 18.1875 14.4237C19.2026 14.6858 20.1025 15.2763 20.7469 16.1033C21.3913 16.9303 21.744 17.9472 21.75 18.9956L21.75 18.9999L21.75 20.9999C21.75 21.4141 21.4142 21.7499 21 21.7499C20.5858 21.7499 20.25 21.4141 20.25 20.9999V19.002C20.2454 18.2855 20.0041 17.5905 19.5637 17.0253C19.1228 16.4595 18.5071 16.0554 17.8125 15.8761C17.4115 15.7725 17.1703 15.3635 17.2738 14.9624Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                            </svg>
                                            28K
                                        </div>

                                        <div class="course-rating">
                                            <svg viewBox="0 0 16 15">
                                                <path fill="#13C4CC" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                            </svg>
                                            <span class="rating-value">4.8</span>
                                            <span class="rating-count">(2.3k)</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="session-card">
                                    <div class="session-image-container">
                                        <img src="https://i.ibb.co/640kJN2/c1.jpg" alt="Session cover" class="session-image" />
                                        <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="Instructor avatar" class="session-avatar" />
                                        <div class="instructor-options">
                                            <span>⋯</span>
                                        </div>
                                    </div>
                                    <div class="session-content">
                                        <div class="session-badge">
                                            <svg fill="none" viewBox="0 0 24 24">
                                                <path fill="#991b1b" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                            </svg>
                                            <span>1:1 Session</span>
                                        </div>

                                        <h2 class="session-title">Advanced Machine Learning Workshop</h2>
                                        <p class="session-instructor">Dr. Sarah Connor</p>
                                        <p class="session-description">Deep dive into advanced ML algorithms, neural networks, and practical applications. Learn to..</p>

                                        <div class="action-buttons">
                                            <button class="book-button">Book Now</button>
                                            <button class="info-button" onclick="toggleDrawer()">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="card-footer">
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

                                        <div class="students-count">
                                            <svg fill="none" viewBox="0 0 24 24">
                                                <path fill="#4F4F4F" d="M5.64124 3.64124C6.53204 2.75044 7.74022 2.25 9 2.25C10.2598 2.25 11.468 2.75044 12.3588 3.64124C13.2496 4.53204 13.75 5.74022 13.75 7C13.75 8.25978 13.2496 9.46796 12.3588 10.3588C11.468 11.2496 10.2598 11.75 9 11.75C7.74022 11.75 6.53204 11.2496 5.64124 10.3588C4.75044 9.46796 4.25 8.25978 4.25 7C4.25 5.74022 4.75044 4.53204 5.64124 3.64124ZM9 3.75C8.13805 3.75 7.3114 4.09241 6.7019 4.7019C6.09241 5.3114 5.75 6.13805 5.75 7C5.75 7.86195 6.09241 8.6886 6.7019 9.2981C7.3114 9.90759 8.13805 10.25 9 10.25C9.86195 10.25 10.6886 9.90759 11.2981 9.2981C11.9076 8.6886 12.25 7.86195 12.25 7C12.25 6.13805 11.9076 5.3114 11.2981 4.7019C10.6886 4.09241 9.86195 3.75 9 3.75ZM15.2734 2.94385C15.3762 2.54258 15.7848 2.30058 16.186 2.40332C17.2078 2.66493 18.1134 3.25915 18.7601 4.09231C19.4068 4.92547 19.7578 5.95018 19.7578 7.00488C19.7578 8.05959 19.4068 9.08429 18.7601 9.91745C18.1134 10.7506 17.2078 11.3448 16.186 11.6064C15.7848 11.7092 15.3762 11.4672 15.2734 11.0659C15.1707 10.6646 15.4127 10.2561 15.814 10.1533C16.5131 9.97433 17.1327 9.56775 17.5752 8.99769C18.0177 8.42763 18.2578 7.72652 18.2578 7.00488C18.2578 6.28325 18.0177 5.58213 17.5752 5.01207C17.1327 4.44201 16.5131 4.03544 15.814 3.85645C15.4127 3.7537 15.1707 3.34512 15.2734 2.94385ZM7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H11C12.2598 14.25 13.468 14.7504 14.3588 15.6412C15.2496 16.532 15.75 17.7402 15.75 19V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V19C14.25 18.138 13.9076 17.3114 13.2981 16.7019C12.6886 16.0924 11.862 15.75 11 15.75H7ZM17.2738 14.9624C17.3774 14.5614 17.7864 14.3202 18.1875 14.4237C19.2026 14.6858 20.1025 15.2763 20.7469 16.1033C21.3913 16.9303 21.744 17.9472 21.75 18.9956L21.75 18.9999L21.75 20.9999C21.75 21.4141 21.4142 21.7499 21 21.7499C20.5858 21.7499 20.25 21.4141 20.25 20.9999V19.002C20.2454 18.2855 20.0041 17.5905 19.5637 17.0253C19.1228 16.4595 18.5071 16.0554 17.8125 15.8761C17.4115 15.7725 17.1703 15.3635 17.2738 14.9624Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                            </svg>
                                            28K
                                        </div>

                                        <div class="course-rating">
                                            <svg viewBox="0 0 16 15">
                                                <path fill="#13C4CC" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                            </svg>
                                            <span class="rating-value">4.8</span>
                                            <span class="rating-count">(2.3k)</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="session-card">
                                    <div class="session-image-container">
                                        <img src="https://i.ibb.co/640kJN2/c1.jpg" alt="Session cover" class="session-image" />
                                        <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="Instructor avatar" class="session-avatar" />
                                        <div class="instructor-options">
                                            <span>⋯</span>
                                        </div>
                                    </div>
                                    <div class="session-content">
                                        <div class="session-badge">
                                            <svg fill="none" viewBox="0 0 24 24">
                                                <path fill="#991b1b" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                            </svg>
                                            <span>1:1 Session</span>
                                        </div>

                                        <h2 class="session-title">Advanced Machine Learning Workshop</h2>
                                        <p class="session-instructor">Dr. Sarah Connor</p>
                                        <p class="session-description">Deep dive into advanced ML algorithms, neural networks, and practical applications. Learn to..</p>

                                        <div class="action-buttons">
                                            <button class="book-button">Book Now</button>
                                            <button class="info-button" onclick="toggleDrawer()">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="card-footer">
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

                                        <div class="students-count">
                                            <svg fill="none" viewBox="0 0 24 24">
                                                <path fill="#4F4F4F" d="M5.64124 3.64124C6.53204 2.75044 7.74022 2.25 9 2.25C10.2598 2.25 11.468 2.75044 12.3588 3.64124C13.2496 4.53204 13.75 5.74022 13.75 7C13.75 8.25978 13.2496 9.46796 12.3588 10.3588C11.468 11.2496 10.2598 11.75 9 11.75C7.74022 11.75 6.53204 11.2496 5.64124 10.3588C4.75044 9.46796 4.25 8.25978 4.25 7C4.25 5.74022 4.75044 4.53204 5.64124 3.64124ZM9 3.75C8.13805 3.75 7.3114 4.09241 6.7019 4.7019C6.09241 5.3114 5.75 6.13805 5.75 7C5.75 7.86195 6.09241 8.6886 6.7019 9.2981C7.3114 9.90759 8.13805 10.25 9 10.25C9.86195 10.25 10.6886 9.90759 11.2981 9.2981C11.9076 8.6886 12.25 7.86195 12.25 7C12.25 6.13805 11.9076 5.3114 11.2981 4.7019C10.6886 4.09241 9.86195 3.75 9 3.75ZM15.2734 2.94385C15.3762 2.54258 15.7848 2.30058 16.186 2.40332C17.2078 2.66493 18.1134 3.25915 18.7601 4.09231C19.4068 4.92547 19.7578 5.95018 19.7578 7.00488C19.7578 8.05959 19.4068 9.08429 18.7601 9.91745C18.1134 10.7506 17.2078 11.3448 16.186 11.6064C15.7848 11.7092 15.3762 11.4672 15.2734 11.0659C15.1707 10.6646 15.4127 10.2561 15.814 10.1533C16.5131 9.97433 17.1327 9.56775 17.5752 8.99769C18.0177 8.42763 18.2578 7.72652 18.2578 7.00488C18.2578 6.28325 18.0177 5.58213 17.5752 5.01207C17.1327 4.44201 16.5131 4.03544 15.814 3.85645C15.4127 3.7537 15.1707 3.34512 15.2734 2.94385ZM7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H11C12.2598 14.25 13.468 14.7504 14.3588 15.6412C15.2496 16.532 15.75 17.7402 15.75 19V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V19C14.25 18.138 13.9076 17.3114 13.2981 16.7019C12.6886 16.0924 11.862 15.75 11 15.75H7ZM17.2738 14.9624C17.3774 14.5614 17.7864 14.3202 18.1875 14.4237C19.2026 14.6858 20.1025 15.2763 20.7469 16.1033C21.3913 16.9303 21.744 17.9472 21.75 18.9956L21.75 18.9999L21.75 20.9999C21.75 21.4141 21.4142 21.7499 21 21.7499C20.5858 21.7499 20.25 21.4141 20.25 20.9999V19.002C20.2454 18.2855 20.0041 17.5905 19.5637 17.0253C19.1228 16.4595 18.5071 16.0554 17.8125 15.8761C17.4115 15.7725 17.1703 15.3635 17.2738 14.9624Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                            </svg>
                                            28K
                                        </div>

                                        <div class="course-rating">
                                            <svg viewBox="0 0 16 15">
                                                <path fill="#13C4CC" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                            </svg>
                                            <span class="rating-value">4.8</span>
                                            <span class="rating-count">(2.3k)</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="session-card">
                                    <div class="session-image-container">
                                        <img src="https://i.ibb.co/640kJN2/c1.jpg" alt="Session cover" class="session-image" />
                                        <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="Instructor avatar" class="session-avatar" />
                                        <div class="instructor-options">
                                            <span>⋯</span>
                                        </div>
                                    </div>
                                    <div class="session-content">
                                        <div class="session-badge">
                                            <svg fill="none" viewBox="0 0 24 24">
                                                <path fill="#991b1b" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                            </svg>
                                            <span>1:1 Session</span>
                                        </div>

                                        <h2 class="session-title">Advanced Machine Learning Workshop</h2>
                                        <p class="session-instructor">Dr. Sarah Connor</p>
                                        <p class="session-description">Deep dive into advanced ML algorithms, neural networks, and practical applications. Learn to..</p>

                                        <div class="action-buttons">
                                            <button class="book-button">Book Now</button>
                                            <button class="info-button" onclick="toggleDrawer()">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="card-footer">
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

                                        <div class="students-count">
                                            <svg fill="none" viewBox="0 0 24 24">
                                                <path fill="#4F4F4F" d="M5.64124 3.64124C6.53204 2.75044 7.74022 2.25 9 2.25C10.2598 2.25 11.468 2.75044 12.3588 3.64124C13.2496 4.53204 13.75 5.74022 13.75 7C13.75 8.25978 13.2496 9.46796 12.3588 10.3588C11.468 11.2496 10.2598 11.75 9 11.75C7.74022 11.75 6.53204 11.2496 5.64124 10.3588C4.75044 9.46796 4.25 8.25978 4.25 7C4.25 5.74022 4.75044 4.53204 5.64124 3.64124ZM9 3.75C8.13805 3.75 7.3114 4.09241 6.7019 4.7019C6.09241 5.3114 5.75 6.13805 5.75 7C5.75 7.86195 6.09241 8.6886 6.7019 9.2981C7.3114 9.90759 8.13805 10.25 9 10.25C9.86195 10.25 10.6886 9.90759 11.2981 9.2981C11.9076 8.6886 12.25 7.86195 12.25 7C12.25 6.13805 11.9076 5.3114 11.2981 4.7019C10.6886 4.09241 9.86195 3.75 9 3.75ZM15.2734 2.94385C15.3762 2.54258 15.7848 2.30058 16.186 2.40332C17.2078 2.66493 18.1134 3.25915 18.7601 4.09231C19.4068 4.92547 19.7578 5.95018 19.7578 7.00488C19.7578 8.05959 19.4068 9.08429 18.7601 9.91745C18.1134 10.7506 17.2078 11.3448 16.186 11.6064C15.7848 11.7092 15.3762 11.4672 15.2734 11.0659C15.1707 10.6646 15.4127 10.2561 15.814 10.1533C16.5131 9.97433 17.1327 9.56775 17.5752 8.99769C18.0177 8.42763 18.2578 7.72652 18.2578 7.00488C18.2578 6.28325 18.0177 5.58213 17.5752 5.01207C17.1327 4.44201 16.5131 4.03544 15.814 3.85645C15.4127 3.7537 15.1707 3.34512 15.2734 2.94385ZM7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H11C12.2598 14.25 13.468 14.7504 14.3588 15.6412C15.2496 16.532 15.75 17.7402 15.75 19V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V19C14.25 18.138 13.9076 17.3114 13.2981 16.7019C12.6886 16.0924 11.862 15.75 11 15.75H7ZM17.2738 14.9624C17.3774 14.5614 17.7864 14.3202 18.1875 14.4237C19.2026 14.6858 20.1025 15.2763 20.7469 16.1033C21.3913 16.9303 21.744 17.9472 21.75 18.9956L21.75 18.9999L21.75 20.9999C21.75 21.4141 21.4142 21.7499 21 21.7499C20.5858 21.7499 20.25 21.4141 20.25 20.9999V19.002C20.2454 18.2855 20.0041 17.5905 19.5637 17.0253C19.1228 16.4595 18.5071 16.0554 17.8125 15.8761C17.4115 15.7725 17.1703 15.3635 17.2738 14.9624Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                            </svg>
                                            28K
                                        </div>

                                        <div class="course-rating">
                                            <svg viewBox="0 0 16 15">
                                                <path fill="#13C4CC" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                            </svg>
                                            <span class="rating-value">4.8</span>
                                            <span class="rating-count">(2.3k)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="drawer-overlay" onclick="toggleDrawer()"></div>
                            <div class="mobile-drawer">
                                <h3>Session Details</h3>
                                <p>Please see detailes of mobile drawer in Google Doc.</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
