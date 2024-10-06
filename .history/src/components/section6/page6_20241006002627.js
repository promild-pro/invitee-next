import { GiLinkedRings } from "react-icons/gi";

import style from './style.module.css'


export default function Page6() {
    return(
        <section className={style.bg}>
            <div className='w-[90%] m-auto bg-black bg-opacity-30 rounded-3xl border-4 border-double  z-10 relative'>
                <GiLinkedRings />
                <h3>AKAD</h3>
            </div>
        </section>
    )
}