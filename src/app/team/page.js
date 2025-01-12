"use client";

import { useContext, useState } from "react";
import { MyContext } from "../layout";

export default function TeamMembers() {
    const context = useContext(MyContext);
    const [members, setMembers] = useState([
        {
            id: 1,
            name: "William Kulp",
            email: "william@example.com",
            status: "Accepted",
            lastActive: "October 30, 2024",
            usage: "Unlimited",
            role: "Admin",
            avatar: `https://i.pravatar.cc/40?u=william`,
            isSelected: false,
        },
        {
            id: 2,
            name: "Michael Park",
            email: "michael@example.com",
            status: "Pending",
            lastActive: "October 29, 2024",
            usage: "Unlimited",
            role: "",
            avatar: `https://i.pravatar.cc/40?u=michael`,
            isSelected: false,
        },
        {
            id: 3,
            name: "Sarah Chen",
            email: "sarah@example.com",
            status: "Rejected",
            lastActive: "October 28, 2024",
            usage: "Unlimited",
            role: "",
            avatar: `https://i.pravatar.cc/40?u=sarah`,
            isSelected: false,
        },
    ]);

    const [isAllSelected, setIsAllSelected] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [sortOption, setSortOption] = useState("Sort by Name A-Z");

    const toggleSelectAll = () => {
        const newState = !isAllSelected;
        setIsAllSelected(newState);
        setMembers((prev) =>
            prev.map((member) => ({
                ...member,
                isSelected: newState,
            }))
        );
    };

    const handleMemberSelect = (id) => {
        setMembers((prev) =>
            prev.map((member) =>
                member.id === id
                    ? { ...member, isSelected: !member.isSelected }
                    : member
            )
        );
    };

    const handleBulkAction = (action) => {
        if (action === "Delete") {
            setMembers((prev) => prev.filter((member) => !member.isSelected));
            setIsAllSelected(false);
        }
    };

    const handleDropdownToggle = (id) => {
        setDropdownOpen((prev) => (prev === id ? null : id));
    };

    const handleDelete = (id) => {
        setMembers((prev) => prev.filter((member) => member.id !== id));
        setDropdownOpen(null);
    };

    const filteredMembers = members.filter((member) => {
        if (statusFilter === "All Status") return true;
        return member.status === statusFilter;
    });

    const sortedMembers = [...filteredMembers].sort((a, b) => {
        if (sortOption === "Sort by Name A-Z") {
            return a.name.localeCompare(b.name);
        } else if (sortOption === "Sort by Email A-Z") {
            return a.email.localeCompare(b.email);
        } else if (sortOption === "Sort by Last Active") {
            return new Date(b.lastActive) - new Date(a.lastActive);
        }
        return 0;
    });

    const [activeTab, setActiveTab] = useState("Team");
    return (
        <div className="container-fluid p-4 bg-white rounded">
            <div className="d-flex flex-wrap gap-4 mb-3" style={{ fontSize: '16px', fontWeight: '600' }}>
                <button
                    onClick={() => setActiveTab("Team")}
                    className="pb-1.5"
                    style={{ color: activeTab === 'Team' ? '#02C5AF' : '#000', borderBottom: activeTab === 'Team' ? '2px solid #02C5AF' : 'none' }}
                >
                    Team
                </button>
                <button
                    onClick={() => setActiveTab("Co-Instructors")}
                    className="pb-1.5"
                    style={{ color: activeTab === 'Co-Instructors' ? '#02C5AF' : '#000', borderBottom: activeTab === 'Co-Instructors' ? '2px solid #02C5AF' : 'none' }}
                >
                    Co-Instructors
                </button>
            </div>
            <div className="flex justify-between flex-col gap-3 md:gap-0 items-start md:flex-row md:items-center mb-4">
                <h2 className="text-xl font-bold">{activeTab === 'Team' ? 'Team Members' : ''}{activeTab === 'Co-Instructors' ? 'Instructors' : ''}</h2>
                <button onClick={() => {
                    if (activeTab === "Team") {
                        context.setAddTeamMember(!context.AddTeamMember);
                    } else if (activeTab === "Co-Instructors") {
                        context.setAddInstructor(!context.AddInstructor);
                    }
                }} className="btn btn-dark text-white px-3 py-2 rounded-md" style={{ fontSize: '13px' }}>
                    {activeTab === 'Team' ? 'Add Member' : ''}{activeTab === 'Co-Instructors' ? 'Add Instructor' : ''}
                </button>
            </div>

            {activeTab === 'Team' ?
                <>
                    <div className="flex flex-col md:flex-row items-end md:items-center gap-3 md:gap-0 justify-between mb-4 w-100">
                        <div className="flex items-center flex-col md:flex-row items-end md:items-center gap-3 md:gap-0 w-100">
                            <div className="relative">
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="school-inputs cursor-pointer appearance-none"
                                    style={{ paddingRight: '80px' }}
                                >
                                    <option>All Status</option>
                                    <option>Accepted</option>
                                    <option>Pending</option>
                                    <option>Rejected</option>
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
                            <div className="relative">
                                <select
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                    className="school-inputs cursor-pointer appearance-none"
                                    style={{ paddingRight: '60px' }}
                                >
                                    <option>Sort by Name A-Z</option>
                                    <option>Sort by Email A-Z</option>
                                    <option>Sort by Last Active</option>
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
                        <div className="relative" style={{ width: '210px' }}>
                            <select
                                onChange={(e) => handleBulkAction(e.target.value)}
                                className="school-inputs cursor-pointer appearance-none"
                                style={{ paddingRight: '20px' }}
                            >
                                <option value="Bulk Actions">Bulk Actions</option>
                                <option value="Delete">Delete</option>
                                <option value="Resend Invitation">Resend Invitation</option>
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
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-max border-collapse text-left">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
                                    <th className="px-4 py-3">
                                        <input
                                            type="checkbox"
                                            checked={isAllSelected}
                                            onChange={toggleSelectAll}
                                        />
                                    </th>
                                    <th className="px-1 py-3">Name</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Last Active</th>
                                    <th className="px-4 py-3">Usage</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedMembers.map((member) => (
                                    <tr key={member.id} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            <input
                                                type="checkbox"
                                                checked={member.isSelected}
                                                onChange={() => handleMemberSelect(member.id)}
                                            />
                                        </td>
                                        <td className="px-1 py-3 flex items-center space-x-3">
                                            <img
                                                src={member.avatar}
                                                alt={member.name}
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <div>
                                                <p className="font-medium">{member.name}</p>
                                                <p className="text-sm text-gray-500">{member.email}</p>
                                            </div>
                                            {member.role && (
                                                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                                                    {member.role}
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`px-2.5 py-1 rounded-full fw-medium text-xs ${member.status === "Accepted"
                                                    ? "bg-green-100 text-green-600"
                                                    : member.status === "Pending"
                                                        ? "bg-yellow-100 text-yellow-600"
                                                        : "bg-red-100 text-red-600"
                                                    }`}
                                            >
                                                {member.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">{member.lastActive}</td>
                                        <td className="pl-0 pr-4 py-3 flex items-end flex-col gap-1.5 text-sm w-100">
                                            {member.usage}
                                            <div className="relative w-full h-1 bg-gray-200 rounded-full">
                                                <div
                                                    className="absolute top-0 left-0 h-1 bg-gray-700 rounded-full"
                                                    style={{ width: "60%" }} // Change this width dynamically based on progress percentage
                                                ></div>
                                            </div></td>
                                        <td className="px-4 py-3 relative">
                                            <button
                                                onClick={() => handleDropdownToggle(member.id)}
                                                className="btn btn-light border flex items-center justify-between"
                                            >
                                                Manage <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-gray-500 mt-1"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                            {dropdownOpen === member.id && (
                                                <div className="absolute right-0 mt-2 bg-white border shadow-lg rounded-lg w-40" style={{ zIndex: '100' }}>
                                                    <button className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(member.id)}
                                                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                                                    >
                                                        Delete
                                                    </button>
                                                    <button className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
                                                        Resend Invitation
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
                : ''
            }
            {activeTab === 'Co-Instructors' ?
                <>
                    <div className="flex flex-col md:flex-row items-end md:items-center gap-3 md:gap-0 justify-between mb-4 w-100">
                        <div className="flex flex-col md:flex-row items-end md:items-center gap-3 md:gap-0 w-100">
                            <div className="relative">
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="school-inputs cursor-pointer appearance-none"
                                    style={{ paddingRight: '80px' }}
                                >
                                    <option>All Status</option>
                                    <option>Accepted</option>
                                    <option>Pending</option>
                                    <option>Rejected</option>
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
                            <div className="relative">
                                <select
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                    className="school-inputs cursor-pointer appearance-none"
                                    style={{ paddingRight: '60px' }}
                                >
                                    <option>Sort by Name A-Z</option>
                                    <option>Sort by Email A-Z</option>
                                    <option>Sort by Last Active</option>
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
                        <div className="relative" style={{ width: '210px' }}>
                            <select
                                onChange={(e) => handleBulkAction(e.target.value)}
                                className="school-inputs cursor-pointer appearance-none"
                                style={{ paddingRight: '20px' }}
                            >
                                <option value="Bulk Actions">Bulk Actions</option>
                                <option value="Delete">Delete</option>
                                <option value="Resend Invitation">Resend Invitation</option>
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
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-max border-collapse text-left">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
                                    <th className="px-4 py-3">
                                        <input
                                            type="checkbox"
                                            checked={isAllSelected}
                                            onChange={toggleSelectAll}
                                        />
                                    </th>
                                    <th className="px-1 py-3">Name</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Last Active</th>
                                    <th className="px-4 py-3">Usage</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedMembers.map((member) => (
                                    <tr key={member.id} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            <input
                                                type="checkbox"
                                                checked={member.isSelected}
                                                onChange={() => handleMemberSelect(member.id)}
                                            />
                                        </td>
                                        <td className="px-1 py-3 flex items-center space-x-3">
                                            <img
                                                src={member.avatar}
                                                alt={member.name}
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <div>
                                                <p className="font-medium">{member.name}</p>
                                                <p className="text-sm text-gray-500">{member.email}</p>
                                            </div>
                                            {member.role && (
                                                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                                                    {member.role}
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`px-2.5 py-1 rounded-full fw-medium text-xs ${member.status === "Accepted"
                                                    ? "bg-green-100 text-green-600"
                                                    : member.status === "Pending"
                                                        ? "bg-yellow-100 text-yellow-600"
                                                        : "bg-red-100 text-red-600"
                                                    }`}
                                            >
                                                {member.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">{member.lastActive}</td>
                                        <td className="pl-0 pr-4 py-3 flex items-end flex-col gap-1.5 text-sm w-100">
                                            {member.usage}
                                            <div className="relative w-full h-1 bg-gray-200 rounded-full">
                                                <div
                                                    className="absolute top-0 left-0 h-1 bg-gray-700 rounded-full"
                                                    style={{ width: "60%" }} // Change this width dynamically based on progress percentage
                                                ></div>
                                            </div></td>
                                        <td className="px-4 py-3 relative">
                                            <button
                                                onClick={() => handleDropdownToggle(member.id)}
                                                className="btn btn-light border flex items-center justify-between"
                                            >
                                                Manage <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-gray-500 mt-1"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                            {dropdownOpen === member.id && (
                                                <div className="absolute right-0 mt-2 bg-white border shadow-lg rounded-lg w-40" style={{ zIndex: '100' }}>
                                                    <button className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(member.id)}
                                                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                                                    >
                                                        Delete
                                                    </button>
                                                    <button className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">
                                                        Resend Invitation
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
                : ''
            }
        </div>
    );
}