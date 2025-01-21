import { useContext, useState } from "react";
import { MyContext } from "../layout";

export default function BundleViewMore() {
    const context = useContext(MyContext);
    const toggleModal = () => {
        context.setbundlemodal(!context.bundlemodal);
    };

    const products = [
        {
            title: "The Complete Web Development Bootcamp",
            image: "https://i.ibb.co/640kJN2/c1.jpg",
            level: "Beginner",
            type: "course",
            duration: "2.5 hrs",
            students: "15.2K",
            units: "5"
        },
        {
            title: "Advanced JavaScript Concepts",
            image: "https://i.ibb.co/GFhHTqZ/c2.jpg",
            level: "Advanced",
            type: "course",
            duration: "3.5 hrs",
            students: "12.8K",
            units: "8"
        },
        {
            title: "React Native Masterclass",
            image: "https://i.ibb.co/hBpWGQ7/c3.jpg",
            level: "Intermediate",
            type: "course",
            duration: "4 hrs",
            students: "9.5K",
            units: "6"
        },
        {
            title: "UI/UX Design Workshop",
            image: "https://i.ibb.co/NKffPZQ/c4.jpg",
            level: "Beginner",
            type: "session",
            duration: "1.5 hrs",
            students: "8.3K",
            units: "4"
        },
        {
            title: "Design Systems Architecture",
            image: "https://i.ibb.co/ss92kB8/c5.jpg",
            level: "Advanced",
            type: "session",
            duration: "2 hrs",
            students: "7.1K",
            units: "3"
        }
    ];
    const ProductCard = ({ product }) => {
        return (
            <div class="product-card">
                <img src={product.image} alt={product.title} class="product-thumbnail" />
                <div class="product-details">
                    <h3 class="product-title">{product.title}</h3>

                    <div class="product-meta">
                        <span class="product-level">{product.level}</span>
                        <div class={`product-label ${product.type === 'course' ? 'label-course' : 'label-session'}`}>
                            {product.type === 'course' ?
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.571183.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                    Course
                                </>
                                :
                                <>
                                    <svg fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                    1:1 Session
                                </>
                            }
                        </div>
                    </div>
                    <div class="product-stats">
                        <div class="stat-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M11.0251 3.98957C12.6023 3.33626 14.2928 3 16 3C17.7072 3 19.3977 3.33626 20.9749 3.98957C22.5521 4.64288 23.9852 5.60045 25.1924 6.80761C26.3995 8.01477 27.3571 9.44788 28.0104 11.0251C28.6637 12.6023 29 14.2928 29 16C29 17.7072 28.6637 19.3977 28.0104 20.9749C27.3571 22.5521 26.3995 23.9852 25.1924 25.1924C23.9852 26.3995 22.5521 27.3571 20.9749 28.0104C19.3977 28.6637 17.7072 29 16 29C14.2928 29 12.6023 28.6637 11.0251 28.0104C9.44788 27.3571 8.01477 26.3995 6.80761 25.1924C5.60045 23.9852 4.64288 22.5521 3.98957 20.9749C3.33625 19.3977 3 17.7072 3 16C3 14.2928 3.33625 12.6023 3.98957 11.0251C4.64288 9.44788 5.60045 8.01477 6.80761 6.80761C8.01477 5.60045 9.44788 4.64288 11.0251 3.98957ZM16 5C14.5555 5 13.1251 5.28452 11.7905 5.83733C10.4559 6.39013 9.24327 7.20038 8.22183 8.22183C7.20038 9.24327 6.39013 10.4559 5.83733 11.7905C5.28452 13.1251 5 14.5555 5 16C5 17.4445 5.28452 18.8749 5.83733 20.2095C6.39013 21.5441 7.20038 22.7567 8.22183 23.7782C9.24327 24.7996 10.4559 25.6099 11.7905 26.1627C13.1251 26.7155 14.5555 27 16 27C17.4445 27 18.8749 26.7155 20.2095 26.1627C21.5441 25.6099 22.7567 24.7996 23.7782 23.7782C24.7996 22.7567 25.6099 21.5441 26.1627 20.2095C26.7155 18.8749 27 17.4445 27 16C27 14.5555 26.7155 13.1251 26.1627 11.7905C25.6099 10.4559 24.7996 9.24327 23.7782 8.22183C22.7567 7.20038 21.5441 6.39013 20.2095 5.83733C18.8749 5.28452 17.4445 5 16 5ZM16 8.33333C16.5523 8.33333 17 8.78105 17 9.33333V15.4648L20.5547 17.8346C21.0142 18.141 21.1384 18.7618 20.8321 19.2214C20.5257 19.6809 19.9048 19.8051 19.4453 19.4987L15.4453 16.8321C15.1671 16.6466 15 16.3344 15 16V9.33333C15 8.78105 15.4477 8.33333 16 8.33333Z" clip-rule="evenodd" fill-rule="evenodd" />
                            </svg>
                            <span class="stat">{product.duration}</span>
                            <div class="tooltip">Course Duration</div>
                        </div>
                        <div class="stat-item">
                            <svg fill="none" viewBox="0 0 20 20">
                                <path fill="currentColor" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd" />
                            </svg>
                            <span class="stat">{product.students}</span>
                            <div class="tooltip">Total Students</div>
                        </div>
                        <div class="stat-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M8.00008 6.33331C7.91168 6.33331 7.82689 6.36843 7.76438 6.43094C7.70187 6.49346 7.66675 6.57824 7.66675 6.66665V25.3333C7.66675 25.4217 7.70187 25.5065 7.76438 25.569C7.82689 25.6315 7.91167 25.6666 8.00008 25.6666H11.0001V6.33331H8.00008ZM8.00008 4.33331C7.38124 4.33331 6.78775 4.57915 6.35017 5.01673C5.91258 5.45432 5.66675 6.04781 5.66675 6.66665V25.3333C5.66675 25.9522 5.91258 26.5456 6.35017 26.9832C6.78775 27.4208 7.38124 27.6666 8.00008 27.6666H11.0001V29.3333C11.0001 29.8856 11.4478 30.3333 12.0001 30.3333C12.5524 30.3333 13.0001 29.8856 13.0001 29.3333V27.6666H22.6667C23.6392 27.6666 24.5718 27.2803 25.2595 26.5927C25.9471 25.9051 26.3334 24.9724 26.3334 24V7.99998C26.3334 7.02752 25.9471 6.09489 25.2595 5.40725C24.5718 4.71962 23.6392 4.33331 22.6667 4.33331H8.00008ZM13.0001 6.33331V25.6666H22.6667C23.1088 25.6666 23.5327 25.4911 23.8453 25.1785C24.1578 24.8659 24.3334 24.442 24.3334 24V7.99998C24.3334 7.55795 24.1578 7.13403 23.8453 6.82147C23.5327 6.50891 23.1088 6.33331 22.6667 6.33331H13.0001ZM16.3334 10.6666C16.3334 10.1144 16.7811 9.66665 17.3334 9.66665H20.0001C20.5524 9.66665 21.0001 10.1144 21.0001 10.6666C21.0001 11.2189 20.5524 11.6666 20.0001 11.6666H17.3334C16.7811 11.6666 16.3334 11.2189 16.3334 10.6666ZM16.3334 16C16.3334 15.4477 16.7811 15 17.3334 15H20.0001C20.5524 15 21.0001 15.4477 21.0001 16C21.0001 16.5523 20.5524 17 20.0001 17H17.3334C16.7811 17 16.3334 16.5523 16.3334 16Z" clip-rule="evenodd" fill-rule="evenodd" />
                            </svg>
                            <span class="stat">{product.units}</span>
                            <div class="tooltip">{product.units} Learning Units</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        context.bundlemodal && (
            <div
                className="modal-overlay h-screen fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 w-100"
            >
                <div
                    className="modal-container bg-white rounded-lg shadow-lg py-2 bundleviewmore "
                    style={{ textAlign: "left", width: '80%', height: 'calc(100vh - 80px)' }}
                >
                    <div className="flex items-center justify-between">
                        <div class="popup-header">
                            <img src="https://i.ibb.co/sw4yS26/img1.jpg" alt="Bundle cover" class="bundle-image" />
                                <div class="bundle-info">
                                    <h2>Web Development Master Bundle</h2>
                                    <div class="product-label label-bundle">

                                        <svg height="24" width="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M3 1h18a3 3 0 0 1 3 3v8H2v5a1 1 0 0 0 1 1h7v2H3a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3ZM2 4v2h20V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm11.8 10.81a2.7 2.7 0 0 1 4.2.43 2.7 2.7 0 0 1 4.2-.43 2.8 2.8 0 0 1 0 3.92L18 23l-4.2-4.27a2.8 2.8 0 0 1 0-3.92Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>


                                        5 Products
                                    </div>
                                </div>
                                <button class="close-button">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
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
                        <div class="popup-footer mb-4">
                            <div class="payment-options">
                                <div class="payment-plan">
                                    <div class="plan-name">PAY ONCE</div>
                                    <div class="plan-details">One-time payment of $499.99</div>
                                </div>
                                <div class="payment-plan">
                                    <div class="plan-name">Silver Bundle Plan</div>
                                    <div class="plan-details">5 payments of $110/month (Total: $550)</div>
                                </div>
                                <div class="payment-plan">
                                    <div class="plan-name">Gold Bundle Plan</div>
                                    <div class="plan-details">10 payments of $60/month (Total: $600)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
