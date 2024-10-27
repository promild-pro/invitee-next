import Image from "next/image";
import ImgCouple from '@/assets/img/couple-image.png'
import { FaWhatsapp } from "react-icons/fa";
import AnimateSee from "@/animation/animateSee/page";
import PropTypes from "prop-types";



export default function Page8({data}) {
    return(
        <section className="bg-[#12300efa] py-20">
            <AnimateSee>
                <div className="w-10/12 rounded-xl m-auto border-4 border-double  ">
                    <Image src={ImgCouple} alt='' />
                </div>
                <div className='text-white text-center py-5 px-7 italic  font-sans text-sm '>
                    <p>
                        Merupakan suatu kebahagiaan dan kehormatan bagi kami,
                        apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan doa restu kepada kami.<br/>
                        Atas do`a dan restunya kami ucapkan terima kasih  
                    </p>
                    <p className='font-bold'>Wassalamu`alaikum wr. wb.</p>
                    <h3 className="italic font-bold pt-10">Dari Kami yang Berbahagia :</h3>
                    <h3 className='sacramento text-3xl font-bold py-5'>{data?.name?.mens} & {data?.name?.grils}</h3>
                </div>
            </AnimateSee>
                <div className='pt-20 pb-10 text-white text-center m-auto'>
                    <FaWhatsapp  className='fill-current text-center text-2xl m-auto animate-bounce' />
                </div>
        </section>
    )
}
Page8.propTypes = {
    data: PropTypes.string.isRequired
}