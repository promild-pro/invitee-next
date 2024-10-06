import Image from "next/image"
import Img2 from "@/assets/img/avatarbridge.png"
import style from "./style.module.css"

export default function Page2 (){
    return(
        <section className={style.bg}>
            <div className="absolute bottom-0 flex justify-center w-full items-center ">
                <div className="text-white flex-col z-10 w-3/4 items-center text-center">
                    <p>The Wedding Of</p>
                    <h3 className="sacramento font-bold text-3xl py-5">Dilan & Milea</h3>
                </div>
                <h3>t3st</h3>
                {/* <Image src={Img2} alt="img-section 2" /> */}
            </div>
        </section>
    )
}