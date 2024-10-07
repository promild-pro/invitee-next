import Image from "next/image";
import ImgCouple from '@/assets/img/avatarbridge.png'


export default function Page8() {
    return(
        <section className="bg-slate-950 h-full py-20">
            <div className="w-1/2 rounded-xl m-auto border-4 border-double  ">
                <Image src={ImgCouple} alt='' />
            </div>
            <div>
                <p>
                    Merupakan suatu kebahagiaan dan kehormatan bagi kami,
                    apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan doa restu kepada kami.<br/>
                    Atas do`a dan restunya kami ucapkan terima kasih  
                </p>
            </div>
        </section>
    )
}