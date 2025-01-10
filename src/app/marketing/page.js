"use client";
import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';


const statsData = [
    {
        title: "Sent",
        value: "21,300",
        period: "This Past Month",
        trend: "up",
        percentage: "+4.2%",
    },
    {
        title: "Open Rate",
        value: "86.84%",
        period: "This Past Month",
        trend: "down",
        percentage: "-1.2%",
    },
    {
        title: "CTR",
        value: "2.63%",
        period: "This Past Month",
        trend: "down",
        percentage: "-2.2%",
    },
    {
        title: "Unsubscribed",
        value: "3.03%",
        period: "This Past Month",
        trend: "up",
        percentage: "+1.0%",
    },
];
export default function Marketing() {

    const emailChartRef = useRef(null);
    const [currentView, setCurrentView] = useState('percentage');

    useEffect(() => {
        // Initialize Email Analytics Chart
        const ctx = emailChartRef.current.getContext('2d');

        function getLast30Days() {
            const dates = [];
            for (let i = 30; i >= 0; i--) {
                const date = new Date();
                date.setDate(date.getDate() - i);
                dates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
            }
            return dates;
        }

        function generateRandomData(min, max, count) {
            return Array.from({ length: count }, () =>
                Math.floor(Math.random() * (max - min + 1)) + min
            );
        }

        const labels = getLast30Days();
        const sendsData = generateRandomData(10000, 25000, 31);
        const opensData = generateRandomData(8000, 20000, 31);
        const ctrData = generateRandomData(5000, 15000, 31);
        const unsubscribesData = generateRandomData(100, 500, 31);

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Sends',
                        data: sendsData,
                        borderColor: '#13C4CC',
                        backgroundColor: 'rgba(19, 196, 204, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                    },
                    {
                        label: 'Opens',
                        data: opensData,
                        borderColor: '#02C5AF',
                        backgroundColor: 'rgba(2, 197, 175, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                    },
                    {
                        label: 'CTR',
                        data: ctrData,
                        borderColor: '#009ECB',
                        backgroundColor: 'rgba(0, 158, 203, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                    },
                    {
                        label: 'Unsubscribes',
                        data: unsubscribesData,
                        borderColor: '#3B6E91',
                        backgroundColor: 'rgba(59, 110, 145, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: 'white',
                        titleColor: '#142E53',
                        bodyColor: '#3B6E91',
                        titleFont: {
                            size: 14,
                            weight: '600',
                            family: '-apple-system',
                        },
                        bodyFont: {
                            size: 13,
                            family: '-apple-system',
                        },
                        padding: {
                            x: 16,
                            y: 12,
                        },
                        borderColor: 'rgba(20, 46, 83, 0.1)',
                        borderWidth: 1,
                        displayColors: true,
                        boxPadding: 6,
                        callbacks: {
                            label: function (context) {
                                return `${context.dataset.label}: ${context.raw.toLocaleString()}`;
                            },
                        },
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(59, 110, 145, 0.08)',
                            drawBorder: false,
                            lineWidth: 1,
                        },
                        border: {
                            display: false,
                        },
                        ticks: {
                            callback: function (value) {
                                return value.toLocaleString();
                            },
                            font: {
                                size: 11,
                                family: '-apple-system',
                            },
                            color: '#3B6E91',
                            padding: 8,
                        },
                    },
                    x: {
                        grid: {
                            display: false,
                        },
                        border: {
                            display: false,
                        },
                        ticks: {
                            font: {
                                size: 11,
                                family: '-apple-system',
                            },
                            color: '#3B6E91',
                            padding: 8,
                        },
                    },
                },
                elements: {
                    point: {
                        radius: 0,
                        hoverRadius: 6,
                        hitRadius: 6,
                        borderWidth: 2,
                        hoverBorderWidth: 2,
                        backgroundColor: 'white',
                    },
                    line: {
                        borderWidth: 2,
                    },
                },
            },
        });
    }, []);

    const deliveryData = {
        percentage: [85, 65, 92, 78, 88, 72, 95], // Mon-Sun delivery percentages
        count: [8500, 6500, 9200, 7800, 8800, 7200, 9500], // Mon-Sun delivery counts
    };

    const updateDeliveryGrid = () => {
        const grid = document.querySelector(".delivery-grid");
        const data = deliveryData[currentView];
        grid.innerHTML = "";

        const maxValue = Math.max(...data);
        const minValue = Math.min(...data);

        const getOpacity = (value) =>
            0.2 + ((value - minValue) / (maxValue - minValue)) * 0.8;

        const getCellIndex = (value) => {
            if (currentView === "percentage") {
                if (value >= 80) return 0;
                if (value >= 60) return 1;
                if (value >= 40) return 2;
                if (value >= 20) return 3;
                return 4;
            } else {
                if (value >= 8000) return 0;
                if (value >= 6000) return 1;
                if (value >= 4000) return 2;
                if (value >= 2000) return 3;
                return 4;
            }
        };

        // Create grid columns for each day
        data.forEach((value, index) => {
            const column = document.createElement("div");
            column.className = "delivery-column";

            for (let i = 0; i < 5; i++) {
                const cellDiv = document.createElement("div");
                cellDiv.className = "delivery-cell";

                if (i === getCellIndex(value)) {
                    cellDiv.classList.add("active");
                    cellDiv.style.backgroundColor = `rgba(19, 196, 204, ${getOpacity(
                        value
                    )})`;
                    cellDiv.textContent =
                        currentView === "percentage" ? `${value}%` : value.toLocaleString();
                }

                column.appendChild(cellDiv);
            }

            grid.appendChild(column);
        });
    };

    useEffect(() => {
        updateDeliveryGrid();
    }, [currentView]);


    const initialEmails = [
        {
            id: 1,
            type: 'Marketing',
            title: 'Welcome to Our Platform',
            status: 'SENT',
            products: [
                { name: 'AI for Beginners', image: 'https://i.ibb.co/640kJN2/c1.jpg' },
                { name: 'Machine Learning Basics', image: 'https://i.ibb.co/hBpWGQ7/c3.jpg' },
                { name: 'Deep Learning Masterclass', image: 'https://i.ibb.co/NKffPZQ/c4.jpg' },
            ],
            stats: { sent: 104, opened: 33, clicked: 15, unsubscribed: 2 },
        },
        {
            id: 2,
            type: 'Announcement',
            title: 'New Course Announcement',
            status: 'SCHEDULED',
            products: [
                { name: 'Python Programming', image: 'https://i.ibb.co/640kJN2/c1.jpg' },
                { name: 'Web Development', image: 'https://i.ibb.co/hBpWGQ7/c3.jpg' },
            ],
            stats: { sent: '-', opened: '-', clicked: '-', unsubscribed: '-' },
        },
        {
            id: 3,
            type: 'Marketing',
            title: 'Holiday Discounts!',
            status: 'DRAFT',
            products: [
                { name: 'E-Commerce Essentials', image: 'https://i.ibb.co/640kJN2/c1.jpg' },
            ],
            stats: { sent: '-', opened: '-', clicked: '-', unsubscribed: '-' },
        },
        {
            id: 4,
            type: 'Marketing',
            title: 'Black Friday Sale',
            status: 'SENT',
            products: [
                { name: 'Digital Marketing 101', image: 'https://i.ibb.co/hBpWGQ7/c3.jpg' },
            ],
            stats: { sent: 200, opened: 100, clicked: 50, unsubscribed: 10 },
        },
    ];

    const [ITEMS_PER_PAGE, setitemsPerPage] = useState(2);

    const [emails, setEmails] = useState(initialEmails);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedEmails, setSelectedEmails] = useState([]);
    const [tab, setTab] = useState('All');
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('Newest');
    const [currentPage, setCurrentPage] = useState(1);

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const filteredEmails = emails.filter((email) => {
        if (searchQuery && !email.title.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }
        if (tab !== "All" && email.status !== tab.toUpperCase()) {
            return false;
        }
        if (filter && email.status !== filter) {
            return false;
        }
        return true;
    });

    // Handle Tab Change
    const handleTabChange = (newTab) => {
        setTab(newTab);
        // Reset the filter to match the tab if it's not "All"
        if (newTab !== "All") {
            setFilter(newTab.toUpperCase());
        } else {
            setFilter(""); // Clear filter for "All"
        }
    };


    const paginatedEmails = filteredEmails.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleBulkAction = (action) => {
        if (action === 'delete') {
            setEmails((prevEmails) => prevEmails.filter((email) => !selectedEmails.includes(email.id)));
            setSelectedEmails([]);
        }
    };

    const handleCheckboxChange = (id) => {
        setSelectedEmails((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((emailId) => emailId !== id)
                : [...prevSelected, id]
        );
    };

    const handleSelectAll = () => {
        if (selectedEmails.length === paginatedEmails.length) {
            setSelectedEmails([]);
        } else {
            setSelectedEmails(paginatedEmails.map((email) => email.id));
        }
    };


    const handleSortChange = (sortOption) => {
        setSort(sortOption);
        const sortedEmails = [...emails].sort((a, b) => {
            if (sortOption === 'Newest') {
                return b.id - a.id;
            } else {
                return a.id - b.id;
            }
        });
        setEmails(sortedEmails);
    };

    const totalPages = Math.ceil(filteredEmails.length / ITEMS_PER_PAGE);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const addProduct = (product) => {
        if (!selectedProducts.some((p) => p.name === product.name)) {
            setSelectedProducts([...selectedProducts, product]);
        }
    };

    const removeProduct = (product) => {
        setSelectedProducts(selectedProducts.filter((p) => p.name !== product.name));
    };

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const renderCalendarDays = () => {
        const today = new Date();
        const daysInMonth = getDaysInMonth(currentMonth);
        const firstDayIndex = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            1
        ).getDay();
        const calendarDays = [];

        // Empty cells before the first day
        for (let i = 0; i < firstDayIndex; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // Actual days in the current month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDate = new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth(),
                day
            );
            const isToday = dayDate.toDateString() === today.toDateString();
            const isPast = dayDate < today;

            calendarDays.push(
                <div
                    key={day}
                    className={`calendar-day ${isToday ? "today" : ""} ${isPast ? "disabled" : ""
                        } ${selectedDate === dayDate.toISOString().split("T")[0] ? "selected" : ""
                        }`}
                    onClick={() => !isPast && setSelectedDate(dayDate.toISOString().split("T")[0])}
                >
                    {day}
                </div>
            );
        }

        return calendarDays;
    };

    const handleNextMonth = () => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
        );
    };

    const handlePreviousMonth = () => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
        );
    };

    const handleSchedule = () => {
        if (selectedDate && selectedTime) {
            alert(`Email scheduled for ${selectedDate} at ${selectedTime}`);
        } else {
            setIsCalendarOpen(!isCalendarOpen)
        }
    };
    const products =
        [
            { name: "How to Write Better Prompts", type: 'course', image: "https://i.ibb.co/jJ4GHXP/img1.jpg", enrolled: '2,543 enrolled', enrolledTooltip: '2,543 students enrolled F', email: '45/100 emails', emailTooltip: '45 out of 100 emails remaining' },
            { name: "All Followers", meta: '4,761 total followers' },
        ]
    const editorRef = useRef(null); // Reference for the editable content

    const executeCommand = (command) => {
        if (editorRef.current) {
            document.execCommand(command, false, null); // Execute editor command
        }
    };

    const handleUndo = () => {
        document.execCommand("undo", false, null);
    };

    const handleRedo = () => {
        document.execCommand("redo", false, null);
    };


    return (
        <div className="container-fluid marketing-page" >
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {statsData.map((stat, index) => (
                    <div
                        key={index}
                        className="stat-widget"
                    >
                        <div className="stat-title">{stat.title}</div>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-meta">
                            <span className="stat-period">{stat.period}</span>
                            <div
                                className={`stat-trend ${stat.trend === "up" ? "trend-up" : "trend-down"
                                    }`}
                            >
                                {stat.trend === "up" ? (
                                    <svg class="trend-icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
                                    </svg>) : (<svg class="trend-icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12 13a1 1 0 110 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clip-rule="evenodd" />
                                    </svg>)}
                                {stat.percentage}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='email-portion mt-4'>
                <div className="dashboard">
                    {/* Email Analytics Column */}
                    <div className="column column-wide">
                        <div className="column-header p-0">
                            <div className="header-left">
                                <div className="header-title">EMAIL ANALYTICS</div>
                                <div className="header-value">
                                    83,125
                                    <span className="trend-badge trend-up">+7.5%</span>
                                </div>
                            </div>
                            <div className="icon-container">
                                <svg fill="none" viewBox="0 0 32 32" width="24" height="24">
                                    <path
                                        fill="#13c4cc"
                                        d="M9.33341 6.33333C8.89139 6.33333 8.46746 6.50892 8.1549 6.82148C7.84234 7.13404 7.66675 7.55797 7.66675 7.99999V20.734C8.17815 20.473 8.74858 20.3333 9.33341 20.3333H18C18.5523 20.3333 19 20.781 19 21.3333C19 21.8856 18.5523 22.3333 18 22.3333H9.33341C8.89139 22.3333 8.46746 22.5089 8.1549 22.8215C7.84234 23.134 7.66675 23.558 7.66675 24C7.66675 24.442 7.84234 24.8659 8.1549 25.1785C8.46746 25.4911 8.89139 25.6667 9.33341 25.6667H18C18.5523 25.6667 19 26.1144 19 26.6667C19 27.2189 18.5523 27.6667 18 27.6667H9.33341C8.36095 27.6667 7.42832 27.2804 6.74069 25.5927C6.05306 25.9051 5.66675 24.9725 5.66675 24V7.99999C5.66675 7.02753 6.05306 6.0949 6.74069 5.40727C7.42832 4.71964 8.36095 4.33333 9.33341 4.33333H25.3334C25.8857 4.33333 26.3334 4.78104 26.3334 5.33333V12.9998C26.3334 13.5521 25.8857 13.9998 25.3334 13.9998C24.7811 13.9998 24.3334 13.5521 24.3334 12.9998V6.33333H9.33341Z"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="legend">
                            <div className="legend-item">
                                <div className="legend-dot" style={{ backgroundColor: '#13C4CC' }}></div>
                                Sends
                            </div>
                            <div className="legend-item">
                                <div className="legend-dot" style={{ backgroundColor: '#02C5AF' }}></div>
                                Opens
                            </div>
                            <div className="legend-item">
                                <div className="legend-dot" style={{ backgroundColor: '#009ECB' }}></div>
                                CTR
                            </div>
                            <div className="legend-item">
                                <div className="legend-dot" style={{ backgroundColor: '#3B6E91' }}></div>
                                Unsubscribes
                            </div>
                        </div>

                        <div className="chart-container">
                            <canvas id="emailChart" ref={emailChartRef}></canvas>
                        </div>
                    </div>

                    {/* Delivery Column */}
                    <div className="column column-narrow">
                        <div className="column-header p-0">
                            <div className="header-left">
                                <div className="header-title">DELIVERED</div>
                                <div className="header-value">
                                    78.5%
                                    <span className="trend-badge trend-up">+3.5%</span>
                                </div>
                            </div>
                            <div className="icon-container">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 17"
                                    height="17"
                                    width="16"
                                >
                                    <path
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="1.5"
                                        stroke="#13c4cc"
                                        d="M2.66659 3.1665H13.3333C14.0666 3.1665 14.6666 3.7665 14.6666 4.49984V12.4998C14.6666 13.2332 14.0666 13.8332 13.3333 13.8332H2.66659C1.93325 13.8332 1.33325 13.2332 1.33325 12.4998V4.49984C1.33325 3.7665 1.93325 3.1665 2.66659 3.1665Z"
                                    ></path>
                                    <path
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="1.5"
                                        stroke="#13c4cc"
                                        d="M14.6666 4.5L7.99992 9.16667L1.33325 4.5"
                                    ></path>
                                </svg>
                            </div>
                        </div>

                        <div className="delivery-controls">
                            <button
                                className={`control-button ${currentView === "percentage" ? "active" : ""
                                    }`}
                                onClick={() => setCurrentView("percentage")}
                            >
                                Percentage
                            </button>
                            <button
                                className={`control-button ${currentView === "count" ? "active" : ""
                                    }`}
                                onClick={() => setCurrentView("count")}
                            >
                                Count
                            </button>
                        </div>

                        <div className="delivery-grid-container">
                            <div className="delivery-labels">
                                {currentView === "percentage"
                                    ? [100, 80, 60, 40, 20].map((val) => <span key={val}>{val}%</span>)
                                    : [10000, 8000, 6000, 4000, 2000].map((val) => (
                                        <span key={val}>{val.toLocaleString()}</span>
                                    ))}
                            </div>

                            <div className="delivery-grid"></div>

                            <div className="day-labels">
                                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                                    <span key={day}>{day}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-area mt-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h1 className='text-xl font-medium'>Marketing</h1>
                    <button onClick={toggleModal} className="new-email-btn" style={{ fontSize: '13px' }} id="newEmailBtn">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        New Email
                    </button>
                </div>

                {/* Search Section */}
                <div className="search-section pb-0 mb-1">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search emails..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <div className="search-meta flex-col md:flex-row gap-4 md:gap-0">
                        <div className="showing-text">
                            Showing <strong>{(currentPage - 1) * ITEMS_PER_PAGE + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, initialEmails.length)}</strong> of <strong>{initialEmails.length}</strong> products
                        </div>
                        <div className="controls mb-3 md:mb-0 flex flex-col items-end sm:flex-row sm:items-center">
                            <div className="relative">
                                <select
                                    className="control-btn appearance-none" style={{ paddingRight: '40px' }}
                                    onChange={(e) => handleBulkAction(e.target.value)}
                                >
                                    <option value="">Bulk Actions</option>
                                    <option value="delete">Delete</option>
                                </select>
                                {/* Custom Dropdown Icon */}
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="controls">
                                {/* Filter by Status */}
                                <div className="relative">
                                    <select
                                        className="control-btn appearance-none" style={{ paddingRight: '40px' }}
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                    >
                                        <option value="">Filter by Status</option>
                                        <option value="SENT">Sent</option>
                                        <option value="SCHEDULED">Scheduled</option>
                                        <option value="DRAFT">Draft</option>
                                    </select>
                                    {/* Custom Dropdown Icon */}
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* Sort Emails */}
                                <div className="relative">
                                    <select
                                        className="control-btn appearance-none" style={{ paddingRight: '40px' }}
                                        value={sort}
                                        onChange={(e) => handleSortChange(e.target.value)}
                                    >
                                        <option value="Newest">Sort: Newest</option>
                                        <option value="Oldest">Sort: Oldest</option>
                                    </select>
                                    {/* Custom Dropdown Icon */}
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Tabs */}
                    <div className="tabes">
                        {["All", "Sent", "Scheduled", "Draft"].map((tabOption) => (
                            <div
                                key={tabOption}
                                className={`tabe ${tab === tabOption ? "active" : ""}`}
                                onClick={() => handleTabChange(tabOption)}
                            >
                                {tabOption}
                            </div>
                        ))}
                    </div>


                    {/* Email Table */}
                    <div className="overflow-x-auto">
                        <table className="email-table w-full min-w-max">
                            <thead>
                                <tr>
                                    <th>
                                        <div className="checkbox-wrapper">
                                            <div
                                                className={`custom-checkbox2 ${selectedEmails.length === paginatedEmails.length ? "checked" : ""
                                                    }`}
                                                role="checkbox"
                                                aria-checked={selectedEmails.length === paginatedEmails.length}
                                                onClick={handleSelectAll}
                                            />
                                        </div>
                                    </th>
                                    <th>TYPE</th>
                                    <th>TITLE</th>
                                    <th>STATUS</th>
                                    <th>PRODUCTS</th>
                                    <th>STATS</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedEmails.map((email) => (
                                    <tr key={email.id} className="main-row">
                                        <td>
                                            <div className="checkbox-wrapper">
                                                <div
                                                    className={`custom-checkbox2 ${selectedEmails.includes(email.id) ? "checked" : ""
                                                        }`}
                                                    role="checkbox"
                                                    aria-checked={selectedEmails.includes(email.id)}
                                                    onClick={() => handleCheckboxChange(email.id)}
                                                />

                                            </div>
                                        </td>
                                        <td>
                                            <div className='tooltips' data-tooltip={`${email.type}`}>
                                                <div class={`email-type-icon type-${email.type.toLowerCase()}`} >
                                                    {email.type === 'Marketing' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M5.333 0a.667.667 0 0 0 0 1.333h5.334a.667.667 0 1 0 0-1.333H5.333ZM2.667 3.333c0-.368.298-.666.666-.666h9.334a.667.667 0 1 1 0 1.333H3.333a.667.667 0 0 1-.666-.667ZM1.333 6c0-.368.299-.667.667-.667h12c.368 0 .667.299.667.667v9.333A.667.667 0 0 1 14 16H2a.667.667 0 0 1-.667-.667V6Zm1.334.667v8h10.666v-8H2.667Z" />
                                                    </svg> : email.type === 'Announcement' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path fill-rule="evenodd" d="M6.759 3H17.24c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.239.468.339.966.387 1.505a1 1 0 0 1 .03.5C23 7.64 23 8.16 23 8.76v6.482c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H6.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 16.71 1 16.046 1 15.242V8.758c0-.599 0-1.12.018-1.57a1 1 0 0 1 .031-.5c.048-.54.148-1.037.387-1.505a44 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C5.29 3 5.954 3 6.758 3M3 8.92v6.28c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.82.18C5.361 19 5.942 19 6.8 19h10.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889V8.92l-6.591 4.615-.116.08c-.544.383-1.023.719-1.567.855a3 3 0 0 1-1.452 0c-.544-.136-1.022-.472-1.567-.854l-.116-.081zm17.917-2.383-7.655 5.36c-.73.51-.884.598-1.02.632a1 1 0 0 1-.484 0c-.136-.034-.29-.123-1.02-.633L3.083 6.537c.036-.207.082-.34.135-.445a2 2 0 0 1 .874-.874c.156-.08.38-.145.82-.18C5.361 5 5.942 5 6.8 5h10.4c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.053.104.1.238.135.445"></path>
                                                    </svg> : ''}
                                                </div>
                                            </div></td>
                                        <td className="email-title">{email.title}</td>
                                        <td>
                                            <span className={`status-pill status-${email.status.toLowerCase()} tooltips`} data-tooltip="Sent on Fri, Dec 25, 2024 4:22 PM">{email.status}</span>
                                        </td>
                                        <td>
                                            <div className="products-avatars">
                                                {email.products.map((product, index) => (
                                                    <div className="tooltips gap-0 p-0" data-tooltip={`${product.name}`}>
                                                        <div className="avatar">
                                                            <div key={index}  >
                                                                <img src={product.image} alt={product.name} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="email-stats">
                                                <div className="stat-item">
                                                    <span className="stat-label">Sent</span>
                                                    <span className="stat-number">{email.stats.sent}</span>
                                                </div>
                                                <div className="stat-item">
                                                    <span className="stat-label">Opened</span>
                                                    <span className="stat-number">{email.stats.opened}</span>
                                                </div>
                                                <div className="stat-item">
                                                    <span className="stat-label">Clicked</span>
                                                    <span className="stat-number">{email.stats.clicked}</span>
                                                </div>
                                                <div className="stat-item">
                                                    <span className="stat-label">Unsubscribed</span>
                                                    <span className="stat-number">{email.stats.unsubscribed}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <button className="options-button"><svg viewBox="0 0 24 24">
                                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                            </svg></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table></div>

                    <div className="container-products pt-2 pb-0">
                        <div className='footer mt-1 p-0 flex flex-col md:flex-row gap-4 md:gap-0 pt-4 pb-0 mb-0'>
                            <div className='footer-left'>
                                <div className='footer-text'>
                                    Showing <strong>{(currentPage - 1) * ITEMS_PER_PAGE + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, initialEmails.length)}</strong> of <strong>{initialEmails.length}</strong> products
                                </div>
                                <div className="items-per-page">
                                    <div className="items-dropdown">
                                        Items Per Page: {ITEMS_PER_PAGE}
                                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none">
                                            <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="items-menu">
                                        {[2, 4, 8].map((value) => (
                                            <div
                                                className="items-menu-item"
                                                onClick={() => setitemsPerPage(value)}
                                                key={value}
                                            >
                                                {value}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="page-controls">
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    className="page-button"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                {[...Array(totalPages)].map((_, idx) => (
                                    <button
                                        key={idx}
                                        className={currentPage === idx + 1 ? 'active page-button' : 'page-button '}
                                        onClick={() => setCurrentPage(idx + 1)}
                                    >
                                        {idx + 1}
                                    </button>
                                ))}
                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    className="page-button"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className={`modal ${isModalOpen === true ? 'active' : ''}`}>
                    <div className="modal-content pt-2">
                        <div className="modal-header flex-row p-0 pb-2">
                            <h2 className="modal-title">Create New Email</h2>
                            <button className="close-modal text-lg" onClick={toggleModal}>
                                &times;
                            </button>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Enter email name"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Subject</label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Enter email subject"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Products</label>
                            <div className="product-search-container">
                                <div className="selected-products">
                                    {selectedProducts.map((product) => (
                                        <div key={product.name} className="selected-product">
                                            {product.name}
                                            <span
                                                className="remove-product"
                                                onClick={() => removeProduct(product)}
                                            >
                                                &times;
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="product-search-results">
                                    {products.map((product) => (
                                        <div
                                            key={product.name}
                                            className="product-item"
                                            onClick={() => addProduct(product)}
                                        >
                                            {product.image &&
                                                <img
                                                    src={product.image}
                                                    className="product-thumbnail"
                                                    alt="Product"
                                                />
                                            }
                                            <div className="product-info">
                                                <div className="product-title">{product.name}</div>
                                                {product.type && <span class={`product-type type-${product.type}`}>{product.type}</span>}
                                                {product.meta && <div class="product-meta mt-0">{product.meta}</div>}
                                            </div>
                                            {product.enrolled && product.email &&
                                                <div class="product-stats">
                                                    <div class="product-stat">
                                                        <svg fill="none" viewBox="0 0 20 20">
                                                            <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                        </svg>
                                                        <span>{product.enrolled}</span>
                                                        <div class="stat-tooltip">{product.enrolledTooltip}</div>
                                                    </div>

                                                    <div class="product-stat">
                                                        <svg viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" />
                                                        </svg>
                                                        <span>{product.email}</span>
                                                        <div class="stat-tooltip">{product.emailTooltip}</div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='form-group'>
                            <label className="form-label">Email Type</label>
                            <div className="relative">
                                <select
                                    className="school-inputs cursor-pointer appearance-none"
                                >
                                    <option value="Announcement">Announcement</option>
                                    <option value='Marketing'>Marketing</option>
                                </select>
                                {/* Custom Dropdown Icon */}
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Content</label>

                            {/* Toolbar */}
                            <div className="editor-toolbar">
                                <button
                                    className="toolbar-btn"
                                    title="Bold"
                                    onClick={() => executeCommand("bold")}
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M4 6L8 10L12 6"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </button>

                                <button
                                    className="toolbar-btn"
                                    title="Italic"
                                    onClick={() => executeCommand("italic")}
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M5 1H11V2H8.8L7.2 13H9V14H3V13H5.2L6.8 2H5V1Z" />
                                    </svg>
                                </button>

                                <button
                                    className="toolbar-btn"
                                    title="Undo"
                                    onClick={handleUndo}
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M4.5 6.5H10.5C12.433 6.5 14 8.067 14 10C14 11.933 12.433 13.5 10.5 13.5H6V12.5H10.5C11.8807 12.5 13 11.3807 13 10C13 8.61929 11.8807 7.5 10.5 7.5H4.5V9L2 6.5L4.5 4V6.5Z" />
                                    </svg>
                                </button>

                                <button
                                    className="toolbar-btn"
                                    title="Redo"
                                    onClick={handleRedo}
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M11.5 6.5H5.5C3.567 6.5 2 8.067 2 10C2 11.933 3.567 13.5 5.5 13.5H10V12.5H5.5C4.11929 12.5 3 11.3807 3 10C3 8.61929 4.11929 7.5 5.5 7.5H11.5V9L14 6.5L11.5 4V6.5Z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Content Editable */}
                            <div
                                ref={editorRef}
                                className="editor-content school-inputs"
                                contentEditable="true"
                                style={{
                                    border: "1px solid #E5E7EB",
                                    borderRadius: "4px",
                                    minHeight: "150px",
                                    padding: "10px",
                                    marginTop: "10px",
                                    outline: "none",
                                }}
                            ></div>
                        </div>
                        <div className="form-group">
                            {selectedDate && <p>Selected Date: {selectedDate}</p>}
                            {selectedTime && <p>Selected Time: {selectedTime}</p>}
                        </div>

                        <div className="modal-footer pt-3 mr-auto p-0">
                            <button className="btn btn-secondary">Preview</button>
                            <div className='relative'>
                                <button className="btn btn-secondary" onClick={handleSchedule}>
                                    Schedule
                                </button>
                                {isCalendarOpen && (
                                    <div className={`calendar-popup ${isCalendarOpen === true ? 'active' : ''} left-0 bottom-14`}>
                                        <div className="calendar-header">
                                            <button
                                                className="btn btn-secondary"
                                                onClick={handlePreviousMonth}
                                            >
                                                &lt;
                                            </button>
                                            <span>
                                                {currentMonth.toLocaleString("default", {
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </span>
                                            <button
                                                className="btn btn-secondary"
                                                onClick={handleNextMonth}
                                            >
                                                &gt;
                                            </button>
                                        </div>
                                        {/* Weekdays Row */}
                                        <div className="flex items-center justify-between">
                                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                                <div key={day} className="calendar-weekday">
                                                    {day}
                                                </div>
                                            ))}
                                        </div>
                                        {/* Calendar Days */}
                                        <div className="calendar-grid">

                                            {renderCalendarDays()}</div>

                                        {/* Time Input */}
                                        <input
                                            type="time"
                                            className="form-input"
                                            value={selectedTime}
                                            onChange={(e) => setSelectedTime(e.target.value)}
                                        />

                                        {/* Action Buttons */}
                                        <div className="modal-footer mb-0 pb-0">
                                            <button
                                                className="btn btn-secondary"
                                                onClick={() => {
                                                    setSelectedDate(null);
                                                    setSelectedTime("");
                                                    setIsCalendarOpen(false);
                                                }}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    if (selectedDate && selectedTime) {
                                                        alert(`Date: ${selectedDate}, Time: ${selectedTime}`);
                                                        setIsCalendarOpen(false);
                                                    } else {
                                                        alert("Please select both date and time.");
                                                    }
                                                }}
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <button className="btn btn-secondary">Save Draft</button>
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
}
