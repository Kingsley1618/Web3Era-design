'use client'
import Link from 'next/link'
import React,{useState} from 'react'
import {FaBars} from "react-icons/fa"
import styles from "./navbar.module.css"
import {AiOutlineClose} from "react-icons/ai"
export default function Navbar() {
    const [open, setOpen] = useState(false)
  return (
    <>
    <div  className={open? styles.navbaropen : styles.navbarclose}>
        <AiOutlineClose className="block ml-auto font-bold text-[30px] cursor-pointer" onClick={()=> setOpen(false)}/>
<ul className="flex flex-col gap-y-7 justify-center text-black">
 <Link href="/" className={styles.link}><li>Home</li></Link>
 <Link href="#build" className={styles.link}><li>Build</li></Link>
 <Link href="#update" className={styles.link}><li>Community</li></Link>
 <Link href="#contact" className={styles.link}><li>Contact</li></Link>
</ul>

    </div>
    <div className="flex justify-between gap-x-6 mx-auto w-[100%] max-w-[1100px] h-[100%] min-h-[9vh] items-center">
<h1 className="text-white font-bold text-[1.8rem]">Web3Era</h1>

<ul className="flex gap-x-[40px] font-bold md:flex hidden ">
<Link href="/"><li className="text-[rgb(136,163,175)] cursor-pointer text-[.9rem] hover:text-white">Home</li></Link>
<Link href="#build"><li className="text-[rgb(136,163,175)] cursor-pointer text-[.9rem] hover:text-white">Build</li></Link>
<Link href="#update"><li className="text-[rgb(136,163,175)] cursor-pointer text-[.9rem] hover:text-white">Community</li></Link>
<Link href="#contact"><li className="text-[rgb(136,163,175)] cursor-pointer text-[.9rem] hover:text-white">Wiki</li></Link>

</ul>


<button type="button" className="md:flex hidden  text-white py-2 px-6  border-2 font-bold border-[rgb(89,91,62)]  rounded-3xl">Get Started</button>

<FaBars  className="md:hidden flex font-bold text-[30px] text-white cursor-pointer" onClick={()=> setOpen(true)}/>
    </div>
    </>
  )
}
