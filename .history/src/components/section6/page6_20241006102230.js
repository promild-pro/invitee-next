import { GiLinkedRings } from "react-icons/gi";

import style from './style.module.css'


export default function Page6() {
    return(
        <section className={style.bg}>
            <div className='w-[90%] m-auto bg-black bg-opacity-30 rounded-3xl border-4 border-double  z-10 relative'>
                <GiLinkedRings  className='w-[7rem] h-[7rem] bg-white border-4 border-black border-double m-auto rounded-full p-8 -mt-14' />
                <h3 className='text-center font-sans text-white text-3xl  my-10'>AKAD NIKAH</h3>
                <div className='flex justify-around text-white text-2xl'>
                    <p>Kamis</p>
                    <div className='border-x-2 text-center '>
                        <p>10</p>
                        <p>Oktober</p>
                    </div>
                    <p>2024</p>
                </div>
            </div>
        </section>
    )
}