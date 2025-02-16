import React from 'react'


function Header() {
  return (
    <div className="flex justify-between py-[20px] px-[15%] text-white bg-[#7E99A3]">
      <p className="text-[30px]">NakornKitk</p>
      <div className="flex gap-x-[10px] items-center justify-center text-[18px]">
        <p>About</p>
        <p>Experience</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Header