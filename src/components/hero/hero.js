'use client'
import { useEffect, useState } from 'react';
import style from './style.module.css'
import { useRouter } from 'next/navigation';
import Page2 from '../section2/page2';
import { FaEnvelopeOpen } from "react-icons/fa";
import { fetchWeddingData } from '../firebase/initialFirebase';
import Page3 from '../section3/page3';
import Page4 from '../section4/page4';
import Page5 from '../section5/page5';
import Page6 from '../section6/page6';
import Page7 from '../section7/page7';
import Page8 from '../section8/page8';
import { GiSelfLove } from "react-icons/gi";
import PropTypes from 'prop-types';




export default function Hero({id, name}) {

    console.log(name);
    
    const [weddingData, setWeddingData] = useState([])
    // console.log(weddingData);
    const [namaTamu, setNamaTamu] = useState('')
    const [isHidden, setIsHidden] = useState(true)
    const [loading, setLoading] = useState(true)

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
        const getData = async () => {
            const data = await fetchWeddingData(id)
            setWeddingData(data)
            setLoading(false)
            // if (data) {
            //     console.log("Data berhasil diambil:", data.Name.mens);
            // } else {
            //     console.log("Data tidak ditemukan");
            // }
        }
        getData()
        if (name) {
            // const Tamu = name.namaTamu
            setNamaTamu(name)
        } else {
            setNamaTamu('Nama Tamu')
        }
    },[id])
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

       
        return() => {
            // window.removeEventListener('resize',handleResize);
            document.body.style.overflow = '';

        }

    },[isHidden])
    return(
        <main>
        {loading ? (
            <section className='h-screen z-30 flex justify-center items-center bg-black w-full m-auto text-xl'>
                {/* <h1>loading...!</h1> */}
                <div className='text-blue-700 '>
                    <GiSelfLove className='text-9xl animate-bounce' />
                    <h1 className='text-center text-3xl flex items-center justify-center'>Wait... 
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 100 100"
                        fill="none"
                        className={style.loader}
                    >
                        <circle cx="50" cy="50" r="45" stroke="#f3f3f3" strokeWidth="5" />
                        <circle cx="50" cy="50" r="45" stroke="#3498db" strokeWidth="5" strokeDasharray="100" strokeDashoffset="75" className="animate-loader" />
                    </svg> */}
                     </h1>
                {/* <div className="flex justify-center items-center h-screen"> */}
                    
                {/* </div> */}
                </div>
            </section>
        ):
        (
            <section className={`${style.bgSection}  w-full relative overflow-x-hidden flex justify-center items-center overflow-hidden`} id='wrap'>
            <div className="z-10 text-center text-white bg-white bg-opacity-25 font-sans flex-col items-center w-3/4  py-20 rounded-full border-4 border-double  border-white overflow-y-hidden ">
                <p className="tracking-widest italic pb-5 ">Wedding Invitation</p>
                <h2 className="sacramento text-[3rem] font-extrabold leading-10 py-10 text-orange-950" style={{ textShadow: '1px 1px white' }}>
                    {weddingData?.name?.mens}
                    <br />&<br />
                    {weddingData?.name?.grils}
                </h2>
                <p className="">Kepada Yth.</p>
                <h3 className="py-2 text-xl text-white font-bold" style={{ textShadow: '2px 2px black' }}>{namaTamu}</h3>
                <button onClick={btnElement} className="bg-slate-950 shadow-md border border-white shadow-slate-300 rounded-md flex justify-center items-center w-1/2 text-white py-1 px-4 mt-4 mx-auto">
                    <FaEnvelopeOpen size={15} className='mr-2' />
                    Open
                </button>
            </div>
        </section>
        )
        }
        <section id='page2'>
            <Page2 data={weddingData}/>
            <Page3 />
            <Page4 data={weddingData} />
            <Page5 />
            <Page6 data={weddingData} />
            <Page7 data={weddingData} />
            <Page8 />
        </section>
        
        </main>
    );
}

Hero.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}