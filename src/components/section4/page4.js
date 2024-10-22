import Image from 'next/image'
import style from './style.module.css'
import ImgMen from '@/assets/img/men.png'
import ImgGrils from '@/assets/img/grils.png'
import { GrInstagram } from "react-icons/gr";
import { RiFacebookCircleLine } from "react-icons/ri";

import Link from 'next/link';
import PropTypes from 'prop-types';
import AnimateSee from '@/animation/animateSee/page';
import AnimatedSection from '@/animation/animateToUp/animate';



export default function Page4({data}){
    
    return(
        <section className={style.bg} >
            <AnimatedSection>
                <div className='text-center text-white z-10 relative px-5 py-10 font-serif text-sm '>
                    <p className='p-2 font-bold text-xl '>Assalamualaikum wr. wb.</p>
                    <p>Dengan memohon ramat Allah SWT. dan dengan segenap kerendahan hati.
                        perkanankanla kami mengundang Bapak/Ibu Saudara/i untuk hadir di acara pernikahan kami : </p>
                </div>
            </AnimatedSection>
            <AnimatedSection>
                <div className='bg-black bg-opacity-25 w-[90%] p-2  m-auto z-10 relative rounded-3xl'>
                    <div className='bg-black bg-opacity-20 border-double border-4  rounded-3xl m-auto'>
                        {/* <div> */}
                            <AnimateSee>
                                <div className='w-56 h-56 overflow-hidden m-auto rounded-full border-4 border-black border-double bg-white my-10 '>
                                    <Image src={ImgMen} alt='img-men' className='' />
                                </div>
                                <div className='text-center text-white  py-5'>
                                    <h3 className='sacramento text-3xl font-bold'>{data?.namaLengkap?.mens}</h3>
                                    <p className='leading-4 text-sm'>Putra dari<br/> Bapak {data?.parent?.mens?.parentMens} dan Ibu {data?.parent?.mens?.parentGrils}</p>
                                </div>
                                
                                <div className='w-10 text-white flex justify-around m-auto'>
                                    <Link href='' className=' ' >
                                        <GrInstagram className=' text-sm bg-white bg-opacity-15' />
                                    </Link>
                                    <Link href='' className=' ' >
                                        <RiFacebookCircleLine className=' text-sm border  rounded-md bg-white bg-opacity-15 ' />
                                    </Link>
                                </div>
                            </AnimateSee>
                        {/* </div> */}
                        <AnimatedSection>
                            <div className='flex justify-between items-center text-white w-1/2 m-auto my-20'>
                                <div className='border w-20 border-white'/>
                                <h1 className='sacramento font-bold text-7xl mx-2'>&</h1>
                                <div className='border w-20 border-white'/>
                            </div>
                        </AnimatedSection>   
                        <AnimateSee>
                        <div className='pb-10'>
                            <div className='w-56 h-56 overflow-hidden m-auto rounded-full border-4 border-black border-double bg-white my-10'>
                                <Image src={ImgGrils} alt='img-men' className='' />
                            </div>
                            <div className='text-center text-white  py-5'>
                                <h3 className='sacramento text-3xl font-bold'>{data?.namaLengkap?.grils}</h3>
                                <p className='leading-4 text-sm'>Putri dari<br/> Bapak {data?.parent?.grils?.parentMens} dan Ibu {data?.parent?.grils?.parentGrils} </p>
                            </div>
                            <div className='w-10 text-white flex justify-around m-auto'>
                                <Link href='' className=' ' >
                                    <GrInstagram className=' text-sm bg-white bg-opacity-15' />
                                </Link>
                                <Link href='' className=' ' >
                                    <RiFacebookCircleLine className=' text-sm border  rounded-md bg-white bg-opacity-15 ' />
                                </Link>
                            </div>
                        </div>
                        </AnimateSee> 
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
}
Page4.propTypes ={
    data:PropTypes.string.isRequired
}