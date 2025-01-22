"use client";
import { useContext, useState } from "react";
import { MyContext } from "../layout";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data"; // Emoji data

const AddCommunity = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [url, setUrl] = useState("");
    const [charCount, setCharCount] = useState(0);
    const context = useContext(MyContext);

    const generateRandomString = (length) => {
        const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    };

    const slugify = (text) => {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with -
            .replace(/[^\w\-]+/g, "") // Remove all non-word chars
            .replace(/\-\-+/g, "-") // Replace multiple - with single -
            .replace(/^-+/, "") // Trim - from start of text
            .replace(/-+$/, ""); // Trim - from end of text
    };

    const randomSuffix = generateRandomString(7);

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
        setCharCount(value.length);
        setUrl(value ? `https://skillhub.com/community/${slugify(value)}-${randomSuffix}` : "");
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.innerHTML);
    };

    const handleToolbarClick = (command) => {
        const editor = document.getElementById("description");

        if (editor) {
            editor.focus(); // Ensure the editor is focused
            document.execCommand(command, false, null);

            // Toggle the active state of buttons
            const button = document.querySelector(`.editor-button[data-command="${command}"]`);
            if (button && button.classList.contains("active")) {
                button.classList.remove("active");
            } else {
                // Ensure list-specific buttons toggle properly
                if (command === "insertOrderedList" || command === "insertUnorderedList") {
                    document.querySelectorAll('[data-command="insertOrderedList"], [data-command="insertUnorderedList"]').forEach((btn) =>
                        btn.classList.remove("active")
                    );
                }
                if (button) button.classList.add("active");
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            JSON.stringify(
                {
                    title,
                    url,
                    description,
                    category,
                },
                null,
                2
            )
        );
    };

    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAvatar(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleFileChange = (e, setPreview) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreview(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const AddCommunityModalProducts = [
        { id: 1, type: "Course", name: "Advanced UI/UX Design Masterclass", image: 'https://i.ibb.co/jJ4GHXP/img1.jpg', price: 199 },
        { id: 2, type: "Course", name: "Responsive Web Design Fundamentals", image: 'https://i.ibb.co/Csdq4rd/newsletter-image.png', price: 149 },
        { id: 3, type: "Event", name: "Design Systems Workshop 2024", image: "https://i.ibb.co/hBpWGQ7/c3.jpg", price: 299 },
    ];
    const [activeSpace, setActiveSpace] = useState(null);
    const [hoveredSpace, setHoveredSpace] = useState(null);

    const spaces = [
        {
            id: 1,
            name: "Space A",
            icon: "⭐",
            stats: { views: 797, comments: 199, likes: 55 },
            members: ["https://i.pravatar.cc/30?img=1", "https://i.pravatar.cc/30?img=2", "https://i.pravatar.cc/30?img=3"],
        },
        {
            id: 2,
            name: "Space B",
            icon: "❓",
            stats: { views: 524, comments: 87, likes: 22 },
            members: ["https://i.pravatar.cc/30?img=4", "https://i.pravatar.cc/30?img=5"],
        },
        {
            id: 3,
            name: "Space C",
            icon: "💬",
            stats: { views: 1200, comments: 305, likes: 120 },
            members: ["https://i.pravatar.cc/30?img=6"],
        },
    ];

    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState(""); // Default emoji
    const [SpaceTitle, setSpaceTitle] = useState(""); // Default emoji
    const [activeTab, setActiveTab] = useState("Details");
    const communityChecklistData = [
        {
            sectionTitle: "Community Requirements",
            status: "error",
            issues: 4,
            progress: 25,
            checklistItems: [
                {
                    title: "Community and Title",
                    status: "pending",
                    description: "Community needs to be created and configured with a title.",
                    action: "Create Community",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                },
                {
                    title: "Community Spaces (1+ Required)",
                    status: "pending",
                    description: `At least 1 community space is required with title, emoji, and description. Current count: 0`,
                    action: "Add Spaces",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                },
                {
                    title: "Community Cover Image (500x200 minimum)",
                    status: "pending",
                    description: "Community cover image is missing or does not meet minimum size requirements (500x200 pixels).",
                    action: "Upload Cover",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                },
                {
                    title: "System Error",
                    status: "pending",
                    description: `Unable to create community or space due to an internal error. Please contact support for assistance.`,
                    action: "Contact Support",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                }
            ]
        }
    ];
    const profileChecklistData = [
        {
            sectionTitle: "Profile Requirements",
            status: "error",
            issues: 6,
            progress: 25,
            checklistItems: [
                {
                    title: "PayPal Connection",
                    status: "pending",
                    description: "PayPal account connection is required to receive payments. Please connect your PayPal account.",
                    action: "Connect PayPal",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                },
                {
                    title: "First and Last Name",
                    status: "pending",
                    description: "Please provide your full name (first and last name) in your profile.",
                    action: "Complete Profile",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                },
                {
                    title: "Profile Avatar",
                    status: "pending",
                    description: "A profile avatar is required. Please upload a profile picture.",
                    action: "Upload Avatar",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                },
                {
                    title: "Profile Bio (200+ characters)",
                    status: "pending",
                    description: "Profile bio must be at least 200 characters. Current length: 85 characters (115 more needed).",
                    action: "Add Bio",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                },
                {
                    title: "CPE Credentials",
                    status: "pending",
                    description: "CPE credentials are required since CPE is enabled for this course. Please add your professional credentials.",
                    action: "Add Credentials",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                },
                {
                    title: "Plan Purchase Required",
                    status: "pending",
                    description: "A paid plan is required to publish this type of course. Please visit our pricing page to select a plan.",
                    action: "View Plans",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                }
            ]
        }
    ];
    const [profilesectionexpand, setprofilesectionexpand] = useState(false);
    const [expandedState4, setExpandedState4] = useState({});
    const [expandedState2, setExpandedState2] = useState({});
    const [communitysectionexpand, setcommunitysectionexpand] = useState(false);

    const handleEmojiSelect = (emoji) => {
        setSelectedEmoji(emoji.native); // Capture selected emoji
        setIsEmojiPickerOpen(false); // Close picker after selecting emoji
    };

    const toggleExpand2 = (index) => {
        setExpandedState2((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const toggleExpand4 = (index) => {
        setExpandedState4((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    const handleExpandAllIssues = () => {
        setcoursesectionexpand(true);
        setsessionsectionexpand(true);
        setprofilesectionexpand(true);
        setcommunitysectionexpand(true);
    };
    const handleExpandIssues = () => {
        const shouldExpandSection = (checklistData) => {
            // Expand the section only if there are no completed items and at least one pending item
            return checklistData.some((section) =>
                section.checklistItems.every((item) => item.status !== "completed") &&
                section.checklistItems.some((item) => item.status === "pending")
            );
        };

        // Explicitly check each checklistData
        const courseShouldExpand = shouldExpandSection(courseChecklistData);
        const profileShouldExpand = shouldExpandSection(profileChecklistData);
        const sessionShouldExpand = shouldExpandSection(SessionChecklistData);
        const communityShouldExpand = shouldExpandSection(communityChecklistData);

        // Set expansion states
        setcoursesectionexpand(courseShouldExpand);
        setprofilesectionexpand(profileShouldExpand);
        setsessionsectionexpand(sessionShouldExpand);
        setcommunitysectionexpand(communityShouldExpand);
    };
    const handleExpandCompleted = () => {
        const shouldExpandSection = (checklistData) => {
            // Expand the section only if there is at least one "completed" item
            return checklistData.some((section) =>
                section.checklistItems.some((item) => item.status === "completed")
            );
        };

        // Explicitly check each checklistData
        const courseShouldExpand = shouldExpandSection(courseChecklistData);
        const profileShouldExpand = shouldExpandSection(profileChecklistData);
        const sessionShouldExpand = shouldExpandSection(SessionChecklistData);
        const communityShouldExpand = shouldExpandSection(communityChecklistData);

        // Set expansion states
        setcoursesectionexpand(courseShouldExpand);
        setprofilesectionexpand(profileShouldExpand);
        setsessionsectionexpand(sessionShouldExpand);
        setcommunitysectionexpand(communityShouldExpand);
    };

    const [showCompleted, setShowCompleted] = useState(false);

    const handleToggle = () => {
        setShowCompleted(!showCompleted);
    };

    const [expandmenu, setexpandmenu] = useState(false);
    return (
        context.AddCommunityModal &&
        <div className="modal-overlay h-screen" style={{ overflowY: 'auto' }}>
            <div className="modal-container h-screen p-0" style={{ width: '80%', textAlign: 'left', height: `calc(100vh - 80px)`, background: '#f2f2f2' }}>
                <div className='popup-container'>
                    <div className="popup">
                        <div className="popup-header">
                            {/* Header Section */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://i.ibb.co/k67BZds/community-image1.png"
                                        alt="Thumbnail"
                                        className="w-24 h-16 rounded-md object-cover"
                                    />
                                    <div className="info">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <h1 className="text-xl font-semibold">UX Design Hub</h1>
                                                <span className="text-gray-500 text-sm flex items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <circle cx="8" cy="8" r="7"></circle>
                                                        <path d="M6.06 6a2 2 0 1 1 3.93 0c0 1.33-2 2-2 2"></path>
                                                        <line x1="8" y1="12" x2="8.01" y2="12"></line>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center w-100 mt-3" style={{ justifyContent: 'space-between' }}>
                                            <div className="flex gap-4" style={{ fontSize: '13px', fontWeight: '600' }}>
                                                <button
                                                    onClick={() => setActiveTab("Details")}
                                                    className="pb-1.5"
                                                    style={{ color: activeTab === 'Details' ? '#02C5AF' : '#000', borderBottom: activeTab === 'Details' ? '2px solid #02C5AF' : 'none' }}
                                                >
                                                    Details
                                                </button>
                                                <button
                                                    className="pb-1.5"
                                                    style={{ color: activeTab === 'Checklist' ? '#02C5AF' : '#000', borderBottom: activeTab === 'Checklist' ? '2px solid #02C5AF' : 'none' }}
                                                    onClick={() => setActiveTab("Checklist")}
                                                >
                                                    Checklist
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button style={{ fontSize: '13px', fontWeight: '600' }} className="absolute right-14 top-5 px-3 py-1 bg-gray-100 border-1 text-gray-600 rounded-md flex items-center gap-2 hover:bg-gray-200">
                                        <span>👁</span> Preview
                                    </button>
                                    <button className="close-button p-0" onClick={() => context.setAddCommunityModal(!context.AddCommunityModal)}>
                                        ✖
                                    </button>
                                </div>
                            </div>
                        </div>

                        <hr style={{ color: '#fafafa' }} />

                        {activeTab === "Details" && (
                            <>
                                <div className="row justify-between w-100 pl-10 pr-4 ">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Community Details</h2>
                                        <p style={{ fontSize: '15px', color: 'grey' }}>Enter the basic community details such as the title and description. We'll use your title to generate the URL.</p>
                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg">
                                            <h2 className="popup-title mb-1" style={{ fontSize: '16px', fontWeight: '500' }}>Community Details</h2>
                                            <form onSubmit={handleSubmit} id="courseForm">
                                                <div className="form-group mt-4">
                                                    <label className="form-label" htmlFor="courseTitle">
                                                        Title
                                                    </label>
                                                    <span className="char-counter">{charCount}/60</span>
                                                    <input
                                                        type="text"
                                                        id="courseTitle"
                                                        className="input-field"
                                                        placeholder="e.g., UX Design Masterclass"
                                                        maxLength="60"
                                                        value={title}
                                                        onChange={handleTitleChange}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="courseUrl">
                                                        URL
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="courseUrl"
                                                        className="input-field readonly"
                                                        value={url}
                                                        readOnly
                                                    />
                                                </div>

                                                <div className="form-group rounded-lg">
                                                    <label className="form-label">
                                                        Description <span>(optional)</span>
                                                    </label>
                                                    <div className="rich-text-editor">
                                                        <div className="editor-toolbar">
                                                            <button
                                                                type="button"
                                                                className="editor-button"
                                                                data-command="undo"
                                                                onClick={() => handleToolbarClick('undo')}
                                                            >
                                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="editor-button"
                                                                data-command="redo"
                                                                onClick={() => handleToolbarClick('redo')}
                                                            >
                                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z" />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="editor-button"
                                                                data-command="bold"
                                                                onClick={() => handleToolbarClick('bold')}
                                                            >
                                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="editor-button"
                                                                data-command="italic"
                                                                onClick={() => handleToolbarClick('italic')}
                                                            >
                                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="editor-button"
                                                                data-command="underline"
                                                                onClick={() => handleToolbarClick('underline')}
                                                            >
                                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="editor-button"
                                                                data-command="insertOrderedList"
                                                                onClick={() => handleToolbarClick('insertOrderedList')}
                                                            >
                                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z" />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="editor-button"
                                                                data-command="insertUnorderedList"
                                                                onClick={() => handleToolbarClick('insertUnorderedList')}
                                                            >
                                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="editor-content"
                                                            id="description"
                                                            contentEditable="true"
                                                            style={{ fontSize: '13px' }}
                                                            onInput={handleDescriptionChange}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div className="form-group px-3 py-3 border rounded-lg">
                                                    <label
                                                        style={{
                                                            display: "block",
                                                            marginBottom: "18px",
                                                            fontWeight: "bold",
                                                            color: "#333",
                                                            fontSize: '15px'
                                                        }}
                                                    >
                                                        Avatar
                                                    </label>
                                                    {/* Avatar Preview */}
                                                    <div className="flex items-center gap-4" style={{ width: "100%" }}>
                                                        <img
                                                            src={preview || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHylL97CjJ3JctnR5MzdMVvsJSeR5-TnVL4w&s"}
                                                            alt="Avatar Preview"
                                                            style={{
                                                                width: "55px",
                                                                height: "55px",
                                                                borderRadius: "50px",
                                                                objectFit: "cover",
                                                            }}
                                                        />
                                                        {/* Upload Button */}
                                                        <div className="flex flex-col">
                                                            <span className="mb-1" style={{ fontSize: "12px", color: "#666" }}>
                                                                Recommended dimensions of <strong>100×100</strong>
                                                            </span>
                                                            <input
                                                                type="file"
                                                                accept="image/*"
                                                                id="avatarInput"
                                                                onChange={handleAvatarChange}
                                                                style={{ display: "none" }}
                                                            />
                                                            <label
                                                                htmlFor="avatarInput"
                                                                className="upload-button inline-flex items-center gap-2 mt-2 w-auto"
                                                                style={{ display: "inline-flex", fontWeight: '500' }}>
                                                                {preview === null ?
                                                                    <svg
                                                                        fill="none"
                                                                        viewBox="0 0 48 48"
                                                                        width="24"
                                                                        height="24"
                                                                    >
                                                                        <rect fill="#F0F9FF" rx="24" height="48" width="48"></rect>
                                                                        <path
                                                                            fill="#283593"
                                                                            d="M17.3307 13C16.8887 13 16.4648 13.1756 16.1522 13.4882C15.8397 13.8007 15.6641 14.2246 15.6641 14.6667V33.3333C15.6641 33.7754 15.8397 34.1993 16.1522 34.5118C16.4648 34.8244 16.8887 35 17.3307 35H30.6641C31.1061 35 31.53 34.8244 31.8426 34.5118C32.1551 34.1993 32.3307 33.7754 32.3307 33.3333V19.6667H27.9974C27.3786 19.6667 26.7851 19.4208 26.3475 18.9832C25.9099 18.5457 25.6641 17.9522 25.6641 17.3333V13H17.3307ZM27.6641 14.4142L30.9165 17.6667H27.9974C27.909 17.6667 27.8242 17.6315 27.7617 17.569C27.6992 17.5065 27.6641 17.4217 27.6641 17.3333V14.4142Z"
                                                                            clipRule="evenodd"
                                                                            fillRule="evenodd"
                                                                        ></path>
                                                                    </svg>
                                                                    :
                                                                    ""}
                                                                {preview === null ? 'Choose Avatar' : 'Replace Avatar'}
                                                            </label>
                                                        </div>
                                                    </div>


                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="thumbnail" className="form-label mb-2">
                                                        Cover Image
                                                    </label>
                                                    <div className="upload-section">
                                                        <div className="upload-preview relative flex-col flex-md-row">
                                                            <div className="" id="thumbnailPreview">
                                                                {thumbnailPreview ? (
                                                                    <>
                                                                        <img
                                                                            src={thumbnailPreview}
                                                                            alt="Thumbnail Preview"
                                                                            className="object-cover h-24 w-24 rounded-lg"
                                                                        />
                                                                    </>
                                                                ) : (
                                                                    <img
                                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAKlBMVEXh4eH////i4uLz8/Pt7e3l5eX6+vre3t7v7+/o6Oj19fXq6ur8/Pzu7u4uYrGjAAAEEklEQVR4nO2cbZebIBBGcQCHF/3/f7czgEaNSUw/1O3y3G1rNJ4e9p4Bh1E0BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQHXR3A/4z+O4G/A8wsyGfQxr93U35uYgjQzHPNk1DJSG4Go9RqVpyNo2LpcYIWSusf6S/PVuaxmSzbO9u4c+AZVCazyXN2VMZuOQ7XBOV9GwpOO+3cjgNA0Z4gVZJU0pOQ0kvgWafXtlhyDe17wdBxHqpC9n7JomIyj9UPxeMG4b5sdtvj+SxjkfvHLCM8HZzOeS3Z/9mUuliGk45uxcEyR12B3qVNQ+DK66GLxjvbvVNaBfTrf9GVq9pl0hKbStXxEv0K4tap1JZekX8TM8J/TRMulFZV0ZtYtexrHGYND2HrAvoXCaaoywyr5KDvmW1ucxO1psQ61uW/O6Bn7rhy/pV17JMrHXQjSztgUGm1cQnEda3LF/roFtZJpa6zRRP4qtvWZJoae6wi6ylbIPIOlLroBtZOuZX7O7E8nXnsmod9CGLJPVaJsybfkjVVt+yWu6wlTWdyMqhfu5cVtAizS51SIustJ4US4JBvcvSorHdD/BxkdVuU1CZPA+WJZnoWxbVIs02sjTYFLfsx6H0zCCJV+eyTBmbdhk8+zRNY+R2/ctLpGlP7FqW4fLLv6468NorS2x1Lqvc4DlUHXidTEtcbe7DOtOzLGo3nF9E1qYPtjS1Z1mm3nDmfYlmqWYdXUGWFmnMuax9H4SsUqSxD1nEttSZiUpcTYisHVqkecgq0+hQKsvHPghZrUizyrJtosMncQVZ9W7YImspz0zxJK4gS++GDb7JCquWyT7HFWSVaPJUZaWNmBNXkKXhlFKRxelEEGRtcc0ElakPZL1lmSlD1mfIuOAyZF2izG3q1RBj1ifKTNAjsi6xlXUhsnp+mK3RktJPkRUgy6yyfPTviB6yzCLr47N/RJCFB3C/QmWN14AsLBq4Dn21HGXq/QUGPtnL+E4XOj3ga+N7XZZ4d2MB+GX0utTyb+DDA9zPz3NvHhPpHLkKztt9mulJF1lj7PFgj3hrstUJtCMTnTeUKGbvDOXI5LLxuoQ6MY8sBz15ch2/48FbERFTjDlF65NEUQghxUQ5ef0JUWJqsmkysufKsbubfB8iy6ToWEQEbyyT5Jy6G6zIYytHZ40sOUcsukhjCL7b1/j4JHEUnSlRY1WW8xJMKbhRvpK/OYssw6OckV1mO7vP/+lvhaguntAEQi3VV4boW49EJI2GZBjjuljTl/N81wk8LT8U5nqvh9sm27ICZT1vv+2Q+gTbzsAxSdWgqy+paZ//YfMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwxB9tox9y/+ljpQAAAABJRU5ErkJggg=="
                                                                        alt="Thumbnail preview"
                                                                        className="h-24 w-38 object-cover rounded-lg"
                                                                    />
                                                                )}
                                                            </div>
                                                            <div className="upload-info">
                                                                <p className="upload-dimensions" style={{ fontSize: '12.5px' }}>
                                                                    Recommended dimensions of <strong>1280×720</strong>
                                                                </p>
                                                                <label
                                                                    htmlFor="thumbnailInput"
                                                                    className="upload-button inline-flex items-center gap-2 mt-1 w-auto"
                                                                    style={{ display: "inline-flex", fontSize: '13px', fontWeight: '500' }}
                                                                >
                                                                    {thumbnailPreview === null ?
                                                                        <svg
                                                                            fill="none"
                                                                            viewBox="0 0 48 48"
                                                                            width="24"
                                                                            height="24"
                                                                        >
                                                                            <rect fill="#F0F9FF" rx="24" height="48" width="48"></rect>
                                                                            <path
                                                                                fill="#283593"
                                                                                d="M17.3307 13C16.8887 13 16.4648 13.1756 16.1522 13.4882C15.8397 13.8007 15.6641 14.2246 15.6641 14.6667V33.3333C15.6641 33.7754 15.8397 34.1993 16.1522 34.5118C16.4648 34.8244 16.8887 35 17.3307 35H30.6641C31.1061 35 31.53 34.8244 31.8426 34.5118C32.1551 34.1993 32.3307 33.7754 32.3307 33.3333V19.6667H27.9974C27.3786 19.6667 26.7851 19.4208 26.3475 18.9832C25.9099 18.5457 25.6641 17.9522 25.6641 17.3333V13H17.3307ZM27.6641 14.4142L30.9165 17.6667H27.9974C27.909 17.6667 27.8242 17.6315 27.7617 17.569C27.6992 17.5065 27.6641 17.4217 27.6641 17.3333V14.4142Z"
                                                                                clipRule="evenodd"
                                                                                fillRule="evenodd"
                                                                            ></path>
                                                                        </svg>
                                                                        : ''
                                                                    }
                                                                    {thumbnailPreview === null ? 'Choose Image' : 'Replace Image'}
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <input
                                                            type="file"
                                                            id="thumbnailInput"
                                                            accept="image/*"
                                                            onChange={(e) => handleFileChange(e, setThumbnailPreview)}
                                                            className="hidden"
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-between w-100 pl-10 pr-4 mt-3">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                                        <h2 className="popup-title mb-2" style={{ fontSize: '18px', fontWeight: '500' }}>Spaces</h2>
                                        <p style={{ fontSize: '15px', color: 'grey' }}>Manage space details and view Access Options.</p>
                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg">
                                            <h2 className="popup-title mb-2" style={{ fontSize: '16px', fontWeight: '500' }}>Spaces</h2>
                                            <form onSubmit={handleSubmit} id="courseForm">
                                                <div className="mt-3">
                                                    <div className="space-y-4">
                                                        {spaces.map((space) => (
                                                            <>
                                                                <div key={space.id} className="relative py-4 px-2 rounded-lg" style={{ background: '#f8f8f8' }}>
                                                                    {/* Card */}
                                                                    <div
                                                                        className="rounded-lg flex items-center justify-between transition cursor-pointer"
                                                                        onClick={() => setActiveSpace(activeSpace === space.id ? null : space.id)}
                                                                        onMouseEnter={() => setHoveredSpace(space.id)}
                                                                        onMouseLeave={() => setHoveredSpace(null)}

                                                                    >
                                                                        <div className="flex items-center gap-2 py-1 px-2 bg-white border-2" style={{ borderRadius: '50px' }}>
                                                                            <span style={{ fontSize: '12px' }}>{space.icon}</span>
                                                                            <span className="font-medium" style={{ color: '#3B6E91', fontSize: '13px' }}>{space.name}</span>
                                                                        </div>
                                                                        <div className="flex items-center">
                                                                            {/* Stats (only visible on hover) */}
                                                                            {hoveredSpace === space.id && (
                                                                                <>
                                                                                    <div className="flex items-center gap-2.5 mr-2">
                                                                                        <div className="flex items-center gap-2">
                                                                                            <span role="img" aria-label="Views"> <svg className="w-3 h-3" fill="none" viewBox="0 0 20 20">
                                                                                                <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                                            </svg></span>
                                                                                            <span style={{ fontSize: '13px' }}>{space.stats.views}</span>
                                                                                        </div>
                                                                                        <div className="flex items-center gap-2">
                                                                                            <span role="img" aria-label="Comments"><svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                                                                <path fill="currentColor" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                                                <path fill="currentColor" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                                            </svg></span>
                                                                                            <span style={{ fontSize: '13px' }}>{space.stats.comments}</span>
                                                                                        </div>
                                                                                        <div className="flex items-center gap-2">
                                                                                            <span style={{ fontSize: '12px' }} role="img" aria-label="Likes">👍</span>
                                                                                            <span style={{ fontSize: '13px' }}>{space.stats.likes}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </>
                                                                            )}
                                                                            {/* Members */}
                                                                            <div className="flex -space-x-2 mr-1">
                                                                                {space.members.map((member, index) => (
                                                                                    <img
                                                                                        key={index}
                                                                                        src={member}
                                                                                        alt="Member"
                                                                                        className="w-6 h-6 rounded-lg border border-white"
                                                                                    />
                                                                                ))}
                                                                            </div>
                                                                            <svg className="w-4 h-4" style={{ rotate: activeSpace === space.id ? "180deg" : "0deg" }} viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Dropdown Content */}
                                                                {activeSpace === space.id && (
                                                                    <>
                                                                        <div className="form-group">
                                                                            <label htmlFor="schoolName" className="form-label mb-2">
                                                                                Name
                                                                            </label>
                                                                            <div className="d-flex align-items-center gap-2">
                                                                                <input
                                                                                    type="text"
                                                                                    id="schoolName"
                                                                                    placeholder="Space Name"
                                                                                    required
                                                                                    className="school-inputs"
                                                                                    value={SpaceTitle} // Bind state
                                                                                    onChange={(e) => setSpaceTitle(e.target.value)} // Update state
                                                                                />
                                                                                <div className="emoji-wrapper">
                                                                                    <div className="emoji-label mb-2">Emoji</div>
                                                                                    <button
                                                                                        type="button"
                                                                                        id="emojiButton"
                                                                                        className="emoji-button flex items-center justify-center w-10 h-10 "
                                                                                        onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
                                                                                    >
                                                                                        {selectedEmoji ? selectedEmoji : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 87 88" fill="none">
                                                                                            <path d="M43.5 0C19.5148 0 0 19.7391 0 44C0 68.2609 19.5148 88 43.5 88C67.4852 88 87 68.2609 87 44C87 19.7391 67.4852 0 43.5 0ZM43.5 6.76923C63.868 6.76923 80.3077 23.3978 80.3077 44C80.3077 64.6022 63.868 81.2308 43.5 81.2308C23.132 81.2308 6.69231 64.6022 6.69231 44C6.69231 23.3978 23.132 6.76923 43.5 6.76923ZM40.1538 23.6923V40.6154H23.4231V47.3846H40.1538V64.3077H46.8462V47.3846H63.5769V40.6154H46.8462V23.6923H40.1538Z" fill="black" />
                                                                                        </svg>}
                                                                                    </button>
                                                                                    {isEmojiPickerOpen && (
                                                                                        <div className="absolute z-50 mt-2 top-16 right-0 bg-white shadow-lg rounded-lg p-2">
                                                                                            <Picker data={data} onEmojiSelect={handleEmojiSelect} />
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group rounded-lg">
                                                                            <label className="form-label">
                                                                                Description
                                                                            </label>
                                                                            <div className="rich-text-editor h-48">
                                                                                <div className="editor-toolbar">
                                                                                    <button
                                                                                        type="button"
                                                                                        className="editor-button"
                                                                                        data-command="undo"
                                                                                        onClick={() => handleToolbarClick('undo')}
                                                                                    >
                                                                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                                                                            <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" />
                                                                                        </svg>
                                                                                    </button>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="editor-button"
                                                                                        data-command="redo"
                                                                                        onClick={() => handleToolbarClick('redo')}
                                                                                    >
                                                                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                                                                            <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z" />
                                                                                        </svg>
                                                                                    </button>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="editor-button"
                                                                                        data-command="bold"
                                                                                        onClick={() => handleToolbarClick('bold')}
                                                                                    >
                                                                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                                                                            <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
                                                                                        </svg>
                                                                                    </button>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="editor-button"
                                                                                        data-command="italic"
                                                                                        onClick={() => handleToolbarClick('italic')}
                                                                                    >
                                                                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                                                                            <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" />
                                                                                        </svg>
                                                                                    </button>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="editor-button"
                                                                                        data-command="underline"
                                                                                        onClick={() => handleToolbarClick('underline')}
                                                                                    >
                                                                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                                                                            <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" />
                                                                                        </svg>
                                                                                    </button>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="editor-button"
                                                                                        data-command="insertOrderedList"
                                                                                        onClick={() => handleToolbarClick('insertOrderedList')}
                                                                                    >
                                                                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                                                                            <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z" />
                                                                                        </svg>
                                                                                    </button>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="editor-button"
                                                                                        data-command="insertUnorderedList"
                                                                                        onClick={() => handleToolbarClick('insertUnorderedList')}
                                                                                    >
                                                                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                                                                            <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
                                                                                        </svg>
                                                                                    </button>
                                                                                </div>
                                                                                <div
                                                                                    className="editor-content "
                                                                                    id="description"
                                                                                    contentEditable="true"
                                                                                    style={{ fontSize: '13px' }}
                                                                                    onInput={handleDescriptionChange}
                                                                                ></div>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )}
                                                            </>
                                                        ))}
                                                    </div>
                                                </div>
                                                <hr className="my-4" />
                                                <div className="form-group">
                                                    <label htmlFor="thumbnail" className="form-label mb-2">
                                                        Linked Products
                                                    </label>
                                                    {AddCommunityModalProducts.length > 0 && (
                                                        <ul className="product-list mt-4">
                                                            {AddCommunityModalProducts.map((product) => (
                                                                <li className="flex items-center justify-between mb-4" key={product.id} onClick={() => addProduct(product)}>
                                                                    <div className="flex items-center gap-3">
                                                                        <img width={55} height={55} className="rounded" src={product.image} />
                                                                        <div className="">
                                                                            <div className="inline-flex items-center gap-1  rounded" style={product.type === 'Course' ? { backgroundColor: '#dbe9fe', color: '#1c4ed8', fontWeight: '500', fontSize: '13px', padding: '2px 7px' } : { padding: '2px 7px', backgroundColor: '#fee2e1', color: '#991b1b', fontWeight: '500', fontSize: '13px' }}>
                                                                                {product.type === 'Course' ? <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                                    <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                                </svg> : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                                                    <path fill="currentColor" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clipRule="evenodd" fillRule="evenodd"></path>
                                                                                </svg>}
                                                                                <span className="product-type mb-1">{product.type}</span>
                                                                            </div> <br />
                                                                            <span className="product-name" style={{ fontSize: '13px', fontWeight: '600' }}>{product.name}</span>
                                                                        </div>
                                                                    </div>
                                                                    <span className="product-price" style={{ fontSize: '13.5px', fontWeight: '500' }}>${product.price}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end mt-2 mb-4 mr-7">
                                    <button type="submit" className="submit-btn mt-1" style={{ marginLeft: 'auto' }}>
                                        Save Community
                                    </button>
                                </div>
                            </>
                        )}
                        {activeTab === "Checklist" && (
                            <>
                                <div className="row checklist-modal justify-between w-100 pl-10 pr-4 ">
                                    <div className="course-content col-12 border rounded">
                                        <div className="content-header">
                                            <div className="header-left">
                                                <h1 className="header-title">Community Checklist</h1>
                                                <div className="header-progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-fill" style={{ width: '20px' }}></div>
                                                    </div>
                                                    <span className="issues-count">20 issues left</span>
                                                </div>
                                            </div>
                                            <div className="expand-dropdown">
                                                <div className="view-toggle">
                                                    <span className="toggle-label">Show Completed</span>
                                                    <label className="toggle-switch">
                                                        <input
                                                            type="checkbox"
                                                            id="viewToggle"
                                                            checked={showCompleted}
                                                            onChange={handleToggle}
                                                        />
                                                        <span className="toggle-slider"></span>
                                                    </label>
                                                </div>
                                                <button className="expand-button" onClick={() => setexpandmenu(!expandmenu)}>
                                                    Expand
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path
                                                            d="M4 6l4 4 4-4"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </button>
                                                <div className={`expand-menu ${expandmenu === true ? 'active' : ''}`}>
                                                    <button onClick={handleExpandAllIssues} className="expand-all">Expand All</button>
                                                    <button onClick={handleExpandIssues} className="expand-issues">Expand Issues</button>
                                                    <button onClick={handleExpandCompleted} className="expand-completed">Expand Completed</button>
                                                </div>
                                            </div>
                                        </div>
                                        {profileChecklistData.map((data, index) => {
                                            return (
                                                <div className={`section ${profilesectionexpand === true ? 'expanded' : ''}`}>
                                                    <div className="section-header mb-0" onClick={() => setprofilesectionexpand(!profilesectionexpand)}>
                                                        <div className="header-left">
                                                            <div className="section-title mb-0">{data.sectionTitle}</div>
                                                            <div className="status-badge status-error">
                                                                <svg className="status-icon" viewBox="0 0 15 15">
                                                                    <path
                                                                        clipRule="evenodd"
                                                                        fillRule="evenodd"
                                                                        fill="currentColor"
                                                                        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                                                    />
                                                                </svg>
                                                                {data.issues} issues
                                                            </div>
                                                        </div>
                                                        <div className="header-right">
                                                            <div className="progress-circle relative">
                                                                <svg width="24" height="24" viewBox="0 0 24 24">
                                                                    <circle className="bg" cx="12" cy="12" r="10" />
                                                                    <circle className="progress" cx="12" cy="12" r="10"
                                                                        strokeDasharray="62.8"
                                                                        strokeDashoffset={62.8 - (data.progress / 100) * 62.8} />
                                                                </svg>
                                                                <div className="tooltip">{data.progress}% Complete</div>
                                                            </div>
                                                            <svg className="chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="section-content">
                                                        {data.checklistItems.map((item, itemIndex) => (
                                                            <div className="checklist-item" key={itemIndex}>
                                                                <div className="item-header" >
                                                                    <div className="item-icon">
                                                                        {item.icon}
                                                                    </div>
                                                                    <div className="item-title">{item.title}</div>
                                                                    {item.action ? <button className="fix-button">{item.action}</button> :
                                                                        <div class="item-status status-completed">
                                                                            <svg width="20" height="20" viewBox="0 0 20 20">
                                                                                <path d="M10 0a10 10 0 110 20 10 10 0 010-20zm3.77 7.23l-4.95 4.95-2.59-2.59L4.77 11l3.18 3.18 5.59-5.59-1.77-1.36z" fill="currentColor" />
                                                                            </svg>
                                                                            {item.status}
                                                                        </div>
                                                                    }
                                                                    <div className="item-expand" onClick={() => toggleExpand2(`${index}-${itemIndex}`)}>
                                                                        <svg style={{
                                                                            transform: expandedState2[`${index}-${itemIndex}`] ? 'rotate(180deg)' : 'rotate(0deg)',
                                                                            transition: 'transform 0.2s ease',
                                                                        }}
                                                                            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className={`item-details ${expandedState2[`${index}-${itemIndex}`] ? 'expanded' : ''
                                                                    }`}>
                                                                    <div className="issue-description">
                                                                        {
                                                                            (() => {
                                                                                let is200Handled = false;
                                                                                let is1Handled = false;
                                                                                let isPricingHandled = false;

                                                                                return item.description.split(/(200|1|visit our pricing page)/g).map((part, index) => {
                                                                                    if (part === "200" && !is200Handled) {
                                                                                        is200Handled = true;
                                                                                        return (
                                                                                            <span key={index} className="required-count">
                                                                                                {part}
                                                                                            </span>
                                                                                        );
                                                                                    }
                                                                                    if (part === "1" && !is1Handled) {
                                                                                        is1Handled = true;
                                                                                        return (
                                                                                            <span key={index} className="required-count">
                                                                                                {part}
                                                                                            </span>
                                                                                        );
                                                                                    }
                                                                                    if (part === "visit our pricing page" && !isPricingHandled) {
                                                                                        isPricingHandled = true;
                                                                                        return (
                                                                                            <a key={index} href="#pricing" className="affected-link">
                                                                                                {part}
                                                                                            </a>
                                                                                        );
                                                                                    }
                                                                                    return part;
                                                                                });
                                                                            })()
                                                                        }

                                                                        {item.currentPrice ? <span className="highlight-success">{item.currentPrice}</span> : ''}
                                                                        {item.duration ? <span className="keyword-highlight">{item.duration}</span> : ''}

                                                                        <br />
                                                                        {item.TitleLineError ? <div class="keyword-highlight">{item.TitleLineError}</div> : ''}
                                                                        {item.restDescription ? item.restDescription : ''}
                                                                        <div class="affected-items">
                                                                            {item.affectedItemsText}
                                                                            <span href="#" class="affected-link cursor-pointer">
                                                                                {item.affectedItemsIcon}
                                                                                {item.affectedItems && item.affectedItems.length > 0 ? (
                                                                                    item.affectedItems.map((affectedItem, index) => (
                                                                                        <span key={index}>{affectedItem}</span>
                                                                                    ))
                                                                                ) : (
                                                                                    ''
                                                                                )}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        {communityChecklistData.map((data, index) => {
                                            return (
                                                <div className={`section ${communitysectionexpand === true ? 'expanded' : ''}`}>
                                                    <div className="section-header mb-0" onClick={() => setcommunitysectionexpand(!communitysectionexpand)}>
                                                        <div className="header-left">
                                                            <div className="section-title mb-0">{data.sectionTitle}</div>
                                                            <div className="status-badge status-error">
                                                                <svg className="status-icon" viewBox="0 0 15 15">
                                                                    <path
                                                                        clipRule="evenodd"
                                                                        fillRule="evenodd"
                                                                        fill="currentColor"
                                                                        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                                                    />
                                                                </svg>
                                                                {data.issues} issues
                                                            </div>
                                                        </div>
                                                        <div className="header-right">
                                                            <div className="progress-circle relative">
                                                                <svg width="24" height="24" viewBox="0 0 24 24">
                                                                    <circle className="bg" cx="12" cy="12" r="10" />
                                                                    <circle className="progress" cx="12" cy="12" r="10"
                                                                        strokeDasharray="62.8"
                                                                        strokeDashoffset={62.8 - (data.progress / 100) * 62.8} />
                                                                </svg>
                                                                <div className="tooltip">{data.progress}% Complete</div>
                                                            </div>
                                                            <svg className="chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="section-content">
                                                        {data.checklistItems.map((item, itemIndex) => (
                                                            <div className="checklist-item" key={itemIndex}>
                                                                <div className="item-header" >
                                                                    <div className="item-icon">
                                                                        {item.icon}
                                                                    </div>
                                                                    <div className="item-title">{item.title}</div>
                                                                    {item.action ? <button className="fix-button">{item.action}</button> :
                                                                        <div class="item-status status-completed">
                                                                            <svg width="20" height="20" viewBox="0 0 20 20">
                                                                                <path d="M10 0a10 10 0 110 20 10 10 0 010-20zm3.77 7.23l-4.95 4.95-2.59-2.59L4.77 11l3.18 3.18 5.59-5.59-1.77-1.36z" fill="currentColor" />
                                                                            </svg>
                                                                            {item.status}
                                                                        </div>
                                                                    }
                                                                    <div className="item-expand" onClick={() => toggleExpand4(`${index}-${itemIndex}`)}>
                                                                        <svg style={{
                                                                            transform: expandedState4[`${index}-${itemIndex}`] ? 'rotate(180deg)' : 'rotate(0deg)',
                                                                            transition: 'transform 0.2s ease',
                                                                        }}
                                                                            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className={`item-details ${expandedState4[`${index}-${itemIndex}`] ? 'expanded' : ''
                                                                    }`}>
                                                                    <div className="issue-description">
                                                                        {
                                                                            (() => {
                                                                                let is1Handled = false;
                                                                                let isPricingHandled = false;

                                                                                return item.description.split(/(1|contact support)/g).map((part, index) => {

                                                                                    if (part === "1" && !is1Handled) {
                                                                                        is1Handled = true;
                                                                                        return (
                                                                                            <span key={index} className="required-count">
                                                                                                {part}
                                                                                            </span>
                                                                                        );
                                                                                    }
                                                                                    if (part === "contact support" && !isPricingHandled) {
                                                                                        isPricingHandled = true;
                                                                                        return (
                                                                                            <a key={index} href="#contactsupport" className="affected-link">
                                                                                                {part}
                                                                                            </a>
                                                                                        );
                                                                                    }
                                                                                    return part;
                                                                                });
                                                                            })()
                                                                        }

                                                                        {item.currentPrice ? <span className="highlight-success">{item.currentPrice}</span> : ''}
                                                                        {item.duration ? <span className="keyword-highlight">{item.duration}</span> : ''}

                                                                        <br />
                                                                        {item.TitleLineError ? <div class="keyword-highlight">{item.TitleLineError}</div> : ''}
                                                                        {item.restDescription ? item.restDescription : ''}
                                                                        <div class="affected-items">
                                                                            {item.affectedItemsText}
                                                                            <span href="#" class="affected-link cursor-pointer">
                                                                                {item.affectedItemsIcon}
                                                                                {item.affectedItems && item.affectedItems.length > 0 ? (
                                                                                    item.affectedItems.map((affectedItem, index) => (
                                                                                        <span key={index}>{affectedItem}</span>
                                                                                    ))
                                                                                ) : (
                                                                                    ''
                                                                                )}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCommunity;