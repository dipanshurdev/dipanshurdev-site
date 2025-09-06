const ResumeLink = () => (
  <a
    href="https://drive.google.com/file/d/17KYmWroUeCOWB3qL74j3oKG3DjQm-vLr/view?usp=sharing"
    target="_blank"
    className="relative transition duration-300  group flex items-center gap-1 transform-none no-underline before:content-[''] before:bg-blue-700 before:w-0 before:h-[4px] before:absolute before:bottom-0 before:left-0 before:top-[33px] before:invisible before:transition-all before:duration-300 hover:before:w-full hover:before:visible"
  >
    <span className="">Resume</span>
    {/* <div className="flex justify-center items-center w-12 bg-gray-200 rounded-r-md dark:bg-gray-800">
      <div className="overflow-hidden relative size-5"></div>
    </div> */}
    <div className=" inline-block ">
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
        className="lucide lucide-file-down"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M12 18v-6" />
        <path d="m9 15 3 3 3-3" />
      </svg>
    </div>
  </a>
);

export default ResumeLink;

{
  /* <div className="absolute transition-all duration-200 group-hover:translate-x-5 group-hover:-translate-y-5">
  <svg
    className="size-5"
    data-icon="pdf document"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none" />
    <polyline
      points="216 152 184 152 184 208"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="208"
      y1="184"
      x2="184"
      y2="184"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M48,192H64a20,20,0,0,0,0-40H48v56"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M112,152v56h16a28,28,0,0,0,0-56Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 32 152 88 208 88"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
  <svg
    className="-translate-x-5 size-5"
    data-icon="download document"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none" />
    <path
      d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 32 152 88 208 88"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="120"
      x2="128"
      y2="184"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="104 160 128 184 152 160"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
</div> */
}
