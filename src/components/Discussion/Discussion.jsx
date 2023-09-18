import React from 'react'
import styles from "./discussion.module.css"
export default function Discussion() {
  return (
    <div className='mt-[130px] max-w-[770px] w-[100%] mx-auto mb-[70px]'>

<h1 className={styles.header}>Make sure of your choice then discuss with us</h1>
<p className="text-[rgb(156,163,162)] text-[.7rem] text-center mt-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborea.</p>
    
<div className="flex gap-x-8  md:items-center md:flex-row flex-col gap-y-[30px] mt-[40px]">
<input type="text" placeholder='Email' className={` flex-1 w-[100%] outline-0 text-[rgb(156,163,162)] ${styles.input} rounded-3xl  hover:border-[rgb(120,199,203)] border-2 border-[rgb(254,240,138)]`}/>       

<button className="w-[100%] max-w-[130px] bg-[rgb(249,254,115)]  py-4 rounded-3xl">Let&apos;s Talk</button>
</div>
    
    </div>

    
  )
}
