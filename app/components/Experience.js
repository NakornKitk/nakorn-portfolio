import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

function Experience() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [inView, setInView] = useState(false); // To track if the div is in the viewport
  const divRef = useRef(null); // Reference to the div
  const isFlexColumn = window.innerWidth < 768;

  useEffect(() => {
    // Store the ref value in a variable before observing it
    const currentDivRef = divRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // Set inView to true when the component is in the viewport
          } else {
            setInView(false); // Optional: reset state when leaving the viewport
          }
        });
      },
      { threshold: 0.2 } // Trigger when 50% of the element is visible
    );

    if (currentDivRef) {
      observer.observe(currentDivRef); // Observe the target div
    }

    return () => {
      // Use the variable to ensure it's accessed correctly during cleanup
      if (currentDivRef) {
        observer.unobserve(currentDivRef); // Clean up observer on unmount
      }
    };
  }, []); // Empty dependency array to set up observer once



  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Update the scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up event listener on unmount
    };
  }, []);


  const scrollEffect = inView ? Math.min(scrollPosition / 5, 100) : 0;
  return (
    <div className={`my-[50px] ${isFlexColumn ? 'overflow-hidden' : ''}`} ref={divRef} >
      <h1 className="text-center text-[26px] md:text-[32px] font-bold">Experience</h1>
      <div className="md:flex gap-[20px] my-[20px]">
        <div className="border border-[#7E99A3] bg-[#FAFAFA] rounded-lg px-4 py-[50px] text-center w-full mb-[20px] md:mb-[0px] transition-transform duration-500 ease-in-out"
          style={{
            transform: `${isFlexColumn ? `translateY(${100 - scrollEffect}%)` : `translateX(-${100 - scrollEffect}%)`}`
          }}>
          <div className="h-[50px]">
            <h2 className="text-[20px] my-[auto] font-semibold">Worachart Group Company Limited</h2>
          </div>
          <div className="w-[100%] h-[200px] flex items-center justify-center">
            <Image src="/images/logo-w.png" alt="worachart" width={200} height={200} className="rounded-lg object-cover mx-[auto]" />
          </div>
          <div className="py-1 text-[18px]">
            <p className="font-semibold">Web developer</p>
            <p>2 months</p>
          </div>
          <p className="py-4">Developing a full-stack web application for a company utilizing React.js for the frontend, Node.js for the backend, and MySQL as the database solution.</p>
        </div>
        <div className="border border-[#7E99A3] bg-[#FAFAFA] rounded-lg px-4 py-[50px] text-center w-full transition-transform duration-500 ease-in-out" style={{
          transform: `${isFlexColumn ? `translateY(${100 - scrollEffect}%)` : `translateX(${100 - scrollEffect}%)`}`
        }}>
          <div className="h-[50px]">
            <h2 className="text-[20px] my-[auto] font-semibold">SVI Public Company Limited</h2>
          </div>
          <div className="w-[100%] h-[200px] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="100" viewBox="0 0 72 56" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.38509 45.8539H0V55.0962C0.304754 55.0962 0.751938 55.1148 1.36258 55.1402C3.63929 55.235 8.18823 55.4243 16.0994 55.0962C27.8657 54.6081 30.8571 43.1707 20.8696 38.5496C19.5455 37.937 18.3238 37.4031 17.2117 36.9172C12.3101 34.7753 9.54037 33.565 9.54037 30.649C9.54037 28.7111 11.1801 27.8167 13.7143 27.8167H19.2297L19.2298 27.8167H25.1926C25.1926 27.8167 30.9168 41.9186 31.7516 44.0651C32.795 46.7484 32.3478 50.1769 28.323 52.2639V54.9471H38.6087H42.0373H52.323V52.2639C48.2981 50.1769 47.8509 46.7484 48.8944 44.0651C49.7292 41.9186 55.4534 27.8167 55.4534 27.8167H60.9689V49.2825C60.9689 51.2204 57.9876 52.413 57.9876 52.413V55.0962H72V52.413C72 52.413 69.0186 51.2204 69.0186 49.2825V28.413C69.0186 26.5049 71.0062 24.9347 72 24.3881V22.5993H67.0807H66.6335H63.354H57.9876H48.7453L40.323 45.7608L31.9006 22.5993H17.5194C16.6022 22.515 15.3267 22.4502 13.7143 22.4502C6.55901 22.4502 0.149068 25.2825 0.149068 31.2452C0.149068 37.5482 7.03968 40.8142 11.9921 43.1616C12.5447 43.4236 13.0732 43.674 13.5652 43.916C17.2919 45.7488 18.1862 46.5998 17.7391 47.9409C17.2921 49.282 14.9746 50.2657 9.09317 49.8788C4.69026 49.5891 2.78261 47.1955 2.38509 45.8539Z" fill="#0A4E96" />
              <circle cx="40.3543" cy="11.7173" r="10.2857" stroke="#ED1B24" strokeWidth="0.89441" />
              <path d="M48.193 11.6961C48.193 17.4806 44.597 21.9607 40.3877 21.9607C36.1785 21.9607 32.5825 17.4806 32.5825 11.6961C32.5825 5.91173 36.1785 1.43158 40.3877 1.43158C44.597 1.43158 48.193 5.91173 48.193 11.6961Z" stroke="#ED1B24" strokeWidth="0.89441" />
              <path d="M44.8046 11.6961C44.8046 14.6047 44.2623 17.2163 43.4047 19.0839C42.5293 20.9903 41.4106 21.9607 40.3331 21.9607C39.2556 21.9607 38.1369 20.9903 37.2615 19.0839C36.4039 17.2163 35.8616 14.6047 35.8616 11.6961C35.8616 8.78754 36.4039 6.17602 37.2615 4.30839C38.1369 2.40199 39.2556 1.43158 40.3331 1.43158C41.4106 1.43158 42.5293 2.40199 43.4047 4.30839C44.2623 6.17602 44.8046 8.78754 44.8046 11.6961Z" stroke="#ED1B24" strokeWidth="0.89441" />
              <path d="M40.3331 1.13354V22.3013" stroke="#ED1B24" strokeWidth="0.89441" />
              <path d="M50.8262 11.9148L29.8399 11.9148" stroke="#ED1B24" strokeWidth="0.89441" />
              <path d="M49.6239 7.2146L31.3702 7.2146" stroke="#ED1B24" strokeWidth="0.89441" />
              <path d="M47.0006 3.71704L33.9935 3.71704" stroke="#ED1B24" strokeWidth="0.89441" />
              <path d="M46.782 19.6753H33.7748" stroke="#ED1B24" strokeWidth="0.89441" />
              <path d="M49.6239 16.5056L31.3702 16.5056" stroke="#ED1B24" strokeWidth="0.89441" />
              <script xmlns="" /></svg>
          </div>
          <div className="py-1 text-[18px]">
            <p className="font-semibold">NPI Engineer</p>
            <p>1 year 3 months</p>
          </div>
          <p className="py-4">Support the introduction of new products from development through the first article production or any individual phase of the transition as agreed upon between SVI and the customer.</p>
        </div>

      </div>

    </div>
  )
}

export default Experience