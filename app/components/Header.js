import React from 'react'


function Header() {
  return (
    <div className="flex justify-between py-[40px]">
      <p className="text-[24px]">NakornKitk</p>
      <div className="flex gap-x-[10px] items-center text-[18px]">
        <p>About</p>
        <p>Experience</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Header