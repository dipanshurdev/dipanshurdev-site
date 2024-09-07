import { useEffect, useState } from "react";
import MyName from "./MyName";
import "./hero.css";

type Props = {};

const HeroDesc = (props: Props) => {
  const [widthPx, setwidthPx] = useState<number>(343);

  useEffect(() => {
    const nameElm = document.querySelector(".my-name");
    let nameCharWidth = nameElm?.getBoundingClientRect().width;
    nameCharWidth = Math.floor(nameCharWidth as number);
    setwidthPx(nameCharWidth);
  }, [widthPx]);

  return (
    <div className="w-full">
      <span> Hey visitor 👋, I'm </span>
      <MyName name="Aman Rawat" />
      <p className="text-3xl leading-snug">
        <span style={{ marginRight: `${widthPx}px` }}></span> a Fullstack
        Developer. I mostly like doing Frontend with
        <span>
          {" "}
          <a href="#" className="underline-animation">
            React.js
          </a>{" "}
        </span>
        ,
        <span>
          {" "}
          <a href="#" className="underline-animation">
            Next.js
          </a>{" "}
        </span>
        , and more. I build cool projects and contribute to open source
        softwares. When I'm not coding, you’ll find me exploring the latest tech
        trends on
        <span>
          {" "}
          <a href="#" className="underline-animation">
            Twitter
          </a>
        </span>{" "}
        and
        <span>
          {" "}
          <a href="#" className="underline-animation">
            LinkedIn
          </a>{" "}
        </span>
        with <span>Tea☕</span>
      </p>
    </div>
  );
};

export default HeroDesc;
