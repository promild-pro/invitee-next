// import React from "react";
import Imghero from "@/assets/img/hero.png";


export default function Hero() {
    return(
    <section className="h-[100dvh] min-h-[100vh] w-full bg-green-600 flex justify-center items-center">
        <div className=" text-center">
            <p className="">The Wedding of</p>
            {/* <image></image> */}
            <img src={Imghero} alt="hero " width={20px} />
            <h2 className="">Dilan <span>&</span>Milea</h2>
        </div>
    </section>
    );
}