import { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTopButton && (
                <button className="z-20 fixed bottom-[15px] right-[20px] h-[35px] w-[35px] bg-[#7E99A3] text-2xl text-white flex items-center justify-center shadow-lg hover:bg-white hover:text-[#7E99A3] hover:border hover:border-[#7E99A3] transition duration-300" onClick={scrollUp}>
                    <IoIosArrowUp className="" />
                </button>
            )}
        </div>
    )
}

export default BackToTopButton
