// 'use client'
'use client'


import { useEffect,useState } from "react"
import style from "./style.module.css"
import Countdown from 'react-countdown'
import { FaRegCalendarCheck } from "react-icons/fa6";
// import Hero from "../hero/hero";



export default function Page2 (){
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
        <div style={{  fontSize: '2rem', textAlign: 'center' }} className="flex mx-7 p-2 justify-between">
        <div className="border rounded-lg bg-white bg-opacity-15 w-[4rem] h-[3.5rem]  flex justify-center items-center">
             <div className="leading-6 text-xl font-bold">
                {days}
                <p className="text-sm">Hari</p>
             </div>
        </div>
        <div className="border rounded-lg bg-white bg-opacity-15 w-[4rem] h-[3.5rem]  flex justify-center items-center">
             <div className="leading-6 text-xl font-bold">
                {hours}
                <p className="text-sm">Jam</p>
             </div>
        </div>
        <div className="border rounded-lg bg-white bg-opacity-15 w-[4rem] h-[3.5rem]  flex justify-center items-center">
             <div className="leading-6 text-xl font-bold">
                {minutes}
                <p className="text-sm">menit</p>
             </div>
        </div>
        <div className="border rounded-lg bg-white bg-opacity-15 w-[4rem] h-[3.5rem]  flex justify-center items-center">
             <div className="leading-6 text-xl font-bold">
                {seconds}
                <p className="text-sm">Detik</p>
             </div>
        </div>
      </div>
    );
  }
};


    return(
      <section>
        <section className={style.bg} id="page2">
            <div className="absolute bottom-0 flex-row justify-center w-full items-center">
                <div className="text-white  z-10 text-center relative ">
                    <p>The Wedding Of</p>
                    <h3 className="sacramento font-bold text-5xl py-5">Dilan & Milea</h3>
                    <div>
                    {isClient && <Countdown
                        date={new Date('2024-12-31T00:00:00')}
                        renderer={renderer}
                    />}
                    </div>
                    <button className="bg-white bg-opacity-40 p-2 mx-auto my-5 font-bold text-xl italic flex justify-center items-center rounded-lg" >
                      <FaRegCalendarCheck className="mr-3" />
                      Save The Date
                    </button>
                </div>
            </div>
        </section>
      </section>  
    )
}