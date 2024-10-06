// 'use client'
'use client'

import Image from "next/image"
import Img2 from "@/assets/img/avatarbridge.png"
import style from "./style.module.css"
import Countdown from 'react-countdown';


export default function Page2 (){
    const Completionist = () => <span>Hari Penikahan Telah Tiba!!</span>;

// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
        <div style={{ fontFamily: 'Sacramento, cursive', fontSize: '2rem', textAlign: 'center' }}>
        <div>{days} Hari</div>
        <div>{hours} Jam</div>
        <div>{minutes} Menit</div>
        <div>{seconds} Detik</div>
      </div>
    );
  }
};
    return(
        <section className={style.bg}>
            <div className="absolute bottom-0 flex justify-center w-full items-center ">
                <div className="text-white flex-col z-10 w-3/4 items-center text-center">
                    <p>The Wedding Of</p>
                    <h3 className="sacramento font-bold text-3xl py-5">Dilan & Milea</h3>
                    <div>
                    <Countdown
                        date={new Date('2024-12-31T00:00:00')}
                        renderer={renderer}
                    />
                    </div>
                </div>
                <h3>t3st</h3>
                {/* <Image src={Img2} alt="img-section 2" /> */}
            </div>
        </section>
    )
}