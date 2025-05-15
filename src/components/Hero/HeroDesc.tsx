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
        a Fullstack Developer. I mostly like doing Frontend with{" "}
        <LinkPopup
          url="https://socialgram-me.vercel.app"
          image="socialgram.png"
          icon="reactjs"
        >
          React.js
        </LinkPopup>
        ,{" "}
        <LinkPopup
          url="https://devpath.netlify.app"
          image="devpath.png"
          icon="nextjs"
        >
          Next.js
        </LinkPopup>
        , and more. I build cool projects and contribute to open-source
        software. When I'm not coding, you’ll find me exploring the latest tech
        trends on{" "}
        <LinkPopup
          url="https://twitter.com/dipanshurdev"
          image="twitter.png"
          icon="bird"
        >
          Twitter
        </LinkPopup>{" "}
        and{" "}
        <LinkPopup
          url="https://linkedin.com/in/dipanshurdev"
          image="linkedIn.png"
          icon="linkedin-man"
        >
          LinkedIn
        </LinkPopup>{" "}
        with <span className="inline">Tea ☕</span>.
      </div>
    </div>
  );
};

export default HeroDesc;
