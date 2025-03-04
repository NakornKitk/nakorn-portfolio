'use client'
import { useEffect, useState, useRef } from 'react'

import { FaGraduationCap } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

function AboutMe() {
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
        <div ref={divRef} className={`my-[50px] ${isFlexColumn ? 'overflow-hidden' : ''}`}>
            <h1 className="text-center text-[32px] font-bold">About Me</h1>

            <div className="md:flex gap-[20px] my-[20px] w-[100%]">
                <div className="border border-[#7E99A3] rounded-lg p-4 text-center w-full mb-4 bg-[#FAFAFA] transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `${isFlexColumn ? `translateY(${100 - scrollEffect}%)` : `translateX(-${100 - scrollEffect}%)`}`
                    }}>
                    <div className="flex justify-center items-center">
                        <MdBusinessCenter className="text-[36px]" />
                    </div>
                    <p className="text-[20px] py-4 font-semibold">Experience</p>
                    <p>0+ year Web Development</p>
                    <p>1+ year NPI Engineer</p>
                </div>
                <div className="border border-[#7E99A3] rounded-lg p-4 text-center w-full mb-4 bg-[#FAFAFA] transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `${isFlexColumn ? `translateY(${100 - scrollEffect}%)` : `translateX(${100 - scrollEffect}%)`}`
                    }}>
                    <div className="flex justify-center items-center">
                        <FaGraduationCap className="text-[36px]" />
                    </div>
                    <p className="text-[20px] py-4 font-semibold">Education</p>
                    <p>B.Sc Bachelors Degree of Industrial Engineering</p>
                    <p>Kasetsart University</p>
                </div>
            </div>

            <div>
                <p>
                    I’m a passionate web developer. I learned through self-study and
                    online courses. I have experience in creating projects based on what I
                    learned. Previously, I worked as an engineer in the electronic field.
                    I am eager to bring my problem-solving skills and attention to detail
                    to a new role in web development.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
