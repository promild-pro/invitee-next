import Image from "next/image";
import ImgAnimation from "@/assets/img/animate/flower.png"


export default function Page3 (){
    return(
        <section>
            {/* <svg></svg> */}
            <Image src={ImgAnimation} alt="Img-Naimation" className="text-white bg-slate-900"  />
        </section>
    )
}