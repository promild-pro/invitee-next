'use client'
import Hero from "@/components/hero/hero";
import { useParams } from "next/navigation";
// import { useParams } from 'next/navigation';

export default function IdPage() {
    const params = useParams()
  const  id  = useParams()// Tangkap ID dari URL
    // console.log('id Params',id);
    // if (params) {
    //     const { id } = params;  // Tangkap ID dari URL
    //     console.log('id Params:', id);
    //   }
  return (
    <section>
      <Hero id={id} />  {/* Kirim ID ke komponen Hero */}
    </section>
  );
}
