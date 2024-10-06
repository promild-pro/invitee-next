// 'use client'
'use client'

import { useEffect,useState } from "react"
import Image from "next/image"
import Img2 from "@/assets/img/avatarbridge.png"
import style from "./style.module.css"
import Countdown from 'react-countdown'
import dynamic from "next/dynamic"


export default function Page2 (){
    // const Completionist = () => ;
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (<span>Hari Penikahan Telah Tiba!!</span>);
  } else {
    // Render a countdown
    return (
        <div style={{  fontSize: '2rem', textAlign: 'center' }} className="flex">
        {/* <div className="  h-auto">{days} <p className="text-sm ">Hari</p></div> */}
        <div className="border rounded-lg w-[5rem] h-[4rem]  flex justify-center items-center">
             <div className="leading-6">
                {days}
                <p className="text-sm">Hari</p>
             </div>
        </div>
        <div className="border rounded-lg w-[5rem] h-[4rem]  flex justify-center items-center">
             <div className="leading-6">
                {hours}
                <p className="text-sm">Jam</p>
             </div>
        </div><div className="border rounded-lg w-[5rem] h-[4rem]  flex justify-center items-center">
             <div className="leading-6">
                {minutes}
                <p className="text-sm">menit</p>
             </div>
        </div><div className="border rounded-lg w-[5rem] h-[4rem]  flex justify-center items-center">
             <div className="leading-6">
                {seconds}
                <p className="text-sm">Detik</p>
             </div>
        </div>
        {/* <div>{minutes} Menit</div>
        <div>{seconds} Detik</div> */}
      </div>
    );
  }
};
    return(
        <section className={style.bg}>
            <div className="absolute bottom-0 flex justify-center w-full justify-center items-center ">
                <div className="text-white flex-col z-10 w-3/4 items-center text-center m-0">
                    <p>The Wedding Of</p>
                    <h3 className="sacramento font-bold text-3xl py-5">Dilan & Milea</h3>
                    <div>
                    {isClient && <Countdown
                        date={new Date('2024-12-31T00:00:00')}
                        renderer={renderer}
                    />}
                    </div>
                </div>
                <h3>t3st</h3>
                {/* <Image src={Img2} alt="img-section 2" /> */}
            </div>
        </section>
    )
}