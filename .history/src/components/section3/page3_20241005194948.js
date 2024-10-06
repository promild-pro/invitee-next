import Image from "next/image";
import ImgAnimation from "@/assets/img/animate/flower.png"


export default function Page3 (){
    return(
        <section className='bg-slate-900'>
            {/* <svg></svg> */}
            <div className="flex justify-around  ">
                <Image src={ImgAnimation} alt="Img-Naimation" className="text-white w-1/2 "  />
                <Image src={ImgAnimation} alt="Img-Naimation" className="text-white w-1/2"  />
            </div>
        </section>
    )
}