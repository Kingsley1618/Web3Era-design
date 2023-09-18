import Image from 'next/image'
import Navbar from "@/components/Navbar/Navbar"
import Intro from "@/components/Intro/intro"
import Innovation from "@/components/Innovation/Innovation"
import Update from "@/components/Update/Update"
import Footer from "@/components/Footer/Footer"
import Discussion from "@/components/Discussion/Discussion"
export default function Home() {
  return (
    <>
     <Navbar />

     <Intro />


    <Innovation/>

    <Update />

    <Discussion />
<hr></hr>
    <Footer />

    </>
  )
}
