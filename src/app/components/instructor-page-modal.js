import { useContext, useState } from "react";
import { MyContext } from "../layout";

export default function InstructorModal() {
    const context = useContext(MyContext);
    const toggleModal = () => {
        context.setinstructorModal(!context.instructorModal);
    };

    const products = [
        {
            title: "Jake Conrad",
            image: "https://i.ibb.co/Hqy4WwQ/AVATAR-smallbusiness-withgoogle-com-free-google-training.jpg",
            followers: "322 Followers",
            courses: "0",
            events: "24",
            reviews: "5"
        },
        {
            title: "Matt Riddle",
            image: "https://i.ibb.co/chkjCFZ/AVATAR-x-com-eladgil.jpg",
            followers: "24 Followers",
            courses: "16",
            events: "86",
            reviews: "8"
        },
        {
            title: "Fredric Nolan",
            image: "https://i.ibb.co/y0jHWWH/AVATAR-github-com-biowaffeln.png",
            followers: "3.2k Followers",
            courses: "72",
            events: "95K",
            reviews: "6"
        },
        {
            title: "Oliver Patel",
            image: "https://i.ibb.co/hMhYzYT/AVATAR-Ryan-Zhang.png",
            followers: "1.6k Followers",
            courses: "85",
            events: "27",
            reviews: "4"
        },
        {
            title: "Jude Pierce",
            image: "https://i.ibb.co/446B0ZT/AVATAR-laurentfa.png",
            followers: "895 Followers",
            courses: "33",
            events: "755",
            reviews: "3"
        }
    ];

    const ProductCard = ({ product }) => {
        return (
            <div className="product-card">
                <img src={`${product.image}`} alt={`"${product.title}"`} className="product-thumbnail" />
                <div className="product-details">
                    <h3 className="product-title">{product.title}</h3>

                    <div className="product-meta">
                        <span className="product-level">{product.followers}</span>
                    </div>

                    <div class="product-stats">
                        <div class="stat-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                                <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                            <span class="stat">{product.courses}</span>
                            <div class="tooltip">Enrolled Courses</div>
                        </div>
                        <div class="stat-item" >
                            <svg fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                            <span class="stat">{product.events}</span>
                            <div class="tooltip">Enrolled Events</div>
                        </div>
                        <div class="stat-item">
                            <svg fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.875a.75.75 0 01.648.372l1.994 3.414 3.893.85a.75.75 0 01.395 1.238l-2.646 2.905.414 3.892a.75.75 0 01-1.042.768L12 16.744l-3.656 1.57a.75.75 0 01-1.042-.768l.414-3.892L5.07 10.75a.75.75 0 01.395-1.238l3.893-.85 1.994-3.414A.75.75 0 0112 4.875zm0 2.237l-1.512 2.59a.75.75 0 01-.488.354l-2.946.643 1.998 2.195a.75.75 0 01.191.584L8.93 16.43l2.775-1.192a.75.75 0 01.592 0l2.775 1.192-.314-2.952a.75.75 0 01.191-.584l1.998-2.195L14 10.056a.75.75 0 01-.488-.355L12 7.112z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            <span class="stat">{product.reviews}</span>
                            <div class="tooltip">Reviews Left</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        context.instructorModal && (
            <div
                className="modal-overlay h-screen fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 w-100"
            >
                <div
                    className="modal-container bg-white rounded-lg shadow-lg py-2 instructor-page-modal"
                    style={{ textAlign: "left", width: '80%' }}
                >
                    <div className="flex items-center justify-between">
                        <div class="popup-header">
                            <img src="https://i.ibb.co/31SBVCP/avatar1.jpg" alt="Bundle cover" class="bundle-image" />
                            <div class="bundle-info">
                                <h2>All Followers</h2>
                                <div class="product-label label-bundle">

                                    <svg height="24" width="24" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M5.64124 3.64124C6.53204 2.75044 7.74022 2.25 9 2.25C10.2598 2.25 11.468 2.75044 12.3588 3.64124C13.2496 4.53204 13.75 5.74022 13.75 7C13.75 8.25978 13.2496 9.46796 12.3588 10.3588C11.468 11.2496 10.2598 11.75 9 11.75C7.74022 11.75 6.53204 11.2496 5.64124 10.3588C4.75044 9.46796 4.25 8.25978 4.25 7C4.25 5.74022 4.75044 4.53204 5.64124 3.64124ZM9 3.75C8.13805 3.75 7.3114 4.09241 6.7019 4.7019C6.09241 5.3114 5.75 6.13805 5.75 7C5.75 7.86195 6.09241 8.6886 6.7019 9.2981C7.3114 9.90759 8.13805 10.25 9 10.25C9.86195 10.25 10.6886 9.90759 11.2981 9.2981C11.9076 8.6886 12.25 7.86195 12.25 7C12.25 6.13805 11.9076 5.3114 11.2981 4.7019C10.6886 4.09241 9.86195 3.75 9 3.75ZM15.2734 2.94385C15.3762 2.54258 15.7848 2.30058 16.186 2.40332C17.2078 2.66493 18.1134 3.25915 18.7601 4.09231C19.4068 4.92547 19.7578 5.95018 19.7578 7.00488C19.7578 8.05959 19.4068 9.08429 18.7601 9.91745C18.1134 10.7506 17.2078 11.3448 16.186 11.6064C15.7848 11.7092 15.3762 11.4672 15.2734 11.0659C15.1707 10.6646 15.4127 10.2561 15.814 10.1533C16.5131 9.97433 17.1327 9.56775 17.5752 8.99769C18.0177 8.42763 18.2578 7.72652 18.2578 7.00488C18.2578 6.28325 18.0177 5.58213 17.5752 5.01207C17.1327 4.44201 16.5131 4.03544 15.814 3.85645C15.4127 3.7537 15.1707 3.34512 15.2734 2.94385ZM7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H11C12.2598 14.25 13.468 14.7504 14.3588 15.6412C15.2496 16.532 15.75 17.7402 15.75 19V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V19C14.25 18.138 13.9076 17.3114 13.2981 16.7019C12.6886 16.0924 11.862 15.75 11 15.75H7ZM17.2738 14.9624C17.3774 14.5614 17.7864 14.3202 18.1875 14.4237C19.2026 14.6858 20.1025 15.2763 20.7469 16.1033C21.3913 16.9303 21.744 17.9472 21.75 18.9956L21.75 18.9999L21.75 20.9999C21.75 21.4141 21.4142 21.7499 21 21.7499C20.5858 21.7499 20.25 21.4141 20.25 20.9999V19.002C20.2454 18.2855 20.0041 17.5905 19.5637 17.0253C19.1228 16.4595 18.5071 16.0554 17.8125 15.8761C17.4115 15.7725 17.1703 15.3635 17.2738 14.9624Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>


                                    155 Followers
                                </div>
                            </div>
                        </div>

                        <button className="close-btn text-gray-500 hover:text-gray-800" onClick={toggleModal}>
                            ✖
                        </button>
                    </div>
                    <div class="popup-content">
                        <div className="products-grid">
                            {products.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
