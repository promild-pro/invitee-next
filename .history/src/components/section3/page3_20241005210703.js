import Image from "next/image";
import ImgAnimation from "@/assets/img/animate/flower.svg"
import ImgAnimation2 from "@/assets/img/animate/flower1.svg"



export default function Page3 (){
    return(
        <section className='bg-slate-900'>
            {/* <svg></svg> */}
            <div className="text-white ">

                <ImgAnimation className='fill-current w-full h-[10%]'  />
            </div>
            <div className='text-center px-5 my-10 text-white text-lg font-sans '>
                <p>{`"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri,
                 supaya kamu merasa tenteram kepadanya, 
                 dan Dia menjadikan di antaramu rasa kasih dan sayang.
                  Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir."`} 
                </p>
            </div>
            <div className='text-white'>
                <ImgAnimation2  className='fill-current w-full h-[10%]' />
            </div>
        </section>
    )
}