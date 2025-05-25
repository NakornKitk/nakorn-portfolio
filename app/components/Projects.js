'use client'

import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard';


function Projects() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => setData(data.projects))
            .catch((error) => console.error("Error fetching JSON:", error));
    }, []);

    return (
        <div className="my-[50px]">
            <h1 className="text-center text-[26px] md:text-[32px] font-bold">Projects</h1>
            <div className="my-[20px] gap-y-[20px]">
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <ProjectCard
                            key={index}
                            name={item.name}
                            image={item.image}
                            frontend={item.frontend}
                            backend={item.backend}
                            database={item.database}
                            github={item.github}
                            live={item.live}
                        />
                    ))
                ) : (
                    <p className="text-center">Loading projects...</p>
                )}
            </div>
        </div>
    )
}

export default Projects