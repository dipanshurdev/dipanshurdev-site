import { useEffect, useState } from "react";
import MyName from "./MyName";
import "./hero.css";
import LinkPopup from "../link_popup/LinkPopup";

type Props = {};

const HeroDesc = (props: Props) => {
  const [widthPx, setwidthPx] = useState<number>(0);

  useEffect(() => {
    const nameElm = document.querySelector(".my-name");
    let nameCharWidth = nameElm?.getBoundingClientRect().width;
    nameCharWidth = Math.floor(nameCharWidth as number);
    setwidthPx(nameCharWidth);
  }, [widthPx]);

  return (
    <div className="w-full text-[#171717] dark:text-[#e5e7eb]">
      <span> Hey visitor 👋, I'm </span>
      <MyName name="Dipanshu Rawat" />
      <div className="text-3xl leading-snug ">
        <span style={{ marginRight: `${widthPx}px` }}></span> a Fullstack
        Developer. I mostly like doing Frontend with
        <span>
          {" "}
          <LinkPopup
            url="https://socialgram-me.vercel.app"
            image="socialgram.png"
          >
            React.js
          </LinkPopup>
        </span>
        ,
        <span>
          {" "}
          <LinkPopup url="https://sumzer.netlify.app" image="sumzer.png">
            Next.js
          </LinkPopup>
        </span>
        , and more. I build cool projects and contribute to open source
        softwares. When I'm not coding, you’ll find me exploring the latest tech
        trends on
        <span>
          {" "}
          <LinkPopup url="twitter.com/dipanshurdev" image="sumzer.png">
            Twitter
          </LinkPopup>
        </span>{" "}
        and
        <span>
          {" "}
          <LinkPopup url="linkedin.com/in/dipanshurdev" image="sumzer.png">
            LinkedIn
          </LinkPopup>
        </span>{" "}
        with <span> Tea☕</span>
      </div>
    </div>
  );
};

export default HeroDesc;
