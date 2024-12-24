"use client";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React, { useState, useEffect } from 'react';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useRouter } from 'next/router';
import SignUp from './components/Signup';
import ApplyToTeach from './components/ApplyToTeach';
import Dashboard from './pages/Dashboard';
import AddSchoolPopup from './components/AddSchool';
import Login from './components/Login';
import "./styles/globals.css";
import CreateCollectionModal from './components/AddCollection';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State for sidebar visibility
  const [isOpenApplytoTeach, setIsOpenApplytoTeach] = useState(false);
  const [isSchoolModal, setIsSchoolModal] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [collectionModal, SetCollectionModal] = useState(false);

  // Handle responsive behavior for sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1220) {
        setIsSidebarOpen(false); // Close sidebar for smaller screens (md and below)
      } else {
        setIsSidebarOpen(true); // Reopen sidebar for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid px-0">
      {/* Use d-flex to ensure columns remain aligned */}
      <div className="d-flex flex-row w-100">
        {/* Sidebar */}
        <div className={`custom-sidebar ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            setIsSchoolModal={setIsSchoolModal}
            isSchoolModal={isSchoolModal}
            schoolName={schoolName}
            selectedEmoji={selectedEmoji}
            collectionModal={collectionModal}
            SetCollectionModal={SetCollectionModal}
          />
        </div>
        {/* Main content */}
        <div className="flex-grow-1">
          <Header
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            isModalOpen2={isModalOpen2}
            isOpenApplytoTeach={isOpenApplytoTeach}
            setIsOpenApplytoTeach={setIsOpenApplytoTeach}
            setIsModalOpen2={setIsModalOpen2}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <div className="content">
            <Login
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              isModalOpen2={isModalOpen2}
              setIsModalOpen2={setIsModalOpen2}
            />
            <SignUp
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              isModalOpen2={isModalOpen2}
              setIsModalOpen2={setIsModalOpen2}
            />
            <ApplyToTeach
              isOpenApplytoTeach={isOpenApplytoTeach}
              setIsOpenApplytoTeach={setIsOpenApplytoTeach}
            />
            <AddSchoolPopup
              setIsSchoolModal={setIsSchoolModal}
              isSchoolModal={isSchoolModal}
              setSchoolName={setSchoolName}
              schoolName={schoolName}
              setSelectedEmoji={setSelectedEmoji}
              selectedEmoji={selectedEmoji}
            />
            <CreateCollectionModal  
            collectionModal={collectionModal}
            SetCollectionModal={SetCollectionModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
