
import ImgAnimation from '@/assets/img/animate/flower.svg'
import style from './style.module.css'


export default function Page7() {
    return(
        <section className="bg-slate-950 py-5 overflow-hidden">
            <div className={style.bg}>
                <div className="w-full text-white text-center h-20 z-10  relative">
                    <ImgAnimation className="fill-current w-full h-20 "/>
                </div>
                    <div className='m-auto text-center text-white z-10 py-3 relative'>
                        <h3 className="text-3xl font-sans font-bold">KIRIM UCAPAN</h3>
                        <p>Ucapankan sesuatu kepada mempelai !!</p>
                    </div>
                        <form className='relative z-10 bg-white p-2 rounded-md'>
                            <input placeholder='Nama' className='w-full p-2 rounded-md border border-black outline-none' />
                            <input placeholder='Ucapan Anda' className='w-full pb-10 my-5 rounded-md border border-black outline-none' />
                            <button className='px-4 py-2 bg-black rounded-md text-white'>Kirim</button>
                            <div className='py-5 h-80'>
                                <p>Ucapan seseorang</p>
                            </div>
                        </form>
            </div>
        </section>
    )
}