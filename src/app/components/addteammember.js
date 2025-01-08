"use client";
import { useContext, useState } from "react";
import { MyContext } from "../layout";

const AddTeamMemberModal = () => {
    const context = useContext(MyContext);
    const [isPrimary, setIsPrimary] = useState(false);
    const [revenueAllocation, setRevenueAllocation] = useState(0);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Invitation Sent!");
    };
    return (
        context.AddTeamMember &&
        <div className="modal-overlay h-screen" style={{ overflowY: 'auto' }}>
            <div className="modal-container py-4" style={{ width: '430px', textAlign: 'left' }}>
                <div className="modal-header mb-4 flex-row" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <h2 className="mt-0">Add Team Member</h2>
                    <button onClick={() => context.setAddTeamMember(!context.AddTeamMember)} className="close-button">✖</button>
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
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="createCourse"
                            className="mr-2 w-3.5 h-3.5"
                        />
                        <label htmlFor="createCourse" className="text-sm text-gray-700 pb-0.5 cursor-pointer">
                            Admin access
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md shadow-md text-sm"
                        >
                            Send Invitation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTeamMemberModal;
