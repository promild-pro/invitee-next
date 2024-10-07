
import ImgAnimation from '@/assets/img/animate/flower.svg'
import style from './style.module.css'


export default function Page7() {
    return(
        <section className="bg-slate-950 py-5 ">
            <div className={style.bg}>
                <div className="w-full text-white h-20">
                    <ImgAnimation className="fill-current w-full "/>
                </div>
            </div>
        </section>
    )
}