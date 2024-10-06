import Image from "next/image";
import ImgAnimation from "@/assets/img/animate/flower.png"


export default function Page3 (){
    return(
        <section>
            {/* <svg></svg> */}
            <div className="flex justify-around bg-slate-900 ">
                <Image src={ImgAnimation} alt="Img-Naimation" className="text-white w-1/2 "  />
                <Image src={ImgAnimation} alt="Img-Naimation" className="text-white "  />
            </div>
        </section>
    )
}