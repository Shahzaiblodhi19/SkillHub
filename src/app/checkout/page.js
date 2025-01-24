'use client';

import { useState } from 'react';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: 'The Gesture Course',
            author: 'Michael Hampton',
            price: '0.00',
            originalPrice: 99.0,
            type: 'Course',
            rating: 4.8,
            duration: '16h',
            text1: 'includes',
            text2: 'Standard Certificate . Premium Certificate',
            text3: 'includes',
            text4: 'Prompt Engineering Hub .',
            text: '5 spaces',
            lessons: '2.5h',
            students: 695,
            level: 'Advanced',
            image: 'https://i.ibb.co/jJ4GHXP/img1.jpg/gesture-course.jpg',
        },
        {
            id: 2,
            title: 'The Gesture Course',
            author: 'Michael Hampton',
            price: '0.00',
            originalPrice: 99.0,
            type: 'Course',
            rating: 4.8,
            duration: '16h',
            text1: 'includes',
            text2: 'Standard Certificate . Premium Certificate',
            text3: 'includes',
            text4: 'Prompt Engineering Hub .',
            text: '5 spaces',
            lessons: '2.5h',
            students: 695,
            level: 'Advanced',
            image: 'https://i.ibb.co/jJ4GHXP/img1.jpg/gesture-course.jpg',
        },
        {
            id: 3,
            title: 'The Gesture Course',
            author: 'Michael Hampton',
            price: '0.00',
            originalPrice: 99.0,
            type: 'Course',
            rating: 4.8,
            duration: '16h',
            text1: 'includes',
            text2: 'Standard Certificate . Premium Certificate',
            text3: 'includes',
            text4: 'Prompt Engineering Hub .',
            text: '5 spaces',
            lessons: '2.5h',
            students: 695,
            level: 'Advanced',
            image: 'https://i.ibb.co/jJ4GHXP/img1.jpg/gesture-course.jpg',
        },
        {
            id: 4,
            title: 'The Gesture Course',
            author: 'Michael Hampton',
            price: '0.00',
            originalPrice: 99.0,
            type: 'Course',
            rating: 4.8,
            duration: '16h',
            text1: 'includes',
            text2: 'Standard Certificate . Premium Certificate',
            text3: 'includes',
            text4: 'Prompt Engineering Hub .',
            text: '5 spaces',
            lessons: '2.5h',
            students: 695,
            level: 'Advanced',
            image: 'https://i.ibb.co/jJ4GHXP/img1.jpg/gesture-course.jpg',
        },
    ]);

    const [subtotal, setSubtotal] = useState(1804.0);
    const [bundleDiscount, setBundleDiscount] = useState(299.7);
    const [specialOffers, setSpecialOffers] = useState(149.0);
    const [email, setEmail] = useState('');

    const handleRemove = (id) => {
        const filteredItems = cartItems.filter((item) => item.id !== id);
        setCartItems(filteredItems);
    };

    const handleCheckout = () => {
        alert(`Proceeding to checkout with total price: $${subtotal - bundleDiscount - specialOffers}`);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="row gap-4 justify-center">
                <div className="col-xxl-8 col-12">
                    <div className='bg-white  p-4 rounded-lg shadow-md'>
                        <h2 className="text-2xl font-semibold" style={{ marginBottom: '-20px' }}>Shopping Cart</h2>
                        {cartItems.map((item, index) => (
                            <>
                                <div className='border rounded-lg' style={{ marginTop: '54px' }} key={index}>
                                    <div key={item.id} className="flex mx-4 items-start justify-between border-b py-4 flex-col md:flex-row gap-3 md:gap-0">
                                        <div className='hidden sm:block'>
                                            <img src={item.image} alt={item.title} className="sm:w-36 h-20 rounded-lg" style={{ objectFit: 'cover' }} />
                                            <div className="flex-1 ml-4 mar">
                                                <h3 className="text-md font-bold ">{item.title}</h3>
                                                <p className="text-gray-500 text-sm my-2.5">Course by {item.author}</p>
                                                <div className='flex items-center gap-4 mt-3 md:mt-0 flex-wrap '>
                                                    <span className={`label-${item.type.toLowerCase()} text-sm px-2.5 rounded-full`} style={{ fontSize: '12px' }}>{item.type}</span>
                                                    <div className="flex text-sm font-medium text-gray-600 gap-3  flex-wrap">
                                                        <span className='flex items-center gap-1'>⏳ {item.duration}</span>
                                                        <span className='flex items-center gap-1'>📚 {item.lessons}</span>
                                                        <span className='flex items-center gap-1'>🎓 {item.students}</span>
                                                        <span className='flex items-center gap-1'>📊 {item.level}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='block sm:hidden'>
                                            <div className='flex gap-2'>
                                                <img src={item.image} alt={item.title} className="w-32 h-16 rounded-lg" style={{ objectFit: 'cover' }} />
                                                <div>
                                                    <div className='flex justify-between items-start'>
                                                        <h5 className="flex-1 text-md font-bold">{item.title}</h5>
                                                        <button className="bg-gray-100 rounded-full text-sm font-medium flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3' viewBox="0 0 20 20" fill="none">
                                                            <path d="M7.15299 3.408C8.41999 1.136 9.05299 0 9.99999 0C10.947 0 11.58 1.136 12.847 3.408L13.175 3.996C13.535 4.642 13.715 4.965 13.995 5.178C14.275 5.391 14.625 5.47 15.325 5.628L15.961 5.772C18.421 6.329 19.65 6.607 19.943 7.548C20.235 8.488 19.397 9.469 17.72 11.43L17.286 11.937C16.81 12.494 16.571 12.773 16.464 13.117C16.357 13.462 16.393 13.834 16.465 14.577L16.531 15.254C16.784 17.871 16.911 19.179 16.145 19.76C15.379 20.341 14.227 19.811 11.925 18.751L11.328 18.477C10.674 18.175 10.347 18.025 9.99999 18.025C9.65299 18.025 9.32599 18.175 8.67199 18.477L8.07599 18.751C5.77299 19.811 4.62099 20.341 3.85599 19.761C3.08899 19.179 3.21599 17.871 3.46899 15.254L3.53499 14.578C3.60699 13.834 3.64299 13.462 3.53499 13.118C3.42899 12.773 3.18999 12.494 2.71399 11.938L2.27999 11.43C0.602991 9.47 -0.235009 8.489 0.0569909 7.548C0.348991 6.607 1.57999 6.328 4.03999 5.772L4.67599 5.628C5.37499 5.47 5.72399 5.391 6.00499 5.178C6.28599 4.965 6.46499 4.642 6.82499 3.996L7.15299 3.408Z" fill="#07c4ad" />
                                                        </svg> {item.rating}
                                                        </button>
                                                    </div>
                                                    <p className="text-gray-500 text-[10px] my-2.5">Course by {item.author}</p>
                                                </div>
                                            </div>
                                            <div className="flex-1 ml-4 mar">
                                                <div className='flex flex-col gap-4 mt-3 md:mt-0'>
                                                    <span className={`label-${item.type.toLowerCase()} text-sm px-2.5 rounded-full w-fit`} style={{ fontSize: '12px' }}>{item.type}</span>
                                                    <div className="flex text-sm font-medium text-gray-600 gap-3  flex-wrap">
                                                        <div className='flex justify-start gap-3 w-full'>
                                                            <span className='flex items-center gap-1 w-1/2'>⏳ {item.duration}</span>
                                                            <span className='flex items-center gap-1 w-1/2'>📚 {item.lessons}</span>
                                                        </div>
                                                        <div className='flex justify-start gap-3 w-full'>
                                                            <span className='flex items-center gap-1 w-1/2'>🎓 {item.students}</span>
                                                            <span className='flex items-center gap-1 w-1/2'>📊 {item.level}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between gap-5 mx-0 sm:mx-4 flex-wrap'>
                                        <div className='flex items-center justify-between bg-gray-50 rounded-lg px-3 py-4 w-100 flex-wrap gap-3 md:gap-0'>
                                            <div className='flex justbet items-center gap-3 flex-wrap'>
                                                <span className="font-medium rounded-md px-2.5 text-sm py-1.5 text-white" style={{ background: '#07c4ad' }}>FREE</span>
                                                <div className='flex items-center gap-2 mhm'>
                                                    <span className='font-medium text-xl'>${item.price}</span>
                                                    <span className="text-gray-400 font-medium text-sm line-through">Was ${item.originalPrice.toFixed(2)}</span>
                                                </div>
                                            </div>
                                            <button className='btn checkout-btn text-white text-sm flex items-center gap-2.5 py-2 px-3' style={{ background: '#009ecc' }}>Checkout <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' viewBox="0 0 24 24" fill="none">
                                                <path d="M20.364 12.707C20.5515 12.5195 20.6568 12.2652 20.6568 12C20.6568 11.7348 20.5515 11.4805 20.364 11.293L14.707 5.636C14.6148 5.54049 14.5044 5.46431 14.3824 5.4119C14.2604 5.35949 14.1292 5.3319 13.9964 5.33075C13.8636 5.3296 13.732 5.3549 13.6091 5.40518C13.4862 5.45546 13.3745 5.52971 13.2806 5.6236C13.1867 5.7175 13.1125 5.82915 13.0622 5.95205C13.0119 6.07494 12.9866 6.20662 12.9878 6.3394C12.9889 6.47218 13.0165 6.6034 13.0689 6.7254C13.1213 6.84741 13.1975 6.95775 13.293 7.05L17.243 11H4.00001C3.7348 11 3.48044 11.1054 3.29291 11.2929C3.10537 11.4804 3.00001 11.7348 3.00001 12C3.00001 12.2652 3.10537 12.5196 3.29291 12.7071C3.48044 12.8946 3.7348 13 4.00001 13H17.243L13.293 16.95C13.1109 17.1386 13.0101 17.3912 13.0123 17.6534C13.0146 17.9156 13.1198 18.1664 13.3052 18.3518C13.4906 18.5372 13.7414 18.6424 14.0036 18.6447C14.2658 18.647 14.5184 18.5462 14.707 18.364L20.364 12.707Z" fill="white" />
                                            </svg></button>
                                        </div>
                                        <button className="text-gray-500 text-sm flex items-center gap-2.5" onClick={() => handleRemove(item.id)}><svg xmlns="http://www.w3.org/2000/svg" className='w-2.5 h-2.5' viewBox="0 0 12 12" fill="none">
                                            <path d="M1 1L11 11M1 11L11 1" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg> Remove</button>
                                    </div>
                                    <div className='footer-card w-100 mt-4 bg-gray-100 px-3 pt-3 pb-36 pb-md-2 md:pb-2 pt-md-2 md:pt-2'>
                                        <div className="footer-item gap-3 flex-wrap">
                                            <div className="footer-item-group flex-wrap">
                                                <div className="footer-icon-wrapper flex-wrap">
                                                    <div className="footer-icon-circle"></div>
                                                    <div className="footer-icon"></div>
                                                </div>
                                                <div className="footer-content">
                                                    <span className="footer-linked-text">{item.text1} </span>
                                                    <div className="footer-links-wrapper">
                                                        <span className="footer-links">{item.text2}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer-item-group">
                                                <div className="footer-icon-wrapper">
                                                    <div className="footer-icon-circle"></div>
                                                    <div className="footer-icon"></div>
                                                </div>
                                                <div className="footer-content">
                                                    <span className="footer-linked-text">{item.text3} </span>
                                                    <div className="footer-links-wrapper">
                                                        <span className="footer-links">{item.text4}</span>
                                                        <span className="count">{item.text}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                        <p className='text-gray-400 text-center text-sm mt-5'>Each item in your cart needs to be checked out separately</p>
                    </div>
                    <div className='bg-white  p-4 rounded-lg shadow-md mt-4'>
                        <div class="flex items-center gap-4 pb-5 flex-wrap">
                            <div class="flex items-center gap-2">
                                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M10.3031 4.71338C10.638 4.71338 10.9096 4.98493 10.9096 5.3199V5.62947C11.7726 5.74654 12.5494 6.11208 13.0363 6.67319C13.2559 6.92617 13.2288 7.30925 12.9758 7.52881C12.7229 7.74837 12.3398 7.72128 12.1202 7.4683C11.8892 7.20209 11.4627 6.96219 10.9096 6.85747V9.13097C11.5063 9.2117 12.0549 9.41056 12.4966 9.70499C13.0803 10.0941 13.5358 10.6984 13.5358 11.4478C13.5358 12.1973 13.0803 12.8015 12.4966 13.1907C12.0549 13.4851 11.5063 13.684 10.9096 13.7647V14.0741C10.9096 14.4091 10.638 14.6806 10.3031 14.6806C9.9681 14.6806 9.69656 14.4091 9.69656 14.0741V13.7645C8.83357 13.6474 8.0568 13.2819 7.5698 12.7208C7.35024 12.4678 7.37733 12.0847 7.63031 11.8652C7.88329 11.6456 8.26636 11.6727 8.48592 11.9257C8.71697 12.1919 9.14345 12.4318 9.69656 12.5365V10.263C9.09982 10.1823 8.55128 9.98342 8.10959 9.68899C7.52581 9.29985 7.07031 8.69563 7.07031 7.94614C7.07031 7.19665 7.52581 6.59244 8.10959 6.2033C8.55128 5.90886 9.09982 5.71 9.69656 5.62928V5.3199C9.69656 4.98493 9.9681 4.71338 10.3031 4.71338ZM9.69656 6.85766C9.33347 6.92644 9.02055 7.0539 8.78241 7.21264C8.4157 7.45709 8.28336 7.7283 8.28336 7.94614C8.28336 8.16399 8.4157 8.4352 8.78241 8.67964C9.02055 8.83839 9.33347 8.96585 9.69656 9.03463V6.85766ZM10.9096 10.3594V12.5363C11.2727 12.4675 11.5856 12.3401 11.8237 12.1813C12.1905 11.9369 12.3228 11.6657 12.3228 11.4478C12.3228 11.23 12.1905 10.9588 11.8237 10.7143C11.5856 10.5556 11.2727 10.4281 10.9096 10.3594Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    <path fill="currentColor" d="M10.3399 2.51392C6.38177 2.51392 3.1731 5.72259 3.1731 9.6807C3.1731 13.6388 6.38177 16.8475 10.3399 16.8475C14.298 16.8475 17.5067 13.6388 17.5067 9.6807C17.5067 5.72259 14.298 2.51392 10.3399 2.51392ZM1.9231 9.6807C1.9231 5.03224 5.69142 1.26392 10.3399 1.26392C14.9883 1.26392 18.7567 5.03224 18.7567 9.6807C18.7567 14.3292 14.9883 18.0975 10.3399 18.0975C5.69142 18.0975 1.9231 14.3292 1.9231 9.6807Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                                <div class="info">
                                    <div class="text-md text-dark font-medium">Return Policy</div>
                                    <div class="text-sm text-gray-400">100% MONEY BACK  GUARANTEE</div>
                                </div>
                            </div>

                            <div class="flex items-center gap-2">
                                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" ><path fill="currentColor" d="M12.4008 3.76687C12.1453 3.65508 11.8547 3.65508 11.5992 3.76687L5.59918 6.39187C5.23519 6.55112 5 6.91073 5 7.30803V13C5 14.7136 5.61571 16.2833 6.63795 17.5001C7.92137 15.9724 9.84647 15 11.9999 15C14.1534 15 16.0785 15.9724 17.3619 17.5002C18.3843 16.2834 19 14.7136 19 13V7.30803C19 6.91073 18.7648 6.55112 18.4008 6.39187L12.4008 3.76687ZM15.8701 18.8338C14.9525 17.7135 13.5589 17 11.9999 17C10.441 17 9.04741 17.7135 8.12979 18.8337C9.23837 19.5706 10.569 20 12 20C13.4309 20 14.7615 19.5707 15.8701 18.8338ZM10.7975 1.93456C11.5641 1.59919 12.4359 1.59919 13.2025 1.93456L19.2025 4.55956C20.2944 5.03729 21 6.11614 21 7.30803V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13V7.30803C3 6.11614 3.70558 5.03729 4.79754 4.55956L10.7975 1.93456ZM12 8.5C11.0335 8.5 10.25 9.2835 10.25 10.25C10.25 11.2165 11.0335 12 12 12C12.9665 12 13.75 11.2165 13.75 10.25C13.75 9.2835 12.9665 8.5 12 8.5ZM8.25 10.25C8.25 8.17893 9.92893 6.5 12 6.5C14.0711 6.5 15.75 8.17893 15.75 10.25C15.75 12.3211 14.0711 14 12 14C9.92893 14 8.25 12.3211 8.25 10.25Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                                <div class="info">
                                    <div class="text-md text-dark font-medium">Confidentiality</div>
                                    <div class="text-sm text-gray-400">SKILL HUB PROTECTS YOUR PRIVACY</div>
                                </div>
                            </div>

                            <div class="flex items-center gap-2">
                                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"></path></svg>
                                <div class="footer-text">
                                    <div class="text-md text-dark font-medium">Data Protection</div>
                                    <div class="text-sm text-gray-400 ">YOUR INFORMATION IS SECURE</div>
                                </div>
                            </div>
                        </div>
                        <div class="m-auto text-sm ">
                            <div class="text-center">Have questions? Feel free to <a href="#" class="text-primary">contact us</a>.</div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-12 bg-white p-4 rounded-lg shadow-md mt-4 mt-md-0 h-fit" style={{ maxWidth: '330px' }}>
                    <div className='flex items-center justify-between mb-3'>
                        <h2 className="text-lg font-semibold">ORDER SUMMARY</h2>
                        <p className="text-gray-600 font-medium text-sm">6 ITEMS</p>
                    </div>
                    <div className="mt-2 text-sm">
                        <p className="flex justify-between text-gray-500 font-medium mb-1.5">Subtotal: <span>${subtotal.toFixed(2)}</span></p>
                        <p className="flex justify-between text-gray-500 font-medium mb-1.5">Bundle Discount: <span style={{ color: '#13c4cc' }}>-${bundleDiscount.toFixed(2)}</span></p>
                        <p className="flex justify-between text-gray-500 font-medium mb-1.5">Special Offers: <span style={{ color: '#13c4cc' }}>-${specialOffers.toFixed(2)}</span></p>
                        <hr className="my-3" />
                        <p className="flex justify-between font-medium mb-3 text-lg mt-4">Total Price: <span>${(subtotal - bundleDiscount - specialOffers).toFixed(2)}</span></p>
                    </div>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="school-inputs mt-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        className="w-full text-white p-3 rounded-lg mt-4 text-sm" style={{ background: '#13c4cc' }}
                        onClick={handleCheckout}
                    >
                        ENROLL
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
