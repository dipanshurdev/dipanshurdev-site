import { useEffect } from "react";
import animatedName from "../../utils/animatedName";
import "@fontsource-variable/dosis";
import useStore from "../../libs/state";

type Props = {
  name: string;
};

const MyName = (props: Props) => {
  const theme = useStore((mode) => mode.theme);

  useEffect(() => {
    if (theme === "dark") {
      animatedName();
    } else if (theme === "light") {
      document.documentElement
        .querySelectorAll(".animate-flicker")[0]
        ?.classList.remove("animate-flicker", "text-blue-700");
    } else {
      return;
    }
  }, [theme]);

  return (
    <div className="dark:text-[#e5e7eb] text-[#171717] w-full my-2">
      <h1
        style={{ fontFamily: "Dosis Variable" }}
        className="text-7xl my-name font-bold inline dark:drop-shadow-text-lg"
      >
        {props.name}
      </h1>
    </div>
  );
};

export default MyName;
