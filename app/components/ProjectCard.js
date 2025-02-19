import React from 'react'
import Image from 'next/image'

function ProjectCard({ name, image, frontend, backend, database, github, live }) {
    return (
        <div className="border border-[#7E99A3] bg-[#FAFAFA] rounded-lg p-4 text-center w-full my-[20px]">
            <h2 className="text-[20px] mb-2 py-4 font-semibold">{name}</h2>
            <Image src={image} alt="card" width={700} height={500} className="rounded-lg object-cover mx-[auto] mb-[30px]" />
            <div className="py-2">
                <p>Front-end: {frontend}</p>
                <p>Back-end: {backend} </p>
                <p>Database: {database}</p>
            </div>
            <div className="flex gap-[10px] text-center justify-center items-center">
                <a href={github} className="border border-[#4C585B] rounded-full w-[100px] bg-[#4C585B] hover:bg-[#7E99A3]">
                    <p className="p-[5px] text-white">Github</p>
                </a>
                <a href={live} className="border border-[#4C585B] rounded-full w-[100px] bg-[#4C585B] hover:bg-[#7E99A3]">
                    <p className="p-[5px] text-white">Live Demo</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard