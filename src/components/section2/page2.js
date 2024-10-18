// 'use client'
'use client'


import { useEffect,useState } from "react"
import style from "./style.module.css"
import Countdown from 'react-countdown'
import { FaRegCalendarCheck } from "react-icons/fa6";
// import Hero from "../hero/hero";



export default function Page2 (){
    const [isClient, setIsClient] = useState(false);
    const wedingDate =  new Date('2024-12-31T10:00:00')

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

const handleSaveDate = () => {
  const icsData = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Organization//NONSGML v1.0//EN
BEGIN:VEVENT
UID:12345678@example.com
DTSTAMP:${new Date().toISOString().replace(/-|:|\.\d\d\d/g,"")}
DTSTART:${wedingDate.toISOString().replace(/-|:|\.\d\d\d/g,"")}
DTEND:${new Date(wedingDate.getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g,"")}  <!-- 2 jam durasi acara -->
SUMMARY:Wedding of Dilan & Milea
DESCRIPTION:Join us in celebrating the wedding of Dilan & Milea.
LOCATION:Bojonegoro, Indonesia
END:VEVENT
END:VCALENDAR
  `;

  // Membuat file .ics
  const blob = new Blob([icsData], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);

  // Membuat tautan download
  const link = document.createElement('a');
  link.href = url;
  link.download = 'save-the-date.ics';
  link.click();

  // Membersihkan URL
  URL.revokeObjectURL(url);
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
                        date={wedingDate}
                        renderer={renderer}
                    />}
                    </div>
                    <button 
                    className="bg-white bg-opacity-40 p-2 mx-auto my-5 font-bold text-xl italic flex justify-center items-center rounded-lg" 
                    onClick={handleSaveDate}
                    >
                      <FaRegCalendarCheck className="mr-3" />
                      Save The Date
                    </button>
                </div>
            </div>
        </section>
      </section>  
    )
}