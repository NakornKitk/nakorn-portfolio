import React from 'react'

function Skill() {
  return (
    <div className="my-[50px]">
      <h1 className="text-center text-[32px] font-bold">Skill</h1>
      <div className="flex gap-x-[20px] my-[20px]">
        <div className="border border-[#7E99A3] bg-[#FAFAFA] rounded-lg p-4 text-center w-full pb-6">
          <h2 className="text-[20px] mb-2 py-4 font-semibold text-[#4C585B]">Frontend Development</h2>
          <div>
            <p>HTML</p>
            <p></p>
          </div>
          <div>
            <p>CSS</p>
            <p></p>
          </div>
          <div>
            <p>Javascript</p>
            <p></p>
          </div>
          <div>
            <p>React JS</p>
            <p></p>
          </div>
          <div>
            <p>Tailwind CSS</p>
            <p></p>
          </div>
          <div>
            <p>Bootstrap</p>
            <p></p>
          </div>
        </div>
        <div className="border border-[#7E99A3] bg-[#FAFAFA] rounded-lg p-4 text-center w-full pb-6">
          <h2 className="text-[20px] mb-2 py-4 font-semibold text-[#4C585B]">Backend Development</h2>
          <div className="mb-4">
            <p>Node JS</p>
            <p></p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Skill