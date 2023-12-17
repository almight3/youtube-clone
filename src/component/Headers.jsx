import {useState} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";


export default Headers = ()=>{
    return(
        <div className="w-full drop-shadow">
        <RxHamburgerMenu />
        <div>
            <input />
            <IoIosSearch />
        </div>
       </div>
    )
   
}