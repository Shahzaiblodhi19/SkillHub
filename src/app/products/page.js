"use client";
import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '../layout';

export default function ProductsPage() {
  const productData = [
    {
      id: 7,
      image: 'https://i.ibb.co/z27wtc6/img2.jpg',
      type: 'subscription',
      title: 'The Prompt Mastery Subscription',
      price: '89.00',
      subscribers: '269',
      products: '30',
      lastActivity: 'Modified Nov 15, 2024',
      action: 'View Sales History'
    },
    {
      id: 4,
      image: 'https://i.ibb.co/jJ4GHXP/img1.jpg',
      type: 'course',
      status: 'published',
      title: 'How to Write Better Prompts',
      price: '14.99',
      students: '695',
      lastActivity: 'Created Nov 1, 2024',
      action: 'View Outline'
    },
    {
      id: 2,
      image: 'https://i.ibb.co/z27wtc6/img2.jpg',
      type: 'session',
      status: 'draft',
      title: 'Prompt Mastery 1:1 Coaching',
      price: '85.00',
      students: '125',
      lastActivity: 'Next Session: Nov 25, 2024',
      action: 'View RSVP'
    },
    {
      id: 3,
      image: 'https://i.ibb.co/LJwrLdW/coaching-image.webp',
      type: 'group-session',
      status: 'pending',
      title: 'Group Prompt Engineering Workshop',
      price: '49.00',
      students: '78',
      lastActivity: 'Next Session: Dec 5, 2024',
      action: 'View RSVP'
    },
    {
      id: 1,
      image: 'https://i.ibb.co/k67BZds/community-image1.png',
      type: 'community',
      title: 'The Prompt Collective',
      price: '85.00',
      members: '3.2k',
      posts: '697',
      spaces: '10',
      lastActivity: 'Created Jan 25, 2024',
      action: 'View Sales History'
    },
    {
      id: 5,
      image: 'https://i.ibb.co/jJ4GHXP/img1.jpg',
      type: 'certificate',
      title: 'Certificate of Prompt Mastery',
      price: '10.00',
      certificates: '67',
      lastActivity: 'Updated Oct 15, 2024',
      action: 'View Sales History'
    },
    {
      id: 6,
      image: 'https://i.ibb.co/LJwrLdW/coaching-image.webp',
      type: 'bundle',
      title: 'The Prompt Mastery Bundle',
      price: '89.00',
      subscribers: '269',
      products: '30',
      lastActivity: 'Modified Nov 15, 2024',
      action: 'View Sales History'
    },


    {
      id: 8,
      image: 'https://i.ibb.co/Csdq4rd/newsletter-image.png',
      type: 'school',
      status: 'rejected',
      title: 'Advanced Prompt Engineering',
      price: '199.00',
      students: '0',
      lastActivity: 'Created Nov 20, 2024',
      action: 'View Outline'
    }
  ];

  const [checkedFilters, setCheckedFilters] = useState({});
  const [sortOption, setSortOption] = useState('Newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const context = useContext(MyContext)
  // State for items per page
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const getTypeLabel = (type) => {
    const typeMap = {
      course: 'Course',
      session: '1:1 Session',
      'group-session': 'Group Session',
      school: 'School',
      community: 'Community',
      certificate: 'Certificate',
      bundle: 'Bundle',
      subscription: 'Subscription',
    };
    return typeMap[type] || type.charAt(0).toUpperCase() + type.slice(1);
  };

  const getStatusLabel = (status) => {
    const statusMap = {
      published: 'Published',
      draft: 'Draft',
      pending: 'Pending Approval',
      rejected: 'Rejected',
    };
    return statusMap[status] || '';
  };
  // Normalize the filter value by trimming whitespace and converting to lowercase
  const normalizeFilter = (value) => {
    if (!value) return ""; // Handle null/undefined cases
    const normalizedValue = value.trim().toLowerCase();

    // Map common plural forms or synonyms
    const synonyms = {
      communities: "community",
      courses: "course",
      sessions: "session",
      "group-sessions": "group-session",
      certificates: "certificate",
      bundles: "bundle",
      schools: "school",
    };

    return synonyms[normalizedValue] || (normalizedValue.endsWith("s")
      ? normalizedValue.slice(0, -1)
      : normalizedValue);
  };


  // Filtering logic
  const filteredProducts =
    context.activeFilter === "All Products" || !context.activeFilter
      ? productData
      : productData.filter((product) =>
        normalizeFilter(product.type) === normalizeFilter(context.activeFilter)
      );

  const createCardFooter = (type, product) => {
    const createLinkedItem = (type, config) => {
      return (
        <div className="footer-item">
          <div className="footer-item-group" onClick={() => console.log(`Clicked ${type} group:`, config.items)}>
            <div className="footer-icon-wrapper">
              <div className="footer-icon-circle"></div>
              <div className="footer-icon" dangerouslySetInnerHTML={{ __html: config.icon }}></div>
            </div>
            <div className="footer-content">
              <span className="footer-linked-text">Linked to </span>
              <div className="footer-links-wrapper">
                <span className="footer-links">{config.items.join(' • ')}</span>
                {config.showCount !== false && config.total > config.items.length && (
                  <span className="footer-count">{`${config.total} ${config.itemType}`}</span>
                )}
              </div>
            </div>
            <div className="footer-arrow">
              <svg viewBox="0 0 24 24">
                <path d="M14.29 5.71c-.39.39-.39 1.02 0 1.41L18.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h15.18l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l5.59-5.59c.39-.39.39-1.02 0-1.41l-5.6-5.58c-.38-.39-1.02-.39-1.41 0" />
              </svg>
            </div>
          </div>
        </div>
      );
    };

    if (type === 'course') {
      return (
        <div className="card-footer">
          {createLinkedItem('session', {
            icon: getSessionIcon(),
            items: ['Design Fundamentals', 'UX Principles'],
            total: 5,
            itemType: 'sessions',
          })}
          {createLinkedItem('community', {
            icon: getCommunityIcon(),
            items: ['Prompt Engineering Hub'],
            showCount: false,
          })}
        </div>
      );
    } else if (type === 'session') {
      return (
        <div className="card-footer">
          {createLinkedItem('course', {
            icon: getCourseIcon(),
            items: ['Advanced Prompting', 'Prompt Patterns'],
            total: 5,
            itemType: 'courses',
          })}
          {createLinkedItem('community', {
            icon: getCommunityIcon(),
            items: ['AI Writers Hub', 'Prompt Masters'],
            total: 5,
            itemType: 'communities',
          })}
        </div>
      );
    } else if (type === 'community') {
      return (
        <div className="card-footer">
          {createLinkedItem('course', {
            icon: getCourseIcon(),
            items: ['Prompt Engineering 101', 'Advanced AI Writing'],
            total: 5,
            itemType: 'courses',
          })}
          {createLinkedItem('session', {
            icon: getSessionIcon(),
            items: ['Weekly Workshop', 'Group Practice'],
            total: 5,
            itemType: 'sessions',
          })}
        </div>
      );
    }
    return null;
  };
  const getSessionIcon = () => {
    return `<svg fill="none" viewBox="0 0 24 24">
<path fill="currentColor" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
</svg>`;
  }

  const getCommunityIcon = () => {
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
<path fill="currentColor" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
<path fill="currentColor" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
</svg>`;
  }

  const getCourseIcon = () => {
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
</svg>`;
  }

  const [CourseTooltip, setCourseTooltip] = useState(null)

  const handleTooltipToggle = (productId, product) => {
    if (product.type === 'course') {
      setCourseTooltip((prevId) => (prevId === productId ? null : productId));
    }

  };
  function createProductCard(product) {
    return (
      <div className="product-card" style={{ overflow: 'visible' }} key={product.title}>
        <div className="product-card-main ">
          {/* Product Image */}
          <img src={product.image} alt={product.title} className="product-image" />

          {/* Product Info */}
          <div className="product-info ">
            {/* Title */}
            <h3 className="product-title">{product.title}</h3>

            {/* Meta Section */}
            <div className="product-meta">
              {/* Labels */}
              <div className="product-labels ">
                <span className={`label label-${product.type}`}>{getTypeLabel(product.type)}</span>
                {['course', 'session', 'group-session'].includes(product.type) && product.status && (
                  <span className={`label label-${product.status}`}>{getStatusLabel(product.status)}</span>
                )}
              </div>

              {/* Stats */}
              <div className="product-stats" style={{ marginTop: '6px' }}>
                {product.price && (
                  <div className="stat-item">
                    <svg style={{ marginBottom: '7.4px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path fill="#343332" d="M10.3031 4.71338C10.638 4.71338 10.9096 4.98493 10.9096 5.3199V5.62947C11.7726 5.74654 12.5494 6.11208 13.0363 6.67319C13.2559 6.92617 13.2288 7.30925 12.9758 7.52881C12.7229 7.74837 12.3398 7.72128 12.1202 7.4683C11.8892 7.20209 11.4627 6.96219 10.9096 6.85747V9.13097C11.5063 9.2117 12.0549 9.41056 12.4966 9.70499C13.0803 10.0941 13.5358 10.6984 13.5358 11.4478C13.5358 12.1973 13.0803 12.8015 12.4966 13.1907C12.0549 13.4851 11.5063 13.684 10.9096 13.7647V14.0741C10.9096 14.4091 10.638 14.6806 10.3031 14.6806C9.9681 14.6806 9.69656 14.4091 9.69656 14.0741V13.7645C8.83357 13.6474 8.0568 13.2819 7.5698 12.7208C7.35024 12.4678 7.37733 12.0847 7.63031 11.8652C7.88329 11.6456 8.26636 11.6727 8.48592 11.9257C8.71697 12.1919 9.14345 12.4318 9.69656 12.5365V10.263C9.09982 10.1823 8.55128 9.98342 8.10959 9.68899C7.52581 9.29985 7.07031 8.69563 7.07031 7.94614C7.07031 7.19665 7.52581 6.59244 8.10959 6.2033C8.55128 5.90886 9.09982 5.71 9.69656 5.62928V5.3199C9.69656 4.98493 9.9681 4.71338 10.3031 4.71338ZM9.69656 6.85766C9.33347 6.92644 9.02055 7.0539 8.78241 7.21264C8.4157 7.45709 8.28336 7.7283 8.28336 7.94614C8.28336 8.16399 8.4157 8.4352 8.78241 8.67964C9.02055 8.83839 9.33347 8.96585 9.69656 9.03463V6.85766ZM10.9096 10.3594V12.5363C11.2727 12.4675 11.5856 12.3401 11.8237 12.1813C12.1905 11.9369 12.3228 11.6657 12.3228 11.4478C12.3228 11.23 12.1905 10.9588 11.8237 10.7143C11.5856 10.5556 11.2727 10.4281 10.9096 10.3594Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                      <path fill="#343332" d="M10.3399 2.51392C6.38177 2.51392 3.1731 5.72259 3.1731 9.6807C3.1731 13.6388 6.38177 16.8475 10.3399 16.8475C14.298 16.8475 17.5067 13.6388 17.5067 9.6807C17.5067 5.72259 14.298 2.51392 10.3399 2.51392ZM1.9231 9.6807C1.9231 5.03224 5.69142 1.26392 10.3399 1.26392C14.9883 1.26392 18.7567 5.03224 18.7567 9.6807C18.7567 14.3292 14.9883 18.0975 10.3399 18.0975C5.69142 18.0975 1.9231 14.3292 1.9231 9.6807Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                    <div className='stat-value'>
                      {product.price}
                    </div>
                    <div className="stat-tooltip">${product.price}</div>
                  </div>
                )}
                {product.students && (
                  <div className="stat-item">
                    <svg style={{ marginBottom: '8px' }} fill="none" viewBox="0 0 20 20">
                      <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                    <div className='stat-value'>
                      {product.students}
                    </div>
                    <div className="stat-tooltip">{product.students} students</div>
                  </div>
                )}
                {product.members && (
                  <div className="stat-item">
                    <svg style={{ marginBottom: '8px' }} fill="none" viewBox="0 0 24 24">
                      <path fill="#4F4F4F" d="M5.64124 3.64124C6.53204 2.75044 7.74022 2.25 9 2.25C10.2598 2.25 11.468 2.75044 12.3588 3.64124C13.2496 4.53204 13.75 5.74022 13.75 7C13.75 8.25978 13.2496 9.46796 12.3588 10.3588C11.468 11.2496 10.2598 11.75 9 11.75C7.74022 11.75 6.53204 11.2496 5.64124 10.3588C4.75044 9.46796 4.25 8.25978 4.25 7C4.25 5.74022 4.75044 4.53204 5.64124 3.64124ZM9 3.75C8.13805 3.75 7.3114 4.09241 6.7019 4.7019C6.09241 5.3114 5.75 6.13805 5.75 7C5.75 7.86195 6.09241 8.6886 6.7019 9.2981C7.3114 9.90759 8.13805 10.25 9 10.25C9.86195 10.25 10.6886 9.90759 11.2981 9.2981C11.9076 8.6886 12.25 7.86195 12.25 7C12.25 6.13805 11.9076 5.3114 11.2981 4.7019C10.6886 4.09241 9.86195 3.75 9 3.75ZM15.2734 2.94385C15.3762 2.54258 15.7848 2.30058 16.186 2.40332C17.2078 2.66493 18.1134 3.25915 18.7601 4.09231C19.4068 4.92547 19.7578 5.95018 19.7578 7.00488C19.7578 8.05959 19.4068 9.08429 18.7601 9.91745C18.1134 10.7506 17.2078 11.3448 16.186 11.6064C15.7848 11.7092 15.3762 11.4672 15.2734 11.0659C15.1707 10.6646 15.4127 10.2561 15.814 10.1533C16.5131 9.97433 17.1327 9.56775 17.5752 8.99769C18.0177 8.42763 18.2578 7.72652 18.2578 7.00488C18.2578 6.28325 18.0177 5.58213 17.5752 5.01207C17.1327 4.44201 16.5131 4.03544 15.814 3.85645C15.4127 3.7537 15.1707 3.34512 15.2734 2.94385ZM7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H11C12.2598 14.25 13.468 14.7504 14.3588 15.6412C15.2496 16.532 15.75 17.7402 15.75 19V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V19C14.25 18.138 13.9076 17.3114 13.2981 16.7019C12.6886 16.0924 11.862 15.75 11 15.75H7ZM17.2738 14.9624C17.3774 14.5614 17.7864 14.3202 18.1875 14.4237C19.2026 14.6858 20.1025 15.2763 20.7469 16.1033C21.3913 16.9303 21.744 17.9472 21.75 18.9956L21.75 18.9999L21.75 20.9999C21.75 21.4141 21.4142 21.7499 21 21.7499C20.5858 21.7499 20.25 21.4141 20.25 20.9999V19.002C20.2454 18.2855 20.0041 17.5905 19.5637 17.0253C19.1228 16.4595 18.5071 16.0554 17.8125 15.8761C17.4115 15.7725 17.1703 15.3635 17.2738 14.9624Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                    <div className='stat-value'>
                      {product.members}
                    </div>
                    <div className="stat-tooltip">{product.members} members</div>
                  </div>
                )}
                {product.posts && (
                  <div className="stat-item">
                    <svg style={{ marginBottom: '8px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path fill="#4F4F4F" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                      <path fill="#4F4F4F" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                    <div className='stat-value'>
                      {product.posts}
                    </div>
                    <div className="stat-tooltip">{product.posts} posts</div>
                  </div>
                )}
                {product.spaces && (
                  <div className="stat-item">
                    <svg style={{ marginBottom: '8px' }} fill="none" viewBox="0 0 20 20" height="20" width="20" id="icon-20-spaces-v3" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="currentColor" d="M3 5C3 3.89543 3.89543 3 5 3H6.44444C7.54901 3 8.44444 3.89543 8.44444 5V6.44444C8.44444 7.54901 7.54901 8.44444 6.44444 8.44444H5C3.89543 8.44444 3 7.54901 3 6.44444V5Z"></path>
                      <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="currentColor" d="M11.5555 5C11.5555 3.89543 12.451 3 13.5555 3H15C16.1046 3 17 3.89543 17 5V6.44444C17 7.54901 16.1046 8.44444 15 8.44444H13.5555C12.451 8.44444 11.5555 7.54901 11.5555 6.44444V5Z"></path>
                      <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="currentColor" d="M3 13.5557C3 12.4511 3.89543 11.5557 5 11.5557H6.44444C7.54901 11.5557 8.44444 12.4511 8.44444 13.5557V15.0001C8.44444 16.1047 7.54901 17.0001 6.44444 17.0001H5C3.89543 17.0001 3 16.1047 3 15.0001V13.5557Z"></path>
                      <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="currentColor" d="M11.5555 13.5557C11.5555 12.4511 12.451 11.5557 13.5555 11.5557H15C16.1046 11.5557 17 12.4511 17 13.5557V15.0001C17 16.1047 16.1046 17.0001 15 17.0001H13.5555C12.451 17.0001 11.5555 16.1047 11.5555 15.0001V13.5557Z"></path>
                    </svg>
                    <div className='stat-value'>
                      {product.spaces}
                    </div>
                    <div className="stat-tooltip">{product.spaces} spaces</div>
                  </div>
                )}
                {product.certificates && (
                  <div className="stat-item">
                    <svg style={{ marginBottom: '8px' }} fill="none" viewBox="0 0 32 32">
                      <path fill="#333333" d="M6.66667 7.66406C5.75228 7.66406 5 8.41635 5 9.33073V22.6641C5 23.1061 5.17559 23.53 5.48816 23.8426C5.80072 24.1551 6.22464 24.3307 6.66667 24.3307H13.3333C13.8856 24.3307 14.3333 24.7784 14.3333 25.3307C14.3333 25.883 13.8856 26.3307 13.3333 26.3307H6.66667C5.69421 26.3307 4.76157 25.9444 4.07394 25.2568C3.38631 24.5692 3 23.6365 3 22.6641V9.33073C3 7.31178 4.64772 5.66406 6.66667 5.66406H25.3333C26.3058 5.66406 27.2384 6.05037 27.9261 6.738C28.6137 7.42564 29 8.35827 29 9.33073V22.6651C28.9993 23.3081 28.8296 23.9396 28.5078 24.4963C28.186 25.053 27.7235 25.5153 27.1667 25.8368C26.6884 26.1129 26.0768 25.949 25.8006 25.4707C25.5245 24.9924 25.6884 24.3808 26.1667 24.1047C26.4198 23.9586 26.63 23.7484 26.7763 23.4954C26.9226 23.2424 26.9997 22.9553 27 22.663V9.33073C27 8.8887 26.8244 8.46478 26.5118 8.15222C26.1993 7.83966 25.7754 7.66406 25.3333 7.66406H6.66667ZM7 11.9974C7 11.4451 7.44772 10.9974 8 10.9974H24C24.5523 10.9974 25 11.4451 25 11.9974C25 12.5497 24.5523 12.9974 24 12.9974H8C7.44772 12.9974 7 12.5497 7 11.9974ZM7 15.9974C7 15.4451 7.44772 14.9974 8 14.9974H12C12.5523 14.9974 13 15.4451 13 15.9974C13 16.5497 12.5523 16.9974 12 16.9974H8C7.44772 16.9974 7 16.5497 7 15.9974ZM20 16.9974C18.3431 16.9974 17 18.3405 17 19.9974C17 21.6543 18.3431 22.9974 20 22.9974C21.6569 22.9974 23 21.6543 23 19.9974C23 18.3405 21.6569 16.9974 20 16.9974ZM15 19.9974C15 17.236 17.2386 14.9974 20 14.9974C22.7614 14.9974 25 17.236 25 19.9974C25 21.3101 24.4941 22.5047 23.6667 23.3968V29.3307C23.6667 29.7095 23.4527 30.0558 23.1139 30.2252C22.7751 30.3946 22.3697 30.358 22.0667 30.1307L20 28.5807L17.9333 30.1307C17.6303 30.358 17.2249 30.3946 16.8861 30.2252C16.5473 30.0558 16.3333 29.7095 16.3333 29.3307V23.3968C15.5059 22.5047 15 21.3101 15 19.9974ZM18.3333 24.7129V27.3307L19.4 26.5307C19.7556 26.2641 20.2444 26.2641 20.6 26.5307L21.6667 27.3307V24.7129C21.1454 24.8971 20.5844 24.9974 20 24.9974C19.4156 24.9974 18.8546 24.8971 18.3333 24.7129ZM7 19.9974C7 19.4451 7.44772 18.9974 8 18.9974H10.6667C11.219 18.9974 11.6667 19.4451 11.6667 19.9974C11.6667 20.5497 11.219 20.9974 10.6667 20.9974H8C7.44772 20.9974 7 20.5497 7 19.9974Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                    <div className='stat-value'>
                      {product.certificates}
                    </div>
                    <div className="stat-tooltip">{product.certificates} issued</div>
                  </div>
                )}
                {product.subscribers && (
                  <div className="stat-item">
                    <svg style={{ marginBottom: '8px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path fill="#333333" d="M17 12.7992V13.5992C17.4418 13.5992 17.8 13.241 17.8 12.7992H17ZM17 8.39922H17.8C17.8 7.95739 17.4418 7.59922 17 7.59922V8.39922ZM4.96739 4.12628C4.59574 4.3652 4.48814 4.86017 4.72706 5.23183C4.96598 5.60348 5.46095 5.71108 5.83261 5.47216L4.96739 4.12628ZM11 1.19922L11.6315 0.708066C11.3773 0.381231 10.9157 0.302372 10.5674 0.526276L11 1.19922ZM13.1685 5.29037C13.4398 5.63913 13.9424 5.70196 14.2912 5.4307C14.6399 5.15945 14.7027 4.65682 14.4315 4.30807L13.1685 5.29037ZM17 11.9992H14.4V13.5992H17V11.9992ZM14.4 9.19922H17V7.59922H14.4V9.19922ZM16.2 8.39922V12.7992H17.8V8.39922H16.2ZM13 10.5992C13 9.82602 13.6268 9.19922 14.4 9.19922V7.59922C12.7431 7.59922 11.4 8.94237 11.4 10.5992H13ZM14.4 11.9992C13.6268 11.9992 13 11.3724 13 10.5992H11.4C11.4 12.2561 12.7431 13.5992 14.4 13.5992V11.9992ZM5.83261 5.47216L11.4326 1.87216L10.5674 0.526276L4.96739 4.12628L5.83261 5.47216ZM10.3685 1.69037L13.1685 5.29037L14.4315 4.30807L11.6315 0.708066L10.3685 1.69037ZM1.8 5.59922H15.4V3.99922H1.8V5.59922ZM15.4 15.9992H1.8V17.5992H15.4V15.9992ZM1.8 15.9992V5.59922H0.2V15.9992H1.8ZM1.8 15.9992H1.8H0.2C0.2 16.8829 0.916343 17.5992 1.8 17.5992V15.9992ZM15.4 15.9992H15.4V17.5992C16.2837 17.5992 17 16.8829 17 15.9992H15.4ZM15.4 5.59922H15.4H17C17 4.71556 16.2837 3.99922 15.4 3.99922V5.59922ZM1.8 3.99922C0.916344 3.99922 0.2 4.71556 0.2 5.59922H1.8H1.8V3.99922ZM15.4 13.3992V15.9992H17V13.3992H15.4ZM15.4 5.59922V7.69922H17V5.59922H15.4Z"></path>
                    </svg>
                    <div className='stat-value'>
                      {product.subscribers}
                    </div>
                    <div className="stat-tooltip">{product.subscribers} subscribers</div>
                  </div>
                )}
                {product.products && (
                  <div className="stat-item">
                    <svg style={{ marginBottom: '7px' }} width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h6v6h-6z"></path><path d="M14 4h6v6h-6z"></path><path d="M4 14h6v6h-6z"></path><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path></svg>
                    <div className='stat-value'>
                      {product.products}
                    </div>
                    <div className="stat-tooltip">{product.products} products</div>
                  </div>
                )}
                <div className="stat-item">
                  <svg style={{ marginBottom: '8px' }} fill="none" viewBox="0 0 20 20">
                    <path fill="#4F4F4F" d="M6.66671 1.75C7.08092 1.75 7.41671 2.08579 7.41671 2.5V3.41667H12.5834V2.5C12.5834 2.08579 12.9192 1.75 13.3334 1.75C13.7476 1.75 14.0834 2.08579 14.0834 2.5V3.41667H15C15.641 3.41667 16.2557 3.67128 16.7089 4.12449C17.1621 4.5777 17.4167 5.19239 17.4167 5.83333V15.8333C17.4167 16.4743 17.1621 17.089 16.7089 17.5422C16.2557 17.9954 15.641 18.25 15 18.25H5.00004C4.3591 18.25 3.74441 17.9954 3.2912 17.5422C2.83799 17.089 2.58337 16.4743 2.58337 15.8333V5.83333C2.58337 5.19239 2.83799 4.5777 3.2912 4.12449C3.74441 3.67128 4.3591 3.41667 5.00004 3.41667H5.91671V2.5C5.91671 2.08579 6.25249 1.75 6.66671 1.75ZM5.91671 4.91667H5.00004C4.75693 4.91667 4.52377 5.01324 4.35186 5.18515C4.17995 5.35706 4.08337 5.59022 4.08337 5.83333V8.41667H15.9167V5.83333C15.9167 5.59022 15.8201 5.35706 15.6482 5.18515C15.4763 5.01324 15.2432 4.91667 15 4.91667H14.0834V5.83333C14.0834 6.24755 13.7476 6.58333 13.3334 6.58333C12.9192 6.58333 12.5834 6.24755 12.5834 5.83333V4.91667H7.41671V5.83333C7.41671 6.24755 7.08092 6.58333 6.66671 6.58333C6.25249 6.58333 5.91671 6.24755 5.91671 5.83333V4.91667ZM15.9167 9.91667H4.08337V15.8333C4.08337 16.0764 4.17995 16.3096 4.35186 16.4815C4.52377 16.6534 4.75693 16.75 5.00004 16.75H15C15.2432 16.75 15.4763 16.6534 15.6482 16.4815C15.8201 16.3096 15.9167 16.0764 15.9167 15.8333V9.91667ZM8.41671 12.5C8.41671 12.0858 8.75249 11.75 9.16671 11.75H10C10.4143 11.75 10.75 12.0858 10.75 12.5V15C10.75 15.4142 10.4143 15.75 10 15.75C9.58583 15.75 9.25004 15.4142 9.25004 15V13.25H9.16671C8.75249 13.25 8.41671 12.9142 8.41671 12.5Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg>
                  <div className='stat-value'>
                    {product.lastActivity}
                  </div>
                  <div className="stat-tooltip">{product.lastActivity}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <div className="product-actions" >
            <button className="product-btn " >{product.action}</button>


            <button className="options-button " onClick={() => handleTooltipToggle(product.id, product)}>
              <svg viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
            <div className="pager" >
              {CourseTooltip === product.id &&
                <>
                  <div className={`course-tooltip active`}>
                    {tooltipData.map((item, index) => (
                      <div
                        key={index}
                        className="tooltip-item"
                        onClick={() => {
                          if (item.modal) handleOpenModal(item.modal);
                        }}
                      >
                        <div className="tooltip-icon">
                          {item.icon}
                        </div>
                        <span className="tooltip-text">{item.text}</span>
                        {item.arrow}
                        {item.nested && (
                          <div className="nested-tooltip">
                            {item.nested.map((nestedItem, idx) => (
                              <div key={idx} className="bundle-item">
                                <img className='bundle-image' src={nestedItem.img} alt={nestedItem.name} />
                                <div className="bundle-details">
                                  <div className="bundle-name">{nestedItem.name}</div>
                                </div>
                                <div className="bundle-price">{nestedItem.price}</div>
                                <svg class="bundle-check" viewBox="0 0 24 24">
                                  <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {modalData && (
                    <div className={`modal-overlay ${modalData !== null ? 'active' : ''}`} onClick={handleCloseModal}>
                      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={modalData.image} alt={modalData.title} className="modal-image" />
                        <div className="modal-title">{modalData.title}</div>
                        <div className="modal-price">{modalData.price}</div>
                        <div className="modal-buttons">
                          {modalData.buttons.map((button, idx) => (
                            <button
                              key={idx}
                              className={`modal-button ${button.type}`}
                              onClick={() => {
                                if (button.type === "cancel") handleCloseModal();
                                if (button.type === "submit") {
                                  console.log("Submit clicked");
                                  handleCloseModal();
                                }
                              }}
                            >
                              {button.text}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              }
            </div>
          </div>
        </div>
        <div className='footer-card w-100'>
          {/* Footer */}
          {['course', 'community', 'certificate', 'session', 'group-session'].includes(product.type) && (
            createCardFooter(product.type, product)
          )}</div>
      </div>
    );
  }


  const handleFilterClick = (filter) => {
    setCheckedFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };
  const originalTotalProducts = productData.length;
  const filteredData = productData.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());

    // Ensure filters check against any selected filter, not all
    const activeFilters = Object.keys(checkedFilters).filter((key) => checkedFilters[key]);
    const matchesFilters =
      activeFilters.length === 0 || // No filters selected
      (product.status && activeFilters.some((filter) => product.status.toLowerCase() === filter.toLowerCase()));

    return matchesSearch && matchesFilters;
  });


  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortOption) {
      case 'Newest':
        return new Date(b.lastActivity) - new Date(a.lastActivity);
      case 'Title: A-Z':
        return a.title.localeCompare(b.title);
      case 'Title: Z-A':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });


  const totalProducts = context.activeFilter === "All Products" || !context.activeFilter
    ? productData.length // Total products without filtering
    : filteredProducts.length; // Total products after filtering

  const startIndex =
    totalProducts > 0
      ? (currentPage - 1) * itemsPerPage + 1
      : 0; // Start index of current page

  const endIndex = Math.min(
    currentPage * itemsPerPage,
    totalProducts
  );
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const renderPagination = () => (
    <div className="page-controls">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="page-button"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx}
          className={currentPage === idx + 1 ? 'active page-button' : 'page-button '}
          onClick={() => setCurrentPage(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        className="page-button"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (item) => {
    console.log(`Creating a new ${item}`);
    setIsMenuOpen(false); // Close menu after selecting an option
    if (item === 'school') {
      context.setIsSchoolModal(!context.isSchoolModal);
    }
    if (item === 'Course') {
      context.setAddCourseModal(!context.AddCourseModal);
    }
    if (item === 'Bundle') {
      context.setAddBundleModal(!context.AddBundleModal)
    }
  };


  const tooltipData = [
    {
      action: "request-approval",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="currentColor" d="M7.5 10H12.5"></path>
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="currentColor" d="M10 7.5V12.5"></path>
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.6" stroke="currentColor" d="M2.5 4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667Z"></path>
      </svg>,
      text: "Request Approval",
      modal: {
        title: "Advanced Web Development Masterclass",
        price: "$199.99",
        image: "https://i.ibb.co/640kJN2/c1.jpg",
        buttons: [
          { type: "cancel", text: "Cancel" },
          { type: "submit", text: "Submit Request" },
        ],
      },
    },
    {
      action: "edit-landing-page",
      icon: <svg fill="none" viewBox="0 0 20 20">
        <path fill="currentColor" d="M4.16671 4.08331C4.14461 4.08331 4.12341 4.09209 4.10778 4.10772C4.09215 4.12335 4.08337 4.14455 4.08337 4.16665V5.91665H5.91671V4.08331H4.16671ZM4.16671 2.58331C3.74678 2.58331 3.34405 2.75013 3.04712 3.04706C2.75019 3.34399 2.58337 3.74672 2.58337 4.16665V15.8333C2.58337 16.2532 2.75019 16.656 3.04712 16.9529C3.34406 17.2498 3.74678 17.4166 4.16671 17.4166H15.8334C16.2533 17.4166 16.656 17.2498 16.953 16.9529C17.2499 16.656 17.4167 16.2532 17.4167 15.8333V4.16665C17.4167 3.74672 17.2499 3.34399 16.953 3.04706C16.656 2.75013 16.2533 2.58331 15.8334 2.58331H4.16671ZM7.41671 4.08331V5.91665H15.9167V4.16665C15.9167 4.14454 15.9079 4.12335 15.8923 4.10772C15.8767 4.09209 15.8555 4.08331 15.8334 4.08331H7.41671ZM15.9167 7.41665H4.08337V15.8333C4.08337 15.8554 4.09215 15.8766 4.10778 15.8922C4.12341 15.9079 4.1446 15.9166 4.16671 15.9166H15.8334C15.8555 15.9166 15.8767 15.9079 15.8923 15.8922C15.9079 15.8766 15.9167 15.8554 15.9167 15.8333V7.41665Z" clip-rule="evenodd" fill-rule="evenodd"></path>
        <path fill="currentColor" d="M7.6529 11.25C8.54057 12.2158 9.3248 12.5834 9.99996 12.5834C10.6751 12.5834 11.4593 12.2158 12.347 11.25C11.4593 10.2842 10.6751 9.91669 9.99996 9.91669C9.3248 9.91669 8.54057 10.2842 7.6529 11.25ZM9.99996 8.41669C11.4473 8.41669 12.7509 9.32129 13.919 10.7815C14.1381 11.0554 14.1381 11.4446 13.919 11.7185C12.7509 13.1787 11.4473 14.0834 9.99996 14.0834C8.55263 14.0834 7.24902 13.1787 6.08095 11.7185C5.86185 11.4446 5.86185 11.0554 6.08095 10.7815C7.24902 9.32129 8.55263 8.41669 9.99996 8.41669ZM9.24329 11.2502C9.24329 10.8359 9.57907 10.5002 9.99329 10.5002H9.99995C10.4142 10.5002 10.75 10.8359 10.75 11.2502C10.75 11.6644 10.4142 12.0002 9.99995 12.0002H9.99329C9.57907 12.0002 9.24329 11.6644 9.24329 11.2502Z" clip-rule="evenodd" fill-rule="evenodd"></path>
      </svg>,
      text: "Edit Landing Page",
      modal: null,
    },
    {
      action: "add-to-bundle",
      icon: <svg fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3 1h18a3 3 0 0 1 3 3v8H2v5a1 1 0 0 0 1 1h7v2H3a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3ZM2 4v2h20V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm11.8 10.81a2.7 2.7 0 0 1 4.2.43 2.7 2.7 0 0 1 4.2-.43 2.8 2.8 0 0 1 0 3.92L18 23l-4.2-4.27a2.8 2.8 0 0 1 0-3.92Z" clip-rule="evenodd" fill-rule="evenodd"></path>
      </svg>,
      text: "Add to Bundle",
      nested: [
        {
          name: "Web Development Pro",
          price: "$199.99",
          img: "https://i.ibb.co/640kJN2/c1.jpg",
        },
        {
          name: "Data Science Master",
          price: "$249.99",
          img: "https://i.ibb.co/NKffPZQ/c4.jpg",
        },
        {
          name: "UI/UX Design Elite",
          price: "$179.99",
          img: "https://i.ibb.co/rkkdzYx/c6.jpg",
        },
      ],
      arrow: <svg class="bundle-arrow" viewBox="0 0 25 40">
        <path d="M0.494387 4.20556C0.221231 4.47872 0.22099 4.92152 0.493848 5.19497L14.7733 19.5056C15.0459 19.7788 15.0459 20.2212 14.7733 20.4944L0.493849 34.805C0.220991 35.0785 0.221231 35.5213 0.494388 35.7944L4.20498 39.505C4.47834 39.7784 4.92156 39.7784 5.19493 39.505L24.205 20.495C24.4783 20.2216 24.4783 19.7784 24.205 19.505L5.19493 0.494976C4.92156 0.221609 4.47834 0.221608 4.20498 0.494975L0.494387 4.20556Z"></path>
      </svg>,
    },
    {
      action: "link-to-session",
      icon: <svg fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
      </svg>,
      text: "Link to Session",
      nested: [
        {
          name: "Advanced JavaScript Concepts",
          price: "$199.99",
          img: "https://i.ibb.co/640kJN2/c1.jpg",
        },
        {
          name: "React Performance Workshop",
          price: "$249.00",
          img: "https://i.ibb.co/NKffPZQ/c4.jpg",
        },
        {
          name: "System Design Deep Dive",
          price: "$99",
          img: "https://i.ibb.co/rkkdzYx/c6.jpg",
        },
      ],
      arrow: <svg class="bundle-arrow" viewBox="0 0 25 40">
        <path d="M0.494387 4.20556C0.221231 4.47872 0.22099 4.92152 0.493848 5.19497L14.7733 19.5056C15.0459 19.7788 15.0459 20.2212 14.7733 20.4944L0.493849 34.805C0.220991 35.0785 0.221231 35.5213 0.494388 35.7944L4.20498 39.505C4.47834 39.7784 4.92156 39.7784 5.19493 39.505L24.205 20.495C24.4783 20.2216 24.4783 19.7784 24.205 19.505L5.19493 0.494976C4.92156 0.221609 4.47834 0.221608 4.20498 0.494975L0.494387 4.20556Z"></path>
      </svg>,
    },
    {
      action: "add-to-subscription",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
        <path fill="currentColor" d="M17 12.7992V13.5992C17.4418 13.5992 17.8 13.241 17.8 12.7992H17ZM17 8.39922H17.8C17.8 7.95739 17.4418 7.59922 17 7.59922V8.39922ZM4.96739 4.12628C4.59574 4.3652 4.48814 4.86017 4.72706 5.23183C4.96598 5.60348 5.46095 5.71108 5.83261 5.47216L4.96739 4.12628ZM11 1.19922L11.6315 0.708066C11.3773 0.381231 10.9157 0.302372 10.5674 0.526276L11 1.19922ZM13.1685 5.29037C13.4398 5.63913 13.9424 5.70196 14.2912 5.4307C14.6399 5.15945 14.7027 4.65682 14.4315 4.30807L13.1685 5.29037ZM17 11.9992H14.4V13.5992H17V11.9992ZM14.4 9.19922H17V7.59922H14.4V9.19922ZM16.2 8.39922V12.7992H17.8V8.39922H16.2ZM13 10.5992C13 9.82602 13.6268 9.19922 14.4 9.19922V7.59922C12.7431 7.59922 11.4 8.94237 11.4 10.5992H13ZM14.4 11.9992C13.6268 11.9992 13 11.3724 13 10.5992H11.4C11.4 12.2561 12.7431 13.5992 14.4 13.5992V11.9992ZM5.83261 5.47216L11.4326 1.87216L10.5674 0.526276L4.96739 4.12628L5.83261 5.47216ZM10.3685 1.69037L13.1685 5.29037L14.4315 4.30807L11.6315 0.708066L10.3685 1.69037ZM1.8 5.59922H15.4V3.99922H1.8V5.59922ZM15.4 15.9992H1.8V17.5992H15.4V15.9992ZM1.8 15.9992V5.59922H0.2V15.9992H1.8ZM1.8 15.9992H1.8H0.2C0.2 16.8829 0.916343 17.5992 1.8 17.5992V15.9992ZM15.4 15.9992H15.4V17.5992C16.2837 17.5992 17 16.8829 17 15.9992H15.4ZM15.4 5.59922H15.4H17C17 4.71556 16.2837 3.99922 15.4 3.99922V5.59922ZM1.8 3.99922C0.916344 3.99922 0.2 4.71556 0.2 5.59922H1.8H1.8V3.99922ZM15.4 13.3992V15.9992H17V13.3992H15.4ZM15.4 5.59922V7.69922H17V5.59922H15.4Z"></path>
      </svg>,
      text: "Add to Subscription",
      nested: [
        {
          name: "Pro Developer Plan",
          price: "$49/mo",
          img: "https://i.ibb.co/640kJN2/c1.jpg",
        },
        {
          name: "Enterprise Team",
          price: "$299/mo",
          img: "https://i.ibb.co/NKffPZQ/c4.jpg",
        },
        {
          name: "Student Access",
          price: "$29/mo",
          img: "https://i.ibb.co/rkkdzYx/c6.jpg",
        },
      ],
      arrow: <svg class="bundle-arrow" viewBox="0 0 25 40">
        <path d="M0.494387 4.20556C0.221231 4.47872 0.22099 4.92152 0.493848 5.19497L14.7733 19.5056C15.0459 19.7788 15.0459 20.2212 14.7733 20.4944L0.493849 34.805C0.220991 35.0785 0.221231 35.5213 0.494388 35.7944L4.20498 39.505C4.47834 39.7784 4.92156 39.7784 5.19493 39.505L24.205 20.495C24.4783 20.2216 24.4783 19.7784 24.205 19.505L5.19493 0.494976C4.92156 0.221609 4.47834 0.221608 4.20498 0.494975L0.494387 4.20556Z"></path>
      </svg>,
    },
    {
      action: "edit-price",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path fill="currentColor" d="M10.3031 4.71338C10.638 4.71338 10.9096 4.98493 10.9096 5.3199V5.62947C11.7726 5.74654 12.5494 6.11208 13.0363 6.67319C13.2559 6.92617 13.2288 7.30925 12.9758 7.52881C12.7229 7.74837 12.3398 7.72128 12.1202 7.4683C11.8892 7.20209 11.4627 6.96219 10.9096 6.85747V9.13097C11.5063 9.2117 12.0549 9.41056 12.4966 9.70499C13.0803 10.0941 13.5358 10.6984 13.5358 11.4478C13.5358 12.1973 13.0803 12.8015 12.4966 13.1907C12.0549 13.4851 11.5063 13.684 10.9096 13.7647V14.0741C10.9096 14.4091 10.638 14.6806 10.3031 14.6806C9.9681 14.6806 9.69656 14.4091 9.69656 14.0741V13.7645C8.83357 13.6474 8.0568 13.2819 7.5698 12.7208C7.35024 12.4678 7.37733 12.0847 7.63031 11.8652C7.88329 11.6456 8.26636 11.6727 8.48592 11.9257C8.71697 12.1919 9.14345 12.4318 9.69656 12.5365V10.263C9.09982 10.1823 8.55128 9.98342 8.10959 9.68899C7.52581 9.29985 7.07031 8.69563 7.07031 7.94614C7.07031 7.19665 7.52581 6.59244 8.10959 6.2033C8.55128 5.90886 9.09982 5.71 9.69656 5.62928V5.3199C9.69656 4.98493 9.9681 4.71338 10.3031 4.71338ZM9.69656 6.85766C9.33347 6.92644 9.02055 7.0539 8.78241 7.21264C8.4157 7.45709 8.28336 7.7283 8.28336 7.94614C8.28336 8.16399 8.4157 8.4352 8.78241 8.67964C9.02055 8.83839 9.33347 8.96585 9.69656 9.03463V6.85766ZM10.9096 10.3594V12.5363C11.2727 12.4675 11.5856 12.3401 11.8237 12.1813C12.1905 11.9369 12.3228 11.6657 12.3228 11.4478C12.3228 11.23 12.1905 10.9588 11.8237 10.7143C11.5856 10.5556 11.2727 10.4281 10.9096 10.3594Z" clip-rule="evenodd" fill-rule="evenodd"></path>
        <path fill="currentColor" d="M10.3399 2.51392C6.38177 2.51392 3.1731 5.72259 3.1731 9.6807C3.1731 13.6388 6.38177 16.8475 10.3399 16.8475C14.298 16.8475 17.5067 13.6388 17.5067 9.6807C17.5067 5.72259 14.298 2.51392 10.3399 2.51392ZM1.9231 9.6807C1.9231 5.03224 5.69142 1.26392 10.3399 1.26392C14.9883 1.26392 18.7567 5.03224 18.7567 9.6807C18.7567 14.3292 14.9883 18.0975 10.3399 18.0975C5.69142 18.0975 1.9231 14.3292 1.9231 9.6807Z" clip-rule="evenodd" fill-rule="evenodd"></path>
      </svg>,
      text: "Edit Price",
      modal: null,
    },
    {
      action: "edit-settings",
      icon: <svg class="tabler-icon tabler-icon-settings" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
      </svg>,
      text: "Edit Settings",
      modal: null,
    },
    {
      action: "edit-course-activities",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
        <path fill="currentColor" d="M8.00008 6.33331C7.91168 6.33331 7.82689 6.36843 7.76438 6.43094C7.70187 6.49346 7.66675 6.57824 7.66675 6.66665V25.3333C7.66675 25.4217 7.70187 25.5065 7.76438 25.569C7.82689 25.6315 7.91167 25.6666 8.00008 25.6666H11.0001V6.33331H8.00008ZM8.00008 4.33331C7.38124 4.33331 6.78775 4.57915 6.35017 5.01673C5.91258 5.45432 5.66675 6.04781 5.66675 6.66665V25.3333C5.66675 25.9522 5.91258 26.5456 6.35017 26.9832C6.78775 27.4208 7.38124 27.6666 8.00008 27.6666H11.0001V29.3333C11.0001 29.8856 11.4478 30.3333 12.0001 30.3333C12.5524 30.3333 13.0001 29.8856 13.0001 29.3333V27.6666H22.6667C23.6392 27.6666 24.5718 27.2803 25.2595 26.5927C25.9471 25.9051 26.3334 24.9724 26.3334 24V7.99998C26.3334 7.02752 25.9471 6.09489 25.2595 5.40725C24.5718 4.71962 23.6392 4.33331 22.6667 4.33331H8.00008ZM13.0001 6.33331V25.6666H22.6667C23.1088 25.6666 23.5327 25.4911 23.8453 25.1785C24.1578 24.8659 24.3334 24.442 24.3334 24V7.99998C24.3334 7.55795 24.1578 7.13403 23.8453 6.82147C23.5327 6.50891 23.1088 6.33331 22.6667 6.33331H13.0001ZM16.3334 10.6666C16.3334 10.1144 16.7811 9.66665 17.3334 9.66665H20.0001C20.5524 9.66665 21.0001 10.1144 21.0001 10.6666C21.0001 11.2189 20.5524 11.6666 20.0001 11.6666H17.3334C16.7811 11.6666 16.3334 11.2189 16.3334 10.6666ZM16.3334 16C16.3334 15.4477 16.7811 15 17.3334 15H20.0001C20.5524 15 21.0001 15.4477 21.0001 16C21.0001 16.5523 20.5524 17 20.0001 17H17.3334C16.7811 17 16.3334 16.5523 16.3334 16Z" clip-rule="evenodd" fill-rule="evenodd"></path>
      </svg>,
      text: "Edit Course Activities",
      modal: null,
    },
    {
      action: "view-course-details",
      icon: <svg fill="none" viewBox="0 0 20 20">
        <path fill="currentColor" d="M3.38189 10C5.24313 12.9154 7.45153 14.25 10 14.25C12.5485 14.25 14.7569 12.9154 16.6181 10C14.7569 7.0846 12.5485 5.75 10 5.75C7.45153 5.75 5.24313 7.0846 3.38189 10ZM1.85688 9.61413C3.94664 6.13119 6.65833 4.25 10 4.25C13.3417 4.25 16.0534 6.13119 18.1431 9.61413C18.2856 9.85164 18.2856 10.1484 18.1431 10.3859C16.0534 13.8688 13.3417 15.75 10 15.75C6.65833 15.75 3.94664 13.8688 1.85688 10.3859C1.71437 10.1484 1.71437 9.85164 1.85688 9.61413ZM8.29116 8.29116C8.74437 7.83795 9.35906 7.58333 10 7.58333C10.6409 7.58333 11.2556 7.83795 11.7088 8.29116C12.1621 8.74437 12.4167 9.35906 12.4167 10C12.4167 10.6409 12.1621 11.2556 11.7088 11.7088C11.2556 12.1621 10.6409 12.4167 10 12.4167C9.35906 12.4167 8.74437 12.1621 8.29116 11.7088C7.83795 11.2556 7.58333 10.6409 7.58333 10C7.58333 9.35906 7.83795 8.74437 8.29116 8.29116ZM10 9.08333C9.75689 9.08333 9.52373 9.17991 9.35182 9.35182C9.17991 9.52373 9.08333 9.75689 9.08333 10C9.08333 10.2431 9.17991 10.4763 9.35182 10.6482C9.52373 10.8201 9.75689 10.9167 10 10.9167C10.2431 10.9167 10.4763 10.8201 10.6482 10.6482C10.8201 10.4763 10.9167 10.2431 10.9167 10C10.9167 9.75689 10.8201 9.52373 10.6482 9.35182C10.4763 9.17991 10.2431 9.08333 10 9.08333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
      </svg>,
      text: "View Course Details Page",
      modal: null,
    },
    {
      action: "view-report",
      icon: <svg fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3.71863 3.71841C4.25138 3.18562 4.97399 2.88635 5.72738 2.88635H18.2728C19.0262 2.88635 19.7488 3.18561 20.2816 3.71841C20.8145 4.25117 21.1137 4.97382 21.1137 5.72726V18.2727C21.1137 19.0261 20.8145 19.7487 20.2817 20.2815C20.2817 20.2815 20.2817 20.2815 20.2816 20.2815C20.2816 20.2815 20.2816 20.2816 20.2816 20.2816C19.7488 20.8144 19.0262 21.1136 18.2728 21.1136H5.72738C4.97394 21.1136 4.25129 20.8143 3.71853 20.2815C3.18574 19.7487 2.88647 19.0261 2.88647 18.2727V5.72726C2.88647 4.97387 3.18574 4.25126 3.71853 3.71851C3.71856 3.71848 3.7186 3.71844 3.71863 3.71841ZM5.72738 4.38635C5.37173 4.38635 5.03068 4.52763 4.77929 4.77907L4.77919 4.77917C4.52776 5.03056 4.38647 5.37161 4.38647 5.72726V18.2727C4.38647 18.6284 4.52776 18.9694 4.77919 19.2208L4.77929 19.2209C5.03068 19.4723 5.37173 19.6136 5.72738 19.6136H18.2728C18.6285 19.6136 18.9695 19.4723 19.2209 19.2209L19.221 19.2208C19.4725 18.9694 19.6137 18.6284 19.6137 18.2727V5.72726C19.6137 5.37161 19.4725 5.03056 19.221 4.77917L19.2209 4.77907C18.9695 4.52764 18.6285 4.38635 18.2728 4.38635H5.72738ZM16.1819 7.06817C16.5961 7.06817 16.9319 7.40396 16.9319 7.81817V16.1818C16.9319 16.596 16.5961 16.9318 16.1819 16.9318C15.7677 16.9318 15.4319 16.596 15.4319 16.1818V7.81817C15.4319 7.40396 15.7677 7.06817 16.1819 7.06817ZM12.0001 10.2045C12.4143 10.2045 12.7501 10.5403 12.7501 10.9545V16.1818C12.7501 16.596 12.4143 16.9318 12.0001 16.9318C11.5859 16.9318 11.2501 16.596 11.2501 16.1818V10.9545C11.2501 10.5403 11.5859 10.2045 12.0001 10.2045ZM7.81829 13.3409C8.23251 13.3409 8.56829 13.6767 8.56829 14.0909V16.1818C8.56829 16.596 8.23251 16.9318 7.81829 16.9318C7.40408 16.9318 7.06829 16.596 7.06829 16.1818V14.0909C7.06829 13.6767 7.40408 13.3409 7.81829 13.3409Z" clip-rule="evenodd" fill-rule="evenodd"></path>
      </svg>,
      text: "View Report",
      modal: null,
    },
    {
      action: "view-linked-community",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path fill="currentColor" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
        <path fill="#4F4F4F" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
      </svg>,
      text: "View Linked Community",
      modal: null,
    },
    {
      action: "send-email",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17" height="17" width="16">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="currentColor" d="M2.66659 3.1665H13.3333C14.0666 3.1665 14.6666 3.7665 14.6666 4.49984V12.4998C14.6666 13.2332 14.0666 13.8332 13.3333 13.8332H2.66659C1.93325 13.8332 1.33325 13.2332 1.33325 12.4998V4.49984C1.33325 3.7665 1.93325 3.1665 2.66659 3.1665Z"></path>
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="currentColor" d="M14.6666 4.5L7.99992 9.16667L1.33325 4.5"></path>
      </svg>,
      text: "New Announcement",
      modal: null,
    },
  ];
  // Calculate counts for each product type
  const productTypeCounts = productData.reduce((acc, product) => {
    acc[product.type] = (acc[product.type] || 0) + 1;
    return acc;
  }, {});
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (modal) => setModalData(modal);
  const handleCloseModal = () => setModalData(null);

  const tooltipItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#4F4F4F" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h6v6h-6z"></path><path d="M14 4h6v6h-6z"></path><path d="M4 14h6v6h-6z"></path><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path></svg>),
      label: "All Products",
      count: productData.length,
    },
    {
      icon: <svg fill="none" viewBox="0 0 20 20">
        <path style={{ fill: "#4F4F4F" }} d="M8.33333 3.25C8.31123 3.25 8.29004 3.25878 8.27441 3.27441C8.25878 3.29004 8.25 3.31123 8.25 3.33333V8.02267L11.3637 11.1363C11.5043 11.277 11.5833 11.4678 11.5833 11.6667V16.75H16.75V3.33333C16.75 3.31123 16.7412 3.29003 16.7256 3.27441C16.71 3.25878 16.6888 3.25 16.6667 3.25H8.33333ZM10.0833 16.75V11.9773L6.66667 8.56066L3.25 11.9773V16.75H5.91667V14.1667C5.91667 13.7525 6.25245 13.4167 6.66667 13.4167C7.08088 13.4167 7.41667 13.7525 7.41667 14.1667V16.75H10.0833ZM6.75 6.75462C6.53133 6.73031 6.30401 6.80199 6.13634 6.96967L1.96967 11.1363C1.82902 11.277 1.75 11.4678 1.75 11.6667V17.5C1.75 17.9142 2.08579 18.25 2.5 18.25H17.5C17.9142 18.25 18.25 17.9142 18.25 17.5V3.33333C18.25 2.91341 18.0832 2.51068 17.7863 2.21375C17.4893 1.91681 17.0866 1.75 16.6667 1.75H8.33333C7.91341 1.75 7.51068 1.91681 7.21375 2.21375C6.91682 2.51068 6.75 2.91341 6.75 3.33333V6.75462ZM10.8333 5.08333C11.2475 5.08333 11.5833 5.41912 11.5833 5.83333V5.84167C11.5833 6.25588 11.2475 6.59167 10.8333 6.59167C10.4191 6.59167 10.0833 6.25588 10.0833 5.84167V5.83333C10.0833 5.41912 10.4191 5.08333 10.8333 5.08333ZM14.1667 5.08333C14.5809 5.08333 14.9167 5.41912 14.9167 5.83333V5.84167C14.9167 6.25588 14.5809 6.59167 14.1667 6.59167C13.7525 6.59167 13.4167 6.25588 13.4167 5.84167V5.83333C13.4167 5.41912 13.7525 5.08333 14.1667 5.08333ZM14.1667 8.41667C14.5809 8.41667 14.9167 8.75245 14.9167 9.16667V9.175C14.9167 9.58921 14.5809 9.925 14.1667 9.925C13.7525 9.925 13.4167 9.58921 13.4167 9.175V9.16667C13.4167 8.75245 13.7525 8.41667 14.1667 8.41667ZM14.1667 11.75C14.5809 11.75 14.9167 12.0858 14.9167 12.5V12.5083C14.9167 12.9225 14.5809 13.2583 14.1667 13.2583C13.7525 13.2583 13.4167 12.9225 13.4167 12.5083V12.5C13.4167 12.0858 13.7525 11.75 14.1667 11.75Z" clip-rule="evenodd" fill-rule="evenodd"></path>
      </svg>,
      label: "Schools",
      count: productTypeCounts['school'] || 0,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
          <path fill="#4F4F4F" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd" />
        </svg>
      ),
      label: "Courses",
      count: productTypeCounts['course'] || 0,
    },
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24">
          <path fill="#4F4F4F" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
        </svg>
      ),
      label: "Sessions",
      count: productTypeCounts['session'] || 0,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path fill="#4F4F4F" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd" />
          <path fill="#4F4F4F" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd" />
        </svg>
      ),
      label: "Communities",
      count: productTypeCounts['community'] || 0,
    },
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24"><path fill="#4F4F4F" d="M3 1h18a3 3 0 0 1 3 3v8H2v5a1 1 0 0 0 1 1h7v2H3a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3ZM2 4v2h20V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm11.8 10.81a2.7 2.7 0 0 1 4.2.43 2.7 2.7 0 0 1 4.2-.43 2.8 2.8 0 0 1 0 3.92L18 23l-4.2-4.27a2.8 2.8 0 0 1 0-3.92Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
      ),
      label: "Bundles",
      count: productTypeCounts['bundle'] || 0,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path fill="#4F4F4F" d="M17 12.7992V13.5992C17.4418 13.5992 17.8 13.241 17.8 12.7992H17ZM17 8.39922H17.8C17.8 7.95739 17.4418 7.59922 17 7.59922V8.39922ZM4.96739 4.12628C4.59574 4.3652 4.48814 4.86017 4.72706 5.23183C4.96598 5.60348 5.46095 5.71108 5.83261 5.47216L4.96739 4.12628ZM11 1.19922L11.6315 0.708066C11.3773 0.381231 10.9157 0.302372 10.5674 0.526276L11 1.19922ZM13.1685 5.29037C13.4398 5.63913 13.9424 5.70196 14.2912 5.4307C14.6399 5.15945 14.7027 4.65682 14.4315 4.30807L13.1685 5.29037ZM17 11.9992H14.4V13.5992H17V11.9992ZM14.4 9.19922H17V7.59922H14.4V9.19922ZM16.2 8.39922V12.7992H17.8V8.39922H16.2ZM13 10.5992C13 9.82602 13.6268 9.19922 14.4 9.19922V7.59922C12.7431 7.59922 11.4 8.94237 11.4 10.5992H13ZM14.4 11.9992C13.6268 11.9992 13 11.3724 13 10.5992H11.4C11.4 12.2561 12.7431 13.5992 14.4 13.5992V11.9992ZM5.83261 5.47216L11.4326 1.87216L10.5674 0.526276L4.96739 4.12628L5.83261 5.47216ZM10.3685 1.69037L13.1685 5.29037L14.4315 4.30807L11.6315 0.708066L10.3685 1.69037ZM1.8 5.59922H15.4V3.99922H1.8V5.59922ZM15.4 15.9992H1.8V17.5992H15.4V15.9992ZM1.8 15.9992V5.59922H0.2V15.9992H1.8ZM1.8 15.9992H1.8H0.2C0.2 16.8829 0.916343 17.5992 1.8 17.5992V15.9992ZM15.4 15.9992H15.4V17.5992C16.2837 17.5992 17 16.8829 17 15.9992H15.4ZM15.4 5.59922H15.4H17C17 4.71556 16.2837 3.99922 15.4 3.99922V5.59922ZM1.8 3.99922C0.916344 3.99922 0.2 4.71556 0.2 5.59922H1.8H1.8V3.99922ZM15.4 13.3992V15.9992H17V13.3992H15.4ZM15.4 5.59922V7.69922H17V5.59922H15.4Z" />
        </svg>
      ),
      label: "Subscriptions",
      count: productTypeCounts['subscription'] || 0,
    },
  ];
  const [AllProductsToolTip, setAllProductsToolTip] = useState(false);

  return (
    <div className="container-products">
      <div className="header">
        <div className='flex items-center gap-2'>
          <h1 className="header-title">{context.activeFilter === '' ? 'All Products' : context.activeFilter !== 'All Products' ? 'All ' + context.activeFilter : 'All Products'}</h1>
          <div className="arrow-container mb-1 relative p-1 cursor-pointer" onClick={() => setAllProductsToolTip(!AllProductsToolTip)}>
            <svg style={AllProductsToolTip === true ? { rotate: '180deg' } : { rotate: '0deg' }} className='arrowconatinersvg' viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth={3} d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {AllProductsToolTip &&
              <div className="tooltip-display">
                {tooltipItems.map((item, index) => (
                  <div className="tooltip-item" key={index} onClick={() => {
                    // Set the active filter dynamically when the item is clicked
                    context.setActiveFilter(item.label);
                  }}>
                    <div className="icon-wrapper">{item.icon}</div>
                    <div className="label-wrapper">
                      <span className="label">{item.label}</span>
                      <span className="count">{item.count}</span>
                    </div>
                  </div>

                ))}
              </div>
            }
          </div>

        </div>
        <button className="create-button" onClick={toggleMenu}>
          <svg viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Create
          <svg style={isMenuOpen === true ? { rotate: '180deg' } : { rotate: '0deg' }} viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {isMenuOpen && (
            <div className="create-menu" style={{ zIndex: '1000' }}>
              {/* New school */}
              <div
                className="create-menu-item"
                onClick={() => handleMenuItemClick("school")}
              >
                <svg fill="none" viewBox="0 0 20 20">
                  <path fill="#4F4F4F" d="M8.33333 3.25C8.31123 3.25 8.29004 3.25878 8.27441 3.27441C8.25878 3.29004 8.25 3.31123 8.25 3.33333V8.02267L11.3637 11.1363C11.5043 11.277 11.5833 11.4678 11.5833 11.6667V16.75H16.75V3.33333C16.75 3.31123 16.7412 3.29003 16.7256 3.27441C16.71 3.25878 16.6888 3.25 16.6667 3.25H8.33333ZM10.0833 16.75V11.9773L6.66667 8.56066L3.25 11.9773V16.75H5.91667V14.1667C5.91667 13.7525 6.25245 13.4167 6.66667 13.4167C7.08088 13.4167 7.41667 13.7525 7.41667 14.1667V16.75H10.0833ZM6.75 6.75462C6.53133 6.73031 6.30401 6.80199 6.13634 6.96967L1.96967 11.1363C1.82902 11.277 1.75 11.4678 1.75 11.6667V17.5C1.75 17.9142 2.08579 18.25 2.5 18.25H17.5C17.9142 18.25 18.25 17.9142 18.25 17.5V3.33333C18.25 2.91341 18.0832 2.51068 17.7863 2.21375C17.4893 1.91681 17.0866 1.75 16.6667 1.75H8.33333C7.91341 1.75 7.51068 1.91681 7.21375 2.21375C6.91682 2.51068 6.75 2.91341 6.75 3.33333V6.75462ZM10.8333 5.08333C11.2475 5.08333 11.5833 5.41912 11.5833 5.83333V5.84167C11.5833 6.25588 11.2475 6.59167 10.8333 6.59167C10.4191 6.59167 10.0833 6.25588 10.0833 5.84167V5.83333C10.0833 5.41912 10.4191 5.08333 10.8333 5.08333ZM14.1667 5.08333C14.5809 5.08333 14.9167 5.41912 14.9167 5.83333V5.84167C14.9167 6.25588 14.5809 6.59167 14.1667 6.59167C13.7525 6.59167 13.4167 6.25588 13.4167 5.84167V5.83333C13.4167 5.41912 13.7525 5.08333 14.1667 5.08333ZM14.1667 8.41667C14.5809 8.41667 14.9167 8.75245 14.9167 9.16667V9.175C14.9167 9.58921 14.5809 9.925 14.1667 9.925C13.7525 9.925 13.4167 9.58921 13.4167 9.175V9.16667C13.4167 8.75245 13.7525 8.41667 14.1667 8.41667ZM14.1667 11.75C14.5809 11.75 14.9167 12.0858 14.9167 12.5V12.5083C14.9167 12.9225 14.5809 13.2583 14.1667 13.2583C13.7525 13.2583 13.4167 12.9225 13.4167 12.5083V12.5C13.4167 12.0858 13.7525 11.75 14.1667 11.75Z" clipRule="evenodd" fillRule="evenodd"></path>
                </svg>
                New school
              </div>
              {/* New Course */}
              <div
                className="create-menu-item"
                onClick={() => handleMenuItemClick("Course")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                  <path fill="#4F4F4F" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
                New Course
              </div>
              {/* New Session */}
              <div
                className="create-menu-item"
                onClick={() => handleMenuItemClick("Session")}
              >
                <svg fill="none" viewBox="0 0 24 24">
                  <path fill="#4F4F4F" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
                New Session
              </div>
              {/* New Community */}
              <div
                className="create-menu-item"
                onClick={() => handleMenuItemClick("Community")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path fill="#4F4F4F" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                  <path fill="#4F4F4F" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
                New Community
              </div>
              {/* New Subscription */}
              <div
                className="create-menu-item"
                onClick={() => handleMenuItemClick("Subscription")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path fill="#4F4F4F" d="M17 12.7992V13.5992C17.4418 13.5992 17.8 13.241 17.8 12.7992H17ZM17 8.39922H17.8C17.8 7.95739 17.4418 7.59922 17 7.59922V8.39922ZM4.96739 4.12628C4.59574 4.3652 4.48814 4.86017 4.72706 5.23183C4.96598 5.60348 5.46095 5.71108 5.83261 5.47216L4.96739 4.12628ZM11 1.19922L11.6315 0.708066C11.3773 0.381231 10.9157 0.302372 10.5674 0.526276L11 1.19922ZM13.1685 5.29037C13.4398 5.63913 13.9424 5.70196 14.2912 5.4307C14.6399 5.15945 14.7027 4.65682 14.4315 4.30807L13.1685 5.29037ZM17 11.9992H14.4V13.5992H17V11.9992ZM14.4 9.19922H17V7.59922H14.4V9.19922ZM16.2 8.39922V12.7992H17.8V8.39922H16.2ZM13 10.5992C13 9.82602 13.6268 9.19922 14.4 9.19922V7.59922C12.7431 7.59922 11.4 8.94237 11.4 10.5992H13ZM14.4 11.9992C13.6268 11.9992 13 11.3724 13 10.5992H11.4C11.4 12.2561 12.7431 13.5992 14.4 13.5992V11.9992ZM5.83261 5.47216L11.4326 1.87216L10.5674 0.526276L4.96739 4.12628L5.83261 5.47216ZM10.3685 1.69037L13.1685 5.29037L14.4315 4.30807L11.6315 0.708066L10.3685 1.69037ZM1.8 5.59922H15.4V3.99922H1.8V5.59922ZM15.4 15.9992H1.8V17.5992H15.4V15.9992ZM1.8 15.9992V5.59922H0.2V15.9992H1.8ZM1.8 15.9992H1.8H0.2C0.2 16.8829 0.916343 17.5992 1.8 17.5992V15.9992ZM15.4 15.9992H15.4V17.5992C16.2837 17.5992 17 16.8829 17 15.9992H15.4ZM15.4 5.59922H15.4H17C17 4.71556 16.2837 3.99922 15.4 3.99922V5.59922ZM1.8 3.99922C0.916344 3.99922 0.2 4.71556 0.2 5.59922H1.8H1.8V3.99922ZM15.4 13.3992V15.9992H17V13.3992H15.4ZM15.4 5.59922V7.69922H17V5.59922H15.4Z"></path>
                </svg>
                New Subscription
              </div>
              {/* New Bundle */}
              <div
                className="create-menu-item"
                onClick={() => handleMenuItemClick("Bundle")}
              >
                <svg fill="none" viewBox="0 0 24 24"><path fill="#4F4F4F" d="M3 1h18a3 3 0 0 1 3 3v8H2v5a1 1 0 0 0 1 1h7v2H3a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3ZM2 4v2h20V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm11.8 10.81a2.7 2.7 0 0 1 4.2.43 2.7 2.7 0 0 1 4.2-.43 2.8 2.8 0 0 1 0 3.92L18 23l-4.2-4.27a2.8 2.8 0 0 1 0-3.92Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                New Bundle
              </div>
            </div>
          )}
        </button>

      </div>
      <div className="content">
        <div className="search-container w-100">
          <input
            type="text"
            className="search-input school-inputs form-control w-100"
            placeholder="Search Products"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="results-header">
          <div className="results-count">
            Showing <strong>{startIndex}-{endIndex}</strong> of <strong>{totalProducts}</strong> products
          </div>
          <div className='flex items-center gap-3'>
            <div className="filter-dropdown">
              <button className="filter-button">Filter by Status
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none">
                  <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" />
                </svg></button>
              <div className="filter-menu" style={{ zIndex: '1000' }}>
                {['Published', 'Draft', 'Pending Approval', 'Rejected'].map((filter) => {
                  const normalizedFilter = filter === 'Pending Approval' ? 'Pending' : filter; // Normalize "Pending Approval" to "Pending"
                  return (
                    <div
                      className="filter-option"
                      onClick={() => handleFilterClick(normalizedFilter)}
                      key={filter}
                    >
                      <div
                        className={`filter-checkbox ${checkedFilters[normalizedFilter] ? 'checked' : ''}`}
                      />
                      <span className="filter-label">{filter}</span>
                    </div>
                  );
                })}
              </div>

            </div>
            <div className="sort-dropdown">
              <button className="sort-button">Sort: {sortOption}
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none">
                  <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <div className="sort-menu">
                {['Newest', 'Title: A-Z', 'Title: Z-A'].map((option) => (
                  <div
                    key={option}
                    className="sort-menu-item"
                    onClick={() => handleSortChange(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="products-grid" style={{ overflow: 'visible' }}>
          {context.activeFilter === "All Products" || !context.activeFilter
            ? paginatedData.map(createProductCard) // Show all products if no filter is applied
            : filteredProducts.map(createProductCard) // Show filtered products if a filter is applied
          }
        </div>

        <div className='footer'>
          <div className='footer-left'>
            <div className='footer-text'>
              Showing <strong>{startIndex}-{endIndex}</strong> of <strong>{originalTotalProducts}</strong> products
            </div>
            <div className="items-per-page">
              <div className="items-dropdown">
                Items Per Page: {itemsPerPage}
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none">
                  <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="items-menu">
                {[6, 8, 12].map((value) => (
                  <div
                    className="items-menu-item"
                    onClick={() => setItemsPerPage(value)}
                    key={value}
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>

          </div>
          {renderPagination()}
        </div>
      </div>
    </div >
  );
}
