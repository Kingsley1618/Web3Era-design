import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {BiLogoGmail} from "react-icons/bi"
import {BiSolidPhoneCall} from "react-icons/bi"
import Link from "next/link"
export default function Footer() {
  return (
    <div id="contact" className="w-[100%] max-w-[770px] flex gap-x-8 gap-y-8 flex-wrap mx-auto justify-between mt-[80px]">

<ul className="flex flex-col gap-y-8 text-white">
    <h1 className="text-white font-bold">PRODUCTS</h1>
    <Link href="https://angular.io/" className="text-[rgb(156,163,162)] text-[1rem]"><li>Angular</li></Link>
    <Link href="https://vuejs.org/"><li className="text-[rgb(156,163,162)] text-[1rem]">Vue</li></Link>
    <Link href="https://react.dev/"><li className="text-[rgb(156,163,162)] text-[1rem]">React</li></Link>
    <Link href="https://nextjs.org/"><li className="text-[rgb(156,163,162)] text-[1rem]">Next Js 13</li></Link>
</ul>


<ul className="flex flex-col gap-y-8 text-white">
<h1 className="text-white font-bold">USEFUL LINKS</h1>
<Link href="#" className="text-[rgb(156,163,162)] text-[1rem]"><li>Pricing</li></Link>
<Link href="#" className="text-[rgb(156,163,162)] text-[1rem]"><li>Orders</li></Link>
<Link href="#" className="text-[rgb(156,163,162)] text-[1rem]"><li>Settings</li></Link>
<Link href="#" className="text-[rgb(156,163,162)] text-[1rem]"><li>Help</li></Link>
</ul>


<ul className="flex flex-col gap-y-8 text-white">
<h1 className="text-white font-bold">CONTACT</h1>
<Link href="/"><li className="flex gap-x-2"><AiFillHome /> <h1>Home</h1></li></Link>
<Link href="#"><li className="flex gap-x-2"><BiLogoGmail /> <h1>OkezeKingsley18@gmail.com</h1></li></Link>
<Link href="#"><li className="flex gap-x-2"><BiSolidPhoneCall /> <h1>+2349036646336</h1></li></Link>

</ul>







    </div>
  )
}
