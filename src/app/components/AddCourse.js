"use client";
import { useContext, useState } from "react";
import { MyContext } from "../layout";

const AddCourse = () => {
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
        setUrl(value ? `https://skillhub.com/courses/${slugify(value)}-${randomSuffix}` : "");
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

    return (
        context.AddCourseModal &&
        <div className="modal-overlay h-screen" style={{ overflowY: 'auto' }}>
            <div className="modal-container h-screen p-0" style={{ width: '430px', textAlign: 'left', height: `calc(100vh - 80px)`, }}>
                <div className='popup-container'>
                    <div className="popup">
                        <div className="popup-header">
                            <h2 className="popup-title">New Course</h2>
                            <button className="close-button p-0" onClick={() => context.setAddCourseModal(!context.AddCourseModal)}>
                                ✖
                            </button>
                        </div>
                        <div className="popup-content pb-0">
                            <form onSubmit={handleSubmit} id="courseForm">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="courseTitle">
                                        Title
                                    </label>
                                    <span className="char-counter">{charCount}/60</span>
                                    <input
                                        type="text"
                                        id="courseTitle"
                                        className="input-field"
                                        placeholder="e.g., UX Design Essentials"
                                        maxLength="60"
                                        value={title}
                                        onChange={handleTitleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="courseUrl">
                                        Course URL
                                    </label>
                                    <input
                                        type="text"
                                        id="courseUrl"
                                        className="input-field readonly"
                                        value={url}
                                        readOnly
                                    />
                                </div>

                                <div className="form-group">
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
                                            onInput={handleDescriptionChange}
                                        ></div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="courseCategory">
                                        Choose a category
                                    </label>
                                    <div className='select-wrapper'>
                                        <select
                                            id="courseCategory"
                                            className="input-field"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            required
                                        >
                                            <option value="">Choose a category</option>
                                            <option value="Development">Development</option>
                                            <option value="Business">Business</option>
                                            <option value="Finance & Accounting">Finance & Accounting</option>
                                            <option value="it">IT & Software</option>
                                            <option value="Office Productivity">Office Productivity</option>
                                            <option value="Personal Development">Personal Development</option>
                                            <option value="Design">Design</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Lifestyle">Lifestyle</option>
                                            <option value="Photography & Video">Photography & Video</option>
                                            <option value="Health & Fitness">Health & Fitness</option>
                                            <option value="Music">Music</option>
                                            <option value="Teaching & Academics">Teaching & Academics</option>
                                            <option value="I don't know yet">I don't know yet</option>
                                        </select>
                                        <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="popup-footer pt-2">
                            <button type="submit" form="courseForm" className="create-button">
                                Create Course
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;