"use client";
import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const products = [
  {
    title: "How to Write Better Prompts",
    type: "Course",
    status: "Published",
    stats: { price: "$14.99", students: 695, created: "Nov 1, 2024" },
    linked: "Design Fundamentals",
    image: "https://i.ibb.co/z27wtc6/img2.jpg",
    action: "View Outline",
  },
  {
    title: "Prompt Mastery 1:1 Coaching",
    type: "1:1 Session",
    status: "Draft",
    stats: { price: "$65.00", students: 125, created: "Next Session Nov 25, 2024" },
    linked: "Advanced Prompting",
    image: "https://i.ibb.co/z27wtc6/img2.jpg",
    action: "View RSVP",
  },
  {
    title: "Group Prompt Engineering Workshop",
    type: "Group Session",
    status: "Pending Approval",
    stats: { price: "$40.00", students: 78, created: "Next Session Dec 5, 2024" },
    linked: "Prompt Engineering Hub",
    image: "https://i.ibb.co/jJ4GHXP/img1.jpg",
    action: "View RSVP",
  },
  {
    title: "The Prompt Collective",
    type: "Community",
    status: "Published",
    stats: { price: "$8.99", students: 697, created: "Jan 25, 2024" },
    linked: "Prompt Engineering 101",
    image: "https://i.ibb.co/Csdq4rd/newsletter-image.png",
    action: "View Sales History",
  },
  {
    title: "The Prompt Mastery Bundle",
    type: "Bundle",
    status: "Published",
    stats: { price: "$83.00", students: 259, created: "Nov 15, 2024" },
    linked: "Weekly Workshop",
    image: "https://i.ibb.co/LJwrLdW/coaching-image.webp",
    action: "View Sales History",
  },
  {
    title: "Advanced Prompt Engineering",
    type: "Course",
    status: "Published",
    stats: { price: "$199.00", students: 1098, created: "Nov 26, 2024" },
    linked: "Prompt Engineering Hub",
    image: "https://i.ibb.co/k67BZds/community-image1.png",
    action: "View Outline",
  },
  {
    title: "AI Prompting Workshop",
    type: "Workshop",
    status: "Draft",
    stats: { price: "$55.00", students: 350, created: "Dec 5, 2024" },
    linked: "Advanced Workshop Series",
    image: "https://i.ibb.co/Csdq4rd/newsletter-image.png",
    action: "View RSVP",
  },
  {
    title: "Creative AI Community",
    type: "Community",
    status: "Published",
    stats: { price: "$12.99", students: 512, created: "Jan 5, 2024" },
    linked: "Creative AI Hub",
    image: "https://i.ibb.co/LJwrLdW/coaching-image.webp",
    action: "View Sales History",
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || product.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "Recent") {
      return new Date(b.stats.created) - new Date(a.stats.created);
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const handlePageChange = (event, value) => {
    setCurrentPage(value); // Update the current page when MUI pagination is clicked
  };
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="p-4 bg-white">
        {/* Search */}
        <input
          type="text"
          placeholder="Search Products by Names"
          className="form-control school-inputs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex items-center justify-between mb-4 bg-white my-4">
          <p className=" text-sm">
            Showing {displayedProducts.length + (currentPage - 1) * itemsPerPage}{" "}
            of {filteredProducts.length} products
          </p>

          {/* Filters */}
          <div className="flex items-center space-x-4">

            <select
              className="border rounded"
              style={{
                background: '#F5F5F5',
                padding: '8px 20px 8px 13px',
                paddingRight: '30px', // Add padding to the right for the dropdown arrow
                appearance: 'none', // Optional: Remove the default dropdown styling
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23999999' %3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`, // Custom dropdown icon
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 2px center',
                backgroundSize: '26px',
              }}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">Filter by Status</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
              <option value="Pending Approval">Pending Approval</option>
            </select>


            <select
              className="border rounded"
              style={{
                background: '#F5F5F5',
                padding: '8px 35px 8px 13px',
                paddingRight: '30px', // Add padding to the right for the dropdown arrow
                appearance: 'none', // Optional: Remove the default dropdown styling
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23999999' %3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`, // Custom dropdown icon
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 2px center',
                backgroundSize: '26px',
              }}
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="Recent">Sort: Recent</option>
            </select>

          </div>
        </div>

        {/* Products List */}
        <div>

          {displayedProducts.map((product, index) => (
            <div
              key={index}
              className="rounded-lg p-3 mb-4 flex items-center gap-4"
              style={{ border: '3px solid #F2F2F2' }}
            >
              <div style={{ width: '135px', height: '75px' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full" // Ensures the image fills the container
                  style={{ objectFit: 'cover', borderRadius: '5px' }} // Keeps the image proportionate and neatly cropped
                />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-lg">{product.title}</h3>
                <p>{product.type}</p>
                <p>Status: {product.status}</p>
              </div>
              <button className="text-white py-2 px-4 rounded" style={{ background: '#00C0D5' }}>
                {product.action}
              </button>
            </div>
          ))}
        </div>
        <hr />
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            <p className="text-sm">
              Showing {displayedProducts.length + (currentPage - 1) * itemsPerPage}{" "}
              of {filteredProducts.length} products
            </p>
            <select
              className="border rounded text-sm"
              style={{
                background: '#F5F5F5',
                padding: '8px 35px 8px 13px',
                paddingRight: '30px', // Add padding to the right for the dropdown arrow
                appearance: 'none', // Optional: Remove the default dropdown styling
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23999999' %3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`, // Custom dropdown icon
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 2px center',
                backgroundSize: '26px',
              }}
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={5}>5 products per page</option>
              <option value={10}>10 products per page</option>
            </select>
          </div>
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={currentPage} // Sync with current page
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange} // Update page when MUI pagination is used
            />
          </Stack>
        </div>
      </div>
    </>
  );
}
