"use client";
import { useState, useEffect, useContext } from "react";
import Image from 'next/image'; // Import Next.js Image component
import Logo from '../assets/logo.svg';
import Link from "next/link";
import { MyContext } from "../layout";

export default function Sidebar({ schoolName, isSidebarActive, setisSidebarActive, selectedEmoji, isSidebarOpen, setIsSidebarOpen,
    setIsSchoolModal, isSchoolModal, collectionModal, SetCollectionModal, setPlayListModal, PlayListModal }) {
    const [isSchoolOpen, setSchoolOpen] = useState(true);
    const context = useContext(MyContext)
    const [isCollectionOpen, setCollectionOpen] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
    const [SidebarLinkActive, setSidebarLinkActive] = useState('Dashboard');
    const [activeItem, setActiveItem] = useState(""); // Set initial active item
    const [activeSchool, setActiveSchool] = useState(""); // Set initial active item
    const [activeCollection, setActiveCollection] = useState("Collection A"); // Set initial active item

    const handleToggle = () => {
        setIsOpen(!isOpen);
        setSidebarLinkActive('none')
    };
    const handleToggle2 = () => {
        setSchoolOpen(!isSchoolOpen);
        setSidebarLinkActive('none')
    };
    const handleActiveLink = (item) => {
        context.setActiveFilter(item);
        setSidebarLinkActive('')
    }
    const handleToggle3 = () => {
        setCollectionOpen(!isCollectionOpen);
        setSidebarLinkActive('none')
    };
    const handleSetActive = (item) => {
        setActiveItem(item);
        setActiveSchool(item)
        setActiveCollection(item)
    };
    const handleSidebarLinks = (links) => {
        setSidebarLinkActive(links);
        context.setActiveFilter('')
        if (links === 'Playlist') {
            setPlayListModal(!PlayListModal)
        } else {
            setPlayListModal(false)
        }
        if (PlayListModal === true) {
            setSidebarLinkActive('')
        } else {
        }
    }
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        // Check if window is defined (important for SSR)
        if (typeof window !== "undefined") {
            const handleResize = () => {
                setIsMobileView(window.innerWidth <= 1220);
            };

            // Initial check
            handleResize();

            // Event listener for resize
            window.addEventListener("resize", handleResize);

            // Cleanup on unmount
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);
    // Map each item to its respective SVG
    const itemIcons = {
        'School A': (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                <path d="M13.7016 3.90303L13.7017 3.90311C13.8141 3.98629 13.9 4.14389 13.9 4.33344V15.5H11.3V11.5C11.3 10.9985 10.923 10.5 10.35 10.5H7.65C7.07698 10.5 6.7 10.9985 6.7 11.5V15.5H4.1V4.33321C4.1 4.33318 4.1 4.33316 4.1 4.33313C4.10003 4.24198 4.12041 4.15429 4.15698 4.07838C4.19351 4.00256 4.2436 3.94362 4.29839 3.90304L4.2984 3.90303L8.79821 0.569727C8.79827 0.569685 8.79833 0.569643 8.79838 0.569601C8.86339 0.52155 8.93348 0.5 9 0.5C9.06658 0.5 9.13673 0.521587 9.20178 0.569727L13.7016 3.90303ZM0.5 15.5V7C0.5 6.6731 0.727423 6.5 0.9 6.5H2.2V15.5L0.5 15.5ZM6.25 5.5C6.25 7.10591 7.43304 8.5 9 8.5C10.567 8.5 11.75 7.10591 11.75 5.5C11.75 3.89409 10.567 2.5 9 2.5C7.43304 2.5 6.25 3.89409 6.25 5.5ZM15.8 15.5V6.5H17.1C17.2726 6.5 17.5 6.6731 17.5 7V15.5L15.8 15.5Z" fill="#954039" stroke="#43080A" />
            </svg>
        ),
        'School B': (
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                <path d="M9.23614 12.8417L9.5 13.0057L9.76386 12.8417L14.5 9.89928V12.3961L9.5 15.4159L4.5 12.3961V9.89928L9.23614 12.8417ZM0.9814 5.62477L9.5 0.581068L18.4907 5.90431V12.5H17.7112V6.6838V5.80669L16.9565 6.25356L9.5 10.6685L0.9814 5.62477Z" fill="#777775" stroke="#5D5741" />
            </svg>
        ),
        'School C': (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                <path d="M7.20003 15C7.20003 16.1045 6.79323 17 5.65717 17H2.05717C2.84913e-05 17 2.84913e-05 10 2.05717 10H5.65717C6.79323 10 7.20003 10.8955 7.20003 12V15Z" fill="#553788" />
                <path d="M16.9714 16H16.4572V11H16.9714C17.1078 11 17.2387 10.9473 17.3351 10.8536C17.4315 10.7598 17.4857 10.6326 17.4857 10.5C17.4857 10.3674 17.4315 10.2402 17.3351 10.1464C17.2387 10.0527 17.1078 10 16.9714 10H4.62859C2.57144 10 2.57144 17 4.62859 17H16.9714C17.1078 17 17.2387 16.9473 17.3351 16.8536C17.4315 16.7598 17.4857 16.6326 17.4857 16.5C17.4857 16.3674 17.4315 16.2402 17.3351 16.1464C17.2387 16.0527 17.1078 16 16.9714 16Z" fill="#9266CC" />
                <path d="M17.0599 16H5.14287C4.1143 16 4.1143 11 5.14287 11H17.0599C17.6277 11 17.6277 16 17.0599 16Z" fill="#CCD6DD" />
                <path d="M5.40003 12H17.4086C17.3392 11.4125 17.2234 11 17.0599 11H5.14287C4.29378 11 4.1462 14.404 4.69906 15.594C4.49746 14.1145 4.73094 12 5.40003 12Z" fill="#99AAB5" />
                <path d="M5.65714 3.5C5.65714 4.03043 5.44041 4.53914 5.05462 4.91422C4.66883 5.28929 4.14559 5.5 3.6 5.5H1.54286C-0.514286 5.5 -0.514286 0 1.54286 0H3.6C4.14559 0 4.66883 0.210714 5.05462 0.585787C5.44041 0.96086 5.65714 1.46957 5.65714 2V3.5Z" fill="#226699" />
                <path d="M15.4286 4.5H14.9143V1H15.4286C15.565 1 15.6958 0.947322 15.7923 0.853554C15.8887 0.759786 15.9429 0.632609 15.9429 0.5C15.9429 0.367392 15.8887 0.240215 15.7923 0.146447C15.6958 0.0526784 15.565 0 15.4286 0H3.08575C1.02861 0 1.02861 5.5 3.08575 5.5H15.4286C15.565 5.5 15.6958 5.44732 15.7923 5.35356C15.8887 5.25979 15.9429 5.13261 15.9429 5C15.9429 4.86739 15.8887 4.74022 15.7923 4.64645C15.6958 4.55268 15.565 4.5 15.4286 4.5Z" fill="#55ACEE" />
                <path d="M15.5171 4.49999H3.60003C2.57146 4.49999 2.57146 0.999993 3.60003 0.999993H15.5171C16.0848 0.999993 16.0848 4.49999 15.5171 4.49999Z" fill="#CCD6DD" />
                <path d="M3.6 1.99999H15.9043C15.8457 1.43749 15.7171 0.999993 15.5171 0.999993H3.60003C2.98649 0.999993 2.74166 2.24449 2.86046 3.24999C2.94069 2.57099 3.18498 1.99999 3.6 1.99999Z" fill="#99AAB5" />
                <path d="M9.77143 8C9.77143 8.53043 9.5547 9.03914 9.16891 9.41421C8.78312 9.78928 8.25988 10 7.71429 10H2.57143C0.514291 10 0.514291 5.5 2.57143 5.5H7.71429C8.25988 5.5 8.78312 5.71071 9.16891 6.08578C9.5547 6.46085 9.77143 6.96956 9.77143 7.5V8Z" fill="#F4900C" />
                <path d="M17.4857 9H16.9714V6.5H17.4857C17.6221 6.5 17.7529 6.44732 17.8494 6.35355C17.9458 6.25978 18 6.1326 18 6C18 5.86739 17.9458 5.74021 17.8494 5.64644C17.7529 5.55267 17.6221 5.5 17.4857 5.5H7.2C5.14286 5.5 5.14286 10 7.2 10H17.4857C17.6221 10 17.7529 9.94732 17.8494 9.85355C17.9458 9.75978 18 9.63261 18 9.5C18 9.36739 17.9458 9.24021 17.8494 9.14644C17.7529 9.05267 17.6221 9 17.4857 9Z" fill="#FFAC33" />
                <path d="M17.5742 9H7.71428C6.68571 9 6.68571 6.5 7.71428 6.5H17.5742C18.1419 6.5 18.1419 9 17.5742 9Z" fill="#CCD6DD" />
                <path d="M7.71428 7.5H17.9918C17.9583 6.969 17.82 6.5 17.5742 6.5H7.71428C7.05908 6.5 6.82303 7.5135 7.00303 8.25C7.10486 7.8305 7.34091 7.5 7.71428 7.5Z" fill="#99AAB5" />
            </svg>
        )
    };
    return (
        <div className="h-screen = flex flex-col justify-between " >
            <div className="border-r h-full flex flex-col">
                {/* Logo */}

                <div className="pt-3 pl-4 py-4 pr-2 pb-2 d-flex align-items-center justify-content-between logo-wrapper" style={{ borderBottom: '1px solid #F0F0F0' }}>
                    <Image className="logo-full" src={Logo} alt="logo" width={115} height={35} />
                    <svg className="logo-half" style={{ display: 'none' }} width={100} height={80} viewBox="0 0 390 265" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                        <g transform="matrix(0.71675531,0,0,-0.71675531,0,176.08954)"><g transform="scale(0.1)"><path d="m 4133.03,284.809 c -441.1,0 -806.91,322.222 -875.01,744.121 63.51,393.12 385.52,699.62 786.07,739.55 -389.83,-175.01 -606.34,-611.7 -492.19,-1037.769 70.49,-263 308.84,-445.902 581.13,-445.902" style={{ fill: '#4FBAE9', fillOpacity: 1, fillRule: 'evenodd', stroke: 'none' }}></path><path d="m 4044.06,1768.48 c 29.26,2.9 58.93,4.4 88.97,4.4 91.83,0 183.07,-14.27 270.51,-42.25 -54.31,-155.1 -131.89,-253.82 -207.61,-245.83 -20.9,2.16 -41.9,3.28 -62.9,3.28 -332.27,0 -601.62,-269.37 -601.62,-601.631 0,-46.301 5.23,-91.367 15.14,-134.687 -101.62,419.298 114.12,844.558 497.51,1016.718" style={{ fill: '#F9871A', fillOpacity: 1, fillRule: 'evenodd', stroke: 'none' }}></path><path d="m 4535.59,1333.56 c -56.56,50.94 -35.13,174.62 43.77,318.77 272.53,-158.8 440.14,-450.46 440.14,-765.881 C 5019.5,396.879 4622.62,0 4133.03,0 c -489.56,0 -886.45,396.879 -886.45,886.449 0,48.481 3.96,96.031 11.45,142.401 68.13,-421.85 433.93,-744.041 875,-744.041 332.29,0 601.64,269.351 601.64,601.64 0,170.501 -72.35,333.011 -199.08,447.111" style={{ fill: '#003351', fillOpacity: 1, fillRule: 'evenodd', stroke: 'none' }}></path></g></g>
                    </svg>

                    <li className={`nav-item list-none sidebaropentoggle`} style={{ borderRadius: '4px' }} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <a
                            href="#"
                            className="flex items-center py-2"
                        >
                            <svg onClick={() => setIsSidebarOpen(false)} width={17} height={17} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 424c0 13.3 10.7 24 24 24s24-10.7 24-24L48 88c0-13.3-10.7-24-24-24S0 74.7 0 88L0 424zM135.6 238.5c-4.8 4.5-7.6 10.9-7.6 17.5s2.7 12.9 7.6 17.5l136 128c9.7 9.1 24.8 8.6 33.9-1s8.6-24.8-1-33.9L212.5 280l83.5 0 128 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-128 0-83.5 0 91.9-86.5c9.7-9.1 10.1-24.3 1-33.9s-24.3-10.1-33.9-1l-136 128z" fill="#4F4F4F"></path></svg>
                        </a>
                    </li>
                </div>

                <div className="sidebar">
                    {/* Menu Items */}
                    <nav className="flex-grow">
                        <ul className="space-y-2 mx-3 mt-2">
                            {/* Dashboard */}
                            <li className={`nav-item ${SidebarLinkActive === 'Dashboard' ? 'active' : ''}`} onClick={() => handleSidebarLinks('Dashboard')}>
                                <Link
                                    href="/"
                                    className="flex items-center p-2 "
                                >
                                    <svg style={{ marginRight: '10px' }} width="18" height="18" fill="none" viewBox="0 0 24 24">
                                        <path fill="#4B4B4B" d="M11.4697 2.46967C11.7626 2.17678 12.2375 2.17678 12.5304 2.46967L21.5304 11.4697C21.7449 11.6842 21.809 12.0068 21.6929 12.287C21.5768 12.5673 21.3034 12.75 21 12.75H19.75V19C19.75 19.7293 19.4603 20.4288 18.9446 20.9445C18.4288 21.4603 17.7294 21.75 17 21.75H7.00002C6.27068 21.75 5.5712 21.4603 5.05548 20.9445C4.53975 20.4288 4.25002 19.7293 4.25002 19V12.75H3.00002C2.69668 12.75 2.4232 12.5673 2.30711 12.287C2.19103 12.0068 2.25519 11.6842 2.46969 11.4697L11.4697 2.46967ZM9.75002 20.25H14.25V15C14.25 14.6685 14.1183 14.3505 13.8839 14.1161C13.6495 13.8817 13.3315 13.75 13 13.75H11C10.6685 13.75 10.3506 13.8817 10.1161 14.1161C9.88172 14.3505 9.75002 14.6685 9.75002 15V20.25ZM15.75 20.25V15C15.75 14.2707 15.4603 13.5712 14.9446 13.0555C14.4288 12.5397 13.7294 12.25 13 12.25H11C10.2707 12.25 9.5712 12.5397 9.05548 13.0555C8.53975 13.5712 8.25002 14.2707 8.25002 15V20.25H7.00002C6.6685 20.25 6.35056 20.1183 6.11614 19.8839C5.88172 19.6495 5.75002 19.3315 5.75002 19V12C5.75002 11.5858 5.41424 11.25 5.00002 11.25H4.81068L12 4.06066L19.1894 11.25H19C18.5858 11.25 18.25 11.5858 18.25 12V19C18.25 19.3315 18.1183 19.6495 17.8839 19.8839C17.6495 20.1183 17.3315 20.25 17 20.25H15.75Z" clipRule="evenodd" fillRule="evenodd"></path>
                                    </svg>
                                    <span>Dashboard</span>
                                </Link>
                            </li>

                            {/* My Products */}
                            <li className={`nav-item ${isOpen && isSidebarOpen === true ? 'dropdownActive' : ''}`}>
                                <button
                                    onClick={handleToggle}
                                    className="flex items-center justify-between w-full p-2"
                                >
                                    <div className="flex items-center">
                                        <svg style={{ marginRight: "13px" }} width={16} height={16} viewBox="0 0 24 24"><path opacity=".12" d="m12 12 9-5v9.059c0 .342 0 .514-.05.666a1 1 0 0 1-.215.364c-.109.119-.258.202-.558.368l-7.4 4.111c-.284.158-.425.237-.575.267a1 1 0 0 1-.403 0c-.15-.03-.292-.11-.576-.267l-7.4-4.11c-.3-.167-.45-.25-.558-.369a1 1 0 0 1-.215-.364C3 16.573 3 16.401 3 16.06V7z"></path><path d="M11.597 1.185a2 2 0 0 1 .806 0c.307.063.582.217.8.34l.06.032 7.4 4.112.063.034c.23.128.522.288.745.53.193.21.339.458.428.728.103.313.102.644.101.908v8.262c.001.264.002.595-.101.908-.09.27-.235.518-.428.728-.223.242-.514.402-.745.53l-.063.034-7.4 4.111-.06.034c-.218.122-.493.276-.8.339-.266.055-.54.055-.806 0-.307-.063-.582-.217-.8-.34l-.06-.033-7.4-4.11q-.03-.018-.063-.035c-.23-.128-.522-.288-.745-.53a2 2 0 0 1-.428-.728c-.103-.313-.102-.645-.101-.908V7.869c-.001-.264-.002-.595.101-.908a2 2 0 0 1 .428-.728c.223-.242.514-.402.745-.53l.063-.034 7.4-4.112.06-.033c.218-.122.493-.276.8-.34M12 3.149l-.005.002c-.057.028-.135.07-.286.155L5.059 7 12 10.856 18.94 7l-6.649-3.694A7 7 0 0 0 12 3.149m8 5.55v7.36a7 7 0 0 1-.005.35l-.005.003a7 7 0 0 1-.299.171L13 20.301v-7.713zm-9 3.89-7-3.89v7.36c0 .182 0 .276.005.344v.006l.005.003c.057.036.139.082.299.171L11 20.3z" fillRule="evenodd"></path></svg>
                                        <span>My Products</span>
                                    </div>
                                    <span>{isOpen ?
                                        <svg className="withoutstroke" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
                                            <path d="M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11Z" fill="#E8E9ED" />
                                            <path d="M11.5 9.54513L15.778 14L17 12.7274L11.5 7L6 12.7274L7.22203 14L11.5 9.54513Z" fill="black" />
                                        </svg>
                                        :
                                        <svg className="withoutstroke" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
                                            <path d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11Z" fill="#E8E9ED" />
                                            <path d="M10.5 12.4549L6.22203 8L5 9.27256L10.5 15L16 9.27256L14.778 8L10.5 12.4549Z" fill="black" />
                                        </svg>}</span>
                                </button>
                            </li>

                            {isSidebarOpen === false ? '' : isOpen && (
                                <ul className="ml-7 mt-2 ">
                                    {["All Products", "Schools", "Courses", "Sessions", "Communities", "Bundles", "Subscriptions"].map((item) => (
                                        <li
                                            key={item}
                                            className={`p-2 cursor-pointer ${context.activeFilter === item
                                                ? "dropdown-link-active"
                                                : "dropdown-link"
                                                }`}
                                            onClick={() => handleActiveLink(item)}
                                        >
                                            {<Link href="/products">
                                                {item}
                                            </Link>}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <li className={`nav-item ${SidebarLinkActive === 'Sales History' ? 'active' : ''}`} onClick={() => handleSidebarLinks('Sales History')}>
                                <Link
                                    href="/saleshistory"
                                    className="flex items-center p-2 "
                                >
                                    <svg width={16} height={16} style={{ marginRight: '10px' }} fill="none" viewBox="0 0 32 32">
                                        <path fill="#828282" d="M9.33341 6.33333C8.89139 6.33333 8.46746 6.50892 8.1549 6.82148C7.84234 7.13404 7.66675 7.55797 7.66675 7.99999V20.734C8.17815 20.473 8.74858 20.3333 9.33341 20.3333H18C18.5523 20.3333 19 20.781 19 21.3333C19 21.8856 18.5523 22.3333 18 22.3333H9.33341C8.89139 22.3333 8.46746 22.5089 8.1549 22.8215C7.84234 23.134 7.66675 23.558 7.66675 24C7.66675 24.442 7.84234 24.8659 8.1549 25.1785C8.46746 25.4911 8.89139 25.6667 9.33341 25.6667H18C18.5523 25.6667 19 26.1144 19 26.6667C19 27.2189 18.5523 27.6667 18 27.6667H9.33341C8.36095 27.6667 7.42832 27.2804 6.74069 26.5927C6.05306 25.9051 5.66675 24.9725 5.66675 24V7.99999C5.66675 7.02753 6.05306 6.0949 6.74069 5.40727C7.42832 4.71964 8.36095 4.33333 9.33341 4.33333H25.3334C25.8857 4.33333 26.3334 4.78104 26.3334 5.33333V12.9998C26.3334 13.5521 25.8857 13.9998 25.3334 13.9998C24.7811 13.9998 24.3334 13.5521 24.3334 12.9998V6.33333H9.33341ZM11.0001 10.6667C11.0001 10.1144 11.4478 9.66666 12.0001 9.66666H20.0001C20.5524 9.66666 21.0001 10.1144 21.0001 10.6667C21.0001 11.2189 20.5524 11.6667 20.0001 11.6667H12.0001C11.4478 11.6667 11.0001 11.2189 11.0001 10.6667Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        <path fill="#828282" d="M25.3334 16C25.8857 16 26.3334 16.4477 26.3334 17V17.3333H28.0001C28.5524 17.3333 29.0001 17.781 29.0001 18.3333C29.0001 18.8856 28.5524 19.3333 28.0001 19.3333H24.6667C24.4015 19.3333 24.1472 19.4387 23.9596 19.6262C23.7721 19.8138 23.6667 20.0681 23.6667 20.3333C23.6667 20.5985 23.7721 20.8529 23.9596 21.0404C24.1472 21.228 24.4015 21.3333 24.6667 21.3333H26.0001C26.7957 21.3333 27.5588 21.6494 28.1214 22.212C28.684 22.7746 29.0001 23.5377 29.0001 24.3333C29.0001 25.129 28.684 25.892 28.1214 26.4547C27.6379 26.9381 27.0064 27.2395 26.3334 27.3148V27.6667C26.3334 28.219 25.8857 28.6667 25.3334 28.6667C24.7811 28.6667 24.3334 28.219 24.3334 27.6667V27.3333H22.6667C22.1145 27.3333 21.6667 26.8856 21.6667 26.3333C21.6667 25.781 22.1145 25.3333 22.6667 25.3333H26.0001C26.2653 25.3333 26.5196 25.228 26.7072 25.0404C26.8947 24.8529 27.0001 24.5985 27.0001 24.3333C27.0001 24.0681 26.8947 23.8138 26.7072 23.6262C26.5196 23.4387 26.2653 23.3333 26.0001 23.3333H24.6667C23.8711 23.3333 23.108 23.0173 22.5454 22.4547C21.9828 21.892 21.6667 21.129 21.6667 20.3333C21.6667 19.5377 21.9828 18.7746 22.5454 18.212C23.0289 17.7285 23.6604 17.4271 24.3334 17.3519V17C24.3334 16.4477 24.7811 16 25.3334 16Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span>Sales History</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${SidebarLinkActive === 'Marketing' ? 'active' : ''}`} onClick={() => handleSidebarLinks('Marketing')}>
                                <Link
                                    href="/marketing"
                                    className="flex items-center p-2 "
                                >
                                    <svg width={16} height={16} style={{ marginRight: '10px' }} fill="none" viewBox="0 0 24 24">
                                        <path fill="#4F4F4F" d="M3.25 4C3.25 3.58579 3.58579 3.25 4 3.25H20C20.4142 3.25 20.75 3.58579 20.75 4V6.172C20.7498 6.90125 20.46 7.60073 19.9443 8.11633C19.9443 8.11636 19.9444 8.1163 19.9443 8.11633L15.75 12.3107V19C15.75 19.3228 15.5434 19.6094 15.2372 19.7115L9.23717 21.7115C9.00846 21.7878 8.75704 21.7494 8.56147 21.6084C8.36589 21.4675 8.25 21.2411 8.25 21V12.79L3.96504 8.0765C3.50504 7.5704 3.25007 6.911 3.25 6.22708V4ZM4.75 4.75V6.22692C4.75 6.22689 4.75 6.22695 4.75 6.22692C4.75005 6.53774 4.86591 6.83748 5.07495 7.0675C5.07494 7.06748 5.07497 7.06751 5.07495 7.0675L9.55496 11.9955C9.68046 12.1335 9.75 12.3134 9.75 12.5V19.9594L14.25 18.4594V12C14.25 11.8011 14.329 11.6103 14.4697 11.4697L18.8837 7.05567C19.1181 6.82134 19.2499 6.50344 19.25 6.172C19.25 6.17195 19.25 6.17205 19.25 6.172V4.75H4.75Z" clipRule="evenodd" fillRule="evenodd"></path>
                                    </svg>
                                    <span>Marketing</span>
                                </Link>
                            </li>
                            <li style={{ display: 'none' }} className={`nav-item`} onClick={() => isMobileView ? setisSidebarActive(true) : setIsSidebarOpen(true)}>
                                <a
                                    href="#"
                                    className="flex items-center p-2 "
                                >
                                    <svg width={15} height={15} viewBox="0 0 448 512">
                                        <path d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88L0 424c0 13.3 10.7 24 24 24s24-10.7 24-24L48 88zM440.4 273.5c4.8-4.5 7.6-10.9 7.6-17.5s-2.7-12.9-7.6-17.5l-136-128c-9.7-9.1-24.8-8.6-33.9 1s-8.6 24.8 1 33.9L363.5 232 280 232l-128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l128 0 83.5 0-91.9 86.5c-9.7 9.1-10.1 24.3-1 33.9s24.3 10.1 33.9 1l136-128z" fill="#4F4F4F">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="flex-grow">
                        <ul className="space-y-2 mx-3 mt-4 border-b pb-3">
                            <span className="px-3 learn" style={{ fontSize: '10px', fontWeight: '600', color: '#767571' }}>LEARN</span>
                            {/* Dashboard */}
                            <li className={`nav-item ${SidebarLinkActive === 'Dash' ? 'active' : ''}`} onClick={() => handleSidebarLinks('Dash')}>
                                <Link
                                    href="/dashboard"
                                    className="flex items-center p-2 "
                                >
                                    <svg style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 19 19" fill="none">
                                        <path d="M0.6 7.4V0.6H7.4V7.4H0.6ZM0.6 18.4V11.6H7.4V18.4H0.6ZM11.6 7.4V0.6H18.4V7.4H11.6ZM15 18.4C13.1222 18.4 11.6 16.8778 11.6 15C11.6 13.1222 13.1222 11.6 15 11.6C16.8778 11.6 18.4 13.1222 18.4 15C18.4 16.8778 16.8778 18.4 15 18.4Z" stroke="#4B4B4B" strokeWidth="2.5" />
                                    </svg>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${SidebarLinkActive === 'Explore' ? 'active' : ''}`} onClick={() => handleSidebarLinks('Explore')}>
                                <Link
                                    href="/explore"
                                    className="flex items-center p-2 "
                                >
                                    <svg width={16} height={16} style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 32">
                                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.4" stroke="#333333" d="M16.5001 30.0606C24.2655 30.0606 30.5607 23.7654 30.5607 16C30.5607 8.23454 24.2655 1.93939 16.5001 1.93939C8.7346 1.93939 2.43945 8.23454 2.43945 16C2.43945 23.7654 8.7346 30.0606 16.5001 30.0606Z"></path>
                                        <path fill="#333333" d="M13.0475 13.4438C13.1208 13.2812 13.2377 13.142 13.385 13.0415L23.6268 6.05728C24.436 5.50544 25.4599 6.36459 25.057 7.25733L19.9574 18.5564C19.884 18.7189 19.7672 18.8582 19.6198 18.9586L9.37801 25.9429C8.56879 26.4947 7.54491 25.6356 7.9478 24.7428L13.0475 13.4438Z"></path>
                                        <path fill="white" d="M16.4999 18.4242C17.8388 18.4242 18.9242 17.3388 18.9242 16C18.9242 14.6611 17.8388 13.5757 16.4999 13.5757C15.1611 13.5757 14.0757 14.6611 14.0757 16C14.0757 17.3388 15.1611 18.4242 16.4999 18.4242Z"></path>
                                    </svg>
                                    <span>Explore</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${SidebarLinkActive === 'My Learning' ? 'active' : ''}`} onClick={() => handleSidebarLinks('My Learning')}>
                                <Link
                                    href="/mylearning"
                                    className="flex items-center p-2 "
                                >
                                    <svg width={16} height={16} style={{ marginRight: '10px' }} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M16.73 1l.6.998.997.598-.998.6-.599.997-.598-.998-.998-.599.998-.598L16.73 1zm4.706 6.227a.72.72 0 01.284.573v1.45h2.03v14.5H.25V9.25h2.03V7.8a.72.72 0 01.913-.694L12 9.562l8.807-2.456a.72.72 0 01.629.12zm-8.716 3.628v10.397l7.56-2.108V8.748l-7.56 2.107zm-1.44 10.397V10.856L3.72 8.748v10.396l7.56 2.108zm-1.781.998H1.75v-11.5h.53v8.94a.72.72 0 00.527.694l6.692 1.866zm12.221-2.56v-8.94h.53v11.5h-7.749l6.692-1.866a.72.72 0 00.527-.694zM13.898 4.344L13 2.847l-.898 1.496-1.497.898 1.497.898L13 7.636l.898-1.497 1.497-.898-1.497-.898z" fill="#4F4F4F"></path></svg>
                                    <span>My Learning</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${SidebarLinkActive === 'Learner Report' ? 'active' : ''}`} onClick={() => handleSidebarLinks('Learner Report')}>
                                <Link
                                    href="/learnerreport"
                                    className="flex items-center p-2 "
                                >
                                    <svg width={16} height={16} style={{ marginRight: '10px' }} fill="none" viewBox="0 0 24 24">
                                        <path fill="#4F4F4F" d="M3.71863 3.71841C4.25138 3.18562 4.97399 2.88635 5.72738 2.88635H18.2728C19.0262 2.88635 19.7488 3.18561 20.2816 3.71841C20.8145 4.25117 21.1137 4.97382 21.1137 5.72726V18.2727C21.1137 19.0261 20.8145 19.7487 20.2817 20.2815C20.2817 20.2815 20.2817 20.2815 20.2816 20.2815C20.2816 20.2815 20.2816 20.2816 20.2816 20.2816C19.7488 20.8144 19.0262 21.1136 18.2728 21.1136H5.72738C4.97394 21.1136 4.25129 20.8143 3.71853 20.2815C3.18574 19.7487 2.88647 19.0261 2.88647 18.2727V5.72726C2.88647 4.97387 3.18574 4.25126 3.71853 3.71851C3.71856 3.71848 3.7186 3.71844 3.71863 3.71841ZM5.72738 4.38635C5.37173 4.38635 5.03068 4.52763 4.77929 4.77907L4.77919 4.77917C4.52776 5.03056 4.38647 5.37161 4.38647 5.72726V18.2727C4.38647 18.6284 4.52776 18.9694 4.77919 19.2208L4.77929 19.2209C5.03068 19.4723 5.37173 19.6136 5.72738 19.6136H18.2728C18.6285 19.6136 18.9695 19.4723 19.2209 19.2209L19.221 19.2208C19.4725 18.9694 19.6137 18.6284 19.6137 18.2727V5.72726C19.6137 5.37161 19.4725 5.03056 19.221 4.77917L19.2209 4.77907C18.9695 4.52764 18.6285 4.38635 18.2728 4.38635H5.72738ZM16.1819 7.06817C16.5961 7.06817 16.9319 7.40396 16.9319 7.81817V16.1818C16.9319 16.596 16.5961 16.9318 16.1819 16.9318C15.7677 16.9318 15.4319 16.596 15.4319 16.1818V7.81817C15.4319 7.40396 15.7677 7.06817 16.1819 7.06817ZM12.0001 10.2045C12.4143 10.2045 12.7501 10.5403 12.7501 10.9545V16.1818C12.7501 16.596 12.4143 16.9318 12.0001 16.9318C11.5859 16.9318 11.2501 16.596 11.2501 16.1818V10.9545C11.2501 10.5403 11.5859 10.2045 12.0001 10.2045ZM7.81829 13.3409C8.23251 13.3409 8.56829 13.6767 8.56829 14.0909V16.1818C8.56829 16.596 8.23251 16.9318 7.81829 16.9318C7.40408 16.9318 7.06829 16.596 7.06829 16.1818V14.0909C7.06829 13.6767 7.40408 13.3409 7.81829 13.3409Z" clipRule="evenodd" fillRule="evenodd"></path>
                                    </svg>
                                    <span> Learner Report</span>
                                </Link>
                            </li>

                            {/* My Products */}
                            <li className={`nav-item ${isOpen && isSidebarOpen === true ? 'dropdownActive' : ''}`} onClick={() => setSidebarLinkActive(false)} >
                                <button
                                    className="flex items-center justify-between w-full p-2"
                                >
                                    <Link href='/school' className="flex items-center">
                                        <svg width={16} height={16} style={{ marginRight: '10px' }} fill="none" viewBox="0 0 20 20">
                                            <path fill="#4F4F4F" d="M8.33333 3.25C8.31123 3.25 8.29004 3.25878 8.27441 3.27441C8.25878 3.29004 8.25 3.31123 8.25 3.33333V8.02267L11.3637 11.1363C11.5043 11.277 11.5833 11.4678 11.5833 11.6667V16.75H16.75V3.33333C16.75 3.31123 16.7412 3.29003 16.7256 3.27441C16.71 3.25878 16.6888 3.25 16.6667 3.25H8.33333ZM10.0833 16.75V11.9773L6.66667 8.56066L3.25 11.9773V16.75H5.91667V14.1667C5.91667 13.7525 6.25245 13.4167 6.66667 13.4167C7.08088 13.4167 7.41667 13.7525 7.41667 14.1667V16.75H10.0833ZM6.75 6.75462C6.53133 6.73031 6.30401 6.80199 6.13634 6.96967L1.96967 11.1363C1.82902 11.277 1.75 11.4678 1.75 11.6667V17.5C1.75 17.9142 2.08579 18.25 2.5 18.25H17.5C17.9142 18.25 18.25 17.9142 18.25 17.5V3.33333C18.25 2.91341 18.0832 2.51068 17.7863 2.21375C17.4893 1.91681 17.0866 1.75 16.6667 1.75H8.33333C7.91341 1.75 7.51068 1.91681 7.21375 2.21375C6.91682 2.51068 6.75 2.91341 6.75 3.33333V6.75462ZM10.8333 5.08333C11.2475 5.08333 11.5833 5.41912 11.5833 5.83333V5.84167C11.5833 6.25588 11.2475 6.59167 10.8333 6.59167C10.4191 6.59167 10.0833 6.25588 10.0833 5.84167V5.83333C10.0833 5.41912 10.4191 5.08333 10.8333 5.08333ZM14.1667 5.08333C14.5809 5.08333 14.9167 5.41912 14.9167 5.83333V5.84167C14.9167 6.25588 14.5809 6.59167 14.1667 6.59167C13.7525 6.59167 13.4167 6.25588 13.4167 5.84167V5.83333C13.4167 5.41912 13.7525 5.08333 14.1667 5.08333ZM14.1667 8.41667C14.5809 8.41667 14.9167 8.75245 14.9167 9.16667V9.175C14.9167 9.58921 14.5809 9.925 14.1667 9.925C13.7525 9.925 13.4167 9.58921 13.4167 9.175V9.16667C13.4167 8.75245 13.7525 8.41667 14.1667 8.41667ZM14.1667 11.75C14.5809 11.75 14.9167 12.0858 14.9167 12.5V12.5083C14.9167 12.9225 14.5809 13.2583 14.1667 13.2583C13.7525 13.2583 13.4167 12.9225 13.4167 12.5083V12.5C13.4167 12.0858 13.7525 11.75 14.1667 11.75Z" clipRule="evenodd" fillRule="evenodd"></path>
                                        </svg>
                                        <span> School</span>
                                    </Link>


                                    <span className="d-flex align-items-center gap-2">
                                        <svg onClick={() => setIsSchoolModal(!isSchoolModal)} className="withoutstroke" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11Z" fill="#E8E9ED" />
                                            <path d="M11 16C10.5314 16 10.1515 15.6201 10.1515 15.1515V6.84848C10.1515 6.37988 10.5314 6 11 6C11.4686 6 11.8485 6.37988 11.8485 6.84848V15.1515C11.8485 15.6201 11.4686 16 11 16ZM6.84849 11.8485C6.37988 11.8485 6 11.4686 6 11C6 10.5314 6.37988 10.1515 6.84848 10.1515H15.1515C15.6201 10.1515 16 10.5314 16 11C16 11.4686 15.6201 11.8485 15.1515 11.8485H6.84849Z" fill="black" />
                                        </svg>

                                        <div onClick={handleToggle2} >
                                            {isSchoolOpen ?
                                                <svg className="withoutstroke" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
                                                    <path d="M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11Z" fill="#E8E9ED" />
                                                    <path d="M11.5 9.54513L15.778 14L17 12.7274L11.5 7L6 12.7274L7.22203 14L11.5 9.54513Z" fill="black" />
                                                </svg>
                                                :
                                                <svg className="withoutstroke" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
                                                    <path d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11Z" fill="#E8E9ED" />
                                                    <path d="M10.5 12.4549L6.22203 8L5 9.27256L10.5 15L16 9.27256L14.778 8L10.5 12.4549Z" fill="black" />
                                                </svg>}</div>
                                    </span>
                                </button>
                            </li>

                            {/* Accordion Content */}
                            {isSidebarOpen === false ? '' : isSchoolOpen && (
                                <ul className="ml-7 mt-2">
                                    {[{ name: schoolName, emoji: selectedEmoji }, { name: "School B", emoji: "🎓" }].map((item, index) => (
                                        <li
                                            key={index}
                                            className={`p-2 cursor-pointer d-flex align-items-center gap-2 ${activeSchool === item.name ? "dropdown-link-active" : "dropdown-link"
                                                }`}
                                            onClick={() => handleSetActive(item.name)}
                                        >
                                            <span className="text-lg">{item.emoji || "🏫"}</span> {/* Display emoji */}
                                            {item.name || "School A"}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <li className={`nav-item ${SidebarLinkActive === 'Calendar' ? 'active' : ''}`} onClick={() => handleSidebarLinks('Calendar')}>
                                <Link
                                    href="/calendar"
                                    className="flex items-center p-2 "
                                >
                                    <svg width={16} height={16} style={{ marginRight: '10px' }} fill="none" viewBox="0 0 20 20">
                                        <path fill="#4F4F4F" d="M6.66671 1.75C7.08092 1.75 7.41671 2.08579 7.41671 2.5V3.41667H12.5834V2.5C12.5834 2.08579 12.9192 1.75 13.3334 1.75C13.7476 1.75 14.0834 2.08579 14.0834 2.5V3.41667H15C15.641 3.41667 16.2557 3.67128 16.7089 4.12449C17.1621 4.5777 17.4167 5.19239 17.4167 5.83333V15.8333C17.4167 16.4743 17.1621 17.089 16.7089 17.5422C16.2557 17.9954 15.641 18.25 15 18.25H5.00004C4.3591 18.25 3.74441 17.9954 3.2912 17.5422C2.83799 17.089 2.58337 16.4743 2.58337 15.8333V5.83333C2.58337 5.19239 2.83799 4.5777 3.2912 4.12449C3.74441 3.67128 4.3591 3.41667 5.00004 3.41667H5.91671V2.5C5.91671 2.08579 6.25249 1.75 6.66671 1.75ZM5.91671 4.91667H5.00004C4.75693 4.91667 4.52377 5.01324 4.35186 5.18515C4.17995 5.35706 4.08337 5.59022 4.08337 5.83333V8.41667H15.9167V5.83333C15.9167 5.59022 15.8201 5.35706 15.6482 5.18515C15.4763 5.01324 15.2432 4.91667 15 4.91667H14.0834V5.83333C14.0834 6.24755 13.7476 6.58333 13.3334 6.58333C12.9192 6.58333 12.5834 6.24755 12.5834 5.83333V4.91667H7.41671V5.83333C7.41671 6.24755 7.08092 6.58333 6.66671 6.58333C6.25249 6.58333 5.91671 6.24755 5.91671 5.83333V4.91667ZM15.9167 9.91667H4.08337V15.8333C4.08337 16.0764 4.17995 16.3096 4.35186 16.4815C4.52377 16.6534 4.75693 16.75 5.00004 16.75H15C15.2432 16.75 15.4763 16.6534 15.6482 16.4815C15.8201 16.3096 15.9167 16.0764 15.9167 15.8333V9.91667ZM8.41671 12.5C8.41671 12.0858 8.75249 11.75 9.16671 11.75H10C10.4143 11.75 10.75 12.0858 10.75 12.5V15C10.75 15.4142 10.4143 15.75 10 15.75C9.58583 15.75 9.25004 15.4142 9.25004 15V13.25H9.16671C8.75249 13.25 8.41671 12.9142 8.41671 12.5Z" clipRule="evenodd" fillRule="evenodd"></path>
                                    </svg>
                                    <span>Calendar</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${SidebarLinkActive === 'Bookmarks' ? 'active' : ''}`} onClick={() => handleSidebarLinks('Bookmarks')}>
                                <Link
                                    href="/bookmark"
                                    className="flex items-center p-2 "
                                >
                                    <svg width={16} height={16} style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" strokeWidth="0" fill="none" stroke="#03314b"><path fill="none" strokeLinejoin="round" strokeWidth="32" d="M128 80V64a48.14 48.14 0 0148-48h224a48.14 48.14 0 0148 48v368l-80-64"></path><path d="M320 96H112a48.14 48.14 0 00-48 48v352l152-128 152 128V144a48.14 48.14 0 00-48-48z" strokeWidth="32" strokeLinejoin="round" fill="none"></path></svg>
                                    <span>Bookmarks</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${isOpen && isSidebarOpen === true ? 'dropdownActive' : ''}`} onClick={() => setSidebarLinkActive(false)} >
                                <button
                                    className="flex items-center justify-between w-full p-2"
                                >
                                    <div className="flex items-center">
                                        <svg width={16} height={16} style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" fill="#4F4F4F" viewBox="0 0 32 32"><path fill="#4F4F4F" d="M24.7994 11.2C26.9202 11.2 28.6555 12.8505 28.7909 14.937L28.7994 15.2V24.7994C28.7994 26.9202 27.149 28.6555 25.0625 28.7909L24.7994 28.7994H15.2C13.0792 28.7994 11.344 27.149 11.2085 25.0625L11.2 24.7994V15.2C11.2 13.0792 12.8505 11.344 14.937 11.2085L15.2 11.2H24.7994ZM19.9997 14.4C19.607 14.4 19.2804 14.683 19.2126 15.0562L19.1997 15.2L19.1984 19.2H15.2L15.0562 19.2129C14.683 19.2806 14.4 19.6073 14.4 20C14.4 20.3927 14.683 20.7194 15.0562 20.7871L15.2 20.8H19.1984L19.1997 24.8L19.2126 24.9438C19.2804 25.317 19.607 25.6 19.9997 25.6C20.3925 25.6 20.7191 25.317 20.7868 24.9438L20.7997 24.8L20.7984 20.8H24.8L24.9438 20.7871C25.317 20.7194 25.6 20.3927 25.6 20C25.6 19.6073 25.317 19.2806 24.9438 19.2129L24.8 19.2H20.7984L20.7997 15.2L20.7868 15.0562C20.7191 14.683 20.3925 14.4 19.9997 14.4ZM20.259 5.91211L20.3353 6.16395L21.2558 9.59982L14.4 9.60003C11.8437 9.60003 9.75417 11.5983 9.60818 14.118L9.60003 14.4L9.60047 22.9562C7.95734 22.9228 6.45777 21.8712 5.90353 20.2642L5.82005 19.9914L3.33553 10.719C2.78664 8.67051 3.93173 6.56719 5.91211 5.89634L6.16395 5.82005L15.4363 3.33553C17.3994 2.80951 19.4129 3.83924 20.1678 5.66898L20.259 5.91211Z"></path></svg>
                                        <span> Collections</span>
                                    </div>


                                    <span className="d-flex align-items-center gap-2">
                                        <svg onClick={() => SetCollectionModal(!collectionModal)} className="withoutstroke" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11Z" fill="#E8E9ED" />
                                            <path d="M11 16C10.5314 16 10.1515 15.6201 10.1515 15.1515V6.84848C10.1515 6.37988 10.5314 6 11 6C11.4686 6 11.8485 6.37988 11.8485 6.84848V15.1515C11.8485 15.6201 11.4686 16 11 16ZM6.84849 11.8485C6.37988 11.8485 6 11.4686 6 11C6 10.5314 6.37988 10.1515 6.84848 10.1515H15.1515C15.6201 10.1515 16 10.5314 16 11C16 11.4686 15.6201 11.8485 15.1515 11.8485H6.84849Z" fill="black" />
                                        </svg>
                                        {isCollectionOpen ?
                                            <svg onClick={handleToggle3} className="withoutstroke" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
                                                <path d="M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11Z" fill="#E8E9ED" />
                                                <path d="M11.5 9.54513L15.778 14L17 12.7274L11.5 7L6 12.7274L7.22203 14L11.5 9.54513Z" fill="black" />
                                            </svg>
                                            :
                                            <svg onClick={handleToggle3} className="withoutstroke" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
                                                <path d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11Z" fill="#E8E9ED" />
                                                <path d="M10.5 12.4549L6.22203 8L5 9.27256L10.5 15L16 9.27256L14.778 8L10.5 12.4549Z" fill="black" />
                                            </svg>}</span>
                                </button>
                            </li>

                            {/* Accordion Content */}
                            {isSidebarOpen === false ? '' : isCollectionOpen && (
                                <ul className="ml-7 mt-2">
                                    {["Collection A", "Collection B", "Collection C"].map((item) => (
                                        <Link
                                            href='/collection'
                                            key={item}
                                            className={`p-2 cursor-pointer d-flex align-items-center gap-2 ${activeCollection === item ? "dropdown-link-active" : "dropdown-link"
                                                }`}
                                            onClick={() => { handleSetActive(item); setSidebarLinkActive(false) }}
                                        >
                                            {itemIcons[item]} {/* Render the corresponding SVG */}
                                            {item}
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </ul>
                    </nav>

                    <nav className="flex-grow border-r">
                        <ul className="space-y-2 mx-3 mt-3 border-b pb-2">
                            <li className={`nav-item ${SidebarLinkActive === 'Playlist' ? 'active' : ''}`} style={{ color: '#949494' }} onClick={() => handleSidebarLinks('Playlist')}>
                                <a
                                    href="#"
                                    className="flex items-center p-2 "
                                >
                                    <svg width={16} height={16} style={{ marginRight: '10px' }} viewBox="0 0 21 17"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="feature-outline-icon" transform="translate(0.865723, 0.665728)" fill="#757575" fillRule="nonzero"><path d="M6.13427734,12.6369485 L18.1342773,12.6369485 C18.6865621,12.6369485 19.1342773,13.0846638 19.1342773,13.6369485 C19.1342773,14.1892333 18.6865621,14.6369485 18.1342773,14.6369485 L6.13427734,14.6369485 C5.58199259,14.6369485 5.13427734,14.1892333 5.13427734,13.6369485 C5.13427734,13.0846638 5.58199259,12.6369485 6.13427734,12.6369485 Z M6.13427734,6.63694853 L18.1342773,6.63694853 C18.6865621,6.63694853 19.1342773,7.08466378 19.1342773,7.63694853 C19.1342773,8.18923328 18.6865621,8.63694853 18.1342773,8.63694853 L6.13427734,8.63694853 C5.58199259,8.63694853 5.13427734,8.18923328 5.13427734,7.63694853 C5.13427734,7.08466378 5.58199259,6.63694853 6.13427734,6.63694853 Z M6.13427734,0.636948529 L18.1342773,0.636948529 C18.6865621,0.636948529 19.1342773,1.08466378 19.1342773,1.63694853 C19.1342773,2.18923328 18.6865621,2.63694853 18.1342773,2.63694853 L6.13427734,2.63694853 C5.58199259,2.63694853 5.13427734,2.18923328 5.13427734,1.63694853 C5.13427734,1.08466378 5.58199259,0.636948529 6.13427734,0.636948529 Z M0.909179688,15.2121438 L2.69042969,14.163804 C2.80794271,14.0957701 2.88680013,13.998358 2.92700195,13.8715677 C2.96720378,13.7447773 2.96720378,13.6179869 2.92700195,13.4911966 C2.88680013,13.3644062 2.80794271,13.2669941 2.69042969,13.1989602 L0.909179688,12.1320657 
                                    C0.686523438,11.995998 0.479329427,11.9650735 0.287597656,12.0392923 C0.0958658854,12.113511 0,12.2805032 0,12.5402688 L0,14.8039407 C0,15.0513366 0.0974121094,15.2136901 0.292236328,15.2910013 C0.487060547,15.3683125 0.692708333,15.3420267 0.909179688,15.2121438 Z M0.909179688,9.21214384 L2.69042969,8.163804 C2.80794271,8.09577014 2.88680013,7.99835803 2.92700195,7.87156767 C2.96720378,7.74477731 2.96720378,7.61798694 2.92700195,7.49119658 C2.88680013,7.36440621 2.80794271,7.2669941 2.69042969,7.19896025 L0.909179688,6.13206572 C0.686523438,5.99599801 0.479329427,5.96507353 0.287597656,6.03929228 C0.0958658854,6.11351103 0,6.28050322 0,6.54026884 L0,8.80394072 C0,9.05133655 0.0974121094,9.21369007 0.292236328,9.29100126 C0.487060547,9.36831246 0.692708333,9.34202665 0.909179688,9.21214384 Z M0.909179688,3.21214384 L2.69042969,2.163804 C2.80794271,2.09577014 2.88680013,1.99835803 2.92700195,1.87156767 C2.96720378,1.74477731 2.96720378,1.61798694 2.92700195,1.49119658 C2.88680013,1.36440621 2.80794271,1.2669941 2.69042969,1.19896025 L0.909179688,0.132065717 C0.686523438,-0.00400199142 0.479329427,-0.0349264706 0.287597656,0.0392922794 C0.0958658854,0.113511029 0,0.280503217 0,0.540268842 L0,2.80394072 C0,3.05133655 0.0974121094,3.21369007 0.292236328,3.29100126 C0.487060547,3.36831246 0.692708333,3.34202665 0.909179688,3.21214384 Z"></path></g></g></svg>
                                    <span>Playlist</span>
                                </a>
                            </li>
                            <li className={`nav-item ${SidebarLinkActive === 'Notifications' ? 'active' : ''}`} style={{ color: '#949494' }} onClick={() => handleSidebarLinks('Notifications')}>
                                <a
                                    href="#"
                                    className="flex items-center p-2 "
                                >
                                    <svg width={16} height={16} style={{ marginRight: '10px' }} fill="none" viewBox="0 0 24 24">
                                        <path fill="#4F4F4F" d="M5.64124 3.64124C6.53204 2.75044 7.74022 2.25 9 2.25C10.2598 2.25 11.468 2.75044 12.3588 3.64124C13.2496 4.53204 13.75 5.74022 13.75 7C13.75 8.25978 13.2496 9.46796 12.3588 10.3588C11.468 11.2496 10.2598 11.75 9 11.75C7.74022 11.75 6.53204 11.2496 5.64124 10.3588C4.75044 9.46796 4.25 8.25978 4.25 7C4.25 5.74022 4.75044 4.53204 5.64124 3.64124ZM9 3.75C8.13805 3.75 7.3114 4.09241 6.7019 4.7019C6.09241 5.3114 5.75 6.13805 5.75 7C5.75 7.86195 6.09241 8.6886 6.7019 9.2981C7.3114 9.90759 8.13805 10.25 9 10.25C9.86195 10.25 10.6886 9.90759 11.2981 9.2981C11.9076 8.6886 12.25 7.86195 12.25 7C12.25 6.13805 11.9076 5.3114 11.2981 4.7019C10.6886 4.09241 9.86195 3.75 9 3.75ZM15.2734 2.94385C15.3762 2.54258 15.7848 2.30058 16.186 2.40332C17.2078 2.66493 18.1134 3.25915 18.7601 4.09231C19.4068 4.92547 19.7578 5.95018 19.7578 7.00488C19.7578 8.05959 19.4068 9.08429 18.7601 9.91745C18.1134 10.7506 17.2078 11.3448 16.186 11.6064C15.7848 11.7092 15.3762 11.4672 15.2734 11.0659C15.1707 10.6646 15.4127 10.2561 15.814 10.1533C16.5131 9.97433 17.1327 9.56775 17.5752 8.99769C18.0177 8.42763 18.2578 7.72652 18.2578 7.00488C18.2578 6.28325 18.0177 5.58213 17.5752 5.01207C17.1327 4.44201 16.5131 4.03544 15.814 3.85645C15.4127 3.7537 15.1707 3.34512 15.2734 2.94385ZM7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H11C12.2598 14.25 13.468 14.7504 14.3588 15.6412C15.2496 16.532 15.75 17.7402 15.75 19V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V19C14.25 18.138 13.9076 17.3114 13.2981 16.7019C12.6886 16.0924 11.862 15.75 11 15.75H7ZM17.2738 14.9624C17.3774 14.5614 17.7864 14.3202 18.1875 14.4237C19.2026 14.6858 20.1025 15.2763 20.7469 16.1033C21.3913 16.9303 21.744 17.9472 21.75 18.9956L21.75 18.9999L21.75 20.9999C21.75 21.4141 21.4142 21.7499 21 21.7499C20.5858 21.7499 20.25 21.4141 20.25 20.9999V19.002C20.2454 18.2855 20.0041 17.5905 19.5637 17.0253C19.1228 16.4595 18.5071 16.0554 17.8125 15.8761C17.4115 15.7725 17.1703 15.3635 17.2738 14.9624Z" clipRule="evenodd" fillRule="evenodd"></path>
                                    </svg>
                                    <span>Notifications</span>
                                </a>
                            </li>
                            <li className={`nav-item ${SidebarLinkActive === 'Team' ? 'active' : ''}`} style={{ color: '#949494' }} onClick={() => handleSidebarLinks('Team')}>
                                <Link
                                    href="/team"
                                    className="flex items-center p-2 "
                                >
                                    <svg width={16} height={16} style={{ marginRight: '10px' }} fill="none" viewBox="0 0 32 32">
                                        <path fill="#333333" d="M16.4847 5.82368C14.8958 5.82368 13.6733 7.05276 13.6733 8.48961C13.6733 9.92647 14.8958 11.1555 16.4847 11.1555C18.0736 11.1555 19.2961 9.92647 19.2961 8.48961C19.2961 7.05276 18.0736 5.82368 16.4847 5.82368ZM11.7324 8.48961C11.7324 5.90979 13.8963 3.88281 16.4847 3.88281C19.0731 3.88281 21.2369 5.90979 21.2369 8.48961C21.2369 11.0694 19.0731 13.0964 16.4847 13.0964C13.8963 13.0964 11.7324 11.0694 11.7324 8.48961ZM7.66046 10.6722C6.76779 10.6722 6.10968 11.3586 6.10968 12.126C6.10968 12.8934 6.76779 13.5798 7.66046 13.5798C8.55312 13.5798 9.21123 12.8934 9.21123 12.126C9.21123 11.3586 8.55312 10.6722 7.66046 10.6722ZM4.16881 12.126C4.16881 10.2156 5.76834 8.7313 7.66046 8.7313C9.55257 8.7313 11.1521 10.2156 11.1521 12.126C11.1521 14.0363 9.55257 15.5207 7.66046 15.5207C5.76834 15.5207 4.16881 14.0363 4.16881 12.126ZM25.3089 10.6722C24.4163 10.6722 23.7582 11.3586 23.7582 12.126C23.7582 12.8934 24.4163 13.5798 25.3089 13.5798C26.2016 13.5798 26.8597 12.8934 26.8597 12.126C26.8597 11.3586 26.2016 10.6722 25.3089 10.6722ZM21.8173 12.126C21.8173 10.2156 23.4168 8.7313 25.3089 8.7313C27.201 8.7313 28.8006 10.2156 28.8006 12.126C28.8006 14.0363 27.201 15.5207 25.3089 15.5207C23.4168 15.5207 21.8173 14.0363 21.8173 12.126ZM16.4847 16.7328C14.2186 16.7328 12.3039 18.078 11.5266 19.9449C11.2851 20.5254 11.1521 21.1585 11.1521 21.8229V23.2768H21.8173V21.8229C21.8173 21.1585 21.6843 20.5254 21.4428 19.9449C20.6655 18.078 18.7508 16.7328 16.4847 16.7328ZM23.4576 19.8169C23.6532 20.4531 23.7582 21.1267 23.7582 21.8229V23.2768H28.1203V21.8229C28.1203 20.3861 26.8978 19.157 25.3089 19.157C24.5952 19.157 23.9494 19.4081 23.4576 19.8169ZM22.6105 18.0304C21.3124 16.0742 19.0455 14.7919 16.4847 14.7919C13.9239 14.7919 11.657 16.0742 10.3589 18.0304C9.59018 17.5156 8.65918 17.2161 7.66046 17.2161C5.0721 17.2161 2.9082 19.2431 2.9082 21.8229V24.2472C2.9082 24.7831 3.34268 25.2176 3.87864 25.2176H29.0908C29.6267 25.2176 30.0612 24.7831 30.0612 24.2472V21.8229C30.0612 19.2431 27.8973 17.2161 25.3089 17.2161C24.3102 17.2161 23.3792 17.5156 22.6105 18.0304ZM9.5118 19.8169C9.01995 19.4081 8.37421 19.157 7.66046 19.157C6.07155 19.157 4.84907 20.3861 4.84907 21.8229V23.2768H9.21123V21.8229C9.21123 21.1267 9.31625 20.4531 9.5118 19.8169Z" clipRule="evenodd" fillRule="evenodd"></path>
                                    </svg>
                                    <span>Team</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${SidebarLinkActive === 'Settings' ? 'active' : ''}`} style={{ color: '#949494' }} onClick={() => handleSidebarLinks('Settings')}>
                                <a
                                    href="#"
                                    className="flex items-center p-2 "
                                >
                                    <svg width={16} height={16} style={{ marginRight: '10px' }} fill="none" viewBox="0 0 20 20">
                                        <path fill="#4F4F4F" d="M10.7885 3.74485C10.588 2.91838 9.41205 2.91838 9.21155 3.74485L9.21147 3.74518C8.8815 5.1021 7.33071 5.74534 6.13614 5.01904L6.13582 5.01885C5.40863 4.57613 4.57711 5.40852 5.01959 6.13484C5.18849 6.41193 5.2896 6.72499 5.31469 7.04853C5.33978 7.37216 5.2881 7.69713 5.16386 7.99701C5.03962 8.29689 4.84633 8.56319 4.59972 8.77425C4.35315 8.98527 4.06025 9.1351 3.74485 9.21155C2.91838 9.41205 2.91838 10.588 3.74485 10.7885L3.74519 10.7885C4.06037 10.8652 4.35302 11.0151 4.59936 11.2262C4.84569 11.4372 5.03875 11.7034 5.16285 12.0031C5.28694 12.3028 5.33857 12.6275 5.31354 12.9509C5.28851 13.2743 5.18752 13.5873 5.01878 13.8643C4.57621 14.5915 5.40855 15.4229 6.13484 14.9804C6.41193 14.8115 6.72498 14.7104 7.04853 14.6853C7.37216 14.6602 7.69713 14.7119 7.99701 14.8361C8.29689 14.9604 8.56319 15.1537 8.77425 15.4003C8.98527 15.6468 9.1351 15.9398 9.21155 16.2552C9.41205 17.0816 10.588 17.0816 10.7885 16.2552L10.7885 16.2548C10.8652 15.9396 11.0151 15.647 11.2262 15.4006C11.4372 15.1543 11.7034 14.9612 12.0031 14.8372C12.3028 14.7131 12.6275 14.6614 12.9509 14.6865C13.2743 14.7115 13.5873 14.8125 13.8643 14.9812C14.5915 15.4238 15.4229 14.5914 14.9804 13.8652C14.8115 13.5881 14.7104 13.275 14.6853 12.9515C14.6602 12.6278 14.7119 12.3029 14.8361 12.003C14.9604 11.7031 15.1537 11.4368 15.4003 11.2257C15.6468 11.0147 15.9398 10.8649 16.2552 10.7885C17.0816 10.588 17.0816 9.41205 16.2552 9.21155L16.2548 9.21147C15.9396 9.13482 15.647 8.98488 15.4006 8.77384C15.1543 8.56281 14.9612 8.29662 14.8372 7.99692C14.7131 7.69723 14.6614 7.37248 14.6865 7.04908C14.7115 6.72567 14.8125 6.41274 14.9812 6.13571C15.4238 5.40854 14.5914 4.57713 13.8652 5.01959C13.5881 5.18849 13.275 5.2896 12.9515 5.31469C12.6278 5.33978 12.3029 5.2881 12.003 5.16386C11.7031 5.03962 11.4368 4.84633 11.2257 4.59972C11.0147 4.35315 10.8649 4.06025 10.7885 3.74485ZM7.99686 3.44982C8.5066 1.34995 11.4937 1.35006 12.0032 3.45015L12.0033 3.45032C12.0333 3.57452 12.0923 3.68986 12.1754 3.78695C12.2585 3.88404 12.3634 3.96014 12.4814 4.00905C12.5995 4.05796 12.7274 4.07831 12.8548 4.06843C12.9823 4.05855 13.1055 4.01873 13.2146 3.9522L13.2148 3.95208C15.0602 2.82789 17.1728 4.9397 16.0488 6.78584L16.0488 6.78596C15.9823 6.89502 15.9426 7.01822 15.9327 7.14555C15.9229 7.27287 15.9432 7.40072 15.9921 7.51871C16.0409 7.6367 16.1169 7.74149 16.2139 7.82458C16.3108 7.90759 16.4259 7.96658 16.5498 
                                        7.99678C18.65 8.50629 18.65 11.4937 16.5498 12.0032L16.5497 12.0033C16.4255 12.0333 16.3101 12.0923 16.2131 12.1754C16.116 12.2585 16.0399 12.3634 15.991 12.4814C15.942 12.5995 15.9217 12.7274 15.9316 12.8548C15.9414 12.9822 15.9813 13.1055 16.0478 13.2146L16.0479 13.2148C17.1721 15.0602 15.0603 17.1728 13.2142 16.0488L13.214 16.0488C13.105 15.9823 12.9818 15.9426 12.8545 15.9327C12.7271 15.9229 12.5993 15.9432 12.4813 15.9921C12.3633 16.0409 12.2585 16.1169 12.1754 16.2139C12.0924 16.3108 12.0334 16.4259 12.0032 16.5498C11.4937 18.65 8.50629 18.65 7.99678 16.5498L7.99674 16.5497C7.96665 16.4255 7.90766 16.3101 7.82456 16.2131C7.74147 16.116 7.63663 16.0399 7.51857 15.991C7.40051 15.942 7.27257 15.9217 7.14516 15.9316C7.01775 15.9414 6.89447 15.9813 6.78536 16.0478L6.78516 16.0479C4.93982 17.1721 2.82721 15.0603 3.95115 13.2142L3.95122 13.214C4.01765 13.105 4.05741 12.9818 4.06727 12.8545C4.07712 12.7271 4.0568 12.5993 4.00794 12.4813C3.95908 12.3633 3.88308 12.2585 3.7861 12.1754C3.68921 12.0924 3.57411 12.0334 3.45015 12.0032C1.34995 11.4937 1.34995 8.50629 3.45015 7.99678L3.45032 7.99674C3.57452 7.96665 3.68986 7.90766 3.78695 7.82456C3.88404 7.74147 3.96014 7.63663 4.00905 7.51857C4.05796 7.40051 4.07831 7.27257 4.06843 7.14516C4.05855 7.01775 4.01873 6.89447 3.9522 6.78536L3.95208 6.78516C2.82795 4.93992 4.93946 2.82745 6.78553 3.95096C7.25752 4.23793 7.86658 3.98467 7.99678 3.45015M7.79029 7.79029C8.37634 7.20424 9.1712 6.875 10 6.875C10.8288 6.875 11.6237 7.20424 12.2097 7.79029C12.7958 8.37634 13.125 9.1712 13.125 10C13.125 10.8288 12.7958 11.6237 12.2097 12.2097C11.6237 12.7958 10.8288 13.125 10 13.125C9.1712 13.125 8.37634 12.7958 7.79029 12.2097C7.20424 11.6237 6.875 10.8288 6.875 10C6.875 9.1712 7.20424 8.37634 7.79029 7.79029ZM10 8.125C9.50272 8.125 9.0258 8.32254 8.67417 8.67417C8.32254 9.0258 8.125 9.50272 8.125 10C8.125 10.4973 8.32254 10.9742 8.67417 11.3258C9.0258 11.6775 9.50272 11.875 10 11.875C10.4973 11.875 10.9742 11.6775 11.3258 11.3258C11.6775 10.9742 11.875 10.4973 11.875 10C11.875 9.50272 11.6775 9.0258 11.3258 8.67417C10.9742 8.32254 10.4973 8.125 10 8.125Z" clipRule="evenodd" fillRule="evenodd"></path>
                                    </svg>
                                    <span>Settings</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
