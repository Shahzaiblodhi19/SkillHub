"use client";
import { useState } from "react";
import { PiChecksBold } from "react-icons/pi";
import { PiCheck } from "react-icons/pi";


export default function SalesHistory() {
    const [modals, setModals] = useState({ transaction: false, payout: false });
    const [activeTransaction, setActiveTransaction] = useState(null);
    const [payoutAmount, setPayoutAmount] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);


    const stats = [
        {
            name: "Sales",
            value: "527",
            percentage: "+12.5%",
            comparison: "Compared to last month",
            positive: true,
            svg: (
                <svg fill="none" viewBox="0 0 32 32">
                    <path fill="currentcolor" d="M9.33341 6.33333C8.89139 6.33333 8.46746 6.50892 8.1549 6.82148C7.84234 7.13404 7.66675 7.55797 7.66675 7.99999V20.734C8.17815 20.473 8.74858 20.3333 9.33341 20.3333H18C18.5523 20.3333 19 20.781 19 21.3333C19 21.8856 18.5523 22.3333 18 22.3333H9.33341C8.89139 22.3333 8.46746 22.5089 8.1549 22.8215C7.84234 23.134 7.66675 23.558 7.66675 24C7.66675 24.442 7.84234 24.8659 8.1549 25.1785C8.46746 25.4911 8.89139 25.6667 9.33341 25.6667H18C18.5523 25.6667 19 26.1144 19 26.6667C19 27.2189 18.5523 27.6667 18 27.6667H9.33341C8.36095 27.6667 7.42832 27.2804 6.74069 26.5927C6.05306 25.9051 5.66675 24.9725 5.66675 24V7.99999C5.66675 7.02753 6.05306 6.0949 6.74069 5.40727C7.42832 4.71964 8.36095 4.33333 9.33341 4.33333H25.3334C25.8857 4.33333 26.3334 4.78104 26.3334 5.33333V12.9998C26.3334 13.5521 25.8857 13.9998 25.3334 13.9998C24.7811 13.9998 24.3334 13.5521 24.3334 12.9998V6.33333H9.33341ZM11.0001 10.6667C11.0001 10.1144 11.4478 9.66666 12.0001 9.66666H20.0001C20.5524 9.66666 21.0001 10.1144 21.0001 10.6667C21.0001 11.2189 20.5524 11.6667 20.0001 11.6667H12.0001C11.4478 11.6667 11.0001 11.2189 11.0001 10.6667Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    <path fill="currentcolor" d="M25.3334 16C25.8857 16 26.3334 16.4477 26.3334 17V17.3333H28.0001C28.5524 17.3333 29.0001 17.781 29.0001 18.3333C29.0001 18.8856 28.5524 19.3333 28.0001 19.3333H24.6667C24.4015 19.3333 24.1472 19.4387 23.9596 19.6262C23.7721 19.8138 23.6667 20.0681 23.6667 20.3333C23.6667 20.5985 23.7721 20.8529 23.9596 21.0404C24.1472 21.228 24.4015 21.3333 24.6667 21.3333H26.0001C26.7957 21.3333 27.5588 21.6494 28.1214 22.212C28.684 22.7746 29.0001 23.5377 29.0001 24.3333C29.0001 25.129 28.684 25.892 28.1214 26.4547C27.6379 26.9381 27.0064 27.2395 26.3334 27.3148V27.6667C26.3334 28.219 25.8857 28.6667 25.3334 28.6667C24.7811 28.6667 24.3334 28.219 24.3334 27.6667V27.3333H22.6667C22.1145 27.3333 21.6667 26.8856 21.6667 26.3333C21.6667 25.781 22.1145 25.3333 22.6667 25.3333H26.0001C26.2653 25.3333 26.5196 25.228 26.7072 25.0404C26.8947 24.8529 27.0001 24.5985 27.0001 24.3333C27.0001 24.0681 26.8947 23.8138 26.7072 23.6262C26.5196 23.4387 26.2653 23.3333 26.0001 23.3333H24.6667C23.8711 23.3333 23.108 23.0173 22.5454 22.4547C21.9828 21.892 21.6667 21.129 21.6667 20.3333C21.6667 19.5377 21.9828 18.7746 22.5454 18.212C23.0289 17.7285 23.6604 17.4271 24.3334 17.3519V17C24.3334 16.4477 24.7811 16 25.3334 16Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
            ),
        },
        {
            name: "Earnings",
            value: "$5,795",
            percentage: "+28.0%",
            comparison: "Compared to last month",
            positive: true,
            svg: (
                <svg fill="none" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
            ),
        },
        {
            name: "Total Paid",
            value: "$3,555",
            percentage: "",
            comparison: "All Time",
            positive: false,
            svg: (
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 4.875a.75.75 0 01.648.372l1.994 3.414 3.893.85a.75.75 0 01.395 1.238l-2.646 2.905.414 3.892a.75.75 0 01-1.042.768L12 16.744l-3.656 1.57a.75.75 0 01-1.042-.768l.414-3.892L5.07 10.75a.75.75 0 01.395-1.238l3.893-.85 1.994-3.414A.75.75 0 0112 4.875zm0 2.237l-1.512 2.59a.75.75 0 01-.488.354l-2.946.643 1.998 2.195a.75.75 0 01.191.584L8.93 16.43l2.775-1.192a.75.75 0 01.592 0l2.775 1.192-.314-2.952a.75.75 0 01.191-.584l1.998-2.195L14 10.056a.75.75 0 01-.488-.355L12 7.112z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
            ),
        },
        {
            name: "Unpaid",
            value: "$455",
            percentage: "+15.0%",
            comparison: "Includes $275 unmatured",
            positive: true,
            svg: (
                <svg fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3 1h18a3 3 0 0 1 3 3v8H2v5a1 1 0 0 0 1 1h7v2H3a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3ZM2 4v2h20V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm11.8 10.81a2.7 2.7 0 0 1 4.2.43 2.7 2.7 0 0 1 4.2-.43 2.8 2.8 0 0 1 0 3.92L18 23l-4.2-4.27a2.8 2.8 0 0 1 0-3.92Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
            ),
        },
    ];
    const sections = [
        {
            header: "Today",
            transactions: [
                {
                    id: "1",
                    type: "course",
                    title: "Machine Learning Fundamentals",
                    image: "https://i.ibb.co/640kJN2/c1.jpg",
                    amount: 799.0,
                    status: "Completed",
                    payout: "PAID",
                },
            ],
        },
        {
            header: "Yesterday",
            transactions: [
                {
                    id: "2",
                    type: "certificate",
                    type2: "community",
                    title: "Full Stack Development Bundle",
                    image: "https://i.ibb.co/NKffPZQ/c4.jpg",
                    amount: 499.0,
                    status: "Completed",
                    payout: "PENDING",
                },
            ],
        },
        {
            header: "Past Week",
            transactions: [
                {
                    id: "3",
                    type: "event",
                    title: "Advanced React Workshop 2025",
                    image: "https://i.ibb.co/640kJN2/c1.jpg",
                    amount: -199.0,
                    status: "Refunded",
                    payout: "NOT ELIGIBLE",
                },
                {
                    id: "4",
                    type: "subscription",
                    title: "Monthly Pro Access - December 2024",
                    image: "https://i.ibb.co/hBpWGQ7/c3.jpg",
                    amount: 895.0,
                    status: "Completed",
                    payout: "REQUESTED",
                },
            ],
        },
        {
            header: "Past Month",
            transactions: [
                {
                    id: "5",
                    type: "bundle",
                    type2: "premiumcertificate",
                    title: "Ultimate Developer Bundle 2025",
                    image: "https://i.ibb.co/NKffPZQ/c4.jpg",
                    amount: 1299.0,
                    status: "Completed",
                    payout: "REJECTED",
                },
            ],
        },
        {
            header: "Today",
            transactions: [
                {
                    id: "1",
                    type: "course",
                    title: "Machine Learning Fundamentals",
                    image: "https://i.ibb.co/640kJN2/c1.jpg",
                    amount: 799.0,
                    status: "Completed",
                    payout: "PAID",
                },
            ],
        },
        {
            header: "Yesterday",
            transactions: [
                {
                    id: "2",
                    type: "certificate",
                    type2: "community",
                    title: "Full Stack Development Bundle",
                    image: "https://i.ibb.co/NKffPZQ/c4.jpg",
                    amount: 499.0,
                    status: "Completed",
                    payout: "PENDING",
                },
            ],
        },
    ];

    const paginatedSections = sections.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(sections.length / itemsPerPage);



    const [currentPage2, setCurrentPage2] = useState(1);
    const [itemsPerPage2, setitemsPerPage2] = useState(2)

    const payouts = [
        { id: "#PO-2024-001", amount: 2450.0, type: "Payout", status: "PAID", unpaid: 0.0, paid: 2450.0 },
        { id: "#PO-2024-002", amount: 1850.0, type: "Request", status: "PENDING", unpaid: 1850.0, paid: 0.0 },
        { id: "#PO-2024-003", amount: 1250.0, type: "Payout", status: "PAID", unpaid: 0.0, paid: 1250.0 },
        { id: "#PO-2024-004", amount: 975.0, type: "Request", status: "PENDING", unpaid: 975.0, paid: 0.0 },
        { id: "#PO-2024-005", amount: 3000.0, type: "Payout", status: "PAID", unpaid: 0.0, paid: 3000.0 },
        { id: "#PO-2024-006", amount: 2100.0, type: "Request", status: "PENDING", unpaid: 2100.0, paid: 0.0 },
    ];

    const totalPages2 = Math.ceil(payouts.length / itemsPerPage2);
    const paginatedPayouts = payouts.slice(
        (currentPage2 - 1) * itemsPerPage2,
        currentPage2 * itemsPerPage2
    );
    return (
        <div className="container-fluid saleshistory">
            <h2 className="dashboard-title fw-bold">Sales History</h2>
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-header">
                            <div className="stat-icon">{stat.svg}</div>
                        </div>
                        <div className="stat-name">{stat.name}</div>
                        <div className="stat-value fw-bold" style={{ fontSize: '25px' }}>
                            {stat.value}
                            <span
                                className={`stat-percentage ${stat.percentage.includes("+") ? "positive" : ""
                                    }`}
                            >
                                {stat.percentage}
                            </span>
                        </div>
                        <div className="stat-comparison">{stat.comparison}</div>
                    </div>
                ))}
            </div>
            <div className="history-section">
                <div className="section-header">
                    <h2 className="section-title">Sales History</h2>
                </div>

                {paginatedSections.map((section, index) => (
                    <div key={index} className="section">
                        <div className="timeframe flex items-center justify-between">
                            <span className="timeframe-text">{section.header}</span>
                            <span className="timeframe-amount">
                                ${section.transactions.reduce((acc, t) => acc + t.amount, 0).toFixed(2)}
                            </span>
                            <span className="timeframe-transactions">
                                {section.transactions.length} transactions
                            </span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-max history-table">
                                <tbody>
                                    {section.transactions.map((transaction) => (
                                        <tr
                                            key={transaction.id}
                                            className="transaction-row"
                                        >
                                            <td>
                                                <div className="product-cell">
                                                    <img
                                                        src={transaction.image}
                                                        alt={transaction.title}
                                                        className="product-image"
                                                    />
                                                    <div className="product-info">
                                                        <div className="product-labels">
                                                            <div
                                                                className={`product-type ${transaction.type}`}
                                                            >
                                                                {transaction.type === 'course' ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                </svg> : transaction.type === 'subscription' ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                                    <path fill="currentColor" d="M17 12.7992V13.5992C17.4418 13.5992 17.8 13.241 17.8 12.7992H17ZM17 8.39922H17.8C17.8 7.95739 17.4418 7.59922 17 7.59922V8.39922ZM4.96739 4.12628C4.59574 4.3652 4.48814 4.86017 4.72706 5.23183C4.96598 5.60348 5.46095 5.71108 5.83261 5.47216L4.96739 4.12628ZM11 1.19922L11.6315 0.708066C11.3773 0.381231 10.9157 0.302372 10.5674 0.526276L11 1.19922ZM13.1685 5.29037C13.4398 5.63913 13.9424 5.70196 14.2912 5.4307C14.6399 5.15945 14.7027 4.65682 14.4315 4.30807L13.1685 5.29037ZM17 11.9992H14.4V13.5992H17V11.9992ZM14.4 9.19922H17V7.59922H14.4V9.19922ZM16.2 8.39922V12.7992H17.8V8.39922H16.2ZM13 10.5992C13 9.82602 13.6268 9.19922 14.4 9.19922V7.59922C12.7431 7.59922 11.4 8.94237 11.4 10.5992H13ZM14.4 11.9992C13.6268 11.9992 13 11.3724 13 10.5992H11.4C11.4 12.2561 12.7431 13.5992 14.4 13.5992V11.9992ZM5.83261 5.47216L11.4326 1.87216L10.5674 0.526276L4.96739 4.12628L5.83261 5.47216ZM10.3685 1.69037L13.1685 5.29037L14.4315 4.30807L11.6315 0.708066L10.3685 1.69037ZM1.8 5.59922H15.4V3.99922H1.8V5.59922ZM15.4 15.9992H1.8V17.5992H15.4V15.9992ZM1.8 15.9992V5.59922H0.2V15.9992H1.8ZM1.8 15.9992H1.8H0.2C0.2 16.8829 0.916343 17.5992 1.8 17.5992V15.9992ZM15.4 15.9992H15.4V17.5992C16.2837 17.5992 17 16.8829 17 15.9992H15.4ZM15.4 5.59922H15.4H17C17 4.71556 16.2837 3.99922 15.4 3.99922V5.59922ZM1.8 3.99922C0.916344 3.99922 0.2 4.71556 0.2 5.59922H1.8H1.8V3.99922ZM15.4 13.3992V15.9992H17V13.3992H15.4ZM15.4 5.59922V7.69922H17V5.59922H15.4Z"></path>
                                                                </svg> : transaction.type === 'certificate' ? <svg viewBox="0 0 24 24" fill="none">
                                                                    <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                    <path d="M7 13.5V21L12 19L17 21V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                </svg> : transaction.type === 'event' ? <svg fill="none" viewBox="0 0 24 24">
                                                                    <path fill="currentColor" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                </svg> : transaction.type === 'bundle' ? <svg fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M3 1h18a3 3 0 0 1 3 3v8H2v5a1 1 0 0 0 1 1h7v2H3a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3ZM2 4v2h20V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm11.8 10.81a2.7 2.7 0 0 1 4.2.43 2.7 2.7 0 0 1 4.2-.43 2.8 2.8 0 0 1 0 3.92L18 23l-4.2-4.27a2.8 2.8 0 0 1 0-3.92Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg> : ''}
                                                                <span>
                                                                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                                                                </span>
                                                            </div>
                                                            {transaction.type2 && (
                                                                <div
                                                                    className={`product-type ${transaction.type2}`}
                                                                >
                                                                    {transaction.type2 === 'community' ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                                        <path fill="currentColor" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                        <path fill="currentColor" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                    </svg> :
                                                                        transaction.type2 === 'premiumcertificate' ?
                                                                            <svg viewBox="0 0 24 24" fill="none">
                                                                                <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                                <path d="M7 13.5V21L12 19L17 21V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                                <path d="M13 7L11 11L15 9L9 9L13 7Z" fill="currentColor"></path>
                                                                            </svg> : ''}
                                                                    <span>
                                                                        {transaction.type2 === "premiumcertificate"
                                                                            ? "Premium Certificate"
                                                                            : transaction.type2.charAt(0).toUpperCase() + transaction.type2.slice(1)}
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <span className="product-title">
                                                            {transaction.title}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="column-header">Amount</div>
                                                <div className="amount">
                                                    ${transaction.amount.toFixed(2)}
                                                </div>
                                            </td>
                                            <td>
                                                <div class="column-header">Status</div>
                                                <div
                                                    className={`status-badge ${transaction.status.toLowerCase()}`}
                                                >
                                                    <span class="icon">
                                                        {transaction.status === 'Completed' ?
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                <path d="M1 6L4.5 9.5L11 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                                            </svg>
                                                            : transaction.status === 'Refunded' ?
                                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                    <path d="M2 10L10 2M2 2L10 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                                                                </svg> : ''}
                                                    </span>
                                                    {transaction.status}
                                                </div>
                                            </td>
                                            <td>
                                                <div class="column-header">Payout</div>
                                                <div
                                                    className={`payout-status ${transaction.payout.toLowerCase()}`}
                                                >
                                                    {transaction.payout}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
                <div className="container-products pt-4">
                    <div className='footer mt-1 p-0 flex flex-col md:flex-row gap-4 md:gap-0'>
                        <div className='footer-left'>
                            <div className='footer-text'>
                                Showing <strong>{(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, sections.length)}</strong> of <strong>{sections.length}</strong> products
                            </div>
                            <div className="items-per-page">
                                <div className="items-dropdown">
                                    Items Per Page: {itemsPerPage}
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none">
                                        <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="items-menu">
                                    {[4, 8, 12].map((value) => (
                                        <div
                                            className="items-menu-item"
                                            onClick={() => setItemsPerPage(value)}
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

            <div className="history-section">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Payout History</h2>
                    <button className="px-3 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600" style={{ fontSize: '13px' }}>
                        Request Payout
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-max border-collapse">
                        <thead className="bg-gray-100 border-b">
                            <tr>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Amount</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Type</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Status</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Payout ID</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Unpaid</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Paid</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedPayouts.map((payout) => (
                                <tr key={payout.id} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4 text-gray-800">${payout.amount.toFixed(2)}</td>
                                    <td className="py-3 px-4 text-gray-800">
                                        <div
                                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${payout.type === "Payout"
                                                ? "bg-green-100 text-green-900"
                                                : "bg-yellow-100 text-yellow-900"
                                                }`}
                                            style={{ fontWeight: '500', fontSize: '13px' }}
                                        >
                                            {payout.type === "Payout" ? (
                                                <PiChecksBold />
                                            ) : <PiCheck />}
                                            {payout.type}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-gray-800">
                                        <div
                                            className={`inline-block px-3 py-1 rounded-full text-sm ${payout.status === "PAID"
                                                ? "payout-status paid"
                                                : "payout-status requested"
                                                }`}
                                        >
                                            {payout.status}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-gray-800">{payout.id}</td>
                                    <td className="py-3 px-4 text-gray-800">${payout.unpaid.toFixed(2)}</td>
                                    <td className="py-3 px-4 text-gray-800">${payout.paid.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="container-products pt-4">
                    <div className='footer mt-1 p-0 flex flex-col md:flex-row gap-4 md:gap-0'>
                        <div className='footer-left'>
                            <div className='footer-text'>
                                Showing <strong>{(currentPage2 - 1) * itemsPerPage2 + 1}-{Math.min(currentPage2 * itemsPerPage2, sections.length)}</strong> of <strong>{sections.length}</strong> products
                            </div>
                            <div className="items-per-page">
                                <div className="items-dropdown">
                                    Items Per Page: {itemsPerPage2}
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none">
                                        <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="items-menu">
                                    {[2, 4, 8].map((value) => (
                                        <div
                                            className="items-menu-item"
                                            onClick={() => setitemsPerPage2(value)}
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
                                disabled={currentPage2 === 1}
                                onClick={() => setCurrentPage2((prev) => Math.max(prev - 1, 1))}
                                className="page-button"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            {[...Array(totalPages2)].map((_, idx) => (
                                <button
                                    key={idx}
                                    className={currentPage2 === idx + 1 ? 'active page-button' : 'page-button '}
                                    onClick={() => setCurrentPage2(idx + 1)}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                            <button
                                disabled={currentPage2 === totalPages2}
                                onClick={() => setCurrentPage2((prev) => Math.min(prev + 1, totalPages2))}
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
    );
}
