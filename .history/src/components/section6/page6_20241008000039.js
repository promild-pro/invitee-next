import { GiLinkedRings } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { GrLocationPin } from "react-icons/gr";
import { FaPeopleRoof, FaGift } from "react-icons/fa6";
import { RiBankCardFill } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa";






import style from './style.module.css'
import Link from "next/link";


export default function Page6() {
    return(
        <section className={style.bg}>
            <div className='w-[90%] m-auto bg-black bg-opacity-30 rounded-3xl border-4 border-double  z-10 relative my-20'>
                <GiLinkedRings  className='w-[7rem] h-[7rem] bg-white border-4 border-black border-double m-auto rounded-full p-8 -mt-14' />
                <h3 className='text-center font-sans text-white text-3xl  my-10'>AKAD NIKAH</h3>
                <div className='flex justify-center items-center italic text-white text-3xl w-[90%] mx-auto'>
                    <p className='w-[30%] text-lg p-1'>Minggu</p>
                    <div className='border-x-2 text-center px-4 w-[30%] '>
                        <p>10</p>
                        <p>Okt</p>
                    </div>
                    <p  className='w-[30%] p-1'>2024</p>
                </div>
                <div className='text-center text-white w-2/3 m-auto my-10'>
                    <p>Pukul : 08.00 -selesai</p>
                    <ImLocation2  className=' text-3xl my-5 m-auto'/>
                    <p className='font-bold my-2'>Bertempat di:</p>
                    <p className=''>Jl. Medokan Asri Utara No.39, Medokan Ayu, Kec. Rungkut, Surabaya, Jawa Timur 60295</p>
                    <Link href='https://maps.app.goo.gl/HTX9SdwgY35qR7ePA' className="bg-black flex justify-center items-center border-white border rounded-lg w-3/4 m-auto p-2 my-10 " >
                        <GrLocationPin />
                        Open Location
                    </Link>
                </div>
            </div>
            <div className='w-[90%] m-auto bg-black bg-opacity-30 rounded-3xl border-4 border-double  z-10 relative my-32'>
                <FaPeopleRoof  className='w-[7rem] h-[7rem] bg-white border-4 border-black border-double m-auto rounded-full p-8 -mt-14' />
                <h3 className='text-center font-sans text-white text-3xl  my-10'>RESEPSI</h3>
                <div className='flex justify-center items-center italic text-white text-3xl w-[90%] mx-auto'>
                    <p className='w-[30%] p-1'>Selasa</p>
                    <div className='border-x-2 text-center px-4 w-[30%] '>
                        <p>12</p>
                        <p>Okt</p>
                    </div>
                    <p  className='w-[30%] p-1'>2024</p>
                </div>
                <div className='text-center text-white w-2/3 m-auto my-10'>
                    <p>Pukul : 08.00 -selesai</p>
                    <ImLocation2  className=' text-3xl my-5 m-auto'/>
                    <p className='font-bold my-2'>Bertempat di:</p>
                    <p className=''>Jl. Medokan Asri Utara No.39, Medokan Ayu, Kec. Rungkut, Surabaya, Jawa Timur 60295</p>
                    <Link href='https://maps.app.goo.gl/HTX9SdwgY35qR7ePA' className="bg-black flex justify-center items-center border-white border rounded-lg w-3/4 m-auto p-2 my-10 " >
                        <GrLocationPin />
                        Open Location
                    </Link>
                </div>
            </div>
            <div className='w-[90%] m-auto bg-black bg-opacity-70 rounded-3xl border-4 border-double  z-10 relative my-32'>
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
                                <p className="text-slate-700">6796586xxxxx a. n. Dilan</p>
                                <button className="flex bg-black p-1 rounded-lg text-white w-full justify-center items-center my-2 m-auto ">
                                    <FaRegCopy />
                                    <p className="pl-2">Salin Nomor</p>
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
                                <p className="text-slate-700">6796586xxxxx a. n. Dilan</p>
                                <button className="flex bg-black p-1 rounded-lg text-white w-full justify-center items-center my-2 m-auto ">
                                    <FaRegCopy />
                                    <p className="pl-2">Salin Nomor</p>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}