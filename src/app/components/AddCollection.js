import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data"; // Emoji data

export default function CreateCollectionModal({ collectionModal, SetCollectionModal }) {
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState("😀"); // Default emoji
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [privacy, setPrivacy] = useState("shareable");

    const toggleModal = () => {
        SetCollectionModal(!collectionModal);
    };

    const handleEmojiSelect = (emoji) => {
        setSelectedEmoji(emoji.native); // Capture selected emoji
        setIsEmojiPickerOpen(false); // Close picker after selecting emoji
    };

    const handleSubmit = () => {
        // Construct the message to show in the alert
        const alertMessage = `
      Title: ${title || "N/A"}
      Description: ${description || "N/A"}
      Emoji: ${selectedEmoji}
      Privacy: ${privacy === "shareable" ? "Shareable" : "Secret"}
    `;

        // Show the alert with form data
        alert(alertMessage);

        // Close the modal after submission
        SetCollectionModal(false);
    };
    const handleSelect = (value) => {
        setPrivacy(value);
    };

    return (
        collectionModal && (
            <div
                className="modal-overlay h-screen fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
                style={{ overflowY: "auto" }}
            >
                <div
                    className="modal-container bg-white rounded-lg shadow-lg w-11/12 sm:w-2/3 lg:w-1/3 p-6"
                    style={{ textAlign: "left" }}
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-gray-800">Create Collection</h2>
                        <button className="close-btn text-gray-500 hover:text-gray-800" onClick={toggleModal}>
                            ✖
                        </button>
                    </div>
                    <div className="mt-4 space-y-4 relative">
                        {/* Title Input */}
                        <div className="flex items-center">
                            <div className="flex flex-column w-100">
                                <label className="block text-sm font-medium text-gray-700 mb-2 ">Title</label>
                                <input
                                    type="text"
                                    placeholder="Collection Name.."
                                    className="form-control school-inputs"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            {/* Emoji Picker */}
                            <div className="flex-column flex items-center space-x-3 " >
                                <label className="block text-sm font-medium text-gray-700 mb-2">Emoji</label>
                                <div
                                    className="flex items-center justify-center w-10 h-10 border rounded-full cursor-pointer text-lg"
                                    onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
                                >
                                    {selectedEmoji}
                                </div>
                            </div>
                            {isEmojiPickerOpen && (
                                <div className="absolute z-50 mt-2 top-16 right-0 bg-white shadow-lg rounded-lg p-2">
                                    <Picker data={data} onEmojiSelect={handleEmojiSelect} />
                                </div>
                            )}

                        </div>
                        {/* Description Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description (optional)</label>
                            <textarea
                                placeholder="A space for discussing latest tech insights..."
                                rows="3"
                                className="form-control school-inputs"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="relative">
                            {/* Selected option */}
                            <div
                                className="cursor-pointer flex items-center p-2 border border-gray-300 rounded-md school-inputs"
                                style={{ color: '#207E8A', stroke: '#207E8A' }}
                                onClick={() => document.getElementById('dropdown').classList.toggle('hidden')}
                            >
                                {/* Main select icon */}
                                {privacy === 'shareable' ? (
                                    <svg className="w-4 h-5 ml-2 mr-2" xmlns="http://www.w3.org/2000/svg" width="112" height="98" viewBox="0 0 112 98" fill="none">
                                        <path style={privacy === 'shareable' ? { stroke: '#207E8A' } : { stroke: '#202C2D' }} d="M68.9805 4.73025L68.995 4.72379L69.0096 4.71723C69.444 4.5209 69.9263 4.45569 70.3972 4.52961C70.8682 4.60354 71.3073 4.81339 71.6606 5.13337L71.671 5.14268L106.671 36.6414L106.676 36.6463C107.205 37.1201 107.5 37.7799 107.5 38.5025C107.5 39.1928 107.206 39.8728 106.659 40.3745C106.657 40.3767 106.654 40.3788 106.652 40.381L71.6828 71.8517C71.6812 71.8531 71.6796 71.8546 71.678 71.856C70.947 72.5058 69.9008 72.6793 68.9673 72.2689C68.0825 71.8799 67.5 70.9929 67.5 70.0012V56.0018V51.5018H63H42C27.9211 51.5018 16.5 62.9222 16.5 77.0009C16.5 85.0993 19.9755 90.0546 22.7624 92.6931L22.7794 92.7092L22.7966 92.7251C22.9405 92.8586 23.0614 92.9895 23.1606 93.1125C18.3274 90.2357 4.5 80.2294 4.5 59.5016C4.5 40.7255 19.7226 25.5032 38.5 25.5032H63H67.5V21.0032V7.00383C67.5 6.03078 68.0887 5.12574 68.9805 4.73025ZM23.5009 93.7087C23.5009 93.7089 23.5007 93.7081 23.5006 93.7061L23.5009 93.7087Z" strokeWidth="9" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" className="w-4 h-5  ml-2 mr-2">
                                        <path style={privacy === 'secret' ? { stroke: '#207E8A' } : { stroke: '#202C2D' }} d="M6 8a6 6 0 1 1 12 0v2.15c.283.062.554.152.816.286a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 17.71 3 17.046 3 16.242v-.483c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.262-.134.533-.224.816-.286zm2 2.002q.356-.003.759-.002h6.482q.403 0 .759.002V8a4 4 0 0 0-8 0zm-1.089 2.036c-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C5 14.361 5 14.943 5 15.8v.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C7.361 20 7.943 20 8.8 20h6.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C16.639 12 16.057 12 15.2 12H8.8c-.857 0-1.439 0-1.889.038" fillRule="evenodd"></path>
                                    </svg>
                                )}

                                {/* Show the selected option */}
                                {privacy === 'shareable' ? 'Shareable' : 'Secret'}

                                {/* Dropdown Arrow Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-5 ml-auto mr-1 transition-transform transform rotate-0 hover:rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#000"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>

                            {/* Dropdown options */}
                            <div id="dropdown" className="absolute w-full mt-1 hidden bg-white border border-gray-300 rounded-md shadow-lg">
                                {/* Shareable Option */}
                                <div
                                    className="cursor-pointer flex items-center p-2 hover:bg-sky-100"
                                    style={privacy === 'shareable' ? { color: '#207E8A', fontSize: '15px' } : { color: '#202C2D', fontSize: '15px' }}
                                    onClick={() => {
                                        handleSelect("shareable");
                                        document.getElementById('dropdown').classList.add('hidden');
                                    }}
                                >

                                    <svg className="w-5 h-5 ml-2 mr-2" xmlns="http://www.w3.org/2000/svg" width="112" height="98" viewBox="0 0 112 98" fill="none">
                                        <path style={privacy === 'shareable' ? { stroke: '#207E8A' } : { stroke: '#202C2D' }} d="M68.9805 4.73025L68.995 4.72379L69.0096 4.71723C69.444 4.5209 69.9263 4.45569 70.3972 4.52961C70.8682 4.60354 71.3073 4.81339 71.6606 5.13337L71.671 5.14268L106.671 36.6414L106.676 36.6463C107.205 37.1201 107.5 37.7799 107.5 38.5025C107.5 39.1928 107.206 39.8728 106.659 40.3745C106.657 40.3767 106.654 40.3788 106.652 40.381L71.6828 71.8517C71.6812 71.8531 71.6796 71.8546 71.678 71.856C70.947 72.5058 69.9008 72.6793 68.9673 72.2689C68.0825 71.8799 67.5 70.9929 67.5 70.0012V56.0018V51.5018H63H42C27.9211 51.5018 16.5 62.9222 16.5 77.0009C16.5 85.0993 19.9755 90.0546 22.7624 92.6931L22.7794 92.7092L22.7966 92.7251C22.9405 92.8586 23.0614 92.9895 23.1606 93.1125C18.3274 90.2357 4.5 80.2294 4.5 59.5016C4.5 40.7255 19.7226 25.5032 38.5 25.5032H63H67.5V21.0032V7.00383C67.5 6.03078 68.0887 5.12574 68.9805 4.73025ZM23.5009 93.7087C23.5009 93.7089 23.5007 93.7081 23.5006 93.7061L23.5009 93.7087Z" strokeWidth="9" />
                                    </svg>
                                    Shareable
                                    <div className="w-full h-px bg-gray-200 mt-1"></div>
                                    {/* Checkmark icon for selected item */}
                                    {privacy === 'shareable' && (
                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 105 105" fill="none">
                                            <path d="M105 52.5C105 81.4949 81.4949 105 52.5 105C23.5051 105 0 81.4949 0 52.5C0 23.5051 23.5051 0 52.5 0C81.4949 0 105 23.5051 105 52.5Z" fill="#207E8A" />
                                            <path d="M68.0794 34.7168C67.4272 34.3536 66.7099 34.1227 65.9685 34.0373C65.2272 33.9519 64.4763 34.0136 63.7588 34.2189C63.0412 34.4243 62.3711 34.7692 61.7866 35.2341C61.2022 35.6989 60.7149 36.2746 60.3525 36.9281L49.8048 55.9448L43.7682 49.8972C43.2441 49.3535 42.6171 48.9199 41.924 48.6216C41.2308 48.3233 40.4853 48.1663 39.7309 48.1597C38.9765 48.1531 38.2284 48.2972 37.5301 48.5833C36.8319 48.8695 36.1975 49.2922 35.6641 49.8266C35.1306 50.361 34.7088 50.9966 34.4231 51.6961C34.1374 52.3956 33.9937 53.1451 34.0002 53.9009C34.0068 54.6566 34.1635 55.4035 34.4613 56.098C34.759 56.7924 35.1919 57.4205 35.7345 57.9456L47.0975 69.3294C48.1714 70.408 49.6201 71 51.1144 71L51.9013 70.9431C52.7721 70.821 53.6028 70.4982 54.3279 69.9999C55.053 69.5016 55.6528 68.8415 56.08 68.0715L70.2838 42.4578C70.6465 41.8045 70.8771 41.0861 70.9626 40.3435C71.0481 39.6009 70.9867 38.8487 70.782 38.1299C70.5773 37.4111 70.2333 36.7397 69.7696 36.154C69.3059 35.5684 68.7315 35.08 68.0794 34.7168Z" fill="#D0FFFF" />
                                        </svg>
                                    )}
                                </div>

                                {/* Secret Option */}
                                <div
                                    className="cursor-pointer flex items-center p-2 hover:bg-sky-100"
                                    style={privacy === 'secret' ? { color: '#207E8A', fontSize: '15px' } : { color: '#202C2D', fontSize: '15px' }}
                                    onClick={() => {
                                        handleSelect("secret");
                                        document.getElementById('dropdown').classList.add('hidden');
                                    }}
                                >
                                    <svg viewBox="0 0 24 24" className="w-5 h-5  ml-2 mr-2">
                                        <path style={privacy === 'secret' ? { stroke: '#207E8A' } : { stroke: '#202C2D' }} d="M6 8a6 6 0 1 1 12 0v2.15c.283.062.554.152.816.286a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 17.71 3 17.046 3 16.242v-.483c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.262-.134.533-.224.816-.286zm2 2.002q.356-.003.759-.002h6.482q.403 0 .759.002V8a4 4 0 0 0-8 0zm-1.089 2.036c-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C5 14.361 5 14.943 5 15.8v.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C7.361 20 7.943 20 8.8 20h6.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C16.639 12 16.057 12 15.2 12H8.8c-.857 0-1.439 0-1.889.038" fillRule="evenodd"></path>
                                    </svg>
                                    Secret
                                    <div className="w-full h-px bg-gray-200 mt-1"></div>
                                    {/* Checkmark icon for selected item */}
                                    {privacy === 'secret' && (
                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 105 105" fill="none">
                                            <path d="M105 52.5C105 81.4949 81.4949 105 52.5 105C23.5051 105 0 81.4949 0 52.5C0 23.5051 23.5051 0 52.5 0C81.4949 0 105 23.5051 105 52.5Z" fill="#207E8A" />
                                            <path d="M68.0794 34.7168C67.4272 34.3536 66.7099 34.1227 65.9685 34.0373C65.2272 33.9519 64.4763 34.0136 63.7588 34.2189C63.0412 34.4243 62.3711 34.7692 61.7866 35.2341C61.2022 35.6989 60.7149 36.2746 60.3525 36.9281L49.8048 55.9448L43.7682 49.8972C43.2441 49.3535 42.6171 48.9199 41.924 48.6216C41.2308 48.3233 40.4853 48.1663 39.7309 48.1597C38.9765 48.1531 38.2284 48.2972 37.5301 48.5833C36.8319 48.8695 36.1975 49.2922 35.6641 49.8266C35.1306 50.361 34.7088 50.9966 34.4231 51.6961C34.1374 52.3956 33.9937 53.1451 34.0002 53.9009C34.0068 54.6566 34.1635 55.4035 34.4613 56.098C34.759 56.7924 35.1919 57.4205 35.7345 57.9456L47.0975 69.3294C48.1714 70.408 49.6201 71 51.1144 71L51.9013 70.9431C52.7721 70.821 53.6028 70.4982 54.3279 69.9999C55.053 69.5016 55.6528 68.8415 56.08 68.0715L70.2838 42.4578C70.6465 41.8045 70.8771 41.0861 70.9626 40.3435C71.0481 39.6009 70.9867 38.8487 70.782 38.1299C70.5773 37.4111 70.2333 36.7397 69.7696 36.154C69.3059 35.5684 68.7315 35.08 68.0794 34.7168Z" fill="#D0FFFF" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="mt-4 flex justify-end">
                        <button
                            onClick={handleSubmit}
                            className="submit-btn"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}
