import DarkModeToggle from "../DarkMode";
import ResumeLink from "../ResumeLink";
import "./nav.css";
// import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full text-2xl my-2 p-4 flex flex-row items-center justify-between dark:text-light text-dark">
      <div className="gap-4 flex items-center">
        {/* <div className="inline-block w-full">
      <img src={Logo.src} alt="dipanshurdev" className="w-20 h-20 " />
    </div>  */}
        <div className="text-blue-700 flex items-center flex-row gap-1">
          <a href="/"> home </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-house"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
        </div>
        {/* <!-- <span className="underline">
      <a href="/about-me"> about </a>
    </span> --> */}
        <div className="underline flex items-center flex-row gap-1">
          <a href="/projects"> projects </a>
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
        <span className="underline">
          <ResumeLink />
        </span>
      </div>
      <div className="flex items-center gap-4 cursor-pointer justify-center">
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
