import React from 'react'
import Image from "next/image"
import WebImage from "@/assets/Images/web3.png"
import styles from "./innovation.module.css" 
import Star from "@/assets/webp/star.webp"
import Arrow from "@/assets/Images/arrow.png"
import Gallery from "@/assets/Images/gallery.png"
export default function Innovation() {
  return (
    <div className="mt-8">
<Image src ={WebImage} width={1000} height={1000} className="block mx-auto"/>

<div className="mt-6 flex justify-center px-[45px] mx-auto items-center max-w-[1100px] w-[100%] text-black font-bold bg-[#F9FE73]  py-6">
<h1 className="">We Are on a Mission to Change the Way People Invest.</h1>
</div>

<h1 className={styles.text}>Web3 done simple!</h1>

<p className="text-white text-[.8rem] mt-[50px] text-center">Focus on the roduct not blockchain complexity and stick to your standard workflow</p>
   
   
   <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-[120px] mt-[100px] w-[100%] max-w-[750px] mx-auto md:gap-x-[80px]">

<div className="flex flex-col">

<div className="border-2 border-t-[rgb(216,248,157)] border-x-[rgb(244,204,75)] border-b-0 rounded-lg p-6">
    <h1 className="font-bold text-[19px] mb-3 text-white">Code faster</h1>
    <p className="text-[rgb(156,163,162)]">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
</div>

<div className="border-2 border-t-[rgb(216,248,157)] border-x-[rgb(244,204,75)] mt-5 border-b-0 rounded-lg p-6">
    <h1 className="font-bold text-[19px] mb-3 text-white">Code Blockchain</h1>
    <p className="text-[rgb(156,163,162)]">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
</div>

</div>


<Image src={Gallery} className="self-center md:w-[100%] max-w-[220px] w-[100%]" width={310} height={100} alt="gallery"/>
   </div>
   


   <div className="flex mt-[120px] justify-between max-w-[680px] gap-x-[140px] mx-auto w-[100%]">
<div className="">
    <h1 className={styles.header}>Web3 services for every app</h1>
    <p className="text-[rgb(156,163,162)] mt-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>

<Image width={160} src={Arrow} height={60} className="w-[110px] h-[110px]"/>


   </div>



   <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-[50px] w-[100%] max-w-[400px] md:max-w-[770px] mx-auto">

<div className={styles.back}>
<div className="flex justify-between">
<h1 className='font-bold text-white text-[1.2rem]'>Web3 identities</h1>
<Image src={Star} alt="star" width={25} height={25} className='w-[25px] h-[25px]'/>
</div>
<p className="text-[rgb(156,163,162)] mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>

<div className={styles.back}>
<div className="flex justify-between">
<h1 className='font-bold text-white text-[1.2rem]'>Web3 storage</h1>
<Image src={Star} alt="star" width={25} height={25} className='w-[25px] h-[25px]'/>
</div>
<p className="text-[rgb(156,163,162)] mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>

<div className={styles.back}>
<div className="flex justify-between">
<h1 className='font-bold text-white text-[1.2rem]'>Web3 hosting</h1>
<Image src={Star} alt="star" width={25} height={25} className='w-[25px] h-[25px]'/>
</div>
<p className="text-[rgb(156,163,162)] mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>

<div className={styles.back}>
<div className="flex justify-between">
<h1 className='font-bold text-white text-[1.2rem]'>Web3 identities</h1>
<Image src={Star} alt="star" width={25} height={25} className='w-[25px] h-[25px]'/>
</div>
<p className="text-[rgb(156,163,162)] mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>

   </div>
    </div>
  )
}
