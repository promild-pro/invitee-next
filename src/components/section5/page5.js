import AnimatedSection from '@/animation/animateToUp/animate'
import Img from '@/assets/img/animate/flower.svg'
import Img1 from '@/assets/img/animate/flower1.svg'


export default function Page5() {
    return(
        <section className='bg-[#12300efa]' >
            <AnimatedSection>
                <div className='text-center text-white py-20'>
                    <Img className='fill-current w-full h-[10%]'/>
                    <p className='px-10 pt-10 text-sm italic'>
                        {`"Dengan segala kerendahan hati,
                     kami memohon doa restu agar langkah kami menuju hidup baru ini senantiasa diberkahi oleh-Nya.
                      Semoga pernikahan kami menjadi awal dari perjalanan penuh kebahagiaan, kesetiaan, dan cinta yang abadi."`}
                    </p>
                    <Img1 className='fill-current w-2/5 m-auto h-[10%]' />
                </div>
            </AnimatedSection>
        </section>
    )
}