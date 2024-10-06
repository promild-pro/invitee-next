import { GiLinkedRings } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";


import style from './style.module.css'


export default function Page6() {
    return(
        <section className={style.bg}>
            <div className='w-[90%] m-auto bg-black bg-opacity-30 rounded-3xl border-4 border-double  z-10 relative'>
                <GiLinkedRings  className='w-[7rem] h-[7rem] bg-white border-4 border-black border-double m-auto rounded-full p-8 -mt-14' />
                <h3 className='text-center font-sans text-white text-3xl  my-10'>AKAD NIKAH</h3>
                <div className='flex justify-center items-center italic text-white text-3xl w-[90%] mx-auto'>
                    <p className='w-[30%] p-1'>Minggu</p>
                    <div className='border-x-2 text-center px-4 w-[30%] '>
                        <p>10</p>
                        <p>Okt</p>
                    </div>
                    <p  className='w-[30%] p-1'>2024</p>
                </div>
                <div className='text-center text-white w-2/3 m-auto my-10'>
                    <p>Pukul : 08.00 -selesai</p>
                    <ImLocation2  className=' text-3xl my-5 m-auto'/>
                </div>
            </div>
        </section>
    )
}