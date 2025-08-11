"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Example breakpoint for mobile
    }

    // Check immediately on mount
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full bg-cyan-800 text-white">
      <nav className="w-full">
        <div className="w-full flex flex-1 items-center justify-between md:justify-evenly p-4">
          <div className="flex items-center gap-2">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-white rounded-full dark:bg-white">
              <span className="font-medium text-cyan-800 dark:text-cyan-800">
                S
              </span>
            </div>

            <p className="W-32 cursor-pointer font-bold">
              <Link href="/">Sruthy</Link>
            </p>
          </div>
          {/* Navigation Links */}
          {!isMobile && (
            <ul>
              <li className="inline mr-5 cursor-pointer hover:font-bold  hover:text-white hover:underline">
                <Link href="/">Home</Link>
              </li>
              <li className="inline mr-5 cursor-pointer hover:font-bold  hover:text-white hover:underline">
                <Link href="/about-us">About us</Link>
              </li>
              <li className="inline mr-5 cursor-pointer hover:font-bold  hover:text-white hover:underline">
                <Link href="/projects">Projects</Link>
              </li>

              <li className="inline mr-5 cursor-pointer hover:font-bold  hover:text-white hover:underline">
                <Link href="/contact-us">Contact us</Link>
              </li>
            </ul>
          )}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          )}
          {isMobile && menuOpen && (
            <div className="absolute top-16 left-0 w-full bg-cyan-900 p-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link href="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" onClick={() => setMenuOpen(false)}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/projects" onClick={() => setMenuOpen(false)}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" onClick={() => setMenuOpen(false)}>
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          )}{" "}
        </div>
      </nav>
    </div>
  );
}
