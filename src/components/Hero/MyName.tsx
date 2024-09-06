import { useEffect } from "react";
import animatedName from "../../utils/animatedName";
import "@fontsource-variable/dosis";

type Props = {
  name: string;
};

const MyName = (props: Props) => {
  useEffect(() => {
    animatedName();
  }, []);

  return (
    <div className="text-[#e5e7eb] w-full">
      <h1
        style={{ fontFamily: "Dosis Variable" }}
        className="text-7xl my-name font-bold inline drop-shadow-text-lg"
      >
        {props.name}
      </h1>
    </div>
  );
};

export default MyName;
