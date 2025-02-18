"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center z-50 transition-all duration-300">
      <header
        className={`relative flex items-center justify-between px-4 sm:px-6 transition-all duration-300 ease-out ${
          scrolled
            ? "w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%] py-2.5 shadow-lg bg-white/80 backdrop-blur-lg"
            : "w-[95%] sm:w-[90%] md:w-[80%] lg:w-[75%] py-3 sm:py-4 bg-white/90 backdrop-blur-md"
        } rounded-full border border-black/10`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <div
            className={`rounded-full transition-all duration-300 ${
              scrolled ? "w-6 h-6 sm:w-7 sm:h-7" : "w-7 h-7 sm:w-9 sm:h-9"
            } flex items-center justify-center bg-gradient-to-tr from-gray-300 to-gray-200`}
          >
            <div className="w-[70%] h-[70%] rounded-full bg-black/90" />
          </div>
          <span className="text-black font-medium text-xs sm:text-sm md:text-base">CryptGen</span>
        </Link>
        
        {/* Navigation - Desktop */}
        <div
          className={`hidden md:flex items-center gap-4 lg:gap-6 transition-all duration-300 ${
            scrolled ? "ml-auto mr-0" : "mx-auto"
          }`}
        >
          <Link href="#" className="text-black/80 hover:text-black transition-colors text-sm">
            Home
          </Link>
          <Link href="#" className="text-black/80 hover:text-black transition-colors text-sm">
            Product
          </Link>
          <Link href="/contact" className="text-black/80 hover:text-black transition-colors text-sm">
            Contact
          </Link>
        </div>
        
        {/* Get Started Button with animated exit - Desktop */}
        <div className={`hidden md:block ml-4 lg:ml-6 transition-all duration-300 ${scrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}`}>
          <button className="whitespace-nowrap rounded-full bg-gray-200 text-black text-xs sm:text-sm font-medium hover:bg-gray-300 px-3 sm:px-5 py-1.5 sm:py-2">
            Get Started
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          aria-label={menuOpen ? "Close menu" : "Open menu"} 
          onClick={toggleMenu}
          className={`md:hidden rounded-full bg-gray-300 p-2 sm:p-2.5 ml-4 ${scrolled ? "ml-auto" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 text-black"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 z-40 ${
        menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`} onClick={toggleMenu} />
      
      {/* Mobile Menu */}
      <div className={`fixed top-[calc(4rem+1.5rem)] right-[2.5%] md:hidden w-[95%] max-w-xs bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 z-50 ${
        menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}>
        <div className="flex flex-col gap-5">
          <Link href="#" className="text-black/80 hover:text-black transition-colors text-sm font-medium py-2">
            Home
          </Link>
          <Link href="#" className="text-black/80 hover:text-black transition-colors text-sm font-medium py-2">
            Product
          </Link>
          <Link href="/contact" className="text-black/80 hover:text-black transition-colors text-sm font-medium py-2">
            Contact
          </Link>
          <div className="pt-2">
            <button className="w-full whitespace-nowrap rounded-full bg-gray-200 text-black text-sm font-medium hover:bg-gray-300 px-5 py-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}