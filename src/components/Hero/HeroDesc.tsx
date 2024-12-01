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
  }, [widthPx]);

  return (
    <div className="w-full text-dark dark:text-light">
      <span> Hey visitor 👋, I'm </span>
      <MyName name="dipanshurdev" />
      <div className="text-3xl leading-snug ">
        <span style={{ marginRight: `${widthPx}px` }}></span> a Fullstack
        Developer. I mostly like doing Frontend with
        <span>
          {" "}
          <LinkPopup
            url="https://socialgram-me.vercel.app"
            image="socialgram.png"
            icon="reactjs"
          >
            React.js
          </LinkPopup>
        </span>
        ,
        <span>
          {" "}
          <LinkPopup
            url="https://sumzer.netlify.app"
            image="sumzer.png"
            icon="nextjs"
          >
            Next.js
          </LinkPopup>
        </span>
        , and more. I build cool projects and contribute to open source
        softwares. When I'm not coding, you’ll find me exploring the latest tech
        trends on
        <span>
          {" "}
          <LinkPopup
            url="https://twitter.com/dipanshurdev"
            image="twitter.png"
            icon=""
          >
            Twitter
          </LinkPopup>
        </span>{" "}
        and
        <span>
          {" "}
          <LinkPopup
            url="https://linkedin.com/in/dipanshurdev"
            image="linkedIn.png"
          >
            LinkedIn
          </LinkPopup>
        </span>{" "}
        with <span> Tea☕</span>
      </div>
    </div>
  );
};

export default HeroDesc;
