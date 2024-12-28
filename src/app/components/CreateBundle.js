"use client";
import { useContext, useState } from "react";
import { MyContext } from "../layout";

const CreateBundle = () => {
    const [bundleName, setBundleName] = useState("");
    const [description, setDescription] = useState("");
    const [bundlePrice, setBundlePrice] = useState(0);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const context = useContext(MyContext);

    // Sample product list
    const products = [
        { id: 1, type: "Course", name: "Advanced UI/UX Design Masterclass", image: 'https://i.ibb.co/jJ4GHXP/img1.jpg', price: 199 },
        { id: 2, type: "Course", name: "Responsive Web Design Fundamentals", image: 'https://i.ibb.co/Csdq4rd/newsletter-image.png', price: 149 },
        { id: 3, type: "Event", name: "Design Systems Workshop 2024", image: "https://i.ibb.co/hBpWGQ7/c3.jpg", price: 299 },
    ];

    // Add product to the bundle
    const addProduct = (product) => {
        if (!selectedProducts.find((p) => p.id === product.id)) {
            setSelectedProducts([...selectedProducts, product]);
            setBundlePrice((prev) => prev + product.price);
        }
    };

    // Remove product from the bundle
    const removeProduct = (productId) => {
        const filteredProducts = selectedProducts.filter((p) => p.id !== productId);
        const removedProduct = selectedProducts.find((p) => p.id === productId);
        setSelectedProducts(filteredProducts);
        setBundlePrice((prev) => prev - removedProduct.price);
    };

    // Filter products based on search query
    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !selectedProducts.some((p) => p.id === product.id)
    );

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const bundleData = {
            bundleName,
            description,
            bundlePrice,
            selectedProducts,
        };
        alert(JSON.stringify(bundleData, null, 2));
    };

    return (
        context.AddBundleModal &&
        <div className="modal-overlay h-screen" style={{ overflowY: 'auto' }}>
            <div className="modal-container h-screen" style={{ width: '430px', textAlign: 'left', height: `calc(100vh - 80px)`, }}>
                <div className="modal-header mb-4 flex-row" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <h2 className="mt-0">Create Bundle</h2>
                    <button onClick={() => context.setAddBundleModal(!context.AddBundleModal)} className="close-button">✖</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="bundleName" className="form-label">Bundle Name</label>
                        <input
                            type="text"
                            id="bundleName"
                            className="school-inputs"
                            value={bundleName}
                            onChange={(e) => setBundleName(e.target.value)}
                            placeholder="Bundle Name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onResize={'both'}
                            className="school-inputs"
                            style={{ height: '90px' }}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="A bundle of all design..."
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bundlePrice" className="form-label">Bundle Price</label>
                        <input
                            type="text"
                            className="school-inputs"
                            id="bundlePrice"
                            value={`$ ${bundlePrice}`}
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label mb-3">Selected Products ({selectedProducts.length})</label>
                        {selectedProducts.map((product) => (
                            <div key={product.id} className="selected-product flex items-center justify-between mb-4 cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <img width={55} height={55} className="rounded" src={product.image} />
                                    <div className="info flex flex-col">
                                        <div className="flex items-center gap-3">
                                            <div className="inline-flex items-center gap-1" style={product.type === 'Course' ? { backgroundColor: '#dbe9fe', borderRadius: '100px', color: '#1c4ed8', fontWeight: '500', fontSize: '13px', padding: '2px 9px' } : { padding: '2px 9px', borderRadius: '100px', backgroundColor: '#fee2e1', color: '#991b1b', fontWeight: '500', fontSize: '13px' }}>
                                                {product.type === 'Course' ? <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                </svg> : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clipRule="evenodd" fillRule="evenodd"></path>
                                                </svg>}
                                                <span className="product-type mb-1">{product.type}</span>
                                            </div>
                                            <div className="inline-flex items-center gap-1" style={{ backgroundColor: '#e2e2e0', color: '#000', fontWeight: '500', fontSize: '13px', padding: '2px 9px', borderRadius: '100px' }}>
                                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path fill="#343332" d="M10.3031 4.71338C10.638 4.71338 10.9096 4.98493 10.9096 5.3199V5.62947C11.7726 5.74654 12.5494 6.11208 13.0363 6.67319C13.2559 6.92617 13.2288 7.30925 12.9758 7.52881C12.7229 7.74837 12.3398 7.72128 12.1202 7.4683C11.8892 7.20209 11.4627 6.96219 10.9096 6.85747V9.13097C11.5063 9.2117 12.0549 9.41056 12.4966 9.70499C13.0803 10.0941 13.5358 10.6984 13.5358 11.4478C13.5358 12.1973 13.0803 12.8015 12.4966 13.1907C12.0549 13.4851 11.5063 13.684 10.9096 13.7647V14.0741C10.9096 14.4091 10.638 14.6806 10.3031 14.6806C9.9681 14.6806 9.69656 14.4091 9.69656 14.0741V13.7645C8.83357 13.6474 8.0568 13.2819 7.5698 12.7208C7.35024 12.4678 7.37733 12.0847 7.63031 11.8652C7.88329 11.6456 8.26636 11.6727 8.48592 11.9257C8.71697 12.1919 9.14345 12.4318 9.69656 12.5365V10.263C9.09982 10.1823 8.55128 9.98342 8.10959 9.68899C7.52581 9.29985 7.07031 8.69563 7.07031 7.94614C7.07031 7.19665 7.52581 6.59244 8.10959 6.2033C8.55128 5.90886 9.09982 5.71 9.69656 5.62928V5.3199C9.69656 4.98493 9.9681 4.71338 10.3031 4.71338ZM9.69656 6.85766C9.33347 6.92644 9.02055 7.0539 8.78241 7.21264C8.4157 7.45709 8.28336 7.7283 8.28336 7.94614C8.28336 8.16399 8.4157 8.4352 8.78241 8.67964C9.02055 8.83839 9.33347 8.96585 9.69656 9.03463V6.85766ZM10.9096 10.3594V12.5363C11.2727 12.4675 11.5856 12.3401 11.8237 12.1813C12.1905 11.9369 12.3228 11.6657 12.3228 11.4478C12.3228 11.23 12.1905 10.9588 11.8237 10.7143C11.5856 10.5556 11.2727 10.4281 10.9096 10.3594Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    <path fill="#343332" d="M10.3399 2.51392C6.38177 2.51392 3.1731 5.72259 3.1731 9.6807C3.1731 13.6388 6.38177 16.8475 10.3399 16.8475C14.298 16.8475 17.5067 13.6388 17.5067 9.6807C17.5067 5.72259 14.298 2.51392 10.3399 2.51392ZM1.9231 9.6807C1.9231 5.03224 5.69142 1.26392 10.3399 1.26392C14.9883 1.26392 18.7567 5.03224 18.7567 9.6807C18.7567 14.3292 14.9883 18.0975 10.3399 18.0975C5.69142 18.0975 1.9231 14.3292 1.9231 9.6807Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                </svg>
                                                <span className="product-price mb-1">${product.price}</span>
                                            </div>
                                        </div>
                                        <span className="product-name mt-1" style={{ fontSize: '13px', fontWeight: '600' }}>{product.name}</span>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeProduct(product.id)}
                                >
                                    ✖
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="form-group position-relative">
                        <svg className="absolute top-2.5 left-3" width='20' height='20' viewBox="1 1 60 60">
                            <path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"></path><path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"></path>
                        </svg>
                        <input
                            type="text"
                            className="school-inputs"
                            style={{ paddingLeft: '38px' }}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                        />
                        {filteredProducts.length > 0 && (
                            <ul className="product-list mt-4">
                                {filteredProducts.map((product) => (
                                    <li className="flex items-center justify-between mb-4 cursor-pointer" key={product.id} onClick={() => addProduct(product)}>
                                        <div className="flex items-center gap-3">
                                            <img width={55} height={55} className="rounded" src={product.image} />
                                            <div className="">
                                                <div className="inline-flex items-center gap-1  rounded" style={product.type === 'Course' ? { backgroundColor: '#dbe9fe', color: '#1c4ed8', fontWeight: '500', fontSize: '13px', padding: '2px 7px' } : { padding: '2px 7px', backgroundColor: '#fee2e1', color: '#991b1b', fontWeight: '500', fontSize: '13px' }}>
                                                    {product.type === 'Course' ? <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                    </svg> : <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M5 6.75C4.66848 6.75 4.35054 6.8817 4.11612 7.11612C3.8817 7.35054 3.75 7.66848 3.75 8V16C3.75 16.3315 3.8817 16.6495 4.11612 16.8839C4.35054 17.1183 4.66848 17.25 5 17.25H13C13.3315 17.25 13.6495 17.1183 13.8839 16.8839C14.1183 16.6495 14.25 16.3315 14.25 16V8C14.25 7.66848 14.1183 7.35054 13.8839 7.11612C13.6495 6.8817 13.3315 6.75 13 6.75H5ZM15.75 8.78622V8C15.75 7.27065 15.4603 6.57118 14.9445 6.05546C14.4288 5.53973 13.7293 5.25 13 5.25H5C4.27065 5.25 3.57118 5.53973 3.05546 6.05546C2.53973 6.57118 2.25 7.27065 2.25 8V16C2.25 16.7293 2.53973 17.4288 3.05546 17.9445C3.57118 18.4603 4.27065 18.75 5 18.75H13C13.7293 18.75 14.4288 18.4603 14.9445 17.9445C15.4603 17.4288 15.75 16.7293 15.75 16V15.213L19.2176 16.9465C19.4844 17.0798 19.7809 17.1427 20.0787 17.1293C20.3766 17.1159 20.6661 17.0266 20.9198 16.8699C21.1735 16.7131 21.3829 16.4942 21.5282 16.2338C21.6735 15.9734 21.7498 15.6802 21.75 15.382V8.61763C21.7498 8.31945 21.6735 8.02585 21.5282 7.76546C21.3829 7.50506 21.1735 7.28612 20.9198 7.12939C20.6661 6.97266 20.3766 6.88335 20.0787 6.86994C19.7809 6.85652 19.4845 6.91944 19.2177 7.05273L15.75 8.78622ZM15.75 10.4632V13.5361L19.8883 15.6047C19.8882 15.6047 19.8883 15.6047 19.8883 15.6047C19.9263 15.6237 19.9687 15.6328 20.0112 15.6308C20.0538 15.6289 20.0952 15.6162 20.1314 15.5938C20.1676 15.5714 20.1976 15.5401 20.2183 15.5029C20.2391 15.4657 20.25 15.4238 20.25 15.3812V8.61803C20.25 8.57543 20.2391 8.53354 20.2183 8.49635C20.1976 8.45915 20.1676 8.42787 20.1314 8.40548C20.0952 8.38309 20.0538 8.37033 20.0112 8.36842C19.9687 8.3665 19.9264 8.37547 19.8884 8.39448C19.8883 8.3945 19.8884 8.39446 19.8884 8.39448L15.75 10.4632Z" clipRule="evenodd" fillRule="evenodd"></path>
                                                    </svg>}
                                                    <span className="product-type mb-1">{product.type}</span>
                                                </div> <br />
                                                <span className="product-name" style={{ fontSize: '13px', fontWeight: '600' }}>{product.name}</span>
                                            </div>
                                        </div>
                                        <span className="product-price" style={{ fontSize: '13.5px', fontWeight: '500' }}>${product.price}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <hr />
                    <div className="flex items-center justify-end w-100">
                        <button type="submit" className="submit-btn mt-3" style={{ marginLeft: 'auto' }}>
                            Create Bundle
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBundle;
