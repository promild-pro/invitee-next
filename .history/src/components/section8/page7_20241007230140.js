import Image from "next/image";
import ImgCouple from '@/assets/img/avatarbridge.png'


export default function Page8() {
    return(
        <section className="bg-slate-950 h-full">
            <div className="w-1/2 rounded-xl m-auto bg-white py-20">
                <Image src={ImgCouple} alt='' />
            </div>
        </section>
    )
}