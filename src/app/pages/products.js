"use client";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const products = [
  {
    title: "How to Write Better Prompts",
    type: "Course",
    status: "Published",
    stats: { price: "$14.99", students: 695, created: "Nov 1, 2024" },
    linked: "Design Fundamentals",
    image: "/images/product1.png",
    action: "View Outline",
  },
  {
    title: "Prompt Mastery 1:1 Coaching",
    type: "1:1 Session",
    status: "Draft",
    stats: { price: "$65.00", students: 125, created: "Next Session Nov 25, 2024" },
    linked: "Advanced Prompting",
    image: "/images/product2.png",
    action: "View RSVP",
  },
  {
    title: "Group Prompt Engineering Workshop",
    type: "Group Session",
    status: "Pending Approval",
    stats: { price: "$40.00", students: 78, created: "Next Session Dec 5, 2024" },
    linked: "Prompt Engineering Hub",
    image: "/images/product3.png",
    action: "View RSVP",
  },
  {
    title: "The Prompt Collective",
    type: "Community",
    status: "Published",
    stats: { price: "$8.99", students: 697, created: "Jan 25, 2024" },
    linked: "Prompt Engineering 101",
    image: "/images/product4.png",
    action: "View Sales History",
  },
  {
    title: "The Prompt Mastery Bundle",
    type: "Bundle",
    status: "Published",
    stats: { price: "$83.00", students: 259, created: "Nov 15, 2024" },
    linked: "Weekly Workshop",
    image: "/images/product5.png",
    action: "View Sales History",
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Recent");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="flex items-center justify-between mb-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search Products"
          className="border rounded px-4 py-2 w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filters */}
        <div className="flex items-center space-x-4">
          <select
            className="border rounded px-4 py-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">Filter by Status</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
            <option value="Pending Approval">Pending Approval</option>
          </select>

          <select
            className="border rounded px-4 py-2"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Recent">Sort: Recent</option>
          </select>

          {/* Create Button */}
          <div className="relative">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Create <AiOutlineDown className="inline" />
            </button>
            <div className="absolute right-0 bg-white shadow-md rounded mt-2 hidden group-hover:block">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Add Course
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Add Session
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Add Community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Products List */}
      <div>
        {displayedProducts.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 mb-4 flex items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-16 h-16 mr-4"
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg">{product.title}</h3>
              <p>{product.type}</p>
              <p>Status: {product.status}</p>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              {product.action}
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
