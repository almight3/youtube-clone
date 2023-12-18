import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";

export default Headers = () => {
  return (
    <div className="w-full flex justify-between p-4  shadow-md">
      <RxHamburgerMenu size={25} className="cursor-pointer" />
      <div className="flex">
        <input className="border outline-none w-96  p-1 rounded-tl-2xl rounded-bl-2xl" />
        <button className="bg-neutral-300 p-2 px-4 rounded-tr-2xl rounded-br-2xl">
          <IoIosSearch size={20} />
        </button>
      </div>
      <FaUser size={25} />
    </div>
  );
};
