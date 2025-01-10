'use client';
import { useState, useEffect } from 'react';

export default function CalendarPage() {
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
            date: '2024-12-08',
            title: 'Career Planning Session',
            time: '10:00 AM',
            attendees: 2,
            type: 'one-on-one',
        },
        {
            id: 4,
            date: '2024-12-15',
            title: 'Marketing Masterclass',
            time: '2:00 PM',
            attendees: 25,
            type: 'zoom-webinar',
        },
        {
            id: 5,
            date: '2024-12-28',
            title: 'Sales Meeting',
            time: '9:00 AM',
            attendees: 12,
            type: 'zoom-meeting',
        },
    ]);

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    useEffect(() => {
        const adjustRowHeights = () => {
            const calendarCells = document.querySelectorAll('.calendar-cell');
            const rows = Math.ceil(calendarCells.length / 7);
            for (let i = 0; i < rows; i++) {
                const rowCells = Array.from(calendarCells).slice(i * 7, i * 7 + 7);
                let maxHeight = 0;
                rowCells.forEach((cell) => {
                    maxHeight = Math.max(maxHeight, cell.scrollHeight);
                });
                rowCells.forEach((cell) => {
                    cell.style.height = `${maxHeight}px`;
                });
            }
        };

        adjustRowHeights();
        window.addEventListener('resize', adjustRowHeights);
        return () => window.removeEventListener('resize', adjustRowHeights);
    }, [currentMonth, currentYear]);

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

            cells.push(
                <div className={`calendar-cell ${day <= 0 || day > days ? 'prev-next-month' : ''}`} key={i} >
                    {day > 0 && day <= days && <div className="date-number">{day}</div>}
                    {dayEvents.map((event, index) => (
                        <div key={index} className={`event ${eventsCollapsed[event.id] ? 'expanded' : ''} ${event.type}`} onClick={() =>
                            seteventsCollapsed((prev) => ({
                                ...prev,
                                [event.id]: !prev[event.id], // Toggle collapse state for the specific event
                            }))
                        }
                        >
                            <div className="event-header">
                                <div className="event-title">{event.title}</div>
                            </div>
                            <div className="event-time">
                                <div class="event-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 38">
                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.2" stroke="#15B7C3" d="M22.8865 17.1133L27.3332 14.42V23.5867L22.8865 20.8867M10.6665 14.42H20.8532C21.3925 14.42 21.9096 14.6342 22.291 15.0155C22.6723 15.3969 22.8865 15.9141 22.8865 16.4533V23.5867H12.6998C12.4323 23.5867 12.1673 23.5339 11.9202 23.4313C11.6731 23.3287 11.4486 23.1783 11.2597 22.9888C11.0708 22.7992 10.9212 22.5743 10.8194 22.3268C10.7176 22.0794 10.6656 21.8142 10.6665 21.5467V14.42Z"></path>
                                    </svg>
                                </div>
                                {event.time}</div>
                            <div className="event-attendees">
                                <div class="avatar-group">
                                    <img src='https://i.ibb.co/S3QRdcX/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg' className='avatar' />
                                    <img src='https://i.ibb.co/S3QRdcX/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg' className='avatar' />
                                    <span class="attendee-count">{event.attendees}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return cells;
    };
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


    return (
        <div className='calendar-page'>
            <div className="container">
                <header className="header">
                    <h1 className="school-name">The 4D Copywriting Community</h1>
                </header>

                <nav className="nav-tabs">
                    <a className="nav-tab">Courses</a>
                    <a className="nav-tab">Discussions</a>
                    <a className="nav-tab active">Calendar</a>
                    <a className="nav-tab">Certificates</a>
                    <a className="nav-tab">Members</a>
                    <a className="nav-tab">Products</a>
                    <a className="nav-tab">About</a>
                </nav>

                <div className="calendar-header">
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
                        <button class="today-btn">Today</button>
                        <div class="view-toggle">
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
            </div>
        </div>
    );
}
