"use client";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Image from 'next/image';
import Experience from "./components/Experience";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { ScrollProvider } from './components/ScrollContext.js';
import { useScroll } from './components/ScrollContext';
import { useEffect, useRef } from 'react'
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

function HomeContent() {
  const { setSectionRefs } = useScroll(); // Now inside ScrollProvider
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  useEffect(() => {
    setSectionRefs([section1Ref.current, section2Ref.current, section3Ref.current, section4Ref.current]);
  }, [setSectionRefs]);

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      <div className="px-[15%]">
        <div className="pt-[70px] xl:pt-[0px] text-center my-[auto] xl:flex xl:items-center xl:justify-center min-h-[calc(100vh-90px)]">
          <div className="rounded-full object-cover mx-[auto] xl:m-[0px] overflow-hidden w-[400px] h-[400px]">
            <Image src="/images/profile.png" alt="profile" width={400} height={400} />
          </div>
          <div>
            <div className="pt-[40px] pb-[10px] w-[400px] mx-[auto] xl:ml-[20px]">
              <h1 className="text-[32px] font-bold text-black">Nakorn Kitkanchaoroensin</h1>
              <h2 className="text-[22px] text-[#4C585B] font-semibold">Web Developer</h2>
            </div>
            <div className="flex items-center justify-center gap-x-3">
              <a href="https://github.com/NakornKitk">
                <FaGithub className="text-[36px]" />
              </a>
              <a href="https://www.linkedin.com/in/nakorn-kitkancharoensin/">
                <FaLinkedin className="text-[36px]" />
              </a>
              <a href="mailto:nakornkitk@gmail.com">
                <FaGoogle className="text-[36px]" />
              </a>
            </div>
          </div>
        </div>
        <div ref={section1Ref}></div>
        <AboutMe />
        <div ref={section2Ref}></div>
        <Experience />
        <Skill />
        <div ref={section3Ref}></div>
        <Projects />
      </div>

      <div ref={section4Ref}></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1240 70">
        <path fill="#F4EDD3" fillOpacity="1" d="M0,128L80,133.3C160,139,320,149,480,154.7C640,160,800,160,960,144C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <ContactForm />
    </div>
  );
}

export default function Home() {
  return (
    <BrowserRouter>
      <ScrollProvider>
        <HomeContent />
      </ScrollProvider>
    </BrowserRouter>

  );
}