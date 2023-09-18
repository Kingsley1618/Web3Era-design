import React from 'react'
import styles from "./intro.module.css"
export default function intro() {
  return (
    <div className="flex flex-col mx-auto max-w-[1000px] mt-[100px]">
<div><div className={styles.textfirst}><span className="text-white">Build</span> <span className="text-[rgb(249,254,115)]">Web3</span> 🌍</div></div>

<div><div className={`text-[rgb(119,218,231)] mt-[-40px] ${styles.textfirst}`}>products <span className="text-white">easily</span></div></div>




<div className="flex gap-x-[40px] md:flex-row flex-col gap-y-3 flex-wrap mt-7">
<h1 className="text-[.9rem] text-white md:basis-1/2" style={{whiteSpace:"wrap"}}>Some quick example and make up the bulk of the card's content.e text to build on the
     card title text to build on the card titl</h1>

     <button type="button" className="font-bold text-black bg-[rgb(249,254,115)] w-[200px] py-3 rounded-3xl">LearnMore</button>

</div>
    </div>
  )
}
