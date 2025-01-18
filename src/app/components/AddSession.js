"use client";
import { useContext, useState } from "react";
import { MyContext } from "../layout";

const AddSession = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [url, setUrl] = useState("");
    const [charCount, setCharCount] = useState(0);
    const context = useContext(MyContext);
    const [activeTab, setActiveTab] = useState("Landing Page");

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
        setUrl(value ? `https://skillhub.com/event/${slugify(value)}-${randomSuffix}` : "");
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
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [courses] = useState([
        { id: 1, title: "How to Get Funded", image: "https://i.ibb.co/jJ4GHXP/img1.jpg" },
        { id: 2, title: "Best Coaching Practices", image: "https://i.ibb.co/k67BZds/community-image1.png" },
        { id: 3, title: "Advanced Business Strategy", image: "https://i.ibb.co/LJwrLdW/coaching-image.webp" },
    ]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleSelectCourse = (course) => {
        if (!selectedCourses.find((item) => item.id === course.id)) {
            setSelectedCourses([...selectedCourses, course]);
        }
    };

    const handleRemoveCourse = (id) => {
        setSelectedCourses(selectedCourses.filter((course) => course.id !== id));
    };

    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm)
    );
    const [items, setItems] = useState(["Item 1", "Item 2"]);

    const handleAddItem = () => {
        setItems([...items, `Item ${items.length + 1}`]);
    };

    const handleRemoveItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const handleUpdateItem = (index, value) => {
        const updatedItems = [...items];
        updatedItems[index] = value;
        setItems(updatedItems);
    };
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedTopic, setSelectedTopic] = useState("");

    const languages = ["English", "Spanish", "French", "German"];
    const levels = ["Beginner", "Intermediate", "Advanced"];
    const categories = ["Technology", "Health", "Education", "Business"];
    const topics = ["AI", "Fitness", "Teaching", "Marketing"];

    const [searchTermInstructor, setSearchTermInstructor] = useState("");
    const [selectedInstructors, setSelectedInstructors] = useState([]);

    const initialInstructors = [
        { id: 1, name: "Steve Karbra", avatar: "https://i.pravatar.cc/50?img=1" },
        { id: 2, name: "Jane Doe", avatar: "https://i.pravatar.cc/50?img=2" },
        { id: 3, name: "John Smith", avatar: "https://i.pravatar.cc/50?img=3" },
        { id: 4, name: "Alice Brown", avatar: "https://i.pravatar.cc/50?img=4" },
    ];

    const [availableInstructors, setAvailableInstructors] = useState(initialInstructors);

    const handleCheckboxChange = (instructor) => {
        if (selectedInstructors.some((item) => item.id === instructor.id)) {
            // Remove from selected and add back to available
            setSelectedInstructors(selectedInstructors.filter((item) => item.id !== instructor.id));
        } else {
            // Add to selected
            setSelectedInstructors([...selectedInstructors, instructor]);
        }
    };

    const handleRemoveSelected = (instructor) => {
        // Remove from selected
        setSelectedInstructors(selectedInstructors.filter((item) => item.id !== instructor.id));
    };

    const filteredInstructors = availableInstructors.filter((instructor) =>
        instructor.name.toLowerCase().includes(searchTermInstructor.toLowerCase())
    );
  const [isCommunityEnabled, setIsCommunityEnabled] = useState(false);
    const [searchTerm4, setSearchTerm4] = useState("");
    const [selectedCommunity, setSelectedCommunity] = useState(null);

    const [toggles, setToggles] = useState({
        all: false,
        announcements: true,
        news: true,
        weeklyReview: false,
        askQuestions: true,
        chat: false,
    });

    const communities = [
        { id: 1, name: "Design Community", type: "Community", image: 'https://i.ibb.co/jJ4GHXP/img1.jpg', },
        { id: 2, name: "Development Hub", type: "Community", image: "https://i.ibb.co/hBpWGQ7/c3.jpg" },
    ];

    const filteredCommunities = communities.filter((community) =>
        community.name.toLowerCase().includes(searchTerm4.toLowerCase())
    );

    const handleSelectCommunity = (community) => {
        setSelectedCommunity(community);
    };

    const handleRemoveCommunity = () => {
        setSelectedCommunity(null);
    };

    const [searchTerm5, setSearchTerm5] = useState("");
    const [selectedSchools, setselectedSchools] = useState(null);
    const Schools = [
        { id: 1, name: "My UX School", image: 'https://i.ibb.co/jJ4GHXP/img1.jpg', },
        { id: 2, name: "Development Hub", image: "https://i.ibb.co/hBpWGQ7/c3.jpg" },
    ];

    const filteredSchools = Schools.filter((community) =>
        community.name.toLowerCase().includes(searchTerm5.toLowerCase())
    );

    const handleSelectSchools = (community) => {
        setselectedSchools(community);
    };

    const handleRemoveSchools = () => {
        setselectedSchools(null);
    };

    const toggleButton = (key) => {
        if (key === "all") {
            const toggleAll = !toggles.all;
            setToggles({
                all: toggleAll,
                announcements: toggleAll,
                news: toggleAll,
                weeklyReview: toggleAll,
                askQuestions: toggleAll,
                chat: toggleAll,
            });
        } else {
            setToggles((prev) => ({
                ...prev,
                [key]: !prev[key],
                all: false,
            }));
        }
    };
    const [standardEnabled, setStandardEnabled] = useState(false);
    const [premiumEnabled, setPremiumEnabled] = useState(false);

    useEffect(() => {
        // Get the query parameters from the URL
        const params = new URLSearchParams(window.location.search);
        const tab = params.get('tab'); // Get the 'tab' parameter

        // Update the activeTab based on the URL query parameter
        if (tab) {
            setActiveTab(tab);
        }
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        context.AddSessionModal &&
        <div className="modal-overlay h-screen" style={{ overflowY: 'auto' }}>
            <div className="modal-container h-screen p-0" style={{ width: '80%', textAlign: 'left', height: `calc(100vh - 80px)`, background: '#f2f2f2' }}>
                <div className='popup-container'>
                    <div className="popup">
                        <div className="popup-header w-100">
                            {/* Header Section */}
                            <div className="flex items-center w-100 ">
                                <div className="flex items-center gap-4 w-100">
                                    <img
                                        src="https://i.ibb.co/k67BZds/community-image1.png"
                                        alt="Thumbnail"
                                        className="w-24 h-16 rounded-md object-cover"
                                    />
                                    <div className="flex flex-col gap-3 w-100 ">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <h1 className="text-lg font-semibold">UX Design Masterclass</h1>
                                                <span className="text-gray-500 text-sm flex items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <circle cx="8" cy="8" r="7"></circle>
                                                        <path d="M6.06 6a2 2 0 1 1 3.93 0c0 1.33-2 2-2 2"></path>
                                                        <line x1="8" y1="12" x2="8.01" y2="12"></line>
                                                    </svg>
                                                </span>
                                            </div>
                                            <button className="p-0" onClick={() => context.setAddSessionModal(!context.AddSessionModal)}>
                                                ✖
                                            </button>
                                        </div>
                                        <div className="d-flex flex-column flex-md-row align-items-start aling-items-md-center justify-content-between gap-3">
                                            <div className="d-flex flex-wrap gap-3" style={{ fontSize: '13px', fontWeight: '600' }}>
                                                <button
                                                    onClick={() => setActiveTab("Outline")}
                                                    className="pb-1.5"
                                                    style={{ color: activeTab === 'Outline' ? '#02C5AF' : '#000', borderBottom: activeTab === 'Outline' ? '2px solid #02C5AF' : 'none' }}
                                                >
                                                    Outline
                                                </button>
                                                <button
                                                    className="pb-1.5"
                                                    style={{ color: activeTab === 'Landing Page' ? '#02C5AF' : '#000', borderBottom: activeTab === 'Landing Page' ? '2px solid #02C5AF' : 'none' }}
                                                    onClick={() => setActiveTab("Landing Page")}
                                                >
                                                    Landing Page
                                                </button>
                                                <button
                                                    onClick={() => setActiveTab("Pricing")}
                                                    className="pb-1.5"
                                                    style={{ color: activeTab === 'Pricing' ? '#02C5AF' : '#000', borderBottom: activeTab === 'Pricing' ? '2px solid #02C5AF' : 'none' }}
                                                >
                                                    Pricing
                                                </button>
                                                <button
                                                    className="pb-1.5"
                                                    style={{ color: activeTab === 'Checklist' ? '#02C5AF' : '#000', borderBottom: activeTab === 'Checklist' ? '2px solid #02C5AF' : 'none' }}
                                                    onClick={() => setActiveTab("Checklist")}
                                                >
                                                    Checklist
                                                </button>
                                                <button
                                                    className="pb-1.5"
                                                    style={{ color: activeTab === 'Settings' ? '#02C5AF' : '#000', borderBottom: activeTab === 'Settings' ? '2px solid #02C5AF' : 'none' }}
                                                    onClick={() => setActiveTab("Settings")}
                                                >
                                                    Settings
                                                </button>
                                            </div>
                                            <button style={{ fontSize: '13px', fontWeight: '600' }} className="px-3 py-1 bg-grey-100 border-1 text-gray-600 rounded-md flex items-center gap-2 hover:bg-gray-200">
                                                <span>👁</span> Preview
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr style={{ color: '#fafafa' }} />
                        {activeTab === "Landing Page" && (
                            <>
                                <div className="row justify-between w-100 pl-10 pr-4 ">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Event Details</h2>
                                        <p style={{ fontSize: '15px', color: 'grey' }}>Enter the basic event details such as the title and description. We'll use your title to generate the URL.</p>
                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg">
                                            <h2 className="popup-title mb-1" style={{ fontSize: '16px', fontWeight: '500' }}>Event Details</h2>
                                            <form onSubmit={handleSubmit} id="courseForm">
                                                <div className="form-group mt-4">
                                                    <label className="form-label" htmlFor="courseTitle">
                                                        Event Title
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
                                                        Event URL
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
                                                        Description
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
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-between w-100 pl-10 pr-4 mt-3">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '600' }}>Access Settings</h2>
                                        <p className="mb-3" style={{ fontSize: '15x', color: 'grey' }}>
                                            Configure event access options.
                                        </p>
                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg">
                                            <h2 className="popup-title mb-1 " style={{ fontSize: '17px', fontWeight: '600' }}>Include This Event Free</h2>
                                            <p className="mb-3" style={{ fontSize: '12px', color: 'grey' }}>
                                                Select the courses that will include this event for free.
                                            </p>
                                            <form onSubmit={handleSubmit} id="courseForm">
                                                <div className="form-group">
                                                    {/* Selected Courses */}
                                                    <div className="space-y-3 mb-3">
                                                        {selectedCourses.map((course) => (
                                                            <div
                                                                key={course.id}
                                                                className="flex items-center justify-between border p-3 rounded-md cursor-pointer"
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    <img
                                                                        src={course.image}
                                                                        alt={course.title}
                                                                        className="w-20 h-12 rounded-md"
                                                                        style={{ objectFit: 'cover' }}
                                                                    />
                                                                    <span className="fw-medium text-sm">{course.title}</span>
                                                                </div>
                                                                <button
                                                                    onClick={() => handleRemoveCourse(course.id)}
                                                                    className="text-red-500 hover:text-red-700"
                                                                >
                                                                    ✖
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="position-relative">
                                                        <svg style={{ top: '11.5px' }} className="absolute left-3" width='20' height='20' viewBox="1 1 60 60">
                                                            <path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"></path><path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"></path>
                                                        </svg>
                                                        <input
                                                            type="text"
                                                            className="school-inputs"
                                                            style={{ paddingLeft: '38px' }}
                                                            value={searchTerm}
                                                            onChange={handleSearch}
                                                            placeholder="Search courses..."
                                                        />
                                                    </div>
                                                    {/* Course List */}
                                                    <div className="space-y-3 mt-3">
                                                        {filteredCourses.map((course) => (
                                                            <div
                                                                key={course.id}
                                                                className="flex items-center justify-between border p-3 rounded-md cursor-pointer"
                                                                onClick={() => handleSelectCourse(course)}
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    <img
                                                                        src={course.image}
                                                                        alt={course.title}
                                                                        className="w-16 h-12 rounded-md"
                                                                        style={{ objectFit: 'cover' }}
                                                                    />
                                                                    <span className="fw-medium">{course.title}</span>
                                                                </div>
                                                                {selectedCourses.find((item) => item.id === course.id) && (
                                                                    <span className="text-green-500 font-bold">✔</span>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-between w-100 pl-10 pr-4 mt-3">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '600' }}>Agenda</h2>
                                        <p className="mb-3" style={{ fontSize: '15px', color: 'grey' }}>
                                            List all the items you plan to cover in this session.
                                        </p>
                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg">
                                            <h2 className="popup-title mb-3" style={{ fontSize: '17px', fontWeight: '600' }}>List all the items you plan to cover</h2>
                                            <form onSubmit={handleSubmit} id="courseForm">
                                                <div className="form-group">
                                                    <div className="space-y-2">
                                                        {items.map((item, index) => (
                                                            <div key={index} className="flex items-center gap-2 relative">
                                                                <input
                                                                    type="text"
                                                                    value={item}
                                                                    onChange={(e) => handleUpdateItem(index, e.target.value)}
                                                                    className="rounded-lg px-3 flex-1 school-inputs"
                                                                />
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleRemoveItem(index)}
                                                                    className="text-red-500 hover:text-red-700 absolute right-3 text-sm top-3"
                                                                >
                                                                    ✖
                                                                </button>
                                                            </div>
                                                        ))}
                                                        <button
                                                            type="button"
                                                            onClick={handleAddItem}
                                                            style={{ fontSize: '14px' }}
                                                            className="flex items-center gap-2 bg-black text-white py-2.5 px-4 rounded-lg btn-sm"
                                                        >
                                                            <svg strokeWidth={2.5} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                            </svg>
                                                            Add item
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-between w-100 pl-10 pr-4 mt-3">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>General Information</h2>
                                        <p style={{ fontSize: '15px', color: 'grey' }}>Configure the basic settings for your course including language, level, and categories.</p>
                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg">
                                            <h2 className="popup-title mb-1" style={{ fontSize: '16px', fontWeight: '500' }}>General Information</h2>
                                            <form onSubmit={handleSubmit} id="courseForm">
                                                <div className="form-group">
                                                    <div className="space-y-3 mt-3">
                                                        {/* Language Dropdown */}
                                                        <div>
                                                            <div className="relative">
                                                                <select
                                                                    value={selectedLanguage}
                                                                    onChange={(e) => setSelectedLanguage(e.target.value)}
                                                                    className="school-inputs appearance-none"
                                                                >
                                                                    <option value="">
                                                                        Select Language
                                                                    </option>
                                                                    {languages.map((language, index) => (
                                                                        <option key={index} value={language}>
                                                                            {language}
                                                                        </option>
                                                                    ))}
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

                                                        {/* Level Dropdown */}
                                                        <div>
                                                            <div className="relative">
                                                                <select
                                                                    value={selectedLevel}
                                                                    onChange={(e) => setSelectedLevel(e.target.value)}
                                                                    className="school-inputs appearance-none"
                                                                >
                                                                    <option value="">
                                                                        Select Level
                                                                    </option>
                                                                    {levels.map((level, index) => (
                                                                        <option key={index} value={level}>
                                                                            {level}
                                                                        </option>
                                                                    ))}
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

                                                        {/* Category Dropdown */}
                                                        <div>
                                                            <div className="relative">
                                                                <select
                                                                    value={selectedCategory}
                                                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                                                    className="school-inputs appearance-none"
                                                                >
                                                                    <option value="">
                                                                        Select Category
                                                                    </option>
                                                                    {categories.map((category, index) => (
                                                                        <option key={index} value={category}>
                                                                            {category}
                                                                        </option>
                                                                    ))}
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

                                                        {/* Topic Dropdown */}
                                                        <div>
                                                            <div className="relative">
                                                                <select
                                                                    value={selectedTopic}
                                                                    onChange={(e) => setSelectedTopic(e.target.value)}
                                                                    className="school-inputs appearance-none"
                                                                >
                                                                    <option value="" >
                                                                        Select Topic
                                                                    </option>
                                                                    {topics.map((topic, index) => (
                                                                        <option key={index} value={topic}>
                                                                            {topic}
                                                                        </option>
                                                                    ))}
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
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-between w-100 pl-10 pr-4 mt-3">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Co-Instructors</h2>
                                        <p className="mb-3" style={{ fontSize: '15px', color: 'grey' }}>Add Instructors and hosts.</p>
                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg">
                                            <h2 className="popup-title mb-3" style={{ fontSize: '16px', fontWeight: '500' }}>Co-Instructors</h2>
                                            <form onSubmit={handleSubmit} id="courseForm">
                                                <div className="form-group">
                                                    {/* Selected Instructors */}
                                                    {selectedInstructors.length > 0 && (
                                                        <div className="space-y-2 mb-4">
                                                            {selectedInstructors.map((instructor) => (
                                                                <div
                                                                    key={instructor.id}
                                                                    className="flex items-center justify-between border py-2 px-3 rounded"
                                                                >
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="border rounded-lg p-2">
                                                                            <img
                                                                                src={instructor.avatar}
                                                                                alt={instructor.name}
                                                                                className="w-8 h-8 rounded-full"
                                                                            />
                                                                        </div>
                                                                        <div className="info">
                                                                            <span className="fw-bold">{instructor.name}</span>
                                                                            <div className="flex items-center gap-2 mt-1">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    id={`${instructor.id}`}
                                                                                    checked={selectedInstructors.some((item) => item.id === instructor.id)}
                                                                                    onChange={() => handleCheckboxChange(instructor)}
                                                                                />
                                                                                <label htmlFor={`${instructor.id}`} style={{ fontSize: '13px', whiteSpace: 'nowrap', fontWeight: '500' }}>Assign as Host.</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button
                                                                        onClick={() => handleRemoveSelected(instructor)}
                                                                        className="text-red-500 font-bold text-sm"
                                                                    >
                                                                        ✖ {/* Cross for removal */}
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}

                                                    <div className="position-relative">
                                                        <svg style={{ top: '11.5px' }} className="absolute left-3" width='20' height='20' viewBox="1 1 60 60">
                                                            <path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"></path><path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"></path>
                                                        </svg>
                                                        <input
                                                            type="text"
                                                            className="school-inputs"
                                                            style={{ paddingLeft: '38px' }}
                                                            value={searchTermInstructor}
                                                            onChange={(e) => setSearchTermInstructor(e.target.value)}
                                                            placeholder="Search coinstructors..."
                                                        />
                                                    </div>

                                                    {/* Available Instructors */}
                                                    <div className="space-y-2 mt-3">
                                                        {filteredInstructors.map((instructor) => (
                                                            <div
                                                                key={instructor.id}
                                                                className="flex items-center justify-between border py-2 px-3 rounded"
                                                            >
                                                                <div className="flex items-center gap-3">
                                                                    <div className="border rounded-lg p-2">
                                                                        <img
                                                                            src={instructor.avatar}
                                                                            alt={instructor.name}
                                                                            className="w-8 h-8 rounded-full"
                                                                        />
                                                                    </div>
                                                                    <div className="info">
                                                                        <span className="fw-bold">{instructor.name}</span>
                                                                        <div className="flex items-center gap-2 mt-1">
                                                                            <input
                                                                                type="checkbox"
                                                                                id={`${instructor.id}`}
                                                                                checked={selectedInstructors.some((item) => item.id === instructor.id)}
                                                                                onChange={() => handleCheckboxChange(instructor)}
                                                                            />
                                                                            <label htmlFor={`${instructor.id}`} style={{ fontSize: '13px', whiteSpace: 'nowrap', fontWeight: '500' }}>Assign as Host.</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="">
                                                                    {selectedInstructors.some((item) => item.id === instructor.id) && (
                                                                        <span className="text-green-500 font-bold">✔</span> /* Tick for checked */
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end mt-2 mb-4 mr-7">
                                    <button type="submit" className="submit-btn mt-1" style={{ marginLeft: 'auto' }}>
                                        Save Session
                                    </button>
                                </div>
                            </>
                        )}
                        {activeTab === "Settings" && (
                            <>
                                <div className="row justify-between w-100 pl-10 pr-4 ">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Details</h2>
                                        <p style={{ fontSize: '15px', color: 'grey' }}>Give your product a title and a description.</p>
                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg">
                                            <form onSubmit={handleSubmit} id="courseForm">
                                                <div className="form-group mt-4">
                                                    <label className="form-label" htmlFor="courseTitle">
                                                        Title
                                                    </label>
                                                    <span className="char-counter">{charCount}/100 characters</span>
                                                    <input
                                                        type="text"
                                                        id="courseTitle"
                                                        className="input-field"
                                                        placeholder="e.g., UX Design Masterclass"
                                                        maxLength="60"
                                                        value='Intro To UX Design'
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group rounded-lg">
                                                    <label className="form-label">
                                                        Description
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
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-between w-100 pl-10 pr-4 mt-3">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0">
                                        <h2 className="popup-title mb-2" style={{ fontSize: '18px', fontWeight: '600' }}>Community</h2>
                                        <p style={{ fontSize: '15x', color: 'grey' }}>
                                            Link your course to a community to create a more engaging student experience. This will add an existing community to your course student's experience.
                                        </p>
                                        <a className="mb-3 text-decoration-underline cursor-pointer">Learn More </a>
                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg">
                                            <div className="view-toggle flex gap-2 items-center">
                                                <label className="toggle-switch">
                                                    <input
                                                        type="checkbox"
                                                        checked={isCommunityEnabled}
                                                        onChange={() => setIsCommunityEnabled(!isCommunityEnabled)}
                                                        id="viewToggle"
                                                    />
                                                    <span className="toggle-slider"></span>
                                                </label>
                                                <label htmlFor="viewToggle" className="toggle-label cursor-pointer fw-medium">Enable community for this course</label>
                                            </div>


                                            {/* Community Selection Section */}
                                            {isCommunityEnabled && (
                                                <div>
                                                    {/* Display Selected Community */}
                                                    {selectedCommunity ? (
                                                        <div className="mt-6">
                                                            <div className="flex items-center justify-between px-3 py-2 border rounded-lg shadow-sm bg-gray-50">
                                                                <div className="flex items-center">
                                                                    <img
                                                                        src={selectedCommunity.image}
                                                                        alt={selectedCommunity.name}
                                                                        className="w-14 h-14 rounded-lg mr-3"
                                                                    />
                                                                    <div className="inline-flex flex-col gap-2">
                                                                        <span className="text-sm bg-yellow-100 flex items-center gap-1 font-medium text-yellow-700 px-2 py-1 rounded w-fit rounded">
                                                                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                                                <path fill="currentColor" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                                <path fill="currentColor" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                            </svg>  {selectedCommunity.type}
                                                                        </span>
                                                                        <span className="text-gray-800 font-medium">
                                                                            {selectedCommunity.name}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    onClick={handleRemoveCommunity}
                                                                    className="text-red-500 hover:underline"
                                                                >
                                                                    ✖
                                                                </button>
                                                            </div>
                                                            <div className="flex flex-wrap gap-2 mt-5 mb-4 text-sm">
                                                                {/* All */}
                                                                <button
                                                                    onClick={() => toggleButton("all")}
                                                                    className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm ${toggles.all
                                                                        ? "bg-dark text-white"
                                                                        : "bg-gray-200 text-gray-800"
                                                                        }`}
                                                                >
                                                                    All
                                                                </button>

                                                                {/* Announcements */}
                                                                <button
                                                                    onClick={() => toggleButton("announcements")}
                                                                    className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm ${toggles.announcements
                                                                        ? "bg-dark text-white"
                                                                        : "bg-gray-200 text-gray-800"
                                                                        }`}
                                                                >
                                                                    <FaBullhorn />
                                                                    Announcements
                                                                </button>

                                                                {/* News */}
                                                                <button
                                                                    onClick={() => toggleButton("news")}
                                                                    className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm ${toggles.news
                                                                        ? "bg-dark text-white"
                                                                        : "bg-gray-200 text-gray-800"
                                                                        }`}
                                                                >
                                                                    <FaNewspaper />
                                                                    News
                                                                </button>

                                                                {/* Weekly Review */}
                                                                <button
                                                                    onClick={() => toggleButton("weeklyReview")}
                                                                    className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm ${toggles.weeklyReview
                                                                        ? "bg-dark text-white"
                                                                        : "bg-gray-200 text-gray-800"
                                                                        }`}
                                                                >
                                                                    <FaStar />
                                                                    Weekly Review
                                                                </button>

                                                                {/* Ask Questions */}
                                                                <button
                                                                    onClick={() => toggleButton("askQuestions")}
                                                                    className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm ${toggles.askQuestions
                                                                        ? "bg-dark text-white"
                                                                        : "bg-gray-200 text-gray-800"
                                                                        }`}
                                                                >
                                                                    <FaQuestionCircle />
                                                                    Ask Questions
                                                                </button>

                                                                {/* Chat */}
                                                                <button
                                                                    onClick={() => toggleButton("chat")}
                                                                    className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-sm ${toggles.chat
                                                                        ? "bg-dark text-white"
                                                                        : "bg-gray-200 text-gray-800"
                                                                        }`}
                                                                >
                                                                    <FaComments />
                                                                    Chat
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        // Display Search and Community List
                                                        <div>
                                                            <hr className="my-4" />
                                                            <div className="relative mb-4 ">
                                                                <svg className="absolute top-2.5 left-3" width='20' height='20' viewBox="1 1 60 60">
                                                                    <path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"></path><path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"></path>
                                                                </svg>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search for a community..."
                                                                    value={searchTerm4}
                                                                    style={{ paddingLeft: '38px' }}
                                                                    onChange={(e) => setSearchTerm4(e.target.value)}
                                                                    className="w-full school-inputs"
                                                                />
                                                            </div>
                                                            <ul className="space-y-3 mb-4">
                                                                {filteredCommunities.map((community) => (
                                                                    <li
                                                                        key={community.id}
                                                                        className="flex items-center justify-between px-3 py-2 border rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer"
                                                                        onClick={() => handleSelectCommunity(community)}
                                                                    >
                                                                        <div className="flex items-center">
                                                                            <img
                                                                                src={community.image}
                                                                                alt={community.name}
                                                                                className="w-14 h-14 rounded-lg mr-3"
                                                                            />
                                                                            <div className="inline-flex flex-col gap-2">
                                                                                <span className="text-sm bg-yellow-100 flex items-center gap-1 font-medium text-yellow-700 px-2 py-1 rounded w-fit rounded">
                                                                                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                                                        <path fill="currentColor" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                                        <path fill="currentColor" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                                    </svg>  {community.type}
                                                                                </span>
                                                                                <span className="text-gray-800 font-medium">
                                                                                    {community.name}
                                                                                </span>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-between w-100 pl-10 pr-4 mt-3">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0">
                                        <h2 className="popup-title mb-2" style={{ fontSize: '18px', fontWeight: '600' }}>Certificates</h2>
                                        <p style={{ fontSize: '15x', color: 'grey' }}>Celebrate your customers by offering them a certificate upon course completion.</p>
                                        <p className="mt-2" style={{ fontSize: '15x', color: 'grey' }}>
                                            The certificate will be emailed upon course completion.<br />
                                            <a href="#" class="text-black text-decoration-underline">Learn more</a>
                                        </p>

                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg">
                                            <div className="form-group space-y-3">
                                                {/* Standard Certificate */}
                                                <div className="p-4 bg-gray-100 rounded-lg">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full mb-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="currentColor"
                                                                className="w-4 h-4 text-gray-600"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6m18 6a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div className="view-toggle flex gap-2 items-center">
                                                            <label className="toggle-switch">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={standardEnabled}
                                                                    onChange={() => setStandardEnabled(!standardEnabled)}
                                                                    id="viewCertificate"
                                                                />
                                                                <span className="toggle-slider"></span>
                                                            </label>
                                                            <label htmlFor="viewCertificate" className="toggle-label cursor-pointer fw-medium">Standard Certificate</label>
                                                        </div>
                                                    </div>

                                                    {/* Display only if enabled */}
                                                    {standardEnabled && (
                                                        <div className="mt-4 space-y-4">
                                                            <p className="text-gray-600 text-sm pl-4">
                                                                Basic course completion certificate. Can be included with free
                                                                courses.
                                                            </p>
                                                            <div className="relative w-full">
                                                                <select className="w-full appearance-none school-inputs bg-white">
                                                                    <option>Include with Course</option>
                                                                    <option>Sell Separately</option>
                                                                </select>
                                                                {/* Dropdown Icon */}
                                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth={4}
                                                                        stroke="currentColor"
                                                                        className="w-4 h-4 text-gray-400"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Premium Certificate */}
                                                <div className="p-4 bg-gray-100 rounded-lg">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full mb-1">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="currentColor"
                                                                className="w-4 h-4 text-gray-600"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6m18 6a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div className="view-toggle flex gap-2 items-center">
                                                            <label className="toggle-switch">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={premiumEnabled}
                                                                    onChange={() => setPremiumEnabled(!premiumEnabled)}
                                                                    id="viewPremiumCertificate"
                                                                />
                                                                <span className="toggle-slider"></span>
                                                            </label>
                                                            <label htmlFor="viewPremiumCertificate" className="toggle-label cursor-pointer fw-medium">Premium Certificate</label>
                                                        </div>
                                                    </div>

                                                    {/* Display only if enabled */}
                                                    {premiumEnabled && (
                                                        <div className="mt-4 space-y-4">
                                                            <p className="text-gray-600 text-sm pl-4">
                                                                Enhanced certificate with additional features. Minimum price: $5.
                                                            </p>
                                                            <div className="relative w-full">
                                                                <select className="w-full appearance-none school-inputs">
                                                                    <option>Sell Separately</option>
                                                                    <option>Include with Course</option>
                                                                </select>
                                                                {/* Dropdown Icon */}
                                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth={4}
                                                                        stroke="currentColor"
                                                                        className="w-4 h-4 text-gray-400"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-between w-100 pl-10 pr-4 mt-3">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0">
                                        <h2 className="popup-title mb-2" style={{ fontSize: '18px', fontWeight: '600' }}>School Settings</h2>
                                        <p style={{ fonts: '15px', color: 'grey' }}>
                                            Set the school to provide students with a unified learning experience. This allows them to access all courses, events, sessions, and certificates from your school in a single dashboard.
                                        </p>
                                        <a className="mb-3 text-decoration-underline cursor-pointer">Learn More </a>
                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg">
                                            <div className="view-toggle flex gap-2 items-center">
                                                <label className="toggle-switch">
                                                    <input
                                                        type="checkbox"
                                                        checked
                                                        id="viewToggleSchool"
                                                    />
                                                    <span className="toggle-slider"></span>
                                                </label>
                                                <label htmlFor="viewToggleSchool" className="toggle-label cursor-pointer fw-medium">Enable School</label>
                                            </div>
                                            <p className="pl-11" style={{ fontSize: '12px ' }}>School is enabled bt default for each course.</p>

                                            <h3 className="mt-4" style={{ fontSize: '18px', fontWeight: '500' }}>Linked School</h3>
                                            <p style={{ fontSize: '15px ' }}>Choose the School you did like to link to this course.</p>
                                            {/* Community Selection Section */}
                                            <div>
                                                {/* Display Selected Community */}
                                                {selectedSchools ? (
                                                    <div className="mt-6">
                                                        <div className="flex items-center justify-between px-3 py-2 border rounded-lg shadow-sm bg-gray-50 mb-4">
                                                            <div className="flex items-center gap-2">
                                                                <img
                                                                    src={selectedSchools.image}
                                                                    alt={selectedSchools.name}
                                                                    className="w-24 h-14 rounded-lg mr-3 object-cover"
                                                                />
                                                                <div className="">
                                                                    <span className="text-gray-800 font-medium">
                                                                        {selectedSchools.name}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <button
                                                                onClick={handleRemoveSchools}
                                                                className="text-red-500 hover:underline"
                                                            >
                                                                ✖
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    // Display Search and Community List
                                                    <div>
                                                        <hr className="my-4" />
                                                        <div className="relative mb-4 ">
                                                            <svg className="absolute top-2.5 left-3" width='20' height='20' viewBox="1 1 60 60">
                                                                <path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"></path><path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"></path>
                                                            </svg>
                                                            <input
                                                                type="text"
                                                                placeholder="Search for a School..."
                                                                value={searchTerm5}
                                                                style={{ paddingLeft: '38px' }}
                                                                onChange={(e) => setSearchTerm5(e.target.value)}
                                                                className="w-full school-inputs"
                                                            />
                                                        </div>
                                                        <ul className="space-y-3 mb-4">
                                                            {filteredSchools.map((community) => (
                                                                <li
                                                                    key={community.id}
                                                                    className="flex items-center justify-between px-3 py-2 border rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer"
                                                                    onClick={() => handleSelectSchools(community)}
                                                                >
                                                                    <div className="flex items-center gap-2">
                                                                        <img
                                                                            src={community.image}
                                                                            alt={community.name}
                                                                            className="w-24 h-14 rounded-lg mr-3 object-cover"
                                                                        />
                                                                        <div>
                                                                            <span className="text-gray-800 font-medium">
                                                                                {community.name}
                                                                            </span>
                                                                        </div>

                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end mt-2 mb-4 mr-7">
                                    <button type="submit" className="submit-btn mt-1" style={{ marginLeft: 'auto' }}>
                                        Save Settings
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddSession;