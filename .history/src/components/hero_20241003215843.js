// import React from "react";
import Imghero from "@/assets/img/hero.png";
import Image from "next/image";

export default function Hero() {

    return(
    <section className="h-[100dvh] min-h-[100vh] w-full flex justify-center items-center"
    style={{
        backgroundImage: "url('/assets/img/bird.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh' // Tinggi menyesuaikan kebutuhan
      }}>
        <div className=" text-center font-sans flex-col items-center w-1/2">
            <p className="text-white text-2xl mb-24 tracking-widest ">The Wedding Of</p>
            <Image src={Imghero} alt="hero" className="border-2 border-white rounded-2xl my-5 bg-green-300 "/>
            <h2 className="sacramento text-[3rem] font-bold font-sha " style={{textShadow:'2px 2px white'}}>Dilan <span>&</span>Milea</h2>
        </div>
    </section>
    );
}