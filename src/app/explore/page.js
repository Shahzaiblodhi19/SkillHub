"use client";
import { useState } from "react";

export default function Explore() {
    const allCourses = [
        {
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
    const [displayedCourses, setDisplayedCourses] = useState(
        allCourses.slice(0, coursesPerPage)
    ); // Initially display 4 courses
    const [displayedCourses2, setDisplayedCourses2] = useState(
        allCourses.slice(0, coursesPerPage)
    );
    const [AllCourses, setAllCourses] = useState(
        allCourses.slice(0, 10)
    );
    const [viewMoreActive, setViewMoreActive] = useState(false); // To toggle between View More and Less
    const [viewMoreActive2, setViewMoreActive2] = useState(false); // To toggle between View More and Less
    const [viewMoreActive3, setViewMoreActive3] = useState(false);

    // Handle Tab Switching
    const handleTabChange = (tab) => {
        setActiveTab(tab); // Update the active tab
        setCurrentPage(1);
        setViewMoreActive(false); // Reset View More on tab change
        if (tab === "All") {
            setAllCourses(allCourses.slice(0, 10));
        } else if (tab === "Trending") {
            setAllCourses(allCourses.slice(0, 8));
            setDisplayedCourses([])
        } else if (tab === "Latest") {
            setAllCourses(allCourses.slice(1, 6));
        } else if (tab === "Favorites") {
            setAllCourses(allCourses.slice(2, 9));
        }
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
            setDisplayedCourses2(allCourses.slice(0, coursesPerPage)); // Show only 4 courses
        } else {
            setDisplayedCourses2(allCourses.slice(0, 10)); // Show all 8 courses
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

    return (
        <div style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
            {/* Tabs */}
            <div className="w-100 py-2 shadow-md" style={{ marginBottom: "20px", display: "flex", gap: "2px", background: '#fff', borderRadius: '15px' }}>
                {["All", "Trending", "Latest", "Favorites"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabChange(tab)}
                        style={{
                            padding: "10px 20px",
                            background: 'transparent',
                            color: activeTab === tab ? "#587678" : "#4B4B4B",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: activeTab === tab ? '600' : '500',
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Courses */}
            <div className="w-100 mb-4" style={{
                background: '#fff',
                padding: '30px 20px',
                borderRadius: '20px'
            }}>
                <div className="flex items-center justify-between mb-4">
                    <h1 style={{ fontSize: '22px', fontWeight: 'bold' }}>Trending Courses</h1>
                    {/* Pagination */}
                    <div
                        style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "center",
                            gap: "5px",
                        }}
                    >
                        {[...Array(totalPages).keys()].map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handlePageChange(idx + 1)}
                                style={{
                                    padding: "5px 10px",
                                    background: currentPage === idx + 1 ? "#007bff" : "#f0f0f0",
                                    color: currentPage === idx + 1 ? "#fff" : "#000",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                {idx + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        rowGap: "25px",
                        columnGap: "13px",
                    }}
                >
                    {AllCourses.map((course, index) => (
                        <div className="flex flex-col" key={index}>
                            {/* Header Section */}
                            <div
                                className="w-100 py-2 px-3 fw-bold flex items-center justify-between"
                                style={{ background: '#F0F3FA', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                            >
                                <p style={{ fontSize: "12px", color: "#5D625E" }} className="flex items-center gap-2">
                                    <svg className="w-4 h-4" style={{ marginBottom: '1.5px' }} fill="none" viewBox="0 0 20 20">
                                        <path
                                            fill="#4F4F4F"
                                            d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z"
                                            clipRule="evenodd"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>{" "}
                                    {course.students}
                                </p>
                                <span>
                                    <svg className="w-5 h-5" style={{ rotate: '90deg' }} viewBox="0 0 24 24">
                                        <path
                                            fill="#5D625E"
                                            d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                        />
                                    </svg>
                                </span>
                            </div>

                            {/* Content Section */}
                            <div
                                className="shadow-md"
                                style={{
                                    overflow: "hidden",
                                    padding: "7px",
                                    background: "#fff",
                                }}
                            >
                                <img
                                    src={course.img}
                                    alt={course.title}
                                    className="rounded"
                                    style={{ width: "100%", height: "150px", objectFit: "cover" }}
                                />
                                <div style={{ padding: '28px 38px 10px 12px' }}>
                                    <h4 className="h-9" style={{ fontSize: "15px", marginBottom: "4px" }}>
                                        {course.title}
                                    </h4>
                                    <p className="mb-4" style={{ fontSize: "13px", marginBottom: "5px", color: 'grey' }}>
                                        By {course.author}
                                    </p>
                                    <p style={{ fontSize: "14px", color: "#000", fontWeight: 'bold' }}>
                                        {course.price}{" "}
                                        <span style={{ textDecoration: "line-through", color: "#aaa", marginLeft: '6px', fontWeight: '500' }}>
                                            {course.originalPrice}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="w-100 p-3 flex items-center justify-between" style={{ background: '#F9F9F9', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    {/* Type */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                        {course.details.icons}
                                        <span style={{ fontSize: "14px", color: "#000" }}>{course.details.type}</span>
                                    </div>

                                    {/* Duration */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
                                        <span style={{ fontSize: "14px", color: "#000" }}>{course.details.duration}</span>
                                    </div>

                                    {/* Rating */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            style={{ marginBottom: '2px' }}
                                        >
                                            <path fill="#2FB3BF" d="M3.612 15.443c-.396.199-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.33-.314-.158-.888.283-.95l4.898-.696 2.067-4.125c.197-.39.73-.39.927 0l2.067 4.125 4.898.696c.441.062.612.636.282.95l-3.523 3.356.83 4.73c.078.443-.35.791-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <span style={{ fontSize: "13px", color: "#000", fontWeight: "600" }}>
                                            {course.details.rating}
                                        </span>
                                        <span style={{ fontSize: "12px", color: "#797D80" }}>{course.details.reviews}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
            {displayedCourses ?
                <div className="w-100 mb-4" style={{
                    background: '#fff',
                    padding: '30px 20px',
                    borderRadius: '20px'
                }}>
                    <h1 className="mb-4" style={{ fontSize: '22px', fontWeight: 'bold' }}>Latest Courses</h1>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(5, 1fr)",
                            rowGap: "25px",
                            columnGap: "13px",
                        }}
                    >
                        {displayedCourses.map((course, index) => (
                            <div className="flex flex-col" key={index}>
                                {/* Header Section */}
                                <div
                                    className="w-100 py-2 px-3 fw-bold flex items-center justify-between"
                                    style={{ background: '#F0F3FA', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                                >
                                    <p style={{ fontSize: "12px", color: "#5D625E" }} className="flex items-center gap-2">
                                        <svg className="w-4 h-4" style={{ marginBottom: '1.5px' }} fill="none" viewBox="0 0 20 20">
                                            <path
                                                fill="#4F4F4F"
                                                d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>{" "}
                                        {course.students}
                                    </p>
                                    <span>
                                        <svg className="w-5 h-5" style={{ rotate: '90deg' }} viewBox="0 0 24 24">
                                            <path
                                                fill="#5D625E"
                                                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                            />
                                        </svg>
                                    </span>
                                </div>

                                {/* Content Section */}
                                <div
                                    className="shadow-md"
                                    style={{
                                        overflow: "hidden",
                                        padding: "7px",
                                        background: "#fff",
                                    }}
                                >
                                    <img
                                        src={course.img}
                                        alt={course.title}
                                        className="rounded"
                                        style={{ width: "100%", height: "150px", objectFit: "cover" }}
                                    />
                                    <div style={{ padding: '28px 38px 10px 12px' }}>
                                        <h4 className="h-9" style={{ fontSize: "15px", marginBottom: "4px" }}>
                                            {course.title}
                                        </h4>
                                        <p className="mb-4" style={{ fontSize: "13px", marginBottom: "5px", color: 'grey' }}>
                                            By {course.author}
                                        </p>
                                        <p style={{ fontSize: "14px", color: "#000", fontWeight: 'bold' }}>
                                            {course.price}{" "}
                                            <span style={{ textDecoration: "line-through", color: "#aaa", marginLeft: '6px', fontWeight: '500' }}>
                                                {course.originalPrice}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="w-100 p-3 flex items-center justify-between" style={{ background: '#F9F9F9', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        {/* Type */}
                                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            {course.details.icons}
                                            <span style={{ fontSize: "14px", color: "#000" }}>{course.details.type}</span>
                                        </div>

                                        {/* Duration */}
                                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
                                            <span style={{ fontSize: "14px", color: "#000" }}>{course.details.duration}</span>
                                        </div>

                                        {/* Rating */}
                                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                                style={{ marginBottom: '2px' }}
                                            >
                                                <path fill="#2FB3BF" d="M3.612 15.443c-.396.199-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.33-.314-.158-.888.283-.95l4.898-.696 2.067-4.125c.197-.39.73-.39.927 0l2.067 4.125 4.898.696c.441.062.612.636.282.95l-3.523 3.356.83 4.73c.078.443-.35.791-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <span style={{ fontSize: "13px", color: "#000", fontWeight: "600" }}>
                                                {course.details.rating}
                                            </span>
                                            <span style={{ fontSize: "12px", color: "#797D80" }}>{course.details.reviews}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                    {/* View More / Less */}
                    <div className="cursor-pointer py-2 fw-bold" onClick={handleToggleViewMore} style={{ textAlign: "center", marginTop: "20px", background: '#F5F5F5', zIndex: '100' }}>
                        <button

                        >
                            {!viewMoreActive ? <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                    stroke="2px"
                                />
                            </svg>
                                : <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.646 11.354a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708 0z"
                                    />
                                </svg>
                            }
                        </button>
                    </div>
                </div>
                : ''
            }
            <div className="w-100 mb-4" style={{
                background: '#fff',
                padding: '30px 20px',
                borderRadius: '20px'
            }}>
                <h1 className="mb-4" style={{ fontSize: '22px', fontWeight: 'bold' }}>Most Watched</h1>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        rowGap: "25px",
                        columnGap: "13px",
                    }}
                >
                    {displayedCourses2.map((course, index) => (
                        <div className="flex flex-col" key={index}>
                            {/* Header Section */}
                            <div
                                className="w-100 py-2 px-3 fw-bold flex items-center justify-between"
                                style={{ background: '#F0F3FA', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                            >
                                <p style={{ fontSize: "12px", color: "#5D625E" }} className="flex items-center gap-2">
                                    <svg className="w-4 h-4" style={{ marginBottom: '1.5px' }} fill="none" viewBox="0 0 20 20">
                                        <path
                                            fill="#4F4F4F"
                                            d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z"
                                            clipRule="evenodd"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>{" "}
                                    {course.students}
                                </p>
                                <span>
                                    <svg className="w-5 h-5" style={{ rotate: '90deg' }} viewBox="0 0 24 24">
                                        <path
                                            fill="#5D625E"
                                            d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                        />
                                    </svg>
                                </span>
                            </div>

                            {/* Content Section */}
                            <div
                                className="shadow-md"
                                style={{
                                    overflow: "hidden",
                                    padding: "7px",
                                    background: "#fff",
                                }}
                            >
                                <img
                                    src={course.img}
                                    alt={course.title}
                                    className="rounded"
                                    style={{ width: "100%", height: "150px", objectFit: "cover" }}
                                />
                                <div style={{ padding: '28px 38px 10px 12px' }}>
                                    <h4 className="h-9" style={{ fontSize: "15px", marginBottom: "4px" }}>
                                        {course.title}
                                    </h4>
                                    <p className="mb-4" style={{ fontSize: "13px", marginBottom: "5px", color: 'grey' }}>
                                        By {course.author}
                                    </p>
                                    <p style={{ fontSize: "14px", color: "#000", fontWeight: 'bold' }}>
                                        {course.price}{" "}
                                        <span style={{ textDecoration: "line-through", color: "#aaa", marginLeft: '6px', fontWeight: '500' }}>
                                            {course.originalPrice}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="w-100 p-3 flex items-center justify-between" style={{ background: '#F9F9F9', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    {/* Type */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                        {course.details.icons}
                                        <span style={{ fontSize: "14px", color: "#000" }}>{course.details.type}</span>
                                    </div>

                                    {/* Duration */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
                                        <span style={{ fontSize: "14px", color: "#000" }}>{course.details.duration}</span>
                                    </div>

                                    {/* Rating */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            style={{ marginBottom: '2px' }}
                                        >
                                            <path fill="#2FB3BF" d="M3.612 15.443c-.396.199-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.33-.314-.158-.888.283-.95l4.898-.696 2.067-4.125c.197-.39.73-.39.927 0l2.067 4.125 4.898.696c.441.062.612.636.282.95l-3.523 3.356.83 4.73c.078.443-.35.791-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <span style={{ fontSize: "13px", color: "#000", fontWeight: "600" }}>
                                            {course.details.rating}
                                        </span>
                                        <span style={{ fontSize: "12px", color: "#797D80" }}>{course.details.reviews}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
                {/* View More / Less */}
                <div className="cursor-pointer py-2 fw-bold" onClick={handleToggleViewMore2} style={{ textAlign: "center", marginTop: "20px", background: '#F5F5F5', zIndex: '100' }}>
                    <button

                    >
                        {!viewMoreActive2 ? <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                stroke="2px"
                            />
                        </svg>
                            : <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.646 11.354a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708 0z"
                                />
                            </svg>
                        }
                    </button>
                </div>
            </div>

            <div className="w-100 mb-4" style={{
                background: '#fff',
                padding: '30px 20px',
                borderRadius: '20px'
            }}>
                <h1 className="mb-4" style={{ fontSize: '22px', fontWeight: 'bold' }}>Customer Favorites</h1>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        rowGap: "25px",
                        columnGap: "13px",
                    }}
                >
                    {displayedCourses2.map((course, index) => (
                        <div className="flex flex-col" key={index}>
                            {/* Header Section */}
                            <div
                                className="w-100 py-2 px-3 fw-bold flex items-center justify-between"
                                style={{ background: '#F0F3FA', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                            >
                                <p style={{ fontSize: "12px", color: "#5D625E" }} className="flex items-center gap-2">
                                    <svg className="w-4 h-4" style={{ marginBottom: '1.5px' }} fill="none" viewBox="0 0 20 20">
                                        <path
                                            fill="#4F4F4F"
                                            d="M9.72154 3.47033C9.90035 3.39881 10.0998 3.39881 10.2786 3.47033L18.612 6.80366C18.8967 6.91756 19.0834 7.19334 19.0834 7.50002V12.5C19.0834 12.9142 18.7476 13.25 18.3334 13.25C17.9192 13.25 17.5834 12.9142 17.5834 12.5V8.6078L15.7501 9.34113V13.3334C15.7501 14.4243 14.9016 15.2566 13.871 15.7719C12.8053 16.3048 11.4126 16.5834 10.0001 16.5834C8.58758 16.5834 7.19484 16.3048 6.12914 15.7719C5.09852 15.2566 4.25008 14.4243 4.25008 13.3334V9.34113L1.38821 8.19638C1.10346 8.08248 0.916748 7.8067 0.916748 7.50002C0.916748 7.19334 1.10346 6.91756 1.38821 6.80366L9.72154 3.47033ZM5.29422 8.14324C5.2838 8.13879 5.27326 8.13457 5.2626 8.13059L3.68619 7.50002L10.0001 4.97446L16.314 7.50002L14.7376 8.13059C14.7269 8.13457 14.7164 8.13879 14.7059 8.14323L10.0001 10.0256L5.29422 8.14324ZM5.75008 9.94113V13.3334C5.75008 13.5685 5.95521 14.0079 6.79996 14.4303C7.60962 14.8351 8.76042 15.0834 10.0001 15.0834C11.2397 15.0834 12.3905 14.8351 13.2002 14.4303C14.0449 14.0079 14.2501 13.5685 14.2501 13.3334V9.94113L10.2786 11.5297C10.0998 11.6012 9.90035 11.6012 9.72154 11.5297L5.75008 9.94113Z"
                                            clipRule="evenodd"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>{" "}
                                    {course.students}
                                </p>
                                <span>
                                    <svg className="w-5 h-5" style={{ rotate: '90deg' }} viewBox="0 0 24 24">
                                        <path
                                            fill="#5D625E"
                                            d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                        />
                                    </svg>
                                </span>
                            </div>

                            {/* Content Section */}
                            <div
                                className="shadow-md"
                                style={{
                                    overflow: "hidden",
                                    padding: "7px",
                                    background: "#fff",
                                }}
                            >
                                <img
                                    src={course.img}
                                    alt={course.title}
                                    className="rounded"
                                    style={{ width: "100%", height: "150px", objectFit: "cover" }}
                                />
                                <div style={{ padding: '28px 38px 10px 12px' }}>
                                    <h4 className="h-9" style={{ fontSize: "15px", marginBottom: "4px" }}>
                                        {course.title}
                                    </h4>
                                    <p className="mb-4" style={{ fontSize: "13px", marginBottom: "5px", color: 'grey' }}>
                                        By {course.author}
                                    </p>
                                    <p style={{ fontSize: "14px", color: "#000", fontWeight: 'bold' }}>
                                        {course.price}{" "}
                                        <span style={{ textDecoration: "line-through", color: "#aaa", marginLeft: '6px', fontWeight: '500' }}>
                                            {course.originalPrice}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="w-100 p-3 flex items-center justify-between" style={{ background: '#F9F9F9', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    {/* Type */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                        {course.details.icons}
                                        <span style={{ fontSize: "14px", color: "#000" }}>{course.details.type}</span>
                                    </div>

                                    {/* Duration */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
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
                                        <span style={{ fontSize: "14px", color: "#000" }}>{course.details.duration}</span>
                                    </div>

                                    {/* Rating */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            style={{ marginBottom: '2px' }}
                                        >
                                            <path fill="#2FB3BF" d="M3.612 15.443c-.396.199-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.33-.314-.158-.888.283-.95l4.898-.696 2.067-4.125c.197-.39.73-.39.927 0l2.067 4.125 4.898.696c.441.062.612.636.282.95l-3.523 3.356.83 4.73c.078.443-.35.791-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <span style={{ fontSize: "13px", color: "#000", fontWeight: "600" }}>
                                            {course.details.rating}
                                        </span>
                                        <span style={{ fontSize: "12px", color: "#797D80" }}>{course.details.reviews}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                {/* View More / Less */}
                <div className="cursor-pointer py-2 fw-bold" onClick={handleToggleViewMore3} style={{ textAlign: "center", marginTop: "20px", background: '#F5F5F5', zIndex: '100' }}>
                    <button

                    >
                        {!viewMoreActive3 ? <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                stroke="2px"
                            />
                        </svg>
                            : <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.646 11.354a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708 0z"
                                />
                            </svg>
                        }
                    </button>
                </div>
            </div>



        </div>
    );
}
