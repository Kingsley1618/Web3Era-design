import React from 'react'
import styles from "./update.module.css"
import Image from 'next/image'
import Coin from "@/assets/Images/coin.png"
export default function Update() {
  return (
    <div className="mt-[100px]" id="update">
<h1 className={styles.update}>Latest Updates</h1>
<p className="text-white text-center mt-8">Focus on the roduct not blockchain complexity and stick to your standard workflow</p>
    
    
    <div className="grid md:grid-cols-3 mt-[100px] grid-cols-1 gap-y-6 gap-x-6 md:max-w-[770px] max-w-[380px] mx-auto w-[100%]">
<div className="rounded-md bg-[rgb(5,10,54)] px-3 pt-3 pb-8">
<Image src={Coin} className='' width={390} height={80}/>
<h1 className="font-bold text-white mt-4">About</h1>

<div className='flex gap-x-3 mt-2'>
<div className='bg-[rgb(246,250,115)] w-[20px] h-[20px] rounded-md'></div>
<div className='text-[rgb(156,163,162)]'> Some quick example</div>
</div>

<div className='flex gap-x-3 mt-4'>
<div className='bg-[rgb(150,65,198)] rounded-circle w-[20px] h-[20px] rounded-md'></div>
<div className='text-[rgb(156,163,162)]'> Some quick example</div>
</div>
</div>

<div className="rounded-md bg-[rgb(5,10,54)] px-3 pt-3 pb-8">
<Image src={Coin} className='' width={390} height={80}/>
<h1 className="font-bold text-white mt-4">Launch</h1>

<div className='flex gap-x-3 mt-2'>
<div className='bg-[rgb(246,250,115)] w-[20px] h-[20px] rounded-md'></div>
<div className='text-[rgb(156,163,162)]'> Some quick example</div>
</div>

<div className='flex gap-x-3 mt-4'>
<div className='bg-[rgb(150,65,198)] rounded-circle w-[20px] h-[20px] rounded-md'></div>
<div className='text-[rgb(156,163,162)]'> Some quick example</div>
</div>
</div>


<div className="rounded-md bg-[rgb(5,10,54)] px-3 pt-3 pb-8">
<Image src={Coin} className='' width={390} height={80}/>
<h1 className="font-bold text-white mt-4">Web3</h1>

<div className='flex gap-x-3 mt-2'>
<div className='bg-[rgb(246,250,115)] w-[20px] h-[20px] rounded-md'></div>
<div className='text-[rgb(156,163,162)]'> Some quick example</div>
</div>

<div className='flex gap-x-3 mt-4'>
<div className='bg-[rgb(150,65,198)] rounded-circle w-[20px] h-[20px] rounded-md'></div>
<div className='text-[rgb(156,163,162)]'> Some quick example</div>
</div>
</div>




    </div>
    </div>
  )
}
