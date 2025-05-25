import ContactForm from "./ContactForm";
import AboutMe from "./AboutMe";
import Skill from "./Skill";
import Projects from "./Projects";
import Image from "next/image";
import Experience from "./Experience";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import ScrollManager from "./ScrollManager";

export default function HomeContent() {
  return (
    <div className="bg-white text-black min-h-screen overflow-hidden">
      <div className="px-[15%]">
        <div className="pt-[70px] xl:pt-[0px] text-center my-[auto] xl:flex xl:items-center xl:justify-center min-h-[calc(100vh-90px)]">
          <div className="rounded-full object-cover mx-auto mb-[20px] xl:m-0 overflow-hidden w-full max-w-[400px] h-full aspect-square">
            <Image src="/images/profile.png" alt="profile" width={400} height={400} />
          </div>
          <div>
            <div className="pt-[40px] pb-[10px] max-w-[400px] mx-[auto] xl:ml-[20px]">
              <h1 className="text-[26px] md:text-[32px] font-bold text-black">Nakorn Kitkanchaoroensin</h1>
              <h2 className="text-[20px] md:text-[22px] text-[#4C585B] font-semibold">Web Developer</h2>
            </div>
            <div className="flex items-center justify-center gap-x-3">
              <a href="https://github.com/NakornKitk" className="hover:scale-110 transition-transform duration-300 ease-in-out">
                <FaGithub className="text-[36px]" />
              </a>
              <a href="https://www.linkedin.com/in/nakorn-kitkancharoensin/" className="hover:scale-110 transition-transform duration-300 ease-in-out">
                <FaLinkedin className="text-[36px]" />
              </a>
              <a href="mailto:nakornkitk@gmail.com" className="hover:scale-110 transition-transform duration-300 ease-in-out">
                <FaGoogle className="text-[36px]" />
              </a>
            </div>
          </div>
        </div>

        <AboutMe />
        <Experience />
        <Skill />
        <Projects />
        <ScrollManager />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1240 70">
        <path fill="#F4EDD3" fillOpacity="1" d="M0,128L80,133.3C160,139,320,149,480,154.7C640,160,800,160,960,144C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <ContactForm />
    </div>
  );
}
