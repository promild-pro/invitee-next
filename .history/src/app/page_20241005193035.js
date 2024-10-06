// import Image from "next/image";
import Hero from "@/components/hero/hero";
import Page2 from "@/components/section2/section2";
import Page3 from "@/components/section3/page3";

export default function Home() {
  return (
    <section className="">
      <div>
        <Hero />
      </div>
      <div>
        <Page2 />
      </div>
      <Page3 />
    </section>
  );
}
