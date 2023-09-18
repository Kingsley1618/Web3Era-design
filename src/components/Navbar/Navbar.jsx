import React from 'react'
import {FaBars} from "react-icons/fa"
export default function Navbar() {
  return (
    <div className="flex justify-between gap-x-6 mx-auto w-[100%] max-w-[1100px] h-[100%] min-h-[9vh] items-center">
<h1 className="text-white font-bold text-[1.8rem]">Web3Era</h1>

<ul className="flex gap-x-[40px] font-bold md:flex hidden ">
<li className="text-[rgb(136,163,175)] cursor-pointer text-[.9rem] hover:text-white">Home</li>
<li className="text-[rgb(136,163,175)] cursor-pointer text-[.9rem] hover:text-white">Build</li>
<li className="text-[rgb(136,163,175)] cursor-pointer text-[.9rem] hover:text-white">Community</li>
<li className="text-[rgb(136,163,175)] cursor-pointer text-[.9rem] hover:text-white">Wiki</li>

</ul>


<button type="button" className="md:flex hidden  text-white py-2 px-6 border-2 font-bold border-[rgb(89,91,62)]  rounded-3xl">Get Started</button>

<FaBars  className="md:hidden flex font-bold text-[30px] text-white"/>
    </div>
  )
}
