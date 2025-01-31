import { useState, useEffect } from "react";

export default function SupportModal({ supportModal, setsupportModal }) {
    const [isActive, setIsActive] = useState(false);
    const [debugCheck, setDebugCheck] = useState(true);
    const [screenshotCheck, setScreenshotCheck] = useState(false);
    const [screenshotImg, setScreenshotImg] = useState(null);

    const handleCheckboxChange = () => {
        setDebugCheck(!debugCheck); // Toggle the state
    };


    const togglePopup = () => {
        setsupportModal(!supportModal);
    };

    const [debugInfo, setDebugInfo] = useState({
        screenRes: '',
        deviceType: '',
        browserInfo: '',
        osInfo: '',
        language: '',
        timezone: '',
        connectionInfo: '',
    });

    useEffect(() => {
        // Function to get the browser info
        const getBrowserInfo = () => {
            const ua = navigator.userAgent;
            let browser = 'Unknown';
            let version = '';

            if (ua.includes('Firefox')) {
                browser = 'Firefox';
                version = ua.match(/Firefox\/([\d.]+)/)?.[1] || '';
            } else if (ua.includes('Chrome')) {
                browser = 'Chrome';
                version = ua.match(/Chrome\/([\d.]+)/)?.[1] || '';
            } else if (ua.includes('Safari') && !ua.includes('Chrome')) {
                browser = 'Safari';
                version = ua.match(/Version\/([\d.]+)/)?.[1] || '';
            } else if (ua.includes('Edge')) {
                browser = 'Edge';
                version = ua.match(/Edge\/([\d.]+)/)?.[1] || '';
            }

            return version ? `${browser} ${version}` : browser;
        };

        // Function to get the OS info
        const getOSInfo = () => {
            const ua = navigator.userAgent;
            if (ua.includes('Windows')) {
                return 'Windows';
            } else if (ua.includes('Mac OS')) {
                return 'macOS';
            } else if (ua.includes('Linux')) {
                return 'Linux';
            } else if (/iPhone|iPad|iPod/.test(ua)) {
                return 'iOS';
            } else if (ua.includes('Android')) {
                return 'Android';
            }
            return 'Unknown';
        };

        // Gather the information
        const screenRes = `${window.screen.width}x${window.screen.height}`;
        const deviceType = /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
        const browserInfo = getBrowserInfo();
        const osInfo = getOSInfo();
        const language = navigator.language || 'en-US';
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        let connectionInfo = 'Unknown';
        if (navigator.connection) {
            connectionInfo = navigator.connection.effectiveType || 'Unknown';
        }

        // Set the state with the gathered information
        setDebugInfo({
            screenRes,
            deviceType,
            browserInfo,
            osInfo,
            language,
            timezone,
            connectionInfo,
        });
    }, []);


    const handleScreenshot = async () => {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({
                preferCurrentTab: true,
                video: { frameRate: 1, height: window.innerHeight, width: window.innerWidth },
            });

            const video = document.createElement('video');
            video.srcObject = stream;

            await new Promise((resolve) => {
                video.onloadedmetadata = () => resolve(video.play());
            });

            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0);

            const screenshot = canvas.toDataURL('image/png');
            setScreenshotImg(screenshot);

            // Stop the video stream after capturing
            stream.getTracks().forEach(track => track.stop());
        } catch (error) {
            console.error("Error capturing screenshot: ", error);

            // If the user denies the permission, set screenshotCheck to false
            setScreenshotCheck(false);
        }
    };


    const handleDeleteScreenshot = () => {
        setScreenshotImg(null);
        setScreenshotCheck(false)
    };
    const handleCheckboxChange2 = () => {
        setScreenshotCheck(!screenshotCheck);
        handleScreenshot();
    };


    // State to track if file is checked (uploaded)
    const [fileCheck, setFileCheck] = useState(false);
    const [filePreview, setFilePreview] = useState(null);  // For file preview image
    const [fileName, setFileName] = useState('');  // For file name

    // Handle checkbox toggle
    const handleCheckboxChange3 = () => {
        setFileCheck(!fileCheck);
    };

    // Handle file upload
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFilePreview(reader.result); // Set the preview image
                setFileName(file.name); // Set the file name
            };
            reader.readAsDataURL(file);
        }
    };

    // Remove the file preview
    const removeFile = () => {
        setFilePreview(null);
        setFileName('');
        setFileCheck(false); // Uncheck the checkbox
    };


    return (
        supportModal &&
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50" style={{ zIndex: '10000' }}>
            <div className="bg-white support rounded-lg px-1 shadow-lg mt-10 mb-10 overflow-auto max-h-[calc(100vh-80px)]" style={{ width: '550px' }}>
                <div className="popup-header">
                    <h2 className="popup-title">Contact Us</h2>
                    <button className="close-button" onClick={togglePopup}>
                        <svg fill="none" viewBox="0 0 15 15">
                            <path clip-rule="evenodd" fill-rule="evenodd" fill="currentColor" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"></path>
                        </svg>
                    </button>
                </div>

                <div class="info-banner">
                    <svg fill="none">
                        <path fill="#4F4F4F" d="M10 3.25C8.43084 3.25 6.92592 3.87336 5.81633 4.98295C4.70674 6.09254 4.08337 7.59747 4.08337 9.16667V9.4306C4.37153 9.31247 4.68257 9.25 5.00004 9.25H5.83337C6.47431 9.25 7.089 9.50461 7.54221 9.95783C7.99543 10.411 8.25004 11.0257 8.25004 11.6667V14.1667C8.25004 14.8076 7.99543 15.4223 7.54221 15.8755C7.089 16.3287 6.47431 16.5833 5.83337 16.5833H5.00004C4.3591 16.5833 3.74441 16.3287 3.2912 15.8755C2.83799 15.4223 2.58337 14.8076 2.58337 14.1667V9.16667C2.58337 7.19965 3.36477 5.31319 4.75567 3.92229C6.14656 2.5314 8.03302 1.75 10 1.75C11.9671 1.75 13.8535 2.531415.2444 3.92229C16.6353 5.31319 17.4167 7.19965 17.4167 9.16667V14.1667C17.4167 14.8076 17.1621 15.4223 16.7089 15.8755C16.4102 16.1742 16.0414 16.3866 15.6412 16.4967C15.374 17.2874 14.6508 17.8821 13.8711 18.272C12.8417 18.7867 11.472 19.0833 10 19.0833C9.58583 19.0833 9.25004 18.7476 9.25004 18.3333C9.25004 17.9191 9.58583 17.5833 10 17.5833C11.2897 17.5833 12.4201 17.3204 13.2003 16.9303C13.4508 16.805 13.646 16.678 13.7964 16.5548C13.2926 16.4767 12.8229 16.2405 12.4579 15.8755C12.0047 15.4223 11.75 14.8076 11.75 14.1667V11.6667C11.75 11.0257 12.0047 10.411 12.4579 9.95783C12.9111 9.50461 13.5258 9.25 14.1667 9.25H15C15.3175 9.25 15.6285 9.31247 15.9167 9.4306V9.16667C15.9167 7.59747 15.2933 6.09254 14.1838 4.98295C13.0742 3.87336 11.5692 3.25 10 3.25ZM15.9167 11.6667C15.9167 11.4236 15.8201 11.1904 15.6482 11.0185C15.4763 10.8466 15.2432 10.75 15 10.75H14.1667C13.9236 10.75 13.6904 10.8466 13.5185 11.0185C13.3466 11.1904 13.25 11.4236 13.25 11.6667V14.1667C13.25 14.4098 13.3466 14.6429 13.5185 14.8148C13.6904 14.9868 13.9236 15.0833 14.1667 15.0833H15C15.2432 15.0833 15.4763 14.9868 15.6482 14.8148C15.8201 14.6429 15.9167 14.4098 15.9167 14.1667V11.6667ZM4.08337 11.6667V14.1667C4.08337 14.4098 4.17995 14.6429 4.35186 14.8148C4.52377 14.9868 4.75693 15.0833 5.00004 15.0833H5.83337C6.07649 15.0833 6.30965 14.9868 6.48155 14.8148C6.65346 14.6429 6.75004 14.4098 6.75004 14.1667V11.6667C6.75004 11.4236 6.65346 11.1904 6.48155 11.0185C6.30965 10.8466 6.07649 10.75 5.83337 10.75H5.00004C4.75693 10.75 4.52377 10.8466 4.35186 11.0185C4.17995 11.1904 4.08337 11.4236 4.08337 11.6667Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                    <p class="info-text">Please write your message in English and allow us up to 3 business days htmlFor a response.</p>
                </div>

                <div class="popup-content">
                    <div class="htmlForm-group">
                        <label class="htmlForm-label">Your message:</label>
                        <textarea class="message-input"></textarea>
                    </div>

                    <div class="checkbox-section">
                        <div className="checkbox-header">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    className="checkbox-input"
                                    id="debugCheck"
                                    checked={debugCheck}
                                    onChange={handleCheckboxChange}
                                />
                                Send debug information together with my message.
                            </label>
                        </div>
                        <div class={`checkbox-content ${debugCheck === true ? 'active' : ''}`}>
                            <div className="debug-info">
                                <div className="debug-row">
                                    <span className="debug-label">Using Beta:</span>
                                    <span className="debug-value">No</span>
                                </div>
                                <div className="debug-row">
                                    <span className="debug-label">Screen Resolution:</span>
                                    <span className="debug-value">{debugInfo.screenRes}</span>
                                </div>
                                <div className="debug-row">
                                    <span className="debug-label">Detected device type:</span>
                                    <span className="debug-value">{debugInfo.deviceType}</span>
                                </div>
                                <div className="debug-row">
                                    <span className="debug-label">Browser:</span>
                                    <span className="debug-value">{debugInfo.browserInfo}</span>
                                </div>
                                <div className="debug-row">
                                    <span className="debug-label">Operating System:</span>
                                    <span className="debug-value">{debugInfo.osInfo}</span>
                                </div>
                                <div className="debug-row">
                                    <span className="debug-label">Language:</span>
                                    <span className="debug-value">{debugInfo.language}</span>
                                </div>
                                <div className="debug-row">
                                    <span className="debug-label">Time Zone:</span>
                                    <span className="debug-value">{debugInfo.timezone}</span>
                                </div>
                                <div className="debug-row">
                                    <span className="debug-label">Connection Type:</span>
                                    <span className="debug-value">{debugInfo.connectionInfo}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="checkbox-section">
                        <div className="checkbox-header">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    className="checkbox-input"
                                    id="screenshotCheck"
                                    checked={screenshotCheck}
                                    onChange={handleCheckboxChange2}
                                />
                                Include screenshot
                            </label>
                        </div>

                        {screenshotImg && (
                            <div className={`checkbox-content ${screenshotCheck === true ? 'active' : ''}`}>
                                <div className="screenshot-preview">
                                    <div className="screenshot-container">

                                        <>
                                            <img className="screenshot-image" src={screenshotImg} alt="Screenshot" id="screenshotImg" />
                                            <button className="delete-screenshot" onClick={handleDeleteScreenshot} id="deleteScreenshot">Delete</button>
                                        </>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="checkbox-section">
                        <div className="checkbox-header">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    className="checkbox-input"
                                    id="fileCheck"
                                    checked={fileCheck}  // Bind checkbox to state
                                    onChange={handleCheckboxChange3}
                                />
                                Upload File
                            </label>
                        </div>

                        {fileCheck && (
                            <div className={`checkbox-content ${fileCheck === true ? 'active' : ''}`}>
                                <div className="file-upload" id="fileUpload">
                                    <label className="file-drop-area" htmlFor="fileInput" id="dropArea">
                                        <svg className="file-icon" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 341 246" fill="none">
                                            <path d="M155 246H85.25C61.69 246 41.5917 237.954 24.955 221.861C8.31833 205.666 0 185.935 0 162.667C0 142.68 6.045 124.845 18.135 109.163C30.3283 93.48 46.2417 83.4862 65.875 79.1812C72.385 55.6062 85.3017 36.5412 104.625 21.9862C124.052 7.32875 146.01 0 170.5 0C200.777 0 226.403 10.455 247.38 31.365C268.46 52.1725 279 77.5925 279 107.625C296.877 109.675 311.653 117.362 323.33 130.688C335.11 143.808 341 159.183 341 176.812C341 196.082 334.232 212.431 320.695 225.859C307.158 239.286 290.677 246 271.25 246H186V136.069L210.8 159.9L232.5 138.375L170.5 76.875L108.5 138.375L130.2 159.9L155 136.069V246Z" fill="#394253"></path>
                                        </svg>
                                        <span id="dropAreaText">Choose a file to upload</span>
                                        <input
                                            type="file"
                                            id="fileInput"
                                            className="file-input"
                                            onChange={handleFileUpload}
                                        />
                                    </label>
                                </div>

                                {filePreview && (
                                    <div className="file-preview" id="filePreview">
                                        <div className="file-preview-header">
                                            <span className="file-preview-name" id="fileName">{fileName}</span>
                                            <button className="file-preview-remove" onClick={removeFile} id="removeFile">
                                                Remove
                                            </button>
                                        </div>
                                        <img
                                            className="file-preview-content"
                                            id="filePreviewImg"
                                            src={filePreview}
                                            alt="File Preview"
                                            style={{ display: filePreview ? 'block' : 'none' }}
                                        />
                                        <div className="file-preview-info" id="filePreviewInfo"></div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div class="popup-footer">
                    <a href="#" class="status-link">Check service status</a>
                    <div class="footer-buttons">
                        <button class="send-button">Send</button>
                        <a onClick={togglePopup} href="#" class="close-link">Close</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
