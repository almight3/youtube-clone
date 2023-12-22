import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { useSelector } from "react-redux";

const SIDEBAR_MENU_LIST = [
  {
    icon: <IoMdHome size={30} className="mr-5" />,
    label: "Home",
  },
  {
    icon: <SiYoutubeshorts size={30} className="mr-5" />,
    label: "Shorts",
  },
  {
    icon: <MdSubscriptions size={30} className="mr-3" />,
    label: "scriptions",
  },
  {
    icon: <FaFireAlt size={30} className="mr-3" />,
    label: "Shopping",
  },
  {
    icon: <FaShoppingCart size={30} className="mr-3" />,
    label: "Shopping",
  },
  {
    icon: <IoMdMusicalNote size={30} className="mr-3" />,
    label: " Music",
  },
  {
    icon: <SiYoutubegaming size={30} className="mr-3" />,
    label: "Gaming",
  },
];

const Sidebar = () => {
  const { isMenuOpen } = useSelector((state) => state.isMenuOpen);

  const navigationActive =
    "w-48 p-2 my-2 cursor-pointer bg-stone-400 rounded-md";
  const navigation = `${
    isMenuOpen ? "w-48" : ""
  } my-5  px-1 py-2 cursor-pointer hover:bg-stone-400 rounded-md flex`;

  return (
    <div
      className={`${isMenuOpen ? "w-48" : "w-20"} max-h-screen shadow-md p-2`}
    >
      <ul>
        {SIDEBAR_MENU_LIST.map((menu) => (
          <li className={navigation}>
            {menu.icon} {isMenuOpen ? menu.label : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
