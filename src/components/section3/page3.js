import AnimatedSection from "@/animation/animateToUp/animate"
import Animate from "@/animation/animateToUp/animate"
import ImgAnimation from "@/assets/img/animate/flower.svg"
import ImgAnimation2 from "@/assets/img/animate/flower1.svg"



export default function Page3 (){
    return(
        <section className='bg-slate-950'>
            <AnimatedSection>
            <div className="text-white pt-10">
                <ImgAnimation className='fill-current w-full h-[10%]'  />
            </div>
            <AnimatedSection>
            <div className='text-center px-5 mt-20 text-white text-sm font-sans italic '>
                <p>{`"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri,
                 supaya kamu merasa tenteram kepadanya, 
                 dan Dia menjadikan di antaramu rasa kasih dan sayang.
                  Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."`} 
                </p>
                <p>{`(Qs. Arrum : 21)`}</p>
            </div>
            </AnimatedSection>
            <div className='text-white w-2/5 pb-20 m-auto'>
                <ImgAnimation2  className='fill-current w-full h-[10%]' />
            </div>
            </AnimatedSection>
        </section>
    )
}