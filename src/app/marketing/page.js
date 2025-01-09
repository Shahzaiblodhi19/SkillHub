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
    const deliveryData = {
        percentage: [85, 65, 92, 78, 88, 72, 95], // Mon-Sun delivery percentages
        count: [8500, 6500, 9200, 7800, 8800, 7200, 9500], // Mon-Sun delivery counts
    };

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

    const updateDeliveryView = (view) => {
        setCurrentView(view);
    };


    return (
        <div className="container-fluid marketing-page">
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

            <div className='email-portion'>
                <div className="dashboard">
                    {/* Email Analytics Column */}
                    <div className="column column-wide">
                        <div className="column-header">
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
                        <div className="column-header">
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
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="1.5"
                                        stroke="#13c4cc"
                                        d="M2.66659 3.1665H13.3333C14.0666 3.1665 14.6666 3.7665 14.6666 4.49984V12.4998C14.6666 13.2332 14.0666 13.8332 13.3333 13.8332H2.66659C1.93325 13.8332 1.33325 13.2332 1.33325 12.4998V4.49984C1.33325 3.7665 1.93325 3.1665 2.66659 3.1665Z"
                                    ></path>
                                    <path
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="1.5"
                                        stroke="#13c4cc"
                                        d="M14.6666 4.5L7.99992 9.16667L1.33325 4.5"
                                    ></path>
                                </svg>
                            </div>
                        </div>

                        <div className="delivery-controls">
                            <button
                                className={`control-button ${currentView === 'percentage' ? 'active' : ''}`}
                                onClick={() => updateDeliveryView('percentage')}
                            >
                                Percentage
                            </button>
                            <button
                                className={`control-button ${currentView === 'count' ? 'active' : ''}`}
                                onClick={() => updateDeliveryView('count')}
                            >
                                Count
                            </button>
                        </div>

                        <div className="delivery-grid-container">
                            <div className="delivery-labels">
                                {currentView === 'percentage'
                                    ? [100, 80, 60, 40, 20].map((val) => <span key={val}>{val}%</span>)
                                    : [10000, 8000, 6000, 4000, 2000].map((val) => <span key={val}>{val.toLocaleString()}</span>)}
                            </div>

                            <div className="delivery-grid">
                                {/* Render grid dynamically */}
                            </div>

                            <div className="day-labels">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                                    <span key={day}>{day}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
