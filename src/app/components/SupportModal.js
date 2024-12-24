import { useState, useEffect } from "react";

export default function SupportModal({ supportModal, setsupportModal }) {
    const [message, setMessage] = useState("");
    const [includeDebugInfo, setIncludeDebugInfo] = useState(true);
    const [screenshot, setScreenshot] = useState(null);
    const [file, setFile] = useState(null);
    const [debugInfo, setDebugInfo] = useState("");
    const [includeScreenshot, setIncludeScreenshot] = useState(true);
    const [includeFile, setIncludeFile] = useState(true);

    useEffect(() => {
        const getDebugInfo = () => {
            const isBeta = "No"; // Update logic if beta detection is available
            const screenResolution = `${window.screen.width}x${window.screen.height}`;
            const userAgent = navigator.userAgent;
            setDebugInfo(
                <>
                    <div><strong>Using Beta:</strong> {isBeta}</div>
                    <div><strong>Screen Resolution:</strong> {screenResolution}</div>
                    <div><strong>Detected device type:</strong> normal</div>
                    <div><strong>User Agent string:</strong> {userAgent}</div>
                </>
            );

        };

        getDebugInfo();
    }, []);

    const handleFileUpload = (event, type) => {
        const uploadedFile = event.target.files[0];
        if (type === "screenshot") {
            setScreenshot(URL.createObjectURL(uploadedFile));
        } else {
            setFile(uploadedFile);
        }
    };

    const handleSubmit = () => {
        if (!message) {
            alert("Please enter your message.");
            return;
        }
    
        // Prepare form data to display in an alert
        const formData = {
            message: message,
            includeDebugInfo: includeDebugInfo,
            debugInfo: includeDebugInfo ? debugInfo : "Not allowed",
            includeScreenshot: includeScreenshot,
            screenshot: includeScreenshot && screenshot ? "Uploaded" : "Not allowed",
            includeFile: includeFile,
            file: includeFile && file ? file.name : "Not allowed",
        };
    
        // Display form data in an alert
        alert(JSON.stringify(formData, null, 2));
    
        // Reset form state
        setMessage("");
        setIncludeDebugInfo(true);
        setScreenshot(null);
        setFile(null);
        setIncludeScreenshot(true);
        setIncludeFile(true);
    };
    


    return (
        supportModal &&
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50" style={{ zIndex: '10000' }}>
            <div className="bg-white rounded-lg p-6 shadow-lg w-96 mt-10 mb-10 overflow-auto max-h-[calc(100vh-80px)]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                    <button className="close-btn" onClick={() => setsupportModal(!supportModal)}>
                        ✖
                    </button>
                </div>

                <textarea
                    className="school-inputs mb-4 text-sm"
                    placeholder="Your Message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <p className="text-sm text-gray-500 mb-4">
                    Please write your message in English and allow us up to 3 business days for a response.
                </p>

                <div className="flex flex-col mb-4 border-1  bg-gray-100">
                    <div className="flex items-center mb-2 bg-white p-2">
                        <input
                            type="checkbox"
                            id="debugInfo"
                            checked={includeDebugInfo}
                            onChange={() => setIncludeDebugInfo(!includeDebugInfo)}
                        />
                        <label htmlFor="debugInfo" className="ml-2" style={{ fontSize: '12.5px' }}>
                            Send debug information together with my message.
                        </label>
                    </div>
                    {includeDebugInfo && (
                        <pre className=" p-2 rounded text-xs text-gray-700 whitespace-pre-wrap">
                            {debugInfo}
                        </pre>
                    )}
                </div>

                <div className="flex flex-col mb-4 border-1">
                    <div className="flex items-center p-2">
                        <input
                            type="checkbox"
                            id="includeScreenshot"
                            checked={includeScreenshot}
                            onChange={() => setIncludeScreenshot(!includeScreenshot)}

                        />
                        <label htmlFor="includeScreenshot" className="ml-2" style={{ fontSize: '12.5px' }}>
                            Upload Screenshot
                        </label>
                    </div>
                    {includeScreenshot && (
                        <div className=" rounded flex flex-col items-start">
                            {screenshot ? <img src={screenshot} alt="Screenshot Preview" className="w-full rounded h-48" /> : <img
                                src="https://i.ibb.co/Lhx2TLT/upload-image-placeholder-banner.png"
                                alt="Banner preview"
                                className="w-full h-48 object-cover"
                            />}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleFileUpload(e, "screenshot")}
                                className="mb-2 d-none"
                                id="screenshotInput"
                            />
                            <label
                                htmlFor="screenshotInput"
                                className="upload-button inline-flex items-center gap-2 mt-2 ml-2 w-auto mb-2"
                                style={{ display: "inline-flex" }}>
                                {screenshot === null ?
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
                                {screenshot === null ? 'Choose Screenshot' : 'Replace Screenshot'}
                            </label>
                        </div>
                    )}
                </div>

                <div className="flex flex-col mb-4 border-1">
                    <div className="flex items-start mb-2 p-2">
                        <input
                            type="checkbox"
                            id="includeFile"
                            checked={includeFile}
                            onChange={() => setIncludeFile(!includeFile)}
                            className="mt-1"
                        />
                        <label htmlFor="includeFile" className="ml-2 text-sm">
                            Upload File
                        </label>
                    </div>
                    {includeFile && (
                        <label htmlFor="FileUploadInput" className="flex flex-col items-center cursor-pointer">
                            <p className="text-center text-sm">File Preview</p>
                            {file ? (
                                file.type.startsWith("image/") ? (
                                    // Show image preview if it's an image
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt="File Preview"
                                        className="w-100 h-48 object-cover rounded my-3"
                                        onClick={() => document.getElementById("FileUploadInput").click()}
                                    />
                                ) : (
                                    // Show file name for non-image files
                                    <div
                                        className="w-40 h-16 mt-2 mb-2 flex items-center justify-center bg-gray-100 rounded w-100"
                                        onClick={() => document.getElementById("FileUploadInput").click()}
                                    >
                                        <p className="text-gray-700 text-sm mb-0">{file.name}</p>
                                    </div>
                                )
                            ) : (
                                // Default cloud icon when no file is uploaded
                                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 341 246" fill="none">
                                    <path
                                        d="M155 246H85.25C61.69 246 41.5917 237.954 24.955 221.861C8.31833 205.666 0 185.935 0 162.667C0 142.68 6.045 124.845 18.135 109.163C30.3283 93.48 46.2417 83.4862 65.875 79.1812C72.385 55.6062 85.3017 36.5412 104.625 21.9862C124.052 7.32875 146.01 0 170.5 0C200.777 0 226.403 10.455 247.38 31.365C268.46 52.1725 279 77.5925 279 107.625C296.877 109.675 311.653 117.362 323.33 130.688C335.11 143.808 341 159.183 341 176.812C341 196.082 334.232 212.431 320.695 225.859C307.158 239.286 290.677 246 271.25 246H186V136.069L210.8 159.9L232.5 138.375L170.5 76.875L108.5 138.375L130.2 159.9L155 136.069V246Z"
                                        fill="#394253"
                                    />
                                </svg>
                            )}
                            <p className="text-gray-500 text-sm mt-2 mb-2">Choose a file to upload</p>
                            <input
                                type="file"
                                onChange={(e) => handleFileUpload(e, "file")}
                                className="hidden"
                                id="FileUploadInput"
                            />
                        </label>
                    )}

                </div>
                <div className="flex items-center justify-between hover:underline">
                    <button
                        className="text-blue-500 text-sm"
                        onClick={() => alert("Check service status functionality not implemented")}
                    >
                        Check service status
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 "
                    >
                        Send
                    </button>


                </div>
            </div>
        </div>
    );
}
