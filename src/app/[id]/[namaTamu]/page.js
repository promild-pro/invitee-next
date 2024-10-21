'use client'
import Hero from "@/components/hero/hero";
import Page7 from "@/components/section7/page7";
import { useParams } from "next/navigation";

export default function IdPage() {
  const  idUrl  = useParams()// Tangkap ID dari URL
  const Tamu = useParams()
  const id = idUrl?.id
  const namaTamu = Tamu?.namaTamu

  return (
    <section>
      <Hero id={id} name={namaTamu} />  {/* Kirim ID ke komponen Hero */}
      <Page7 id={id} />
    </section>
  );
}
