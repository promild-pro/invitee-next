'use client'
import { GiLinkedRings } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { GrLocationPin } from "react-icons/gr";
import { FaPeopleRoof, FaGift } from "react-icons/fa6";
import { RiBankCardFill } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa";
import style from './style.module.css'
import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import AnimatedSection from "@/animation/animateToUp/animate";
import AnimateSee from "@/animation/animateSee/page";


export default function Page6({data}) {
    const [copied, setCopied] = useState(false)
    const [copied2, setCopied2] = useState(false)
    const rekening1 = data?.gift?.noBank
    const rekening2 = data?.gift?.dana

    const copyRekening1 = () => {
        navigator.clipboard.writeText(rekening1)
        .then(()=> {
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 3000);
        }).catch(err => {
            console.log('coppied error',err);
            
        })
    }
    const copyRekening2 = () => {
        navigator.clipboard.writeText(rekening2)
        .then(() => {
            setCopied2(true)
            setTimeout(() => {
                setCopied2(false)
            }, 3000);
        }).catch(err => {
            console.log('copied error', err);
            
        })
    }

    return(
        <section className={style.bg}>
            <AnimatedSection>
            <div className='w-[90%] m-auto bg-black bg-opacity-30 rounded-3xl border-4 border-double  z-10 relative my-20'>
                <AnimateSee>
                <GiLinkedRings  className='w-[7rem] h-[7rem] bg-white border-4 border-black border-double m-auto rounded-full p-8 -mt-14' />
                <h3 className='text-center font-sans text-white text-3xl  my-10'>AKAD NIKAH</h3>
                <div className='flex justify-center items-center italic text-white text-3xl w-[90%] mx-auto text-center'>
                    {/* Hari */}
                    <p className='w-[30%] text-xl p-1'>{data?.date?.akad?.day}</p>
                    <div className='border-x-2 text-center px-4 w-[30%] '>
                        {/* Tanggal */}
                        <p>{data?.date?.akad?.date}</p>
                        {/* Bulan  */}
                        <p className='text-xl'>{data?.date?.akad?.mount}</p>
                    </div>
                    {/* Tahun  */}
                    <p  className='w-[30%] p-1 text-xl '>{data?.date?.years}</p>
                </div>
                <div className='text-center text-white text-sm w-2/3 m-auto my-10'>
                    <p>Pukul : {data?.date?.akad?.time} -selesai</p>
                    <ImLocation2  className=' my-5 m-auto'/>
                    <p className='font-bold my-2'>Bertempat di:</p>
                    <p className='text-sm'>{data?.location?.akad?.location}</p>
                    <Link href={`${data?.location?.akad?.link}`} className="bg-black flex justify-center items-center border-white border rounded-lg w-3/4 m-auto p-2 my-10 " >
                        <GrLocationPin />
                        Open Location
                    </Link>
                </div>
                </AnimateSee>
            </div>
            </AnimatedSection>
            <AnimatedSection>
            <div className='w-[90%] m-auto bg-black bg-opacity-30 rounded-3xl border-4 border-double  z-10 relative my-32'>
                <AnimateSee>
                <FaPeopleRoof  className='w-[7rem] h-[7rem] bg-white border-4 border-black border-double m-auto rounded-full p-8 -mt-14' />
                <h3 className='text-center font-sans text-white text-3xl  my-10'>RESEPSI</h3>
                <div className='flex justify-center items-center italic text-white text-3xl w-[90%] mx-auto text-center'>
                    <p className='w-[30%] text-xl p-1'>{data?.date?.resepsi?.day}</p>
                    <div className='border-x-2 text-center px-4 w-[30%] '>
                        <p>{data?.date?.resepsi?.date}</p>
                        <p className='text-xl'>{data?.date?.resepsi?.mount}</p>
                    </div>
                    <p  className='w-[30%] p-1 text-xl'>{data?.date?.years}</p>
                </div>
                <div className='text-center text-white text-sm w-2/3 m-auto my-10'>
                    <p>Pukul : {data?.date?.resepsi?.time} -selesai</p>
                    <ImLocation2  className='my-5 m-auto'/>
                    <p className='font-bold my-2'>Bertempat di:</p>
                    <p className=''>{data?.location?.resepsi?.location}</p>
                    <Link href={`${data?.location?.resepsi?.link}`}className="bg-black flex justify-center items-center border-white border rounded-lg w-3/4 m-auto p-2 my-10 " >
                        <GrLocationPin />
                        Open Location
                    </Link>
                </div>
                </AnimateSee>
            </div>
            </AnimatedSection>
            <AnimatedSection>
            <div className='w-[90%] m-auto bg-black bg-opacity-70 rounded-3xl border-4 border-double  z-10 relative my-32'>
                <AnimateSee>
                <div  className='w-[7rem] h-[7rem] bg-white border-4 border-black border-double m-auto rounded-full text-lg p-8 -mt-14'>
                <FaGift className='text-3xl m-auto' />
                </div>
                <h3 className='text-center font-sans text-white text-3xl  my-10'>WEDDING GIFT</h3>
                
                <div className='text-center text-white w-2/3 m-auto my-10'>
                    <p>Bagi Keluarga dan Sahabat yang ingin menirimkan hadiah, silakan menirimkannya lewat :</p>
                </div>
                    <div className='w-[90%] m-auto text-white p-2' >
                        <div className="text-blue-700 bg-white rounded-xl ">
                            <div className="flex text-4xl p-5 font-bold italic">
                                <RiBankCardFill />
                                <h3 className="pl-2">BCA</h3>
                            </div>
                            <div className="m-auto w-[90%] pb-5">
                                <p className="text-slate-700 text-sm">{rekening1} a. n. {data?.name?.mens}</p>
                                <button 
                                className="flex bg-black p-1 rounded-lg text-white w-full justify-center items-center my-2 m-auto "
                                onClick={copyRekening1}
                                >
                                    <FaRegCopy />
                                    <p className="pl-2">{copied ? 'succes' : 'copy'}</p>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='w-[90%] m-auto text-white mb-2 p-2' >
                        <div className="text-blue-700 bg-white rounded-xl ">
                            <div className="flex text-4xl p-5 font-bold italic">
                                <RiBankCardFill />
                                <h3 className="pl-2">DANA</h3>
                            </div>
                            <div className="m-auto w-[90%] pb-5">
                                <p className="text-slate-700 text-sm">{rekening2} a. n. {data?.name?.grils}</p>
                                <button 
                                className="flex bg-black p-1 rounded-lg text-white w-full justify-center items-center my-2 m-auto "
                                onClick={copyRekening2}
                                >
                                    <FaRegCopy />
                                    <p className="pl-2">{copied2? 'succes' : 'copy'}</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    </AnimateSee>
            </div>
            </AnimatedSection>
        </section>
    )
}
Page6.propTypes = {
    data: PropTypes.string.isRequired
}