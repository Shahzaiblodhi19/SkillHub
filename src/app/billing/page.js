"use client";

import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../layout";

function Billing() {
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

    const context = useContext(MyContext);

    return (
        <div className="container rounded bg-white">
            <div className="row p-4">
                <div className="col-12 p-0">
                    <h1 style={{ fontSize: '22px', fontWeight: '600' }} >Billing</h1>
                </div>
                <hr className="my-3" />
                <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                    <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Billing Information</h2>
                    <p style={{ fontSize: '15px', color: 'grey' }}>Enter your billing information.</p>
                </div>
                <div className="bg-white col-xl-7 col-md-12 border-gray-100 rounded-lg border-2 p-4">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="school-inputs"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" >
                                Country or Region
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
                                Address
                            </label>
                            <input
                                type="text"
                                placeholder="Street Address"
                                className="school-inputs"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" >
                                City
                            </label>
                            <input
                                type="text"
                                placeholder="City"
                                className="school-inputs"
                                required
                            />
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
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" >
                                Zip
                            </label>
                            <input
                                type="number"
                                placeholder="Zip Code"
                                className="school-inputs"
                                required
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="row p-4 mt-3">
                <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                    <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Subscription</h2>
                    <p style={{ fontSize: '15px', color: 'grey' }}>Manage your current plan details, or switch Plans.</p>
                </div>
                <div className="bg-white col-xl-7 col-md-12 border-gray-100 rounded-lg border-2 p-4">
                    {/* Plan Section */}
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-semibold mb-1">Professional (monthly)</h2>
                            <p className="text-gray-600 text-sm">$89.00 / month</p>
                        </div>
                        <a
                            href="#"
                            className="text-gray-500 hover:underline text-sm font-medium flex items-center"
                        >
                            <span className="mb-1">All Plans</span> <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 text-gray-500 "
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                style={{ rotate: '-90deg' }}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>

                    <hr className="border-gray-300 my-4" />

                    {/* Next Billing Section */}
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-semibold mb-1">Next billing date</h2>
                            <p className="text-gray-500 text-sm">
                                December 13, 2023 <span className="text-gray-500">50 days left in current billing cycle</span>
                            </p>
                        </div>
                        <a
                            onClick={() => context.setbillingInvoices(!context.billingInvoices)}
                            className="text-gray-500 hover:underline text-sm font-medium flex items-center cursor-pointer"
                        >
                            <span className="mb-1">Past Invoices</span> <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 text-gray-500 "
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                style={{ rotate: '-90deg' }}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>

                    <hr className="border-gray-300 my-4" />

                    {/* Free Trial Section */}
                    <div>
                        <p className="text-gray-500 text-sm">
                            Your free trial ends on <span className="font-medium">Mon, December 5th 2023</span>
                        </p>
                    </div>

                    <hr className="border-gray-300 my-4" />

                    {/* Buttons Section */}
                    <div className="flex justify-between items-center">
                        <button className="text-gray-700 hover:text-red-500 text-sm font-medium">
                            Cancel Trial
                        </button>
                        <button className="btn btn-dark text-white px-3 py-2 rounded-md" style={{ fontSize: '13px' }}>
                            Upgrade Plan
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-end mt-3">
                    <button type="submit" className="submit-btn mt-1" style={{ marginLeft: 'auto' }}>
                        Save Billing
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Billing;
