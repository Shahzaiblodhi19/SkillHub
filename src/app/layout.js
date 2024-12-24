"use client";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React, { useState, useEffect } from 'react';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SignUp from './components/Signup';
import ApplyToTeach from './components/ApplyToTeach';
import AddSchoolPopup from './components/AddSchool';
import Login from './components/Login';
import "./styles/globals.css";
import CreateCollectionModal from './components/AddCollection';
import NotificationsPanel from './components/NotificationPanel';
import Playlist from './components/PlayList';
import SupportModal from './components/SupportModal';

// export const metadata = {
//   title: "Skill Hub",
//   description: "A Platform for Teaching and Buy Courses",
// };

export default function RootLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State for sidebar visibility
  const [isOpenApplytoTeach, setIsOpenApplytoTeach] = useState(false);
  const [isSchoolModal, setIsSchoolModal] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [collectionModal, SetCollectionModal] = useState(false);
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [PlayListModal, setPlayListModal] = useState(false);
  const [supportModal, setsupportModal] = useState(false);

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
    <html><body>
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
              PlayListModal={PlayListModal}
              setPlayListModal={setPlayListModal}
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
              isPanelActive={isPanelActive}
              setIsPanelActive={setIsPanelActive}
              supportModal={supportModal}
              setsupportModal={setsupportModal}
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
              <NotificationsPanel
                isPanelActive={isPanelActive}
                setIsPanelActive={setIsPanelActive}
              />
              <Playlist PlayListModal={PlayListModal} />
              <SupportModal supportModal={supportModal} setsupportModal={setsupportModal} />

              <div className='PagesContent' style={{padding: '20px'}}>
                {children}
              </div>
              {/* Home Page should be here */}
            </div>
          </div>
        </div>
      </div>
    </body></html>
  );
}
