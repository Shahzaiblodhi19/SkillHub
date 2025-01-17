"use client";
import { useEffect } from "react";

const Filters = () => {
    useEffect(() => {
        // Toggle dropdowns
        document.querySelectorAll(".filter-button, .sort-button").forEach((button) => {
            button.addEventListener("click", (e) => {
                document.querySelectorAll(".filter-button, .sort-button").forEach((otherButton) => {
                    if (otherButton !== button) {
                        otherButton.classList.remove("active");
                    }
                });
                button.classList.toggle("active");
                e.stopPropagation();
            });
        });

        // Handle checkboxes and counter badges
        document.querySelectorAll(".filter-dropdown").forEach((dropdown) => {
            const button = dropdown.previousElementSibling;
            const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');

            const updateCount = () => {
                const checkedCount = [...checkboxes].filter((cb) => cb.checked).length;
                const existingBadge = button.querySelector(".selected-count");

                if (checkedCount > 0) {
                    if (existingBadge) {
                        existingBadge.textContent = checkedCount;
                    } else {
                        const badge = document.createElement("span");
                        badge.className = "selected-count";
                        badge.textContent = checkedCount;
                        button.appendChild(badge);
                    }
                } else if (existingBadge) {
                    existingBadge.remove();
                }
            };

            checkboxes.forEach((checkbox) => {
                checkbox.addEventListener("change", updateCount);
            });
        });

        // Side panel functionality
        const moreFiltersBtn = document.getElementById("moreFiltersBtn");
        const sidePanel = document.getElementById("sidePanel");
        const closePanelBtn = document.getElementById("closePanelBtn");
        const overlay = document.getElementById("overlay");

        const openPanel = () => {
            sidePanel.classList.add("active");
            overlay.classList.add("active");
            document.body.style.overflow = "hidden";
        };

        const closePanel = () => {
            sidePanel.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.overflow = "";
        };

        moreFiltersBtn.addEventListener("click", openPanel);
        closePanelBtn.addEventListener("click", closePanel);
        overlay.addEventListener("click", closePanel);

        // Collapsible sections in side panel
        document.querySelectorAll(".filter-section-header").forEach((header) => {
            header.addEventListener("click", () => {
                const section = header.closest(".filter-section");
                section.classList.toggle("collapsed");
            });
        });

        // Show more functionality
        document.querySelectorAll(".show-more-btn").forEach((button) => {
            button.addEventListener("click", (e) => {
                e.stopPropagation();
                const section = button.closest(".filter-section-content");
                const hiddenOptions = section.querySelectorAll(".filter-option.hidden");

                hiddenOptions.forEach((option) => {
                    option.classList.remove("hidden");
                });

                button.style.display = "none";
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".filter-button, .filter-dropdown, .sort-button, .sort-dropdown")) {
                document.querySelectorAll(".filter-button, .sort-button").forEach((button) => {
                    button.classList.remove("active");
                });
            }
        });

        // Prevent dropdown close when clicking inside
        document.querySelectorAll(".filter-dropdown, .sort-dropdown").forEach((dropdown) => {
            dropdown.addEventListener("click", (e) => {
                e.stopPropagation();
            });
        });

        // Initialize all filter sections as expanded
        document.querySelectorAll(".filter-section").forEach((section) => {
            const content = section.querySelector(".filter-section-content");
            const options = content.querySelectorAll(".filter-option");

            // Show first 3 options, hide the rest
            options.forEach((option, index) => {
                if (index >= 3) {
                    option.classList.add("hidden");
                }
            });

            // Hide show more button if there are 3 or fewer options
            const showMoreBtn = content.querySelector(".show-more-btn");
            if (options.length <= 3) {
                showMoreBtn.style.display = "none";
            }
        });

        // Handle ESC key to close panel
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closePanel();
            }
        });
    }, []);

    return (
        <div
            className="filters-wrapper"
            dangerouslySetInnerHTML={{
                __html: `<div class="filters-container">
          <!-- Place your full HTML content here as a single string -->
        </div>`
            }}
        />
    );
};

export default Filters;
