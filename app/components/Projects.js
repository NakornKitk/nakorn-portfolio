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
                    <div className="flex gap-[10px] text-center justify-center items-center py-2">
                        <a href="https://github.com/NakornKitk/my-webboard-project" className="border border-[#4C585B] rounded-full w-[100px] bg-[#4C585B] hover:bg-[#7E99A3]">
                            <p className="p-[5px] text-white">Github</p>
                        </a>
                        <a href="https://my-webboard-project.onrender.com/" className="border border-[#4C585B] rounded-full w-[100px] bg-[#4C585B] hover:bg-[#7E99A3]">
                            <p className="p-[5px] text-white">Live Demo</p>
                        </a>
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
                    <div className="flex gap-[10px] text-center justify-center items-center">
                        <a href="https://github.com/NakornKitk/sumline-shop-v2" className="border border-[#4C585B] rounded-full w-[100px] bg-[#4C585B] hover:bg-[#7E99A3]">
                            <p className="p-[5px] text-white">Github</p>
                        </a>
                        <a href="https://nakornkitk.github.io/sumline-shop-v2/" className="border border-[#4C585B] rounded-full w-[100px] bg-[#4C585B] hover:bg-[#7E99A3]">
                            <p className="p-[5px] text-white">Live Demo</p>
                        </a>
                    </div>
                </div>
                <div className="border border-[#7E99A3] bg-[#FAFAFA] rounded-lg p-4 text-center w-full">
                    <h2 className="text-[20px] mb-2 py-4 font-semibold">POPCAT Battle click</h2>
                    <Image src="/images/popcat.jpg" alt="profile" width={700} height={500} className="rounded-lg object-cover mx-[auto] mb-[30px]" />
                    <div className="py-2">
                        <p>Front-end: ReactJS TailwindCSS</p>
                        <p>Back-end: NodeJS ExpressJS </p>
                        <p>Database: MongoDB </p>
                    </div>
                    <div className="flex gap-[10px] text-center justify-center items-center">
                        <a href="https://github.com/NakornKitk/popcat-battle-project" className="border border-[#4C585B] rounded-full w-[100px] bg-[#4C585B] hover:bg-[#7E99A3]">
                            <p className="p-[5px] text-white">Github</p>
                        </a>
                        <a href="https://popcat-clicks-battle-project.onrender.com/" className="border border-[#4C585B] rounded-full w-[100px] bg-[#4C585B] hover:bg-[#7E99A3]">
                            <p className="p-[5px] text-white">Live Demo</p>
                        </a>
                    </div>
                </div>
                <div className="border border-[#7E99A3] bg-[#FAFAFA] rounded-lg p-4 text-center w-full">
                    <h2 className="text-[20px] mb-2 py-4 font-semibold">LinkedIn profile clone</h2>
                    <Image src="/images/linkedin.jpg" alt="profile" width={700} height={500} className="rounded-lg object-cover mx-[auto] mb-[30px]" />
                    <div className="py-2">
                        <p>Front-end: only HTML and CSS</p>
                        <p>Back-end: - </p>
                        <p>Database: - </p>
                    </div>
                    <div className="flex gap-[10px] text-center justify-center items-center">
                        <a href="https://github.com/NakornKitk/linkedin-profile" className="border border-[#4C585B] rounded-full w-[100px] bg-[#4C585B] hover:bg-[#7E99A3]">
                            <p className="p-[5px] text-white">Github</p>
                        </a>
                        <a href="https://nakornkitk.github.io/linkedin-profile/" className="border border-[#4C585B] rounded-full w-[100px] bg-[#4C585B] hover:bg-[#7E99A3]">
                            <p className="p-[5px] text-white">Live Demo</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects