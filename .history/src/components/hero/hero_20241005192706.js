// import React from "react";

import style from './style.module.css'

export default function Hero() {

    return(
    <section className={`${style.bgSection} h-[100dvh] min-h-[100vh] w-full relative overflow-x-hidden flex justify-center items-center`}>
        <div className="z-10 text-center text-white bg-white bg-opacity-25 font-sans flex-col items-center w-3/4  py-20 rounded-full border border-white ">
            <p className="tracking-widest pb-5 ">Wedding Invitation</p>
            <h2 className="sacramento text-[3rem] font-bold leading-10 py-10 text-orange-950" style={{textShadow:'1px 1px white'}}>Dilan <br/>&<br/>Milea</h2>
            <p className="">Kepada Yth.</p>
            <h3 className="py-3 ">Tamu Undangan</h3>
            <button className="bg-black rounded-md text-white py-2 px-4 mt-4">Buka Undangan</button>
        </div>
    </section>
    );
}