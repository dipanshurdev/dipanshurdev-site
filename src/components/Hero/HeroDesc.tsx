import { useEffect, useState } from "react";
import MyName from "./MyName";

type Props = {};

const HeroDesc = (props: Props) => {
  const [widthPx, setwidthPx] = useState<number>();

  useEffect(() => {
    const nameElm = document.querySelector(".my-name");
    let nameCharWidth = nameElm?.getBoundingClientRect().width;
    nameCharWidth = Math.floor(nameCharWidth as number);
    setwidthPx(nameCharWidth);
  }, [widthPx]);

  return (
    <div className="w-full">
      <span> Hey there 👋 I’m </span>
      <MyName name="amanr-dev" />
      <p className="text-3xl leading-snug">
        <span className={`mr-[${widthPx}px]`}></span> a Fullstack Developer,
        mostly doing Frontend with
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
        , and more. I like building cool projects and contributing to open
        source softwares. When I'm not coding, you’ll find me exploring the
        latest tech trends on
        <span>
          {" "}
          <a href="#" className="underline-animation">
            Twitter
          </a>
        </span>
        and{" "}
        <span>
          {" "}
          <a href="#" className="underline-animation">
            LinkedIn.
          </a>{" "}
        </span>
      </p>
    </div>
  );
};

export default HeroDesc;
