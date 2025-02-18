"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center z-50 transition-all duration-300">
      <header
        className={`relative flex items-center justify-between px-6 transition-all duration-300 ease-out ${
          scrolled
            ? "w-[60%] py-2.5 shadow-lg bg-white/80 backdrop-blur-lg"
            : "w-[75%] py-4 bg-white/90 backdrop-blur-md"
        } rounded-full border border-black/10`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className={`rounded-full transition-all duration-300 ${
              scrolled ? "w-7 h-7" : "w-9 h-9"
            } flex items-center justify-center bg-gradient-to-tr from-gray-300 to-gray-200`}
          >
            <div className="w-[70%] h-[70%] rounded-full bg-black/90" />
          </div>
          <span className="text-black font-medium text-sm sm:text-base">CryptGen</span>
        </Link>
        
        {/* Navigation */}
        <div
          className={`hidden md:flex items-center gap-6 transition-all duration-300 ${
            scrolled ? "ml-auto mr-0" : "mx-auto"
          }`}
        >
          <Link href="#" className="text-black/80 hover:text-black transition-colors text-sm">
            Home
          </Link>
          <Link href="#" className="text-black/80 hover:text-black transition-colors text-sm">
            Product
          </Link>
          <Link href="" className="text-black/80 hover:text-black transition-colors text-sm">
            Contact
          </Link>
        </div>
        
        {/* Get Started Button with animated exit */}
        <div className={`ml-6 transition-all duration-300 ${scrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}`}>
          <button className="whitespace-nowrap rounded-full bg-gray-200 text-black text-sm font-medium hover:bg-gray-300 px-5 py-2">
            Get Started
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button aria-label="Open menu" className={`md:hidden rounded-full bg-gray-300 p-2.5 ${scrolled ? "ml-6" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-black"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </header>
    </div>
  )
}