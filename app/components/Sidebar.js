import React from 'react'
import { useScroll } from './ScrollContext.js';
import { useState } from 'react';

function Sidebar({ setIsActiveSidebar }) {
    const { navigateAndScroll } = useScroll();

    const handleSidebar = (num) => {
        navigateAndScroll(num)
        setIsActiveSidebar(false)
    }

    return (
        <>
            <div className="fixed inset-0 bg-black opacity-50 z-40" style={{ right: '280px' }}></div>
            <div className="fixed right-0 top-0 h-full text-white bg-[#7E99A3] w-[280px] z-70">
                <button
                    onClick={() => setIsActiveSidebar(false)}
                    className="absolute top-4 right-4 text-[30px] hover:text-[#F4EDD3]"
                >
                    &times;
                </button>
                <div className="flex flex-col items-center justify-center space-y-4 h-[100%] text-[20px]">
                    <div
                        className="hover:text-[#F4EDD3]"
                        onClick={() => {
                            handleSidebar(0)
                        }}
                    >
                        <button>About</button>
                    </div>
                    <div
                        className="hover:text-[#F4EDD3]"
                        onClick={() => {
                            handleSidebar(1)
                        }}
                    >
                        <button>Experience</button>
                    </div>
                    <div
                        className="hover:text-[#F4EDD3]"
                        onClick={() => {
                            handleSidebar(2)
                        }}
                    >
                        <button>Projects</button>
                    </div>
                    <div
                        className="hover:text-[#F4EDD3]"
                        onClick={() => {
                            handleSidebar(3)
                        }}
                    >
                        <button>Contact</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar