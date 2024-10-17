'use client'
import { useEffect, useState } from 'react';
import style from './style.module.css'
import { useRouter } from 'next/navigation';
// import PropType from 'prop-types' 
import PropTypes from 'prop-types';

export default function Hero({handleClickProps}) {
    const [isHidden, setIsHidden] = useState(true)
    const router = useRouter()

    const Btn = () =>{
        // e.preventDefault()
        setIsHidden(false)
        // document.getElementsByClassName('bg.Section'). = '100vh'
        const sectionElement = document.querySelector(`.${style.bgSection} `);
        if (sectionElement) {
            sectionElement.style.height = '100vh'
        }
        handleClickProps();


        // router.push('/page2.js')

    }
    useEffect(() => {

        const handleResize = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        }
        handleResize()
        window.scrollTo(0,0)
        window.addEventListener('resize', handleResize)

        if(isHidden){
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return() => {
            // window.scro
            window.removeEventListener('resize',handleResize);
            document.body.style.overflow = '';

        }
        // return () => 
    },[isHidden])
    return(
    <section className={`${style.bgSection}  w-full relative overflow-x-hidden flex justify-center items-center overflow-hidden`} id='wrap'>
        <div className="z-10 text-center text-white bg-white bg-opacity-25 font-sans flex-col items-center w-3/4  py-20 rounded-full border-4 border-double  border-white overflow-y-hidden ">
            <p className="tracking-widest italic pb-5 ">Wedding Invitation</p>
            <h2 className="sacramento text-[3rem] font-bold leading-10 py-10 text-orange-950" style={{textShadow:'1px 1px white'}}>Dilan <br/>&<br/>Milea</h2>
            <p className="">Kepada Yth.</p>
            <h3 className="py-3 ">Tamu Undangan</h3>
            <button onClick={Btn}  className="bg-black rounded-md text-white py-2 px-4 mt-4">Buka Undangan</button>
        </div>
    </section>
    );
}
Hero.propTypes = {
    handleClickProps: PropTypes.func.isRequired
}