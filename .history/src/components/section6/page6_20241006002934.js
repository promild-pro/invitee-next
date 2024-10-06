import { GiLinkedRings } from "react-icons/gi";

import style from './style.module.css'


export default function Page6() {
    return(
        <section className={style.bg}>
            <div className='w-[90%] m-auto bg-black bg-opacity-30 rounded-3xl border-4 border-double  z-10 relative'>
                <GiLinkedRings  className='w-[7rem] h-[7rem] bg-white border-4 border-black border-double m-auto rounded-full p-8 -mt-20' />
                <h3>AKAD</h3>
            </div>
        </section>
    )
}