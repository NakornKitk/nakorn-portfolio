
"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar.js';
import { useScroll } from './ScrollContext.js';


function Header() {
  const { navigateAndScroll } = useScroll();
  const [scrollPercent, setScrollPercent] = useState(0);

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
    <div className="text-white bg-[#7E99A3] fixed w-full top-0 left-0 z-50">
      <div
        style={{
          height: "4px",
          backgroundColor: "#FAFAFA",
          width: `${scrollPercent}%`,
          transition: "width 0.2s ease-in-out",
        }}
      />
      <div className="flex justify-between py-[20px] px-[15%]">
        <p className="text-[30px]">Nakorn Portfolio</p>
        <div className="flex gap-x-[10px] items-center justify-center text-[18px]">
          <p onClick={() => navigateAndScroll(0)} className="cursor-pointer">About</p>
          <p onClick={() => navigateAndScroll(1)} className="cursor-pointer">Experience</p>
          <p onClick={() => navigateAndScroll(2)} className="cursor-pointer">Projects</p>
          <p onClick={() => navigateAndScroll(3)} className="cursor-pointer">Contact</p>
        </div>
      </div>
    </div>
  )
}

export default Header