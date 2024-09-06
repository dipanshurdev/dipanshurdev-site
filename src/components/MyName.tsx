import { useEffect } from "react";
import animatedName from "../utils/animatedName";
type Props = {};

const MyName = (props: Props) => {
  useEffect(() => {
    animatedName();
  }, []);

  return (
    <div className="text-[#e5e7eb]">
      <h1 className="text-5xl my-name font-bold">amanrdev</h1>
    </div>
  );
};

export default MyName;
