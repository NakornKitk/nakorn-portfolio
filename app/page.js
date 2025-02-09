import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen px-[15%]">
      <Header />
      <div className="text-center my-[50px]">
        <Image src="/images/profile.png" alt="profile" width={500} height={500} className="w-[250px] h-[250px] rounded-full object-cover mx-[auto] mb-[20px]" />
        <h1 className="text-[32px] font-bold">Nakorn Kitkanchaoroensin</h1>
        <h2 className="text-[22px]  text-[#888787]">Web Developer</h2>
      </div>
      <AboutMe />
      <Skill />
      <Projects />
      <ContactForm />
    </div>
  );
}
