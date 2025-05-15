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
    <div className="dark:text-light text-dark w-full my-2">
      <h1
        style={{ fontFamily: "Dosis Variable" }}
        className="text-7xl max-md:text-3xl my-name font-bold inline dark:drop-shadow-blue-lg "
      >
        {props.name}
      </h1>
    </div>
  );
};

export default MyName;
