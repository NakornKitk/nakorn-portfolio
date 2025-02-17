import React from 'react'
import Image from 'next/image'

function Experience() {
  return (
    <div className="my-[50px]">
      <h1 className="text-center text-[32px] font-bold">Experience</h1>
      <div className="flex gap-x-[20px] my-[20px]">
        <div className="border border-[#7E99A3] bg-[#FAFAFA] rounded-lg p-4 text-center w-full">
          <h2 className="text-[20px] mb-2 py-4 font-semibold">Worachart Group Company Limited</h2>
          <div className="w-[100%] h-[200px] flex items-center justify-center">
            <Image src="/images/logo-w.png" alt="worachart" width={200} height={200} className="rounded-lg object-cover mx-[auto] mb-[30px]" />
          </div>
          <div className="py-1">
            <p>Web developer</p>
            <p>2 months</p>
          </div>
          <p className="py-4">Developing a full-stack web application for a company utilizing React.js for the frontend, Node.js for the backend, and MySQL as the database solution.</p>
        </div>
        <div className="border border-[#7E99A3] bg-[#FAFAFA] rounded-lg p-4 text-center w-full">
          <h2 className="text-[20px] mb-2 py-4 font-semibold">SVI Public Company Limited</h2>
          <div className="w-[100%] h-[200px] flex items-center justify-center">
            <Image src="/images/svi-logo.jpg" alt="svi" width={200} height={200} className="rounded-lg object-cover mx-[auto] mb-[30px]" />
          </div>
          <div className="py-1">
            <p>NPI Engineer</p>
            <p>1 year 3 months</p>
          </div>
          <p className="py-4">Support the introduction of new products from development through the first article production or any individual phase of the transition as agreed upon between SVI and the customer.</p>
        </div>

      </div>

    </div>
  )
}

export default Experience