'use client'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { useEffect, useState, useRef } from 'react'

function Skill() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [inView, setInView] = useState(false); // To track if the div is in the viewport
  const divRef = useRef(null); // Reference to the div
  const isFlexColumn = window.innerWidth < 768;

  useEffect(() => {
    // Store the ref value in a variable before observing it
    const currentDivRef = divRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // Set inView to true when the component is in the viewport
          } else {
            setInView(false); // Optional: reset state when leaving the viewport
          }
        });
      },
      { threshold: 0.2 } // Trigger when 50% of the element is visible
    );

    if (currentDivRef) {
      observer.observe(currentDivRef); // Observe the target div
    }

    return () => {
      // Use the variable to ensure it's accessed correctly during cleanup
      if (currentDivRef) {
        observer.unobserve(currentDivRef); // Clean up observer on unmount
      }
    };
  }, []); // Empty dependency array to set up observer once



  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Update the scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up event listener on unmount
    };
  }, []);


  const scrollEffect = inView ? Math.min(scrollPosition / 5, 100) : 0;
  return (
    <div className={`my-[50px] ${isFlexColumn ? 'overflow-hidden' : ''}`} ref={divRef} >
      <h1 className="text-center text-[26px] md:text-[32px] font-bold">Skill</h1>
      <div className="md:flex gap-x-[20px] my-[20px]">
        <div className={`border border-[#7E99A3] bg-[#FAFAFA] rounded-lg p-4 text-center w-full pb-6 mb-[20px] md:mb-[0px] transition-transform duration-500 ease-in-out ${inView ? 'fade-in' : 'opacity-0'}`} style={{
          transform: `${isFlexColumn ? `translateY(${100 - scrollEffect}%)` : `translateX(-${100 - scrollEffect}%)`}`
        }}>
          <h2 className="text-[20px] mb-2 py-4 font-semibold text-[#4C585B]">Frontend Development</h2>
          <div className="flex items-center justify-center py-2">
            <div className="pr-[10px] text-[30px]">
              <FaHtml5 />
            </div>
            <div className="text-[20px]">
              <p>HTML</p>
              <p></p>
            </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <div className="pr-[10px] text-[30px]">
              <FaCss3Alt />
            </div>
            <div className="text-[20px]">
              <p>CSS</p>
              <p></p>
            </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <div className="pr-[10px] text-[30px]">
              <IoLogoJavascript />
            </div>
            <div className="text-[20px]">
              <p>Javascript</p>
              <p></p>
            </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <div className="pr-[10px] text-[30px]">
              <FaReact />
            </div>
            <div className="text-[20px]">
              <p>ReactJS</p>
              <p></p>
            </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <div className="pr-[10px] text-[30px]">
              <RiTailwindCssFill />
            </div>
            <div className="text-[20px]">
              <p>TailwindCSS</p>
              <p></p>
            </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <div className="pr-[10px] text-[30px]">
              <FaBootstrap />
            </div>
            <div className="text-[20px]">
              <p>Bootstrap</p>
              <p></p>
            </div>
          </div>
        </div>
        <div className={`border border-[#7E99A3] bg-[#FAFAFA] rounded-lg p-4 text-center w-full pb-6 transition-transform duration-500 ease-in-out ${inView ? 'fade-in' : 'opacity-0'}`}  style={{
          transform: `${isFlexColumn ? `translateY(${100 - scrollEffect}%)` : `translateX(${100 - scrollEffect}%)`}`
        }}>
          <h2 className="text-[20px] mb-2 py-4 font-semibold text-[#4C585B]">Backend Development</h2>
          <div className="flex items-center justify-center py-2">
            <div className="pr-[10px] text-[30px]">
              <FaNodeJs />
            </div>
            <div className="text-[20px] ">
              <p>NodeJS</p>
              <p></p>
            </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <div className="pr-[10px] text-[30px]">
              <SiExpress />
            </div>
            <div className="text-[20px]">
              <p>ExpressJS</p>
              <p></p>
            </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <div className="pr-[10px] text-[30px]">
              <SiMysql />
            </div>
            <div className="text-[20px]">
              <p>MySQL</p>
              <p></p>
            </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <div className="pr-[10px] text-[30px]">
              <SiMongodb />
            </div>
            <div className="text-[20px]">
              <p>MongoDB</p>
              <p></p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Skill