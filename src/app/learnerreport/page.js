'use client';
import { useEffect, useRef, useState } from 'react';

const MonthlyLearnerReport = () => {
    const [tooltip, setTooltip] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState("July 2023");
    const [learningData, setLearningData] = useState({
        daysLearned: [3, 6, 10, 19, 20],
        bestLearningDay: 20,
        minutesPerDay: {
            3: 45,
            6: 60,
            10: 90,
            19: 120,
            20: 250,
        },
        weeklyAverage: {
            MON: 0,
            TUE: 30,
            WED: 0,
            THU: 25,
            FRI: 120,
            SAT: 0,
            SUN: 0,
        },
    });
    const calendarDaysRef = useRef(null);
    const weeklyChartRef = useRef(null);

    const monthData = {
        "July 2023": {
            daysLearned: [3, 6, 10, 19, 20],
            bestLearningDay: 20,
            minutesPerDay: {
                3: 45,
                6: 60,
                10: 90,
                19: 120,
                20: 250,
            },
            weeklyAverage: {
                MON: 0,
                TUE: 30,
                WED: 0,
                THU: 25,
                FRI: 120,
                SAT: 0,
                SUN: 0,
            },
        },
        "August 2023": {
            daysLearned: [2, 7, 15, 18],
            bestLearningDay: 18,
            minutesPerDay: {
                2: 80,
                7: 50,
                15: 120,
                18: 200,
            },
            weeklyAverage: {
                MON: 60,
                TUE: 0,
                WED: 45,
                THU: 80,
                FRI: 0,
                SAT: 150,
                SUN: 0,
            },
        },
        "September 2023": {
            daysLearned: [5, 9, 12, 20, 29],
            bestLearningDay: 29,
            minutesPerDay: {
                5: 60,
                9: 30,
                12: 90,
                20: 100,
                29: 180,
            },
            weeklyAverage: {
                MON: 10,
                TUE: 80,
                WED: 0,
                THU: 25,
                FRI: 120,
                SAT: 0,
                SUN: 30,
            },
        },
    };

    const getIntensityColor = (minutes) => {
        const maxMinutes = 120;
        const intensity = Math.min(minutes / maxMinutes, 1);
        const baseColor = { r: 19, g: 196, b: 204 }; // #13C4CC
        return `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${0.3 + intensity * 0.7
            })`;
    };

    const initializeCalendar = () => {
        if (!calendarDaysRef.current) return;
        const calendarDays = calendarDaysRef.current;
        calendarDays.innerHTML = ""; // Clear existing content

        for (let i = 1; i <= 31; i++) {
            const dayElement = document.createElement("div");
            dayElement.className = "calendar-day";
            if (learningData.minutesPerDay[i]) {
                dayElement.setAttribute("data-minutes", learningData.minutesPerDay[i]);
                if (i === learningData.bestLearningDay) {
                    dayElement.style.backgroundColor = "#13AFF0";
                } else {
                    dayElement.style.backgroundColor = getIntensityColor(
                        learningData.minutesPerDay[i]
                    );
                }
                dayElement.style.color = "white";
            }
            dayElement.textContent = i;
            calendarDays.appendChild(dayElement);
        }
    };

    const showTooltip = (e, text) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'chart-tooltips';
        tooltip.textContent = text;
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY - 30}px`;
        document.body.appendChild(tooltip);
        setTimeout(() => tooltip.style.opacity = '1', 0);
        return tooltip;
    };

    const hideTooltip = (tooltip) => {
        tooltip.style.opacity = '0';
        setTimeout(() => tooltip.remove(), 200);
    };

    const initializeWeeklyChart = () => {
        if (!weeklyChartRef.current) return;
        const chartContainer = weeklyChartRef.current;
        chartContainer.innerHTML = ""; // Clear existing content

        Object.entries(learningData.weeklyAverage).forEach(([day, minutes]) => {
            const barContainer = document.createElement("div");
            barContainer.style.display = "flex";
            barContainer.style.flexDirection = "column";
            barContainer.style.alignItems = "center";

            const bar = document.createElement("div");
            bar.className = "chart-bar";
            bar.style.height = `${(minutes / 120) * 150}px`;
            bar.setAttribute("data-minutes", minutes);
            bar.setAttribute("data-day", day);

            const value = document.createElement("div");

            const label = document.createElement("div");
            label.className = "chart-label";
            label.textContent = day;

            barContainer.appendChild(value);
            barContainer.appendChild(bar);
            barContainer.appendChild(label);
            chartContainer.appendChild(barContainer);

            let tooltip;
            bar.addEventListener('mouseenter', (e) => {
                tooltip = showTooltip(e, `${day}: ${minutes} min`);
            });
            bar.addEventListener('mouseleave', () => {
                if (tooltip) hideTooltip(tooltip);
            });
        });
    };


    useEffect(() => {

        initializeCalendar();
        initializeWeeklyChart();
    }, [learningData]);

    const handleMonthChange = (e) => {
        const selected = e.target.value;
        setSelectedMonth(selected);
        setLearningData(monthData[selected]);
    };

    const statsData = [
        {
            title: 'TOTAL TIME LEARNING',
            time: '4 Hrs 11 mins',
            imageSrc: 'https://i.ibb.co/KzRx9V3/alarm1.webp',
            altText: 'Alarm',
        },
        {
            title: 'BEST LEARNING DAY',
            time: '21st Jul | 4 Hrs 10 mins',
            imageSrc: 'https://i.ibb.co/RjtfNSz/party1.jpg',
            altText: 'Party',
        },
    ];
    const statsData2 = [
        {
            title: 'Fridays are your best day',
            imageSrc: 'https://i.ibb.co/xGHC6Nv/bestday.webp',
            altText: 'Best Day',
            day: 'Fridays',
        },
        {
            title: 'Thursday you study the least',
            imageSrc: 'https://i.ibb.co/NnnXj8r/frowm.jpg',
            altText: 'Least Study',
            day: 'Thursday',
        },
    ];
    const badgesData = [
        { name: 'Gold', count: 0, description: 'Learn 3 days in a week to earn Gold' },
        { name: 'Silver', count: 0, description: 'Learn 2 days in a week to earn Silver' },
        { name: 'Bronze', count: 1, description: 'Learn 1 day in a week to earn Bronze', className: 'badge-bronze' }
    ];

    const GoalsStatsData = [
        { imgSrc: 'https://i.ibb.co/qgVCTJk/courses-completed.webp', value: 0, label: 'COURSES YOU COMPLETED' },
        { imgSrc: 'https://i.ibb.co/xCcqmDQ/certs-claimed.webp', value: 0, label: 'CERTIFICATES YOU CLAIMED' },
        { imgSrc: 'https://i.ibb.co/WnbHr3w/courses-in-progress.webp', value: 1, label: 'COURSES IN PROGRESS' },
        { imgSrc: 'https://i.ibb.co/8rsx6KZ/avg-assessment-score.webp', value: '0%', label: 'AVERAGE COURSE ASSESSMENT SCORE' }
    ];


    return (
        <div className="learner-report">
            <div className="container">
                <div className="header">
                    <div className="curved-line"></div>
                    <div className="header-content">
                        <h2 className="greeting">Hey Joe,</h2>
                        <div className="header-row">
                            <div>
                                <p className="report-title">
                                    Your <span>Monthly Learner Report</span> is in!
                                </p>
                                <p className="subtitle">
                                    Check out your stats for the month, see how you're growing, and
                                    aim to achieve even more next month!
                                </p>
                            </div>
                            <select
                                className="month-select"
                                id="monthSelect"
                                value={selectedMonth}
                                onChange={handleMonthChange}
                            >
                                {Object.keys(monthData).map((month) => (
                                    <option key={month} value={month}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="main-content">
                    <div className="calendar-section">
                        <h3 className="section-title">Learning Stats in {selectedMonth}</h3>
                        <div className="calendar">
                            <div className="calendar-grid" ref={calendarDaysRef}>
                            </div>
                            <div className="calendar-legend-and-summary">
                                <div className="calendar-legend">
                                    <div className="legend-item">
                                        <div className="legend-color" style={{ background: "#13C4CC" }}></div>
                                        <span>Days you learnt</span>
                                    </div>
                                    <div className="legend-item">
                                        <div className="legend-color" style={{ background: "#13AFF0" }}></div>
                                        <span>Best learning day</span>
                                    </div>
                                </div>
                                <div className="learning-summary">
                                    <p>
                                        <strong>You learned {learningData.daysLearned.length} days</strong> this month
                                    </p>
                                    <p style={{ color: "#16a34a" }}>
                                        {learningData.daysLearned.length - monthData[selectedMonth].daysLearned.length} days more than last month
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stats-section">
                        <div className="stats-grid">
                            <div className="stats-row">
                                {statsData.map((stat, index) => (
                                    <div className="stat-card" key={index}>
                                        <div className="stat-card-header">
                                            <img
                                                src={stat.imageSrc}
                                                alt={stat.altText}
                                                className="stat-image"
                                                width={30}
                                                height={30}
                                            />
                                            {stat.title}
                                        </div>
                                        <div className="stat-value">{stat.time}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="stat-card" style={{ flexGrow: 1 }}>
                                <div className="stat-card-header">
                                    AVERAGE NUMBER OF HOURS YOU LEARN ON DAYS OF THE WEEK
                                </div>
                                <div className="weekly-chart" ref={weeklyChartRef}></div>
                            </div>
                            <div className="stats-row">
                                {statsData2.map((stat, index) => (
                                    <div className="stat-card" key={index}>
                                        <div className="stat-card-header">
                                            <img
                                                src={stat.imageSrc}
                                                alt={stat.altText}
                                                className="stat-image"
                                                width={30}
                                                height={30}
                                            />
                                            <div>
                                                <strong>{stat.day}</strong> {stat.title}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="goals-section">
                    <div className="goals-header">
                        <img src="https://i.ibb.co/WnbHr3w/courses-in-progress.webp" alt="Goals" width="24" height="24" />
                        <h2 className="goals-title">
                            Goals and Achievements in <span>{selectedMonth}</span>
                        </h2>
                    </div>

                    <div className="goals-content">
                        <div className="badges-section">
                            <p className="badges-earned">YOU EARNED <span>ONE BADGE</span></p>
                            <div className="badges-grid">
                                {badgesData.map((badge, index) => (
                                    <div key={index} className="badge-item">
                                        <div className={`badge-circle ${badge.className || ''}`}>{badge.count}</div>
                                        <p>{badge.name}</p>
                                        <small>{badge.description}</small>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="stats-widgets">
                            {GoalsStatsData.map((stat, index) => (
                                <div key={index} className="stat-widget">
                                    <img src={stat.imgSrc} alt={stat.label} className="widget-image" />
                                    <div className="widget-value">{stat.value}</div>
                                    <div className="widget-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="goals-footer">
                        <p>Keep learning and add more achievements!</p>
                        <button className="continue-button">Continue Learning</button>
                    </div>
                </div>

            </div>
            <div className="main-container">
                <div className="learning-section w-100 ">
                    <div className="section-header">
                        <img src="https://i.ibb.co/WnbHr3w/courses-in-progress.webp" alt="Learning" width="24" height="24" />
                        <h2 className="section-title">Your Learning in <span>December</span></h2>
                    </div>

                    <div className="content-header">Content In Progress</div>

                    <div className="product-card">
                        <div className="card-content w-full overflow-hidden">
                            <img src="https://i.ibb.co/jJ4GHXP/img1.jpg" alt="Course" className="product-image" />

                            <div className="product-info">
                                <div className="info-header">
                                    <div className="product-label label-course">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                                            <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        Course
                                    </div>
                                    <div className="product-author">
                                        <img src="https://i.ibb.co/S3QRdcX/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Author" className="author-avatar" />
                                        <span className="author-name">Amanda K.</span>
                                    </div>
                                </div>

                                <h3 className="product-title">Creating Engaging Learning Journeys: UI/UX Best Practices</h3>

                                <div className="product-stats">
                                    <div className="stat-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                            <path fill="currentColor" d="M11.0251 3.98957C12.6023 3.33626 14.2928 3 16 3C17.7072 3 19.3977 3.33626 20.9749 3.98957C22.5521 4.64288 23.9852 5.60045 25.1924 6.80761C26.3995 8.01477 27.3571 9.44788 28.0104 11.0251C28.6637 12.6023 29 14.2928 29 16C29 17.7072 28.6637 19.3977 28.0104 20.9749C27.3571 22.5521 26.3995 23.9852 25.1924 25.1924C23.9852 26.3995 22.5521 27.3571 20.9749 28.0104C19.3977 28.6637 17.7072 29 16 29C14.2928 29 12.6023 28.6637 11.0251 28.0104C9.44788 27.3571 8.01477 26.3995 6.80761 25.1924C5.60045 23.9852 4.64288 22.5521 3.98957 20.9749C3.33625 19.3977 3 17.7072 3 16C3 14.2928 3.33625 12.6023 3.98957 11.0251C4.64288 9.44788 5.60045 8.01477 6.80761 6.80761C8.01477 5.60045 9.44788 4.64288 11.0251 3.98957ZM16 5C14.5555 5 13.1251 5.28452 11.7905 5.83733C10.4559 6.39013 9.24327 7.20038 8.22183 8.22183C7.20038 9.24327 6.39013 10.4559 5.83733 11.7905C5.28452 13.1251 5 14.5555 5 16C5 17.4445 5.28452 18.8749 5.83733 20.2095C6.39013 21.5441 7.20038 22.7567 8.22183 23.7782C9.24327 24.7996 10.4559 25.6099 11.7905 26.1627C13.1251 26.7155 14.5555 27 16 27C17.4445 27 18.8749 26.7155 20.2095 26.1627C21.5441 25.6099 22.7567 24.7996 23.7782 23.7782C24.7996 22.7567 25.6099 21.5441 26.1627 20.2095C26.7155 18.8749 27 17.4445 27 16C27 14.5555 26.7155 13.1251 26.1627 11.7905C25.6099 10.4559 24.7996 9.24327 23.7782 8.22183C22.7567 7.20038 21.5441 6.39013 20.2095 5.83733C18.8749 5.28452 17.4445 5 16 5ZM16 8.33333C16.5523 8.33333 17 8.78105 17 9.33333V15.4648L20.5547 17.8346C21.0142 18.141 21.1384 18.7618 20.8321 19.2214C20.5257 19.6809 19.9048 19.8051 19.4453 19.4987L15.4453 16.8321C15.1671 16.6466 15 16.3344 15 16V9.33333C15 8.78105 15.4477 8.33333 16 8.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        <span className="stat-value">2.5 hrs</span>
                                        <div className="tooltip">Course Duration</div>
                                    </div>

                                    <div className="stat-item">
                                        <svg fill="none" viewBox="0 0 20 20">
                                            <path fill="currentColor" d="M6.66671 1.75C7.08092 1.75 7.41671 2.08579 7.41671 2.5V3.41667H12.5834V2.5C12.5834 2.08579 12.9192 1.75 13.3334 1.75C13.7476 1.75 14.0834 2.08579 14.0834 2.5V3.41667H15C15.641 3.41667 16.2557 3.67128 16.7089 4.12449C17.1621 4.5777 17.4167 5.19239 17.4167 5.83333V15.8333C17.4167 16.4743 17.1621 17.089 16.7089 17.5422C16.2557 17.9954 15.641 18.25 15 18.25H5.00004C4.3591 18.25 3.74441 17.9954 3.2912 17.5422C2.83799 17.089 2.58337 16.4743 2.58337 15.8333V5.83333C2.58337 5.19239 2.83799 4.5777 3.2912 4.12449C3.74441 3.67128 4.3591 3.41667 5.00004 3.41667H5.91671V2.5C5.91671 2.08579 6.25249 1.75 6.66671 1.75ZM5.91671 4.91667H5.00004C4.75693 4.91667 4.52377 5.01324 4.35186 5.18515C4.17995 5.35706 4.08337 5.59022 4.08337 5.83333V8.41667H15.9167V5.83333C15.9167 5.59022 15.8201 5.35706 15.6482 5.18515C15.4763 5.01324 15.2432 4.91667 15 4.91667H14.0834V5.83333C14.0834 6.24755 13.7476 6.58333 13.3334 6.58333C12.9192 6.58333 12.5834 6.24755 12.5834 5.83333V4.91667H7.41671V5.83333C7.41671 6.24755 7.08092 6.58333 6.66671 6.58333C6.25249 6.58333 5.91671 6.24755 5.91671 5.83333V4.91667ZM15.9167 9.91667H4.08337V15.8333C4.08337 16.0764 4.17995 16.3096 4.35186 16.4815C4.52377 16.6534 4.75693 16.75 5.00004 16.75H15C15.2432 16.75 15.4763 16.6534 15.6482 16.4815C15.8201 16.3096 15.9167 16.0764 15.9167 15.8333V9.91667ZM8.41671 12.5C8.41671 12.0858 8.75249 11.75 9.16671 11.75H10C10.4143 11.75 10.75 12.0858 10.75 12.5V15C10.75 15.4142 10.4143 15.75 10 15.75C9.58583 15.75 9.25004 15.4142 9.25004 15V13.25H9.16671C8.75249 13.25 8.41671 12.9142 8.41671 12.5Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        <span className="stat-value">Enrolled Oct 15, 2024</span>
                                        <div className="tooltip">Enrollment Date</div>
                                    </div>

                                    {/* <div className="stat-item">
                                            <svg fill="none" viewBox="0 0 20 20">
                                                <path fill="currentColor" d="M6.66671 1.75C7.08092 1.75 7.41671 2.08579 7.41671 2.5V3.41667H12.5834V2.5C12.5834 2.08579 12.9192 1.75 13.3334 1.75C13.7476 1.75 14.0834 2.08579 14.0834 2.5V3.41667H15C15.641 3.41667 16.2557 3.67128 16.7089 4.12449C17.1621 4.5777 17.4167 5.19239 17.4167 5.83333V15.8333C17.4167 16.4743 17.1621 17.089 16.7089 17.5422C16.2557 17.9954 15.641 18.25 15 18.25H5.00004C4.3591 18.25 3.74441 17.9954 3.2912 17.5422C2.83799 17.089 2.58337 16.4743 2.58337 15.8333V5.83333C2.58337 5.19239 2.83799 4.5777 3.2912 4.12449C3.74441 3.67128 4.3591 3.41667 5.00004 3.41667H5.91671V2.5C5.91671 2.08579 6.25249 1.75 6.66671 1.75ZM5.91671 4.91667H5.00004C4.75693 4.91667 4.52377 5.01324 4.35186 5.18515C4.17995 5.35706 4.08337 5.59022 4.08337 5.83333V8.41667H15.9167V5.83333C15.9167 5.59022 15.8201 5.35706 15.6482 5.18515C15.4763 5.01324 15.2432 4.91667 15 4.91667H14.0834V5.83333C14.0834 6.24755 13.7476 6.58333 13.3334 6.58333C12.9192 6.58333 12.5834 6.24755 12.5834 5.83333V4.91667H7.41671V5.83333C7.41671 6.24755 7.08092 6.58333 6.66671 6.58333C6.25249 6.58333 5.91671 6.24755 5.91671 5.83333V4.91667ZM15.9167 9.91667H4.08337V15.8333C4.08337 16.0764 4.17995 16.3096 4.35186 16.4815C4.52377 16.6534 4.75693 16.75 5.00004 16.75H15C15.2432 16.75 15.4763 16.6534 15.6482 16.4815C15.8201 16.3096 15.9167 16.0764 15.9167 15.8333V9.91667ZM8.41671 12.5C8.41671 12.0858 8.75249 11.75 9.16671 11.75H10C10.4143 11.75 10.75 12.0858 10.75 12.5V15C10.75 15.4142 10.4143 15.75 10 15.75C9.58583 15.75 9.25004 15.4142 9.25004 15V13.25H9.16671C8.75249 13.25 8.41671 12.9142 8.41671 12.5Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                            </svg>


                                            <span className="stat-value">Last Active Nov 25, 2024</span>
                                            <div className="tooltip">Last Activity Date</div>
                                        </div> */}

                                    <div className="stat-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                            <path fill="currentColor" d="M8.00008 6.33331C7.91168 6.33331 7.82689 6.36843 7.76438 6.43094C7.70187 6.49346 7.66675 6.57824 7.66675 6.66665V25.3333C7.66675 25.4217 7.70187 25.5065 7.76438 25.569C7.82689 25.6315 7.91167 25.6666 8.00008 25.6666H11.0001V6.33331H8.00008ZM8.00008 4.33331C7.38124 4.33331 6.78775 4.57915 6.35017 5.01673C5.91258 5.45432 5.66675 6.04781 5.66675 6.66665V25.3333C5.66675 25.9522 5.91258 26.5456 6.35017 26.9832C6.78775 27.4208 7.38124 27.6666 8.00008 27.6666H11.0001V29.3333C11.0001 29.8856 11.4478 30.3333 12.0001 30.3333C12.5524 30.3333 13.0001 29.8856 13.0001 29.3333V27.6666H22.6667C23.6392 27.6666 24.5718 27.2803 25.2595 26.5927C25.9471 25.9051 26.3334 24.9724 26.3334 24V7.99998C26.3334 7.02752 25.9471 6.09489 25.2595 5.40725C24.5718 4.71962 23.6392 4.33331 22.6667 4.33331H8.00008ZM13.0001 6.33331V25.6666H22.6667C23.1088 25.6666 23.5327 25.4911 23.8453 25.1785C24.1578 24.8659 24.3334 24.442 24.3334 24V7.99998C24.3334 7.55795 24.1578 7.13403 23.8453 6.82147C23.5327 6.50891 23.1088 6.33331 22.6667 6.33331H13.0001ZM16.3334 10.6666C16.3334 10.1144 16.7811 9.66665 17.3334 9.66665H20.0001C20.5524 9.66665 21.0001 10.1144 21.0001 10.6666C21.0001 11.2189 20.5524 11.6666 20.0001 11.6666H17.3334C16.7811 11.6666 16.3334 11.2189 16.3334 10.6666ZM16.3334 16C16.3334 15.4477 16.7811 15 17.3334 15H20.0001C20.5524 15 21.0001 15.4477 21.0001 16C21.0001 16.5523 20.5524 17 20.0001 17H17.3334C16.7811 17 16.3334 16.5523 16.3334 16Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        <span className="stat-value">5/<strong>16</strong></span>
                                        <div className="tooltip">5 out of 16 Learning Units Completed</div>
                                    </div>
                                </div>
                            </div>


                            <div className="progress-widget">
                                <div className="widget-header">
                                    <div className="progress-text">
                                        <span>80%</span> PROGRESS
                                    </div>
                                    <div className="widget-arrow">
                                        <svg fill="none" viewBox="0 0 20 20">
                                            <path fill="#4F4F4F" d="M3.38189 10C5.24313 12.9154 7.45153 14.25 10 14.25C12.5485 14.25 14.7569 12.9154 16.6181 10C14.7569 7.0846 12.5485 5.75 10 5.75C7.45153 5.75 5.24313 7.0846 3.38189 10ZM1.85688 9.61413C3.94664 6.13119 6.65833 4.25 10 4.25C13.3417 4.25 16.0534 6.13119 18.1431 9.61413C18.2856 9.85164 18.2856 10.1484 18.1431 10.3859C16.0534 13.8688 13.3417 15.75 10 15.75C6.65833 15.75 3.94664 13.8688 1.85688 10.3859C1.71437 10.1484 1.71437 9.85164 1.85688 9.61413ZM8.29116 8.29116C8.74437 7.83795 9.35906 7.58333 10 7.58333C10.6409 7.58333 11.2556 7.83795 11.7088 8.29116C12.1621 8.74437 12.4167 9.35906 12.4167 10C12.4167 10.6409 12.1621 11.2556 11.7088 11.7088C11.2556 12.1621 10.6409 12.4167 10 12.4167C9.35906 12.4167 8.74437 12.1621 8.29116 11.7088C7.83795 11.2556 7.58333 10.6409 7.58333 10C7.58333 9.35906 7.83795 8.74437 8.29116 8.29116ZM10 9.08333C9.75689 9.08333 9.52373 9.17991 9.35182 9.35182C9.17991 9.52373 9.08333 9.75689 9.08333 10C9.08333 10.2431 9.17991 10.4763 9.35182 10.6482C9.52373 10.8201 9.75689 10.9167 10 10.9167C10.2431 10.9167 10.4763 10.8201 10.6482 10.6482C10.8201 10.4763 10.9167 10.2431 10.9167 10C10.9167 9.75689 10.8201 9.52373 10.6482 9.35182C10.4763 9.17991 10.2431 9.08333 10 9.08333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="progress-bar">
                                    <div className="progress-fill" style={{width: '80%'}}></div>
                                </div>

                                <div className="avatars-row">
                                    <div className="avatar-wrapper active" data-progress="80">
                                        <img src="https://i.ibb.co/S3QRdcX/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Current user" />
                                        <div className="tooltip">Your Progress: 80%</div>
                                    </div>
                                    <div className="avatar-wrapper" data-progress="100">
                                        <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="Top learner" />
                                        <div className="tooltip">Progress: 100%</div>
                                    </div>
                                    <div className="avatar-wrapper" data-progress="70">
                                        <img src="https://i.ibb.co/YP71Tb6/profile9.jpg" alt="Learner" />
                                        <div className="tooltip">Progress: 70%</div>
                                    </div>
                                    <div className="avatar-wrapper" data-progress="55">
                                        <img src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Learner" />
                                        <div className="tooltip">Progress: 55%</div>
                                    </div>
                                    <div className="avatar-wrapper" data-progress="40">
                                        <img src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Learner" />
                                        <div className="tooltip">Progress: 40%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="card-content w-full overflow-hidden">
                            <img src="https://i.ibb.co/z27wtc6/img2.jpg" alt="Session" className="product-image" />

                            <div className="product-info">
                                <div className="info-header">
                                    <div className="product-label label-session">
                                        <svg fill="none" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        1:1 Session
                                    </div>
                                    <div className="product-author">
                                        <img src="https://i.ibb.co/YP71Tb6/profile9.jpg" alt="Author" className="author-avatar" />
                                        <span className="author-name">Sarah M.</span>
                                    </div>
                                </div>

                                <h3 className="product-title">Prompt Mastery 1:1 Coaching Session</h3>

                                <div className="product-stats">
                                    <div className="stat-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                            <path fill="currentColor" d="M11.0251 3.98957C12.6023 3.33626 14.2928 3 16 3C17.7072 3 19.3977 3.33626 20.9749 3.98957C22.5521 4.64288 23.9852 5.60045 25.1924 6.80761C26.3995 8.01477 27.3571 9.44788 28.0104 11.0251C28.6637 12.6023 29 14.2928 29 16C29 17.7072 28.6637 19.3977 28.0104 20.9749C27.3571 22.5521 26.3995 23.9852 25.1924 25.1924C23.9852 26.3995 22.5521 27.3571 20.9749 28.0104C19.3977 28.6637 17.7072 29 16 29C14.2928 29 12.6023 28.6637 11.0251 28.0104C9.44788 27.3571 8.01477 26.3995 6.80761 25.1924C5.60045 23.9852 4.64288 22.5521 3.98957 20.9749C3.33625 19.3977 3 17.7072 3 16C3 14.2928 3.33625 12.6023 3.98957 11.0251C4.64288 9.44788 5.60045 8.01477 6.80761 6.80761C8.01477 5.60045 9.44788 4.64288 11.0251 3.98957ZM16 5C14.5555 5 13.1251 5.28452 11.7905 5.83733C10.4559 6.39013 9.24327 7.20038 8.22183 8.22183C7.20038 9.24327 6.39013 10.4559 5.83733 11.7905C5.28452 13.1251 5 14.5555 5 16C5 17.4445 5.28452 18.8749 5.83733 20.2095C6.39013 21.5441 7.20038 22.7567 8.22183 23.7782C9.24327 24.7996 10.4559 25.6099 11.7905 26.1627C13.1251 26.7155 14.5555 27 16 27C17.4445 27 18.8749 26.7155 20.2095 26.1627C21.5441 25.6099 22.7567 24.7996 23.7782 23.7782C24.7996 22.7567 25.6099 21.5441 26.1627 20.2095C26.7155 18.8749 27 17.4445 27 16C27 14.5555 26.7155 13.1251 26.1627 11.7905C25.6099 10.4559 24.7996 9.24327 23.7782 8.22183C22.7567 7.20038 21.5441 6.39013 20.2095 5.83733C18.8749 5.28452 17.4445 5 16 5ZM16 8.33333C16.5523 8.33333 17 8.78105 17 9.33333V15.4648L20.5547 17.8346C21.0142 18.141 21.1384 18.7618 20.8321 19.2214C20.5257 19.6809 19.9048 19.8051 19.4453 19.4987L15.4453 16.8321C15.1671 16.6466 15 16.3344 15 16V9.33333C15 8.78105 15.4477 8.33333 16 8.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        <span className="stat-value">45 minutes</span>
                                        <div className="tooltip">Session Duration</div>
                                    </div>

                                    <div className="stat-item">
                                        <svg fill="none" viewBox="0 0 20 20">
                                            <path fill="currentColor" d="M6.66671 1.75C7.08092 1.75 7.41671 2.08579 7.41671 2.5V3.41667H12.5834V2.5C12.5834 2.08579 12.9192 1.75 13.3334 1.75C13.7476 1.75 14.0834 2.08579 14.0834 2.5V3.41667H15C15.641 3.41667 16.2557 3.67128 16.7089 4.12449C17.1621 4.5777 17.4167 5.19239 17.4167 5.83333V15.8333C17.4167 16.4743 17.1621 17.089 16.7089 17.5422C16.2557 17.9954 15.641 18.25 15 18.25H5.00004C4.3591 18.25 3.74441 17.9954 3.2912 17.5422C2.83799 17.089 2.58337 16.4743 2.58337 15.8333V5.83333C2.58337 5.19239 2.83799 4.5777 3.2912 4.12449C3.74441 3.67128 4.3591 3.41667 5.00004 3.41667H5.91671V2.5C5.91671 2.08579 6.25249 1.75 6.66671 1.75ZM5.91671 4.91667H5.00004C4.75693 4.91667 4.52377 5.01324 4.35186 5.18515C4.17995 5.35706 4.08337 5.59022 4.08337 5.83333V8.41667H15.9167V5.83333C15.9167 5.59022 15.8201 5.35706 15.6482 5.18515C15.4763 5.01324 15.2432 4.91667 15 4.91667H14.0834V5.83333C14.0834 6.24755 13.7476 6.58333 13.3334 6.58333C12.9192 6.58333 12.5834 6.24755 12.5834 5.83333V4.91667H7.41671V5.83333C7.41671 6.24755 7.08092 6.58333 6.66671 6.58333C6.25249 6.58333 5.91671 6.24755 5.91671 5.83333V4.91667ZM15.9167 9.91667H4.08337V15.8333C4.08337 16.0764 4.17995 16.3096 4.35186 16.4815C4.52377 16.6534 4.75693 16.75 5.00004 16.75H15C15.2432 16.75 15.4763 16.6534 15.6482 16.4815C15.8201 16.3096 15.9167 16.0764 15.9167 15.8333V9.91667ZM8.41671 12.5C8.41671 12.0858 8.75249 11.75 9.16671 11.75H10C10.4143 11.75 10.75 12.0858 10.75 12.5V15C10.75 15.4142 10.4143 15.75 10 15.75C9.58583 15.75 9.25004 15.4142 9.25004 15V13.25H9.16671C8.75249 13.25 8.41671 12.9142 8.41671 12.5Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        <span className="stat-value">Session Date: Nov 25, 2024</span>
                                        <div className="tooltip">Scheduled Session Date</div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-widget">
                                <div className="widget-header">
                                    <div className="progress-text">
                                        <span>11</span> DAYS REMAINING
                                    </div>
                                    <div className="widget-arrow">
                                        <svg fill="none" viewBox="0 0 20 20">
                                            <path fill="#4F4F4F" d="M3.38189 10C5.24313 12.9154 7.45153 14.25 10 14.25C12.5485 14.25 14.7569 12.9154 16.6181 10C14.7569 7.0846 12.5485 5.75 10 5.75C7.45153 5.75 5.24313 7.0846 3.38189 10ZM1.85688 9.61413C3.94664 6.13119 6.65833 4.25 10 4.25C13.3417 4.25 16.0534 6.13119 18.1431 9.61413C18.2856 9.85164 18.2856 10.1484 18.1431 10.3859C16.0534 13.8688 13.3417 15.75 10 15.75C6.65833 15.75 3.94664 13.8688 1.85688 10.3859C1.71437 10.1484 1.71437 9.85164 1.85688 9.61413ZM8.29116 8.29116C8.74437 7.83795 9.35906 7.58333 10 7.58333C10.6409 7.58333 11.2556 7.83795 11.7088 8.29116C12.1621 8.74437 12.4167 9.35906 12.4167 10C12.4167 10.6409 12.1621 11.2556 11.7088 11.7088C11.2556 12.1621 10.6409 12.4167 10 12.4167C9.35906 12.4167 8.74437 12.1621 8.29116 11.7088C7.83795 11.2556 7.58333 10.6409 7.58333 10C7.58333 9.35906 7.83795 8.74437 8.29116 8.29116ZM10 9.08333C9.75689 9.08333 9.52373 9.17991 9.35182 9.35182C9.17991 9.52373 9.08333 9.75689 9.08333 10C9.08333 10.2431 9.17991 10.4763 9.35182 10.6482C9.52373 10.8201 9.75689 10.9167 10 10.9167C10.2431 10.9167 10.4763 10.8201 10.6482 10.6482C10.8201 10.4763 10.9167 10.2431 10.9167 10C10.9167 9.75689 10.8201 9.52373 10.6482 9.35182C10.4763 9.17991 10.2431 9.08333 10 9.08333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="progress-bar">
                                    <div className="progress-fill" style={{width: '60%'}}></div>
                                </div>

                                <div className="avatars-row">
                                    <div className="avatar-wrapper" data-progress="20">
                                        <img src="https://i.ibb.co/YP71Tb6/profile9.jpg" alt="Early session" />
                                        <div className="tooltip">Session: Nov 20, 2024</div>
                                    </div>
                                    <div className="avatar-wrapper active" data-progress="60">
                                        <img src="https://i.ibb.co/S3QRdcX/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Your session" />
                                        <div className="tooltip">Your session: Nov 25, 2024</div>
                                    </div>
                                    <div className="avatar-wrapper" data-progress="75">
                                        <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="Later session" />
                                        <div className="tooltip">Session: Nov 28, 2024</div>
                                    </div>
                                    <div className="avatar-wrapper" data-progress="85">
                                        <img src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Late session" />
                                        <div className="tooltip">Session: Dec 1, 2024</div>
                                    </div>
                                    <div className="avatar-wrapper" data-progress="95">
                                        <img src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Latest session" />
                                        <div className="tooltip">Session: Dec 5, 2024</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="product-card">
                        <div className="card-content w-full overflow-hidden">
                            <img src="https://i.ibb.co/k67BZds/community-image1.png" alt="Community" className="product-image" />

                            <div className="product-info">
                                <div className="info-header">
                                    <div className="product-label label-community">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path fill="currentColor" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                            <path fill="currentColor" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        Community
                                    </div>
                                    <div className="product-author">
                                        <img src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Author" className="author-avatar" />
                                        <span className="author-name">Michael R.</span>
                                    </div>
                                </div>

                                <h3 className="product-title">The Prompt Collective - AI Writers Community</h3>

                                <div className="product-stats">
                                    <div className="stat-item">
                                        <svg fill="none" viewBox="0 0 20 20">
                                            <path fill="currentColor" d="M6.66671 1.75C7.08092 1.75 7.41671 2.08579 7.41671 2.5V3.41667H12.5834V2.5C12.5834 2.08579 12.9192 1.75 13.3334 1.75C13.7476 1.75 14.0834 2.08579 14.0834 2.5V3.41667H15C15.641 3.41667 16.2557 3.67128 16.7089 4.12449C17.1621 4.5777 17.4167 5.19239 17.4167 5.83333V15.8333C17.4167 16.4743 17.1621 17.089 16.7089 17.5422C16.2557 17.9954 15.641 18.25 15 18.25H5.00004C4.3591 18.25 3.74441 17.9954 3.2912 17.5422C2.83799 17.089 2.58337 16.4743 2.58337 15.8333V5.83333C2.58337 5.19239 2.83799 4.5777 3.2912 4.12449C3.74441 3.67128 4.3591 3.41667 5.00004 3.41667H5.91671V2.5C5.91671 2.08579 6.25249 1.75 6.66671 1.75ZM5.91671 4.91667H5.00004C4.75693 4.91667 4.52377 5.01324 4.35186 5.18515C4.17995 5.35706 4.08337 5.59022 4.08337 5.83333V8.41667H15.9167V5.83333C15.9167 5.59022 15.8201 5.35706 15.6482 5.18515C15.4763 5.01324 15.2432 4.91667 15 4.91667H14.0834V5.83333C14.0834 6.24755 13.7476 6.58333 13.3334 6.58333C12.9192 6.58333 12.5834 6.24755 12.5834 5.83333V4.91667H7.41671V5.83333C7.41671 6.24755 7.08092 6.58333 6.66671 6.58333C6.25249 6.58333 5.91671 6.24755 5.91671 5.83333V4.91667ZM15.9167 9.91667H4.08337V15.8333C4.08337 16.0764 4.17995 16.3096 4.35186 16.4815C4.52377 16.6534 4.75693 16.75 5.00004 16.75H15C15.2432 16.75 15.4763 16.6534 15.6482 16.4815C15.8201 16.3096 15.9167 16.0764 15.9167 15.8333V9.91667ZM8.41671 12.5C8.41671 12.0858 8.75249 11.75 9.16671 11.75H10C10.4143 11.75 10.75 12.0858 10.75 12.5V15C10.75 15.4142 10.4143 15.75 10 15.75C9.58583 15.75 9.25004 15.4142 9.25004 15V13.25H9.16671C8.75249 13.25 8.41671 12.9142 8.41671 12.5Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        <span className="stat-value">Active since Jan 2024</span>
                                        <div className="tooltip">Community Age</div>   </div>



                                    <div className="stat-item">
                                        <svg fill="none" viewBox="0 0 20 20">
                                            <path fill="currentColor" d="M6.66671 1.75C7.08092 1.75 7.41671 2.08579 7.41671 2.5V3.41667H12.5834V2.5C12.5834 2.08579 12.9192 1.75 13.3334 1.75C13.7476 1.75 14.0834 2.08579 14.0834 2.5V3.41667H15C15.641 3.41667 16.2557 3.67128 16.7089 4.12449C17.1621 4.5777 17.4167 5.19239 17.4167 5.83333V15.8333C17.4167 16.4743 17.1621 17.089 16.7089 17.5422C16.2557 17.9954 15.641 18.25 15 18.25H5.00004C4.3591 18.25 3.74441 17.9954 3.2912 17.5422C2.83799 17.089 2.58337 16.4743 2.58337 15.8333V5.83333C2.58337 5.19239 2.83799 4.5777 3.2912 4.12449C3.74441 3.67128 4.3591 3.41667 5.00004 3.41667H5.91671V2.5C5.91671 2.08579 6.25249 1.75 6.66671 1.75ZM5.91671 4.91667H5.00004C4.75693 4.91667 4.52377 5.01324 4.35186 5.18515C4.17995 5.35706 4.08337 5.59022 4.08337 5.83333V8.41667H15.9167V5.83333C15.9167 5.59022 15.8201 5.35706 15.6482 5.18515C15.4763 5.01324 15.2432 4.91667 15 4.91667H14.0834V5.83333C14.0834 6.24755 13.7476 6.58333 13.3334 6.58333C12.9192 6.58333 12.5834 6.24755 12.5834 5.83333V4.91667H7.41671V5.83333C7.41671 6.24755 7.08092 6.58333 6.66671 6.58333C6.25249 6.58333 5.91671 6.24755 5.91671 5.83333V4.91667ZM15.9167 9.91667H4.08337V15.8333C4.08337 16.0764 4.17995 16.3096 4.35186 16.4815C4.52377 16.6534 4.75693 16.75 5.00004 16.75H15C15.2432 16.75 15.4763 16.6534 15.6482 16.4815C15.8201 16.3096 15.9167 16.0764 15.9167 15.8333V9.91667ZM8.41671 12.5C8.41671 12.0858 8.75249 11.75 9.16671 11.75H10C10.4143 11.75 10.75 12.0858 10.75 12.5V15C10.75 15.4142 10.4143 15.75 10 15.75C9.58583 15.75 9.25004 15.4142 9.25004 15V13.25H9.16671C8.75249 13.25 8.41671 12.9142 8.41671 12.5Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        <span className="stat-value">Last Active: 2h ago</span>
                                        <div className="tooltip">Last Community Activity</div>
                                    </div>
                                </div>
                            </div>



                            <div className="progress-widget">
                                <div className="widget-header">
                                    <div className="progress-text">
                                        <span>25</span> CONTRIBUTIONS
                                    </div>
                                    <div className="widget-arrow">
                                        <svg fill="none" viewBox="0 0 20 20">
                                            <path fill="#4F4F4F" d="M3.38189 10C5.24313 12.9154 7.45153 14.25 10 14.25C12.5485 14.25 14.7569 12.9154 16.6181 10C14.7569 7.0846 12.5485 5.75 10 5.75C7.45153 5.75 5.24313 7.0846 3.38189 10ZM1.85688 9.61413C3.94664 6.13119 6.65833 4.25 10 4.25C13.3417 4.25 16.0534 6.13119 18.1431 9.61413C18.2856 9.85164 18.2856 10.1484 18.1431 10.3859C16.0534 13.8688 13.3417 15.75 10 15.75C6.65833 15.75 3.94664 13.8688 1.85688 10.3859C1.71437 10.1484 1.71437 9.85164 1.85688 9.61413ZM8.29116 8.29116C8.74437 7.83795 9.35906 7.58333 10 7.58333C10.6409 7.58333 11.2556 7.83795 11.7088 8.29116C12.1621 8.74437 12.4167 9.35906 12.4167 10C12.4167 10.6409 12.1621 11.2556 11.7088 11.7088C11.2556 12.1621 10.6409 12.4167 10 12.4167C9.35906 12.4167 8.74437 12.1621 8.29116 11.7088C7.83795 11.2556 7.58333 10.6409 7.58333 10C7.58333 9.35906 7.83795 8.74437 8.29116 8.29116ZM10 9.08333C9.75689 9.08333 9.52373 9.17991 9.35182 9.35182C9.17991 9.52373 9.08333 9.75689 9.08333 10C9.08333 10.2431 9.17991 10.4763 9.35182 10.6482C9.52373 10.8201 9.75689 10.9167 10 10.9167C10.2431 10.9167 10.4763 10.8201 10.6482 10.6482C10.8201 10.4763 10.9167 10.2431 10.9167 10C10.9167 9.75689 10.8201 9.52373 10.6482 9.35182C10.4763 9.17991 10.2431 9.08333 10 9.08333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="progress-bar">
                                    <div className="progress-fill" style={{width: '90%'}}></div>
                                </div>

                                <div className="avatars-row">
                                    <div className="avatar-wrapper" data-progress="45">
                                        <img src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Member" />
                                        <div className="tooltip">75 contributions</div>
                                    </div>
                                    <div className="avatar-wrapper" data-progress="60">
                                        <img src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Active member" />
                                        <div className="tooltip">82 contributions</div>
                                    </div>
                                    <div className="avatar-wrapper" data-progress="75">
                                        <img src="https://i.ibb.co/YP71Tb6/profile9.jpg" alt="Top contributor" />
                                        <div className="tooltip">87 contributions</div>
                                    </div>
                                    <div className="avatar-wrapper active" data-progress="90">
                                        <img src="https://i.ibb.co/S3QRdcX/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Current user" />
                                        <div className="tooltip">Your contributions: 25</div>
                                    </div>
                                    <div className="avatar-wrapper" data-progress="100">
                                        <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="Leading contributor" />
                                        <div className="tooltip">156 contributions</div>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>

                    <div className="content-header">You Completed</div>
                    <div className="product-card w-full">
                        <div className="card-content w-full overflow-hidden">
                            <img src="https://i.ibb.co/LJwrLdW/coaching-image.webp" alt="Completed Course" className="product-image" />

                            <div className="product-info">
                                <div className="info-header">
                                    <div className="product-label label-course">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                                            <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        Course
                                    </div>
                                    <div className="product-author">
                                        <img src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Author" className="author-avatar" />
                                        <span className="author-name">David L.</span>
                                    </div>
                                </div>

                                <h3 className="product-title">Java Programming Masterclass</h3>

                                <div className="product-stats">

                                    <div className="stat-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                            <path fill="currentColor" d="M11.0251 3.98957C12.6023 3.33626 14.2928 3 16 3C17.7072 3 19.3977 3.33626 20.9749 3.98957C22.5521 4.64288 23.9852 5.60045 25.1924 6.80761C26.3995 8.01477 27.3571 9.44788 28.0104 11.0251C28.6637 12.6023 29 14.2928 29 16C29 17.7072 28.6637 19.3977 28.0104 20.9749C27.3571 22.5521 26.3995 23.9852 25.1924 25.1924C23.9852 26.3995 22.5521 27.3571 20.9749 28.0104C19.3977 28.6637 17.7072 29 16 29C14.2928 29 12.6023 28.6637 11.0251 28.0104C9.44788 27.3571 8.01477 26.3995 6.80761 25.1924C5.60045 23.9852 4.64288 22.5521 3.98957 20.9749C3.33625 19.3977 3 17.7072 3 16C3 14.2928 3.33625 12.6023 3.98957 11.0251C4.64288 9.44788 5.60045 8.01477 6.80761 6.80761C8.01477 5.60045 9.44788 4.64288 11.0251 3.98957ZM16 5C14.5555 5 13.1251 5.28452 11.7905 5.83733C10.4559 6.39013 9.24327 7.20038 8.22183 8.22183C7.20038 9.24327 6.39013 10.4559 5.83733 11.7905C5.28452 13.1251 5 14.5555 5 16C5 17.4445 5.28452 18.8749 5.83733 20.2095C6.39013 21.5441 7.20038 22.7567 8.22183 23.7782C9.24327 24.7996 10.4559 25.6099 11.7905 26.1627C13.1251 26.7155 14.5555 27 16 27C17.4445 27 18.8749 26.7155 20.2095 26.1627C21.5441 25.6099 22.7567 24.7996 23.7782 23.7782C24.7996 22.7567 25.6099 21.5441 26.1627 20.2095C26.7155 18.8749 27 17.4445 27 16C27 14.5555 26.7155 13.1251 26.1627 11.7905C25.6099 10.4559 24.7996 9.24327 23.7782 8.22183C22.7567 7.20038 21.5441 6.39013 20.2095 5.83733C18.8749 5.28452 17.4445 5 16 5ZM16 8.33333C16.5523 8.33333 17 8.78105 17 9.33333V15.4648L20.5547 17.8346C21.0142 18.141 21.1384 18.7618 20.8321 19.2214C20.5257 19.6809 19.9048 19.8051 19.4453 19.4987L15.4453 16.8321C15.1671 16.6466 15 16.3344 15 16V9.33333C15 8.78105 15.4477 8.33333 16 8.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        <span className="stat-value">2.5 hrs</span>
                                        <div className="tooltip">Course Duration</div>
                                    </div>


                                    <div className="stat-item">
                                        <svg fill="none" viewBox="0 0 20 20">
                                            <path fill="#4F4F4F" d="M6.66671 1.75C7.08092 1.75 7.41671 2.08579 7.41671 2.5V3.41667H12.5834V2.5C12.5834 2.08579 12.9192 1.75 13.3334 1.75C13.7476 1.75 14.0834 2.08579 14.0834 2.5V3.41667H15C15.641 3.41667 16.2557 3.67128 16.7089 4.12449C17.1621 4.5777 17.4167 5.19239 17.4167 5.83333V15.8333C17.4167 16.4743 17.1621 17.089 16.7089 17.5422C16.2557 17.9954 15.641 18.25 15 18.25H5.00004C4.3591 18.25 3.74441 17.9954 3.2912 17.5422C2.83799 17.089 2.58337 16.4743 2.58337 15.8333V5.83333C2.58337 5.19239 2.83799 4.5777 3.2912 4.12449C3.74441 3.67128 4.3591 3.41667 5.00004 3.41667H5.91671V2.5C5.91671 2.08579 6.25249 1.75 6.66671 1.75ZM5.91671 4.91667H5.00004C4.75693 4.91667 4.52377 5.01324 4.35186 5.18515C4.17995 5.35706 4.08337 5.59022 4.08337 5.83333V8.41667H15.9167V5.83333C15.9167 5.59022 15.8201 5.35706 15.6482 5.18515C15.4763 5.01324 15.2432 4.91667 15 4.91667H14.0834V5.83333C14.0834 6.24755 13.7476 6.58333 13.3334 6.58333C12.9192 6.58333 12.5834 6.24755 12.5834 5.83333V4.91667H7.41671V5.83333C7.41671 6.24755 7.08092 6.58333 6.66671 6.58333C6.25249 6.58333 5.91671 6.24755 5.91671 5.83333V4.91667ZM15.9167 9.91667H4.08337V15.8333C4.08337 16.0764 4.17995 16.3096 4.35186 16.4815C4.52377 16.6534 4.75693 16.75 5.00004 16.75H15C15.2432 16.75 15.4763 16.6534 15.6482 16.4815C15.8201 16.3096 15.9167 16.0764 15.9167 15.8333V9.91667ZM8.41671 12.5C8.41671 12.0858 8.75249 11.75 9.16671 11.75H10C10.4143 11.75 10.75 12.0858 10.75 12.5V15C10.75 15.4142 10.4143 15.75 10 15.75C9.58583 15.75 9.25004 15.4142 9.25004 15V13.25H9.16671C8.75249 13.25 8.41671 12.9142 8.41671 12.5Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        <span className="stat-value">Completed Nov 5, 2023</span>
                                        <div className="tooltip">Completion Date</div>
                                    </div>

                                    <div className="stat-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                            <path fill="currentColor" d="M8.00008 6.33331C7.91168 6.33331 7.82689 6.36843 7.76438 6.43094C7.70187 6.49346 7.66675 6.57824 7.66675 6.66665V25.3333C7.66675 25.4217 7.70187 25.5065 7.76438 25.569C7.82689 25.6315 7.91167 25.6666 8.00008 25.6666H11.0001V6.33331H8.00008ZM8.00008 4.33331C7.38124 4.33331 6.78775 4.57915 6.35017 5.01673C5.91258 5.45432 5.66675 6.04781 5.66675 6.66665V25.3333C5.66675 25.9522 5.91258 26.5456 6.35017 26.9832C6.78775 27.4208 7.38124 27.6666 8.00008 27.6666H11.0001V29.3333C11.0001 29.8856 11.4478 30.3333 12.0001 30.3333C12.5524 30.3333 13.0001 29.8856 13.0001 29.3333V27.6666H22.6667C23.6392 27.6666 24.5718 27.2803 25.2595 26.5927C25.9471 25.9051 26.3334 24.9724 26.3334 24V7.99998C26.3334 7.02752 25.9471 6.09489 25.2595 5.40725C24.5718 4.71962 23.6392 4.33331 22.6667 4.33331H8.00008ZM13.0001 6.33331V25.6666H22.6667C23.1088 25.6666 23.5327 25.4911 23.8453 25.1785C24.1578 24.8659 24.3334 24.442 24.3334 24V7.99998C24.3334 7.55795 24.1578 7.13403 23.8453 6.82147C23.5327 6.50891 23.1088 6.33331 22.6667 6.33331H13.0001ZM16.3334 10.6666C16.3334 10.1144 16.7811 9.66665 17.3334 9.66665H20.0001C20.5524 9.66665 21.0001 10.1144 21.0001 10.6666C21.0001 11.2189 20.5524 11.6666 20.0001 11.6666H17.3334C16.7811 11.6666 16.3334 11.2189 16.3334 10.6666ZM16.3334 16C16.3334 15.4477 16.7811 15 17.3334 15H20.0001C20.5524 15 21.0001 15.4477 21.0001 16C21.0001 16.5523 20.5524 17 20.0001 17H17.3334C16.7811 17 16.3334 16.5523 16.3334 16Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        <span className="stat-value">16/16</span>
                                        <div className="tooltip">All Learning Units Completed</div>
                                    </div>
                                </div>
                            </div>



                            <div className="progress-widget">
                                <div className="widget-header">
                                    <div className="progress-text">
                                        <span>100%</span> COMPLETED
                                    </div>
                                    <div className="widget-arrow">
                                        <svg fill="none" viewBox="0 0 20 20">
                                            <path fill="#4F4F4F" d="M3.38189 10C5.24313 12.9154 7.45153 14.25 10 14.25C12.5485 14.25 14.7569 12.9154 16.6181 10C14.7569 7.0846 12.5485 5.75 10 5.75C7.45153 5.75 5.24313 7.0846 3.38189 10ZM1.85688 9.61413C3.94664 6.13119 6.65833 4.25 10 4.25C13.3417 4.25 16.0534 6.13119 18.1431 9.61413C18.2856 9.85164 18.2856 10.1484 18.1431 10.3859C16.0534 13.8688 13.3417 15.75 10 15.75C6.65833 15.75 3.94664 13.8688 1.85688 10.3859C1.71437 10.1484 1.71437 9.85164 1.85688 9.61413ZM8.29116 8.29116C8.74437 7.83795 9.35906 7.58333 10 7.58333C10.6409 7.58333 11.2556 7.83795 11.7088 8.29116C12.1621 8.74437 12.4167 9.35906 12.4167 10C12.4167 10.6409 12.1621 11.2556 11.7088 11.7088C11.2556 12.1621 10.6409 12.4167 10 12.4167C9.35906 12.4167 8.74437 12.1621 8.29116 11.7088C7.83795 11.2556 7.58333 10.6409 7.58333 10C7.58333 9.35906 7.83795 8.74437 8.29116 8.29116ZM10 9.08333C9.75689 9.08333 9.52373 9.17991 9.35182 9.35182C9.17991 9.52373 9.08333 9.75689 9.08333 10C9.08333 10.2431 9.17991 10.4763 9.35182 10.6482C9.52373 10.8201 9.75689 10.9167 10 10.9167C10.2431 10.9167 10.4763 10.8201 10.6482 10.6482C10.8201 10.4763 10.9167 10.2431 10.9167 10C10.9167 9.75689 10.8201 9.52373 10.6482 9.35182C10.4763 9.17991 10.2431 9.08333 10 9.08333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="progress-bar">
                                    <div className="progress-fill" style={{width: '100%'}}></div>
                                </div>

                                <div className="avatars-row">
                                    <div className="avatar-wrapper" data-progress="20">
                                        <img src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Early completer" />
                                        <div className="tooltip">Completed Oct 15, 2023</div>
                                    </div>
                                    <div className="avatar-wrapper" data-progress="40">
                                        <img src="https://i.ibb.co/mFj8fCs/AVATAR-couponcodefinder.jpg" alt="Graduate" />
                                        <div className="tooltip">Completed Oct 25, 2023</div>
                                    </div>
                                    <div className="avatar-wrapper" data-progress="60">
                                        <img src="https://i.ibb.co/YP71Tb6/profile9.jpg" alt="Graduate" />
                                        <div className="tooltip">Completed Oct 30, 2023</div>
                                    </div>
                                    <div className="avatar-wrapper" data-progress="80">
                                        <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="Recent graduate" />
                                        <div className="tooltip">Completed Nov 2, 2023</div>
                                    </div>
                                    <div className="avatar-wrapper active" data-progress="100">
                                        <img src="https://i.ibb.co/S3QRdcX/AVATAR-Citra-Gunasiwi-for-Paperpillar.jpg" alt="Current user" />
                                        <div className="tooltip">You Completed: Nov 5, 2023</div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className="content-header">Certificates You Claimed</div>

                    <div className="product-card w-full  w-100">
                        <div className="card-content w-full overflow-hidden">
                            <img src="https://i.ibb.co/jJ4GHXP/img1.jpg" alt="Certificate" className="product-image" />

                            <div className="product-info">
                                <div className="info-header">
                                    <div className="product-label label-certificate">
                                        <svg fill="none" viewBox="0 0 32 32">
                                            <path fill="currentColor" d="M6.66667 7.66406C5.75228 7.66406 5 8.41635 5 9.33073V22.6641C5 23.1061 5.17559 23.53 5.48816 23.8426C5.80072 24.1551 6.22464 24.3307 6.66667 24.3307H13.3333C13.8856 24.3307 14.3333 24.7784 14.3333 25.3307C14.3333 25.883 13.8856 26.3307 13.3333 26.3307H6.66667C5.69421 26.3307 4.76157 25.9444 4.07394 25.2568C3.38631 24.5692 3 23.6365 3 22.6641V9.33073C3 7.31178 4.64772 5.66406 6.66667 5.66406H25.3333C26.3058 5.66406 27.2384 6.05037 27.9261 6.738C28.6137 7.42564 29 8.35827 29 9.33073V22.6651C28.9993 23.3081 28.8296 23.9396 28.5078 24.4963C28.186 25.053 27.7235 25.5153 27.1667 25.8368C26.6884 26.1129 26.0768 25.949 25.8006 25.4707C25.5245 24.9924 25.6884 24.3808 26.1667 24.1047C26.4198 23.9586 26.63 23.7484 26.7763 23.4954C26.9226 23.2424 26.9997 22.9553 27 22.663V9.33073C27 8.8887 26.8244 8.46478 26.5118 8.15222C26.1993 7.83966 25.7754 7.66406 25.3333 7.66406H6.66667ZM7 11.9974C7 11.4451 7.44772 10.9974 8 10.9974H24C24.5523 10.9974 25 11.4451 25 11.9974C25 12.5497 24.5523 12.9974 24 12.9974H8C7.44772 12.9974 7 12.5497 7 11.9974ZM7 15.9974C7 15.4451 7.44772 14.9974 8 14.9974H12C12.5523 14.9974 13 15.4451 13 15.9974C13 16.5497 12.5523 16.9974 12 16.9974H8C7.44772 16.9974 7 16.5497 7 15.9974ZM20 16.9974C18.3431 16.9974 17 18.3405 17 19.9974C17 21.6543 18.3431 22.9974 20 22.9974C21.6569 22.9974 23 21.6543 23 19.9974C23 18.3405 21.6569 16.9974 20 16.9974ZM15 19.9974C15 17.236 17.2386 14.9974 20 14.9974C22.7614 14.9974 25 17.236 25 19.9974C25 21.3101 24.4941 22.5047 23.6667 23.3968V29.3307C23.6667 29.7095 23.4527 30.0558 23.1139 30.2252C22.7751 30.3946 22.3697 30.358 22.0667 30.1307L20 28.5807L17.9333 30.1307C17.6303 30.358 17.2249 30.3946 16.8861 30.2252C16.5473 30.0558 16.3333 29.7095 16.3333 29.3307V23.3968C15.5059 22.5047 15 21.3101 15 19.9974ZM18.3333 24.7129V27.3307L19.4 26.5307C19.7556 26.2641 20.2444 26.2641 20.6 26.5307L21.6667 27.3307V24.7129C21.1454 24.8971 20.5844 24.9974 20 24.9974C19.4156 24.9974 18.8546 24.8971 18.3333 24.7129ZM7 19.9974C7 19.4451 7.44772 18.9974 8 18.9974H10.6667C11.219 18.9974 11.6667 19.4451 11.6667 19.9974C11.6667 20.5497 11.219 20.9974 10.6667 20.9974H8C7.44772 20.9974 7 20.5497 7 19.9974Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        Certificate
                                    </div>
                                    <div className="product-author">
                                        <img src="https://i.ibb.co/2gV13mw/AVATAR-Kostis-Kapelonis.png" alt="Instructor" className="author-avatar" />
                                        <span className="author-name">David L.</span>
                                    </div>
                                </div>

                                <h3 className="product-title">Java Programming Masterclass Certificate</h3>

                                <div className="product-stats">
                                    <div className="stat-item">
                                        <svg fill="none" viewBox="0 0 20 20">
                                            <path fill="#4F4F4F" d="M6.66671 1.75C7.08092 1.75 7.41671 2.08579 7.41671 2.5V3.41667H12.5834V2.5C12.5834 2.08579 12.9192 1.75 13.3334 1.75C13.7476 1.75 14.0834 2.08579 14.0834 2.5V3.41667H15C15.641 3.41667 16.2557 3.67128 16.7089 4.12449C17.1621 4.5777 17.4167 5.19239 17.4167 5.83333V15.8333C17.4167 16.4743 17.1621 17.089 16.7089 17.5422C16.2557 17.9954 15.641 18.25 15 18.25H5.00004C4.3591 18.25 3.74441 17.9954 3.2912 17.5422C2.83799 17.089 2.58337 16.4743 2.58337 15.8333V5.83333C2.58337 5.19239 2.83799 4.5777 3.2912 4.12449C3.74441 3.67128 4.3591 3.41667 5.00004 3.41667H5.91671V2.5C5.91671 2.08579 6.25249 1.75 6.66671 1.75ZM5.91671 4.91667H5.00004C4.75693 4.91667 4.52377 5.01324 4.35186 5.18515C4.17995 5.35706 4.08337 5.59022 4.08337 5.83333V8.41667H15.9167V5.83333C15.9167 5.59022 15.8201 5.35706 15.6482 5.18515C15.4763 5.01324 15.2432 4.91667 15 4.91667H14.0834V5.83333C14.0834 6.24755 13.7476 6.58333 13.3334 6.58333C12.9192 6.58333 12.5834 6.24755 12.5834 5.83333V4.91667H7.41671V5.83333C7.41671 6.24755 7.08092 6.58333 6.66671 6.58333C6.25249 6.58333 5.91671 6.24755 5.91671 5.83333V4.91667ZM15.9167 9.91667H4.08337V15.8333C4.08337 16.0764 4.17995 16.3096 4.35186 16.4815C4.52377 16.6534 4.75693 16.75 5.00004 16.75H15C15.2432 16.75 15.4763 16.6534 15.6482 16.4815C15.8201 16.3096 15.9167 16.0764 15.9167 15.8333V9.91667ZM8.41671 12.5C8.41671 12.0858 8.75249 11.75 9.16671 11.75H10C10.4143 11.75 10.75 12.0858 10.75 12.5V15C10.75 15.4142 10.4143 15.75 10 15.75C9.58583 15.75 9.25004 15.4142 9.25004 15V13.25H9.16671C8.75249 13.25 8.41671 12.9142 8.41671 12.5Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        <span className="stat-value">Issued on Nov 5, 2023</span>
                                        <div className="tooltip">Certificate Issue Date</div>
                                    </div>
                                </div>
                            </div>


                            <div className="progress-widget">
                                <div className="widget-header">
                                    <div className="progress-text">
                                        <span style={{marginRight: '8px'}}>

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
                                    <div className="progress-fill" style={{width: '100%'}}></div>
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
        </div>
    );
};

export default MonthlyLearnerReport;
