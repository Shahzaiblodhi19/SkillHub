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

    return (
        context.AddSessionModal &&
        <div className="modal-overlay h-screen" style={{ overflowY: 'auto' }}>
            <div className="modal-container h-screen p-0" style={{ width: '430px', textAlign: 'left', height: `calc(100vh - 80px)`, }}>
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
                                            <div className="flex items-center gap-2 mb-4">
                                                <h1 className="text-lg font-semibold">UX Design Masterclass</h1>
                                                <span className="text-gray-500 text-sm flex items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <circle cx="8" cy="8" r="7"></circle>
                                                        <path d="M6.06 6a2 2 0 1 1 3.93 0c0 1.33-2 2-2 2"></path>
                                                        <line x1="8" y1="12" x2="8.01" y2="12"></line>
                                                    </svg>
                                                </span>
                                            </div>
                                            <button className="close-button p-0" onClick={() => context.setAddSessionModal(!context.AddSessionModal)}>
                                                ✖
                                            </button>
                                        </div>
                                        <div className="flex items-center w-100 mt-4" style={{ justifyContent: 'space-between' }}>


                                            <button style={{ fontSize: '13px', fontWeight: '600' }} className="absolute left-34 top-16 px-3 py-1 bg-grey-100 border-1 text-gray-600 rounded-md flex items-center gap-2 hover:bg-gray-200">
                                                <span>👁</span> Preview
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="flex mt-3 gap-4" style={{ fontSize: '13px', fontWeight: '600' }}>
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
                            </div>
                        </div>

                        <hr style={{ color: '#fafafa' }} />

                        {activeTab === "Landing Page" && (
                            <div className="popup-content pb-0 pt-3 -lg">
                                <h2 className="popup-title mb-1" style={{ fontSize: '16px', fontWeight: '500' }}>Event Details</h2>
                                <p style={{ fontSize: '12px', color: 'grey' }}>Enter the basic event details such as the title and description. We'll use your title to generate the URL.</p>
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

                                    <div className="form-group">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '600' }}>Access Settings</h2>
                                        <p className="mb-3" style={{ fontSize: '13px', color: 'grey' }}>
                                            Configure event access options.
                                        </p>
                                        <h2 className="popup-title mb-1 mt-4" style={{ fontSize: '15px', fontWeight: '500' }}>Include This Event Free</h2>
                                        <p className="mb-3" style={{ fontSize: '12px', color: 'grey' }}>
                                            Select the courses that will include this event for free.
                                        </p>
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
                                    <div className="form-group">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '600' }}>Agenda</h2>
                                        <p className="mb-3" style={{ fontSize: '13px', color: 'grey' }}>
                                            List all the items you plan to cover in this session.
                                        </p>
                                        <h2 className="popup-title mb-3 mt-4" style={{ fontSize: '14px', fontWeight: '600' }}>List all the items you plan to cover</h2>
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
                                    <div className="form-group">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '16px', fontWeight: '500' }}>General Information</h2>
                                        <p style={{ fontSize: '12px', color: 'grey' }}>Configure the basic settings for your course including language, level, and categories.</p>
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
                                    <div className="form-group">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '16px', fontWeight: '500' }}>Co-Instructors</h2>
                                        <p className="mb-3" style={{ fontSize: '12px', color: 'grey' }}>Add Instructors and hosts.</p>

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
                                    <div className="flex items-center justify-end w-100 mb-4">
                                        <button type="submit" className="submit-btn mt-1" style={{ marginLeft: 'auto' }}>
                                            Save Session
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSession;