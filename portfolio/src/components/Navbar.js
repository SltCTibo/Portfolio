import Link from "next/link";
import LanguageButton from "./LanguageButton";
import { useState, useEffect } from "react";

const Navbar = ({ data }) => {
    const [navbarBg, setNavbarBg] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Function to change the navbar background when scrolled
    const changeBackground = () => {
      if (window.scrollY >= 50) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
          window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <header
            id="navbar"
            className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
                navbarBg || isOpen ? 'bg-gray-700 shadow-md shadow-black' : 'bg-transparent'
            }`}
        >
          <nav className=" px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-[30px] font-bold">SLTCTIBO</h1>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="ml-4 flex items-center space-x-10">
                  <Link href="/" className="hover:text-gray-400 text-[22px] font-semibold">{data.home}</Link>
                  <Link href="#skills" className="hover:text-gray-400 text-[22px] font-semibold">{data.skills}</Link>
                  <Link href="#experiences" className="hover:text-gray-400 text-[22px] font-semibold">{data.experiences}</Link>
                  <Link href="#projects" className="hover:text-gray-400 text-[22px] font-semibold">{data.projects}</Link>
                  <Link href="#formation" className="hover:text-gray-400 text-[22px] font-semibold">{data.formation}</Link>
                  <LanguageButton />
                </div>
              </div>
              <div className="lg:hidden flex items-center space-x-2">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={toggleNavbar}
                  >
                    { isOpen ? (
                        <svg  className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                    ) : (
                      <svg  className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    )}
                  </button>
                  <LanguageButton />
              </div>
            </div>
          </nav>
          { isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="hover:text-gray-400 block text-[22px] font-semibold">{data.home}</Link>
                  <Link href="#skills" className="hover:text-gray-400 block text-[22px] font-semibold">{data.skills}</Link>
                  <Link href="#experiences" className="hover:text-gray-400 block text-[22px] font-semibold">{data.experiences}</Link>
                  <Link href="#projects" className="hover:text-gray-400 block text-[22px] font-semibold">{data.projects}</Link>
                  <Link href="#formation" className="hover:text-gray-400 block text-[22px] font-semibold">{data.formation}</Link>
              </div>
            </div>
          )}
        </header>
    )
}

export default Navbar;