'use client'
import { useEffect, useState } from 'react';
import style from './style.module.css'
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import Page2 from '../section2/page2';
import { FaEnvelopeOpen } from "react-icons/fa";
import { fetchWeddingData } from '../firebase/initialFirebase';


export default function Hero() {
    const router = useRouter()
    // const {id} = router.query;
    const [weddingData, setWeddingData] = useState(null)
    const [isHidden, setIsHidden] = useState(true)

    const btnElement = () => {

        setIsHidden(false)
        document.body.style.overflow = 'auto'
        setTimeout(() => {
            // const sectionElement = document.querySelector(`.${style.bgSection}`);
            const selectId = document.getElementById('page2');
      
            if (selectId) {
            //   sectionElement.style.height = '100vh';
              selectId.scrollIntoView({ behavior: 'smooth' });  // Scroll setelah delay
            }
          }, 100); 
    }

    useEffect(() => {

        window.scrollTo(0,0)

        const handleResize = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        }
        handleResize()
        // window.addEventListener('resize', handleResize)
        // document.body.style.overflow = 'hidden'

        if(isHidden){
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        const getData = async () => {
            if (id) {
                const data = await fetchWeddingData()
                setWeddingData(data)
                console.log(data);
                

            }
        }
        getData()
        return() => {
            // window.removeEventListener('resize',handleResize);
            document.body.style.overflow = '';

        }

    },[isHidden])
    return(
        <main>
        <section className={`${style.bgSection}  w-full relative overflow-x-hidden flex justify-center items-center overflow-hidden`} id='wrap'>
            <div className="z-10 text-center text-white bg-white bg-opacity-25 font-sans flex-col items-center w-3/4  py-20 rounded-full border-4 border-double  border-white overflow-y-hidden ">
                <p className="tracking-widest italic pb-5 ">Wedding Invitation</p>
                <h2 className="sacramento text-[3rem] font-bold leading-10 py-10 text-orange-950" style={{ textShadow: '1px 1px white' }}>
                    Dilan<br />&<br />Milea</h2>
                <p className="">Kepada Yth.</p>
                <h3 className="py-3 ">Tamu Undangan</h3>
                <button onClick={btnElement} className="bg-slate-950 shadow-md border border-white shadow-slate-300 rounded-md flex justify-center items-center w-1/2 text-white py-1 px-4 mt-4 mx-auto">
                    <FaEnvelopeOpen size={15} className='mr-2' />
                    Open
                </button>
            </div>
        </section>
        <section id='page2'>
            <Page2 />
        </section>
        </main>
    );
}
