"use client";

import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { MyContext } from "../layout";
import { FaSyncAlt, FaTrashAlt } from "react-icons/fa"; // Icons for buttons
import Link from "next/link";

function SignInSecurity() {
    const context = useContext(MyContext);
    const [editgooglesettings, seteditgooglesettings] = useState(false);

    return (
        <div className="container rounded bg-white h-auto">
            <div className="row p-4">
                <div className="col-12 p-0">
                    <h1 style={{ fontSize: '24px', fontWeight: '700' }} >Sign In & Security</h1>
                </div>
                <hr className="my-3" />
                <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                    <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Password</h2>
                    <p style={{ fontSize: '15px', color: 'grey' }}>Keep your security secure by changing your password at least every 120 days.</p>
                </div>
                <div className="bg-white col-xl-7 col-md-12 border-gray-100 rounded-lg border-2 p-4">
                    <div className="flex items-center justify-between">
                        {/* Icon and Password Info */}
                        <div className="flex items-center">
                            <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-center">
                                <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M6 8a6 6 0 1 1 12 0v2.15c.283.062.554.152.816.286a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 17.71 3 17.046 3 16.242v-.483c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.262-.134.533-.224.816-.286zm2 2.002q.356-.003.759-.002h6.482q.403 0 .759.002V8a4 4 0 0 0-8 0zm-1.089 2.036c-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C5 14.361 5 14.943 5 15.8v.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C7.361 20 7.943 20 8.8 20h6.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C16.639 12 16.057 12 15.2 12H8.8c-.857 0-1.439 0-1.889.038" fill-rule="evenodd"></path></svg>
                            </div>
                            <div className="ml-4">
                                <h2 className="text-lg font-semibold">Password</h2>
                                <p className="text-gray-500 text-sm mt-1">Last changed October 22nd, 2023 03:10</p>
                            </div>
                        </div>

                        {/* Change Password Button */}
                        <button onClick={() => context.setchangePassword(!context.changePassword)} className="btn btn-dark px-3 py-2 rounded-md shadow-sm" style={{ fontSize: '12px' }}>
                            Change Password
                        </button>
                    </div>
                </div>
            </div>
            <div className="row p-4">
                <div className="col-xl-5 col-md-12 pt-3 pl-0 mb-3 mb-xl-0">
                    <h2 className="popup-title mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Social Accounts</h2>
                    <p style={{ fontSize: '15px', color: 'grey' }}>Connect your social media accounts to make signin easier.</p>
                </div>
                <div className="bg-white col-xl-7 col-md-12 border-gray-100 rounded-lg border-2 p-4">
                    <div className={`${editgooglesettings === true ? 'bg-gray-100 p-3 rounded-lg' : ''}`}>
                        <div className="flex items-center justify-between">
                            {/* Icon and Password Info */}
                            <div className="flex items-center">
                                <div className="bg-gray-200 rounded-lg p-2 flex items-center justify-center">
                                    <FcGoogle className="p-0 w-8 h-8" />
                                </div>
                                <div className="ml-4">
                                    <h2 className="text-lg font-semibold">Google</h2>
                                    <p className="text-gray-500 text-sm mt-1">You are connected to your Google Account</p>
                                </div>
                            </div>

                            {/* Change Password Button */}
                            <button onClick={() => seteditgooglesettings(!editgooglesettings)} className="btn flex items-center btn-light text-dark border border-dark px-3 py-1 fw-bold rounded-md shadow-sm" style={{ fontSize: '12px' }}>
                                Edit  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7 text-gray-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    style={{ transform: editgooglesettings === true ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform all 0.1s ease' }}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        {editgooglesettings &&
                            <div className="flex justify-between flex-col gap-4 md:gap-0 md:flex-row items-start md:items-center bg-white shadow-sm mt-4 rounded-lg p-4">
                                {/* Profile Information */}
                                <div className="flex items-center">
                                    {/* Profile Photo */}
                                    <div className="w-12 h-12 mt-1 rounded-full bg-gray-400 flex items-center justify-center text-xl font-semibold text-white">
                                        <h2 className="mb-1">A</h2>
                                    </div>
                                    {/* Username */}
                                    <div className="ml-4">
                                        <h2 className="text-sm font-medium">Profile photo</h2>
                                        <p className="text-gray-600 text-sm mt-1">abcxy@gmail.com</p>
                                    </div>
                                </div>

                                {/* Status and Actions */}
                                <div className="flex items-center justify-end">
                                    {/* Status */}
                                    <div className="mr-6">
                                        <h2 className="text-sm font-medium">Status</h2>
                                        <div className="flex items-center">
                                            <span className="w-3 h-3 bg-green-500 rounded-full mr-2 mt-2"></span>
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex space-x-3 mt-1 flex-col md:flex-row gap-3 md:gap-0">
                                        {/* Reconnect Button */}
                                        <button className="flex items-center space-x-1 px-4 py-2 bg-white border rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                                            <FaSyncAlt />
                                            <span>Reconnect</span>
                                        </button>
                                        {/* Disconnect Button */}
                                        <button className="flex items-center space-x-1 px-4 py-2 bg-white border border-red-500 rounded-md shadow-sm text-sm font-medium text-red-500 hover:bg-red-50">
                                            <FaTrashAlt />
                                            <span>Disconnect</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <hr className="my-4 text-gray-500" />
                    <div className="flex items-center justify-between">
                        {/* Icon and Password Info */}
                        <div className="flex items-center">
                            <div className="bg-gray-200 rounded-lg p-2 flex items-center justify-center">
                                <FaFacebook style={{ fill: '#1877F6' }} className="p-0 w-8 h-8" />
                            </div>
                            <div className="ml-4">
                                <h2 className="text-lg font-semibold">Facebook</h2>
                                <p className="text-gray-500 text-sm mt-1">Signin to Punchline using Facebook</p>
                            </div>
                        </div>

                        {/* Change Password Button */}
                        <Link target="_blank"
                            rel="noopener noreferrer" href='https://developers.facebook.com/docs/facebook-login' className="btn btn-light text-gray border px-3 py-2 fw-medium rounded-md shadow-sm" style={{ fontSize: '12px' }}>
                            Connect to Facebook
                        </Link>
                    </div><hr className="my-4 text-gray-500" />
                    <div className="flex items-center justify-between">
                        {/* Icon and Password Info */}
                        <div className="flex items-center">
                            <div className="bg-gray-200 rounded-lg p-2 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48" fill="none">
                                    <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" fill="#020202" />
                                    <path d="M22.3774 26.651L27.4878 33H35L26.567 22.522L33.5834 15H30.7395L25.2481 20.886L20.5122 15H13L21.0595 25.015L13.6117 33H16.4556L22.3774 26.651ZM28.561 31L17.2927 17H19.439L30.7073 31H28.561Z" fill="#E4E4E4" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h2 className="text-lg font-semibold">Twitter</h2>
                                <p className="text-gray-500 text-sm mt-1">Signin to Punchline using Twitter</p>
                            </div>
                        </div>

                        {/* Change Password Button */}
                        <Link target="_blank"
                            rel="noopener noreferrer" href='https://docs.x.com/resources/fundamentals/authentication/guides/log-in-with-x' className="btn btn-light text-gray border px-3 py-2 fw-medium rounded-md shadow-sm" style={{ fontSize: '12px' }}>
                            Connect to Twitter
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInSecurity;
