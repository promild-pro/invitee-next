import Image from 'next/image'
import style from './style.module.css'
import ImgMen from '@/assets/img/men.png'
import ImgGrils from '@/assets/img/grils.png'


export default function Page4(){
    return(
        <section className={style.bg} >
            <div className='text-center text-white z-10 relative px-5 py-10 font-serif text-xl '>
                <p className='p-2 font-bold '>Assalamualaikum wr. wb.</p>
                <p>Dengan memohon ramat Allah SWT. dan dengan segenap kerendahan hati.
                    perkanankanla kami mengundang Bapak/Ibu Saudara/i untuk hadir di acara pernikahan kami : </p>
            </div>
            <div className='bg-black bg-opacity-25 w-[90%] p-2 m-auto z-10 relative rounded-lg'>
                <div className='bg-black bg-opacity-20 border-double border-4  rounded-2xl m-auto'>
                    <div className='w-1/2 m-auto rounded-full border-4 border-black border-double bg-white my-5'>
                        <Image src={ImgMen} alt='img-men' className='h-[14rem]' />
                    </div>
                    <div className='text-center text-white  py-5'>
                        <h3 className='sacramento text-5xl font-bold'>Dilan</h3>
                        <p className='leading-4'>Putra Pertama dari<br/> Bapak Lorem dan Ibu Ipsum </p>
                    </div>
                    <div className='w-1/2 m-auto rounded-full border-4 border-black border-double bg-white my-5'>
                        <Image src={ImgGrils} alt='img-men' className='h-[14rem]' />
                    </div>
                    <div className='text-center text-white  py-5'>
                        <h3 className='sacramento text-5xl font-bold'>Dilan</h3>
                        <p className='leading-4'>Putra Pertama dari<br/> Bapak Lorem dan Ibu Ipsum </p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}