import {useState} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";


export default Headers = ()=>{
    return(
        <div className="w-full  grid grid-cols-3 p-4 shadow-md">
        <RxHamburgerMenu size={30} className="cursor-pointer" />
        <div className="flex">
            <input className="border border-slate-300 w-3/4 p-1 focus:outline-none	" />
             <button className="bg-slate-200 px-5 rounded-r-lg">
             <IoIosSearch  size={25} />
             </button>
        </div>
        <CgProfile size={30}  className="place-self-end	"/>
       </div>
    )
   
}