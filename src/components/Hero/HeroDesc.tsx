import { useEffect, useState } from "react";
import MyName from "./MyName";
import "./hero.css";
import LinkPopup from "../link_popup/LinkPopup";

const HeroDesc = () => {
  const [widthPx, setwidthPx] = useState<number>(0);

  useEffect(() => {
    const nameElm = document.querySelector(".my-name");
    let nameCharWidth = nameElm?.getBoundingClientRect().width;
    nameCharWidth = Math.floor(nameCharWidth as number);
    setwidthPx(nameCharWidth);
  }, []);

  return (
    <div className="w-full text-dark dark:text-light max-w-5xl px-4 sm:px-6 md:px-8 max-md:w-11/12 max-sm:w-full mx-auto">
      <p className="text-base sm:text-lg lg:text-xl mb-2">Hey there 👋, I'm</p>

      <MyName name="Dipanshu Rawat" />

      <div className="text-xl sm:text-2xl md:text-3xl leading-snug sm:leading-relaxed">
        {/* Margin spacer only on md and up */}
        <span
          className="hidden md:inline-block"
          style={{ marginRight: `${widthPx}px` }}
        ></span>
        a Software Developer. I build fast, scalable, <br />
        <span className="text-blue-600 dark:text-blue-500 font-bold">
            user-focused applications
        </span>.
        <br />
        <br />
        <span className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            With 2+ years of experience in React, Next.js, and scaling products like <LinkPopup url="#" image="claritel.png" icon="briefcase">Claritel.ai</LinkPopup> and <LinkPopup url="#" image="hydrobank.png" icon="briefcase">HydroBank</LinkPopup>.
        </span>
      </div>
    </div>
  );
};

export default HeroDesc;
