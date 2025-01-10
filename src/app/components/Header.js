"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";

const Header = ({ isModalOpen, setIsModalOpen, isModalOpen2, supportModal, setsupportModal,
  setIsModalOpen2, setIsOpenApplytoTeach, isSidebarSmallActive, setisSidebarSmallActive, isOpenApplytoTeach, setIsPanelActive, isPanelActive }) => {

  const [Login, setLogin] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleModal2 = () => setIsModalOpen2(!isModalOpen2);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState('all'); // Default: 'courses'
  const open = Boolean(anchorEl);



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
    setShowSuggestions(true);
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

  const [searchValue, setSearchValue] = useState(""); // Input value
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
      <div className="results-section">
        {/* Render Courses */}
        {showCourses && (
          <div className="results-category">
            <h3 className="category-title">Courses</h3>
            <div className="results-list">
              {filteredCourses.map((course, index) => (
                <div key={index} className="result-item">
                  <img className="result-image" src={course.image} alt={course.title} />
                  <div className="result-content">
                    <h4 className="result-title">{course.title}</h4>
                    <p>{course.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Render Sessions */}
        {showSessions && (
          <div className="results-category">
            <h3 className="category-title">Sessions</h3>
            <div className="results-list">
              {filteredSessions.map((session, index) => (
                <div key={index} className="result-item">
                  <img className="result-image" src={session.image} alt={session.title} />
                  <div className="result-content">
                    <h4 className="result-title">{session.title}</h4>
                    <p>{session.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Render Communities */}
        {showCommunities && (
          <div className="results-category">
            <h3 className="category-title">Communities</h3>
            <div className="results-list">
              {filteredCommunities.map((community, index) => (
                <div key={index} className="result-item">
                  <img className="result-image" src={community.image} alt={community.title} />
                  <div className="result-content">
                    <h4 className="result-title">{community.title}</h4>
                    <p>{community.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fallback for no matches */}
        {!showCourses && !showSessions && !showCommunities && (
          <p>No results found</p>
        )}
      </div>
    );
  };



  const renderTopics = () => (
    <div className="topics-section">
      <h3 className="section-title">Topics</h3>
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="topic-item"
            onClick={() => {
              setSearchValue(topic.toLowerCase());
              setShowTrending(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 1310 1310" fill="none">
              <path d="M1310 748.571H748.571V1310H561.429V748.571H0V561.429H561.429V0H748.571V561.429H1310V748.571Z" fill="black" />
            </svg>
            <span>{topic}</span>
          </div>
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
            <div className="input-group position-relative search-bar" style={{ background: '#F1F6F7', border: '1.5px solid #293330', borderRadius: '8px', maxWidth: '485px', width: '100%' }}>
              <div className="search-wrapper w-100">
                <button className="btn " type="button">
                  <svg width='24' height='24' viewBox="1 1 60 60">
                    <path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"></path><path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"></path>
                  </svg>
                </button>
                <input
                  style={{
                    background: '#F1F6F7 ',
                    border: '0',
                    paddingLeft: '0',
                    paddingRight: '3px',
                    fontSize: '12px',
                  }}
                  type="text"
                  className="form-control w-100"
                  placeholder="Search for anything..."
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
                <button className="search-btn"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 34 28" fill="none">
                  <path d="M2.00002 14H31.1667" stroke="#BEEEFF" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20.3333 25.6666L32 13.9999L20.3333 2.33325" stroke="#BEEEFF" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg></button>
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
            <div className="filter-section">
              <span className="mr-4" style={{ color: '#000', fontWeight: '600' }}>Filter & Sort</span>
              <button className="d-flex align-items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M11.9588 2.62429H3.59188C3.47354 2.62419 3.35768 2.65941 3.25817 2.72574C3.15867 2.79208 3.07973 2.88671 3.03082 2.99831C2.98191 3.10991 2.9651 3.23374 2.98239 3.35498C2.99969 3.47622 3.05037 3.58973 3.12836 3.6819L6.39213 7.54388C6.49029 7.66021 6.54432 7.8095 6.54417 7.96399V11.0712C6.54417 11.1207 6.5553 11.1695 6.57667 11.2137C6.59804 11.258 6.62906 11.2965 6.66729 11.3262L8.51401 12.7605C8.55974 12.7961 8.61411 12.8177 8.67104 12.823C8.72797 12.8283 8.7852 12.8171 8.83633 12.7906C8.88745 12.7642 8.93045 12.7235 8.9605 12.6731C8.99055 12.6228 9.00647 12.5647 9.00647 12.5055V7.96399C9.00632 7.8095 9.06035 7.66021 9.15852 7.54388L12.4223 3.68127C12.7707 3.26944 12.4875 2.62429 11.9588 2.62429Z" stroke="#575B5A" strokeWidth="1.2" strokeLinecap="round" />
              </svg> Reset All</button>
              <div className="filter-group">
                <select>
                  <option>My Language</option>
                  <option>English</option>
                  <option>Chinese</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>Russian</option>
                  <option>German</option>
                  <option>Japanese</option>
                  <option>Korean</option>
                  <option>Hebrew</option>
                </select>
              </div>

              <div className="filter-group">
                <select>
                  <option>Title & Content</option>
                  <option>Title</option>
                  <option>Content</option>
                </select>
              </div>

              <div className="filter-group">
                <select>
                  <option>Best Match</option>
                  <option>Popularity</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>
          ) : ''}
          {Login === true ?
            <>
              <button onClick={() => setIsPanelActive(!isPanelActive)} className="btn p-0" type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="29.25" stroke="#E5E5E5" strokeWidth="1.5" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.5217 18.855C21.7094 17.6673 23.3203 17 25 17C26.6797 17 28.2906 17.6673 29.4783 18.855C30.6661 20.0427 31.3333 21.6536 31.3333 23.3333C31.3333 25.013 30.6661 26.6239 29.4783 27.8117C28.2906 28.9994 26.6797 29.6667 25 29.6667C23.3203 29.6667 21.7094 28.9994 20.5217 27.8117C19.3339 26.6239 18.6667 25.013 18.6667 23.3333C18.6667 21.6536 19.3339 20.0427 20.5217 18.855ZM25 19C23.8507 19 22.7485 19.4565 21.9359 20.2692C21.1232 21.0819 20.6667 22.1841 20.6667 23.3333C20.6667 24.4826 21.1232 25.5848 21.9359 26.3975C22.7485 27.2101 23.8507 27.6667 25 27.6667C26.1493 27.6667 27.2515 27.2101 28.0641 26.3975C28.8768 25.5848 29.3333 24.4826 29.3333 23.3333C29.3333 22.1841 28.8768 21.0819 28.0641 20.2692C27.2515 19.4565 26.1493 19 25 19ZM33.3646 17.9251C33.5016 17.3901 34.0463 17.0674 34.5814 17.2044C35.9437 17.5532 37.1512 18.3455 38.0135 19.4564C38.8758 20.5673 39.3438 21.9336 39.3438 23.3398C39.3438 24.7461 38.8758 26.1124 38.0135 27.2233C37.1512 28.3341 35.9437 29.1265 34.5814 29.4753C34.0463 29.6122 33.5016 29.2896 33.3646 28.7545C33.2276 28.2195 33.5503 27.6747 34.0853 27.5378C35.0174 27.2991 35.8436 26.757 36.4336 25.9969C37.0236 25.2368 37.3438 24.302 37.3438 23.3398C37.3438 22.3777 37.0236 21.4428 36.4336 20.6828C35.8436 19.9227 35.0174 19.3806 34.0853 19.1419C33.5503 19.0049 33.2276 18.4602 33.3646 17.9251ZM22.3333 35C21.1841 35 20.0819 35.4565 19.2692 36.2692C18.4565 37.0819 18 38.1841 18 39.3333V42C18 42.5523 17.5523 43 17 43C16.4477 43 16 42.5523 16 42V39.3333C16 37.6536 16.6673 36.0427 17.855 34.855C19.0427 33.6673 20.6536 33 22.3333 33H27.6667C29.1859 33 30.5807 33.5359 31.6722 34.4265C32.1001 34.7757 32.164 35.4056 31.8148 35.8335C31.4657 36.2614 30.8357 36.3253 30.4078 35.9761C29.6593 35.3654 28.7074 35 27.6667 35H22.3333Z" fill="#616161" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M36.5859 32.5858C36.961 32.2107 37.4697 32 38.0001 32C38.5305 32 39.0392 32.2107 39.4143 32.5858C39.6314 32.8029 39.7934 33.0647 39.8914 33.3496C40.4303 33.6869 40.8933 34.1357 41.2482 34.6679C41.7012 35.3474 41.9607 36.1374 41.999 36.9531C41.9997 36.9687 42.0001 36.9844 42.0001 37V38.4293C42.0238 38.5668 42.076 38.698 42.1535 38.8144C42.2404 38.9446 42.3566 39.0527 42.4928 39.1298C42.888 39.3536 43.0828 39.8156 42.9671 40.2548C42.8514 40.694 42.4542 41 42.0001 41H40.4496C40.3523 41.4767 40.1171 41.9186 39.7679 42.2678C39.299 42.7366 38.6631 43 38.0001 43C37.3371 43 36.7012 42.7366 36.2323 42.2678C35.8831 41.9186 35.6479 41.4767 35.5506 41H34.0001C33.5459 41 33.1488 40.694 33.0331 40.2548C32.9174 39.8156 33.1121 39.3536 33.5073 39.1298C33.6436 39.0527 33.7598 38.9446 33.8466 38.8144C33.9242 38.698 33.9764 38.5668 34.0001 38.4293V37C34.0001 36.9844 34.0005 36.9687 34.0012 36.9531C34.0395 36.1374 34.299 35.3474 34.752 34.6679C35.1069 34.1357 35.5699 33.6869 36.1088 33.3496C36.2068 33.0647 36.3688 32.8029 36.5859 32.5858ZM35.9218 39C35.9535 38.8754 35.9773 38.7485 35.9928 38.6202C35.9977 38.5803 36.0001 38.5402 36.0001 38.5V37.0254C36.0248 36.5799 36.1684 36.1489 36.4161 35.7773C36.6678 35.3999 37.0174 35.098 37.4276 34.904C37.7771 34.7387 38.0001 34.3867 38.0001 34C38.0001 34.3867 38.223 34.7387 38.5726 34.904C38.9828 35.098 39.3324 35.3999 39.5841 35.7773C39.8318 36.1489 39.9753 36.5799 40.0001 37.0254V38.5C40.0001 38.5402 40.0025 38.5803 40.0073 38.6202C40.0229 38.7485 40.0466 38.8754 40.0784 39H35.9218Z" fill="#616161" />
                </svg>
              </button>

              <a onClick={() => setIsOpenApplytoTeach(!isOpenApplytoTeach)} className={`btn ${isSmallMobileView ? 'btn-sm py-2 px-1' : ''} btn-dark px-4`} style={isSmallMobileView ? { fontSize: '11.2px', borderRadius: '50px' } : { borderRadius: '50px' }}>+  Apply to Teach</a>

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
              {!isSmallMobileView ?
                <>
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
                    <div
                      className="mb-2"
                      style={{
                        padding: "14px",
                        fontWeight: "bold",
                        fontSize: "16px",
                      }}
                    >
                      Daniel Lopez
                      <p className="mt-1 mb-3" style={{ fontSize: '12px', color: '#010101', fontWeight: '500' }}>daniellopez@gmail.com</p>
                      <span className="px-3 py-2" style={{ fontSize: '13px', color: '#010101', fontWeight: '500', background: '#F4F4F4', borderRadius: '5px' }}>Proffestional until Apr 30, 2024</span>
                    </div>
                    {profileItems.map((item, index) => (
                      <MenuItem
                        key={index}
                        style={{
                          borderRadius: "5px",
                          border: "0.2px solid #F5F5F5",
                          padding: "11px 15px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#333",
                          transition: "background-color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                        onClick={() => {
                          handleClose3(); // Close the menu
                          handleLink(item.label); // Trigger the link action
                        }}
                      >
                        <span
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          {item.icon}
                        </span>
                        {item.label === 'Account Details' ? (
                          <Link href="/profile">{item.label}</Link>
                        ) : item.label === 'Sign In & Security' ? (
                          <Link href="/security">{item.label}</Link>
                        ) : item.label === 'Billing' ? (
                          <Link href="/billing">{item.label}</Link>
                        ) :
                          item.label === 'Preferences' ? (
                            <Link href="/preferences">{item.label}</Link>
                          ) : (
                            item.label
                          )}
                      </MenuItem>
                    ))}

                    <MenuItem
                      style={{
                        borderRadius: "5px",
                        background: '#F8F9FB',
                        border: '0.2px solid #F5F5F5',
                        padding: "11px 15px",
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#333",
                        transition: "background-color 0.3s ease",
                      }}

                      onClick={handleClose3}
                    >
                      <div className="d-flex align-items-center justify-content-between w-100 py-2">
                        <span

                          style={{
                            fontSize: "12px",
                            fontWeight: '600'
                          }}
                        >
                          Download
                        </span>
                        <div className="d-flex align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 53 20" fill="none">
                            <path d="M14.1643 19.1976C13.0658 20.253 11.8665 20.0864 10.712 19.5864C9.49031 19.0754 8.36946 19.0531 7.08049 19.5864C5.46647 20.2752 4.61462 20.0752 3.65069 19.1976C-1.81905 13.6094 -1.01204 5.09936 5.19746 4.78828C6.71061 4.86605 7.76421 5.6104 8.64968 5.67706C9.97228 5.41043 11.2388 4.64386 12.6511 4.74385C14.3436 4.87716 15.6214 5.54374 16.462 6.74359C12.9649 8.82111 13.7944 13.3872 17 14.6648C16.3611 16.3313 15.5317 17.9866 14.153 19.2087L14.1643 19.1976ZM8.53759 4.72163C8.36946 2.24416 10.3982 0.199975 12.7296 0C13.0546 2.8663 10.1068 4.99937 8.53759 4.72163Z" fill="#686A69" />
                            <path d="M27 5.05V3H29.0517V5.05H27ZM27.1933 18V8.38333H28.86V18H27.1933ZM37.8333 18H34.885C34.1394 18 33.5044 17.7378 32.98 17.2133C32.4556 16.6889 32.1933 16.0533 32.1933 15.3067V5.69333C32.1933 4.94667 32.4556 4.31111 32.98 3.78667C33.5044 3.26222 34.1394 3 34.885 3H37.835C38.5794 3 39.2139 3.26222 39.7383 3.78667C40.2639 4.31111 40.5267 4.94611 40.5267 5.69167V15.3083C40.5267 16.0528 40.2644 16.6878 39.74 17.2133C39.2156 17.7378 38.58 18 37.8333 18ZM34.885 16.3333H37.835C38.1339 16.3333 38.3794 16.2372 38.5717 16.045C38.7639 15.8528 38.86 15.6072 38.86 15.3083V5.69167C38.86 5.39278 38.7639 5.14722 38.5717 4.955C38.3794 4.76278 38.1333 4.66667 37.8333 4.66667H34.885C34.585 4.66667 34.3394 4.76278 34.1483 4.955C33.9561 5.14722 33.86 5.39333 33.86 5.69333V15.3083C33.86 15.6072 33.9561 15.8528 34.1483 16.045C34.3406 16.2372 34.5861 16.3333 34.885 16.3333ZM43.86 18V16.3333H49.5C49.8 16.3333 50.0461 16.2372 50.2383 16.045C50.4306 15.8528 50.5267 15.6072 50.5267 15.3083V12.3583C50.5267 12.0594 50.4306 11.8139 50.2383 11.6217C50.0461 11.4294 49.8 11.3333 49.5 11.3333H46.5517C45.8061 11.3333 45.1711 11.0711 44.6467 10.5467C44.1222 10.0222 43.86 9.38667 43.86 8.64V5.69167C43.86 4.94722 44.1222 4.31222 44.6467 3.78667C45.1711 3.26222 45.8061 3 46.5517 3H52.1933V4.66667H46.5517C46.2517 4.66667 46.0061 4.76278 45.815 4.955C45.6228 5.14722 45.5267 5.39333 45.5267 5.69333V8.64167C45.5267 8.94056 45.6228 9.18611 45.815 9.37833C46.0072 9.57056 46.2528 9.66667 46.5517 9.66667H49.5017C50.2461 9.66667 50.8806 9.92889 51.405 10.4533C51.9306 10.9778 52.1933 11.6133 52.1933 12.36V15.3083C52.1933 16.0528 51.9306 16.6878 51.405 17.2133C50.8806 17.7378 50.2456 18 49.5 18H43.86Z" fill="#686A69" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="14" viewBox="0 0 106 14" fill="none">
                            <path d="M33.3864 13.7992H31L36.3622 0.531235H38.9596L44.3219 13.7992H41.9354L37.7228 2.94123H37.6064L33.3864 13.7992ZM33.7866 8.60342H41.528V10.2878H33.7866V8.60342Z" fill="#686A69" />
                            <path d="M48.4745 7.89079V13.7992H46.299V3.84822H48.3872V5.46784H48.5254C48.7825 4.94092 49.1851 4.51766 49.7332 4.19806C50.2861 3.87845 50.9822 3.71865 51.8213 3.71865C52.5828 3.71865 53.2498 3.86118 53.8221 4.14623C54.3945 4.42696 54.8383 4.8459 55.1536 5.40305C55.4689 5.9602 55.6265 6.64908 55.6265 7.46969V13.7992H53.4511V7.70292C53.4511 6.98164 53.2401 6.41802 52.8181 6.01203C52.3961 5.60173 51.8165 5.39658 51.0792 5.39658C50.5747 5.39658 50.1261 5.49375 49.7332 5.68811C49.3451 5.88246 49.0371 6.16752 48.8092 6.54327C48.586 6.9147 48.4745 7.36388 48.4745 7.89079Z" fill="#686A69" />
                            <path d="M62.7276 13.9935C61.8254 13.9935 61.0203 13.7884 60.3121 13.3781C59.6088 12.9634 59.0558 12.3739 58.6532 11.6094C58.2555 10.8407 58.0566 9.91856 58.0566 8.84313C58.0566 7.7677 58.2579 6.84776 58.6605 6.08329C59.0679 5.31883 59.6257 4.73361 60.3339 4.32763C61.0421 3.92164 61.8448 3.71865 62.7422 3.71865C63.4358 3.71865 63.9936 3.8223 64.4156 4.02962C64.8424 4.23261 65.1723 4.47015 65.4051 4.74225C65.6428 5.01435 65.8271 5.25405 65.958 5.46136H66.089V0.531235H68.2645V13.7992H66.1399V12.2508H65.958C65.8271 12.4624 65.6379 12.7043 65.3905 12.9764C65.148 13.2485 64.8133 13.486 64.3865 13.689C63.9596 13.892 63.4067 13.9935 62.7276 13.9935ZM63.2078 12.3415C63.8335 12.3415 64.3622 12.1947 64.7939 11.901C65.2305 11.603 65.5603 11.1905 65.7834 10.6636C66.0114 10.1367 66.1254 9.52337 66.1254 8.82369C66.1254 8.13266 66.0138 7.528 65.7907 7.00972C65.5676 6.49144 65.2402 6.08761 64.8085 5.79824C64.3768 5.50887 63.8432 5.36418 63.2078 5.36418C62.553 5.36418 62.0073 5.51535 61.5708 5.81768C61.1342 6.12001 60.8044 6.53247 60.5813 7.05507C60.363 7.57766 60.2539 8.16721 60.2539 8.82369C60.2539 9.48882 60.3654 10.087 60.5886 10.6182C60.8117 11.1495 61.1415 11.5706 61.5781 11.8815C62.0195 12.1882 62.5627 12.3415 63.2078 12.3415Z" fill="#686A69" />
                            <path d="M71.3694 13.7992V3.84822H73.4721V5.42897H73.5885C73.7922 4.89341 74.1511 4.47231 74.6653 4.16566C75.1843 3.8547 75.7712 3.69921 76.426 3.69921C76.5618 3.69921 76.7219 3.70353 76.9062 3.71217C77.0954 3.72081 77.2433 3.73161 77.35 3.74456V5.59741C77.2627 5.57581 77.1075 5.55206 76.8844 5.52615C76.6612 5.49591 76.4381 5.4808 76.215 5.4808C75.7009 5.4808 75.2425 5.57797 74.8399 5.77233C74.4421 5.96236 74.1269 6.22798 73.894 6.56918C73.6612 6.90606 73.5448 7.29045 73.5448 7.72235V13.7992H71.3694Z" fill="#686A69" />
                            <path d="M83.5398 14C82.4921 14 81.5778 13.7862 80.7969 13.3586C80.016 12.9311 79.4097 12.3329 78.978 11.5641C78.5463 10.7953 78.3304 9.89696 78.3304 8.86904C78.3304 7.8368 78.5463 6.93414 78.978 6.16104C79.4097 5.38794 80.016 4.7876 80.7969 4.36002C81.5778 3.93244 82.4921 3.71865 83.5398 3.71865C84.5875 3.71865 85.5019 3.93244 86.2828 4.36002C87.0637 4.7876 87.67 5.38794 88.1017 6.16104C88.5334 6.93414 88.7493 7.8368 88.7493 8.86904C88.7493 9.89696 88.5334 10.7953 88.1017 11.5641C87.67 12.3329 87.0637 12.9311 86.2828 13.3586C85.5019 13.7862 84.5875 14 83.5398 14ZM83.5471 12.3739C84.2262 12.3739 84.7888 12.2141 85.2351 11.8945C85.6813 11.5749 86.0112 11.1495 86.2246 10.6182C86.4429 10.087 86.552 9.50177 86.552 8.86256C86.552 8.22767 86.4429 7.64461 86.2246 7.11337C86.0112 6.57782 85.6813 6.14808 85.2351 5.82416C84.7888 5.50023 84.2262 5.33827 83.5471 5.33827C82.8632 5.33827 82.2957 5.50023 81.8446 5.82416C81.3983 6.14808 81.0661 6.57782 80.8478 7.11337C80.6344 7.64461 80.5277 8.22767 80.5277 8.86256C80.5277 9.50177 80.6344 10.087 80.8478 10.6182C81.0661 11.1495 81.3983 11.5749 81.8446 11.8945C82.2957 12.2141 82.8632 12.3739 83.5471 12.3739Z" fill="#686A69" />
                            <path d="M91.1775 13.7992V3.84822H93.353V13.7992H91.1775ZM92.2762 2.31282C91.8978 2.31282 91.5728 2.20052 91.3012 1.97594C91.0344 1.74703 90.901 1.47493 90.901 1.15965C90.901 0.840043 91.0344 0.567947 91.3012 0.343359C91.5728 0.114453 91.8978 0 92.2762 0C92.6545 0 92.9771 0.114453 93.2438 0.343359C93.5155 0.567947 93.6513 0.840043 93.6513 1.15965C93.6513 1.47493 93.5155 1.74703 93.2438 1.97594C92.9771 2.20052 92.6545 2.31282 92.2762 2.31282Z" fill="#686A69" />
                            <path d="M100.463 13.9935C99.561 13.9935 98.7558 13.7884 98.0476 13.3781C97.3443 12.9634 96.7914 12.3739 96.3888 11.6094C95.991 10.8407 95.7922 9.91856 95.7922 8.84313C95.7922 7.7677 95.9935 6.84776 96.396 6.08329C96.8035 5.31883 97.3613 4.73361 98.0695 4.32763C98.7776 3.92164 99.5804 3.71865 100.478 3.71865C101.171 3.71865 101.729 3.8223 102.151 4.02962C102.578 4.23261 102.908 4.47015 103.141 4.74225C103.378 5.01435 103.563 5.25405 103.694 5.46136H103.825V0.531235H106V13.7992H103.875V12.2508H103.694C103.563 12.4624 103.373 12.7043 103.126 12.9764C102.884 13.2485 102.549 13.486 102.122 13.689C101.695 13.892 101.142 13.9935 100.463 13.9935ZM100.943 12.3415C101.569 12.3415 102.098 12.1947 102.529 11.901C102.966 11.603 103.296 11.1905 103.519 10.6636C103.747 10.1367 103.861 9.52337 103.861 8.82369C103.861 8.13266 103.749 7.528 103.526 7.00972C103.303 6.49144 102.976 6.08761 102.544 5.79824C102.112 5.50887 101.579 5.36418 100.943 5.36418C100.289 5.36418 99.7429 5.51535 99.3063 5.81768C98.8698 6.12001 98.54 6.53247 98.3168 7.05507C98.0986 7.57766 97.9894 8.16721 97.9894 8.82369C97.9894 9.48882 98.101 10.087 98.3241 10.6182C98.5472 11.1495 98.8771 11.5706 99.3136 11.8815C99.755 12.1882 100.298 12.3415 100.943 12.3415Z" fill="#686A69" />
                            <path d="M0 13C0.156818 11.1642 0.727636 9.47414 1.71245 7.92997C2.69727 6.3858 4.00827 5.15904 5.64545 4.24969L3.71136 0.955457C3.60682 0.80104 3.58068 0.638043 3.63295 0.466468C3.68523 0.294894 3.79848 0.166213 3.97273 0.0804254C4.11212 -0.00536191 4.26894 -0.0225191 4.44318 0.0289533C4.61742 0.0804257 4.75682 0.18337 4.86136 0.337787L6.79545 3.63202C8.29394 3.01435 9.86212 2.70552 11.5 2.70552C13.1379 2.70552 14.7061 3.01435 16.2045 3.63202L18.1386 0.337787C18.2432 0.18337 18.3826 0.0804257 18.5568 0.0289533C18.7311 -0.0225191 18.8879 -0.00536191 19.0273 0.0804254C19.2015 0.166213 19.3148 0.294894 19.367 0.466468C19.4193 0.638043 19.3932 0.80104 19.2886 0.955457L17.3545 4.24969C18.9924 5.15904 20.3034 6.3858 21.2875 7.92997C22.2717 9.47414 22.8425 11.1642 23 13H0ZM6.27273 10.169C6.63864 10.169 6.94809 10.0445 7.20109 9.79533C7.45409 9.5462 7.58024 9.24183 7.57955 8.88221C7.57885 8.52259 7.45235 8.21787 7.20005 7.96806C6.94774 7.71825 6.63864 7.59402 6.27273 7.5954C5.90682 7.59677 5.59736 7.72133 5.34436 7.96909C5.09136 8.21684 4.96521 8.52121 4.96591 8.88221C4.96661 9.2432 5.09311 9.54792 5.34541 9.79636C5.59771 10.0448 5.90682 10.169 6.27273 10.169ZM16.7273 10.169C17.0932 10.169 17.4026 10.0445 17.6556 9.79533C17.9086 9.5462 18.0348 9.24183 18.0341 8.88221C18.0334 8.52259 17.9069 8.21787 17.6546 7.96806C17.4023 7.71825 17.0932 7.59402 16.7273 7.5954C16.3614 7.59677 16.0519 7.72133 15.7989 7.96909C15.5459 8.21684 15.4198 8.52121 15.4205 8.88221C15.4212 9.2432 15.5477 9.54792 15.8 9.79636C16.0523 10.0448 16.3614 10.169 16.7273 10.169Z" fill="#686A69" />
                          </svg>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between w-100 py-2">
                        <span

                          style={{
                            fontSize: "12px",
                            fontWeight: '600'
                          }}
                        >
                          Connect
                        </span>
                        <div className="d-flex align-items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 43 43" fill="none">
                            <rect width="43" height="43" rx="8" fill="#F0F0F0" />
                            <mask id="mask0_35_103" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="8" y="8" width="27" height="27">
                              <path d="M8 8H35V35H8V8Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_35_103)">
                              <path d="M29.2625 9.26514H33.4031L24.3581 19.6293L35 33.7349H26.6686L20.1384 25.1816L12.6749 33.7349H8.53036L18.2041 22.6456L8 9.26707H16.5436L22.4373 17.0836L29.2625 9.26514ZM27.8064 31.2509H30.1014L15.29 11.6199H12.8291L27.8064 31.2509Z" fill="#666666" />
                            </g>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 43 43" fill="none">
                            <path d="M0 8C0 3.58172 3.58172 0 8 0H35C39.4183 0 43 3.58172 43 8V35C43 39.4183 39.4183 43 35 43H8C3.58172 43 0 39.4183 0 35V8Z" fill="#F0F0F0" />
                            <path d="M30.307 13.579C28.787 12.8429 27.1412 12.3087 25.4269 12C25.3968 12.0004 25.368 12.0132 25.3469 12.0356C25.1412 12.4274 24.9012 12.9379 24.7412 13.3297C22.9228 13.0449 21.0736 13.0449 19.2553 13.3297C19.0953 12.926 18.8553 12.4274 18.6381 12.0356C18.6267 12.0119 18.5924 12 18.5581 12C16.8438 12.3087 15.2095 12.8429 13.678 13.579C13.6666 13.579 13.6551 13.5908 13.6437 13.6027C10.5351 18.4346 9.67789 23.1359 10.1008 27.7897C10.1008 27.8134 10.1122 27.8371 10.135 27.849C12.1922 29.4161 14.1694 30.3659 16.1238 30.9951C16.1581 31.007 16.1924 30.9951 16.2038 30.9713C16.6609 30.3184 17.0724 29.6298 17.4267 28.9056C17.4495 28.8581 17.4267 28.8106 17.381 28.7988C16.7295 28.5376 16.1124 28.2289 15.5066 27.8728C15.4609 27.849 15.4609 27.7778 15.4952 27.7422C15.6209 27.6472 15.7466 27.5404 15.8723 27.4454C15.8952 27.4216 15.9295 27.4216 15.9524 27.4335C19.8839 29.2974 24.124 29.2974 28.0098 27.4335C28.0327 27.4216 28.067 27.4216 28.0898 27.4454C28.2155 27.5522 28.3413 27.6472 28.467 27.754C28.5127 27.7897 28.5127 27.8609 28.4556 27.8846C27.8612 28.2527 27.2327 28.5495 26.5812 28.8106C26.5355 28.8225 26.5241 28.8819 26.5355 28.9175C26.9012 29.6417 27.3127 30.3303 27.7584 30.9832C27.7927 30.9951 27.827 31.007 27.8612 30.9951C29.827 30.3659 31.8042 29.4161 33.8614 27.849C33.8843 27.8371 33.8957 27.8134 33.8957 27.7897C34.3986 22.4117 33.0614 17.746 30.3527 13.6027C30.3413 13.5908 30.3299 13.579 30.307 13.579ZM18.021 24.9523C16.8438 24.9523 15.8609 23.8244 15.8609 22.4354C15.8609 21.0464 16.8209 19.9186 18.021 19.9186C19.2324 19.9186 20.1925 21.0583 20.181 22.4354C20.181 23.8244 19.221 24.9523 18.021 24.9523ZM25.9869 24.9523C24.8097 24.9523 23.8269 23.8244 23.8269 22.4354C23.8269 21.0464 24.7869 19.9186 25.9869 19.9186C27.1984 19.9186 28.1584 21.0583 28.147 22.4354C28.147 23.8244 27.1984 24.9523 25.9869 24.9523Z" fill="#666666" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 43 43" fill="none">
                            <path d="M0 8C0 3.58172 3.58172 0 8 0H35C39.4183 0 43 3.58172 43 8V35C43 39.4183 39.4183 43 35 43H8C3.58172 43 0 39.4183 0 35V8Z" fill="#F0F0F0" />
                            <path d="M35.0677 21.5338C35.0677 14.0632 29.0045 8 21.5338 8C14.0632 8 8 14.0632 8 21.5338C8 28.0842 12.6556 33.5383 18.8271 34.797V25.594H16.1203V21.5338H18.8271V18.1504C18.8271 15.5383 20.9519 13.4135 23.5639 13.4135H26.9474V17.4737H24.2406C23.4962 17.4737 22.8872 18.0827 22.8872 18.8271V21.5338H26.9474V25.594H22.8872V35C29.7218 34.3233 35.0677 28.5579 35.0677 21.5338Z" fill="#666666" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 43 43" fill="none">
                            <path d="M0 8C0 3.58172 3.58172 0 8 0H35C39.4183 0 43 3.58172 43 8V35C43 39.4183 39.4183 43 35 43H8C3.58172 43 0 39.4183 0 35V8Z" fill="#F0F0F0" />
                            <path d="M21.5 8C14.048 8 8 14.048 8 21.5C8 28.952 14.048 35 21.5 35C28.952 35 35 28.952 35 21.5C35 14.048 28.952 8 21.5 8ZM27.764 17.18C27.5615 19.313 26.684 24.497 26.2385 26.8865C26.0495 27.899 25.6715 28.2365 25.3205 28.277C24.5375 28.3445 23.9435 27.764 23.1875 27.2645C21.9995 26.4815 21.3245 25.9955 20.177 25.2395C18.8405 24.362 19.7045 23.876 20.474 23.093C20.6765 22.8905 24.1325 19.745 24.2 19.4615C24.2094 19.4186 24.2081 19.374 24.1964 19.3316C24.1846 19.2893 24.1627 19.2505 24.1325 19.2185C24.0515 19.151 23.9435 19.178 23.849 19.1915C23.7275 19.2185 21.8375 20.474 18.152 22.958C17.612 23.3225 17.126 23.5115 16.694 23.498C16.208 23.4845 15.29 23.228 14.6015 22.9985C13.751 22.7285 13.0895 22.58 13.1435 22.1075C13.1705 21.8645 13.508 21.6215 14.1425 21.365C18.0845 19.6505 20.7035 18.5165 22.013 17.9765C25.766 16.4105 26.5355 16.1405 27.0485 16.1405C27.1565 16.1405 27.413 16.1675 27.575 16.3025C27.71 16.4105 27.7505 16.559 27.764 16.667C27.7505 16.748 27.7775 16.991 27.764 17.18Z" fill="#666666" />
                          </svg>
                        </div>
                      </div>
                    </MenuItem>
                  </Menu>
                </>
                :
                ''
              }
            </>
            : ''
          }
        </div>
      </div>
    </header >
  );
};

export default Header;
