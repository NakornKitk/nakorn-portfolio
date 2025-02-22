import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

function AboutMe() {
    return (
        <div className="my-[50px]">
            <h1 className="text-center text-[32px] font-bold">About Me</h1>

            <div className="md:flex gap-[20px] my-[20px] w-[100%]">
                <div className="border border-[#7E99A3] rounded-lg p-4 text-center w-full mb-4 bg-[#FAFAFA] ">
                    <div className="flex justify-center items-center">
                        <MdBusinessCenter className="text-[36px]" />
                    </div>
                    <p className="text-[20px] py-4 font-semibold">Experience</p>
                    <p>0+ year Web Development</p>
                    <p>1+ year NPI Engineer</p>
                </div>
                <div className="border border-[#7E99A3] rounded-lg p-4 text-center w-full mb-4 bg-[#FAFAFA]">
                    <div className="flex justify-center items-center">
                        <FaGraduationCap className="text-[36px]" />
                    </div>
                    <p className="text-[20px] py-4 font-semibold">Education</p>
                    <p>B.Sc Bachelors Degree of Industrial Engineering</p>
                    <p>Kasetsart University</p>
                </div>
            </div>

            <div>
                <p>I’m a passionate web developer. I learned through self-study and online courses. I have experience in
                    creating projects based on what I learned. Previously, I worked as an engineer in the electronic field. I am
                    eager to bring my problem-solving skills and attention to detail to a new role in web development.</p>
            </div>


        </div>

    )
}

export default AboutMe