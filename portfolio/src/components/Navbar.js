import Link from "next/link";
import LanguageButton from "./LanguageButton";
import { useState, useEffect } from "react";

const Navbar = ({ data }) => {
    const [navbarBg, setNavbarBg] = useState(false);

    // Function to change the navbar background when scrolled
    const changeBackground = () => {
      if (window.scrollY >= 200) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

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
                navbarBg ? 'bg-gray-700 shadow-md shadow-black' : 'bg-transparent'
            }`}
        >
        <nav className="z-[100] flex flex-row w-full h-[90px] items-center justify-between">
            <h1 className="text-[30px] font-bold ml-6">SLTCTIBO</h1>
            <div className="flex flex-row justify-around w-[60%] font-semibold text-[20px]">
                <Link href="/" className="hover:text-gray-400">{data.home}</Link>
                <Link href="#skills" className="hover:text-gray-400">{data.skills}</Link>
                <Link href="#experiences" className="hover:text-gray-400">{data.experiences}</Link>
                <Link href="#projects" className="hover:text-gray-400">{data.projects}</Link>
                <Link href="#formation" className="hover:text-gray-400">{data.formation}</Link>
                <LanguageButton />
            </div>
        </nav>
        </header>
    )
}

export default Navbar;