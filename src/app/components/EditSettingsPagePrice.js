"use client";
import { useContext, useState } from "react";
import { MyContext } from "../layout";
import { FaBullhorn, FaNewspaper, FaStar, FaQuestionCircle, FaComments } from "react-icons/fa";


const EditPagesettingPrice = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [url, setUrl] = useState("");
    const [charCount, setCharCount] = useState(0);
    const context = useContext(MyContext);
    const [activeTab, setActiveTab] = useState("Pricing");

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


    const courseChecklistData = [
        {
            sectionTitle: "Course Requirements",
            status: "error",
            issues: 14,
            progress: 40,
            checklistItems: [
                {
                    title: "Link to School",
                    status: "pending",
                    description: "Course must be linked to a school. Please select or create a school for this course.",
                    action: "Add School Link",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>,
                },
                {
                    title: "Video Learning Activities (Min: 3, Max: 15)",
                    status: "pending",
                    description: "Course requires minimum 3 video learning activities. Current count: 1",
                    affectedItems: ["Introduction Video"],
                    action: "Add Videos",
                    affectedItemsIcon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>,
                    affectedItemsText: 'Current videos:',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>,
                },
                {
                    title: "Price Range ($9.99 - $199.99)",
                    status: "completed",
                    description: "Course price is within the allowed range. Current price:",
                    currentPrice: '$49.99',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                },
                {
                    title: "YouTube Content Check",
                    status: "error",
                    description: "Course contains YouTube learning activities which are not allowed. Please remove or replace with native video content.",
                    affectedItems: ["Introduction Video", "Module 2 Tutorial", "Final Project Guide"],
                    action: "Remove YouTube Content",
                    affectedItemsText: 'Affected activities:',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.938 8.003c-.108-1.003-.457-1.912-1.374-2.819-.917-.907-1.83-1.25-2.837-1.357C14.365 3.664 12 3.664 12 3.664s-2.365 0-3.727.163c-1.007.107-1.92.45-2.837 1.357-.917.907-1.266 1.816-1.374 2.819-.164 1.353-.164 2.486-.164 2.486s0 1.133.164 2.486c.108 1.003.457 1.912 1.374 2.819.917.907 1.83 1.25 2.837 1.357 1.362.163 3.727.163 3.727.163s2.365 0 3.727-.163c1.007-.107 1.92-.45 2.837-1.357.917-.907 1.266-1.816 1.374-2.819.164-1.353.164-2.486.164-2.486s0-1.133-.164-2.486z" />
                    </svg>
                },
                {
                    title: "Session/Meeting Activities (Max: 3)",
                    status: "pending",
                    description: "Course exceeds maximum allowed session/meeting activities (Max: 3). Current count: 5",
                    affectedItems: ["Week 1 Meeting", "Week 2 Workshop", "Week 3 Q&A", "Week 4 Review", "Final Session"],
                    action: "Review Sessions",
                    affectedItemsText: 'Affected sessions:',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                },
                {
                    title: "Course Duration (FREE: Min 15min)",
                    status: "pending",
                    description: "Course duration does not meet the minimum requirement for FREE courses (15 minutes minimum). Current duration: ",
                    action: "Adjust Duration",
                    duration: '8 minutes',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                },
                {
                    title: "Category Selection",
                    status: "pending",
                    description: "Course category is required. Please select an appropriate category for your course.",
                    action: "Select Category",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                },
                {
                    title: "Featured Image (500x200 minimum)",
                    status: "pending",
                    description: "Current featured image (300x150) does not meet minimum size requirements. Please upload an image that is at least 500x200 pixels.",
                    action: "Upload Image",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                },
                {
                    title: "Promotional Video",
                    status: "pending",
                    description: "Course promotional video is missing. Adding a promotional video can increase course engagement and enrollment rates.",
                    action: "Add Promo Video",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                },
                {
                    title: "Course Bullet Points (4+ Required)",
                    status: "pending",
                    description: "Course requires at least 4 bullet points describing key learning outcomes. Current count: 2",
                    affectedItems: ["Learn programming fundamentals", "Build real-world applications"],
                    action: "Add Bullet Points",
                    affectedItemsText: 'Current bullet points:',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 4h13M8 12h13M8 20h13M4 4h.01M4 12h.01M4 20h.01" />
                    </svg>
                },
                {
                    title: "Course Requirements (1+ Required)",
                    status: "pending",
                    description: "Please specify at least 1 prerequisite or requirement for taking this course. Current count: 0",
                    action: "Add Requirements",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                },
                {
                    title: "Intended Learners (1+ Required)",
                    status: "pending",
                    description: "Specify at least 1 target audience or intended learner type for your course. Current count: 0",
                    action: "Add Target Audience",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                },
                {
                    title: "CPE Information",
                    status: "pending",
                    description: "CPE information is required for this course. Please provide necessary continuing professional education details.",
                    action: "Add CPE Details",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                },
                {
                    title: "Section Count (Min: 2, Max: 12)",
                    status: "completed",
                    description: "Course sections are within the allowed range. Current: 8 sections (Min: 2, Max: 12)",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                },
                {
                    title: "Title Format Check",
                    status: "pending",
                    description: "Course title contains invalid characters. The following part needs to be fixed:",
                    TitleLineError: 'Learn Python [2024]!',
                    restDescription: 'Title must only contain letters, numbers, spaces, and basic punctuation (.,-)',
                    action: "Fix Title Format",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                },
                {
                    title: "Blacklisted Keywords Check",
                    status: "pending",
                    description: "Course title or description contains blacklisted keywords:",
                    affectedItems: ["Section 2: Python Masterclass", "Section 4: Best Course Guarantee"],
                    action: "Review Content",
                    TitleLineError: 'masterclass, best course, guaranteed',
                    affectedItemsText: 'Affected units:',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                },
                {
                    title: "Community Link",
                    status: "pending",
                    description: "Community link is required for this course type. Please add a link to your course community.",
                    action: "Add Community Link",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                },
                {
                    title: "Certificate Configuration",
                    status: "pending",
                    description: "Course certificate needs to be configured. Please set up completion certificate requirements and design.",
                    action: "Setup Certificate",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                },
                {
                    title: "Skill Assessments (1+ Required)",
                    status: "pending",
                    description: "Course requires at least 1 skill assessment. Current count: 0",
                    action: "Add Assessment",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                },
            ],
        },
        // Additional sections go here (Profile Requirements, Session Requirements, etc.)
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
    const SessionChecklistData = [
        {
            sectionTitle: "Session Requirements",
            status: "error",
            issues: 8,
            progress: 50,
            checklistItems: [
                {
                    title: "Link to School",
                    status: "pending",
                    description: "Session must be linked to a school. Please select or create a school for this session.",
                    action: "Add School Link",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                },
                {
                    title: "Session/Meeting Activities (1+ Required)",
                    status: "pending",
                    description: `Session requires at least 1 meeting activity. Current count: 0`,
                    action: "Add Session",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                },
                {
                    title: "Maximum Sections (Max: 8)",
                    status: "completed",
                    description: "Session sections are within the allowed limit. Current: 6 sections (Maximum: 8)",
                    action: null,
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                },
                {
                    title: "Video Learning Activities (First Section: Max 3, Others: Max 2)",
                    status: "error",
                    affectedItemsText: 'Affected videos in first section:',
                    description: `First section exceeds maximum allowed video activities (Max: 3). Current count in first section: 4`,
                    affectedItems: ["Introduction", "Setup Guide", "Basic Concepts", "First Steps"],
                    action: "Review Videos",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                },
                {
                    title: "YouTube Content Check",
                    affectedItemsText: 'Affected activities:',
                    status: "pending",
                    description: `Session contains externally hosted videos which are not allowed.`,
                    affectedItems: ["Section 1: Welcome Video", "Section 3: Tutorial"],
                    action: "Remove YouTube Content",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.938 8.003c-.108-1.003-.457-1.912-1.374-2.819-.917-.907-1.83-1.25-2.837-1.357C14.365 3.664 12 3.664 12 3.664s-2.365 0-3.727.163c-1.007.107-1.92.45-2.837 1.357-.917.907-1.266 1.816-1.374 2.819-.164 1.353-.164 2.486-.164 2.486s0 1.133.164 2.486c.108 1.003.457 1.912 1.374 2.819.917.907 1.83 1.25 2.837 1.357 1.362.163 3.727.163 3.727.163s2.365 0 3.727-.163c1.007-.107 1.92-.45 2.837-1.357.917-.907 1.266-1.816 1.374-2.819.164-1.353.164-2.486.164-2.486s0-1.133-.164-2.486z" />
                    </svg>
                },
                {
                    title: "Basic Information",
                    status: "pending",
                    description: `The following required information is missing or invalid:`,
                    affectedItemsError: ["Category: Not selected", "Language: Not specified", "Level: Invalid selection"],
                    action: "Complete Info",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                },
                {
                    title: "Featured Image (500x200 minimum)",
                    status: "pending",
                    description: "Current featured image (350x180) does not meet minimum size requirements. Please upload an image that is at least 500x200 pixels.",
                    action: "Upload Image",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                },
                {
                    title: "CPE Information",
                    status: "pending",
                    description: "CPE information is required as CPE is enabled for this session. Please provide necessary continuing professional education details.",
                    action: "Add CPE Details",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                },
                {
                    title: "Price Range ($49.99 - $299.99)",
                    status: "pending",
                    description: "Session price ($399.99) exceeds the maximum allowed price of $299.99.",
                    action: "Adjust Price",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                },
                {
                    title: "Title Format Check",
                    status: "pending",
                    description: "Session title contains invalid formatting. The following part needs to be fixed:",
                    TitleLineError: "Live Q&A Session [SPECIAL]!",
                    restDescription: "Title must only contain letters, numbers, spaces, and basic punctuation (.,-)",
                    action: "Fix Title Format",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                },
                {
                    title: "Blacklisted Keywords Check",
                    status: "pending",
                    description: `Session contains blacklisted keywords:`,
                    affectedItems: [
                        "exclusive",
                        "limited time only",
                        "guaranteed results"
                    ],
                    affectedItemsText: 'Affected units:',
                    TitleLineError: "exclusive, limited time only, guaranteed results",
                    action: "Review Content",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                },
            ],
        },
    ];
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


    const [showCompleted, setShowCompleted] = useState(false);

    const handleToggle = () => {
        setShowCompleted(!showCompleted);
    };

    // Function to filter checklist items
    const getFilteredChecklistItems = (checklistData) => {
        return checklistData.map((section) => ({
            ...section,
            checklistItems: showCompleted
                ? section.checklistItems.filter((item) => item.status === "completed") // Only show completed items
                : section.checklistItems, // Show all items if not filtering
        }));
    };

    // Filtered checklist data
    const filteredCourseChecklistData = getFilteredChecklistItems(courseChecklistData);
    const filteredProfileChecklistData = getFilteredChecklistItems(profileChecklistData);
    const filteredSessionChecklistData = getFilteredChecklistItems(SessionChecklistData);
    const filteredCommunityChecklistData = getFilteredChecklistItems(communityChecklistData);


    const [expandmenu, setexpandmenu] = useState(false);

    const [coursesectionexpand, setcoursesectionexpand] = useState(false);
    const [sessionsectionexpand, setsessionsectionexpand] = useState(false);
    const [profilesectionexpand, setprofilesectionexpand] = useState(false);
    const [communitysectionexpand, setcommunitysectionexpand] = useState(false);

    const [expandedState, setExpandedState] = useState({});
    const [expandedState2, setExpandedState2] = useState({});
    const [expandedState3, setExpandedState3] = useState({});
    const [expandedState4, setExpandedState4] = useState({});

    const toggleExpand = (index) => {
        setExpandedState((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    const toggleExpand2 = (index) => {
        setExpandedState2((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    const toggleExpand3 = (index) => {
        setExpandedState3((prevState) => ({
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
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSubscription, setSelectedProducts2] = useState([]);
    const [searchQuery2, setSearchQuery2] = useState("");

    // Sample product list
    const products = [
        { id: 1, type: "Bundle", name: "Advanced UI/UX Design Masterclass", image: 'https://i.ibb.co/jJ4GHXP/img1.jpg', price: 199 },
        { id: 2, type: "Bundle", name: "Responsive Web Design Fundamentals", image: 'https://i.ibb.co/Csdq4rd/newsletter-image.png', price: 149 },
        { id: 3, type: "Bundle", name: "Design Systems Workshop 2024", image: "https://i.ibb.co/hBpWGQ7/c3.jpg", price: 299 },
    ];
    const Subscription = [
        { id: 1, type: "Subscription", name: "Advanced UI/UX Design Masterclass", image: 'https://i.ibb.co/jJ4GHXP/img1.jpg', price: 199 },
        { id: 2, type: "Subscription", name: "Responsive Web Design Fundamentals", image: 'https://i.ibb.co/Csdq4rd/newsletter-image.png', price: 149 },
        { id: 3, type: "Subscription", name: "Design Systems Workshop 2024", image: "https://i.ibb.co/hBpWGQ7/c3.jpg", price: 299 },
    ];
    // Add product to the bundle
    const addProduct = (product) => {
        if (!selectedProducts.find((p) => p.id === product.id)) {
            setSelectedProducts([...selectedProducts, product]);
            setBundlePrice((prev) => prev + product.price);
        }
    };

    // Remove product from the bundle
    const removeProduct = (productId) => {
        const filteredProducts = selectedProducts.filter((p) => p.id !== productId);
        const removedProduct = selectedProducts.find((p) => p.id === productId);
        setSelectedProducts(filteredProducts);
        setBundlePrice((prev) => prev - removedProduct.price);
    };

    // Filter products based on search query
    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !selectedProducts.some((p) => p.id === product.id)
    );

    // Add product to the bundle
    const addProduct2 = (product) => {
        if (!selectedSubscription.find((p) => p.id === product.id)) {
            setSelectedProducts2([...selectedSubscription, product]);
            setBundlePrice((prev) => prev + product.price);
        }
    };

    // Remove product from the bundle
    const removeProduct2 = (productId) => {
        const filteredProducts = selectedSubscription.filter((p) => p.id !== productId);
        const removedProduct = selectedSubscription.find((p) => p.id === productId);
        setSelectedProducts2(filteredProducts);
        setBundlePrice((prev) => prev - removedProduct.price);
    };

    // Filter products based on search query
    const filteredSubscriptions = Subscription.filter(
        (product) =>
            product.name.toLowerCase().includes(searchQuery2.toLowerCase()) &&
            !selectedSubscription.some((p) => p.id === product.id)
    );



    const coupons = [
        {
            id: 1,
            code: "SUMMER24A",
            type: "Percentage",
            value: "20%",
            created: "Dec 15, 2024",
            modified: "Dec 15, 2024",
            details: {
                prefix: "SUMMER",
                quantity: 500,
                usage: 175,
                expires: "Oct 18, 2024",
            },
        },
        {
            id: 2,
            code: "HOLIDAY24A",
            type: "Fixed",
            value: "$50.00",
            created: "Dec 10, 2024",
            modified: "Dec 12, 2024",
            details: {
                prefix: "HOLIDAY",
                quantity: 1000,
                usage: 180,
                expires: "Dec 31, 2024",
            },
        },
        {
            id: 3,
            code: "NEWYEAR25",
            type: "Percentage",
            value: "25%",
            created: "Dec 20, 2024",
            modified: "Dec 20, 2024",
            details: {
                prefix: "NEWYEAR",
                quantity: 750,
                usage: 38,
                expires: "Jan 15, 2025",
            },
        },
    ];
    const [expanded, setExpanded] = useState(null);

    const toggleDetails = (id) => {

        setExpanded((prev) => (prev === id ? null : id));
    };
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


    return (
        context.AddEditProduct &&
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
                                            <button className="p-0" onClick={() => context.setEditProduct(!context.AddEditProduct)}>
                                                ✖
                                            </button>
                                        </div>
                                        <div className="d-flex flex-column flex-md-row align-items-start aling-items-md-center justify-content-between gap-3">
                                            <div className="d-flex flex-wrap gap-4" style={{ fontSize: '13px', fontWeight: '600' }}>
                                                <button
                                                    onClick={() => setActiveTab("Outline")}
                                                    className="pb-1.5"
                                                    style={{ color: activeTab === 'Outline' ? '#02C5AF' : '#000', borderBottom: activeTab === 'Outline' ? '2px solid #02C5AF' : 'none' }}
                                                >
                                                    Outline
                                                </button>
                                                <button
                                                    onClick={() => setActiveTab("Settings")}
                                                    className="pb-1.5"
                                                    style={{ color: activeTab === 'Settings' ? '#02C5AF' : '#000', borderBottom: activeTab === 'Settings' ? '2px solid #02C5AF' : 'none' }}
                                                >
                                                    Settings
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
                                            <button style={{ fontSize: '13px', fontWeight: '600' }} className="px-3 py-1 bg-grey-100 border-1 text-gray-600 rounded-md flex items-center gap-2 hover:bg-gray-200">
                                                <span>👁</span> Preview
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr style={{ color: '#fafafa' }} />
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
                                        <p style={{fonts: '15px',color: 'grey'}}>
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
                        {activeTab === "Pricing" && (
                            <>
                                <div className="row justify-between w-100 pl-10 pr-4 ">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Pricing</h2>
                                        <p style={{ fontSize: '15px', color: 'grey' }}>Configure pricing options for your course and linked products.</p>
                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg">
                                            <div className="form-group p-4 rounded-lg" style={{ background: '#f8f8f8' }}>
                                                <label
                                                    htmlFor="coursePrice"
                                                    className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                    Course Price
                                                </label>
                                                <p className="text-gray-500 text-sm mb-4">
                                                    Set the price for your course and included products.
                                                </p>
                                                <div className="flex items-center border border-gray-300 rounded-md" style={{ width: '190px' }}>
                                                    <span className="px-3 text-gray-700 bg-gray-200 border-r border-gray-300">$</span>
                                                    <input
                                                        type="number"
                                                        id="coursePrice"
                                                        className="school-inputs"
                                                        placeholder="0"
                                                        min="0"
                                                    />
                                                </div>
                                                <p className="mt-2 text-sm text-gray-500 rounded-lg p-3" style={{ background: '#f0f0f0' }}>
                                                    Course price must be between $0 and ∞
                                                </p>
                                            </div>
                                            <div className="form-group p-4 rounded-lg mt-4" style={{ background: '#f8f8f8' }}>
                                                <label
                                                    htmlFor="coursePrice"
                                                    className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                    Included with course
                                                </label>
                                                <p className="text-gray-500 text-sm mb-4">
                                                    Products included with course purchase.
                                                </p>
                                                <div className="flex items-center justify-between border border-gray-300 rounded-md bg-white p-3" >
                                                    <p className="text-sm rounded-lg fw-medium">
                                                        Standard Certificate
                                                    </p>
                                                    <p className="">
                                                        Free
                                                    </p>
                                                </div>

                                            </div>
                                            <div className="form-group p-4 rounded-lg mt-4" style={{ background: '#f8f8f8' }}>
                                                <label
                                                    htmlFor="coursePrice"
                                                    className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                    Additional Paid Products
                                                </label>
                                                <p className="text-gray-500 text-sm mb-4">
                                                    Products available for seperate purchase.
                                                </p>
                                                <div className="flex items-center border border-gray-300 rounded-md" style={{ width: '190px' }}>
                                                    <span className="px-3 text-gray-700 bg-gray-200 border-r border-gray-300">$</span>
                                                    <input
                                                        type="number"
                                                        id="coursePrice"
                                                        className="school-inputs"
                                                        placeholder="0"
                                                        min="0"
                                                        value={'7.00'}
                                                    />
                                                </div>
                                                <div className="flex mt-2.5 items-center justify-between border border-gray-300 rounded-md bg-white p-3" >
                                                    <p className="text-sm rounded-lg fw-medium">
                                                        Community Access
                                                    </p>
                                                    <p className="">
                                                        $2.00
                                                    </p>
                                                </div>
                                                <div className="flex mt-2.5 items-center justify-between border border-gray-300 rounded-md bg-white p-3" >
                                                    <p className="text-sm rounded-lg fw-medium">
                                                        Premium Certificate
                                                    </p>
                                                    <p className="">
                                                        $5.00
                                                    </p>
                                                </div>

                                            </div>
                                            <div className="form-group px-4 py-3 rounded-lg mt-4" style={{ background: '#f8f8f8' }}>
                                                <p>Total Price: $7.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-between w-100 pl-10 pr-4 mt-4">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Bundles</h2>
                                        <p style={{ fontSize: '15px', color: 'grey' }}>Add this course to a bundle.</p>
                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg">
                                            <h2 className="popup-title mb-1 pl-2" style={{ fontSize: '16px', fontWeight: '500' }}>Add to Bundles</h2>
                                            <div className="form-group px-2 pt-2">
                                                <label className="form-label mb-3">Selected Bundles ({selectedProducts.length})</label>
                                                {selectedProducts.map((product) => (
                                                    <div key={product.id} className="selected-product flex items-center justify-between mb-4 cursor-pointer">
                                                        <div className="flex items-center gap-3">
                                                            <img width={55} height={55} className="rounded" src={product.image} />
                                                            <div className="info flex flex-col">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="inline-flex items-center gap-1" style={product.type === 'Bundle' ? { borderRadius: '100px', backgroundColor: '#e2e2e0', color: '#000', fontWeight: '500', fontSize: '13px', padding: '3px 14px' } : { padding: '2px 9px', borderRadius: '100px', backgroundColor: '#fee2e1', color: '#991b1b', fontWeight: '500', fontSize: '13px' }}>

                                                                        <span className="product-type mb-1">{product.type}</span>
                                                                    </div>
                                                                    <div className="inline-flex items-center gap-1" style={{ backgroundColor: '#e2e2e0', color: '#000', fontWeight: '500', fontSize: '13px', padding: '2px 9px', borderRadius: '100px' }}>
                                                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                                            <path fill="#343332" d="M10.3031 4.71338C10.638 4.71338 10.9096 4.98493 10.9096 5.3199V5.62947C11.7726 5.74654 12.5494 6.11208 13.0363 6.67319C13.2559 6.92617 13.2288 7.30925 12.9758 7.52881C12.7229 7.74837 12.3398 7.72128 12.1202 7.4683C11.8892 7.20209 11.4627 6.96219 10.9096 6.85747V9.13097C11.5063 9.2117 12.0549 9.41056 12.4966 9.70499C13.0803 10.0941 13.5358 10.6984 13.5358 11.4478C13.5358 12.1973 13.0803 12.8015 12.4966 13.1907C12.0549 13.4851 11.5063 13.684 10.9096 13.7647V14.0741C10.9096 14.4091 10.638 14.6806 10.3031 14.6806C9.9681 14.6806 9.69656 14.4091 9.69656 14.0741V13.7645C8.83357 13.6474 8.0568 13.2819 7.5698 12.7208C7.35024 12.4678 7.37733 12.0847 7.63031 11.8652C7.88329 11.6456 8.26636 11.6727 8.48592 11.9257C8.71697 12.1919 9.14345 12.4318 9.69656 12.5365V10.263C9.09982 10.1823 8.55128 9.98342 8.10959 9.68899C7.52581 9.29985 7.07031 8.69563 7.07031 7.94614C7.07031 7.19665 7.52581 6.59244 8.10959 6.2033C8.55128 5.90886 9.09982 5.71 9.69656 5.62928V5.3199C9.69656 4.98493 9.9681 4.71338 10.3031 4.71338ZM9.69656 6.85766C9.33347 6.92644 9.02055 7.0539 8.78241 7.21264C8.4157 7.45709 8.28336 7.7283 8.28336 7.94614C8.28336 8.16399 8.4157 8.4352 8.78241 8.67964C9.02055 8.83839 9.33347 8.96585 9.69656 9.03463V6.85766ZM10.9096 10.3594V12.5363C11.2727 12.4675 11.5856 12.3401 11.8237 12.1813C12.1905 11.9369 12.3228 11.6657 12.3228 11.4478C12.3228 11.23 12.1905 10.9588 11.8237 10.7143C11.5856 10.5556 11.2727 10.4281 10.9096 10.3594Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                            <path fill="#343332" d="M10.3399 2.51392C6.38177 2.51392 3.1731 5.72259 3.1731 9.6807C3.1731 13.6388 6.38177 16.8475 10.3399 16.8475C14.298 16.8475 17.5067 13.6388 17.5067 9.6807C17.5067 5.72259 14.298 2.51392 10.3399 2.51392ZM1.9231 9.6807C1.9231 5.03224 5.69142 1.26392 10.3399 1.26392C14.9883 1.26392 18.7567 5.03224 18.7567 9.6807C18.7567 14.3292 14.9883 18.0975 10.3399 18.0975C5.69142 18.0975 1.9231 14.3292 1.9231 9.6807Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                        </svg>
                                                                        <span className="product-price mb-1">${product.price}</span>
                                                                    </div>
                                                                </div>
                                                                <span className="product-name mt-1" style={{ fontSize: '13px', fontWeight: '600' }}>{product.name}</span>
                                                            </div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => removeProduct(product.id)}
                                                        >
                                                            ✖
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="form-group position-relative px-2 pt-2">
                                                <svg className="absolute" style={{ top: '18px', left: '19px' }} width='20' height='20' viewBox="1 1 60 60">
                                                    <path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"></path><path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"></path>
                                                </svg>
                                                <input
                                                    type="text"
                                                    className="school-inputs"
                                                    style={{ paddingLeft: '38px' }}
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    placeholder="Search..."
                                                />
                                                {filteredProducts.length > 0 && (
                                                    <ul className="product-list mt-4">
                                                        {filteredProducts.map((product) => (
                                                            <li className="flex items-center justify-between mb-4 cursor-pointer" key={product.id} onClick={() => addProduct(product)}>
                                                                <div className="flex items-center gap-3">
                                                                    <img width={55} height={55} className="rounded" src={product.image} />
                                                                    <div className="">
                                                                        <div className="inline-flex items-center gap-1" style={product.type === 'Bundle' ? { borderRadius: '100px', backgroundColor: '#e2e2e0', color: '#000', fontWeight: '500', fontSize: '13px', padding: '3px 14px' } : { padding: '2px 7px', backgroundColor: '#fee2e1', color: '#991b1b', fontWeight: '500', fontSize: '13px' }}>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-between w-100 pl-10 pr-4 mt-4">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Subscriptions</h2>
                                        <p style={{ fontSize: '15px', color: 'grey' }}>Add this course to a Subscription.</p>
                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg">
                                            <h2 className="popup-title mb-1 pl-2" style={{ fontSize: '16px', fontWeight: '500' }}>Add to Subscription</h2>
                                            <div className="form-group px-2 pt-2">
                                                <label className="form-label mb-3">Selected Subscription ({selectedSubscription.length})</label>
                                                {selectedSubscription.map((product) => (
                                                    <div key={product.id} className="selected-product flex items-center justify-between mb-4 cursor-pointer">
                                                        <div className="flex items-center gap-3">
                                                            <img width={55} height={55} className="rounded" src={product.image} />
                                                            <div className="info flex flex-col">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="inline-flex items-center gap-1" style={product.type === 'Subscription' ? { borderRadius: '100px', backgroundColor: '#e2e2e0', color: '#000', fontWeight: '500', fontSize: '13px', padding: '3px 14px' } : { padding: '2px 9px', borderRadius: '100px', backgroundColor: '#fee2e1', color: '#991b1b', fontWeight: '500', fontSize: '13px' }}>

                                                                        <span className="product-type mb-1">{product.type}</span>
                                                                    </div>
                                                                    <div className="inline-flex items-center gap-1" style={{ backgroundColor: '#e2e2e0', color: '#000', fontWeight: '500', fontSize: '13px', padding: '2px 9px', borderRadius: '100px' }}>
                                                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                                            <path fill="#343332" d="M10.3031 4.71338C10.638 4.71338 10.9096 4.98493 10.9096 5.3199V5.62947C11.7726 5.74654 12.5494 6.11208 13.0363 6.67319C13.2559 6.92617 13.2288 7.30925 12.9758 7.52881C12.7229 7.74837 12.3398 7.72128 12.1202 7.4683C11.8892 7.20209 11.4627 6.96219 10.9096 6.85747V9.13097C11.5063 9.2117 12.0549 9.41056 12.4966 9.70499C13.0803 10.0941 13.5358 10.6984 13.5358 11.4478C13.5358 12.1973 13.0803 12.8015 12.4966 13.1907C12.0549 13.4851 11.5063 13.684 10.9096 13.7647V14.0741C10.9096 14.4091 10.638 14.6806 10.3031 14.6806C9.9681 14.6806 9.69656 14.4091 9.69656 14.0741V13.7645C8.83357 13.6474 8.0568 13.2819 7.5698 12.7208C7.35024 12.4678 7.37733 12.0847 7.63031 11.8652C7.88329 11.6456 8.26636 11.6727 8.48592 11.9257C8.71697 12.1919 9.14345 12.4318 9.69656 12.5365V10.263C9.09982 10.1823 8.55128 9.98342 8.10959 9.68899C7.52581 9.29985 7.07031 8.69563 7.07031 7.94614C7.07031 7.19665 7.52581 6.59244 8.10959 6.2033C8.55128 5.90886 9.09982 5.71 9.69656 5.62928V5.3199C9.69656 4.98493 9.9681 4.71338 10.3031 4.71338ZM9.69656 6.85766C9.33347 6.92644 9.02055 7.0539 8.78241 7.21264C8.4157 7.45709 8.28336 7.7283 8.28336 7.94614C8.28336 8.16399 8.4157 8.4352 8.78241 8.67964C9.02055 8.83839 9.33347 8.96585 9.69656 9.03463V6.85766ZM10.9096 10.3594V12.5363C11.2727 12.4675 11.5856 12.3401 11.8237 12.1813C12.1905 11.9369 12.3228 11.6657 12.3228 11.4478C12.3228 11.23 12.1905 10.9588 11.8237 10.7143C11.5856 10.5556 11.2727 10.4281 10.9096 10.3594Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                            <path fill="#343332" d="M10.3399 2.51392C6.38177 2.51392 3.1731 5.72259 3.1731 9.6807C3.1731 13.6388 6.38177 16.8475 10.3399 16.8475C14.298 16.8475 17.5067 13.6388 17.5067 9.6807C17.5067 5.72259 14.298 2.51392 10.3399 2.51392ZM1.9231 9.6807C1.9231 5.03224 5.69142 1.26392 10.3399 1.26392C14.9883 1.26392 18.7567 5.03224 18.7567 9.6807C18.7567 14.3292 14.9883 18.0975 10.3399 18.0975C5.69142 18.0975 1.9231 14.3292 1.9231 9.6807Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                                        </svg>
                                                                        <span className="product-price mb-1">${product.price}</span>
                                                                    </div>
                                                                </div>
                                                                <span className="product-name mt-1" style={{ fontSize: '13px', fontWeight: '600' }}>{product.name}</span>
                                                            </div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => removeProduct2(product.id)}
                                                        >
                                                            ✖
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="form-group position-relative px-2 pt-2">
                                                <svg className="absolute" style={{ top: '18px', left: '19px' }} width='20' height='20' viewBox="1 1 60 60">
                                                    <path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"></path><path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"></path>
                                                </svg>
                                                <input
                                                    type="text"
                                                    className="school-inputs"
                                                    style={{ paddingLeft: '38px' }}
                                                    value={searchQuery2}
                                                    onChange={(e) => setSearchQuery2(e.target.value)}
                                                    placeholder="Search..."
                                                />
                                                {filteredSubscriptions.length > 0 && (
                                                    <ul className="product-list mt-4">
                                                        {filteredSubscriptions.map((product) => (
                                                            <li className="flex items-center justify-between mb-4 cursor-pointer" key={product.id} onClick={() => addProduct2(product)}>
                                                                <div className="flex items-center gap-3">
                                                                    <img width={55} height={55} className="rounded" src={product.image} />
                                                                    <div className="">
                                                                        <div className="inline-flex items-center gap-1" style={product.type === 'Subscription' ? { borderRadius: '100px', backgroundColor: '#e2e2e0', color: '#000', fontWeight: '500', fontSize: '13px', padding: '3px 14px' } : { padding: '2px 7px', backgroundColor: '#fee2e1', color: '#991b1b', fontWeight: '500', fontSize: '13px' }}>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-between w-100 pl-10 pr-4 mt-4">
                                    <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                                        <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Coupons & Promotions</h2>
                                        <p style={{ fontSize: '15px', color: 'grey' }}>Manage how coupons are displayed in the frontend.</p>
                                    </div>
                                    <div className="bg-white col-xl-7 col-md-12 border rounded">
                                        <div className="popup-content pb-0 pt-4.5 px-2 -lg coupon-section">
                                            <h2 className="popup-title mb-1 pl-2" style={{ fontSize: '16px', fontWeight: '500' }}>Coupons</h2>
                                            <div className="table-container w-100">
                                                <div className="table-header">
                                                </div>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Code</th>
                                                            <th>Type</th>
                                                            <th>Value</th>
                                                            <th>Created</th>
                                                            <th>Modified</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {coupons.map((coupon) => (
                                                            <>
                                                                <tr key={coupon.id} data-coupon-id={coupon.id} className={expanded === coupon.id ? "expanded" : ""}
                                                                >
                                                                    <td>
                                                                        <button
                                                                            className="expand-button"
                                                                            onClick={() => toggleDetails(coupon.id)}
                                                                        >
                                                                            <svg
                                                                                width="16"
                                                                                height="16"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeWidth="2"
                                                                            >
                                                                                <path
                                                                                    d="M2 5l6 6 6-6"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                    </td>
                                                                    <td className="coupon-code">{coupon.code}</td>
                                                                    <td>
                                                                        <span
                                                                            className={`type-badge type-${coupon.type.toLowerCase()}`}
                                                                        >
                                                                            {coupon.type}
                                                                        </span>
                                                                    </td>
                                                                    <td className="value">{coupon.value}</td>
                                                                    <td className="date-column">
                                                                        {coupon.created}
                                                                        <div className="date-tooltip">{coupon.created}</div>
                                                                    </td>
                                                                    <td className="date-column">
                                                                        {coupon.modified}
                                                                        <div className="date-tooltip">{coupon.modified}</div>
                                                                    </td>
                                                                </tr>
                                                                {expanded === coupon.id && (
                                                                    <tr
                                                                        className={`details-row ${expanded === coupon.id ? "visible" : ""
                                                                            }`}
                                                                        data-coupon-id={coupon.id}
                                                                        key={`details-${coupon.id}`}
                                                                    >
                                                                        <td colSpan="6">
                                                                            <div className="details-content">
                                                                                <table className="details-table">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th>Prefix</th>
                                                                                            <th>Quantity</th>
                                                                                            <th>Usage</th>
                                                                                            <th>Expires</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <span className="prefix-badge">
                                                                                                    {coupon.details.prefix}
                                                                                                </span>
                                                                                            </td>
                                                                                            <td>
                                                                                                <span className="quantity-badge">
                                                                                                    {coupon.details.quantity} coupons
                                                                                                </span>
                                                                                            </td>
                                                                                            <td>
                                                                                                <div className="usage-wrapper">
                                                                                                    <div className="progress-bar">
                                                                                                        <div
                                                                                                            className="progress-fill"
                                                                                                            style={{
                                                                                                                width: `${(coupon.details.usage /
                                                                                                                    coupon.details.quantity) *
                                                                                                                    100
                                                                                                                    }%`,
                                                                                                            }}
                                                                                                        ></div>
                                                                                                    </div>
                                                                                                    <span>
                                                                                                        {coupon.details.usage}/
                                                                                                        {coupon.details.quantity} used
                                                                                                    </span>
                                                                                                </div>
                                                                                            </td>
                                                                                            <td>
                                                                                                <div className="expiry">
                                                                                                    <svg
                                                                                                        className="metric-icon"
                                                                                                        viewBox="0 0 20 20"
                                                                                                        fill="currentColor"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-6a1 1 0 10-2 0v3a1 1 0 002 0V8zm-1-4a1 1 0 100 2 1 1 0 000-2z"
                                                                                                        />
                                                                                                    </svg>
                                                                                                    {coupon.details.expires}
                                                                                                </div>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                            </>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end mt-2 mb-4 mr-7">
                                    <button type="submit" className="submit-btn mt-1" style={{ marginLeft: 'auto' }}>
                                        Save Pricing
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
                                                <h1 className="header-title">Course Checklist</h1>
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
                                        {courseChecklistData.map((data, index) => {
                                            return (
                                                <div className={`section ${coursesectionexpand === true ? 'expanded' : ''}`}>
                                                    <div className="section-header mb-0" onClick={() => setcoursesectionexpand(!coursesectionexpand)}>
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
                                                                    <div className="item-expand" onClick={() => toggleExpand(`${index}-${itemIndex}`)}>
                                                                        <svg style={{
                                                                            transform: expandedState[`${index}-${itemIndex}`] ? 'rotate(180deg)' : 'rotate(0deg)',
                                                                            transition: 'transform 0.2s ease',
                                                                        }}
                                                                            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className={`item-details ${expandedState[`${index}-${itemIndex}`] ? 'expanded' : ''
                                                                    }`}>
                                                                    <div className="issue-description">
                                                                        {
                                                                            item.description.split(/(8 sections)/g).map((part, index) => {
                                                                                if (part === "8 sections") {
                                                                                    return (
                                                                                        <span key={index} className="highlight-success">
                                                                                            {part}
                                                                                        </span>
                                                                                    );
                                                                                }
                                                                                return part;
                                                                            })
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
                                        {SessionChecklistData.map((data, index) => {
                                            return (
                                                <div className={`section ${sessionsectionexpand === true ? 'expanded' : ''}`}>
                                                    <div className="section-header mb-0" onClick={() => setsessionsectionexpand(!sessionsectionexpand)}>
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
                                                                    <div className="item-expand" onClick={() => toggleExpand3(`${index}-${itemIndex}`)}>
                                                                        <svg style={{
                                                                            transform: expandedState3[`${index}-${itemIndex}`] ? 'rotate(180deg)' : 'rotate(0deg)',
                                                                            transition: 'transform 0.2s ease',
                                                                        }}
                                                                            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className={`item-details ${expandedState3[`${index}-${itemIndex}`] ? 'expanded' : ''
                                                                    }`}>
                                                                    <div className="issue-description">
                                                                        {
                                                                            item.description.split(/(8 sections)/g).map((part, index) => {
                                                                                if (part === "8 sections") {
                                                                                    return (
                                                                                        <span key={index} className="highlight-success">
                                                                                            {part}
                                                                                        </span>
                                                                                    );
                                                                                }
                                                                                return part;
                                                                            })
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
                                                                        <span className="flex items-center gap-2">
                                                                            {item.affectedItemsError && item.affectedItemsError.length > 0 ? (
                                                                                item.affectedItemsError.map((affectedItem, index) => (
                                                                                    <span className="keyword-highlight" key={index}>{affectedItem}</span>
                                                                                ))
                                                                            ) : (
                                                                                ''
                                                                            )}
                                                                        </span>
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
        </div >
    );
};

export default EditPagesettingPrice;