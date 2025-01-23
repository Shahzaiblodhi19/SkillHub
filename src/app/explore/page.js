"use client";
import profile from '../assets/profile.png';
import Image from "next/image";

import { useContext, useEffect, useState } from "react";
import { MyContext } from '../layout';
import Link from 'next/link';

export default function Explore() {
    const context = useContext(MyContext)
    const allCourses = [
        {
            id: 1,
            title: "The 7 Habits of Highly Effective People",
            author: "Stephen Covey",
            price: "$14.99",
            originalPrice: "$99.99",
            students: "35K Students",
            img: "https://i.ibb.co/640kJN2/c1.jpg",
            details: {
                type: "Course",
                duration: "1.5h",
                rating: "4.8",
                reviews: "(2.3k)",
                icons: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150" fill="none">
                    <path d="M0 20C0 8.9543 8.95431 0 20 0H130C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.9543 150 0 141.046 0 130V20Z" fill="#4287C4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.7097 44.3429C52.298 44.3429 50.9442 44.8998 49.9461 45.891C48.9479 46.8823 48.3871 48.2267 48.3871 49.6286V90.0135C50.0203 89.186 51.842 88.7429 53.7097 88.7429H101.613V44.3429H53.7097ZM108 41.1714C108 39.4199 106.57 38 104.806 38H53.7097C50.6041 38 47.6257 39.2251 45.4297 41.4059C43.2337 43.5867 42 46.5445 42 49.6286V100.371C42 103.455 43.2337 106.413 45.4297 108.594C47.6257 110.775 50.6041 112 53.7097 112H104.806C106.57 112 108 110.58 108 108.829V41.1714ZM101.613 95.0857H53.7097C52.298 95.0857 50.9442 95.6426 49.9461 96.6338C48.9479 97.625 48.3871 98.9697 48.3871 100.371C48.3871 101.773 48.9479 103.118 49.9461 104.109C50.9442 105.1 52.298 105.657 53.7097 105.657H101.613V95.0857ZM59.0323 58.0857C59.0323 56.3342 60.4621 54.9143 62.2258 54.9143H87.7742C89.5379 54.9143 90.9677 56.3342 90.9677 58.0857C90.9677 59.8372 89.5379 61.2571 87.7742 61.2571H62.2258C60.4621 61.2571 59.0323 59.8372 59.0323 58.0857Z" fill="#9BDEF8" />
                </svg>)
            },
        },
        {
            id: 2,
            title: "How to Win Friends and Influence People",
            author: "Dale Carnegie",
            price: "$19.99",
            originalPrice: "$99.99",
            students: "39K Students",
            img: "https://i.ibb.co/GFhHTqZ/c2.jpg",
            details: {
                type: "Course",
                duration: "2h",
                rating: "4.7",
                reviews: "(1.5k)",
                icons: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150" fill="none">
                    <path d="M0 20C0 8.9543 8.95431 0 20 0H130C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.9543 150 0 141.046 0 130V20Z" fill="#4287C4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.7097 44.3429C52.298 44.3429 50.9442 44.8998 49.9461 45.891C48.9479 46.8823 48.3871 48.2267 48.3871 49.6286V90.0135C50.0203 89.186 51.842 88.7429 53.7097 88.7429H101.613V44.3429H53.7097ZM108 41.1714C108 39.4199 106.57 38 104.806 38H53.7097C50.6041 38 47.6257 39.2251 45.4297 41.4059C43.2337 43.5867 42 46.5445 42 49.6286V100.371C42 103.455 43.2337 106.413 45.4297 108.594C47.6257 110.775 50.6041 112 53.7097 112H104.806C106.57 112 108 110.58 108 108.829V41.1714ZM101.613 95.0857H53.7097C52.298 95.0857 50.9442 95.6426 49.9461 96.6338C48.9479 97.625 48.3871 98.9697 48.3871 100.371C48.3871 101.773 48.9479 103.118 49.9461 104.109C50.9442 105.1 52.298 105.657 53.7097 105.657H101.613V95.0857ZM59.0323 58.0857C59.0323 56.3342 60.4621 54.9143 62.2258 54.9143H87.7742C89.5379 54.9143 90.9677 56.3342 90.9677 58.0857C90.9677 59.8372 89.5379 61.2571 87.7742 61.2571H62.2258C60.4621 61.2571 59.0323 59.8372 59.0323 58.0857Z" fill="#9BDEF8" />
                </svg>)
            },
        },
        {
            id: 3,
            title: "Think and Grow Rich",
            author: "Napoleon Hill",
            price: "$24.99",
            originalPrice: "$99.99",
            students: "28K Students",
            img: "https://i.ibb.co/hBpWGQ7/c3.jpg",
            details: {
                type: "Course",
                duration: "3h",
                rating: "4.9",
                reviews: "(3.1k)",
                icons: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150" fill="none">
                    <path d="M0 20C0 8.9543 8.95431 0 20 0H130C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.9543 150 0 141.046 0 130V20Z" fill="#4287C4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.7097 44.3429C52.298 44.3429 50.9442 44.8998 49.9461 45.891C48.9479 46.8823 48.3871 48.2267 48.3871 49.6286V90.0135C50.0203 89.186 51.842 88.7429 53.7097 88.7429H101.613V44.3429H53.7097ZM108 41.1714C108 39.4199 106.57 38 104.806 38H53.7097C50.6041 38 47.6257 39.2251 45.4297 41.4059C43.2337 43.5867 42 46.5445 42 49.6286V100.371C42 103.455 43.2337 106.413 45.4297 108.594C47.6257 110.775 50.6041 112 53.7097 112H104.806C106.57 112 108 110.58 108 108.829V41.1714ZM101.613 95.0857H53.7097C52.298 95.0857 50.9442 95.6426 49.9461 96.6338C48.9479 97.625 48.3871 98.9697 48.3871 100.371C48.3871 101.773 48.9479 103.118 49.9461 104.109C50.9442 105.1 52.298 105.657 53.7097 105.657H101.613V95.0857ZM59.0323 58.0857C59.0323 56.3342 60.4621 54.9143 62.2258 54.9143H87.7742C89.5379 54.9143 90.9677 56.3342 90.9677 58.0857C90.9677 59.8372 89.5379 61.2571 87.7742 61.2571H62.2258C60.4621 61.2571 59.0323 59.8372 59.0323 58.0857Z" fill="#9BDEF8" />
                </svg>)
            },
        },
        {
            id: 4,
            title: "The Power of Habit",
            author: "Charles Duhigg",
            price: "$16.99",
            originalPrice: "$99.99",
            students: "42K Students",
            img: "https://i.ibb.co/NKffPZQ/c4.jpg",
            details: {
                type: "Course",
                duration: "1h",
                rating: "4.6",
                reviews: "(2.8k)",
                icons: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150" fill="none">
                    <path d="M0 20C0 8.9543 8.95431 0 20 0H130C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.9543 150 0 141.046 0 130V20Z" fill="#4287C4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.7097 44.3429C52.298 44.3429 50.9442 44.8998 49.9461 45.891C48.9479 46.8823 48.3871 48.2267 48.3871 49.6286V90.0135C50.0203 89.186 51.842 88.7429 53.7097 88.7429H101.613V44.3429H53.7097ZM108 41.1714C108 39.4199 106.57 38 104.806 38H53.7097C50.6041 38 47.6257 39.2251 45.4297 41.4059C43.2337 43.5867 42 46.5445 42 49.6286V100.371C42 103.455 43.2337 106.413 45.4297 108.594C47.6257 110.775 50.6041 112 53.7097 112H104.806C106.57 112 108 110.58 108 108.829V41.1714ZM101.613 95.0857H53.7097C52.298 95.0857 50.9442 95.6426 49.9461 96.6338C48.9479 97.625 48.3871 98.9697 48.3871 100.371C48.3871 101.773 48.9479 103.118 49.9461 104.109C50.9442 105.1 52.298 105.657 53.7097 105.657H101.613V95.0857ZM59.0323 58.0857C59.0323 56.3342 60.4621 54.9143 62.2258 54.9143H87.7742C89.5379 54.9143 90.9677 56.3342 90.9677 58.0857C90.9677 59.8372 89.5379 61.2571 87.7742 61.2571H62.2258C60.4621 61.2571 59.0323 59.8372 59.0323 58.0857Z" fill="#9BDEF8" />
                </svg>)
            },
        },
        {
            id: 5,
            title: "Atomic Habits",
            author: "James Clear",
            price: "$21.99",
            originalPrice: "$109.99",
            students: "53K Students",
            img: "https://i.ibb.co/rkkdzYx/c6.jpg",
            details: {
                type: "Course",
                duration: "2.5h",
                rating: "4.8",
                reviews: "(4.1k)",
                icons: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150" fill="none">
                    <path d="M0 20C0 8.9543 8.95431 0 20 0H130C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.9543 150 0 141.046 0 130V20Z" fill="#4287C4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.7097 44.3429C52.298 44.3429 50.9442 44.8998 49.9461 45.891C48.9479 46.8823 48.3871 48.2267 48.3871 49.6286V90.0135C50.0203 89.186 51.842 88.7429 53.7097 88.7429H101.613V44.3429H53.7097ZM108 41.1714C108 39.4199 106.57 38 104.806 38H53.7097C50.6041 38 47.6257 39.2251 45.4297 41.4059C43.2337 43.5867 42 46.5445 42 49.6286V100.371C42 103.455 43.2337 106.413 45.4297 108.594C47.6257 110.775 50.6041 112 53.7097 112H104.806C106.57 112 108 110.58 108 108.829V41.1714ZM101.613 95.0857H53.7097C52.298 95.0857 50.9442 95.6426 49.9461 96.6338C48.9479 97.625 48.3871 98.9697 48.3871 100.371C48.3871 101.773 48.9479 103.118 49.9461 104.109C50.9442 105.1 52.298 105.657 53.7097 105.657H101.613V95.0857ZM59.0323 58.0857C59.0323 56.3342 60.4621 54.9143 62.2258 54.9143H87.7742C89.5379 54.9143 90.9677 56.3342 90.9677 58.0857C90.9677 59.8372 89.5379 61.2571 87.7742 61.2571H62.2258C60.4621 61.2571 59.0323 59.8372 59.0323 58.0857Z" fill="#9BDEF8" />
                </svg>)
            },
        },
        {
            id: 6,
            title: "Deep Work",
            author: "Cal Newport",
            price: "$17.99",
            originalPrice: "$89.99",
            students: "29K Students",
            img: "https://i.ibb.co/hBpWGQ7/c3.jpg",
            details: {
                type: "Course",
                duration: "3.5h",
                rating: "4.7",
                reviews: "(3.9k)",
                icons: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150" fill="none">
                    <path d="M0 20C0 8.9543 8.95431 0 20 0H130C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.9543 150 0 141.046 0 130V20Z" fill="#4287C4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.7097 44.3429C52.298 44.3429 50.9442 44.8998 49.9461 45.891C48.9479 46.8823 48.3871 48.2267 48.3871 49.6286V90.0135C50.0203 89.186 51.842 88.7429 53.7097 88.7429H101.613V44.3429H53.7097ZM108 41.1714C108 39.4199 106.57 38 104.806 38H53.7097C50.6041 38 47.6257 39.2251 45.4297 41.4059C43.2337 43.5867 42 46.5445 42 49.6286V100.371C42 103.455 43.2337 106.413 45.4297 108.594C47.6257 110.775 50.6041 112 53.7097 112H104.806C106.57 112 108 110.58 108 108.829V41.1714ZM101.613 95.0857H53.7097C52.298 95.0857 50.9442 95.6426 49.9461 96.6338C48.9479 97.625 48.3871 98.9697 48.3871 100.371C48.3871 101.773 48.9479 103.118 49.9461 104.109C50.9442 105.1 52.298 105.657 53.7097 105.657H101.613V95.0857ZM59.0323 58.0857C59.0323 56.3342 60.4621 54.9143 62.2258 54.9143H87.7742C89.5379 54.9143 90.9677 56.3342 90.9677 58.0857C90.9677 59.8372 89.5379 61.2571 87.7742 61.2571H62.2258C60.4621 61.2571 59.0323 59.8372 59.0323 58.0857Z" fill="#9BDEF8" />
                </svg>)
            },
        },
        {
            id: 7,
            title: "Grit",
            author: "Angela Duckworth",
            price: "$19.49",
            originalPrice: "$99.99",
            students: "36K Students",
            img: "https://i.ibb.co/GFhHTqZ/c2.jpg",
            details: {
                type: "Course",
                duration: "2h",
                rating: "4.5",
                reviews: "(3.2k)",
                icons: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150" fill="none">
                    <path d="M0 20C0 8.9543 8.95431 0 20 0H130C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.9543 150 0 141.046 0 130V20Z" fill="#4287C4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.7097 44.3429C52.298 44.3429 50.9442 44.8998 49.9461 45.891C48.9479 46.8823 48.3871 48.2267 48.3871 49.6286V90.0135C50.0203 89.186 51.842 88.7429 53.7097 88.7429H101.613V44.3429H53.7097ZM108 41.1714C108 39.4199 106.57 38 104.806 38H53.7097C50.6041 38 47.6257 39.2251 45.4297 41.4059C43.2337 43.5867 42 46.5445 42 49.6286V100.371C42 103.455 43.2337 106.413 45.4297 108.594C47.6257 110.775 50.6041 112 53.7097 112H104.806C106.57 112 108 110.58 108 108.829V41.1714ZM101.613 95.0857H53.7097C52.298 95.0857 50.9442 95.6426 49.9461 96.6338C48.9479 97.625 48.3871 98.9697 48.3871 100.371C48.3871 101.773 48.9479 103.118 49.9461 104.109C50.9442 105.1 52.298 105.657 53.7097 105.657H101.613V95.0857ZM59.0323 58.0857C59.0323 56.3342 60.4621 54.9143 62.2258 54.9143H87.7742C89.5379 54.9143 90.9677 56.3342 90.9677 58.0857C90.9677 59.8372 89.5379 61.2571 87.7742 61.2571H62.2258C60.4621 61.2571 59.0323 59.8372 59.0323 58.0857Z" fill="#9BDEF8" />
                </svg>)
            },
        },
        {
            id: 8,
            title: "The Lean Startup",
            author: "Eric Ries",
            price: "$15.99",
            originalPrice: "$79.99",
            students: "25K Students",
            img: "https://i.ibb.co/rkkdzYx/c6.jpg",
            details: {
                type: "Course",
                duration: "1.8h",
                rating: "4.6",
                reviews: "(2.5k)",
                icons: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150" fill="none">
                    <path d="M0 20C0 8.9543 8.95431 0 20 0H130C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.9543 150 0 141.046 0 130V20Z" fill="#4287C4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.7097 44.3429C52.298 44.3429 50.9442 44.8998 49.9461 45.891C48.9479 46.8823 48.3871 48.2267 48.3871 49.6286V90.0135C50.0203 89.186 51.842 88.7429 53.7097 88.7429H101.613V44.3429H53.7097ZM108 41.1714C108 39.4199 106.57 38 104.806 38H53.7097C50.6041 38 47.6257 39.2251 45.4297 41.4059C43.2337 43.5867 42 46.5445 42 49.6286V100.371C42 103.455 43.2337 106.413 45.4297 108.594C47.6257 110.775 50.6041 112 53.7097 112H104.806C106.57 112 108 110.58 108 108.829V41.1714ZM101.613 95.0857H53.7097C52.298 95.0857 50.9442 95.6426 49.9461 96.6338C48.9479 97.625 48.3871 98.9697 48.3871 100.371C48.3871 101.773 48.9479 103.118 49.9461 104.109C50.9442 105.1 52.298 105.657 53.7097 105.657H101.613V95.0857ZM59.0323 58.0857C59.0323 56.3342 60.4621 54.9143 62.2258 54.9143H87.7742C89.5379 54.9143 90.9677 56.3342 90.9677 58.0857C90.9677 59.8372 89.5379 61.2571 87.7742 61.2571H62.2258C60.4621 61.2571 59.0323 59.8372 59.0323 58.0857Z" fill="#9BDEF8" />
                </svg>)
            },
        },
        {
            id: 9,
            title: "The Power of Habit",
            author: "Charles Duhigg",
            price: "$16.99",
            originalPrice: "$99.99",
            students: "42K Students",
            img: "https://i.ibb.co/NKffPZQ/c4.jpg",
            details: {
                type: "Course",
                duration: "1h",
                rating: "4.6",
                reviews: "(2.8k)",
                icons: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150" fill="none">
                    <path d="M0 20C0 8.9543 8.95431 0 20 0H130C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.9543 150 0 141.046 0 130V20Z" fill="#4287C4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.7097 44.3429C52.298 44.3429 50.9442 44.8998 49.9461 45.891C48.9479 46.8823 48.3871 48.2267 48.3871 49.6286V90.0135C50.0203 89.186 51.842 88.7429 53.7097 88.7429H101.613V44.3429H53.7097ZM108 41.1714C108 39.4199 106.57 38 104.806 38H53.7097C50.6041 38 47.6257 39.2251 45.4297 41.4059C43.2337 43.5867 42 46.5445 42 49.6286V100.371C42 103.455 43.2337 106.413 45.4297 108.594C47.6257 110.775 50.6041 112 53.7097 112H104.806C106.57 112 108 110.58 108 108.829V41.1714ZM101.613 95.0857H53.7097C52.298 95.0857 50.9442 95.6426 49.9461 96.6338C48.9479 97.625 48.3871 98.9697 48.3871 100.371C48.3871 101.773 48.9479 103.118 49.9461 104.109C50.9442 105.1 52.298 105.657 53.7097 105.657H101.613V95.0857ZM59.0323 58.0857C59.0323 56.3342 60.4621 54.9143 62.2258 54.9143H87.7742C89.5379 54.9143 90.9677 56.3342 90.9677 58.0857C90.9677 59.8372 89.5379 61.2571 87.7742 61.2571H62.2258C60.4621 61.2571 59.0323 59.8372 59.0323 58.0857Z" fill="#9BDEF8" />
                </svg>)
            },
        },
        {
            id: 10,
            title: "Atomic Habits",
            author: "James Clear",
            price: "$21.99",
            originalPrice: "$109.99",
            students: "53K Students",
            img: "https://i.ibb.co/rkkdzYx/c6.jpg",
            details: {
                type: "Course",
                duration: "2.5h",
                rating: "4.8",
                reviews: "(4.1k)",
                icons: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150" fill="none">
                    <path d="M0 20C0 8.9543 8.95431 0 20 0H130C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.9543 150 0 141.046 0 130V20Z" fill="#4287C4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.7097 44.3429C52.298 44.3429 50.9442 44.8998 49.9461 45.891C48.9479 46.8823 48.3871 48.2267 48.3871 49.6286V90.0135C50.0203 89.186 51.842 88.7429 53.7097 88.7429H101.613V44.3429H53.7097ZM108 41.1714C108 39.4199 106.57 38 104.806 38H53.7097C50.6041 38 47.6257 39.2251 45.4297 41.4059C43.2337 43.5867 42 46.5445 42 49.6286V100.371C42 103.455 43.2337 106.413 45.4297 108.594C47.6257 110.775 50.6041 112 53.7097 112H104.806C106.57 112 108 110.58 108 108.829V41.1714ZM101.613 95.0857H53.7097C52.298 95.0857 50.9442 95.6426 49.9461 96.6338C48.9479 97.625 48.3871 98.9697 48.3871 100.371C48.3871 101.773 48.9479 103.118 49.9461 104.109C50.9442 105.1 52.298 105.657 53.7097 105.657H101.613V95.0857ZM59.0323 58.0857C59.0323 56.3342 60.4621 54.9143 62.2258 54.9143H87.7742C89.5379 54.9143 90.9677 56.3342 90.9677 58.0857C90.9677 59.8372 89.5379 61.2571 87.7742 61.2571H62.2258C60.4621 61.2571 59.0323 59.8372 59.0323 58.0857Z" fill="#9BDEF8" />
                </svg>)
            },
        },
        {
            id: 11,
            title: "Grit",
            author: "Angela Duckworth",
            price: "$19.49",
            originalPrice: "$99.99",
            students: "36K Students",
            img: "https://i.ibb.co/GFhHTqZ/c2.jpg",
            details: {
                type: "Course",
                duration: "2h",
                rating: "4.5",
                reviews: "(3.2k)",
                icons: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150" fill="none">
                    <path d="M0 20C0 8.9543 8.95431 0 20 0H130C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.9543 150 0 141.046 0 130V20Z" fill="#4287C4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.7097 44.3429C52.298 44.3429 50.9442 44.8998 49.9461 45.891C48.9479 46.8823 48.3871 48.2267 48.3871 49.6286V90.0135C50.0203 89.186 51.842 88.7429 53.7097 88.7429H101.613V44.3429H53.7097ZM108 41.1714C108 39.4199 106.57 38 104.806 38H53.7097C50.6041 38 47.6257 39.2251 45.4297 41.4059C43.2337 43.5867 42 46.5445 42 49.6286V100.371C42 103.455 43.2337 106.413 45.4297 108.594C47.6257 110.775 50.6041 112 53.7097 112H104.806C106.57 112 108 110.58 108 108.829V41.1714ZM101.613 95.0857H53.7097C52.298 95.0857 50.9442 95.6426 49.9461 96.6338C48.9479 97.625 48.3871 98.9697 48.3871 100.371C48.3871 101.773 48.9479 103.118 49.9461 104.109C50.9442 105.1 52.298 105.657 53.7097 105.657H101.613V95.0857ZM59.0323 58.0857C59.0323 56.3342 60.4621 54.9143 62.2258 54.9143H87.7742C89.5379 54.9143 90.9677 56.3342 90.9677 58.0857C90.9677 59.8372 89.5379 61.2571 87.7742 61.2571H62.2258C60.4621 61.2571 59.0323 59.8372 59.0323 58.0857Z" fill="#9BDEF8" />
                </svg>)
            },
        },
        {
            id: 12,
            title: "The Lean Startup",
            author: "Eric Ries",
            price: "$15.99",
            originalPrice: "$79.99",
            students: "25K Students",
            img: "https://i.ibb.co/rkkdzYx/c6.jpg",
            details: {
                type: "Course",
                duration: "1.8h",
                rating: "4.6",
                reviews: "(2.5k)",
                icons: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150" fill="none">
                    <path d="M0 20C0 8.9543 8.95431 0 20 0H130C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.9543 150 0 141.046 0 130V20Z" fill="#4287C4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.7097 44.3429C52.298 44.3429 50.9442 44.8998 49.9461 45.891C48.9479 46.8823 48.3871 48.2267 48.3871 49.6286V90.0135C50.0203 89.186 51.842 88.7429 53.7097 88.7429H101.613V44.3429H53.7097ZM108 41.1714C108 39.4199 106.57 38 104.806 38H53.7097C50.6041 38 47.6257 39.2251 45.4297 41.4059C43.2337 43.5867 42 46.5445 42 49.6286V100.371C42 103.455 43.2337 106.413 45.4297 108.594C47.6257 110.775 50.6041 112 53.7097 112H104.806C106.57 112 108 110.58 108 108.829V41.1714ZM101.613 95.0857H53.7097C52.298 95.0857 50.9442 95.6426 49.9461 96.6338C48.9479 97.625 48.3871 98.9697 48.3871 100.371C48.3871 101.773 48.9479 103.118 49.9461 104.109C50.9442 105.1 52.298 105.657 53.7097 105.657H101.613V95.0857ZM59.0323 58.0857C59.0323 56.3342 60.4621 54.9143 62.2258 54.9143H87.7742C89.5379 54.9143 90.9677 56.3342 90.9677 58.0857C90.9677 59.8372 89.5379 61.2571 87.7742 61.2571H62.2258C60.4621 61.2571 59.0323 59.8372 59.0323 58.0857Z" fill="#9BDEF8" />
                </svg>)
            },
        },
        {
            id: 13,
            title: "The Power of Habit",
            author: "Charles Duhigg",
            price: "$16.99",
            originalPrice: "$99.99",
            students: "42K Students",
            img: "https://i.ibb.co/NKffPZQ/c4.jpg",
            details: {
                type: "Course",
                duration: "1h",
                rating: "4.6",
                reviews: "(2.8k)",
                icons: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150" fill="none">
                    <path d="M0 20C0 8.9543 8.95431 0 20 0H130C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.9543 150 0 141.046 0 130V20Z" fill="#4287C4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.7097 44.3429C52.298 44.3429 50.9442 44.8998 49.9461 45.891C48.9479 46.8823 48.3871 48.2267 48.3871 49.6286V90.0135C50.0203 89.186 51.842 88.7429 53.7097 88.7429H101.613V44.3429H53.7097ZM108 41.1714C108 39.4199 106.57 38 104.806 38H53.7097C50.6041 38 47.6257 39.2251 45.4297 41.4059C43.2337 43.5867 42 46.5445 42 49.6286V100.371C42 103.455 43.2337 106.413 45.4297 108.594C47.6257 110.775 50.6041 112 53.7097 112H104.806C106.57 112 108 110.58 108 108.829V41.1714ZM101.613 95.0857H53.7097C52.298 95.0857 50.9442 95.6426 49.9461 96.6338C48.9479 97.625 48.3871 98.9697 48.3871 100.371C48.3871 101.773 48.9479 103.118 49.9461 104.109C50.9442 105.1 52.298 105.657 53.7097 105.657H101.613V95.0857ZM59.0323 58.0857C59.0323 56.3342 60.4621 54.9143 62.2258 54.9143H87.7742C89.5379 54.9143 90.9677 56.3342 90.9677 58.0857C90.9677 59.8372 89.5379 61.2571 87.7742 61.2571H62.2258C60.4621 61.2571 59.0323 59.8372 59.0323 58.0857Z" fill="#9BDEF8" />
                </svg>)
            },
        },
        {
            id: 14,
            title: "Atomic Habits",
            author: "James Clear",
            price: "$21.99",
            originalPrice: "$109.99",
            students: "53K Students",
            img: "https://i.ibb.co/rkkdzYx/c6.jpg",
            details: {
                type: "Course",
                duration: "2.5h",
                rating: "4.8",
                reviews: "(4.1k)",
                icons: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 150 150" fill="none">
                    <path d="M0 20C0 8.9543 8.95431 0 20 0H130C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.9543 150 0 141.046 0 130V20Z" fill="#4287C4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M53.7097 44.3429C52.298 44.3429 50.9442 44.8998 49.9461 45.891C48.9479 46.8823 48.3871 48.2267 48.3871 49.6286V90.0135C50.0203 89.186 51.842 88.7429 53.7097 88.7429H101.613V44.3429H53.7097ZM108 41.1714C108 39.4199 106.57 38 104.806 38H53.7097C50.6041 38 47.6257 39.2251 45.4297 41.4059C43.2337 43.5867 42 46.5445 42 49.6286V100.371C42 103.455 43.2337 106.413 45.4297 108.594C47.6257 110.775 50.6041 112 53.7097 112H104.806C106.57 112 108 110.58 108 108.829V41.1714ZM101.613 95.0857H53.7097C52.298 95.0857 50.9442 95.6426 49.9461 96.6338C48.9479 97.625 48.3871 98.9697 48.3871 100.371C48.3871 101.773 48.9479 103.118 49.9461 104.109C50.9442 105.1 52.298 105.657 53.7097 105.657H101.613V95.0857ZM59.0323 58.0857C59.0323 56.3342 60.4621 54.9143 62.2258 54.9143H87.7742C89.5379 54.9143 90.9677 56.3342 90.9677 58.0857C90.9677 59.8372 89.5379 61.2571 87.7742 61.2571H62.2258C60.4621 61.2571 59.0323 59.8372 59.0323 58.0857Z" fill="#9BDEF8" />
                </svg>)
            },
        },
    ];

    const coursesPerPage = 5;
    const [activeTab, setActiveTab] = useState("All"); // Track the active tab
    const [currentPage, setCurrentPage] = useState(1);
    const [AllCourses, setAllCourses] = useState(
        allCourses
    );// Initially display 4 courses
    const sessions = [
        {
            id: 1,
            title: 'Advanced Machine Learning Workshop',
            author: 'Dr. Sarah Connor',
            img: "https://i.ibb.co/640kJN2/c1.jpg",
            profileImg: profile,
            description: 'Deep dive into advanced ML algorithms, neural networks, and practical applications. Learn to solve real-world problems with hands-on experience.',
            type: '1on1',
            members: '28k',
            rating: '4.8',
            reviews: '(2.3k)',
        },
        {
            id: 2,
            title: 'Web Development Masterclass',
            author: 'David Chen',
            img: "https://i.ibb.co/NKffPZQ/c4.jpg",
            profileImg: profile,
            description: 'Master modern web development with React, Node.js, and cloud technologies. Build scalable applications and learn industry best practices.',
            type: 'Group',
            members: '35k',
            rating: '4.7',
            reviews: '(1.9k)',
        },
        {
            id: 3,
            title: 'Data Science Bootcamp',
            author: 'Jane Doe',
            img: "https://i.ibb.co/GFhHTqZ/c2.jpg",
            profileImg: profile,
            description: 'Comprehensive bootcamp covering data analysis, visualization, and machine learning techniques. Gain skills for a successful career in data science.',
            type: '1on1',
            members: '28k',
            rating: '4.9',
            reviews: '(3.1k)',
        },
        {
            id: 4,
            title: 'AI for Beginners',
            author: 'John Smith',
            img: "https://i.ibb.co/rkkdzYx/c6.jpg",
            profileImg: profile,
            description: 'An introductory course on AI concepts, tools, and applications. Designed for beginners to grasp the foundations of artificial intelligence.',
            type: 'Group',
            members: '35k',
            rating: '4.6',
            reviews: '(1.2k)',
        },
    ];

    const [displayedCourses, setDisplayedCourses] = useState(sessions);
    const communities = [
        {
            id: 1,
            title: 'UI/UX Design Community Hub',
            author: 'Sarah Anderson',
            role: 'Lead Designer at DesignPro',
            profileImg: profile,
            img: "https://i.ibb.co/NKffPZQ/c4.jpg",
            description: 'Join our vibrant community of UI/UX designers. Share insights, get feedback, and stay updated with the latest design trends.',
            type: 'Community',
            members: '12.5k',
            posts: '45.2k',
            price: '$24.00',
        },
        {
            id: 2,
            title: 'Frontend Development Collective',
            author: 'Michael Chen',
            role: 'Cofounder of DevStack',
            profileImg: profile,
            img: "https://i.ibb.co/640kJN2/c1.jpg",
            description: 'A collaborative space for frontend developers to share knowledge, discuss new technologies, and grow their skills.',
            type: 'Collective',
            members: '8.2k',
            posts: '32.7k',
            price: '$18.99',
        },
        {
            id: 3,
            title: 'UI/UX Design Community Hub',
            author: 'Sarah Anderson',
            role: 'Lead Designer at DesignPro',
            profileImg: profile,
            img: "https://i.ibb.co/rkkdzYx/c6.jpg",
            description: 'Join our vibrant community of UI/UX designers. Share insights, get feedback, and stay updated with the latest design trends.',
            type: 'Community',
            members: '12.5k',
            posts: '45.2k',
            price: '$24.00',
        },
        {
            id: 4,
            title: 'Frontend Development Collective',
            author: 'Michael Chen',
            role: 'Cofounder of DevStack',
            profileImg: profile,
            img: "https://i.ibb.co/hBpWGQ7/c3.jpg",
            description: 'A collaborative space for frontend developers to share knowledge, discuss new technologies, and grow their skills.',
            type: 'Collective',
            members: '8.2k',
            posts: '32.7k',
            price: '$18.99',
        },
    ];
    const [displayedCommunities, setDisplayedCommunities] = useState(communities);
    const instructors = [
        {
            id: 1,
            name: 'Ariel Reichman',
            role: 'Instructor | Education | Investor',
            profileImg: "https://i.ibb.co/640kJN2/c1.jpg",
            students: '2,630 Students',
            rating: '4.7 Instructor Rating',
            reviews: '45 Reviews',
            sessions: '3 Sessions',
            courses: '5 Courses',
            coursesList: [
                {
                    title: 'The Complete Web Development Bootcamp',
                    img: "https://i.ibb.co/640kJN2/c1.jpg",
                },
                {
                    title: 'Advanced JavaScript Concepts',
                    img: "https://i.ibb.co/NKffPZQ/c4.jpg",
                },
                {
                    title: 'React Native - The Practical Guide',
                    img: "https://i.ibb.co/rkkdzYx/c6.jpg",
                },
            ],
        },
        {
            id: 2,
            name: 'Sarah Johnson',
            role: 'Senior Instructor | Designer | Author',
            profileImg: "https://i.ibb.co/NKffPZQ/c4.jpg",
            students: '3,450 Students',
            rating: '4.9 Instructor Rating',
            reviews: '695 Reviews',
            sessions: '5 Sessions',
            courses: '7 Courses',
            coursesList: [
                {
                    title: 'UI/UX Design Masterclass',
                    img: "https://i.ibb.co/640kJN2/c1.jpg",
                },
                {
                    title: 'Design Systems Workshop',
                    img: "https://i.ibb.co/NKffPZQ/c4.jpg",
                },
                {
                    title: 'Advanced Prototyping in Figma',
                    img: "https://i.ibb.co/rkkdzYx/c6.jpg",
                },
            ],
        },
        {
            id: 3,
            name: 'Ariel Reichman',
            role: 'Instructor | Education | Investor',
            profileImg: "https://i.ibb.co/640kJN2/c1.jpg",
            students: '2,630 Students',
            rating: '4.7 Instructor Rating',
            reviews: '45 Reviews',
            sessions: '3 Sessions',
            courses: '5 Courses',
            coursesList: [
                {
                    title: 'The Complete Web Development Bootcamp',
                    img: "https://i.ibb.co/640kJN2/c1.jpg",
                },
                {
                    title: 'Advanced JavaScript Concepts',
                    img: "https://i.ibb.co/NKffPZQ/c4.jpg",
                },
                {
                    title: 'React Native - The Practical Guide',
                    img: "https://i.ibb.co/rkkdzYx/c6.jpg",
                },
            ],
        },
        {
            id: 4,
            name: 'Sarah Johnson',
            role: 'Senior Instructor | Designer | Author',
            profileImg: "https://i.ibb.co/NKffPZQ/c4.jpg",
            students: '3,450 Students',
            rating: '4.9 Instructor Rating',
            reviews: '695 Reviews',
            sessions: '5 Sessions',
            courses: '7 Courses',
            coursesList: [
                {
                    title: 'UI/UX Design Masterclass',
                    img: "https://i.ibb.co/640kJN2/c1.jpg",
                },
                {
                    title: 'Design Systems Workshop',
                    img: "https://i.ibb.co/NKffPZQ/c4.jpg",
                },
                {
                    title: 'Advanced Prototyping in Figma',
                    img: "https://i.ibb.co/rkkdzYx/c6.jpg",
                },
            ],
        },
    ];
    const [displayedInstructors, setDisplayedInstructors] = useState(instructors);

    const [BundleDisplay, setBundleDisplay] = useState(true);
    const [SubscriptionDisplay, setSubscriptionDisplay] = useState(true);


    // Handle Tab Switching
    const handleTabChange = (tab) => {
        setActiveTab(tab); // Update the active tab
        setCurrentPage(1);
        setDisplayedCourses(sessions);
        setDisplayedCommunities(communities);
        setSubscriptionDisplay(true)
        setTopicsShow(true);
        setBundleDisplay(true)
        setDisplayedInstructors(instructors)
        setAllCourses(allCourses); // Show only 4 courses
        if (tab === "Courses") {
            setAllCourses(allCourses);
            setTopicsShow(false);
            setSubscriptionDisplay(false)
            setBundleDisplay(false);
            setDisplayedCourses([]);
            setDisplayedCommunities([]);
            setDisplayedInstructors([]);
        } else if (tab === "Sessions") {
            setTopicsShow(false);
            setDisplayedCourses(sessions);
            setBundleDisplay(false);
            setDisplayedInstructors([]);
            setSubscriptionDisplay(false)
            setDisplayedCommunities([]);
            setAllCourses([]);
        } else if (tab === "Communities") {
            setTopicsShow(false);
            setDisplayedCourses([]);
            setDisplayedInstructors([]);
            setBundleDisplay(false);
            setSubscriptionDisplay(false)
            setDisplayedCommunities(communities);
            setAllCourses([]);
        } else if (tab === "Instructors") {
            setTopicsShow(false);
            setDisplayedCommunities([]);
            setSubscriptionDisplay(false)
            setBundleDisplay(false);
            setDisplayedCourses([]);
            setAllCourses([]);
            setDisplayedInstructors(instructors)
        } else if (tab === "Subscriptions") {
            setTopicsShow(false);
            setDisplayedCommunities([]);
            setSubscriptionDisplay(true)
            setBundleDisplay(false);
            setDisplayedCourses([]);
            setAllCourses([]);
            setDisplayedInstructors([])
        }
        else if (tab === "Bundles") {
            setTopicsShow(false);
            setDisplayedCommunities([]);
            setSubscriptionDisplay(false)
            setDisplayedInstructors([])
            setBundleDisplay(true);
            setDisplayedCourses([]);
            setAllCourses([]);
        }
    };
    const [viewMoreActive, setViewMoreActive] = useState(false); // To toggle between View More and Less
    const [viewMoreActive2, setViewMoreActive2] = useState(false); // To toggle between View More and Less
    const [viewMoreActive3, setViewMoreActive3] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [TopicsShow, setTopicsShow] = useState(true);

    const topics = [
        { name: "Finance", icon: "💰" },
        { name: "Lifestyle", icon: "🏠" },
        { name: "Entertainment", icon: "🎥" },
        { name: "Science", icon: "🔬" },
        { name: "Health", icon: "⚕️" },
        { name: "Brazil", icon: "🇧🇷" },
        { name: "Australia", icon: "🇦🇺" },
        { name: "Switzerland", icon: "🇨🇭" },
        { name: "Egypt", icon: "🇪🇬" },
        { name: "France", icon: "🇫🇷" },
        { name: "Georgia", icon: "🇬🇪" },
        { name: "Russia", icon: "🇷🇺" },
        { name: "Italy", icon: "🇮🇹" },
        { name: "Technology", icon: "💻" },
        { name: "Education", icon: "📚" },
        { name: "Environment", icon: "🌿" },
        { name: "Sports", icon: "⚽" },
        { name: "Travel", icon: "✈️" },
        { name: "Music", icon: "🎵" },
        { name: "Gaming", icon: "🎮" },
        { name: "Politics", icon: "🏛️" },
        { name: "Art", icon: "🎨" },
        { name: "Food", icon: "🍔" },
        { name: "History", icon: "📜" },
        { name: "Space", icon: "🚀" },
        { name: "Fashion", icon: "👗" },
        { name: "Business", icon: "📈" },
        { name: "Programming", icon: "🖥️" },
        { name: "Books", icon: "📖" },
        { name: "Photography", icon: "📷" },
        { name: "Movies", icon: "🎬" }
    ];

    const visibleTopics = showAll ? topics : topics.slice(0, 15);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    // Toggle View More / Less Functionality
    const handleToggleViewMore = () => {
        if (viewMoreActive) {
            setDisplayedCourses(allCourses.slice(0, coursesPerPage)); // Show only 4 courses
        } else {
            setDisplayedCourses(allCourses.slice(0, 10)); // Show all 8 courses
        }
        setViewMoreActive(!viewMoreActive); // Toggle the button state
    };
    // Toggle View More / Less Functionality
    const handleToggleViewMore2 = () => {
        if (viewMoreActive2) {
            setDisplayedCourses2(allCourses.slice(0, coursesPerPage)); // Show only 4 courses
        } else {
            setDisplayedCourses2(allCourses.slice(0, 10)); // Show all 8 courses
        }
        setViewMoreActive2(!viewMoreActive2); // Toggle the button state
    };
    const handleToggleViewMore3 = () => {
        if (viewMoreActive3) {
            setDisplayedCourses3(allCourses.slice(0, coursesPerPage)); // Show only 4 courses
        } else {
            setDisplayedCourses3(allCourses.slice(0, 10)); // Show all 8 courses
        }
        setViewMoreActive3(!viewMoreActive3); // Toggle the button state
    };
    // Handle Pagination
    const totalPages = Math.ceil(allCourses.length / coursesPerPage);
    const handlePageChange = (page) => {
        setCurrentPage(page);
        const startIndex = (page - 1) * coursesPerPage;
        const endIndex = startIndex + coursesPerPage;
        setDisplayedCourses(allCourses.slice(startIndex, endIndex));
    };
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const handleDropdownToggle = (id) => {
        setDropdownVisible({
            [id]: !dropdownVisible[id], // Toggle the selected dropdown
        });
    };

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedCollection, setSelectedCollection] = useState(null);

    const collections = [
        { id: 1, name: "Collection XYZ", titles: 1, icon: "😀" },
        { id: 2, name: "Collection ABC", titles: 63, icon: "🎨" },
    ];

    const handleCollectionClick = (collection) => {
        setSelectedCollection(collection.id);
        // Add your save logic here (e.g., API call, database update)
        alert(
            `saved to collection: ${collection.name} (Collection ID: ${collection.id})`
        );
        setIsPopupVisible(false);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the dropdown is open and the clicked element is not inside the dropdown
            const dropdown = document.getElementById('dropdown');
            const modal = document.getElementById('modal'); // Assuming modal has an ID 'modal'

            // Close dropdown only if the click is outside both the dropdown and the modal
            if (
                dropdown &&
                !dropdown.contains(event.target) &&
                (!modal || !modal.contains(event.target))
            ) {
                setIsPopupVisible(false);
                setDropdownVisible(false)
            }
        };

        // Attach event listener on mount
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    useEffect(() => {
        const sliderContainer = document.querySelector('.empower-card .slider-container');
        const handle = sliderContainer.querySelector('.slider-handle');
        const track = sliderContainer.querySelector('.slider-track');
        const priceElement = document.querySelector('.empower-card .price');
        const teamSizeValue = document.querySelector('.team-count');

        const positions = [0, 16.67, 33.33, 50, 66.67, 83.33, 100];
        const teamSizes = [3, 5, 10, 25, 50, 100, 200];
        const pricesPerUser = [20, 18, 16, 14, 12, 10, 8];

        let currentPosition = 0;
        let isDragging = false;

        function updateSlider(position) {
            handle.style.left = `${positions[position]}%`;
            track.style.width = `${positions[position]}%`;

            const teamSize = teamSizes[position];
            const pricePerUser = pricesPerUser[position];

            priceElement.textContent = `$${pricePerUser}`;
            teamSizeValue.textContent = teamSize;
        }

        handle.addEventListener('mousedown', function (e) {
            e.preventDefault();
            isDragging = true;

            function handleMove(e) {
                if (!isDragging) return;

                const rect = sliderContainer.getBoundingClientRect();
                let percent = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));

                let closestPosition = 0;
                let minDifference = 100;

                positions.forEach((pos, index) => {
                    const difference = Math.abs(percent - pos);
                    if (difference < minDifference) {
                        minDifference = difference;
                        closestPosition = index;
                    }
                });

                currentPosition = closestPosition;
                updateSlider(currentPosition);
            }

            function handleUp() {
                isDragging = false;
                document.removeEventListener('mousemove', handleMove);
                document.removeEventListener('mouseup', handleUp);
            }

            document.addEventListener('mousemove', handleMove);
            document.addEventListener('mouseup', handleUp);
        });

        sliderContainer.addEventListener('click', function (e) {
            if (e.target === handle) return;

            const rect = sliderContainer.getBoundingClientRect();
            let percent = ((e.clientX - rect.left) / rect.width) * 100;

            let closestPosition = 0;
            let minDifference = 100;

            positions.forEach((pos, index) => {
                const difference = Math.abs(percent - pos);
                if (difference < minDifference) {
                    minDifference = difference;
                    closestPosition = index;
                }
            });

            currentPosition = closestPosition;
            updateSlider(currentPosition);
        });

        // Initialize slider position
        updateSlider(0);
    }, []);

    const [currentPages, setCurrentPages] = useState(1);
    const coursesPerPages = 10;

    const indexOfLastCourses = currentPages * coursesPerPages;
    const indexOfFirstCourses = indexOfLastCourses - coursesPerPages;
    const currentCourses = AllCourses.slice(indexOfFirstCourses, indexOfLastCourses);
    const totalPagess = Math.ceil(AllCourses.length / coursesPerPages);

    const handlePageChanges = (page) => {
        if (page >= 1 && page <= Math.ceil(AllCourses.length / coursesPerPages)) {
            setCurrentPages(page);
        }
    };

 
    return (
        <div className="explorecontaine" style={{ fontFamily: "Arial, sans-serif" }}>
            {/* Tabs */}
            <div className="flex shadow-md items-center py-3 px-4 w-100 items-center responsive-tab-container gap-4" style={{ marginBottom: "20px", display: "flex", background: '#fff', borderRadius: '15px' }}>
                <div className="responsive-tab-list"
                    style={{
                        display: "flex",
                        gap: "22px",
                        width: '80%',
                        flexWrap: "wrap", // Wrap tabs when space is limited
                    }}>
                    {[
                        { name: "All", svg: null }, // No SVG for "All" tab
                        {
                            name: "Courses", svg: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                        },
                        {
                            name: "Sessions", svg: <svg className="w-10 h-10" style={{ marginRight: '-5px' }} fill="none" viewBox="0 0 38 38">
                                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.2" stroke="currentColor" d="M22.887 17.1133L27.3337 14.42V23.5866L22.887 20.8866M10.667 14.42H20.8537C21.3929 14.42 21.9101 14.6342 22.2915 15.0155C22.6728 15.3969 22.887 15.914 22.887 16.4533V23.5866H12.7003C12.4328 23.5867 12.1678 23.5338 11.9207 23.4312C11.6735 23.3286 11.4491 23.1783 11.2602 22.9887C11.0713 22.7992 10.9217 22.5743 10.8199 22.3268C10.7181 22.0794 10.6661 21.8142 10.667 21.5466V14.42Z"></path>
                                <path fill="currentColor" d="M15.8738 19.4266H17.9605C18.4573 19.4266 18.9338 19.624 19.2851 19.9753C19.6365 20.3266 19.8338 20.8031 19.8338 21.3V22.3333H14.0005V21.3C14.0005 20.8031 14.1979 20.3266 14.5492 19.9753C14.9005 19.624 15.377 19.4266 15.8738 19.4266Z"></path>
                                <path fill="currentColor" d="M16.8872 19.0133C17.7855 19.0133 18.5138 18.2761 18.5138 17.3666C18.5138 16.4572 17.7855 15.72 16.8872 15.72C15.9888 15.72 15.2605 16.4572 15.2605 17.3666C15.2605 18.2761 15.9888 19.0133 16.8872 19.0133Z"></path>
                            </svg>
                        },
                        {
                            name: "Communities", svg: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path fill="currentColor" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                <path fill="currentColor" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                        },
                        {
                            name: "Instructors", svg: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="18" width="18">
                                <path fill="currentColor" d="M9.46497 2.65469L3.88834 5.94284C3.88112 5.9471 3.87383 5.95125 3.86648 5.95529C3.53431 6.13787 3.33341 6.48044 3.33341 6.8475V12.9174C3.33391 13.1 3.38341 13.2792 3.47675 13.4362C3.57021 13.5935 3.7042 13.7227 3.86471 13.8104C3.88028 13.8189 3.89558 13.8279 3.91059 13.8374L9.51062 17.3799C9.66161 17.4588 9.82953 17.5 10.0001 17.5C10.1706 17.5 10.3385 17.4588 10.4895 17.3799L16.0065 13.89C16.0242 13.8713 16.0454 13.8485 16.0692 13.8223C16.1476 13.7361 16.2503 13.6169 16.351 13.4827C16.4536 13.3459 16.542 13.2096 16.6016 13.0884C16.6598 12.9702 16.666 12.9159 16.6667 12.916C16.6667 12.916 16.6667 12.9168 16.6667 12.9183V6.84316C16.669 6.47367 16.4717 6.13196 16.1507 5.94942L16.1378 5.94193L10.5403 2.62526C10.421 2.55461 10.2347 2.51688 9.98782 2.53681C9.77125 2.55429 9.57557 2.61124 9.46497 2.65469ZM16.5351 14.5417L17.1194 15.1358C17.0772 15.1773 17.0307 15.2142 16.9806 15.2459L11.3556 18.8042C11.341 18.8134 11.3262 18.8222 11.3111 18.8305C10.9094 19.0511 10.4584 19.1667 10.0001 19.1667C9.54173 19.1667 9.0908 19.0511 8.68902 18.8305C8.67394 18.8222 8.65912 18.8134 8.64458 18.8042L3.04 15.2588C2.62874 15.0283 2.2852 14.6935 2.0441 14.2879C1.79804 13.874 1.66772 13.4015 1.66675 12.92L1.66675 12.9183V6.8475C1.66675 5.8708 2.19919 4.97552 3.05167 4.50135L8.66682 1.19049C8.6944 1.17423 8.72289 1.15957 8.75216 1.14659C9.01002 1.03219 9.40947 0.911399 9.85374 0.875543C10.2945 0.839973 10.8669 0.881526 11.3899 1.1914L16.8757 4.44191C16.981 4.48034 17.0764 4.53941 17.157 4.61423C17.8934 5.11464 18.3381 5.95164 18.3334 6.85072V12.9183C18.3334 13.2699 18.2128 13.5891 18.097 13.8244C17.9757 14.0708 17.8228 14.2982 17.6842 14.4829C17.5436 14.6702 17.4051 14.8305 17.3025 14.9434C17.2508 15.0003 17.2071 15.0463 17.1754 15.079C17.1701 15.0846 17.1651 15.0897 17.1604 15.0945C17.1512 15.1039 17.1435 15.1118 17.1372 15.1181L17.1256 15.1297L17.1218 15.1334L17.1204 15.1348L17.1194 15.1358C17.1193 15.1359 17.1194 15.1358 16.5351 14.5417Z" clipRule="evenodd" fillRule="evenodd"></path>
                                <path fill="currentColor" d="M7.64306 5.97631C8.26818 5.35119 9.11603 5 10.0001 5C10.8841 5 11.732 5.35119 12.3571 5.97631C12.9822 6.60143 13.3334 7.44928 13.3334 8.33333C13.3334 9.21739 12.9822 10.0652 12.3571 10.6904C11.732 11.3155 10.8841 11.6667 10.0001 11.6667C9.11603 11.6667 8.26818 11.3155 7.64306 10.6904C7.01794 10.0652 6.66675 9.21739 6.66675 8.33333C6.66675 7.44928 7.01794 6.60143 7.64306 5.97631ZM10.0001 6.66667C9.55805 6.66667 9.13413 6.84226 8.82157 7.15482C8.50901 7.46738 8.33341 7.89131 8.33341 8.33333C8.33341 8.77536 8.50901 9.19929 8.82157 9.51185C9.13413 9.82441 9.55805 10 10.0001 10C10.4421 10 10.866 9.82441 11.1786 9.51185C11.4912 9.19929 11.6667 8.77536 11.6667 8.33333C11.6667 7.89131 11.4912 7.46738 11.1786 7.15482C10.866 6.84226 10.4421 6.66667 10.0001 6.66667Z" clipRule="evenodd" fillRule="evenodd"></path>
                                <path fill="currentColor" d="M6.9273 14.5988L5.60407 15.9908C5.28698 16.3244 4.75951 16.3377 4.42594 16.0207C4.09237 15.7036 4.079 15.1761 4.39609 14.8425L5.77651 13.3904C5.81197 13.353 5.85082 13.3191 5.89255 13.289C6.60295 12.7758 7.45703 12.4998 8.33335 12.5M6.9273 14.5988C7.3415 14.3174 7.83122 14.1665 8.33308 14.1667L11.6667 14.1667C12.1682 14.1665 12.6578 14.3172 13.0718 14.5982L14.3962 15.9909C14.7133 16.3244 15.2408 16.3377 15.5743 16.0206C15.9078 15.7034 15.9211 15.1759 15.604 14.8424L14.2224 13.3895C14.1868 13.3521 14.1479 13.3182 14.1061 13.288C13.396 12.7755 12.5424 12.4998 11.6667 12.5C11.6666 12.5 11.6668 12.5 11.6667 12.5H8.33335" clipRule="evenodd" fillRule="evenodd"></path>
                            </svg>
                        },
                        {
                            name: "Subscriptions", svg: <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path fill="currentColor" d="M17 12.7992V13.5992C17.4418 13.5992 17.8 13.241 17.8 12.7992H17ZM17 8.39922H17.8C17.8 7.95739 17.4418 7.59922 17 7.59922V8.39922ZM4.96739 4.12628C4.59574 4.3652 4.48814 4.86017 4.72706 5.23183C4.96598 5.60348 5.46095 5.71108 5.83261 5.47216L4.96739 4.12628ZM11 1.19922L11.6315 0.708066C11.3773 0.381231 10.9157 0.302372 10.5674 0.526276L11 1.19922ZM13.1685 5.29037C13.4398 5.63913 13.9424 5.70196 14.2912 5.4307C14.6399 5.15945 14.7027 4.65682 14.4315 4.30807L13.1685 5.29037ZM17 11.9992H14.4V13.5992H17V11.9992ZM14.4 9.19922H17V7.59922H14.4V9.19922ZM16.2 8.39922V12.7992H17.8V8.39922H16.2ZM13 10.5992C13 9.82602 13.6268 9.19922 14.4 9.19922V7.59922C12.7431 7.59922 11.4 8.94237 11.4 10.5992H13ZM14.4 11.9992C13.6268 11.9992 13 11.3724 13 10.5992H11.4C11.4 12.2561 12.7431 13.5992 14.4 13.5992V11.9992ZM5.83261 5.47216L11.4326 1.87216L10.5674 0.526276L4.96739 4.12628L5.83261 5.47216ZM10.3685 1.69037L13.1685 5.29037L14.4315 4.30807L11.6315 0.708066L10.3685 1.69037ZM1.8 5.59922H15.4V3.99922H1.8V5.59922ZM15.4 15.9992H1.8V17.5992H15.4V15.9992ZM1.8 15.9992V5.59922H0.2V15.9992H1.8ZM1.8 15.9992H1.8H0.2C0.2 16.8829 0.916343 17.5992 1.8 17.5992V15.9992ZM15.4 15.9992H15.4V17.5992C16.2837 17.5992 17 16.8829 17 15.9992H15.4ZM15.4 5.59922H15.4H17C17 4.71556 16.2837 3.99922 15.4 3.99922V5.59922ZM1.8 3.99922C0.916344 3.99922 0.2 4.71556 0.2 5.59922H1.8H1.8V3.99922ZM15.4 13.3992V15.9992H17V13.3992H15.4ZM15.4 5.59922V7.69922H17V5.59922H15.4Z"></path>
                            </svg>
                        },
                        {
                            name: "Bundles", svg: <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path fill="currentColor" d="M17 12.7992V13.5992C17.4418 13.5992 17.8 13.241 17.8 12.7992H17ZM17 8.39922H17.8C17.8 7.95739 17.4418 7.59922 17 7.59922V8.39922ZM4.96739 4.12628C4.59574 4.3652 4.48814 4.86017 4.72706 5.23183C4.96598 5.60348 5.46095 5.71108 5.83261 5.47216L4.96739 4.12628ZM11 1.19922L11.6315 0.708066C11.3773 0.381231 10.9157 0.302372 10.5674 0.526276L11 1.19922ZM13.1685 5.29037C13.4398 5.63913 13.9424 5.70196 14.2912 5.4307C14.6399 5.15945 14.7027 4.65682 14.4315 4.30807L13.1685 5.29037ZM17 11.9992H14.4V13.5992H17V11.9992ZM14.4 9.19922H17V7.59922H14.4V9.19922ZM16.2 8.39922V12.7992H17.8V8.39922H16.2ZM13 10.5992C13 9.82602 13.6268 9.19922 14.4 9.19922V7.59922C12.7431 7.59922 11.4 8.94237 11.4 10.5992H13ZM14.4 11.9992C13.6268 11.9992 13 11.3724 13 10.5992H11.4C11.4 12.2561 12.7431 13.5992 14.4 13.5992V11.9992ZM5.83261 5.47216L11.4326 1.87216L10.5674 0.526276L4.96739 4.12628L5.83261 5.47216ZM10.3685 1.69037L13.1685 5.29037L14.4315 4.30807L11.6315 0.708066L10.3685 1.69037ZM1.8 5.59922H15.4V3.99922H1.8V5.59922ZM15.4 15.9992H1.8V17.5992H15.4V15.9992ZM1.8 15.9992V5.59922H0.2V15.9992H1.8ZM1.8 15.9992H1.8H0.2C0.2 16.8829 0.916343 17.5992 1.8 17.5992V15.9992ZM15.4 15.9992H15.4V17.5992C16.2837 17.5992 17 16.8829 17 15.9992H15.4ZM15.4 5.59922H15.4H17C17 4.71556 16.2837 3.99922 15.4 3.99922V5.59922ZM1.8 3.99922C0.916344 3.99922 0.2 4.71556 0.2 5.59922H1.8H1.8V3.99922ZM15.4 13.3992V15.9992H17V13.3992H15.4ZM15.4 5.59922V7.69922H17V5.59922H15.4Z"></path>
                            </svg>
                        },
                    ].map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => handleTabChange(tab.name)}
                            style={{
                                background: 'transparent',
                                color: activeTab === tab.name ? "#02C5AF" : "#4B4B4B",
                                border: "none",
                                cursor: "pointer",
                                fontWeight: '500',
                                display: 'flex',
                                alignItems: 'center', // Align text and SVG horizontally
                                gap: '5px', // Add spacing between SVG and text
                                borderBottom: activeTab === tab.name ? "3px solid #02C5AF" : "none",
                                paddingBottom: "1px",
                                transition: "box-shadow 0.3s ease",
                            }}
                        >
                            {tab.svg && tab.svg} {/* Render SVG if available */}
                            {tab.name}
                        </button>

                    ))}
                </div>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 20 20">
                    <path fill="#4F4F4F" d="M10.7885 3.74485C10.588 2.91838 9.41205 2.91838 9.21155 3.74485L9.21147 3.74518C8.8815 5.1021 7.33071 5.74534 6.13614 5.01904L6.13582 5.01885C5.40863 4.57613 4.57711 5.40852 5.01959 6.13484C5.18849 6.41193 5.2896 6.72499 5.31469 7.04853C5.33978 7.37216 5.2881 7.69713 5.16386 7.99701C5.03962 8.29689 4.84633 8.56319 4.59972 8.77425C4.35315 8.98527 4.06025 9.1351 3.74485 9.21155C2.91838 9.41205 2.91838 10.588 3.74485 10.7885L3.74519 10.7885C4.06037 10.8652 4.35302 11.0151 4.59936 11.2262C4.84569 11.4372 5.03875 11.7034 5.16285 12.0031C5.28694 12.3028 5.33857 12.6275 5.31354 12.9509C5.28851 13.2743 5.18752 13.5873 5.01878 13.8643C4.57621 14.5915 5.40855 15.4229 6.13484 14.9804C6.41193 14.8115 6.72498 14.7104 7.04853 14.6853C7.37216 14.6602 7.69713 14.7119 7.99701 14.8361C8.29689 14.9604 8.56319 15.1537 8.77425 15.4003C8.98527 15.6468 9.1351 15.9398 9.21155 16.2552C9.41205 17.0816 10.588 17.0816 10.7885 16.2552L10.7885 16.2548C10.8652 15.9396 11.0151 15.647 11.2262 15.4006C11.4372 15.1543 11.7034 14.9612 12.0031 14.8372C12.3028 14.7131 12.6275 14.6614 12.9509 14.6865C13.2743 14.7115 13.5873 14.8125 13.8643 14.9812C14.5915 15.4238 15.4229 14.5914 14.9804 13.8652C14.8115 13.5881 14.7104 13.275 14.6853 12.9515C14.6602 12.6278 14.7119 12.3029 14.8361 12.003C14.9604 11.7031 15.1537 11.4368 15.4003 11.2257C15.6468 11.0147 15.9398 10.8649 16.2552 10.7885C17.0816 10.588 17.0816 9.41205 16.2552 9.21155L16.2548 9.21147C15.9396 9.13482 15.647 8.98488 15.4006 8.77384C15.1543 8.56281 14.9612 8.29662 14.8372 7.99692C14.7131 7.69723 14.6614 7.37248 14.6865 7.04908C14.7115 6.72567 14.8125 6.41274 14.9812 6.13571C15.4238 5.40854 14.5914 4.57713 13.8652 5.01959C13.5881 5.18849 13.275 5.2896 12.9515 5.31469C12.6278 5.33978 12.3029 5.2881 12.003 5.16386C11.7031 5.03962 11.4368 4.84633 11.2257 4.59972C11.0147 4.35315 10.8649 4.06025 10.7885 3.74485ZM7.99686 3.44982C8.5066 1.34995 11.4937 1.35006 12.0032 3.45015L12.0033 3.45032C12.0333 3.57452 12.0923 3.68986 12.1754 3.78695C12.2585 3.88404 12.3634 3.96014 12.4814 4.00905C12.5995 4.05796 12.7274 4.07831 12.8548 4.06843C12.9823 4.05855 13.1055 4.01873 13.2146 3.9522L13.2148 3.95208C15.0602 2.82789 17.1728 4.9397 16.0488 6.78584L16.0488 6.78596C15.9823 6.89502 15.9426 7.01822 15.9327 7.14555C15.9229 7.27287 15.9432 7.40072 15.9921 7.51871C16.0409
                             7.6367 16.1169 7.74149 16.2139 7.82458C16.3108 7.90759 16.4259 7.96658 16.5498 7.99678C18.65 8.50629 18.65 11.4937 16.5498 12.0032L16.5497 12.0033C16.4255 12.0333 16.3101 12.0923 16.2131 12.1754C16.116 12.2585 16.0399 12.3634 15.991 12.4814C15.942 12.5995 15.9217 12.7274 15.9316 12.8548C15.9414 12.9822 15.9813 13.1055 16.0478 13.2146L16.0479 13.2148C17.1721 15.0602 15.0603 17.1728 13.2142 16.0488L13.214 16.0488C13.105 15.9823 12.9818 15.9426 12.8545 15.9327C12.7271 15.9229 12.5993 15.9432 12.4813 15.9921C12.3633 16.0409 12.2585 16.1169 12.1754 16.2139C12.0924 16.3108 12.0334 16.4259 12.0032 16.5498C11.4937 18.65 8.50629 18.65 7.99678 16.5498L7.99674 16.5497C7.96665 16.4255 7.90766 16.3101 7.82456 16.2131C7.74147 16.116 7.63663 16.0399 7.51857 15.991C7.40051 15.942 7.27257 15.9217 7.14516 15.9316C7.01775 15.9414 6.89447 15.9813 6.78536 16.0478L6.78516 16.0479C4.93982 17.1721 2.82721 15.0603 3.95115 13.2142L3.95122 13.214C4.01765 13.105 4.05741 12.9818 4.06727 12.8545C4.07712 12.7271 4.0568 12.5993 4.00794 12.4813C3.95908 12.3633 3.88308 12.2585 3.7861 12.1754C3.68921 12.0924 3.57411 12.0334 3.45015 12.0032C1.34995 11.4937 1.34995 8.50629 3.45015 7.99678L3.45032 7.99674C3.57452 7.96665 3.68986 7.90766 3.78695 7.82456C3.88404 7.74147 3.96014 7.63663 4.00905 7.51857C4.05796 7.40051 4.07831 7.27257 4.06843 7.14516C4.05855 7.01775 4.01873 6.89447 3.9522 6.78536L3.95208 6.78516C2.82795 4.93992 4.93946 2.82745 6.78553 3.95096C7.25752 4.23793 7.86658 3.98467 7.99678 3.45015M7.79029 7.79029C8.37634 7.20424 9.1712 6.875 10 6.875C10.8288 6.875 11.6237 7.20424 12.2097 7.79029C12.7958 8.37634 13.125 9.1712 13.125 10C13.125 10.8288 12.7958 11.6237 12.2097 12.2097C11.6237 12.7958 10.8288 13.125 10 13.125C9.1712 13.125 8.37634 12.7958 7.79029 12.2097C7.20424 11.6237 6.875 10.8288 6.875 10C6.875 9.1712 7.20424 8.37634 7.79029 7.79029ZM10 8.125C9.50272 8.125 9.0258 8.32254 8.67417 8.67417C8.32254 9.0258 8.125 9.50272 8.125 10C8.125 10.4973 8.32254 10.9742 8.67417 11.3258C9.0258 11.6775 9.50272 11.875 10 11.875C10.4973 11.875 10.9742 11.6775 11.3258 11.3258C11.6775 10.9742 11.875 10.4973 11.875 10C11.875 9.50272 11.6775 9.0258 11.3258 8.67417C10.9742 8.32254 10.4973 8.125 10 8.125Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
            </div>
            {currentCourses.length !== 0 ? (
                <div
                    className="w-100 mb-4"
                    style={{
                        background: '#fff',
                        padding: '30px 20px',
                        borderRadius: '20px',
                    }}
                >
                    <div className='flex items-center flex-col md:flex-row gap-4 justify-between mb-4 md:gap-0'>
                        <h1
                            className=""
                            style={{
                                fontSize: '22px',
                                fontWeight: 'bold',
                            }}
                        >
                            {activeTab === 'All' ? 'Trending Courses' : 'All ' + activeTab}
                        </h1>
                        <div className="flex items-center justify-center space-x-4 py-1.5 rounded-full bg-white border-1 px-2">
                            <button
                                onClick={() => handlePageChanges(currentPages - 1)}
                                disabled={currentPages === 1}
                                className="flex items-center justify-center w-7 h-7 text-black rounded-full disabled:opacity-50 hover:bg-gray-100 disabled:cursor-not-allowed"
                            >
                                ←
                            </button>

                            <span className="text-gray-700">
                                {currentPages} of {totalPagess}
                            </span>

                            <button
                                onClick={() => handlePageChanges(currentPages + 1)}
                                disabled={currentPages === totalPagess}
                                className="flex items-center justify-center w-8 h-8 text-gray-500  rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                →
                            </button>
                        </div>
                    </div>

                    <div
                        className='responsive-container'

                    >
                        {/* Render all courses */}
                        {currentCourses.map((course, index) => (
                            <div
                                className="flex flex-col responsive-item"
                                key={index}

                            >
                                {/* Header Section */}
                                <div
                                    className="w-100 py-2 px-3 fw-bold flex items-center justify-between"
                                    style={{
                                        background: '#F0F3FA',
                                        borderTopLeftRadius: '10px',
                                        borderTopRightRadius: '10px',
                                    }}
                                >
                                    <div className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                                            <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        </svg>
                                        <p
                                            style={{
                                                fontSize: '12px',
                                                color: '#5D625E',
                                            }}
                                        >
                                            {course.students}
                                        </p>
                                    </div>
                                    <div style={{ position: "relative", display: "inline-block" }}>
                                        <span
                                            onClick={() => handleDropdownToggle(course.id)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                style={{ rotate: "90deg" }}
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="#5D625E"
                                                    d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                                />
                                            </svg>
                                        </span>
                                        {dropdownVisible[course.id] && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "34px",
                                                    right: "0",
                                                    background: "#fff",
                                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                                    borderRadius: "5px",
                                                    padding: "2px",
                                                    width: "180px",
                                                    zIndex: 100,
                                                }}
                                            >
                                                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: '12px' }}>
                                                    <li
                                                        className="flex items-center gap-2"
                                                        style={{
                                                            padding: "8px 12px",
                                                            cursor: "pointer",
                                                            borderBottom: "1px solid #eee",
                                                        }}
                                                        onMouseOver={(e) => (e.target.style.backgroundColor = "#f0f8ff", e.target.style.color = "#03314b")}
                                                        onMouseOut={(e) => (e.target.style.backgroundColor = "", e.target.style.color = "")}
                                                        onClick={() => alert("Saved to Bookmarks")}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 shrink-0" strokeWidth="0" fill="none" stroke="#03314b"><path fill="none" strokeLinejoin="round" strokeWidth="32" d="M128 80V64a48.14 48.14 0 0148-48h224a48.14 48.14 0 0148 48v368l-80-64"></path><path d="M320 96H112a48.14 48.14 0 00-48 48v352l152-128 152 128V144a48.14 48.14 0 00-48-48z" stroke-width="32" stroke-linejoin="round" fill="none"></path></svg> Save to Bookmarks
                                                    </li>
                                                    <div>
                                                        {/* Trigger Button */}
                                                        <li
                                                            className="flex items-center gap-2"
                                                            style={{
                                                                padding: "8px 12px",
                                                                cursor: "pointer",
                                                                borderBottom: "1px solid #eee",
                                                            }}
                                                            onMouseOver={(e) => (
                                                                (e.target.style.backgroundColor = "#f0f8ff"),
                                                                (e.target.style.color = "#03314b")
                                                            )}
                                                            onMouseOut={(e) => (
                                                                (e.target.style.backgroundColor = ""),
                                                                (e.target.style.color = "")
                                                            )}
                                                            onClick={() => setIsPopupVisible(true)}
                                                        >
                                                            <svg
                                                                className="w-4 h-4 shrink-0"
                                                                viewBox="0 0 24 24"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fillRule="nonzero"
                                                                    fill="#141414"
                                                                    d="M16 9a7 7 0 1 1 0 14 7 7 0 1 1 0-14zm4-7a2 2 0 0 1 2 2v4h-1.5V3.5h-17v17H8V22H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16zm-3 10h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z"
                                                                ></path>
                                                            </svg>{" "}
                                                            Save to Collection
                                                        </li>

                                                        {/* Popup Modal */}
                                                        {isPopupVisible && (
                                                            <div
                                                                style={{
                                                                    position: "fixed",
                                                                    top: "50%",
                                                                    left: "50%",
                                                                    transform: "translate(-50%, -50%)",
                                                                    backgroundColor: "white",
                                                                    borderRadius: "10px",
                                                                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                                                    padding: "5px",
                                                                    width: "250px",
                                                                    zIndex: 1000,
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        justifyContent: "space-between",
                                                                    }}
                                                                    className='p-2'
                                                                >
                                                                    <h3 className="mb-0">Save to <span style={{ color: '#009ECB' }}>Collection</span></h3>
                                                                    <button
                                                                        style={{
                                                                            border: "none",
                                                                            background: "transparent",
                                                                            fontSize: "14px",
                                                                            cursor: "pointer",
                                                                        }}
                                                                        onClick={() => setIsPopupVisible(false)}
                                                                    >
                                                                        ✕
                                                                    </button>
                                                                </div>
                                                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                                                    {collections.map((collection) => (
                                                                        <li
                                                                            key={collection.id}
                                                                            className="flex items-center gap-2 mb-2"
                                                                            style={{
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                padding: "6px 12px 6px 6px",
                                                                                borderBottom: "1px solid #eee",
                                                                                cursor: "pointer",
                                                                                backgroundColor:
                                                                                    selectedCollection === collection.id ? "#f0f8ff" : "",
                                                                                color: selectedCollection === collection.id ? "#03314b" : "#000",
                                                                            }}
                                                                            onClick={() => handleCollectionClick(collection)}
                                                                        >
                                                                            <span style={{ fontSize: "34px", background: '#E1E8E8', borderRadius: '10px', padding: '1px 3px' }}>{collection.icon}</span>
                                                                            <div>
                                                                                <div style={{ fontWeight: "bold" }}>{collection.name}</div>
                                                                                <div style={{ fontSize: "12px", color: "#757575" }}>
                                                                                    {collection.titles} title{collection.titles > 1 && "s"}
                                                                                </div>
                                                                            </div>
                                                                            {selectedCollection === collection.id && (
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="currentColor"
                                                                                    style={{ marginLeft: "auto", color: "#03314b" }}
                                                                                    width="19"
                                                                                    height="19"
                                                                                >
                                                                                    <path d="M20.292 6.293a1 1 0 0 1 1.416 1.414l-11 11a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L10 16.586z"></path>
                                                                                </svg>
                                                                            )}
                                                                        </li>
                                                                    ))}
                                                                    <li
                                                                        style={{
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            padding: "4px 10px",
                                                                            cursor: "pointer",
                                                                        }}
                                                                        onClick={() => alert("Create a new collection")}
                                                                    >
                                                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 276 276" fill="none">
                                                                            <path d="M276 138C276 214.215 214.215 276 138 276C61.7847 276 0 214.215 0 138C0 61.7847 61.7847 0 138 0C214.215 0 276 61.7847 276 138Z" fill="#DBDBDB" />
                                                                            <path d="M127.233 199V78H147.767V199H127.233ZM77 148.767V128.233H198V148.767H77Z" fill="#2E2E2E" />
                                                                        </svg>
                                                                        Create a new collection
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <li
                                                        className="flex items-center gap-2"
                                                        style={{
                                                            padding: "8px 12px",
                                                            cursor: "pointer",
                                                        }}
                                                        onMouseOver={(e) => (e.target.style.backgroundColor = "#f0f8ff", e.target.style.color = "#03314b")}
                                                        onMouseOut={(e) => (e.target.style.backgroundColor = "", e.target.style.color = "")}
                                                        onClick={() => alert("Added to Playlist")}
                                                    >
                                                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 21 17"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="feature-outline-icon" transform="translate(0.865723, 0.665728)" fill="#757575" fill-rule="nonzero"><path d="M6.13427734,12.6369485 L18.1342773,12.6369485 C18.6865621,12.6369485 19.1342773,13.0846638 19.1342773,13.6369485 C19.1342773,14.1892333 18.6865621,14.6369485 18.1342773,14.6369485 L6.13427734,14.6369485 C5.58199259,14.6369485 5.13427734,14.1892333 5.13427734,13.6369485 C5.13427734,13.0846638 5.58199259,12.6369485 6.13427734,12.6369485 Z M6.13427734,6.63694853 L18.1342773,6.63694853 C18.6865621,6.63694853 19.1342773,7.08466378 19.1342773,7.63694853 C19.1342773,8.18923328 18.6865621,8.63694853 18.1342773,8.63694853 L6.13427734,8.63694853 C5.58199259,8.63694853 5.13427734,8.18923328 5.13427734,7.63694853 C5.13427734,7.08466378 5.58199259,6.63694853 6.13427734,6.63694853 Z M6.13427734,0.636948529 L18.1342773,0.636948529 C18.6865621,0.636948529 19.1342773,1.08466378 19.1342773,1.63694853 C19.1342773,2.18923328 18.6865621,2.63694853 18.1342773,2.63694853 L6.13427734,2.63694853 C5.58199259,2.63694853 5.13427734,2.18923328 5.13427734,1.63694853 C5.13427734,1.08466378 5.58199259,0.636948529 6.13427734,0.636948529 Z M0.909179688,15.2121438 L2.69042969,14.163804 C2.80794271,14.0957701 2.88680013,13.998358 2.92700195,13.8715677 C2.96720378,13.7447773 2.96720378,13.6179869 2.92700195,13.4911966 C2.88680013,13.3644062 2.80794271,13.2669941 2.69042969,13.1989602 L0.909179688,12.1320657 C0.686523438,11.995998 0.479329427,11.9650735 0.287597656,12.0392923
                                                                    C0.0958658854,12.113511 0,12.2805032 0,12.5402688 L0,14.8039407 C0,15.0513366 0.0974121094,15.2136901 0.292236328,15.2910013 C0.487060547,15.3683125 0.692708333,15.3420267 0.909179688,15.2121438 Z M0.909179688,9.21214384 L2.69042969,8.163804 C2.80794271,8.09577014 2.88680013,7.99835803 2.92700195,7.87156767 C2.96720378,7.74477731 2.96720378,7.61798694 2.92700195,7.49119658 C2.88680013,7.36440621 2.80794271,7.2669941 2.69042969,7.19896025 L0.909179688,6.13206572 C0.686523438,5.99599801 0.479329427,5.96507353 0.287597656,6.03929228 C0.0958658854,6.11351103 0,6.28050322 0,6.54026884 L0,8.80394072 C0,9.05133655 0.0974121094,9.21369007 0.292236328,9.29100126 C0.487060547,9.36831246 0.692708333,9.34202665 0.909179688,9.21214384 Z M0.909179688,3.21214384 L2.69042969,2.163804 C2.80794271,2.09577014 2.88680013,1.99835803 2.92700195,1.87156767 C2.96720378,1.74477731 2.96720378,1.61798694 2.92700195,1.49119658 C2.88680013,1.36440621 2.80794271,1.2669941 2.69042969,1.19896025 L0.909179688,0.132065717 C0.686523438,-0.00400199142 0.479329427,-0.0349264706 0.287597656,0.0392922794 C0.0958658854,0.113511029 0,0.280503217 0,0.540268842 L0,2.80394072 C0,3.05133655 0.0974121094,3.21369007 0.292236328,3.29100126 C0.487060547,3.36831246 0.692708333,3.34202665 0.909179688,3.21214384 Z"></path></g></g></svg> Add to Playlist
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div
                                    className="shadow-md"
                                    style={{
                                        overflow: 'hidden',
                                        padding: '7px',
                                        background: '#fff',
                                    }}
                                >
                                    <img
                                        src={course.img}
                                        alt={course.title}
                                        className="rounded"
                                        style={{
                                            width: '100%',
                                            height: '150px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <div style={{ padding: '28px 38px 10px 12px' }}>
                                        <h4
                                            className="h-13"
                                            style={{
                                                fontSize: '15px',
                                                marginBottom: '4px',
                                            }}
                                        >
                                            {course.title}
                                        </h4>
                                        <Link
                                            href='/instructor'
                                            className="mb-4"
                                            style={{
                                                fontSize: '13px',
                                                marginBottom: '5px',
                                                color: 'grey',
                                            }}
                                        >
                                            By {course.author}
                                        </Link>
                                        <p
                                            style={{
                                                fontSize: '14px',
                                                color: '#000',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {course.price}{' '}
                                            <span
                                                style={{
                                                    textDecoration: 'line-through',
                                                    color: '#aaa',
                                                    marginLeft: '6px',
                                                    fontWeight: '500',
                                                }}
                                            >
                                                {course.originalPrice}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="w-100 py-3 px-2 flex items-center justify-between"
                                    style={{
                                        background: '#F9F9F9',
                                        borderBottomLeftRadius: '10px',
                                        borderBottomRightRadius: '10px',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        {/* Type */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            {course.details.icons}
                                            <span
                                                style={{
                                                    fontSize: '14px',
                                                    color: '#000',
                                                }}
                                            >
                                                {course.details.type}
                                            </span>
                                        </div>

                                        {/* Duration */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="13"
                                                height="13"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 3.5a.5.5 0 0 1 .5.5v4l3.5 2.086a.5.5 0 1 1-.5.866L8 8.866V4a.5.5 0 0 1 .5-.5z" />
                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14z" />
                                            </svg>
                                            <span
                                                style={{
                                                    fontSize: '14px',
                                                    color: '#000',
                                                }}
                                            >
                                                {course.details.duration}
                                            </span>
                                        </div>

                                        {/* Rating */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                                style={{
                                                    marginBottom: '2px',
                                                }}
                                            >
                                                <path
                                                    fill="#2FB3BF"
                                                    d="M3.612 15.443c-.396.199-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.33-.314-.158-.888.283-.95l4.898-.696 2.067-4.125c.197-.39.73-.39.927 0l2.067 4.125 4.898.696c.441.062.612.636.282.95l-3.523 3.356.83 4.73c.078.443-.35.791-.746.592L8 13.187l-4.389 2.256z"
                                                />
                                            </svg>
                                            <span
                                                style={{
                                                    fontSize: '13px',
                                                    color: '#000',
                                                    fontWeight: '600',
                                                }}
                                            >
                                                {course.details.rating}
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: '12px',
                                                    color: '#797D80',
                                                }}
                                            >
                                                {course.details.reviews}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Placeholder Divs to Fill Row */}
                        {Array.from(
                            { length: (5 - (AllCourses.length % 5)) % 5 }, // Calculate placeholders needed
                            (_, i) => (
                                <div
                                    className="responsive-item"
                                    key={`placeholder-${i}`}
                                    style={{
                                        flex: '1 1 calc(20% - 13px)',
                                        visibility: 'hidden',
                                    }}
                                />
                            )
                        )}
                    </div>
                </div>
            ) : (
                ''
            )}
            {displayedCourses.length !== 0 ? (<div
                style={{
                    background: '#fff',
                    borderRadius: '20px',
                }}
                className="mb-4 trending-sessions-container"
            >
                <h1
                    style={{
                        fontSize: '22px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                    }}
                >
                    Trending Sessions
                </h1>
                <div
                    // style={{
                    //     display: 'flex',
                    //     flexWrap: 'wrap',
                    //     gap: '20px',
                    //     justifyContent: 'flex-start',
                    // }}
                    className="trending-sessions-grid"
                >
                    {displayedCourses.map((course) => (
                        <div
                            key={course.id}
                            className="relative group trending-session-card"
                            style={{
                                background: '#fff',
                                borderRadius: '10px',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                overflow: 'hidden',
                            }}
                        >

                            {/* Image */}
                            <img
                                src={course.img}
                                alt={course.title}
                                style={{
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                }}
                            />

                            <div style={{ padding: '15px', marginTop: '-50px', zIndex: '100', position: 'relative' }}>
                                <Image
                                    src={course.profileImg}
                                    alt={course.title}
                                    style={{
                                        width: '65px',
                                        border: '3px solid #fff',
                                        borderRadius: '15px',
                                        height: '65px',
                                        objectFit: 'cover',
                                    }}
                                    className="mb-2"
                                />
                                <h4 className="h-8" style={{ fontSize: '15px', marginBottom: '10px', fontWeight: 'bold' }}>{course.title}</h4>
                                <p style={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }}>
                                    {course.author}
                                </p>
                                <p style={{ fontSize: '15.5px', color: '#646360' }}>{course.description.slice(0, 93) + ' ...'}</p>
                                <button className="text-white w-100 py-2.5 rounded-lg text-sm mt-3 mb-4" style={{ background: '#13C4CC' }}>Book Now</button>
                            </div>
                            <div
                                style={{
                                    background: '#F8F9FB',
                                    padding: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <div className="tooltip-item">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 32 32">
                                        <path fill="#333333" d="M9.15646 7.75385C9.54698 8.14438 9.54696 8.77755 9.15643 9.16806C8.25874 10.0657 7.54666 11.1314 7.06083 12.3042C6.575 13.4771 6.32495 14.7341 6.32495 16.0036C6.32495 17.2731 6.575 18.5301 7.06083 19.703C7.54666 20.8758 8.25874 21.9415 9.15643 22.8391C9.54696 23.2297 9.54698 23.8628 9.15646 24.2534C8.76595 24.6439 8.13279 24.6439 7.74225 24.2534C6.65884 23.17 5.79942 21.8839 5.21308 20.4684C4.62674 19.0529 4.32495 17.5357 4.32495 16.0036C4.32495 14.4715 4.62674 12.9543 5.21308 11.5388C5.79942 10.1233 6.65884 8.83717 7.74225 7.75381C8.13279 7.3633 8.76595 7.36331 9.15646 7.75385ZM22.8355 7.75385C23.2261 7.36331 23.8592 7.3633 24.2498 7.75381C25.3332 8.83717 26.1926 10.1233 26.7789 11.5388C27.3653 12.9543 27.6671 14.4715 27.6671 16.0036C27.6671 17.5357 27.3653 19.0529 26.7789 20.4684C26.1926 21.8839 25.3332 23.17 24.2498 24.2534C23.8592 24.6439 23.2261 24.6439 22.8355 24.2534C22.445 23.8628 22.445 23.2297 22.8356 22.8391C23.7333 21.9415 24.4454 20.8758 24.9312 19.703C25.417 18.5301 25.6671 17.2731 25.6671 16.0036C25.6671 14.7341 25.417 13.4771 24.9312 12.3042C24.4454 11.1314 23.7333 10.0657 22.8356 9.16806C22.445 8.77755 22.445 8.14438 22.8355 7.75385ZM12.931 11.5257C13.3216 11.9162 13.3217 12.5493 12.9312 12.9399C12.1188 13.7525 11.6625 14.8545 11.6625 16.0036C11.6625 17.1526 12.1188 18.2546 12.9312 19.0672C13.3217 19.4578 13.3216 20.091 12.931 20.4815C12.5404 20.8719 11.9073 20.8718 11.5168 20.4812C10.3295 19.2936 9.66248 17.683 9.66248 16.0036C9.66248 14.3242 10.3295 12.7136 11.5168 11.5259C11.9073 11.1353 12.5404 11.1352 12.931 11.5257ZM19.0637 11.5257C19.4543 11.1352 20.0874 11.1353 20.4779 11.5259C21.6652 12.7136 22.3322 14.3242 22.3322 16.0036C22.3322 17.683 21.6652 19.2936 20.4779 20.4812C20.0874 20.8718 19.4543 20.8719 19.0637 20.4815C18.6731 20.091 18.673 19.4578 19.0635 19.0672C19.8758 18.2546 20.3322 17.1526 20.3322 16.0036C20.3322 14.8545 19.8758 13.7525 19.0635 12.9399C18.673 12.5493 18.6731 11.9162 19.0637 11.5257ZM16 15.0036C16.5523 15.0036 17 15.4513 17 16.0036V16.0169C17 16.5692 16.5523 17.0169 16 17.0169C15.4477 17.0169 15 16.5692 15 16.0169V16.0036C15 15.4513 15.4477 15.0036 16 15.0036Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-sm" style={{ fontWeight: '500' }}>{course.type}</span>
                                    <span className="tooltip">{course.type} session</span>
                                </div>
                                <div className="tooltip-item">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                                        <path fill="#4F4F4F" d="M5.64124 3.64124C6.53204 2.75044 7.74022 2.25 9 2.25C10.2598 2.25 11.468 2.75044 12.3588 3.64124C13.2496 4.53204 13.75 5.74022 13.75 7C13.75 8.25978 13.2496 9.46796 12.3588 10.3588C11.468 11.2496 10.2598 11.75 9 11.75C7.74022 11.75 6.53204 11.2496 5.64124 10.3588C4.75044 9.46796 4.25 8.25978 4.25 7C4.25 5.74022 4.75044 4.53204 5.64124 3.64124ZM9 3.75C8.13805 3.75 7.3114 4.09241 6.7019 4.7019C6.09241 5.3114 5.75 6.13805 5.75 7C5.75 7.86195 6.09241 8.6886 6.7019 9.2981C7.3114 9.90759 8.13805 10.25 9 10.25C9.86195 10.25 10.6886 9.90759 11.2981 9.2981C11.9076 8.6886 12.25 7.86195 12.25 7C12.25 6.13805 11.9076 5.3114 11.2981 4.7019C10.6886 4.09241 9.86195 3.75 9 3.75ZM15.2734 2.94385C15.3762 2.54258 15.7848 2.30058 16.186 2.40332C17.2078 2.66493 18.1134 3.25915 18.7601 4.09231C19.4068 4.92547 19.7578 5.95018 19.7578 7.00488C19.7578 8.05959 19.4068 9.08429 18.7601 9.91745C18.1134 10.7506 17.2078 11.3448 16.186 11.6064C15.7848 11.7092 15.3762 11.4672 15.2734 11.0659C15.1707 10.6646 15.4127 10.2561 15.814 10.1533C16.5131 9.97433 17.1327 9.56775 17.5752 8.99769C18.0177 8.42763 18.2578 7.72652 18.2578 7.00488C18.2578 6.28325 18.0177 5.58213 17.5752 5.01207C17.1327 4.44201 16.5131 4.03544 15.814 3.85645C15.4127 3.7537 15.1707 3.34512 15.2734 2.94385ZM7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H11C12.2598 14.25 13.468 14.7504 14.3588 15.6412C15.2496 16.532 15.75 17.7402 15.75 19V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V19C14.25 18.138 13.9076 17.3114 13.2981 16.7019C12.6886 16.0924 11.862 15.75 11 15.75H7ZM17.2738 14.9624C17.3774 14.5614 17.7864 14.3202 18.1875 14.4237C19.2026 14.6858 20.1025 15.2763 20.7469 16.1033C21.3913 16.9303 21.744 17.9472 21.75 18.9956L21.75 18.9999L21.75 20.9999C21.75 21.4141 21.4142 21.7499 21 21.7499C20.5858 21.7499 20.25 21.4141 20.25 20.9999V19.002C20.2454 18.2855 20.0041 17.5905 19.5637 17.0253C19.1228 16.4595 18.5071 16.0554 17.8125 15.8761C17.4115 15.7725 17.1703 15.3635 17.2738 14.9624Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-sm" style={{ fontWeight: '500' }}>{course.members}</span>
                                    <span className="tooltip">Member Count</span>
                                </div>
                                <div className="tooltip-item">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        style={{
                                            marginBottom: '2px',
                                        }}
                                    >
                                        <path
                                            fill="#2FB3BF"
                                            d="M3.612 15.443c-.396.199-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.33-.314-.158-.888.283-.95l4.898-.696 2.067-4.125c.197-.39.73-.39.927 0l2.067 4.125 4.898.696c.441.062.612.636.282.95l-3.523 3.356.83 4.73c.078.443-.35.791-.746.592L8 13.187l-4.389 2.256z"
                                        />
                                    </svg>
                                    <span>
                                        {course.rating}{' '}
                                        <span style={{ color: 'gray' }}>{course.reviews}</span>
                                    </span>
                                    <span className="tooltip">{course.rating} Rating</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>) : ('')}

            {displayedCommunities.length !== 0 ? (<div
                style={{
                    background: '#fff',
                    borderRadius: '20px',
                }}
                className="mb-4 trending-sessions-container"
            >
                <h1
                    style={{
                        fontSize: '22px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                    }}
                >
                    Trending Communities
                </h1>
                <div
                    // style={{
                    //     display: 'flex',
                    //     flexWrap: 'wrap',
                    //     gap: '20px',
                    //     justifyContent: 'flex-start',
                    // }}
                    className="trending-sessions-grid"
                >
                    {displayedCommunities.map((course) => (
                        <div
                            key={course.id}
                            className="relative group trending-session-card"
                            style={{
                                background: '#fff',
                                borderRadius: '10px',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                overflow: 'hidden',
                            }}
                        >

                            {/* Image */}
                            <img
                                src={course.img}
                                alt={course.title}
                                style={{
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                }}
                            />

                            <div style={{ padding: '15px', zIndex: '100', position: 'relative' }}>
                                <h4 className="h-9 mt-2 mb-3" style={{ fontSize: '16px', marginBottom: '10px', fontWeight: 'bold' }}>{course.title}</h4>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image
                                        src={course.profileImg}
                                        alt={course.title}
                                        style={{
                                            width: '50px',
                                            borderRadius: '10px',
                                            height: '50px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <div className="flex flex-col gap-1.5">
                                        <h3 style={{ fontSize: '14.5px', fontWeight: '600' }}>
                                            {course.author}
                                        </h3>
                                        <p style={{ fontSize: '12px' }}>{course.role}</p>
                                    </div>
                                </div>
                                <p style={{ fontSize: '15.5px', color: '#646360' }}>{course.description.slice(0, 93) + ' ...'}</p>
                                <button className="text-white w-100 py-2.5 rounded-lg text-sm mt-3 mb-4" style={{ background: '#13C4CC' }}>Join Now</button>
                            </div>
                            <div
                                style={{
                                    background: '#F8F9FB',
                                    padding: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <div className="tooltip-item">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path fill="#343332" d="M10.3031 4.71338C10.638 4.71338 10.9096 4.98493 10.9096 5.3199V5.62947C11.7726 5.74654 12.5494 6.11208 13.0363 6.67319C13.2559 6.92617 13.2288 7.30925 12.9758 7.52881C12.7229 7.74837 12.3398 7.72128 12.1202 7.4683C11.8892 7.20209 11.4627 6.96219 10.9096 6.85747V9.13097C11.5063 9.2117 12.0549 9.41056 12.4966 9.70499C13.0803 10.0941 13.5358 10.6984 13.5358 11.4478C13.5358 12.1973 13.0803 12.8015 12.4966 13.1907C12.0549 13.4851 11.5063 13.684 10.9096 13.7647V14.0741C10.9096 14.4091 10.638 14.6806 10.3031 14.6806C9.9681 14.6806 9.69656 14.4091 9.69656 14.0741V13.7645C8.83357 13.6474 8.0568 13.2819 7.5698 12.7208C7.35024 12.4678 7.37733 12.0847 7.63031 11.8652C7.88329 11.6456 8.26636 11.6727 8.48592 11.9257C8.71697 12.1919 9.14345 12.4318 9.69656 12.5365V10.263C9.09982 10.1823 8.55128 9.98342 8.10959 9.68899C7.52581 9.29985 7.07031 8.69563 7.07031 7.94614C7.07031 7.19665 7.52581 6.59244 8.10959 6.2033C8.55128 5.90886 9.09982 5.71 9.69656 5.62928V5.3199C9.69656 4.98493 9.9681 4.71338 10.3031 4.71338ZM9.69656 6.85766C9.33347 6.92644 9.02055 7.0539 8.78241 7.21264C8.4157 7.45709 8.28336 7.7283 8.28336 7.94614C8.28336 8.16399 8.4157 8.4352 8.78241 8.67964C9.02055 8.83839 9.33347 8.96585 9.69656 9.03463V6.85766ZM10.9096 10.3594V12.5363C11.2727 12.4675 11.5856 12.3401 11.8237 12.1813C12.1905 11.9369 12.3228 11.6657 12.3228 11.4478C12.3228 11.23 12.1905 10.9588 11.8237 10.7143C11.5856 10.5556 11.2727 10.4281 10.9096 10.3594Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        <path fill="#343332" d="M10.3399 2.51392C6.38177 2.51392 3.1731 5.72259 3.1731 9.6807C3.1731 13.6388 6.38177 16.8475 10.3399 16.8475C14.298 16.8475 17.5067 13.6388 17.5067 9.6807C17.5067 5.72259 14.298 2.51392 10.3399 2.51392ZM1.9231 9.6807C1.9231 5.03224 5.69142 1.26392 10.3399 1.26392C14.9883 1.26392 18.7567 5.03224 18.7567 9.6807C18.7567 14.3292 14.9883 18.0975 10.3399 18.0975C5.69142 18.0975 1.9231 14.3292 1.9231 9.6807Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-sm" style={{ fontWeight: '500' }}>{course.price.slice(1)}</span>
                                    <span className="tooltip">{course.price}</span>
                                </div>
                                <div className="tooltip-item">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                                        <path fill="#4F4F4F" d="M5.64124 3.64124C6.53204 2.75044 7.74022 2.25 9 2.25C10.2598 2.25 11.468 2.75044 12.3588 3.64124C13.2496 4.53204 13.75 5.74022 13.75 7C13.75 8.25978 13.2496 9.46796 12.3588 10.3588C11.468 11.2496 10.2598 11.75 9 11.75C7.74022 11.75 6.53204 11.2496 5.64124 10.3588C4.75044 9.46796 4.25 8.25978 4.25 7C4.25 5.74022 4.75044 4.53204 5.64124 3.64124ZM9 3.75C8.13805 3.75 7.3114 4.09241 6.7019 4.7019C6.09241 5.3114 5.75 6.13805 5.75 7C5.75 7.86195 6.09241 8.6886 6.7019 9.2981C7.3114 9.90759 8.13805 10.25 9 10.25C9.86195 10.25 10.6886 9.90759 11.2981 9.2981C11.9076 8.6886 12.25 7.86195 12.25 7C12.25 6.13805 11.9076 5.3114 11.2981 4.7019C10.6886 4.09241 9.86195 3.75 9 3.75ZM15.2734 2.94385C15.3762 2.54258 15.7848 2.30058 16.186 2.40332C17.2078 2.66493 18.1134 3.25915 18.7601 4.09231C19.4068 4.92547 19.7578 5.95018 19.7578 7.00488C19.7578 8.05959 19.4068 9.08429 18.7601 9.91745C18.1134 10.7506 17.2078 11.3448 16.186 11.6064C15.7848 11.7092 15.3762 11.4672 15.2734 11.0659C15.1707 10.6646 15.4127 10.2561 15.814 10.1533C16.5131 9.97433 17.1327 9.56775 17.5752 8.99769C18.0177 8.42763 18.2578 7.72652 18.2578 7.00488C18.2578 6.28325 18.0177 5.58213 17.5752 5.01207C17.1327 4.44201 16.5131 4.03544 15.814 3.85645C15.4127 3.7537 15.1707 3.34512 15.2734 2.94385ZM7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H11C12.2598 14.25 13.468 14.7504 14.3588 15.6412C15.2496 16.532 15.75 17.7402 15.75 19V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V19C14.25 18.138 13.9076 17.3114 13.2981 16.7019C12.6886 16.0924 11.862 15.75 11 15.75H7ZM17.2738 14.9624C17.3774 14.5614 17.7864 14.3202 18.1875 14.4237C19.2026 14.6858 20.1025 15.2763 20.7469 16.1033C21.3913 16.9303 21.744 17.9472 21.75 18.9956L21.75 18.9999L21.75 20.9999C21.75 21.4141 21.4142 21.7499 21 21.7499C20.5858 21.7499 20.25 21.4141 20.25 20.9999V19.002C20.2454 18.2855 20.0041 17.5905 19.5637 17.0253C19.1228 16.4595 18.5071 16.0554 17.8125 15.8761C17.4115 15.7725 17.1703 15.3635 17.2738 14.9624Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span className="text-sm" style={{ fontWeight: '500' }}>{course.members}</span>
                                    <span className="tooltip">Member Count</span>
                                </div>
                                <div className="tooltip-item">
                                    <svg className="w-4 h-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path fill="#4F4F4F" d="M9.16659 3.25C9.14448 3.25 9.12329 3.25878 9.10766 3.27441C9.09203 3.29004 9.08325 3.31123 9.08325 3.33333V8.33333C9.08325 8.35543 9.09203 8.37663 9.10766 8.39226C9.12329 8.40789 9.14448 8.41667 9.16659 8.41667H14.9999C15.1988 8.41667 15.3896 8.49569 15.5302 8.63634L16.7499 9.85601V3.33333C16.7499 3.31123 16.7411 3.29003 16.7255 3.27441C16.7099 3.25878 16.6887 3.25 16.6666 3.25H9.16659ZM8.047 2.21375C8.34393 1.91682 8.74666 1.75 9.16659 1.75H16.6666C17.0865 1.75 17.4892 1.91681 17.7862 2.21375C18.0831 2.51068 18.2499 2.91341 18.2499 3.33333V11.6667C18.2499 11.97 18.0672 12.2435 17.7869 12.3596C17.5067 12.4757 17.1841 12.4115 16.9696 12.197L14.6893 9.91667H9.16659C8.74666 9.91667 8.34393 9.74985 8.047 9.45292C7.75007 9.15599 7.58325 8.75326 7.58325 8.33333V3.33333C7.58325 2.91341 7.75007 2.51068 8.047 2.21375Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                        <path fill="#4F4F4F" d="M3.33333 9.08333C3.31123 9.08333 3.29004 9.09211 3.27441 9.10774C3.25878 9.12336 3.25 9.14456 3.25 9.16666V15.6893L4.46967 14.4697C4.61032 14.329 4.80109 14.25 5 14.25H10.8333C10.8554 14.25 10.8766 14.2412 10.8923 14.2256C10.9079 14.21 10.9167 14.1888 10.9167 14.1667V12.5C10.9167 12.0858 11.2525 11.75 11.6667 11.75C12.0809 11.75 12.4167 12.0858 12.4167 12.5V14.1667C12.4167 14.5866 12.2499 14.9893 11.9529 15.2862C11.656 15.5832 11.2533 15.75 10.8333 15.75H5.31066L3.03033 18.0303C2.81583 18.2448 2.49324 18.309 2.21299 18.1929C1.93273 18.0768 1.75 17.8033 1.75 17.5V9.16666C1.75 8.74674 1.91682 8.34401 2.21375 8.04708C2.51068 7.75014 2.91341 7.58333 3.33333 7.58333H5C5.41421 7.58333 5.75 7.91911 5.75 8.33333C5.75 8.74754 5.41421 9.08333 5 9.08333H3.33333Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span>
                                        {course.rating}{' '}
                                        <span className="text-sm" style={{ color: '#000', fontWeight: '500' }}>{course.posts}</span>
                                    </span>
                                    <span className="tooltip">Post Count</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>) : ('')}
            {displayedInstructors.length !== 0 ? (<div
                style={{
                    background: '#fff',
                    borderRadius: '20px',
                }}
                className="trending-sessions-container"
            >
                <h1
                    style={{
                        fontSize: '22px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                    }}
                >
                    Popular Instructors
                </h1>
                <div
                    // style={{
                    //     display: 'flex',
                    //     flexWrap: 'wrap',
                    //     gap: '20px',
                    //     justifyContent: 'flex-start',
                    // }}
                    className="trending-sessions-grid"
                >
                    {displayedInstructors.map((course) => (
                        <div
                            key={course.id}
                            className="relative group trending-session-card"
                            style={{
                                background: '#fff',
                                borderRadius: '10px',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Header Section */}
                            <div
                                className="w-100 py-3 px-3 fw-bold flex items-center justify-between"
                                style={{
                                    background: '#F0F3FA',
                                    borderTopLeftRadius: '10px',
                                    borderTopRightRadius: '10px',
                                }}
                            >
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                                        <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <p
                                        style={{
                                            fontSize: '12px',
                                            color: '#5D625E',
                                        }}
                                    >
                                        {course.students}
                                    </p>
                                </div>
                                <div style={{ position: "relative", display: "inline-block" }}>
                                    <span
                                        style={{ cursor: "pointer" }}
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            style={{ rotate: "90deg" }}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#5D625E"
                                                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div style={{ padding: '18px', zIndex: '100', position: 'relative' }}>
                                <h4 className=" mt-2 " style={{ fontSize: '18px', color: '#13C4CC', marginBottom: '7px', fontWeight: 'bold' }}>{course.name}</h4>
                                <p style={{ fontSize: '14px', color: 'grey', fontWeight: '500' }}>{course.role}</p>
                                <div className="flex items-center gap-3 mb-3 mt-3">
                                    <img
                                        src={course.profileImg}
                                        alt={course.title}
                                        style={{
                                            width: '80px',
                                            borderRadius: '50px',
                                            height: '80px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <h3 style={{ fontSize: '15px', fontWeight: '500', color: 'grey' }}>
                                            {course.rating}
                                        </h3>
                                        <h3 style={{ fontSize: '15px', fontWeight: '500', color: 'grey' }}>
                                            {course.reviews}
                                        </h3>
                                        <h3 style={{ fontSize: '15px', fontWeight: '500', color: 'grey' }}>
                                            {course.sessions}
                                        </h3>
                                        <h3 style={{ fontSize: '15px', fontWeight: '500', color: 'grey' }}>
                                            {course.courses}
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-3 shadow-md rounded flex flex-col gap-2" style={{ background: '#F8F9FB' }}>
                                    <div className="flex items-center gap-2.5">
                                        <img className="rounded" src={course.coursesList[0].img} width={40} height={40} />
                                        <h4 style={{ fontSize: '13.5px' }} className="text-grey">{course.coursesList[0].title}</h4>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <img className="rounded" src={course.coursesList[1].img} width={40} height={40} />
                                        <h4 style={{ fontSize: '13.5px' }} className="text-grey">{course.coursesList[1].title}</h4>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <img className="rounded" src={course.coursesList[2].img} width={40} height={40} />
                                        <h4 style={{ fontSize: '13.5px' }} className="text-grey">{course.coursesList[2].title}</h4>
                                    </div>
                                </div>
                                <button className="text-white w-100 py-2.5 rounded-lg text-sm mt-3" style={{ background: '#13C4CC' }}>View Profile</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>) : ('')}
            {SubscriptionDisplay === true ?
                <div className='plan-page bg-white rounded-lg p-4 mt-4'>
                    <h1
                        style={{
                            fontSize: '22px',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                        }}
                    >
                        Popular Subscriptions
                    </h1>
                    <div className="main-container">
                        <div className="pricing-card learn-card shadow-md">
                            <div className="card-content">
                                <h2>Learn</h2>
                                <p className="description">
                                    Start learning with our free plan. Dive into thousands of free courses (no credit card required)
                                </p>
                                <div className="price-section">
                                    <div className="price">Free</div>
                                </div>
                                <p>2,000+ titles</p>
                                <div className="features">
                                    <div className="hours-section">
                                        <span className="hours">24,000</span>&nbsp; hours of video
                                    </div>
                                </div>
                                <button className="button">Downgrade</button>
                            </div>
                        </div>

                        <div className="pricing-card grow-card">
                            <img src="https://i.ibb.co/zscYhTv/pricing-panel-green.png" className="corner-image" alt="" />
                            <div className="card-content">
                                <h2>Personal</h2>
                                <p className="description">Dive into a collection of top-rated courses in tech, business, and more</p>
                                <div className="price-section">
                                    <span className="price">$29</span>
                                    <span className="price-period">/year</span>
                                </div>
                                <div className="features">
                                    <p className="feature-item">5,000+ titles</p>
                                    <p className="feature-item">50,000 hrs of video included</p>
                                    <p className="feature-item">Unlimited standard certificates</p>
                                </div>
                                <button className="button">Downgrade</button>
                            </div>
                        </div>

                        <div className="pricing-card elevate-card">
                            <img src="https://i.ibb.co/4s1qVmg/pricing-panel-blue-light.png" className="corner-image" alt="" />
                            <div className="card-content">
                                <h2>Business</h2>
                                <p className="description">Accelerate your learning journey with high-impact courses.</p>
                                <div className="price-section">
                                    <span className="price">$49</span>
                                    <span className="price-period">/year</span>
                                </div>
                                <div className="features">
                                    <p className="feature-item">10,000+ titles</p>
                                    <p className="feature-item">100,000 hrs of video included</p>
                                    <p className="feature-item">Unlimited standard certificates</p>
                                    <p className="feature-item">5+ premium certificates</p>
                                </div>
                                <button className="button">Cancel</button>
                            </div>
                        </div>

                        <div className="pricing-card empower-card">
                            <img src="https://i.ibb.co/fNn0SF7/pricing-panel-blue-dark.png" className="corner-image" alt="" />
                            <div className="card-content">
                                <h2>Team</h2>
                                <p className="description">Empower your team to develop skills in all areas of business</p>
                                <div className="price-section">
                                    <span className="price">$19</span>
                                    <span className="price-period">/year/user</span>
                                </div>
                                <div className="slider-section">
                                    <div className="slider-label">Team size</div>
                                    <div className="slider-container">
                                        <div className="slider-track"></div>
                                        <div className="slider-handle"></div>
                                        <div className="slider-positions">
                                            <span>3</span>
                                            <span>5</span>
                                            <span>10</span>
                                            <span>25</span>
                                            <span>50</span>
                                            <span>100</span>
                                            <span>200</span>
                                        </div>
                                    </div>
                                    <div className="content-section">
                                        <div className="content-label">
                                            <span className="team-count">3</span> TEAM MEMBERS <span className="info-icon">i</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="features">
                                    <p className="feature-item">12,000+ titles</p>
                                    <p className="feature-item">120,000 hrs of audio per member</p>
                                    <p className="feature-item">Unlimited standard certificates</p>
                                    <p className="feature-item">5 premium certificates / user</p>
                                </div>
                                <button className="button">Upgrade</button>
                            </div>
                        </div>
                    </div>
                </div>
                : ''
            }
            {BundleDisplay === true ?
                <div className='bundle mt-4 bg-white p-4 rounded-lg'>
                    <h1
                        style={{
                            fontSize: '22px',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                        }}
                    >
                        Trending Bundles
                    </h1>
                    <div class="bundle-grid w-100" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}>
                        <div class="bundle-card">
                            <div class="bundle-image-container mb-3">
                                <img src="https://i.ibb.co/sw4yS26/img1.jpg" alt="Bundle cover" class="bundle-image" loading="lazy" />
                                <img src="https://i.ibb.co/dJh6T3K/AVATAR-midtone-ux-instrgram.jpg" alt="Instructor" class="instructor-thumbnail" loading="lazy" />
                            </div>
                            <div class="bundle-content">
                                <h3 class="bundle-title">Web Development Master Bundle</h3>
                                <p class="bundle-description">
                                    Complete web development bundle covering frontend, backend, and full-stack development.
                                </p>

                                <div class="courses-preview w-100">
                                    <div class="course-thumbnails">
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/640kJN2/c1.jpg" alt="Course 1" class="course-thumbnail" />
                                            <div class="course-tooltip">The Complete Web Development Bootcamp</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/GFhHTqZ/c2.jpg" alt="Course 2" class="course-thumbnail" />
                                            <div class="course-tooltip">Advanced JavaScript Concepts</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="Course 3" class="course-thumbnail" />
                                            <div class="course-tooltip">React Native - The Practical Guide</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/NKffPZQ/c4.jpg" alt="Course 4" class="course-thumbnail" />
                                            <div class="course-tooltip">UI/UX Design Masterclass</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/ss92kB8/c5.jpg" alt="Course 5" class="course-thumbnail" />
                                            <div class="course-tooltip">Design Systems Workshop</div>
                                        </div>
                                    </div>
                                    <button class="view-all-button" onClick={() => context.setbundlemodal(!context.bundlemodal)} >
                                        View All
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                <div class="pricing">
                                    <div class="price-wrapper">
                                        <span class="current-price">$499.99</span>
                                        <span class="original-price">$899.99</span>
                                    </div>
                                    <div class="buy-button-container">
                                        <button class="add-to-cart">
                                            <svg fill="none" viewBox="0 0 24 24">
                                                <path fill="white" d="M22.5 16.14L23.92 6l-18.8-.81L4.92 4A4.43 4.43 0 002.51.8L.58 0 0 1.39l1.88.78a2.88 2.88 0 011.56 2.11l2.5 14.86a2.54 2.54 0 103.57 3h5.93a2.54 2.54 0 100-1.5H9.52a2.53 2.53 0 00-2.1-1.79l-.31-1.83 15.39-.88zm-4.65 4.21a1 1 0 11-.1 1.997 1 1 0 01.1-1.997zm4.36-12.92l-1 7.29-14.33.84-1.51-8.85 16.84.72zM8.14 21.4a1 1 0 11-2 0 1 1 0 012 0z" />
                                            </svg>
                                            Buy Now
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                        <div class="payment-plans-tooltip">
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

                            <div class="bundle-footer">
                                <div class="stat">
                                    <div class="tooltip">Total Courses</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                                        <path fill="#4F4F4F" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span class="stat-value">12</span>
                                </div>
                                <div class="stat">


                                    <div class="tooltip">Total Students</div>
                                    <svg fill="none" viewBox="0 0 20 20">
                                        <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span class="stat-value">15.2K</span>
                                </div>
                                <div class="stat">
                                    <div class="tooltip">Rating</div>
                                    <svg viewBox="0 0 16 15" class="star-icon">
                                        <path fill="#13C4CC" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                    </svg>
                                    <span class="stat-value">4.7</span>
                                </div>
                            </div>
                        </div>
                        <div class="bundle-card">
                            <div class="bundle-image-container mb-3">
                                <img src="https://i.ibb.co/sw4yS26/img1.jpg" alt="Bundle cover" class="bundle-image" loading="lazy" />
                                <img src="https://i.ibb.co/NKp6WsG/AVATAR-Kostis-Kapelonis.png" alt="Instructor" class="instructor-thumbnail" loading="lazy" />
                            </div>

                            <div class="bundle-content">
                                <h3 class="bundle-title">Web Development Master Bundle</h3>
                                <p class="bundle-description">
                                    Complete web development bundle covering frontend, backend, and full-stack development.
                                </p>

                                <div class="courses-preview w-100">
                                    <div class="course-thumbnails">
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/640kJN2/c1.jpg" alt="Course 1" class="course-thumbnail" />
                                            <div class="course-tooltip">The Complete Web Development Bootcamp</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/GFhHTqZ/c2.jpg" alt="Course 2" class="course-thumbnail" />
                                            <div class="course-tooltip">Advanced JavaScript Concepts</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="Course 3" class="course-thumbnail" />
                                            <div class="course-tooltip">React Native - The Practical Guide</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/NKffPZQ/c4.jpg" alt="Course 4" class="course-thumbnail" />
                                            <div class="course-tooltip">UI/UX Design Masterclass</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/ss92kB8/c5.jpg" alt="Course 5" class="course-thumbnail" />
                                            <div class="course-tooltip">Design Systems Workshop</div>
                                        </div>
                                    </div>
                                    <button class="view-all-button" onClick={() => context.setbundlemodal(!context.bundlemodal)} >
                                        View All
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                <div class="pricing">
                                    <div class="price-wrapper">
                                        <span class="current-price">$499.99</span>
                                        <span class="original-price">$899.99</span>
                                    </div>
                                    <div class="buy-button-container">
                                        <button class="add-to-cart">
                                            <svg fill="none" viewBox="0 0 24 24">
                                                <path fill="white" d="M22.5 16.14L23.92 6l-18.8-.81L4.92 4A4.43 4.43 0 002.51.8L.58 0 0 1.39l1.88.78a2.88 2.88 0 011.56 2.11l2.5 14.86a2.54 2.54 0 103.57 3h5.93a2.54 2.54 0 100-1.5H9.52a2.53 2.53 0 00-2.1-1.79l-.31-1.83 15.39-.88zm-4.65 4.21a1 1 0 11-.1 1.997 1 1 0 01.1-1.997zm4.36-12.92l-1 7.29-14.33.84-1.51-8.85 16.84.72zM8.14 21.4a1 1 0 11-2 0 1 1 0 012 0z" />
                                            </svg>
                                            Buy Now
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                        <div class="payment-plans-tooltip">
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

                            <div class="bundle-footer">
                                <div class="stat">
                                    <div class="tooltip">Total Courses</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                                        <path fill="#4F4F4F" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span class="stat-value">12</span>
                                </div>
                                <div class="stat">


                                    <div class="tooltip">Total Students</div>
                                    <svg fill="none" viewBox="0 0 20 20">
                                        <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span class="stat-value">15.2K</span>
                                </div>
                                <div class="stat">
                                    <div class="tooltip">Rating</div>
                                    <svg viewBox="0 0 16 15" class="star-icon">
                                        <path fill="#13C4CC" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                    </svg>
                                    <span class="stat-value">4.7</span>
                                </div>
                            </div>
                        </div>
                        <div class="bundle-card">
                            <div class="bundle-image-container mb-3">
                                <img src="https://i.ibb.co/sw4yS26/img1.jpg" alt="Bundle cover" class="bundle-image" loading="lazy" />
                                <img src="https://i.ibb.co/cF4gPr5/AVATAR-github-com-biowaffeln.png" alt="Instructor" class="instructor-thumbnail" loading="lazy" />
                            </div>

                            <div class="bundle-content">
                                <h3 class="bundle-title">Web Development Master Bundle</h3>
                                <p class="bundle-description">
                                    Complete web development bundle covering frontend, backend, and full-stack development.
                                </p>

                                <div class="courses-preview w-100">
                                    <div class="course-thumbnails">
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/640kJN2/c1.jpg" alt="Course 1" class="course-thumbnail" />
                                            <div class="course-tooltip">The Complete Web Development Bootcamp</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/GFhHTqZ/c2.jpg" alt="Course 2" class="course-thumbnail" />
                                            <div class="course-tooltip">Advanced JavaScript Concepts</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="Course 3" class="course-thumbnail" />
                                            <div class="course-tooltip">React Native - The Practical Guide</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/NKffPZQ/c4.jpg" alt="Course 4" class="course-thumbnail" />
                                            <div class="course-tooltip">UI/UX Design Masterclass</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/ss92kB8/c5.jpg" alt="Course 5" class="course-thumbnail" />
                                            <div class="course-tooltip">Design Systems Workshop</div>
                                        </div>
                                    </div>
                                    <button class="view-all-button" onClick={() => context.setbundlemodal(!context.bundlemodal)} >
                                        View All
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                <div class="pricing">
                                    <div class="price-wrapper">
                                        <span class="current-price">$499.99</span>
                                        <span class="original-price">$899.99</span>
                                    </div>
                                    <div class="buy-button-container">
                                        <button class="add-to-cart">
                                            <svg fill="none" viewBox="0 0 24 24">
                                                <path fill="white" d="M22.5 16.14L23.92 6l-18.8-.81L4.92 4A4.43 4.43 0 002.51.8L.58 0 0 1.39l1.88.78a2.88 2.88 0 011.56 2.11l2.5 14.86a2.54 2.54 0 103.57 3h5.93a2.54 2.54 0 100-1.5H9.52a2.53 2.53 0 00-2.1-1.79l-.31-1.83 15.39-.88zm-4.65 4.21a1 1 0 11-.1 1.997 1 1 0 01.1-1.997zm4.36-12.92l-1 7.29-14.33.84-1.51-8.85 16.84.72zM8.14 21.4a1 1 0 11-2 0 1 1 0 012 0z" />
                                            </svg>
                                            Buy Now
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                        <div class="payment-plans-tooltip">
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

                            <div class="bundle-footer">
                                <div class="stat">
                                    <div class="tooltip">Total Courses</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                                        <path fill="#4F4F4F" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span class="stat-value">12</span>
                                </div>
                                <div class="stat">


                                    <div class="tooltip">Total Students</div>
                                    <svg fill="none" viewBox="0 0 20 20">
                                        <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span class="stat-value">15.2K</span>
                                </div>
                                <div class="stat">
                                    <div class="tooltip">Rating</div>
                                    <svg viewBox="0 0 16 15" class="star-icon">
                                        <path fill="#13C4CC" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                    </svg>
                                    <span class="stat-value">4.7</span>
                                </div>
                            </div>
                        </div>
                        <div class="bundle-card">
                            <div class="bundle-image-container mb-3">
                                <img src="https://i.ibb.co/sw4yS26/img1.jpg" alt="Bundle cover" class="bundle-image" loading="lazy" />
                                <img src="https://i.ibb.co/cF4gPr5/AVATAR-github-com-biowaffeln.png" alt="Instructor" class="instructor-thumbnail" loading="lazy" />
                            </div>

                            <div class="bundle-content">
                                <h3 class="bundle-title">Web Development Master Bundle</h3>
                                <p class="bundle-description">
                                    Complete web development bundle covering frontend, backend, and full-stack development.
                                </p>

                                <div class="courses-preview w-100">
                                    <div class="course-thumbnails">
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/640kJN2/c1.jpg" alt="Course 1" class="course-thumbnail" />
                                            <div class="course-tooltip">The Complete Web Development Bootcamp</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/GFhHTqZ/c2.jpg" alt="Course 2" class="course-thumbnail" />
                                            <div class="course-tooltip">Advanced JavaScript Concepts</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/hBpWGQ7/c3.jpg" alt="Course 3" class="course-thumbnail" />
                                            <div class="course-tooltip">React Native - The Practical Guide</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/NKffPZQ/c4.jpg" alt="Course 4" class="course-thumbnail" />
                                            <div class="course-tooltip">UI/UX Design Masterclass</div>
                                        </div>
                                        <div class="course-thumbnail-container">
                                            <img src="https://i.ibb.co/ss92kB8/c5.jpg" alt="Course 5" class="course-thumbnail" />
                                            <div class="course-tooltip">Design Systems Workshop</div>
                                        </div>
                                    </div>
                                    <button class="view-all-button" onClick={() => context.setbundlemodal(!context.bundlemodal)} >
                                        View All
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                <div class="pricing">
                                    <div class="price-wrapper">
                                        <span class="current-price">$499.99</span>
                                        <span class="original-price">$899.99</span>
                                    </div>
                                    <div class="buy-button-container">
                                        <button class="add-to-cart">
                                            <svg fill="none" viewBox="0 0 24 24">
                                                <path fill="white" d="M22.5 16.14L23.92 6l-18.8-.81L4.92 4A4.43 4.43 0 002.51.8L.58 0 0 1.39l1.88.78a2.88 2.88 0 011.56 2.11l2.5 14.86a2.54 2.54 0 103.57 3h5.93a2.54 2.54 0 100-1.5H9.52a2.53 2.53 0 00-2.1-1.79l-.31-1.83 15.39-.88zm-4.65 4.21a1 1 0 11-.1 1.997 1 1 0 01.1-1.997zm4.36-12.92l-1 7.29-14.33.84-1.51-8.85 16.84.72zM8.14 21.4a1 1 0 11-2 0 1 1 0 012 0z" />
                                            </svg>
                                            Buy Now
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                        <div class="payment-plans-tooltip">
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

                            <div class="bundle-footer">
                                <div class="stat">
                                    <div class="tooltip">Total Courses</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
                                        <path fill="#4F4F4F" d="M7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V15.5505C6.13355 15.3548 6.56137 15.25 7 15.25H18.25V4.75H7ZM19.75 4C19.75 3.58579 19.4142 3.25 19 3.25H7C6.27065 3.25 5.57118 3.53973 5.05546 4.05546C4.53973 4.57118 4.25 5.27065 4.25 6V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20V4ZM18.25 16.75H7C6.66848 16.75 6.35054 16.8817 6.11612 17.1161C5.8817 17.3505 5.75 17.6685 5.75 18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H18.25V16.75ZM8.25 8C8.25 7.58579 8.58579 7.25 9 7.25H15C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75H9C8.58579 8.75 8.25 8.41421 8.25 8Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span class="stat-value">12</span>
                                </div>
                                <div class="stat">


                                    <div class="tooltip">Total Students</div>
                                    <svg fill="none" viewBox="0 0 20 20">
                                        <path fill="#4F4F4F" d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                    </svg>
                                    <span class="stat-value">15.2K</span>
                                </div>
                                <div class="stat">
                                    <div class="tooltip">Rating</div>
                                    <svg viewBox="0 0 16 15" class="star-icon">
                                        <path fill="#13C4CC" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z" />
                                    </svg>
                                    <span class="stat-value">4.7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : ''
            }

        </div>
    );
}
