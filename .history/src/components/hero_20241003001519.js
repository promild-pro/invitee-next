// import React from "react";
import Imghero from "@/assets/img/hero.png";
import Image from "next/image";


export default function Hero() {
    return(
    <section className="h-[100dvh] min-h-[100vh] w-full bg-green-600 flex justify-center items-center">
            <p className="text-white text-2xl tracking-widest ">The Wedding Of</p>
        <div className=" text-center font-sans flex-col items-center w-1/2">
            <Image src={Imghero} alt="hero" className="border-2 border-white rounded-2xl my-5 bg-green-300 "/>
            <h2 className="sacramento text-3xl ">Dilan <span>&</span>Milea</h2>
        </div>
    </section>
    );
}