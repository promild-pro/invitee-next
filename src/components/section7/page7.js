
import ImgAnimation from '@/assets/img/animate/flower.svg'
import style from './style.module.css'


export default function Page7() {
    return(
        <section className="bg-slate-950 py-5 overflow-hidden">
            <div className={style.bg}>
                <div className="w-full text-white text-center h-20 z-10  relative">
                    <ImgAnimation className="fill-current w-full h-20 "/>
                </div>
                <div className='m-auto text-center text-white z-10 py-5 text-sm relative'>
                    <h3 className="text-3xl font-sans font-bold">KIRIM UCAPAN</h3>
                    <p>Ucapankan sesuatu kepada mempelai !!</p>
                </div>
                <form className='relative z-10 bg-white p-2   rounded-md rounded-b-2xl ' >
                    <input placeholder='Nama' className='w-full p-2 rounded-md border border-black outline-none' />
                    <input placeholder='Ucapan Anda' className='w-full pb-10 my-2 p-2 rounded-md border border-black outline-none' />
                    <button className='px-2 py-1  bg-black rounded-md text-white'>Kirim</button>
                    <div className='py-5 h-[17rem] overflow-y-scroll'>
                        <p>Ucapan seseorang</p>
                    </div>
                </form>
            </div>
        </section>
    )
}