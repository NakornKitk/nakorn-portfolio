import React from 'react'

function AboutMe() {
    return (
        <div className="my-[50px]">
            <h1 className="text-center text-[32px] font-bold">About Me</h1>

            <div className="flex gap-[10%] my-[20px]">
                <div className="border-2 border-black rounded-lg p-4 text-center">
                    <p>Experience</p>
                    <p>0+ year Web Development</p>
                    <p>1+ year NPI Engineer</p>
                </div>
                <div className="border-2 border-black rounded-lg p-4 text-center">
                    <p>Education</p>
                    <p>B.Sc Bachelors Degree of Industrial Engineering</p>
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