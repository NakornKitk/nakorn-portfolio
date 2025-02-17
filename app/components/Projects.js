import React from 'react'
import Image from 'next/image';

function Projects() {
    return (
        <div className="my-[50px]">
            <h1 className="text-center text-[32px] font-bold">Projects</h1>
            <div className="flex justify-between my-[20px] gap-x-[20px]">
                <div className="border border-[#7E99A3] bg-[#FAFAFA] rounded-lg p-4 text-center w-full">
                    <h2 className="text-[20px] mb-2 py-4 font-semibold">My Webboard</h2>
                    <Image src="/images/project.png" alt="profile" width={700} height={500} className="rounded-lg object-cover mx-[auto] mb-[30px]" />
                    <div className="py-2">
                        <p>Front-end: ReactJS MaterialUI</p>
                        <p>Back-end: NodeJS ExpressJS</p>
                        <p>Database: MySQL</p>
                    </div>
                    <div className="flex gap-[10%] text-center justify-center items-center py-2">
                        <div className="border border-[#4C585B] rounded-full w-[100px] bg-[#4C585B]">
                            <p className="p-[5px] text-white">Github</p>
                        </div>
                        <div className="border border-[#4C585B] rounded-full w-[100px] bg-[#4C585B]">
                            <p className="p-[5px] text-white">Live Demo</p>
                        </div>
                    </div>
                </div>
                <div className="border border-[#7E99A3] bg-[#FAFAFA] rounded-lg p-4 text-center w-full">
                    <h2 className="text-[20px] mb-2 py-4 font-semibold">Sumline Shop</h2>
                    <Image src="/images/sumline.png" alt="profile" width={700} height={500} className="rounded-lg object-cover mx-[auto] mb-[30px]" />
                    <div className="py-2">
                        <p>Front-end: ReactJS TailwindCSS</p>
                        <p>Back-end: - </p>
                        <p>Database: - </p>
                    </div>
                    <div className="flex gap-[10%] text-center justify-center items-center">
                        <div className="border border-[#4C585B] rounded-full w-[100px] bg-[#4C585B]">
                            <p className="p-[5px] text-white">Github</p>
                        </div>
                        <div className="border border-[#4C585B] rounded-full w-[100px] bg-[#4C585B]">
                            <p className="p-[5px] text-white">Live Demo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects