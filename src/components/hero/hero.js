'use client'
import { useEffect, useState } from 'react';
import style from './style.module.css'
import { useRouter } from 'next/navigation';
import Page2 from '../section2/page2';
import { FaEnvelopeOpen } from "react-icons/fa";
import { fetchWeddingData } from '../firebase/initialFirebase';
import { GiMusicSpell } from "react-icons/gi";
import { GiSelfLove } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { ImInfo } from "react-icons/im";
import { BiSolidCalendarHeart } from "react-icons/bi";
import { HiMiniGiftTop } from "react-icons/hi2";
import { SlSpeech } from "react-icons/sl";



import Page3 from '../section3/page3';
import Page4 from '../section4/page4';
import Page5 from '../section5/page5';
import Page6 from '../section6/page6';
import Page7 from '../section7/page7';
import Page8 from '../section8/page8';
import PropTypes from 'prop-types';
import BubbleAnimation from '@/animation/buble/page';
import Music from '/public/assets/music/melodi-undangan.mp3'
import AnimateSee from '@/animation/animateSee/page';




export default function Hero({id, name}) {

    // console.log(name);
    
    const [weddingData, setWeddingData] = useState([])
    // console.log(weddingData);
    // const [namaTamu, setNamaTamu] = useState('')
    const [isHidden, setIsHidden] = useState(true)
    const [loading, setLoading] = useState(true)
    const [bgToggle, setBgTogle] = useState('bg-black')
    const [visible, setVisible] = useState(false)


    const togleScroll = (id) => {
        const scrollView = document.getElementById(id)
        if (scrollView) {
            scrollView.scrollIntoView({behavior: 'smooth'})
        }
    }

    // const bgToggle = document.getElementById('bgToggle');
    const toggleMusic = () => {
        const audio = document.getElementById('weddingMusic');
        if (audio.paused) {
          audio.play();
          setBgTogle('bg-black')
        //   bgToggle.style.backgroundColor = 'black'
        } else {
          audio.pause();
          setBgTogle('bg-red-600')
        //   bgToggle.className = 'bg-red'
        // bgToggle.style.backgroundColor = 'red'

        }
      };

    const btnElement = () => {
        toggleMusic()
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
        }
        getData()
        const checkScreen = () => {
            if(window.innerWidth > 400){
                setVisible(!visible)
            }

        } 
        checkScreen()
        window.addEventListener('resize', checkScreen)
        return () => window.removeEventListener('resize', checkScreen)
    },[id])
    useEffect(() => {

        window.scrollTo(0,0)

        const handleResize = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        }
        handleResize()

        if(isHidden){
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

       
        return() => {
            document.body.style.overflow = '';

        }

    },[isHidden])

    
    return(
        <main>
            {visible ? (
                <div className='flex justify-center items-center w-full h-screen'>
                <AnimateSee>
                    <div className='w-2/5 m-auto border-4 border-black border-double rounded-xl text-center '>
                        <h1 className='bg-orange-400 rounded-t-lg text-3xl font-bold p-2'>Warning ...!</h1>
                        <p className='italic p-2'>Mohon Maaf jika mengganggu kenyamanan anda, content ini hanya tersedia untuk tampilan Handphone </p>
                    </div>
                </AnimateSee>
            </div>
            ): 
            (
                <section className='max-w-[400px] m-auto'>
                    {loading ? (
                    <section className='h-screen relative z-30 flex justify-center items-center bg-black w-full m-auto text-xl'>
                        
                        <div className='absolute  m-auto z-30'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="75"
                                height="75"
                                viewBox="0 0 100 100"
                                fill="none"
                                className={style.loader}
                            >
                                <circle cx="50" cy="50" r="45" stroke="#00000" strokeWidth="5" />
                                <circle cx="50" cy="50" r="45" stroke="#3498db" strokeWidth="5" strokeDasharray="100" strokeDashoffset="75" className="animate-loader" />
                            </svg>
                        </div>
                        <div className={style.bubbleContainer}>
                            <div className={style.bubble}></div>
                            <div className={style.bubble}></div>
                            <div className={style.bubble}></div>
                            <div className={style.bubble}></div>
                            <div className={style.bubble}></div>
                        </div>
                    </section>
                ):
                (
                    <section className={`${style.bgSection}  z-30 w-full relative overflow-x-hidden flex justify-center items-center overflow-hidden`} id='wrap'>
                    <div className="expandload z-10 text-center text-white bg-white bg-opacity-15 font-sans flex justify-center items-center w-3/4  py-20 rounded-full border-4 border-double  border-white overflow-y-hidden ">
                        <AnimateSee>
                        <p className="tracking-widest italic pb-5 ">Wedding Invitation</p>
                        <h2 className="sacramento text-[3rem] font-extrabold  p-5 leading-[3.5rem]  text-orange-950" style={{ textShadow: '1px 1px white' }}>
                            {weddingData?.name?.mens}
                            <br />&<br />
                            {weddingData?.name?.grils}
                        </h2>
                        <p className="">Kepada Yth.</p>
                        <h3 className="py-2 text-xl text-white font-bold" style={{ textShadow: '2px 2px black' }}>{name}</h3>
                        <button onClick={btnElement} className="bg-slate-950 shadow-md border border-white shadow-slate-300 rounded-md flex justify-center items-center w-1/2 text-white py-1 px-4 mt-4 mx-auto">
                            <FaEnvelopeOpen size={15} className='mr-2' />
                            Open
                        </button>
                        </AnimateSee>
                    </div>
                    <BubbleAnimation />
                </section>
                )
                }
                <section id='page2' className='relative h-auto'>
                    <button onClick={toggleMusic} 
                        // id='bgToggle'
                        className={`w-10 h-10 rounded-full border border-white flex justify-center items-center fixed bottom-16 left-5 z-20 ${bgToggle}`}>
                        <GiMusicSpell className='fill-current text-white rotate-icon' size={25} />
                    </button>
                    <diV className="fixed -bottom-1 z-20 w-full">
                        <div className=' bg-black border border-white  bg-opacity-15 w-[80%]  m-auto relative flex justify-between grid-cols-5 text-4xl text-white  rounded-t-xl'>
                        <button onClick={() => togleScroll('home')} className='p-2'><ImHome /></button>
                        <button onClick={() => togleScroll('couple')}  className='p-2'><ImInfo /></button>
                        <button onClick={() => togleScroll('date')}  className='p-2'><BiSolidCalendarHeart /></button>
                        <button onClick={() => togleScroll('gift')}  className='p-2'><HiMiniGiftTop /></button>
                        <button onClick={() => togleScroll('ucapan')} className='p-2'><SlSpeech /></button>
                        </div>
                    </diV>
                    
                    <div id='home'>
                        <Page2 data={weddingData}/>
                    </div>
                    <Page3 />
                    <div id='couple'>
                        <Page4 data={weddingData} />
                    </div>
                    <Page5 />
                    <div id='date'>
                        <Page6 data={weddingData} propsid='gift' />
                    </div>
                    <div id='ucapan'>
                        <Page7 data={weddingData} id={id}  />
                    </div>
                    <Page8 data={weddingData} />
                </section>
                </section> 
            )}
        
        <audio id='weddingMusic' className='z-50' loop>
                <source src={Music} type='audio/mp3' />
        </audio>
        
        </main>
    );
}

Hero.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}