import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";

const Sidebar = () => {
  const navigationActive =
    "w-48 p-2 my-2 cursor-pointer bg-stone-400 rounded-md";
  const navigation =
    "w-42 p-2 my-2 p-2 cursor-pointer hover:bg-stone-400 rounded-md flex";

  return (
    <div className="w-48 max-h-screen shadow-md p-2">
      <ul className="">
        <li className={navigation}>
          {" "}
          <IoMdHome size={20} className="mr-5" /> Home
        </li>
        <li className={navigation}>
          <SiYoutubeshorts className="mr-5" /> Shorts
        </li>
        <li size={20} className={navigation}>
          {" "}
          <MdSubscriptions size={20} className="mr-5" /> scriptions
        </li>
      </ul>
      <div className="w-full divide-y-2 "></div>
      <ul className="">
        <li className={navigation}>
          {" "}
          <FaFireAlt size={20} className="mr-5" /> Trending
        </li>
        <li className={navigation}>
          {" "}
          <FaShoppingCart size={20} className="mr-5" /> Shopping
        </li>
        <li className={navigation}>
          {" "}
          <IoMdMusicalNote size={20} className="mr-5" /> Music
        </li>
        <li className={navigation}>
          {" "}
          <SiYoutubegaming size={20} className="mr-5" /> Gaming
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
