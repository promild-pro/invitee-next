'use client'
import ImgAnimation from '@/assets/img/animate/flower.svg'
import style from './style.module.css'
import { database } from '../firebase/initialFirebase'
import { ref, set, onValue } from 'firebase/database'
import { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import AnimatedSection from '@/animation/animateToUp/animate'
import AnimateSee from '@/animation/animateSee/page'

export default function Page7({id}) {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [ucapan, setUcapan] = useState([])
    // console.log(ucapan);
    

    const handleSend = (e) => {
        e.preventDefault()
        const messages = ref(database, `wedings/${id}/ucapan/${Date.now()}`)
        set(messages, {
            name,
            text: message
        })
        setName("")
        setMessage("")
    }
    useEffect(() => {
        const messagesRef = ref(database, `wedings/${id}/ucapan`); // referensi untuk mengambil ucapan
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            const ucapanList = [];

            for (const key in data) {
                ucapanList.push({ id: key, ...data[key] });
            }
            setUcapan(ucapanList);
        });
    }, [id]);
    return(
        <section className="bg-[#12300efa] py-5  overflow-hidden">
            <AnimatedSection>
                <div className={style.bg}>
                    <div className="w-full text-white text-center h-20 z-10  relative">
                        <ImgAnimation className="fill-current w-full h-20 "/>
                    </div>
                    <div className='m-auto text-center text-white z-10 py-5 text-sm relative'>
                        <h3 className="text-3xl font-sans font-bold">KIRIM UCAPAN</h3>
                        <p>Ucapankan sesuatu kepada mempelai !!</p>
                    </div>
                    <AnimateSee>
                    <form 
                        onSubmit={handleSend}
                        className='relative z-10 bg-white p-2   rounded-md rounded-b-2xl ' >
                        <input 
                            placeholder='Nama' 
                            className='w-full p-2 rounded-md border border-black outline-none'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        <input 
                            placeholder='Ucapan Anda' 
                            className='w-full pb-10 my-2 p-2 rounded-md border border-black outline-none'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            />
                        <button 
                            className={`px-2 py-1  bg-black rounded-md text-white ${message === '' || name === '' ? 'opacity-70' : 'opacity-100'}`}
                            // onClick={handleSend}
                            disabled ={message === '' || name === '' ? true : false}
                            type='submit'
                            >
                            Kirim
                        </button>
                        <div className='my-5 mx-2 h-[17rem]  border-2 border-double rounded-md p-1  overflow-y-scroll'>
                            {/* <p>Ucapan seseorang</p> */}
                            {ucapan.map((msg) => (
                                <p key={msg.id} className='py-1 border-b-2 '>
                                    <strong>{msg.name}:</strong> {msg.text}
                                </p>
                            ))}
                        </div>
                    </form>
                    </AnimateSee>
                </div>
            </AnimatedSection>
        </section>
    )
}
Page7.propTypes = {
    id: PropTypes.string
}