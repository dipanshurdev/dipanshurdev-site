import { useState } from "react";
import DarkModeToggle from "../DarkMode";
import ResumeLink from "../ResumeLink";
import "./nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full p-4 flex items-center justify-between text-2xl dark:text-light text-dark relative">
      <div className="block md:hidden w-full ">
        <span className="text-2xl font-bold bg-lightGradient bg-clip-text text-transparent gradient-stroke">
          dipanshurdev
        </span>
      </div>

      <div className="flex items-center gap-6">
        <div className="  text-blue-700 hidden md:flex items-center gap-1">
          <a href="/">home</a>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        </div>

        <div className=" underline hidden md:flex items-center gap-1">
          <a href="/projects">projects</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
            ></path>
          </svg>
        </div>
        <div className="  underline hidden md:flex items-center gap-1">
          <a href="/about-me">about</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-smile-icon lucide-smile"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
          </svg>
        </div>

        <span className="underline hidden md:inline-block">
          <ResumeLink />
        </span>
      </div>

      {/* Dark mode toggle */}
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu-icon lucide-menu"
          >
            <path d="M4 12h16" />
            <path d="M4 18h16" />
            <path d="M4 6h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-lightGradient dark:bg-darkSm text-base flex flex-col items-start px-4 rounded-lg py-3 gap-4 shadow-md md:hidden z-50">
          <a href="/" className="text-blue-700 flex items-center gap-2">
            home
          </a>
          <a href="/projects" className="underline flex items-center gap-2">
            projects
          </a>
          <ResumeLink />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
