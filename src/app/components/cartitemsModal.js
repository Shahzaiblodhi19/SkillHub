"use client";
import React, { useContext, useState } from "react";
import Logo from '../assets/logo.svg';
import Image from "next/image";
import { MyContext } from "../layout";
import { FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";


export default function CartItemModal() {
    const context = useContext(MyContext)
    const toggleModal2 = () => context.setcartItem(!context.cartItem);


    return (
        <>
            {/* Modal */}
            {context.cartItem && (
                <div className="modal-overlay">
                    <div className="modal-container cartitemmodal" style={{ width: '45%' }}>
                        <div className="flex flex-wrap align-items-center justify-content-between">
                            <h1 className="fw-bold">Item Added to cart</h1>
                            <button className="close-btn" onClick={toggleModal2}>
                                ✖
                            </button>
                        </div>
                        <div className="flex items-center justify-between mt-4 pb-2 flex-wrap gap-4 md:gap-0">
                            <div className="flex items-start gap-3 flex-col md:flex-row md:items-center">
                                <FaCircleCheck fontSize={20} style={{ fill: '#5FC0ED' }} />
                                <img className="w-16 h-16 rounded-lg" src="https://i.ibb.co/tK5s859/preview1.jpg" alt="" />
                                <div className="info items-start text-start flex-wrap">
                                    <h1 className="fw-bold">Learning Python for Data Analysis and <br /> Visualization</h1>
                                    <p className="course-description text-sm mt-1">
                                        Learn Python Programming and how to use Python...
                                    </p>
                                </div>
                            </div>
                            <Link href='/checkout' onClick={() => context.setcartItem(false)} className="btn btn-dark text-sm btn-sm px-4 py-2.5 w-auto">Go to cart</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
