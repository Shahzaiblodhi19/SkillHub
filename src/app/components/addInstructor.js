"use client";
import { useContext, useState } from "react";
import { MyContext } from "../layout";

const AddInstructorModal = () => {
    const context = useContext(MyContext);
    const [isPrimary, setIsPrimary] = useState(false);
    const [revenueAllocation, setRevenueAllocation] = useState(0);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Invitation Sent!");
    };
    return (
        context.AddInstructor &&
        <div className="modal-overlay h-screen" style={{ overflowY: 'auto' }}>
            <div className="modal-container h-screen" style={{ width: '390px', textAlign: 'left', height: `calc(100vh - 80px)`, }}>
                <div className="modal-header mb-4 flex-row pt-2" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <h2 className="mt-0">Add Instructor</h2>
                    <button onClick={() => context.setAddInstructor(!context.AddInstructor)} className="close-button">✖</button>
                </div>
                <form
                    className="w-full max-w-md mx-auto"
                    onSubmit={handleFormSubmit}
                >
                    {/* First Name and Last Name */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="mt-2 school-inputs py-2 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="mt-2 school-inputs py-2 rounded"
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            className="mt-2 school-inputs py-2 rounded"
                            required
                        />
                    </div>

                    {/* Permissions */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Permissions
                        </label>
                        <div className="flex items-center mt-2">
                            <div className="view-toggle flex gap-2 items-center">
                                <label className="toggle-switch mt-1">
                                    <input
                                        type="checkbox"
                                        checked={isPrimary}
                                        onChange={() => setIsPrimary(!isPrimary)}
                                        id="viewToggle"
                                    />
                                    <span className="toggle-slider"></span>
                                </label>
                                <label htmlFor="viewToggle" className="toggle-label text-gray-700 cursor-pointer text-sm">Set as Primary</label>
                            </div>
                        </div>
                    </div>

                    {/* Revenue Allocation */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Revenue Allocation
                        </label>
                        <div className="flex items-center mt-2">
                            <input
                                type="number"
                                value={revenueAllocation}
                                onChange={(e) => setRevenueAllocation(e.target.value)}
                                min="0"
                                max="100"
                                step="0.1"
                                style={{width: '85px'}}
                                className="school-inputs"
                            />
                            <span className="ml-2 text-sm text-gray-700">%</span>
                        </div>
                    </div>

                    {/* Permissions Checklist */}
                    <div className="mb-4">
                        <div className="mt-2 space-y-2">
                            <div>
                                <input
                                    type="checkbox"
                                    id="createCourse"
                                    className="mr-2"
                                />
                                <label htmlFor="createCourse" className="text-sm text-gray-700">
                                    Create Course
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="viewSalesHistory"
                                    className="mr-2"
                                />
                                <label htmlFor="viewSalesHistory" className="text-sm text-gray-700">
                                    View Sales History
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="viewStudentProgress"
                                    className="mr-2"
                                />
                                <label
                                    htmlFor="viewStudentProgress"
                                    className="text-sm text-gray-700"
                                >
                                    View Student Progress
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="moderateCommunity"
                                    className="mr-2"
                                />
                                <label
                                    htmlFor="moderateCommunity"
                                    className="text-sm text-gray-700"
                                >
                                    Moderate Community (of assigned courses)
                                </label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="managePromotions"
                                    className="mr-2"
                                />
                                <label
                                    htmlFor="managePromotions"
                                    className="text-sm text-gray-700"
                                >
                                    Manage Promotions
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-md shadow-md text-sm"
                        >
                            Send Invitation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddInstructorModal;
