import Image from 'next/image'
import style from './style.module.css'
import ImgMen from '@/assets/img/men.png'

export default function Page4(){
    return(
        <section className={style.bg} >
            <div className='text-center text-white z-10 relative px-5 py-10 font-serif text-xl '>
                <p className='p-2 font-bold '>Assalamualaikum wr. wb.</p>
                <p>Dengan memohon ramat Allah SWT. dan dengan segenap kerendahan hati.
                    perkanankanla kami mengundang Bapak/Ibu Saudara/i untuk hadir di acara pernikahan kami : </p>
            </div>
            <div className='bg-black bg-opacity-15 w-3/4 p-2 m-auto '>
            <div className='bg-black bg-opacity-15 border w-3/4 rounded-xl m-auto'>
                <Image src={ImgMen} alt='img-men' />
            </div>
            </div>
        </section>
    )
}