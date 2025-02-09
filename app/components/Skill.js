import React from 'react'

function Skill() {
  return (
    <div className="my-[50px]">
      <h1 className="text-center text-[32px] font-bold">Skill</h1>
      <div className="flex justify-between my-[20px]">
        <div className="border-2 border-black rounded-lg p-4 text-center">
          <h2>Frontend Development</h2>
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
        <div className="border-2 border-black rounded-lg p-4 text-center">
          <h2>Backend Development</h2>
          <div>
            <p>Node JS</p>
            <p></p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Skill