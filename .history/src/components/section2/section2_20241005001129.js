import Image from "next/image"
import Img2 from "@/assets/img/avatarbridge.png"
import style from "./style.module.css"

export default function Page2 (){
    return(
        <section className={style.bg}>
            <div className="h-[100dvh]">
                <h3>t3st</h3>
                {/* <Image src={Img2} alt="img-section 2" /> */}
            </div>
        </section>
    )
}