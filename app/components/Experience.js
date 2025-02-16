import React from 'react'

function Experience() {
  return (
    <div className="my-[50px]">
      <h1 className="text-center text-[32px] font-bold">Experience</h1>
      <div className="flex gap-x-[20px] my-[20px]">
        <div className="border border-[#7E99A3] bg-[#FAFAFA] rounded-lg p-4 text-center w-full">
          <h2 className="text-[20px] mb-2 py-4 font-semibold">Company 1</h2>
          <div className="py-1">
            <p>Web developer</p>
            <p>2 months</p>
          </div>
          <p className="py-4">making a website for a company</p>
        </div>
        <div className="border border-[#7E99A3] bg-[#FAFAFA] rounded-lg p-4 text-center w-full">
          <h2 className="text-[20px] mb-2 py-4 font-semibold">SVI Public Company Limited</h2>
          <div className="py-1">
            <p>NPI Engineer</p>
            <p>1 year</p>
          </div>
          <p className="py-4">making a website for a company</p>
        </div>

      </div>

    </div>
  )
}

export default Experience