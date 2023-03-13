import { FC, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";
interface GNBProps {
  hasSideNav: boolean;
  setHasSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const GNB: FC<GNBProps> = (props) => {
  const { setHasSideNav, hasSideNav } = props;
  const [isPopUp, setPopUp] = useState<boolean>(false);

  return (
    <div className="w-full h-fit flex flex-row p-4 justify-between items-center">
      <div
        className="cursor-pointer"
        onClick={() => {
          console.log(hasSideNav);
          setHasSideNav(!hasSideNav);
        }}
      >
        <GiHamburgerMenu className="text-2xl" />
      </div>
      <div
        className="flex flex-row gap-1 items-center justify-end cursor-pointer"
        onClick={() => {
          setPopUp(!isPopUp);
        }}
      >
        <HiUserCircle className="text-3xl" />
        <p>사용자 이름</p>
        <FaAngleDown
          className={`duration-300 ${isPopUp ? "" : "rotate-180"}`}
        />
      </div>
    </div>
  );
};

export default GNB;
