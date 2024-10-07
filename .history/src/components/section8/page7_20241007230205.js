import Image from "next/image";
import ImgCouple from '@/assets/img/avatarbridge.png'


export default function Page8() {
    return(
        <section className="bg-slate-950 h-full py-20">
            <div className="w-1/2 rounded-xl m-auto bg-white ">
                <Image src={ImgCouple} alt='' />
            </div>
        </section>
    )
}