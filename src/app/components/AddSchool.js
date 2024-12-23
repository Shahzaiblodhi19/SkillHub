// pages/index.js
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const emojiCategories = {
  frequent: ["🕐", "😊", "🐱", "🍔", "🚗", "⚽", "👕", "🎵", "🌟", "📱", "🛒", "🏡", "🖊️", "🔥", "💡", "📅", "✨", "🔒", "🎥", "📞", "💻", "📦", "📚", "📸", "💳", "📋", "📈", "🖋️", "📍", "📂", "🎶", "🛏️", "🔑", "🛁", "🖼️", "💵", "🗂️", "🔗", "🛠️", "🧾", "📜", "🕯️", "📡", "💬", "📊", "🧹", "🧼", "🪣", "🔔", "📖", "🔎", "⚙️", "🔦", "🧮", "💣", "🗡️", "⚔️", "🔫", "🛡️", "🏹", "🧨", "🪓", "🔨", "🧲", "🔩", "⚖️", "🔧", "🪚", "🧰", "🔬", "🔭", "🩺", "💉", "💊", "🩸", "🧬", "🦠", "🩻", "🩼", "🧯", "📀", "💿", "🖱️", "🖲️", "💽", "🖨️", "🖴", "📟", "📠"],
  smileys: ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥴", "😵", "🤯", "😳", "🥶", "😱", "😨", "😰", "😥", "😓", "😪", "😴", "😬", "🤥", "🤭", "🤔", "🤫", "🤗", "🫣", "🫠", "😶‍🌫️", "😑", "😐", "🙄", "😮‍💨", "😵‍💫", "🫥", "🤐", "🫢"],
  nature: ["🐱", "🐶", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐽", "🐸", "🐵", "🙈", "🙉", "🙊", "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉", "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🪱", "🐛", "🦋", "🐌", "🐞", "🐜", "🦗", "🕷", "🕸", "🐢", "🐍", "🦎", "🦂", "🦕", "🦖", "🐙", "🦑", "🦐", "🦞", "🦀", "🐡", "🐟", "🐠", "🐬", "🐳", "🐋", "🦈", "🐊", "🐅", "🐆", "🦧", "🦮", "🐕‍🦺", "🐩", "🐕", "🐈", "🐓", "🦃", "🦢", "🦚", "🦜", "🐇", "🦝", "🦨", "🦡", "🦦", "🦥", "🐁", "🐀", "🐿️", "🦔", "🐾"],
  food: ["🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🥬", "🥒", "🌶", "🫑", "🌽", "🥕", "🧄", "🧅", "🥔", "🍠", "🥐", "🍞", "🥖", "🥨", "🧀", "🥚", "🍳", "🧈", "🥞", "🧇", "🫓", "🥗", "🥙", "🥪", "🌮", "🌯", "🫔", "🥘", "🍲", "🍿", "🧂", "🥤", "🧃", "🧋", "🍹", "🍸", "🍷", "🍶", "🍵", "🫖", "🥂", "🍻", "🍺", "🍼", "🥄", "🍴", "🥢", "🥡"],
  activities: ["⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🎱", "🏓", "🏸", "🏒", "🏑", "🥍", "🏏", "🪀", "🪁", "🎿", "⛷", "🏂", "🪂", "🏋️", "🤼", "🤸", "⛹️", "🤺", "🤾", "🏌️", "🏇", "🧘", "🏄", "🏊", "🤽", "🚣", "🧗", "🚵", "🚴", "🎤", "🎧", "🎼", "🎹", "🥁", "🎷", "🎺", "🎸", "🪕", "🎻", "🎮", "🕹️", "🎲", "🧩", "🎯", "🎳", "🎬"],
  travel: ["🚗", "🚕", "🚙", "🚌", "🚎", "🏎", "🚓", "🚑", "🚒", "🚐"],
  objects: ["👕", "👚", "👖", "👔", "👗", "👙", "👘", "👠", "👡", "👢"],
  symbols: ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "💔", "💕", "💞"],
};

const EmojiPicker = ({ selectedEmoji, setSelectedEmoji, toggleEmojiPicker }) => {
  const handleSelect = (emoji) => {
    setSelectedEmoji(emoji);
    toggleEmojiPicker();
  };

  const handleRemove = () => {
    setSelectedEmoji(null);
  };

  return (
    <div
      className="absolute top-full right-0 mt-2 bg-white p-4 border rounded-lg w-72 max-h-96 overflow-auto"
      style={{ zIndex: 100 }}
    >

      {selectedEmoji && (
        <div className="flex items-center justify-between p-2 bg-gray-50 rounded mb-4">
          <span className="text-lg">{selectedEmoji}</span>
          <button
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700 border border-black absolute"
            title="Remove Emoji"
            style={{ zIndex: 1001, top: '-100px' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

        </div>
      )}
      {Object.entries(emojiCategories).map(([category, emojis]) => (
        <div key={category} className="mb-4">
          <div className="text-gray-500 text-sm mb-2">{category}</div>
          <div className="flex flex-wrap gap-2">
            {emojis.map((emoji) => (
              <button
                key={emoji}
                onClick={() => handleSelect(emoji)}
                className="text-lg p-1 hover:bg-gray-100 rounded"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function AddSchoolPopup({ isSchoolModal, setIsSchoolModal, setSelectedEmoji, selectedEmoji, schoolName, setSchoolName }) {
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [bannerPreview, setBannerPreview] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [links, setLinks] = useState([{ text: "", url: "" }]);
  const [description, setDescription] = useState("");

  const toggleModal2 = () => setIsSchoolModal(!isSchoolModal);

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

  const toggleEmojiPicker = () => setEmojiPickerVisible(!emojiPickerVisible);

  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...links];
    updatedLinks[index][field] = value;
    setLinks(updatedLinks);
  };

  const addLink = () => setLinks([...links, { text: "", url: "" }]);

  const removeLink = (index) => setLinks(links.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      name: schoolName.trim(), // Use state value for name
      description: description.trim(), // Use state value for description
      emoji: selectedEmoji, // Selected emoji
      banner: bannerPreview, // Banner image (base64)
      thumbnail: thumbnailPreview, // Thumbnail image (base64)
      links: links.filter((link) => link.text.trim() && link.url.trim()), // Valid links only
    };
  
    // Validate required fields
    if (!formData.name) {
      alert("Please enter the school name.");
      return;
    }
    if (!formData.description) {
      alert("Please enter a description.");
      return;
    }
    if (!formData.banner) {
      alert("Please upload a banner image.");
      return;
    }
    if (!formData.thumbnail) {
      alert("Please upload a thumbnail image.");
      return;
    }
  
    // Display form data in an alert
    alert("Form submitted: " + JSON.stringify(formData, null, 2));
  
    // Reset all fields after submission
    setSchoolName(""); // Reset school name
    setDescription(""); // Reset description
    setSelectedEmoji(null); // Reset emoji
    setBannerPreview(null); // Reset banner preview
    setThumbnailPreview(null); // Reset thumbnail preview
    setLinks([{ text: "", url: "" }]); // Reset links to default empty state
  
    // Close modal
    setIsSchoolModal(false);
  };
  



  return (
    isSchoolModal && (
      <div className="modal-overlay  h-screen" style={{ overflowY: 'auto' }}>
        <div className="modal-container h-screen" style={{ width: '550px', textAlign: 'left' }}>
          <div className="d-flex align-items-center justify-content-between mb-4" >
            <h2 className="text-lg font-bold text-gray-800">Create School</h2>
            <button className="close-btn" onClick={toggleModal2}>
              ✖
            </button>
          </div>

          <form id="schoolForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="schoolName" className="form-label mb-2">
                Name
              </label>
              <div className="d-flex align-items-center gap-2">
                <input
                  type="text"
                  id="schoolName"
                  placeholder="School Name"
                  required
                  className="school-inputs"
                  value={schoolName} // Bind state
                  onChange={(e) => setSchoolName(e.target.value)} // Update state
                />
                <div className="emoji-wrapper">
                  <div className="emoji-label mb-2">Emoji</div>
                  <button
                    type="button"
                    id="emojiButton"
                    className="emoji-button flex items-center justify-center w-10 h-10 "
                    onClick={toggleEmojiPicker}
                  >
                    {selectedEmoji || (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#4F4F4F"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 7V17M7 12H17"
                          stroke="#4F4F4F"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </button>
                  {emojiPickerVisible && (
                    <EmojiPicker
                      setSelectedEmoji={setSelectedEmoji}
                      toggleEmojiPicker={toggleEmojiPicker}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                placeholder="A space for discussing the latest insights.."
                style={{
                  fontSize: "13px",
                  resize: "both",
                  maxWidth: "100%", // Limit the width to the container
                  maxHeight: "300px", // Set a maximum height for resizing
                  minHeight: "100px", // Set a minimum height
                  overflow: "auto", // Handle scroll for long content
                }}
                className="school-inputs w-100"
                value={description} // Bind state
                onChange={(e) => setDescription(e.target.value)} // Update state
              ></textarea>

            </div>
            <div className="form-group">
              <label htmlFor="banner" className="form-label mb-2">
                Banner
              </label>
              <div className="upload-section">
                <div className="banner-preview relative" id="bannerPreview">
                  {bannerPreview ? (
                    <>
                      <Image
                        src={bannerPreview}
                        alt="Banner Preview"
                        width={1280}
                        height={720}
                        className="object-cover w-full h-48"
                      />
                    </>
                  ) : (
                    <img
                      src="https://i.ibb.co/Lhx2TLT/upload-image-placeholder-banner.png"
                      alt="Banner preview"
                      className="w-full h-48 object-cover"
                    />
                  )}
                </div>
                <div className="upload-preview">
                  <div className="upload-info">
                    <p className="upload-dimensions">
                      Recommended dimensions of <strong>1280×720</strong>
                    </p>
                    <label
                      htmlFor="bannerInput"
                      className="upload-button inline-flex items-center gap-2 mt-2 w-auto"
                      style={{ display: "inline-flex" }}>
                      {bannerPreview === null ?
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
                      {bannerPreview === null ? 'Choose Banner' : 'Replace Banner'}
                    </label>
                  </div>
                </div>
                <input
                  type="file"
                  id="bannerInput"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setBannerPreview)}
                  className="hidden"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="thumbnail" className="form-label mb-2">
                Thumbnail
              </label>
              <div className="upload-section">
                <div className="upload-preview relative">
                  <div className="upload-thumbnail" id="thumbnailPreview">
                    {thumbnailPreview ? (
                      <>
                        <Image
                          src={thumbnailPreview}
                          alt="Thumbnail Preview"
                          width={128}
                          height={128}
                          className="object-cover w-24 h-24"
                        />
                      </>
                    ) : (
                      <img
                        src="https://i.ibb.co/Vxc90f4/default-file-upload-image.png"
                        alt="Thumbnail preview"
                        className="w-24 h-24 object-cover"
                      />
                    )}
                  </div>
                  <div className="upload-info">
                    <p className="upload-dimensions">
                      Recommended dimensions of <strong>1280×720</strong>
                    </p>
                    <label
                      htmlFor="thumbnailInput"
                      className="upload-button inline-flex items-center gap-2 mt-2 w-auto"
                      style={{ display: "inline-flex" }}
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
                      {thumbnailPreview === null ? 'Choose Thumbnail' : 'Replace Thumbnail'}
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

            <div className="form-group">
              <label className="form-label mb-1">Links</label>
              <div className="links-container" id="linksContainer">
                {links.map((link, index) => (
                  <div key={index} className="link-row flex gap-2 mb-1">
                    <input
                      type="text"
                      placeholder="Link Text"
                      value={link.text}
                      onChange={(e) => handleLinkChange(index, "text", e.target.value)}
                      className="school-inputs"
                    />
                    <input
                      type="text"
                      placeholder="Link URL"
                      value={link.url}
                      onChange={(e) => handleLinkChange(index, "url", e.target.value)}
                      className="school-inputs"
                    />
                    <button
                      type="button"
                      onClick={() => removeLink(index)}
                      className="delete-link"
                    >
                      ✖
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  id="addLinkButton"
                  onClick={addLink}
                  className="add-link-button w-25"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3V13M3 8H13" stroke="#02C5AF" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Add Link
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end">
              <button
                type="submit"
                className="w-full submit-btn"
              >
                Create School
              </button>
            </div>
          </form>
        </div>
      </div>
    ))
}
