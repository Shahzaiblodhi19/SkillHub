"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import Button from '@mui/material/Button';
import { IoCartOutline } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import { HiDotsVertical } from "react-icons/hi";
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";

const Header = ({ isModalOpen, setIsModalOpen, isModalOpen2, supportModal, setSearchValue, searchValue, setsupportModal,
  setIsModalOpen2, setIsOpenApplytoTeach, isSidebarSmallActive, setisSidebarSmallActive, isOpenApplytoTeach, setIsPanelActive, isPanelActive }) => {

  const [Login, setLogin] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleModal2 = () => setIsModalOpen2(!isModalOpen2);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState('all'); // Default: 'courses'
  const open = Boolean(anchorEl);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // State to hold the selected values of the filters
  const [language, setLanguage] = useState("");
  const [filterType, setFilterType] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Reset the filters to their default values
  const handleReset = () => {
    setLanguage("");
    setFilterType("");
    setSortBy("");
  };

  // Handle changes in each select filter
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Trigger your filter logic here
    console.log(`Language selected: ${e.target.value}`);
  };

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
    // Trigger your filter logic here
    console.log(`Filter type selected: ${e.target.value}`);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    // Trigger your filter logic here
    console.log(`Sort by selected: ${e.target.value}`);
  };

  // Menu items with labels, keys, and their SVG icons
  const menuItems = [
    {
      label: 'All',
      key: 'all',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="18" width="18">
          <path fill="#4E4E4E" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>),
    },
    {
      label: 'Courses',
      key: 'courses',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="18" width="18">
          <path fill="#4E4E4E" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>),
    },
    {
      label: 'Sessions',
      key: 'sessions',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" height="18" width="18">
          <path fill="#4E4E4E" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      ),
    },
    {
      label: 'Communities',
      key: 'communities',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" fill="none" viewBox="0 0 20 20">
          <path fill="#4E4E4E" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clipRule="evenodd" fillRule="evenodd"></path>
          <path fill="#4E4E4E" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      ),
    },
    {
      label: 'Instructors',
      key: 'instructors',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="18" width="18">
          <path fill="#4E4E4E" d="M9.46497 2.65469L3.88834 5.94284C3.88112 5.9471 3.87383 5.95125 3.86648 5.95529C3.53431 6.13787 3.33341 6.48044 3.33341 6.8475V12.9174C3.33391 13.1 3.38341 13.2792 3.47675 13.4362C3.57021 13.5935 3.7042 13.7227 3.86471 13.8104C3.88028 13.8189 3.89558 13.8279 3.91059 13.8374L9.51062 17.3799C9.66161 17.4588 9.82953 17.5 10.0001 17.5C10.1706 17.5 10.3385 17.4588 10.4895 17.3799L16.0065 13.89C16.0242 13.8713 16.0454 13.8485 16.0692 13.8223C16.1476 13.7361 16.2503 13.6169 16.351 13.4827C16.4536 13.3459 16.542 13.2096 16.6016 13.0884C16.6598 12.9702 16.666 12.9159 16.6667 12.916C16.6667 12.916 16.6667 12.9168 16.6667 12.9183V6.84316C16.669 6.47367 16.4717 6.13196 16.1507 5.94942L16.1378 5.94193L10.5403 2.62526C10.421 2.55461 10.2347 2.51688 9.98782 2.53681C9.77125 2.55429 9.57557 2.61124 9.46497 2.65469ZM16.5351 14.5417L17.1194 15.1358C17.0772 15.1773 17.0307 15.2142 16.9806 15.2459L11.3556 18.8042C11.341 18.8134 11.3262 18.8222 11.3111 18.8305C10.9094 19.0511 10.4584 19.1667 10.0001 19.1667C9.54173 19.1667 9.0908 19.0511 8.68902 18.8305C8.67394 18.8222 8.65912 18.8134 8.64458 18.8042L3.04 15.2588C2.62874 15.0283 2.2852 14.6935 2.0441 14.2879C1.79804 13.874 1.66772 13.4015 1.66675 12.92L1.66675 12.9183V6.8475C1.66675 5.8708 2.19919 4.97552 3.05167 4.50135L8.66682 1.19049C8.6944 1.17423 8.72289 1.15957 8.75216 1.14659C9.01002 1.03219 9.40947 0.911399 9.85374 0.875543C10.2945 0.839973 10.8669 0.881526 11.3899 1.1914L16.8757 4.44191C16.981 4.48034 17.0764 4.53941 17.157 4.61423C17.8934 5.11464 18.3381 5.95164 18.3334 6.85072V12.9183C18.3334 13.2699 18.2128 13.5891 18.097 13.8244C17.9757 14.0708 17.8228 14.2982 17.6842 14.4829C17.5436 14.6702 17.4051 14.8305 17.3025 14.9434C17.2508 15.0003 17.2071 15.0463 17.1754 15.079C17.1701 15.0846 17.1651 15.0897 17.1604 15.0945C17.1512 15.1039 17.1435 15.1118 17.1372 15.1181L17.1256 15.1297L17.1218 15.1334L17.1204 15.1348L17.1194 15.1358C17.1193 15.1359 17.1194 15.1358 16.5351 14.5417Z" clipRule="evenodd" fillRule="evenodd"></path>
          <path fill="#4E4E4E" d="M7.64306 5.97631C8.26818 5.35119 9.11603 5 10.0001 5C10.8841 5 11.732 5.35119 12.3571 5.97631C12.9822 6.60143 13.3334 7.44928 13.3334 8.33333C13.3334 9.21739 12.9822 10.0652 12.3571 10.6904C11.732 11.3155 10.8841 11.6667 10.0001 11.6667C9.11603 11.6667 8.26818 11.3155 7.64306 10.6904C7.01794 10.0652 6.66675 9.21739 6.66675 8.33333C6.66675 7.44928 7.01794 6.60143 7.64306 5.97631ZM10.0001 6.66667C9.55805 6.66667 9.13413 6.84226 8.82157 7.15482C8.50901 7.46738 8.33341 7.89131 8.33341 8.33333C8.33341 8.77536 8.50901 9.19929 8.82157 9.51185C9.13413 9.82441 9.55805 10 10.0001 10C10.4421 10 10.866 9.82441 11.1786 9.51185C11.4912 9.19929 11.6667 8.77536 11.6667 8.33333C11.6667 7.89131 11.4912 7.46738 11.1786 7.15482C10.866 6.84226 10.4421 6.66667 10.0001 6.66667Z" clipRule="evenodd" fillRule="evenodd"></path>
          <path fill="#4E4E4E" d="M6.9273 14.5988L5.60407 15.9908C5.28698 16.3244 4.75951 16.3377 4.42594 16.0207C4.09237 15.7036 4.079 15.1761 4.39609 14.8425L5.77651 13.3904C5.81197 13.353 5.85082 13.3191 5.89255 13.289C6.60295 12.7758 7.45703 12.4998 8.33335 12.5M6.9273 14.5988C7.3415 14.3174 7.83122 14.1665 8.33308 14.1667L11.6667 14.1667C12.1682 14.1665 12.6578 14.3172 13.0718 14.5982L14.3962 15.9909C14.7133 16.3244 15.2408 16.3377 15.5743 16.0206C15.9078 15.7034 15.9211 15.1759 15.604 14.8424L14.2224 13.3895C14.1868 13.3521 14.1479 13.3182 14.1061 13.288C13.396 12.7755 12.5424 12.4998 11.6667 12.5C11.6666 12.5 11.6668 12.5 11.6667 12.5H8.33335" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      ),
    },
  ];
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (item) => {
    setSelectedItem(item.key); // Update selected item
    setAnchorEl(null);
    setShowSuggestions(true); // Show suggestions
    setShowTrending(false); // Hide trending
  };


  const checkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
      <path d="M14.312 0.45286C14.6755 0.769131 14.6755 1.33378 14.312 1.65005L6.02701 8.85793C5.27435 9.51275 4.15422 9.51275 3.40156 8.85793L0.688264 6.49737C0.324615 6.181 0.324615 5.61617 0.688264 5.29979V5.29979C0.986676 5.04018 1.4307 5.03991 1.72943 5.29916L3.4024 6.75109C4.15489 7.40416 5.27332 7.40374 6.02532 6.75011L13.2707 0.452616C13.5693 0.193075 14.0135 0.193179 14.312 0.45286V0.45286Z" fill="#526279" />
    </svg>
  );
  const [anchorEl3, setAnchorEl3] = useState(null);
  const open3 = Boolean(anchorEl3);

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const handleLink = (LinkName) => {
    if (LinkName === 'Support') {
      setsupportModal(!supportModal);
    }
  }
  const profileItems = [
    {
      label: "Preferences", icon:
        <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7ZM19.0277 15.6255C18.6859 15.5646 18.1941 15.6534 17.682 16.1829C17.4936 16.3777 17.2342 16.4877 16.9632 16.4877C16.6922 16.4877 16.4328 16.3777 16.2444 16.1829C15.7322 15.6534 15.2405 15.5646 14.8987 15.6255C14.5381 15.6897 14.2179 15.9384 14.0623 16.3275C13.8048 16.9713 13.9014 18.662 16.9632 20.4617C20.0249 18.662 20.1216 16.9713 19.864 16.3275C19.7084 15.9384 19.3882 15.6897 19.0277 15.6255ZM21.721 15.5847C22.5748 17.7191 21.2654 20.429 17.437 22.4892C17.1412 22.6484 16.7852 22.6484 16.4893 22.4892C12.6609 20.4291 11.3516 17.7191 12.2053 15.5847C12.6117 14.5689 13.4917 13.8446 14.5481 13.6565C15.3567 13.5125 16.2032 13.6915 16.9632 14.1924C17.7232 13.6915 18.5697 13.5125 19.3783 13.6565C20.4347 13.8446 21.3147 14.5689 21.721 15.5847ZM9.92597 14.2049C10.1345 14.7163 9.889 15.2999 9.3776 15.5084C7.06131 16.453 5.5 18.5813 5.5 20.9999C5.5 21.5522 5.05228 21.9999 4.5 21.9999C3.94772 21.9999 3.5 21.5522 3.5 20.9999C3.5 17.6777 5.641 14.8723 8.6224 13.6565C9.1338 13.448 9.71743 13.6935 9.92597 14.2049Z" clipRule="evenodd" fillRule="evenodd" />
        </svg>
    },
    {
      label: "Account Details", icon: <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M14 12.5C14 13.6046 13.1046 14.5 12 14.5C10.8954 14.5 10 13.6046 10 12.5C10 11.3954 10.8954 10.5 12 10.5C13.1046 10.5 14 11.3954 14 12.5Z" />
        <path fill="currentColor" d="M12 17.25C11.7265 17.25 11.3186 17.3871 10.6823 17.9811C10.2786 18.3579 9.64578 18.3361 9.26894 17.9323C8.89211 17.5286 8.91393 16.8958 9.31768 16.5189C10.1099 15.7795 10.9878 15.25 12 15.25C13.0122 15.25 13.8901 15.7795 14.6823 16.5189C15.0861 16.8958 15.1079 17.5286 14.7311 17.9323C14.3542 18.3361 13.7214 18.3579 13.3177 17.9811C12.6814 17.3871 12.2735 17.25 12 17.25Z" clipRule="evenodd" fillRule="evenodd" />
        <path fill="currentColor" d="M4 5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5ZM7 4C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V5C18 4.44772 17.5523 4 17 4H7Z" clipRule="evenodd" fillRule="evenodd" />
        <path fill="currentColor" d="M9 7C9 6.44772 9.44772 6 10 6H14C14.5523 6 15 6.44772 15 7C15 7.55228 14.5523 8 14 8H10C9.44772 8 9 7.55228 9 7Z" clipRule="evenodd" fillRule="evenodd" />
      </svg>
    },
    {
      label: "Billing", icon: <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.5C7.30781 20.5 3.5 16.6922 3.5 12C3.5 7.30781 7.30781 3.5 12 3.5C16.6922 3.5 20.5 7.30781 20.5 12C20.5 16.6922 16.6922 20.5 12 20.5Z" />
        <path fill="currentColor" d="M12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7Z" />
        <path fill="currentColor" d="M8 15.5C7.44772 15.5 7 15.9477 7 16.5C7 17.0523 7.44772 17.5 8 17.5H16C16.5523 17.5 17 17.0523 17 16.5C17 15.9477 16.5523 15.5 16 15.5H8Z" />
      </svg>
    },
    {
      label: "Sign In & Security", icon:
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M12 2C9.23858 2 7 4.23858 7 7V9C5.89543 9 5 9.89543 5 11V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V11C19 9.89543 18.1046 9 17 9V7C17 4.23858 14.7614 2 12 2ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V9H9V7Z" />
          <circle cx="12" cy="15" r="2" fill="white" />
        </svg>
    },
    {
      label: "Support", icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke-width="1.5" stroke="currentColor" fill="none">
        <path d="M9.984 9A2.248 2.248 0 0 1 12 7.75a2.25 2.25 0 0 1 1.579 3.853c-.5.493-1.108 1.025-1.402 1.65M12 16.25v.01m0 2.99a7.25 7.25 0 1 1 0-14.5 7.25 7.25 0 0 1 0 14.5Z" stroke-linejoin="round" stroke-linecap="round" />
      </svg>
      ,
    },
    {
      label: "Team", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
        <path fill="currentColor" d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208zm0-384c-97 0-176 79-176 176s79 176 176 176 176-78.95 176-176S353.05 80 256 80z" />
        <path fill="currentColor" d="M323.67 292c-17.4 0-34.21-7.72-47.34-21.73a83.76 83.76 0 01-22-51.32c-1.47-20.7 4.88-39.75 17.88-53.62S303.38 144 323.67 144c20.14 0 38.37 7.62 51.33 21.46s19.47 33 18 53.51a84 84 0 01-22 51.3C357.86 284.28 341.06 292 323.67 292zm55.81-74zm-215.66 77.36c-29.76 0-55.93-27.51-58.33-61.33-1.23-17.32 4.15-33.33 15.17-45.08s26.22-18 43.15-18 32.12 6.44 43.07 18.14 16.5 27.82 15.25 45c-2.44 33.77-28.6 61.27-58.31 61.27zm256.55 59.92c-1.59-4.7-5.46-9.71-13.22-14.46-23.46-14.33-52.32-21.91-83.48-21.91-30.57 0-60.23 7.9-83.53 22.25-26.25 16.17-43.89 39.75-51 68.18-1.68 6.69-4.13 19.14-1.51 26.11a192.18 192.18 0 00232.75-80.17zm-256.74 46.09c7.07-28.21 22.12-51.73 45.47-70.75a8 8 0 00-2.59-13.77c-12-3.83-25.7-5.88-42.69-5.88-23.82 0-49.11 6.45-68.14 18.17-5.4 3.33-10.7 4.61-14.78 5.75a192.84 192.84 0 0077.78 86.64l1.79-.14a102.82 102.82 0 013.16-20.02z" />
      </svg>
    },
    {
      label: "Logout", icon: <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
      </svg>
    },
  ];
  const [isFilterVisible, setFilterVisible] = useState(false);

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  const [showTrending, setShowTrending] = useState(true); // Toggle between trending and results
  const [showSuggestions, setShowSuggestions] = useState(false); // Show suggestions dropdown

  // Sample data
  const trendingSearches = [
    "Alberto",
    "Ruka",
    "Benchmark",
    "Artificial Intelligence",
    "Latest version of supercomputer",
  ];

  const searchResults = {
    courses: [
      {
        title: "Advanced Machine Learning Techniques",
        author: "Jonah Berger",
        duration: "23m",
        enrolled: "156",
        image: "https://i.ibb.co/jJ4GHXP/img1.jpg",
      },
      {
        title: "Data Science Fundamentals",
        author: "Sarah Johnson",
        duration: "2.5hr",
        enrolled: "342",
        image: "https://i.ibb.co/z27wtc6/img2.jpg",
      },
    ],
    sessions: [
      {
        title: "Leadership Workshop",
        author: "Michael Chen",
        enrolled: "89",
        image: "https://i.ibb.co/LJwrLdW/coaching-image.webp",
      },
      {
        title: "Team Building Strategies",
        author: "Emily Wilson",
        enrolled: "124",
        image: "https://i.ibb.co/k67BZds/community-image1.png",
      },
    ],
    communities: [
      {
        title: "Tech Innovators Network",
        author: "David Lee",
        enrolled: "567",
        image: "https://i.ibb.co/Csdq4rd/newsletter-image.png",
      },
      {
        title: "Digital Marketing Pros",
        author: "Lisa Anderson",
        enrolled: "892",
        image: "https://i.ibb.co/jJ4GHXP/img1.jpg",
      },
    ],
  };

  const topics = ["Digital Marketing", "Data Science", "Leadership"];

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);

    if (value.trim() !== "") {
      setShowTrending(false); // Hide trending
    } else {
      setShowTrending(true); // Show trending again when input is cleared
    }

    setShowSuggestions(true); // Keep suggestions visible
  };

  const handleFocus = () => {
    setShowSuggestions(true);
    setShowTrending(true); // Show trending when input is focused
  };

  const handleClearInput = () => {
    setSearchValue("");
    setShowTrending(true); // Show trending again when input is cleared
    setShowSuggestions(false); // Hide suggestions
  };


  const filterResults = (category) => {
    return category.filter(
      (item) =>
        item.title.toLowerCase().includes(searchValue) ||
        (item.author && item.author.toLowerCase().includes(searchValue))
    );
  };

  const renderTrending = () => (
    <div className="trending-section">
      <h3 className="section-title">Trending now</h3>
      <div className="trending-items">
        {trendingSearches.map((search, index) => (
          <div
            key={index}
            className="trending-item"
            onClick={() => {
              setSearchValue(search.toLowerCase());
              setShowTrending(false);
            }}
          ><svg xmlns="http://www.w3.org/2000/svg" width="940" height="556" viewBox="0 0 940 556" fill="none">
              <path d="M13.8425 542.789C4.24505 533.182 -0.361751 521.78 0.022148 508.586C0.406047 495.391 5.01285 484.374 13.8425 475.535L266.976 218.528C285.371 200.113 308.165 190.906 335.358 190.906C362.551 190.906 385.345 200.113 403.74 218.528L527.308 343.429L776.843 96.0295H700.063C686.466 96.0295 675.077 91.4178 665.896 82.1943C656.714 72.9709 652.107 61.5858 652.075 48.0389C652.043 34.4919 656.65 23.0907 665.896 13.8353C675.141 4.57984 686.53 -0.0318601 700.063 0.000165651H892.012C905.609 0.000165651 917.014 4.61186 926.227 13.8353C935.441 23.0587 940.032 34.4599 940 48.0389V240.194C940 253.805 935.393 265.222 926.179 274.445C916.966 283.669 905.577 288.264 892.012 288.232C878.448 288.2 867.059 283.605 857.845 274.445C848.632 265.286 844.025 253.869 844.025 240.194V163.332L595.69 411.884C577.295 430.299 554.501 439.506 527.308 439.506C500.115 439.506 477.321 430.299 458.926 411.884L335.358 288.184L81.0249 542.789C72.2272 551.596 61.0302 556 47.4337 556C33.8373 556 22.6402 551.596 13.8425 542.789Z" fill="black" />
            </svg>
            <span>{search}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // Render filtered results
  const renderResults = () => {
    // Filter data for all categories
    const filteredCourses = filterResults(searchResults.courses);
    const filteredSessions = filterResults(searchResults.sessions);
    const filteredCommunities = filterResults(searchResults.communities);

    // Check if there are matches
    const showCourses =
      (selectedItem === "courses" || selectedItem === "all") &&
      filteredCourses.length > 0;
    const showSessions =
      (selectedItem === "sessions" || selectedItem === "all") &&
      filteredSessions.length > 0;
    const showCommunities =
      (selectedItem === "communities" || selectedItem === "all") &&
      filteredCommunities.length > 0;

    return (
      <div className="results-section pr-4 pb-0" style={{ overflowY: 'auto', height: selectedItem === 'all' || showCourses && showSessions && showCommunities ? '450px' : '100%' }}>
        {/* Render Courses */}
        {showCourses && (
          <div className="results-category">
            <div class="category-header">
              <div class="category-icon-wrapper">
                <svg class="category-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                  <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>

              </div>
              <h3 class="category-title">Courses</h3>
            </div>
            <div className="results-list">
              {filteredCourses.map((course, index) => (
                <div key={index} className="result-item">
                  <img className="result-image" src={course.image} alt={course.title} />
                  <div className="result-content">
                    <h4 className="result-title">{course.title}</h4>
                    <p>{course.author}</p>
                  </div>
                  <Link href={'/coursedetails'} class="watch-button">VIEW</Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Render Sessions */}
        {showSessions && (
          <div className="results-category">
            <div class="category-header">
              <div class="category-icon-wrapper">
                <svg class="category-icon" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="category-title">Sessions</h3>
            </div>
            <div className="results-list">
              {filteredSessions.map((session, index) => (
                <div key={index} className="result-item">
                  <img className="result-image" src={session.image} alt={session.title} />
                  <div className="result-content">
                    <h4 className="result-title">{session.title}</h4>
                    <p>{session.author}</p>
                  </div>
                  <Link href={'/coursedetails'} class="watch-button">VIEW</Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Render Communities */}
        {showCommunities && (
          <div className="results-category">
            <div class="category-header">
              <div class="category-icon-wrapper">
                <svg class="category-icon" viewBox="0 0 20 20">
                  <path fill="currentColor" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                  <path fill="currentColor" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="category-title">Communities</h3>
            </div>
            <div className="results-list">
              {filteredCommunities.map((community, index) => (
                <div key={index} className="result-item">
                  <img className="result-image" src={community.image} alt={community.title} />
                  <div className="result-content">
                    <h4 className="result-title">{community.title}</h4>
                    <p>{community.author}</p>
                  </div>
                  <Link href={'/coursedetails'} class="watch-button">VIEW</Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fallback for no matches */}
        {!showCourses && !showSessions && !showCommunities && (
          <p className="text-center w-100 mb-2">No results found</p>
        )}
      </div>
    );
  };



  const renderTopics = () => (
    <div className="topics-section">
      <div class="topics-header">
        <div class="topics-icon-wrapper">
          <svg class="topics-icon" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4h6v6h-6z" />
            <path d="M14 4h6v6h-6z" />
            <path d="M4 14h6v6h-6z" />
            <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          </svg>
        </div>
        <h3 class="section-title">Topics</h3>
      </div>
      <div className="topics-grid">
        {topics.map((topic, index) => (

          <Link href={`/search?query=${encodeURIComponent(topic.toLowerCase())}`} class="topic-item" onClick={() => {
            setSearchValue(topic.toLowerCase());
          }}>
            <span
            >{topic}</span>
            <div class="topic-icon-wrapper">
              <svg class="topic-plus-icon" viewBox="0 0 448 512">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" fill="white"></path>
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  const containerRef = useRef(null);
  const handleClickOutside = useCallback((event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  });

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [isSmallMobileView, setIsSmallMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallMobileView(window.innerWidth <= 856);
    };

    handleResize(); // Set initial value after mounting
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="navbar  m-0 px-3 py-2" style={{ background: '#fff' }}>
      <div className="container-fluid">

        {/* Right-side buttons */}
        <div className="d-flex align-items-center gap-3 w-100 justify-content-end">
          {/* Search bar */}
          <button className="sidebar-toggle mr-auto" onClick={() => setisSidebarSmallActive(!isSidebarSmallActive)} aria-label="Toggle Sidebar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z" fill="currentColor" />
            </svg>
          </button>
          {!isSmallMobileView ?
            <div className="input-group position-relative search-bar" style={{ background: '#F3F4F6', border: '1.5px solid #293330', borderRadius: '8px', maxWidth: '485px', width: '100%' }}>
              <div className="search-wrapper w-100">
                <div className="btn pr-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mt-1.5">
                    <defs>
                      <radialGradient id="circleGradient" cx="30%" cy="30%" r="70%" fx="20%" fy="20%">
                        <stop offset="0%" style={{ stopColor: '#FFE4D6' }} />
                        <stop offset="45%" style={{ stopColor: '#9EC5E3' }} />
                        <stop offset="100%" style={{ stopColor: '#386087' }} />
                      </radialGradient>
                      <linearGradient id="handleGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#386087' }} />
                        <stop offset="100%" style={{ stopColor: '#9EC5E3' }} />
                      </linearGradient>
                    </defs>

                    <path
                      opacity="0.9"
                      fillRule="evenodd"
                      fill="url(#handleGradient)"
                      d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                    ></path>

                    <path
                      fillRule="evenodd"
                      fill="url(#circleGradient)"
                      d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                    ></path>
                  </svg>

                </div>
                <input
                  style={{
                    background: '#F3F4F6',
                    border: '0',
                    paddingLeft: '0',
                    paddingRight: '3px',
                    fontSize: '13px',
                  }}
                  type="text"
                  className="form-control w-100 school-inputs fonts"
                  placeholder="Search for books, podcasts, skills.."
                  aria-label="Search"
                  value={searchValue}
                  onClick={handleFocus}
                  onFocus={handleFocus} // Show suggestions and trending
                  onChange={handleInputChange}
                />
                {searchValue && (
                  <div className="delete-icon d-flex align-items-center mr-3" style={{ marginLeft: '5px', display: 'block' }} onClick={handleClearInput}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 12 7.7 9.11a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41"></path>
                    </svg>              </div>
                )}

                <button id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick} className="d-flex align-items-center gap-2 px-2" style={{ background: '#fff', fontSize: '12px', borderRadius: '8px', zIndex: '99', marginRight: '-5px' }}>
                  {/* Default menu item */}
                  {menuItems.find((item) => item.key === selectedItem)?.icon} {/* Dynamic SVG */}
                  <span>{menuItems.find((item) => item.key === selectedItem)?.label}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15z" fill="#636363"></path></svg>
                </button>

                {/* Dropdown Menu */}
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                  PaperProps={{
                    style: {
                      borderRadius: '5px',
                      border: '1px solid #E6E6E6',
                      boxShadow: 'none',
                      width: '200px',
                      left: '220px !important'
                    },
                  }}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.key}
                      onClick={() => handleSelect(item)}
                      selected={item.key === selectedItem}
                      style={{ border: '0.2px solid #F5F5F5' }}
                      className="d-flex align-items-center justify-content-between py- m-0"
                    >
                      <div className="d-flex align-items-center gap-2 py-1 " style={{ fontSize: '13px' }}>
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                      {selectedItem === item.key && checkIcon} {/* Show check icon for selected item */}
                    </MenuItem>
                  ))}
                </Menu>
                {(
                  <button className="search-btn">
                    <Link href={`/search?query=${encodeURIComponent(searchValue)}`} >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 34 28" fill="none">
                        <path
                          d="M2.00002 14H31.1667"
                          stroke="#BEEEFF"
                          strokeWidth="3.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20.3333 25.6666L32 13.9999L20.3333 2.33325"
                          stroke="#BEEEFF"
                          strokeWidth="3.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </button>
                )}
              </div>

              {showSuggestions && (
                <div ref={containerRef} className={`search-suggestions ${showSuggestions ? "active" : ""}`}>
                  {showTrending && renderTrending()} {/* Show Trending when focused */}
                  {showTrending && renderTopics()}
                  {!showTrending && renderResults()} {/* Show Results when typing */}
                  {!showTrending && renderTopics()}
                </div>
              )}

            </div>
            : ''
          }
          {!isSmallMobileView ?
            <button type="button" onClick={toggleFilter} className="btn p-0" >
              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="29.25" stroke="#E5E5E5" strokeWidth="1.5" />
                <path d="M15 29.4992H35.703M43.0106 29.4992H46M43.0106 29.4992C43.0106 28.5451 42.6257 27.6302 41.9407 26.9556C41.2556 26.281 40.3264 25.902 39.3576 25.902C38.3888 25.902 37.4596 26.281 36.7746 26.9556C36.0895 27.6302 35.7046 28.5451 35.7046 29.4992C35.7046 30.4532 36.0895 31.3681 36.7746 32.0427C37.4596 32.7173 38.3888 33.0963 39.3576 33.0963C40.3264 33.0963 41.2556 32.7173 41.9407 32.0427C42.6257 31.3681 43.0106 30.4532 43.0106 29.4992ZM15 40.4012H24.6318M24.6318 40.4012C24.6318 41.3554 25.0176 42.2714 25.7028 42.9462C26.388 43.6209 27.3174 44 28.2864 44C29.2553 44 30.1844 43.6194 30.8695 42.9448C31.5545 42.2702 31.9394 41.3552 31.9394 40.4012M24.6318 40.4012C24.6318 39.4469 25.0176 38.5326 25.7028 37.8579C26.388 37.1831 27.3174 36.804 28.2864 36.804C29.2553 36.804 30.1844 37.183 30.8695 37.8576C31.5545 38.5322 31.9394 39.4472 31.9394 40.4012M31.9394 40.4012H46M15 18.5972H20.203M27.5106 18.5972H46M27.5106 18.5972C27.5106 17.6431 27.1257 16.7282 26.4407 16.0536C25.7556 15.379 24.8265 15 23.8576 15C23.3779 15 22.9029 15.093 22.4597 15.2738C22.0165 15.4546 21.6138 15.7196 21.2746 16.0536C20.9354 16.3876 20.6663 16.7842 20.4827 17.2206C20.2991 17.657 20.2047 18.1248 20.2047 18.5972C20.2047 19.0695 20.2991 19.5373 20.4827 19.9737C20.6663 20.4102 20.9354 20.8067 21.2746 21.1407C21.6138 21.4748 22.0165 21.7397 22.4597 21.9205C22.9029 22.1013 23.3779 22.1943 23.8576 22.1943C24.8265 22.1943 25.7556 21.8153 26.4407 21.1407C27.1257 20.4661 27.5106 19.5512 27.5106 18.5972Z" stroke="#494949" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" />
              </svg>
            </button>
            :
            ''
          }

          {!isSmallMobileView ? isFilterVisible && (
            <div className={`filter-sections ${isFilterVisible ? 'active' : ''}`}>
              <div className="filter-containers">
                <span className="filter-titles">Filter & Sort</span>
                <div className="filters-rows">
                  {/* Language Filter */}
                  <div className="filter-groups">
                    <select
                      className="filter-selects"
                      value={language}
                      onChange={handleLanguageChange}
                    >
                      <option value="">All Languages</option>
                      <option value="en">English</option>
                      <option value="zh">Chinese</option>
                      <option value="hi">Hindi</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="ru">Russian</option>
                      <option value="de">German</option>
                      <option value="ja">Japanese</option>
                      <option value="ko">Korean</option>
                      <option value="he">Hebrew</option>
                    </select>
                  </div>

                  {/* Filter Type */}
                  <div className="filter-groups">
                    <select
                      className="filter-selects"
                      value={filterType}
                      onChange={handleFilterTypeChange}
                    >
                      <option value="">Title & Content</option>
                      <option value="title">Title</option>
                      <option value="content">Content</option>
                    </select>
                  </div>

                  {/* Sort By */}
                  <div className="filter-groups">
                    <select
                      className="filter-selects"
                      value={sortBy}
                      onChange={handleSortByChange}
                    >
                      <option value="">Best Match</option>
                      <option value="popularity">Popularity</option>
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                    </select>
                  </div>

                  {/* Reset Button */}
                  <button className="reset-buttons" onClick={handleReset}>
                    <svg
                      width="14"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M1 1L13 13M11.9588 2.62429H3.59188C3.47354 2.62419 3.35768 2.65941 3.25817 2.72574C3.15867 2.79208 3.07973 2.88671 3.03082 2.99831C2.98191 3.10991 2.9651 3.23374 2.98239 3.35498C2.99969 3.47622 3.05037 3.58973 3.12836 3.6819L6.39213 7.54388C6.49029 7.66021 6.54432 7.8095 6.54417 7.96399V11.0712C6.54417 11.1207 6.5553 11.1695 6.57667 11.2137C6.59804 11.258 6.62906 11.2965 6.66729 11.3262L8.51401 12.7605C8.55974 12.7961 8.61411 12.8177 8.67104 12.823C8.72797 12.8283 8.7852 12.8171 8.83633 12.7906C8.88745 12.7642 8.93045 12.7235 8.9605 12.6731C8.99055 12.6228 9.00647 12.5647 9.00647 12.5055V7.96399C9.00632 7.8095 9.06035 7.66021 9.15852 7.54388L12.4223 3.68127C12.7707 3.26944 12.4875 2.62429 11.9588 2.62429Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    Reset All
                  </button>
                </div>
              </div>
            </div>
          ) : ''}
          {Login === true ?
            <>


              <Link href='/checkout' className="relative w-9 h-9">
                {/* Cart Icon */}
                <button
                  className="flex items-center justify-center w-9 h-9 bg-white rounded-full border border-gray-200"
                  aria-label="Cart"
                >
                  {/* Cart Icon SVG */}
                  <IoCartOutline fontSize={19} />
                </button>

                {/* Notification Badge */}
                <span className="absolute top-0 right-0 w-4 h-4 font-bold text-white rounded-full flex items-center justify-center" style={{ fontSize: '9px', background: '#5fc0ed' }}>
                  4
                </span>
              </Link>

            </>
            : <>
              <button className="btn login-btn" onClick={toggleModal}>Log In</button>
              <button className="btn signup-btn" onClick={toggleModal2}>Join</button>
            </>
          }
          <button onClick={() => setLogin(!Login)} className="btn p-0" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="29.25" stroke="#E5E5E5" strokeWidth="1.5" />
              <mask id="mask0_50_170" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="14" y="15" width="31" height="31">
                <path d="M45 15H14V46H45V15Z" fill="white" />
              </mask>
              <g mask="url(#mask0_50_170)">
                <path d="M29.4999 18.8746C29.6704 18.8746 29.8396 18.8746 30.0075 18.8746C28.3481 20.4165 27.2815 22.4911 26.9931 24.7378C26.7047 26.9845 27.2127 29.2612 28.4287 31.1722C29.6448 33.0832 31.4921 34.5077 33.6495 35.1981C35.8068 35.8883 38.1379 35.8009 40.2375 34.9507C39.4298 36.8939 38.1098 38.5816 36.4183 39.8335C34.7268 41.0854 32.727 41.8547 30.6326 42.0593C28.5381 42.2637 26.4273 41.8959 24.5255 40.9949C22.6237 40.0939 21.0021 38.6935 19.8338 36.9432C18.6655 35.1928 17.9942 33.1583 17.8915 31.0563C17.7889 28.9543 18.2587 26.8639 19.251 25.0081C20.2432 23.1523 21.7206 21.6006 23.5256 20.5185C25.3306 19.4365 27.3954 18.8648 29.4999 18.8643V18.8746Z" stroke="#4C4C4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M35.9584 20.166C35.9584 20.8512 36.2306 21.5082 36.7149 21.9927C37.1995 22.4772 37.8565 22.7493 38.5416 22.7493C37.8565 22.7493 37.1995 23.0215 36.7149 23.506C36.2306 23.9905 35.9584 24.6475 35.9584 25.3327C35.9584 24.6475 35.6862 23.9905 35.2017 23.506C34.7173 23.0215 34.0601 22.7493 33.375 22.7493C34.0601 22.7493 34.7173 22.4772 35.2017 21.9927C35.6862 21.5082 35.9584 20.8512 35.9584 20.166Z" stroke="#4C4C4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38.5415 29.2078H41.1247M39.8331 27.9161V30.4995" stroke="#4C4C4C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </button>

          {Login === true ?
            <>

              <>
                {!isSmallMobileView &&
                  <>
                    <a onClick={() => setIsOpenApplytoTeach(!isOpenApplytoTeach)} className={`btn ${isSmallMobileView ? 'btn-sm py-2 px-1' : ''} btn-dark px-4`} style={isSmallMobileView ? { fontSize: '11.2px', borderRadius: '50px' } : { borderRadius: '50px' }}>+  Apply to Teach</a>
                    <button onClick={() => setIsPanelActive(!isPanelActive)} className="btn p-0" type="button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="29.25" stroke="#E5E5E5" strokeWidth="1.5" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.5217 18.855C21.7094 17.6673 23.3203 17 25 17C26.6797 17 28.2906 17.6673 29.4783 18.855C30.6661 20.0427 31.3333 21.6536 31.3333 23.3333C31.3333 25.013 30.6661 26.6239 29.4783 27.8117C28.2906 28.9994 26.6797 29.6667 25 29.6667C23.3203 29.6667 21.7094 28.9994 20.5217 27.8117C19.3339 26.6239 18.6667 25.013 18.6667 23.3333C18.6667 21.6536 19.3339 20.0427 20.5217 18.855ZM25 19C23.8507 19 22.7485 19.4565 21.9359 20.2692C21.1232 21.0819 20.6667 22.1841 20.6667 23.3333C20.6667 24.4826 21.1232 25.5848 21.9359 26.3975C22.7485 27.2101 23.8507 27.6667 25 27.6667C26.1493 27.6667 27.2515 27.2101 28.0641 26.3975C28.8768 25.5848 29.3333 24.4826 29.3333 23.3333C29.3333 22.1841 28.8768 21.0819 28.0641 20.2692C27.2515 19.4565 26.1493 19 25 19ZM33.3646 17.9251C33.5016 17.3901 34.0463 17.0674 34.5814 17.2044C35.9437 17.5532 37.1512 18.3455 38.0135 19.4564C38.8758 20.5673 39.3438 21.9336 39.3438 23.3398C39.3438 24.7461 38.8758 26.1124 38.0135 27.2233C37.1512 28.3341 35.9437 29.1265 34.5814 29.4753C34.0463 29.6122 33.5016 29.2896 33.3646 28.7545C33.2276 28.2195 33.5503 27.6747 34.0853 27.5378C35.0174 27.2991 35.8436 26.757 36.4336 25.9969C37.0236 25.2368 37.3438 24.302 37.3438 23.3398C37.3438 22.3777 37.0236 21.4428 36.4336 20.6828C35.8436 19.9227 35.0174 19.3806 34.0853 19.1419C33.5503 19.0049 33.2276 18.4602 33.3646 17.9251ZM22.3333 35C21.1841 35 20.0819 35.4565 19.2692 36.2692C18.4565 37.0819 18 38.1841 18 39.3333V42C18 42.5523 17.5523 43 17 43C16.4477 43 16 42.5523 16 42V39.3333C16 37.6536 16.6673 36.0427 17.855 34.855C19.0427 33.6673 20.6536 33 22.3333 33H27.6667C29.1859 33 30.5807 33.5359 31.6722 34.4265C32.1001 34.7757 32.164 35.4056 31.8148 35.8335C31.4657 36.2614 30.8357 36.3253 30.4078 35.9761C29.6593 35.3654 28.7074 35 27.6667 35H22.3333Z" fill="#616161" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M36.5859 32.5858C36.961 32.2107 37.4697 32 38.0001 32C38.5305 32 39.0392 32.2107 39.4143 32.5858C39.6314 32.8029 39.7934 33.0647 39.8914 33.3496C40.4303 33.6869 40.8933 34.1357 41.2482 34.6679C41.7012 35.3474 41.9607 36.1374 41.999 36.9531C41.9997 36.9687 42.0001 36.9844 42.0001 37V38.4293C42.0238 38.5668 42.076 38.698 42.1535 38.8144C42.2404 38.9446 42.3566 39.0527 42.4928 39.1298C42.888 39.3536 43.0828 39.8156 42.9671 40.2548C42.8514 40.694 42.4542 41 42.0001 41H40.4496C40.3523 41.4767 40.1171 41.9186 39.7679 42.2678C39.299 42.7366 38.6631 43 38.0001 43C37.3371 43 36.7012 42.7366 36.2323 42.2678C35.8831 41.9186 35.6479 41.4767 35.5506 41H34.0001C33.5459 41 33.1488 40.694 33.0331 40.2548C32.9174 39.8156 33.1121 39.3536 33.5073 39.1298C33.6436 39.0527 33.7598 38.9446 33.8466 38.8144C33.9242 38.698 33.9764 38.5668 34.0001 38.4293V37C34.0001 36.9844 34.0005 36.9687 34.0012 36.9531C34.0395 36.1374 34.299 35.3474 34.752 34.6679C35.1069 34.1357 35.5699 33.6869 36.1088 33.3496C36.2068 33.0647 36.3688 32.8029 36.5859 32.5858ZM35.9218 39C35.9535 38.8754 35.9773 38.7485 35.9928 38.6202C35.9977 38.5803 36.0001 38.5402 36.0001 38.5V37.0254C36.0248 36.5799 36.1684 36.1489 36.4161 35.7773C36.6678 35.3999 37.0174 35.098 37.4276 34.904C37.7771 34.7387 38.0001 34.3867 38.0001 34C38.0001 34.3867 38.223 34.7387 38.5726 34.904C38.9828 35.098 39.3324 35.3999 39.5841 35.7773C39.8318 36.1489 39.9753 36.5799 40.0001 37.0254V38.5C40.0001 38.5402 40.0025 38.5803 40.0073 38.6202C40.0229 38.7485 40.0466 38.8754 40.0784 39H35.9218Z" fill="#616161" />
                      </svg>
                    </button>
                  </>
                }
                <button className="btn p-0"
                  id="basic-button3"
                  aria-controls={open3 ? 'basic-menu3' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open3 ? 'true' : undefined}
                  onClick={handleClick3}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="29.25" fill="#E6F3F8" stroke="#E5E5E5" strokeWidth="1.5" />
                    <path d="M18.1268 38H16L22.1513 22H24.2454L30.3967 38H28.2699L23.2638 24.5312H23.1329L18.1268 38ZM18.9121 31.75H27.4847V33.4687H18.9121V31.75Z" fill="#415358" />
                    <path d="M32.4499 38V36.5937L41.4806 23.7187H32.3517V22H43.9018V23.4062L34.8712 36.2812H44V38H32.4499Z" fill="#415358" />
                  </svg>
                </button>
                {isSmallMobileView &&
                  <div style={{ position: "relative", display: "inline-block" }}>
                    {/* Icon */}
                    <button
                      onClick={toggleDropdown}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <HiDotsVertical size={24} />
                    </button>

                    {/* Dropdown */}
                    {isDropdownOpen && (
                      <div
                        className="p-3 flex items-center gap-3"
                        style={{
                          position: "absolute",
                          top: "50px",
                          width: '225px',
                          right: "0",
                          background: "white",
                          borderRadius: "4px",
                          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          zIndex: 100000,
                        }}
                      >
                        <a onClick={() =>{ setIsDropdownOpen(false); setIsOpenApplytoTeach(!isOpenApplytoTeach)}} className={`btn ${isSmallMobileView ? 'btn-sm py-2 px-1' : ''} btn-dark px-4`} style={isSmallMobileView ? { fontSize: '11.2px', borderRadius: '50px' } : { borderRadius: '50px' }}>+  Apply to Teach</a>
                        <button onClick={() => { setIsDropdownOpen(false); setIsPanelActive(!isPanelActive) }} className="btn p-0" type="button"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 60 60" fill="none">
                            <circle cx="30" cy="30" r="29.25" stroke="#E5E5E5" strokeWidth="1.5" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.5217 18.855C21.7094 17.6673 23.3203 17 25 17C26.6797 17 28.2906 17.6673 29.4783 18.855C30.6661 20.0427 31.3333 21.6536 31.3333 23.3333C31.3333 25.013 30.6661 26.6239 29.4783 27.8117C28.2906 28.9994 26.6797 29.6667 25 29.6667C23.3203 29.6667 21.7094 28.9994 20.5217 27.8117C19.3339 26.6239 18.6667 25.013 18.6667 23.3333C18.6667 21.6536 19.3339 20.0427 20.5217 18.855ZM25 19C23.8507 19 22.7485 19.4565 21.9359 20.2692C21.1232 21.0819 20.6667 22.1841 20.6667 23.3333C20.6667 24.4826 21.1232 25.5848 21.9359 26.3975C22.7485 27.2101 23.8507 27.6667 25 27.6667C26.1493 27.6667 27.2515 27.2101 28.0641 26.3975C28.8768 25.5848 29.3333 24.4826 29.3333 23.3333C29.3333 22.1841 28.8768 21.0819 28.0641 20.2692C27.2515 19.4565 26.1493 19 25 19ZM33.3646 17.9251C33.5016 17.3901 34.0463 17.0674 34.5814 17.2044C35.9437 17.5532 37.1512 18.3455 38.0135 19.4564C38.8758 20.5673 39.3438 21.9336 39.3438 23.3398C39.3438 24.7461 38.8758 26.1124 38.0135 27.2233C37.1512 28.3341 35.9437 29.1265 34.5814 29.4753C34.0463 29.6122 33.5016 29.2896 33.3646 28.7545C33.2276 28.2195 33.5503 27.6747 34.0853 27.5378C35.0174 27.2991 35.8436 26.757 36.4336 25.9969C37.0236 25.2368 37.3438 24.302 37.3438 23.3398C37.3438 22.3777 37.0236 21.4428 36.4336 20.6828C35.8436 19.9227 35.0174 19.3806 34.0853 19.1419C33.5503 19.0049 33.2276 18.4602 33.3646 17.9251ZM22.3333 35C21.1841 35 20.0819 35.4565 19.2692 36.2692C18.4565 37.0819 18 38.1841 18 39.3333V42C18 42.5523 17.5523 43 17 43C16.4477 43 16 42.5523 16 42V39.3333C16 37.6536 16.6673 36.0427 17.855 34.855C19.0427 33.6673 20.6536 33 22.3333 33H27.6667C29.1859 33 30.5807 33.5359 31.6722 34.4265C32.1001 34.7757 32.164 35.4056 31.8148 35.8335C31.4657 36.2614 30.8357 36.3253 30.4078 35.9761C29.6593 35.3654 28.7074 35 27.6667 35H22.3333Z" fill="#616161" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M36.5859 32.5858C36.961 32.2107 37.4697 32 38.0001 32C38.5305 32 39.0392 32.2107 39.4143 32.5858C39.6314 32.8029 39.7934 33.0647 39.8914 33.3496C40.4303 33.6869 40.8933 34.1357 41.2482 34.6679C41.7012 35.3474 41.9607 36.1374 41.999 36.9531C41.9997 36.9687 42.0001 36.9844 42.0001 37V38.4293C42.0238 38.5668 42.076 38.698 42.1535 38.8144C42.2404 38.9446 42.3566 39.0527 42.4928 39.1298C42.888 39.3536 43.0828 39.8156 42.9671 40.2548C42.8514 40.694 42.4542 41 42.0001 41H40.4496C40.3523 41.4767 40.1171 41.9186 39.7679 42.2678C39.299 42.7366 38.6631 43 38.0001 43C37.3371 43 36.7012 42.7366 36.2323 42.2678C35.8831 41.9186 35.6479 41.4767 35.5506 41H34.0001C33.5459 41 33.1488 40.694 33.0331 40.2548C32.9174 39.8156 33.1121 39.3536 33.5073 39.1298C33.6436 39.0527 33.7598 38.9446 33.8466 38.8144C33.9242 38.698 33.9764 38.5668 34.0001 38.4293V37C34.0001 36.9844 34.0005 36.9687 34.0012 36.9531C34.0395 36.1374 34.299 35.3474 34.752 34.6679C35.1069 34.1357 35.5699 33.6869 36.1088 33.3496C36.2068 33.0647 36.3688 32.8029 36.5859 32.5858ZM35.9218 39C35.9535 38.8754 35.9773 38.7485 35.9928 38.6202C35.9977 38.5803 36.0001 38.5402 36.0001 38.5V37.0254C36.0248 36.5799 36.1684 36.1489 36.4161 35.7773C36.6678 35.3999 37.0174 35.098 37.4276 34.904C37.7771 34.7387 38.0001 34.3867 38.0001 34C38.0001 34.3867 38.223 34.7387 38.5726 34.904C38.9828 35.098 39.3324 35.3999 39.5841 35.7773C39.8318 36.1489 39.9753 36.5799 40.0001 37.0254V38.5C40.0001 38.5402 40.0025 38.5803 40.0073 38.6202C40.0229 38.7485 40.0466 38.8754 40.0784 39H35.9218Z" fill="#616161" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>}
                <Menu
                  id="basic-menu3"
                  anchorEl={anchorEl3}
                  open={open3}
                  onClose={handleClose3}
                  MenuListProps={{
                    "aria-labelledby": "menu-button3",
                  }}
                  PaperProps={{
                    style: {
                      borderRadius: "8px",
                      border: "1px solid #E6E6E6",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      width: "270px",
                    },
                  }}
                >
                  <div className="avatar-tooltip">
                    <div className="top-section">
                      <h3 className="user-name">Daniel Lopez</h3>
                      <p className="user-email">daniellopez@gmail.com</p>
                      <div className="plan-info">Professional until Apr 30, 2024</div>
                    </div>

                    <div className="menu-section">
                      <Link href="/preferences" className="menu-item">
                        <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
                          <path fill="currentColor" d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7ZM19.0277 15.6255C18.6859 15.5646 18.1941 15.6534 17.682 16.1829C17.4936 16.3777 17.2342 16.4877 16.9632 16.4877C16.6922 16.4877 16.4328 16.3777 16.2444 16.1829C15.7322 15.6534 15.2405 15.5646 14.8987 15.6255C14.5381 15.6897 14.2179 15.9384 14.0623 16.3275C13.8048 16.9713 13.9014 18.662 16.9632 20.4617C20.0249 18.662 20.1216 16.9713 19.864 16.3275C19.7084 15.9384 19.3882 15.6897 19.0277 15.6255ZM21.721 15.5847C22.5748 17.7191 21.2654 20.429 17.437 22.4892C17.1412 22.6484 16.7852 22.6484 16.4893 22.4892C12.6609 20.4291 11.3516 17.7191 12.2053 15.5847C12.6117 14.5689 13.4917 13.8446 14.5481 13.6565C15.3567 13.5125 16.2032 13.6915 16.9632 14.1924C17.7232 13.6915 18.5697 13.5125 19.3783 13.6565C20.4347 13.8446 21.3147 14.5689 21.721 15.5847ZM9.92597 14.2049C10.1345 14.7163 9.889 15.2999 9.3776 15.5084C7.06131 16.453 5.5 18.5813 5.5 20.9999C5.5 21.5522 5.05228 21.9999 4.5 21.9999C3.94772 21.9999 3.5 21.5522 3.5 20.9999C3.5 17.6777 5.641 14.8723 8.6224 13.6565C9.1338 13.448 9.71743 13.6935 9.92597 14.2049Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        <span>Preferences</span>
                      </Link>

                      <Link href="/profile" className="menu-item">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                          <path fill="currentColor" d="M14 12.5C14 13.6046 13.1046 14.5 12 14.5C10.8954 14.5 10 13.6046 10 12.5C10 11.3954 10.8954 10.5 12 10.5C13.1046 10.5 14 11.3954 14 12.5Z" />
                          <path fill="currentColor" d="M12 17.25C11.7265 17.25 11.3186 17.3871 10.6823 17.9811C10.2786 18.3579 9.64578 18.3361 9.26894 17.9323C8.89211 17.5286 8.91393 16.8958 9.31768 16.5189C10.1099 15.7795 10.9878 15.25 12 15.25C13.0122 15.25 13.8901 15.7795 14.6823 16.5189C15.0861 16.8958 15.1079 17.5286 14.7311 17.9323C14.3542 18.3361 13.7214 18.3579 13.3177 17.9811C12.6814 17.3871 12.2735 17.25 12 17.25Z" clip-rule="evenodd" fill-rule="evenodd" />
                          <path fill="currentColor" d="M4 5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5ZM7 4C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V5C18 4.44772 17.5523 4 17 4H7Z" clip-rule="evenodd" fill-rule="evenodd" />
                          <path fill="currentColor" d="M9 7C9 6.44772 9.44772 6 10 6H14C14.5523 6 15 6.44772 15 7C15 7.55228 14.5523 8 14 8H10C9.44772 8 9 7.55228 9 7Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        <span>Account Details</span>
                      </Link>

                      <Link href="/billing" className="menu-item">
                        <svg fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.5C7.30781 20.5 3.5 16.6922 3.5 12C3.5 7.30781 7.30781 3.5 12 3.5C16.6922 3.5 20.5 7.30781 20.5 12C20.5 16.6922 16.6922 20.5 12 20.5Z" />
                          <path fill="currentColor" d="M12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7Z" />
                          <path fill="currentColor" d="M8 15.5C7.44772 15.5 7 15.9477 7 16.5C7 17.0523 7.44772 17.5 8 17.5H16C16.5523 17.5 17 17.0523 17 16.5C17 15.9477 16.5523 15.5 16 15.5H8Z" />
                        </svg>
                        <span>Billing</span>
                      </Link>

                      <Link href="/security" className="menu-item">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                          <path fill="currentColor" d="M12 2C9.23858 2 7 4.23858 7 7V9C5.89543 9 5 9.89543 5 11V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V11C19 9.89543 18.1046 9 17 9V7C17 4.23858 14.7614 2 12 2ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V9H9V7Z" />
                          <circle cx="12" cy="15" r="2" fill="white" />
                        </svg>
                        <span>Sign In & Security</span>
                      </Link>

                      <a onClick={() => handleLink('Support')} href="#" className="menu-item">
                        <svg viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none">
                          <path d="M9.984 9A2.248 2.248 0 0 1 12 7.75a2.25 2.25 0 0 1 1.579 3.853c-.5.493-1.108 1.025-1.402 1.65M12 16.25v.01m0 2.99a7.25 7.25 0 1 1 0-14.5 7.25 7.25 0 0 1 0 14.5Z" stroke-linejoin="round" stroke-linecap="round" />
                        </svg>
                        <span>Support</span>
                      </a>
                      <a href="#" className="menu-item">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M4 4h6v6h-6z"></path>
                          <path d="M14 4h6v6h-6z"></path>
                          <path d="M4 14h6v6h-6z"></path>
                          <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        </svg>
                        <span>Request New Content</span>
                      </a>

                      <Link href="/team" className="menu-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208zm0-384c-97 0-176 79-176 176s79 176 176 176 176-78.95 176-176S353.05 80 256 80z" />
                          <path fill="currentColor" d="M323.67 292c-17.4 0-34.21-7.72-47.34-21.73a83.76 83.76 0 01-22-51.32c-1.47-20.7 4.88-39.75 17.88-53.62S303.38 144 323.67 144c20.14 0 38.37 7.62 51.33 21.46s19.47 33 18 53.51a84 84 0 01-22 51.3C357.86 284.28 341.06 292 323.67 292zm55.81-74zm-215.66 77.36c-29.76 0-55.93-27.51-58.33-61.33-1.23-17.32 4.15-33.33 15.17-45.08s26.22-18 43.15-18 32.12 6.44 43.07 18.14 16.5 27.82 15.25 45c-2.44 33.77-28.6 61.27-58.31 61.27zm256.55 59.92c-1.59-4.7-5.46-9.71-13.22-14.46-23.46-14.33-52.32-21.91-83.48-21.91-30.57 0-60.23 7.9-83.53 22.25-26.25 16.17-43.89 39.75-51 68.18-1.68 6.69-4.13 19.14-1.51 26.11a192.18 192.18 0 00232.75-80.17zm-256.74 46.09c7.07-28.21 22.12-51.73 45.47-70.75a8 8 0 00-2.59-13.77c-12-3.83-25.7-5.88-42.69-5.88-23.82 0-49.11 6.45-68.14 18.17-5.4 3.33-10.7 4.61-14.78 5.75a192.84 192.84 0 0077.78 86.64l1.79-.14a102.82 102.82 0 013.16-20.02z" />
                        </svg>
                        <span>Team</span>
                      </Link>

                      <a href="#" className="menu-item">
                        <svg stroke-width="1.5" stroke="currentColor" fill="none" viewBox="0 0 24 24" width="24" height="24">
                          <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" stroke-linejoin="round" stroke-linecap="round" />
                          <path d="M16 7h4" stroke-linejoin="round" stroke-linecap="round" />
                          <path d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3" stroke-linejoin="round" stroke-linecap="round" />
                        </svg>
                        <span>Highlighters</span>
                      </a>
                    </div>

                    <div className="menu-section">
                      <a href="#" className="menu-item">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                          <path fill="currentColor" d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
                        </svg>
                        <span>Logout</span>
                      </a>
                    </div>

                    <div className="footer-section">
                      <div className="footer-row">
                        <span className="footer-label">Download</span>
                        <div className="footer-icons">
                          <a href="#" className="platform-link">
                            <svg viewBox="0 0 384 512" width="14" height="14">
                              <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                            iOS
                          </a>
                          <a href="#" className="platform-link">
                            <svg viewBox="0 0 576 512" width="14" height="14">
                              <path fill="currentColor" d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
                            </svg>
                            Android
                          </a>
                        </div>
                      </div>

                      <div className="footer-row">
                        <span className="footer-label">Connect</span>
                        <div className="footer-icons social-icons">
                          <a href="#" className="social-link">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                              <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          </a>
                          <a href="#" className="social-link">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                              <path fill="currentColor" d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
                            </svg>
                          </a>
                          <a href="#" className="social-link">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                              <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          </a>
                          <a href="#" className="social-link">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                              <path fill="currentColor" d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Menu>


              </>
            </>
            : ''
          }
        </div>
      </div>
    </header >
  );
};

export default Header;
