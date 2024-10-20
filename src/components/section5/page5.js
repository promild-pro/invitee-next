import AnimatedSection from '@/animation/animateToUp/animate'
import Img from '@/assets/img/animate/flower.svg'
import Img1 from '@/assets/img/animate/flower1.svg'


export default function Page5() {
    return(
        <section className='bg-slate-950' >
            <AnimatedSection>
                <div className='text-center text-white py-20'>
                    <Img className='fill-current w-full h-[10%]'/>
                    <p className='px-10 pt-10 text-sm italic'>{`"Semoga cinta yang kalian bangun hari ini senantiasa tumbuh,
                    mengakar kuat, dan membawa kedamaian serta kebahagiaan di setiap
                    langkah perjalanan hidup bersama."`}
                    </p>
                    <Img1 className='fill-current w-2/5 m-auto h-[10%]' />
                </div>
            </AnimatedSection>
        </section>
    )
}