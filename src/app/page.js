// import Image from "next/image";
// 'use client'
// import Hero from "@/components/hero/hero";
import Page2 from "@/components/section2/page2";
import Page3 from "@/components/section3/page3";
import Page4 from "@/components/section4/page4";
import Page5 from "@/components/section5/page5";
import Page6 from "@/components/section6/page6";
import Page7 from "@/components/section7/page7";
import Page8 from "@/components/section8/page8";

export default function Home() {

  return (
    <section className="">
      <div>
        <Page2 />
      </div>
      <div>
        <Page3 />
      </div>
      <div>
        <Page4 />
      </div>
      <div>
        <Page5 />
      </div>
      <div>
        <Page6 />
      </div>
      <div>
        <Page7 />
      </div>
      <Page8 />
    </section>
  );
}

// function HeroProps(){
//   const handleClick = () => {
//     const sectionElement = document.getElementById('page2')
//     if (sectionElement) {
//       sectionElement.scrollIntoView({behavior: 'smooth'})
//     }
//   }
//     return(
//       <Hero handleClickProps={handleClick} />
//     )
// }