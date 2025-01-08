import { useContext, useState } from "react";
import { MyContext } from "../layout";
import { FaBook, FaBox, FaRegFileAlt } from "react-icons/fa";

export default function BillingInvoicesModal() {
    const context = useContext(MyContext);
    const toggleModal = () => {
        context.setbillingInvoices(!context.billingInvoices);
    };
    const tableData = [
        {
            item: "Advanced Python Course",
            paymentType: "Subscription",
            productType: "Course",
            amount: "$89.00",
            status: { text: "Completed", color: "green" },
            date: "July 9, 2023",
            gateway: "Stripe",
        },
        {
            item: "Web Development Bundle",
            paymentType: "Installment",
            productType: "Bundle",
            amount: "$56.00",
            status: { text: "Pending", color: "yellow" },
            date: "April 18, 2023",
            gateway: "PayPal",
        },
        {
            item: "Mobile App Development Course",
            paymentType: "One Off",
            productType: "Subscription",
            amount: "$199.00",
            status: { text: "Rejected", color: "red" },
            date: "April 14, 2023",
            gateway: "Stripe",
        },
        {
            item: "UI/UX Design Masterclass",
            paymentType: "Subscription",
            productType: "Course",
            amount: "$149.99",
            status: { text: "Refunded", color: "blue" },
            date: "March 25, 2023",
            gateway: "PayPal",
        },
    ];

    return (
        context.billingInvoices && (
            <div
                className="modal-overlay h-screen fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 w-100"
                style={{ overflowY: "auto" }}
            >
                <div
                    className="modal-container bg-white rounded-lg shadow-lg py-4"
                    style={{ textAlign: "left", width: '90%' }}
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-gray-800">Payment History</h2>
                        <button className="close-btn text-gray-500 hover:text-gray-800" onClick={toggleModal}>
                            ✖
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-max border-collapse text-left">
                            {/* Table Header */}
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
                                    <th className="px-4 py-3">Item</th>
                                    <th className="px-4 py-3">Payment Type</th>
                                    <th className="px-4 py-3">Product Type</th>
                                    <th className="px-4 py-3">Amount</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Gateway</th>
                                    <th className="px-4 py-3">Invoice</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr
                                        key={index}
                                        className="border-b hover:bg-gray-50 transition-colors text-gray-500" style={{ fontWeight: '500' }}
                                    >
                                        <td className="px-4 py-3 font-medium">{row.item}</td>
                                        <td className="px-4 py-3">{row.paymentType}</td>
                                        <td className="px-4 py-3 flex items-center space-x-1.5">
                                            {row.productType === "Course" && (
                                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                                </svg>
                                            )}
                                            {row.productType === "Bundle" && (
                                                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24"><path fill="#4F4F4F" d="M3 1h18a3 3 0 0 1 3 3v8H2v5a1 1 0 0 0 1 1h7v2H3a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3ZM2 4v2h20V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm11.8 10.81a2.7 2.7 0 0 1 4.2.43 2.7 2.7 0 0 1 4.2-.43 2.8 2.8 0 0 1 0 3.92L18 23l-4.2-4.27a2.8 2.8 0 0 1 0-3.92Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                                            )}
                                            {row.productType === "Subscription" && (
                                                <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path fill="#4F4F4F" d="M17 12.7992V13.5992C17.4418 13.5992 17.8 13.241 17.8 12.7992H17ZM17 8.39922H17.8C17.8 7.95739 17.4418 7.59922 17 7.59922V8.39922ZM4.96739 4.12628C4.59574 4.3652 4.48814 4.86017 4.72706 5.23183C4.96598 5.60348 5.46095 5.71108 5.83261 5.47216L4.96739 4.12628ZM11 1.19922L11.6315 0.708066C11.3773 0.381231 10.9157 0.302372 10.5674 0.526276L11 1.19922ZM13.1685 5.29037C13.4398 5.63913 13.9424 5.70196 14.2912 5.4307C14.6399 5.15945 14.7027 4.65682 14.4315 4.30807L13.1685 5.29037ZM17 11.9992H14.4V13.5992H17V11.9992ZM14.4 9.19922H17V7.59922H14.4V9.19922ZM16.2 8.39922V12.7992H17.8V8.39922H16.2ZM13 10.5992C13 9.82602 13.6268 9.19922 14.4 9.19922V7.59922C12.7431 7.59922 11.4 8.94237 11.4 10.5992H13ZM14.4 11.9992C13.6268 11.9992 13 11.3724 13 10.5992H11.4C11.4 12.2561 12.7431 13.5992 14.4 13.5992V11.9992ZM5.83261 5.47216L11.4326 1.87216L10.5674 0.526276L4.96739 4.12628L5.83261 5.47216ZM10.3685 1.69037L13.1685 5.29037L14.4315 4.30807L11.6315 0.708066L10.3685 1.69037ZM1.8 5.59922H15.4V3.99922H1.8V5.59922ZM15.4 15.9992H1.8V17.5992H15.4V15.9992ZM1.8 15.9992V5.59922H0.2V15.9992H1.8ZM1.8 15.9992H1.8H0.2C0.2 16.8829 0.916343 17.5992 1.8 17.5992V15.9992ZM15.4 15.9992H15.4V17.5992C16.2837 17.5992 17 16.8829 17 15.9992H15.4ZM15.4 5.59922H15.4H17C17 4.71556 16.2837 3.99922 15.4 3.99922V5.59922ZM1.8 3.99922C0.916344 3.99922 0.2 4.71556 0.2 5.59922H1.8H1.8V3.99922ZM15.4 13.3992V15.9992H17V13.3992H15.4ZM15.4 5.59922V7.69922H17V5.59922H15.4Z" />
                                                </svg>
                                            )}
                                            <span>{row.productType}</span>
                                        </td>
                                        <td className="px-4 py-3">{row.amount}</td>
                                        <td className="px-4 py-3 flex items-center">
                                            <span
                                                className={`w-2 h-2 rounded-full bg-${row.status.color}-500 inline-block mr-2`}
                                            ></span>
                                            {row.status.text}
                                        </td>
                                        <td className="px-4 py-3">{row.date}</td>
                                        <td className="px-4 py-3">{row.gateway}</td>
                                        <td className="px-4 py-3">
                                            <button className="px-3 py-1.5 text-sm rounded-md" style={{ border: '2px solid #60A6CA', color: '#60A6CA' }}>
                                                Invoice
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    );
}
