import Image from "next/image"
import Img2 from "@/assets/img/avatarbridge.png"
import style from "./style.module.css"

export default function Page2 (){
    return(
        <section className={style.bg}>
            <div className="absolute bottom-0 flex-row z-10 w-3/4 ">
                <div className="text-white col- ">
                    <p>The Wedding Of</p>
                </div>
                <h3>t3st</h3>
                {/* <Image src={Img2} alt="img-section 2" /> */}
            </div>
        </section>
    )
}