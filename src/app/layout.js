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
import ResponsiveSidebar from './components/ResponsiveSidebar';
import BottomNavigation from './components/ResponsiveFooter';

// export const metadata = {
//   title: "Skill Hub",
//   description: "A Platform for Teaching and Buy Courses",
// };
import { createContext } from "react";
import AddCourse from './components/AddCourse';
import CreateBundle from './components/CreateBundle';
import AddCommunity from './components/AddCommunity';
import AddSession from './components/AddSession';
import EditPagesettingPrice from './components/EditSettingsPagePrice';
import ChangePassword from './components/changepassword';
import BillingInvoicesModal from './components/billingpastinvoices';
import AddInstructorModal from './components/addInstructor';
import AddTeamMemberModal from './components/addteammember';

// Create context
export const MyContext = createContext();

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
  const [isSidebarActive, setisSidebarActive] = useState(false);
  const [isSidebarSmallActive, setisSidebarSmallActive] = useState(false);
  const [AddCourseModal, setAddCourseModal] = useState(false);
  const [AddBundleModal, setAddBundleModal] = useState(false);
  const [AddCommunityModal, setAddCommunityModal] = useState(false);
  const [AddSessionModal, setAddSessionModal] = useState(false);
  const [AddEditProduct, setEditProduct] = useState(false);
  const [changePassword, setchangePassword] = useState(false);
  const [billingInvoices, setbillingInvoices] = useState(false);
  const [AddInstructor, setAddInstructor] = useState(false);
  const [AddTeamMember, setAddTeamMember] = useState(false);
 
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSmallMobileView, setIsSmallMobileView] = useState(false);

  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = window.innerWidth;

        // Sidebar behavior
        setIsSidebarOpen(width >= 1220);

        // Mobile view (768px to 1220px)
        setIsMobileView(width <= 1220 && width >= 768);

        // Small mobile view (<768px)
        setIsSmallMobileView(width < 768);
      };

      // Initial check
      handleResize();

      // Add resize listener
      window.addEventListener("resize", handleResize);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const values = {
    isSchoolModal,
    changePassword,
    setAddTeamMember,
    AddTeamMember,
    setchangePassword,
    setIsSchoolModal,
    AddInstructor,
    setAddInstructor,
    activeFilter,
    billingInvoices,
    setbillingInvoices,
    setAddCourseModal,
    AddCourseModal,
    AddBundleModal,
    setAddBundleModal,
    setActiveFilter,
    AddCommunityModal,
    setAddCommunityModal,
    setAddSessionModal,
    AddSessionModal,
    AddEditProduct,
    setEditProduct

  }
  return (
    <MyContext.Provider value={values}>
      <html><body>
        <div className="container-fluid px-0">
          {/* Use d-flex to ensure columns remain aligned */}
          <div className="d-flex flex-row w-100 ">
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
                isSidebarActive={isSidebarActive} setisSidebarActive={setisSidebarActive}
              />
            </div>

            {/* Main content */}
            <div className="flex-grow-1 w-100">
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
                isSidebarSmallActive={isSidebarSmallActive} setisSidebarSmallActive={setisSidebarSmallActive}
              />
              <div className="content" style={{ height: `${isSmallMobileView ? 'calc(100vh - 120px)' : 'calc(100vh - 62px)'}`, background: 'none' }}>
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
                {isMobileView && <ResponsiveSidebar
                  setIsSchoolModal={setIsSchoolModal}
                  isSchoolModal={isSchoolModal}
                  schoolName={schoolName}
                  selectedEmoji={selectedEmoji}
                  collectionModal={collectionModal}
                  SetCollectionModal={SetCollectionModal}
                  PlayListModal={PlayListModal}
                  setPlayListModal={setPlayListModal} isSidebarActive={isSidebarActive} setisSidebarActive={setisSidebarActive} />}
                {isSmallMobileView && <ResponsiveSidebar
                  setIsSchoolModal={setIsSchoolModal}
                  isSchoolModal={isSchoolModal}
                  schoolName={schoolName}
                  selectedEmoji={selectedEmoji}
                  collectionModal={collectionModal}
                  SetCollectionModal={SetCollectionModal}
                  PlayListModal={PlayListModal}
                  setPlayListModal={setPlayListModal} isSidebarSmallActive={isSidebarSmallActive} setisSidebarSmallActive={setisSidebarSmallActive} />}
                <AddCourse />
                <CreateBundle />
                <AddCommunity />
                <AddSession />
                <EditPagesettingPrice />
                <ChangePassword />
                <BillingInvoicesModal />
                <AddInstructorModal />
                <AddTeamMemberModal />
                <div className='PagesContent h-full' style={{ padding: '20px', background: '#F2F2F2', overflowY: 'auto' }}>
                  {children}
                </div>
                {/* Home Page should be here */}
              </div>
              {isSmallMobileView && <BottomNavigation />}
            </div>
          </div>
        </div>
      </body></html>
    </MyContext.Provider>
  );
}
