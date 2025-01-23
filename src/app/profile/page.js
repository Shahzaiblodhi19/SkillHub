"use client";

import React, { useState, useEffect } from "react";

function Profile() {
    const [countries, setCountries] = useState([]); // List of countries
    const [states, setStates] = useState([]); // List of states
    const [selectedCountry, setSelectedCountry] = useState(""); // Selected country
    const [selectedState, setSelectedState] = useState(""); // Selected state
    const [error, setError] = useState(null); // Error state

    // Fetch countries from the CountriesNow API
    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch countries.");
                }
                return res.json();
            })
            .then((data) => {
                const countryList = data.data.map((country) => ({
                    name: country.country,
                    iso2: country.iso2, // ISO2 code
                }));
                setCountries(countryList.sort((a, b) => a.name.localeCompare(b.name)));
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    // Fetch states for the selected country
    useEffect(() => {
        if (selectedCountry) {
            fetch("https://countriesnow.space/api/v0.1/countries/states", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ country: selectedCountry }),
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Failed to fetch states.");
                    }
                    return res.json();
                })
                .then((data) => {
                    const stateList = data.data.states.map((state) => state.name);
                    setStates(stateList.sort());
                })
                .catch((err) => {
                    setError(err.message);
                });
        } else {
            setStates([]); // Clear states when no country is selected
        }
    }, [selectedCountry]);

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

    return (
        <div className="container rounded bg-white">
            <div className="row p-4">
                <div className="col-12 p-0">
                    <h1 style={{ fontSize: '22px', fontWeight: '600' }} >Account Details</h1>
                </div>
                <hr className="my-3" />
                <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                    <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Details</h2>
                    <p style={{ fontSize: '15px', color: 'grey' }}>Edit your account details here.</p>
                </div>
                <div className="bg-white col-xl-7 col-md-12 border-gray-100 rounded-lg border-2 p-4">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="school-inputs"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" >
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="school-inputs"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" >
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="Username"
                                className="school-inputs"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" >
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="abc@gmail.com"
                                className="school-inputs"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" >
                                Account ID
                            </label>
                            <input
                                type="text"
                                value="12345678899"
                                readOnly
                                className="school-inputs"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" >
                                Country
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedCountry}
                                    onChange={(e) => {
                                        setSelectedCountry(e.target.value);
                                        setSelectedState(""); // Clear selected state when country changes
                                    }}
                                    className="school-inputs cursor-pointer appearance-none"
                                >
                                    <option value="">(None Specified)</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country.name}>
                                            {country.name}
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
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" >
                                State
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedState}
                                    onChange={(e) => setSelectedState(e.target.value)}
                                    disabled={!selectedCountry} // Disable if no country is selected
                                    className="school-inputs cursor-pointer appearance-none"
                                >
                                    <option value="">(None Specified)</option>
                                    {states.map((state, index) => (
                                        <option key={index} value={state}>
                                            {state}
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
                        <div className="form-group px-4 py-3 border rounded-lg mt-3">
                            <label
                                style={{
                                    display: "block",
                                    marginBottom: "24px",
                                    fontWeight: "bold",
                                    color: "#333",
                                    fontSize: '15px'
                                }}
                            >
                                Avatar
                            </label>
                            {/* Avatar Preview */}
                            <div className="flex items-center gap-4 flex-wrap" style={{ width: "100%" }}>
                                <img
                                    src={preview || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHylL97CjJ3JctnR5MzdMVvsJSeR5-TnVL4w&s"}
                                    alt="Avatar Preview"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        borderRadius: "50px",
                                        objectFit: "cover",
                                    }}
                                />
                                {/* Upload Button */}
                                <div className="flex flex-col">
                                    <span className="mb-1" style={{ fontSize: "15px", color: "#666" }}>
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
                                        className="upload-button inline-flex items-center gap-2 mt-2 w-fit"
                                        style={{ display: "inline-flex", fontWeight: '500', fontSize: '14px' }}>
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
                                        {preview === null ? 'Upload Avatar' : 'Replace Avatar'}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row p-4 mt-3">
                <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                    <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Social Profile</h2>
                    <p style={{ fontSize: '15px', color: 'grey' }}>Edit information displayed publicly on course details page & communities.</p>
                </div>
                <div className="bg-white col-xl-7 col-md-12 border-gray-100 rounded-lg border-2 p-4">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Bio
                            </label>
                            <textarea
                                type="text"
                                placeholder="Public Bio"
                                className="school-inputs"
                                required
                                rows={3}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" >
                                Facebook
                            </label>
                            <input
                                type="text"
                                placeholder="Facebook URL"
                                className="school-inputs"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" >
                                Twitter
                            </label>
                            <input
                                type="text"
                                placeholder="Twitter URL"
                                className="school-inputs"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" >
                                Linkedin
                            </label>
                            <input
                                type="text"
                                placeholder="Linkedin URL"
                                className="school-inputs"
                                required
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="row p-4 mt-3">
                <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                    <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Payment Info</h2>
                    <p style={{ fontSize: '15px', color: 'grey' }}>Edit payment information.</p>
                </div>
                <div className="bg-white col-xl-7 col-md-12 border-gray-100 rounded-lg border-2 p-4">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" >
                                PayPal Email
                            </label>
                            <input
                                type="text"
                                placeholder="PayPal Email"
                                className="school-inputs"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" >
                                Zelle Email
                            </label>
                            <input
                                type="text"
                                placeholder="Zelle Email"
                                className="school-inputs"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-end mt-3 mb-4">
                            <button type="submit" className="submit-btn mt-1" style={{ marginLeft: 'auto' }}>
                                Save Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;
