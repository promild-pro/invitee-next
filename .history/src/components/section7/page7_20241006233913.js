
import ImgAnimation from '@/assets/img/animate/flower.svg'
import style from './style.module.css'


export default function Page7() {
    return(
        <section className="bg-slate-950 py-5 ">
            <div className={style.bg}>
                <div className="w-full text-white text-center h-20 z-10 relative">
                    <ImgAnimation className="fill-current w-full h-20 "/>
                    <h3 className="text-3xl font-sans font-bold">KIRIM UCAPAN</h3>
                    <p>Ucapankan sesuatu kepada mempelai !!</p>
                </div>
            </div>
        </section>
    )
}