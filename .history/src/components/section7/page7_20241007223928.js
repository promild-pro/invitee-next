
import ImgAnimation from '@/assets/img/animate/flower.svg'
import style from './style.module.css'


export default function Page7() {
    return(
        <section className="bg-slate-950 py-5 ">
            <div className={style.bg}>
                <div className="w-full text-white text-center h-20 z-10 overflow-x-hidden relative">
                    <ImgAnimation className="fill-current w-full h-20 "/>
                </div>
                    <div className='m-auto text-center text-white z-10 py-3 relative'>
                        <h3 className="text-3xl font-sans font-bold">KIRIM UCAPAN</h3>
                        <p>Ucapankan sesuatu kepada mempelai !!</p>
                    </div>
                        <form className='relative z-10 bg-white p-2'>
                            <input placeholder='Nama' className='w-full p-2 rounded-md' />
                        </form>
            </div>
        </section>
    )
}