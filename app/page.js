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

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      <div className="px-[15%]">
        <div className="text-center mt-[120px] mb-[100px]">
          <div className="rounded-full object-cover mx-[auto] overflow-hidden w-[400px] h-[400px]">
            <Image src="/images/profile.png" alt="profile" width={400} height={400} />
          </div>
          <div className="pt-[40px] pb-[10px]">
            <h1 className="text-[32px] font-bold text-black">Nakorn Kitkanchaoroensin</h1>
            <h2 className="text-[22px]  text-[#4C585B] font-semibold">Web Developer</h2>
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
        <AboutMe />
        <Experience />
        <Skill />
        <Projects />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1240 70"><path fill="#F4EDD3" fill-opacity="1" d="M0,128L80,133.3C160,139,320,149,480,154.7C640,160,800,160,960,144C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <ContactForm />
    </div>
  );
}
