
"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar.js';
import { useScroll } from './ScrollContext.js';
import { MdOutlineMenu } from "react-icons/md";


function Header() {
  const { navigateAndScroll } = useScroll();
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isActiveSidebar, setIsActiveSidebar] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;

    setScrollPercent(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);





  return (
    <div className="text-white bg-[#7E99A3] w-full top-0 left-0 z-50">
      <div className="flex justify-between py-[20px] px-[15%]">
        <p className="text-[30px]">Nakorn Portfolio</p>
        <div className="flex items-center justify-center text-[30px] md:hidden cursor-pointer">
          <MdOutlineMenu onClick={() => setIsActiveSidebar(true)} />
        </div>
        <div className="hidden md:flex gap-x-[10px] items-center justify-center text-[18px]">
          <p onClick={() => navigateAndScroll(0)} className="cursor-pointer">About</p>
          <p onClick={() => navigateAndScroll(1)} className="cursor-pointer">Experience</p>
          <p onClick={() => navigateAndScroll(2)} className="cursor-pointer">Projects</p>
          <p onClick={() => navigateAndScroll(3)} className="cursor-pointer">Contact</p>
        </div>
      </div>
      <div className={`fixed top-0 right-0 w-[280px] h-full text-white transform 
          ${isActiveSidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <Sidebar setIsActiveSidebar={setIsActiveSidebar} />
      </div>
    </div>
  )
}

export default Header